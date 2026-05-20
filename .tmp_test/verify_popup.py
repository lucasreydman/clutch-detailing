"""
Drive the live site, click 'Book your detail', verify the Calendly popup
is centered and full-size (not the previous top-left cut-off bug).
"""
from playwright.sync_api import sync_playwright

URL = "https://clutch-detailing.vercel.app"

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    context = browser.new_context(viewport={"width": 1440, "height": 900})
    page = context.new_page()
    page.goto(URL, wait_until="networkidle")
    page.screenshot(path=".tmp_test/01_home.png", full_page=False)

    # Click the visible "Book your detail" button in the hero
    book_btn = page.get_by_role("button", name="Book your detail").first
    book_btn.click()
    page.wait_for_selector(".calendly-popup-content", timeout=10000)
    page.wait_for_timeout(1500)  # let iframe load
    page.screenshot(path=".tmp_test/02_popup.png", full_page=False)

    # Measure the popup
    box = page.locator(".calendly-popup-content").bounding_box()
    overlay = page.locator(".calendly-overlay").bounding_box()
    iframe_box = page.locator(".calendly-popup-content iframe").bounding_box()

    print("VIEWPORT  : 1440 x 900")
    print(f"OVERLAY   : {overlay}")
    print(f"POPUP BOX : {box}")
    print(f"IFRAME BOX: {iframe_box}")

    # Centering check
    if box:
        center_x = box["x"] + box["width"] / 2
        center_y = box["y"] + box["height"] / 2
        viewport_cx = 1440 / 2
        viewport_cy = 900 / 2
        print(f"POPUP CENTER     : ({center_x:.0f}, {center_y:.0f})")
        print(f"VIEWPORT CENTER  : ({viewport_cx:.0f}, {viewport_cy:.0f})")
        x_off = abs(center_x - viewport_cx)
        y_off = abs(center_y - viewport_cy)
        print(f"OFFSET           : x={x_off:.0f}px, y={y_off:.0f}px")
        if x_off < 20 and y_off < 20:
            print("PASS: popup is centered (within 20px)")
        else:
            print("FAIL: popup is OFF-CENTER")

        if box["width"] > 1000 and box["height"] > 700:
            print(f"PASS: popup is full-size ({box['width']:.0f}x{box['height']:.0f})")
        else:
            print(f"FAIL: popup too small ({box['width']:.0f}x{box['height']:.0f})")

    # Mobile check
    page.close()
    mobile = context.new_page()
    mobile.set_viewport_size({"width": 390, "height": 844})
    mobile.goto(URL, wait_until="networkidle")
    mobile.screenshot(path=".tmp_test/03_home_mobile.png", full_page=False)
    # Mobile nav book button should be visible
    try:
        mobile_book = mobile.get_by_role("button", name="Book").first
        mobile_book.click()
        mobile.wait_for_selector(".calendly-popup-content", timeout=10000)
        mobile.wait_for_timeout(1500)
        mobile.screenshot(path=".tmp_test/04_popup_mobile.png", full_page=False)
        mbox = mobile.locator(".calendly-popup-content").bounding_box()
        print(f"\nMOBILE POPUP: {mbox}")
        if mbox and mbox["width"] > 350 and mbox["height"] > 750:
            print("PASS: mobile popup is full-size")
        else:
            print("FAIL: mobile popup wrong size")
    except Exception as e:
        print(f"Mobile test issue: {e}")

    # /book page inline embed
    book_page = context.new_page()
    book_page.goto(f"{URL}/book", wait_until="networkidle")
    book_page.wait_for_timeout(2000)
    book_page.screenshot(path=".tmp_test/05_book_page.png", full_page=True)
    inline = book_page.locator(".calendly-inline-widget").bounding_box()
    print(f"\nINLINE EMBED: {inline}")
    if inline and inline["height"] >= 700:
        print("PASS: inline embed is full height")
    else:
        print("FAIL: inline embed too small")

    browser.close()
