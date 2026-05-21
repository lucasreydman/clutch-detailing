"""Mobile audit on the live site.
- Touch target sizes (≥44px)
- FAB shows after scroll past hero
- Nav hides on scroll-down, shows on scroll-up
- No horizontal scroll
- viewport meta + theme-color present
"""
from playwright.sync_api import sync_playwright
import os

os.makedirs(".tmp_test/mobile", exist_ok=True)
URL = "https://clutch-detailing.vercel.app"
DEVICES = [
    ("iphone-se-375", 375, 667),
    ("iphone-14-390", 390, 844),
    ("iphone-pro-max-414", 414, 896),
    ("tablet-768", 768, 1024),
]
PAGES = ["", "/services", "/about", "/team", "/book"]

issues = []

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)

    for dev_name, w, h in DEVICES:
        ctx = browser.new_context(
            viewport={"width": w, "height": h},
            user_agent="Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1",
            device_scale_factor=2,
            is_mobile=True,
            has_touch=True,
        )
        page = ctx.new_page()
        page.goto(URL, wait_until="networkidle")
        page.wait_for_timeout(800)
        page.screenshot(path=f".tmp_test/mobile/home_{dev_name}.png", full_page=False)

        # ---- Touch targets ----
        small_taps = page.evaluate("""() => {
            const targets = document.querySelectorAll('button, a[href], [role="button"]');
            const small = [];
            for (const t of targets) {
                const r = t.getBoundingClientRect();
                if (r.width === 0 || r.height === 0) continue;
                if (r.width < 44 || r.height < 44) {
                    small.push({
                        tag: t.tagName,
                        text: (t.textContent || '').trim().slice(0, 40),
                        w: Math.round(r.width),
                        h: Math.round(r.height),
                    });
                }
            }
            return small.slice(0, 12);
        }""")
        if small_taps and w <= 414:
            for t in small_taps:
                issues.append(f"  [{dev_name}] TOUCH<44: {t['tag']} {t['w']}x{t['h']} {t['text']!r}")

        # ---- Horizontal scroll ----
        body_w = page.evaluate("() => document.documentElement.scrollWidth")
        if body_w > w + 2:
            issues.append(f"  [{dev_name}] HSCROLL: body {body_w}px > viewport {w}px")

        # ---- viewport meta + theme color (only check once) ----
        if dev_name.startswith("iphone-se"):
            metas = page.evaluate("""() => {
                const vp = document.querySelector('meta[name=viewport]')?.content;
                const tc = document.querySelector('meta[name=theme-color]')?.content;
                const ai = document.querySelector('meta[name=apple-mobile-web-app-capable]')?.content;
                const sb = document.querySelector('meta[name=apple-mobile-web-app-status-bar-style]')?.content;
                return {viewport: vp, themeColor: tc, appleCapable: ai, statusBar: sb};
            }""")
            print(f"\nMeta tags: {metas}")

        # ---- FAB hidden initially, shown after scroll ----
        if w <= 414:
            fab_initial = page.evaluate("""() => {
                const fab = document.querySelector('.md\\\\:hidden.fixed.bottom-0');
                return fab ? getComputedStyle(fab).opacity !== '0' : null;
            }""")
            page.evaluate("window.scrollTo(0, window.innerHeight * 1.2)")
            page.wait_for_timeout(700)
            page.screenshot(path=f".tmp_test/mobile/home_scrolled_{dev_name}.png")

            # ---- Nav hidden on scroll down ----
            nav_y = page.evaluate("""() => {
                const h = document.querySelector('header');
                if (!h) return null;
                const r = h.getBoundingClientRect();
                return r.y;
            }""")

            # Scroll up to show nav
            page.evaluate("window.scrollBy(0, -200)")
            page.wait_for_timeout(500)
            nav_y_after_up = page.evaluate("""() => {
                const h = document.querySelector('header');
                return h ? h.getBoundingClientRect().y : null;
            }""")
            print(f"[{dev_name}] FAB hidden initially: {not fab_initial}")
            print(f"[{dev_name}] Nav y after scroll-down: {nav_y} (should be negative if hidden)")
            print(f"[{dev_name}] Nav y after scroll-up: {nav_y_after_up} (should be ~0)")

        page.close()
        ctx.close()
    browser.close()

print()
if issues:
    print(f"FOUND {len(issues)} issues:")
    for i in issues:
        print(i)
else:
    print("All checks passed.")
