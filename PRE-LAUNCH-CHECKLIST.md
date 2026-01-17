# Rankett.com Pre-Launch Checklist

Everything is deployed. This doc lists placeholder content to replace when ready.

---

## Placeholder Content to Replace

### 1. Loom Video
**File:** `components/home/LoomVideoSection.tsx` (line 12)
**Current:** `placeholder-video-id`
**Replace with:** Your actual Loom embed URL

```tsx
const loomEmbedUrl = 'https://www.loom.com/embed/YOUR-VIDEO-ID'
```

---

### 2. Testimonials
**File:** `components/home/Testimonial.tsx` (lines 15-35)
**Current:** 3 placeholder quotes

Replace the `testimonials` object with real agency testimonials:

```tsx
const testimonials = {
  1: {
    quote: "Your real testimonial here",
    author: "Real Name",
    company: "Real Agency Name",
    avatar: null, // or path to image
  },
  // ... slots 2 and 3
}
```

---

### 3. Case Studies
**File:** `components/casestudies/CaseStudyCard.tsx` (lines 20-55)
**Current:** 3 template case studies (Healthcare, Legal, Home Services)

Replace `placeholderStudies` array with real case study data when available.

---

## Optional Enhancements

| Task | Priority | Notes |
|------|----------|-------|
| Generate new favicon from logo | Medium | Run through favicon generator with `/public/images/Rankett_Logo.png` |
| Custom cursor effect | Low | Was marked lower priority in original plan |

---

## Verified Working

- [x] One-page scroll layout with all sections
- [x] #features section (smooth scroll from nav)
- [x] #pricing section (smooth scroll from nav)
- [x] #casestudies section (smooth scroll from nav)
- [x] #faq section
- [x] Navigation scrolls to sections on same page
- [x] Login button → tool.rankett.com
- [x] Smooth scroll with Lenis
- [x] All animations
- [x] Build passes
- [x] Pushed to GitHub
- [x] Auto-deploys via GitHub Actions

---

*Last updated: January 16, 2026*
