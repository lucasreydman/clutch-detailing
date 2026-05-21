"""Verify that clicking a per-service Book button opens the correct Calendly event."""
from playwright.sync_api import sync_playwright

URL = "https://clutch-detailing.vercel.app"

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_context(viewport={"width": 1440, "height": 900}).new_page()
    page.goto(URL, wait_until="networkidle")

    # Find a "Car" button in the services grid (Standard Wash card) and click
    page.evaluate("window.scrollTo(0, 1200)")  # scroll to services section
    page.wait_for_timeout(500)
    page.screenshot(path=".tmp_test/services_grid.png", full_page=False)

    # The Standard Wash card should have a "Car" button now
    car_btn = page.get_by_role("button", name="Car", exact=True).first
    car_btn.click()
    page.wait_for_selector(".calendly-popup", timeout=10000)
    page.wait_for_timeout(2500)

    iframe_src = page.evaluate("""() => {
        const f = document.querySelector('.calendly-popup iframe');
        return f ? f.src : null;
    }""")
    print(f"Popup iframe src after clicking 'Car':\n  {iframe_src}")
    if iframe_src and "car-wash" in iframe_src:
        print("PASS: deep-linked to car-wash event")
    else:
        print("FAIL: not the expected event")

    page.screenshot(path=".tmp_test/popup_car_wash.png", full_page=False)

    # Close
    close = page.locator(".calendly-popup-close").first
    close.click()
    page.wait_for_timeout(800)

    # Now test the /services pricing table
    page.goto(f"{URL}/services", wait_until="networkidle")
    page.wait_for_timeout(500)
    page.screenshot(path=".tmp_test/services_page.png", full_page=True)

    # Click "Book Car · $135" on interior standard row
    interior_btn = page.get_by_role("button", name="Book Car · $135").first
    interior_btn.click()
    page.wait_for_selector(".calendly-popup", timeout=10000)
    page.wait_for_timeout(2500)
    iframe_src2 = page.evaluate("""() => {
        const f = document.querySelector('.calendly-popup iframe');
        return f ? f.src : null;
    }""")
    print(f"\nPopup iframe src after clicking 'Book Car · $135':\n  {iframe_src2}")
    if iframe_src2 and "interior-standard-1" in iframe_src2:
        print("PASS: deep-linked to interior-standard-1 event")
    else:
        print("FAIL: not the expected event")

    browser.close()
