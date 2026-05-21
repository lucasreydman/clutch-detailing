"""Screenshot the pricing CTA card and inspect computed colors."""
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_context(viewport={"width": 1280, "height": 900}).new_page()
    page.goto("https://clutch-detailing.vercel.app/services", wait_until="networkidle")
    page.wait_for_timeout(800)

    # Scroll to the CTA card at the bottom of pricing
    page.evaluate("""() => {
        const ctas = document.querySelectorAll('.rounded-3xl.bg-forest');
        const last = ctas[ctas.length - 1];
        if (last) last.scrollIntoView({block: 'center'});
    }""")
    page.wait_for_timeout(600)
    page.screenshot(path=".tmp_test/cta_card.png", full_page=False)

    info = page.evaluate("""() => {
        // find the CTA card (forest bg, contains 'Book your detail online')
        const cards = Array.from(document.querySelectorAll('.bg-forest'));
        let card = null;
        for (const c of cards) {
            if (c.textContent && c.textContent.includes('Book your detail online')) {
                card = c; break;
            }
        }
        if (!card) return {error: 'card not found'};

        const eyebrow = card.querySelector('.label-eyebrow');
        const heading = card.querySelector('h3');
        const button = card.querySelector('button');
        const result = {};
        if (eyebrow) {
            const s = getComputedStyle(eyebrow);
            result.eyebrow = {color: s.color, opacity: s.opacity};
        }
        if (heading) {
            const s = getComputedStyle(heading);
            result.heading = {color: s.color};
        }
        if (button) {
            const s = getComputedStyle(button);
            result.button = {
                color: s.color,
                bg: s.backgroundColor,
                classes: button.className.slice(0, 200),
            };
        }
        const cardBg = getComputedStyle(card).backgroundColor;
        result.cardBg = cardBg;
        return result;
    }""")
    import json
    print(json.dumps(info, indent=2))
    browser.close()
