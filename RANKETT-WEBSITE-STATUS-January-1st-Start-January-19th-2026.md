# Rankett.com Website Status & Knowledge Transfer
## January 1st - Start January 19th, 2026

---

## Project Overview

**What is Rankett?**
A 100% ghost white-label AI visibility platform with done-for-you fulfillment for marketing/SEO agencies.

**Business Model:**
- Agencies pay Rankett ~$998/client/month
- Agencies charge their clients $3,000-$6,000/month
- Rankett handles all fulfillment (analysis, implementation, reporting)
- Agencies just sell and collect payments

**This repo (Rankett.com)** is the marketing site — the "book cover" that gets agencies into the dashboard product.

---

## Repository Info

```
Path: /Users/yahirgonzalez/Desktop/Ai Visiblity Tool/Rankett.com
Remote: https://github.com/YG4PRESIDENT/Rankett.com.git
Branch: main
Hosted: Vercel (auto-deploys from main branch)
Domain: rankett.com
```

---

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Vercel (hosting + auto-deploy)

---

## Git Workflow (CRITICAL)

### Before Making Changes
```bash
cd "/Users/yahirgonzalez/Desktop/Ai Visiblity Tool/Rankett.com"
git status  # Verify clean working tree
```

### After Making Changes
```bash
# 1. Check status
git status

# 2. Add specific files (NOT git add .)
git add path/to/specific/file.tsx

# 3. Commit with heredoc for multi-line messages
git commit -m "$(cat <<'EOF'
Short description

- Detail 1
- Detail 2

Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>
EOF
)"

# 4. Push immediately
git push
```

### If Git Lock Error Occurs
```bash
rm -f "/Users/yahirgonzalez/Desktop/Ai Visiblity Tool/Rankett.com/.git/index.lock"
git status  # Verify state before continuing
```

### If Commits Go Wrong
```bash
# Find last good commit
git log --oneline -10

# Reset to good commit
git reset --hard <commit-hash>

# Force push to fix remote
git push --force
```

---

## Current Site Structure (Top to Bottom)

### Homepage (`app/page.tsx`)

1. **Header** (`components/Header.tsx`)
   - Logo (h-16 size)
   - Navigation: Features, Pricing, Case Studies, Blog
   - Login button

2. **Hero Section** (`components/home/HeroHome.tsx`)
   - Headline: "AI Visibility. Your Brand. Our Backend." (single line)
   - Subheader: "Launch Tomorrow. Do none of the work."
   - Loom video placeholder (16:9, large)
   - CTA: "Get access now. No card required." + "Start Free Trial" button → tool.rankett.com
   - Logo Carousel showing AI platforms (ChatGPT, Perplexity, Gemini, Claude, Copilot)

3. **Testimonial** (`components/home/Testimonial.tsx`) - compact size, slot 1

4. **Features Matrix** (`components/home/FeaturesMatrix.tsx`)
   - 2x2 bento grid with visual cards
   - Compare Visibility, AI Sentiment, What AI Says, Competitor Comparison

5. **How It Works** (`components/home/HowItWorks.tsx`)
   - 3 steps: Customize → Show Value → We Deliver
   - Minimal copy, visual icons

6. **Industries Grid** (`components/home/IndustriesGrid.tsx`)
   - Horizontal scrolling marquee of industry icons
   - "Trusted across industries"

7. **Case Studies Carousel** (`components/casestudies/CaseStudyCarousel.tsx`)
   - Peek carousel (see edges of adjacent cards)
   - Swipe/drag enabled

8. **Pricing** (`components/pricing/PricingTiers.tsx`)
   - Hidden behind modal popup
   - "See Our Pricing" button reveals all tiers

9. **FAQ** (`components/home/FAQChat.tsx`)
   - Mentions.so style
   - Chat bubbles with +/X icons
   - Click to reveal answers with typewriter animation
   - Selected question turns blue

10. **Footer** (`components/Footer.tsx`)

---

## What's Been Completed (Phase 2 Redesign)

