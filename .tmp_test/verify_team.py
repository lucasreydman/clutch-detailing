"""Screenshot team page on mobile to verify phone buttons render."""
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    ctx = browser.new_context(
        viewport={"width": 390, "height": 844},
        is_mobile=True,
        has_touch=True,
    )
    page = ctx.new_page()
    page.goto("https://clutch-detailing.vercel.app/team", wait_until="networkidle")
    page.wait_for_timeout(800)
    page.screenshot(path=".tmp_test/team_mobile.png", full_page=True)

    # Verify tel: hrefs
    hrefs = page.evaluate("""() => {
        return Array.from(document.querySelectorAll('a[href^="tel:"]')).map(a => ({
            href: a.href,
            text: a.textContent.trim(),
            h: Math.round(a.getBoundingClientRect().height),
        }));
    }""")
    print(f"Tel links found: {len(hrefs)}")
    for h in hrefs:
        print(f"  {h['href']} | {h['text']} | h={h['h']}px")
    browser.close()
