"""Print computed styles on the popup elements to debug centering."""
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_context(viewport={"width": 1440, "height": 900}).new_page()
    page.goto("https://clutch-detailing.vercel.app", wait_until="networkidle")
    page.get_by_role("button", name="Book your detail").first.click()
    page.wait_for_selector(".calendly-popup-content", timeout=10000)
    page.wait_for_timeout(1000)

    info = page.evaluate("""() => {
        const o = document.querySelector('.calendly-overlay');
        const c = document.querySelector('.calendly-popup-content');
        const oc = getComputedStyle(o);
        const cc = getComputedStyle(c);
        return {
            overlay: {
                display: oc.display,
                position: oc.position,
                inset: `${oc.top} ${oc.right} ${oc.bottom} ${oc.left}`,
                alignItems: oc.alignItems,
                justifyContent: oc.justifyContent,
                padding: oc.padding,
                inlineStyle: o.getAttribute('style'),
            },
            content: {
                display: cc.display,
                position: cc.position,
                inset: `${cc.top} ${cc.right} ${cc.bottom} ${cc.left}`,
                margin: cc.margin,
                transform: cc.transform,
                width: cc.width,
                height: cc.height,
                inlineStyle: c.getAttribute('style'),
            }
        };
    }""")
    import json
    print(json.dumps(info, indent=2))
    browser.close()