- [x] Hero copy: Single-line headline + updated subheader
- [x] Large Loom video placeholder
- [x] CTA section: "Get access now. No card required." + button
- [x] Logo Carousel below video
- [x] Navbar logo size increase (h-16)
- [x] Industries section: Minimal scrolling strip (marquee)
- [x] Features: 2x2 visual matrix with mockups
- [x] How It Works: Reduced copy, enhanced visuals
- [x] Case Studies: Peek carousel with smooth transitions
- [x] FAQ: Mentions.so style (chat bubbles, +/X icons, typewriter)
- [x] Pricing: Modal popup system

---

## What's Next (Pending Implementation)

### Immediate Next Task: Audit Tool Section

**Part 1: Timeline Visual**
Shows the agency business flow:
1. **Attract** → Use audit tool to get leads
2. **Sell** → Close clients on AI visibility
3. **We Fulfill** → Rankett does the work after agency gets paid

**Part 2: Audit Tool Showcase**

Layout:
```
┌─────────────────────────┬─────────────────────────────────────┐
│                         │ "Your lead magnet"                  │
│   Screenshot of tool    │ - Send to prospects                 │
│                         │ - Run ads with it                   │
│                         │ - Capture emails                    │
│                         │ - Track users                       │
│                         │ - Use on sales calls                │
│                         ├─────────────────────────────────────┤
│                         │ "What it does"                      │
│                         │ - AI visibility analysis            │
│                         │ - Brand monitoring across LLMs      │
└─────────────────────────┴─────────────────────────────────────┘
         "Tracking across [ChatGPT] [Perplexity] [Gemini] [Claude]"
```

**Key concept:** The audit tool is both the product AND the sales weapon. Agencies use it to attract leads and close deals.

### Other Pending Items (from cofounder's plan)

- [ ] Benefits section (partner perks, no pricing shown)
- [ ] Pooled testimonials with blurred names
- [ ] Fulfillment tiers section
- [ ] Stats/metrics section (4 data points)
- [ ] Update navigation (Benefits, FAQ, Login only)
- [ ] Remove/restructure separate pricing page

---

## Key Files Reference

| File | Purpose |
|------|---------|
| `app/page.tsx` | Homepage layout, component order |
| `components/home/HeroHome.tsx` | Hero section with video + CTA |
| `components/home/FeaturesMatrix.tsx` | 2x2 feature cards |
| `components/home/HowItWorks.tsx` | 3-step process |
| `components/home/FAQChat.tsx` | FAQ with chat style |
| `components/home/IndustriesGrid.tsx` | Scrolling industries |
| `components/home/Testimonial.tsx` | Testimonial cards |
| `components/pricing/PricingTiers.tsx` | Pricing modal |
| `components/casestudies/CaseStudyCarousel.tsx` | Case study carousel |
| `components/Header.tsx` | Navigation header |
| `components/ui/LogoCarousel.tsx` | AI platform logos |
| `CLAUDE.md` | Git workflow documentation |

---

## Common Commands

```bash
# Development
cd "/Users/yahirgonzalez/Desktop/Ai Visiblity Tool/Rankett.com"
npm run dev

# Build (verify before pushing)
npm run build

# Type check
npx tsc --noEmit

# Clean build (if .next is corrupted)
rm -rf .next && npm run build
```

---

## Recent Commits

```
945721c Hero: Add CTA section with 'Get access now' button
80d139b Hero: Add Logo Carousel below Loom video
cd2fab3 Hero: Add large Loom video placeholder below subheader
207ff76 Add CLAUDE.md with git workflow documentation
e871e5b Hero: Single-line headline + updated subheader
9b759b3 UI: FAQ mentions.so style + Pricing modal popup
```

---

## Important Notes

1. **Always run `npm run build` before pushing** to verify no errors
2. **Vercel auto-deploys** from main branch within 1-2 minutes
3. **Quote paths with spaces** in terminal commands
4. **Add specific files** to git, not `git add .`
5. **The site goal** is to be a "book cover" — get users into the dashboard with minimal friction
6. **No pricing shown upfront** — reveal in dashboard or via modal

---

## Dashboard Reference

The marketing site drives users to:
- `tool.rankett.com` — Agency dashboard (Clerk auth)
- Client portals are on custom domains (100% ghost white-label)

---

*Last updated: January 19, 2026*
