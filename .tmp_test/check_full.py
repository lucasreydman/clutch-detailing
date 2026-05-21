"""Verify Footer, /about, /book look correct after cleanup."""
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_context(viewport={"width": 1280, "height": 900}).new_page()

    # Footer (on home)
    page.goto("https://clutch-detailing.vercel.app", wait_until="networkidle")
    page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
    page.wait_for_timeout(800)
    page.screenshot(path=".tmp_test/footer_after.png", full_page=False)

    # /about
    page.goto("https://clutch-detailing.vercel.app/about", wait_until="networkidle")
    page.wait_for_timeout(800)
    page.screenshot(path=".tmp_test/about_after.png", full_page=False)

    # /book
    page.goto("https://clutch-detailing.vercel.app/book", wait_until="networkidle")
    page.wait_for_timeout(1500)
    page.screenshot(path=".tmp_test/book_after.png", full_page=True)

    # Verify the removed blocks are gone
    home = page.context.new_page()
    home.goto("https://clutch-detailing.vercel.app", wait_until="networkidle")
    footer_text = home.locator("footer").text_content()

    about_check = page.context.new_page()
    about_check.goto("https://clutch-detailing.vercel.app/about", wait_until="networkidle")
    about_text = about_check.locator("body").text_content()

    book_check = page.context.new_page()
    book_check.goto("https://clutch-detailing.vercel.app/book", wait_until="networkidle")
    book_text = book_check.locator("body").text_content()

    checks = [
        ("Footer Visit list (Lawrence Park as standalone item)", "Lawrence Park\nHoggs Hollow" not in (footer_text or "")),
        ("/about At a glance", "At a glance" not in (about_text or "")),
        ("/about Founded/Method/Products", "Waterless / low-water wash" not in (about_text or "")),
        ("/book Service area card", "Service area" not in (book_text or "")),
        ("/book Reach us card", "Reach us" not in (book_text or "")),
    ]
    print("\nRemoval checks:")
    for name, ok in checks:
        print(f"  {'OK' if ok else 'STILL PRESENT'}: {name}")

    browser.close()
