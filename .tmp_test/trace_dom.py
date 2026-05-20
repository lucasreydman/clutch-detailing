"""Trace the DOM tree around the modal."""
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_context(viewport={"width": 1440, "height": 900}).new_page()
    page.goto("https://clutch-detailing.vercel.app", wait_until="networkidle")
    page.get_by_role("button", name="Book your detail").first.click()
    page.wait_for_selector(".calendly-popup-content", timeout=10000)
    page.wait_for_timeout(1000)

    chain = page.evaluate("""() => {
        const c = document.querySelector('.calendly-popup-content');
        const chain = [];
        let cur = c;
        while (cur && cur !== document.documentElement) {
            const s = getComputedStyle(cur);
            const r = cur.getBoundingClientRect();
            chain.push({
                tag: cur.tagName,
                cls: cur.className,
                display: s.display,
                position: s.position,
                width: s.width,
                height: s.height,
                rect: {x: r.x, y: r.y, w: r.width, h: r.height},
            });
            cur = cur.parentElement;
        }
        return chain;
    }""")
    import json
    print(json.dumps(chain, indent=2))
    browser.close()
