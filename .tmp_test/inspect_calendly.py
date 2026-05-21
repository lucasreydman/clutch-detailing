"""Inspect what event types are listed on the Calendly account page."""
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_context(viewport={"width": 1280, "height": 900}).new_page()
    page.goto("https://calendly.com/clutchdetailinglp", wait_until="networkidle")
    page.wait_for_timeout(2000)
    page.screenshot(path=".tmp_test/calendly_events.png", full_page=True)

    # Try to find event cards and their links
    events = page.evaluate("""() => {
        const links = Array.from(document.querySelectorAll('a[href*="calendly.com/clutchdetailinglp/"]'));
        return links.map(a => ({
            href: a.href,
            text: a.textContent.trim().slice(0, 200)
        }));
    }""")

    print(f"Found {len(events)} event-type links:")
    seen = set()
    for e in events:
        if e['href'] not in seen:
            seen.add(e['href'])
            print(f"  - {e['href']}")
            print(f"    text: {e['text'][:120]}")

    # Also print page text
    print("\n--- Page body text (first 2000 chars) ---")
    body = page.locator("body").text_content()
    print(body[:2000] if body else "no body text")

    browser.close()
