"""Screenshot all pages at 4 breakpoints to verify text wrapping looks clean."""
from playwright.sync_api import sync_playwright
import os

os.makedirs(".tmp_test/breakpoints", exist_ok=True)

URL = "https://clutch-detailing.vercel.app"
PAGES = ["", "/services", "/about", "/team", "/book"]
BREAKPOINTS = [
    ("375", 375, 812),    # mobile
    ("768", 768, 1024),   # tablet
    ("1280", 1280, 800),  # desktop
    ("1536", 1536, 960),  # wide
]

issues = []

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)

    for bp_name, w, h in BREAKPOINTS:
        ctx = browser.new_context(viewport={"width": w, "height": h})
        for path in PAGES:
            page = ctx.new_page()
            url = f"{URL}{path}"
            try:
                page.goto(url, wait_until="networkidle", timeout=30000)
                page.wait_for_timeout(800)
            except Exception as e:
                print(f"  load failed {url} @ {bp_name}: {e}")
                page.close()
                continue

            label = path.strip("/") or "home"
            outp = f".tmp_test/breakpoints/{label}_{bp_name}.png"
            page.screenshot(path=outp, full_page=False)

            # Check for visible text overflow / orphan words on headings
            overflow_info = page.evaluate("""() => {
                const out = [];
                const headings = document.querySelectorAll('h1, h2, h3');
                for (const h of headings) {
                    const r = h.getBoundingClientRect();
                    const overflowing = h.scrollWidth > h.clientWidth + 1;
                    const text = (h.textContent || '').trim().slice(0, 60);
                    if (overflowing) {
                        out.push({
                            tag: h.tagName,
                            text: text,
                            scroll: h.scrollWidth,
                            client: h.clientWidth,
                        });
                    }
                }
                return out;
            }""")
            if overflow_info:
                for o in overflow_info:
                    issues.append(f"  [{bp_name} {path or '/'}] {o['tag']} OVERFLOW ({o['scroll']} > {o['client']}): {o['text']!r}")

            page.close()
        ctx.close()
    browser.close()

if issues:
    print(f"\nFOUND {len(issues)} overflow issues:")
    for i in issues:
        print(i)
else:
    print("\nAll headings fit within their containers at all breakpoints.")

print("\nScreenshots saved to .tmp_test/breakpoints/")
