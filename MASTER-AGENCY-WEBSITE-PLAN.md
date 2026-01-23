# Master Agency Website Implementation Plan
## Rankett.com Pivot: From "Tool" to "White-Label Fulfillment Partner"

**Document Version:** 1.0
**Status:** Approved for Execution
**Objective:** Transform the Rankett.com marketing site to sell a "Business in a Box" model to Agencies, justifying the $998/mo price point by highlighting the human-led fulfillment and white-label technology.

---

## 1. Core Identity & Messaging
**We are NOT:** A SaaS tool for SMBs.
**We ARE:** A Tech-Enabled Fulfillment Partner for Agencies.

**The Pitch:**
"Don't just sell SEO. Sell the future of search. We handle the complex AI optimization (fulfillment); you keep the client and the credit (white-label)."

**Key Value Drivers:**
1.  **Fulfillment (The Labor):** We do the hard work (Reddit, Schema, Freshness).
2.  **White-Label (The Asset):** You get a branded "Safe Room" portal.
3.  **Profit (The Math):** You buy at $998, sell at $3,000+.

---

## 2. Site Structure & Flow (Home Page)

The `app/page.tsx` will be completely restructured to tell this specific story.

### **Section 1: The Agency Hero (Top of Fold)**
*   **Goal:** Immediate disqualification of non-agencies + High-value promise for agencies.
*   **Headline:** "The First White-Label AI Visibility Platform for Agencies."
*   **Subhead:** "Add a high-ticket 'Generative Engine Optimization' service to your agency in 24 hours. We handle the fulfillment. You take the credit."
*   **CTA:** "See the Margins" (Scrolls to Math section) or "Start Agency Trial".

### **Section 2: The "System" Walkthrough (Loom Video)**
*   **Goal:** Proof of System. Show, don't just tell.
*   **Component:** `AgencyVideoDemo.tsx`
*   **Content:** A high-quality Loom video embed.
*   **Context Text:** "Watch how 100+ agencies use our fulfillment system to upsell clients today."
*   **Nuance:** The video (placeholder for now) must eventually show the *Admin* side—adding a client, seeing work logs, generating a white-label report.

### **Section 3: The Educational Pivot (Prompts vs. Keywords)**
*   **Goal:** Give the Agency the "Sales Pitch" they need for *their* clients.
*   **Component:** `PromptsVsKeywords.tsx`
*   **Visual:** Split Screen.
    *   *Left (Old Way):* "Keywords = 10 Blue Links (Crowded)"
    *   *Right (New Way):* "Prompts = 1 Direct Answer (Winner Take All)"
*   **Copy:** "Keywords are dead. Intentional Prompts are the new gold rush. We help your clients dominate the answers that actually drive revenue."

### **Section 4: The Visual Problem (AI Visibility Contrast)**
*   **Goal:** Show the "Before/After" result of the service.
*   **Component:** Existing `AIVisibilityContrast.tsx` (Repurposed context).
*   **Context:** "This is what your clients are facing. They are invisible. We make them dominant."

### **Section 5: The "Agency Math" (Profit Calculator)**
*   **Goal:** Anchor the price ($998) as an investment, not a cost.
*   **Component:** `AgencyProfitModel.tsx`
*   **Visual:** Simple Equation / Card.
    *   **Cost:** $998/mo (What you pay us)
    *   **Revenue:** $3,000/mo (What you charge them)
    *   **PROFIT:** **$2,000/mo** per client.
*   **Copy:** "Scalable revenue without hiring a single new employee."

### **Section 6: "We Do The Work" (Fulfillment Showcase)**
*   **Goal:** Justify the service fee by listing manual labor.
*   **Component:** `FulfillmentShowcase.tsx`
*   **Layout:** Two Columns (Platform vs. Fulfillment).
    *   **The Platform (Automated):**
        *   Multi-LLM Rank Tracking
        *   ROI Calculator
        *   White-Label Dashboard
    *   **The Fulfillment (We Do This For You):**
        *   ✅ Weekly Reddit/Quora Seeding
        *   ✅ Schema & LLM.txt Updates
        *   ✅ Content Freshness Cycles
        *   ✅ Directory Claiming (50+ Sites)
*   **Visual:** A "Ghost" Report with a "Your Logo Here" placeholder.

### **Section 7: Social Proof (Agency Success)**
*   **Goal:** Validate the *Business Model*.
*   **Component:** `AgencyTestimonials.tsx`
*   **Content:** 3 placeholders focusing on revenue/time saved.
    *   *"I added $5k MRR in my first month..."*
    *   *"My clients were asking about ChatGPT rankings, and I finally have an answer..."*

---

## 3. New Pages & Navigation

### **Page: `/team` (New)**
*   **Goal:** Move the "Startup Story" off the sales page.
*   **Content:** The existing `Team.tsx` component.
*   **Messaging:** "Meet Your Backend Operations Team." (Shift from "Founders" to "Partners").

### **Navigation Changes**
*   **Header:** Add "For Agencies", "Our Story" (Team), "Login".
*   **Footer:** Add link to `/team`.

---

## 4. Implementation Checklist

### **Phase 1: Structure & Cleanup**
- [ ] Create `app/team/page.tsx`
- [ ] Move `Team` component to new page
- [ ] Remove `Team` from Home Page
- [ ] Update Navigation

### **Phase 2: The Agency Pitch (Components)**
- [ ] Create `components/HeroAgency.tsx` (New Messaging)
- [ ] Create `components/AgencyVideoDemo.tsx` (Loom Placeholder)
- [ ] Create `components/PromptsVsKeywords.tsx` (Educational Visual)
- [ ] Create `components/AgencyProfitModel.tsx` (Math/ROI)
- [ ] Create `components/FulfillmentShowcase.tsx` (Labor list + Ghost visual)
- [ ] Create `components/AgencyTestimonials.tsx` (Social Proof)

### **Phase 3: Assembly**
- [ ] Reassemble `app/page.tsx` with the new component order.
- [ ] Verify flow and spacing.
- [ ] Check responsive design (Mobile view is critical for busy agency owners).

---

## 5. Technical Constraints
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS (Must match existing `globals.css` and design tokens).
- **Images:** Use placeholders (colored divs or standard icons) until assets are provided.
- **Interactivity:** Keep it lightweight. The copy does the heavy lifting.

---

**This plan is the blueprint.** We build against this to ensure the "Fulfillment" reality is baked into every pixel.
