"""Click each event card on the Calendly page to extract its URL slug."""
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_context(viewport={"width": 1280, "height": 900}).new_page()
    page.goto("https://calendly.com/clutchdetailinglp", wait_until="networkidle")
    page.wait_for_timeout(3000)

    # Calendly renders event cards; find all clickable elements with role link or cards
    # Try multiple strategies
    elements = page.evaluate("""() => {
        // Look for all anchors and buttons on the page
        const all = Array.from(document.querySelectorAll('a, button, [role="link"], [role="button"]'));
        const results = [];
        for (const el of all) {
            const text = (el.textContent || '').trim();
            const href = el.getAttribute('href') || el.dataset?.href || '';
            if (text && (
                text.includes('Wash') || text.includes('Coating') ||
                text.includes('Service') || text.includes('Plus') ||
                text.includes('Interior') || text.includes('All In')
            )) {
                results.push({
                    tag: el.tagName,
                    text: text.slice(0, 100),
                    href: href,
                    cls: el.className?.slice?.(0, 80) || ''
                });
            }
        }
        return results;
    }""")

    print("Candidate event elements:")
    for e in elements[:30]:
        print(f"  [{e['tag']}] href={e['href']!r} text={e['text']!r}")

    # If no hrefs, click the first event card and see what URL it goes to
    print("\n--- Trying click navigation ---")
    cards = page.locator("text=Ceramic Coating").first
    if cards.count() > 0:
        cards.click()
        page.wait_for_timeout(2500)
        print(f"After clicking 'Ceramic Coating': {page.url}")

    browser.close()
