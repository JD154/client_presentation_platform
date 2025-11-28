---
theme: default
background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)
title: Kimani - Heart, Memory & Mind
info: |
  ## Kimani: Giving Your Club a Heart, a Memory, and a Mind
  From kibbutz roots to a global community where exclusivity is earned by generosity.
class: text-center
drawings:
  persist: false
transition: fade
mdc: true
---

<style>
:root {
  --kimani-gold: #D4AF37;
  --kimani-cream: #F5F1E8;
  --kimani-dark: #0a0a0a;
  --kimani-charcoal: #2a2a2a;
  --kimani-accent: #8B7355;
}

.slidev-layout {
  background: linear-gradient(135deg, var(--kimani-dark) 0%, var(--kimani-charcoal) 100%);
  color: var(--kimani-cream);
  font-family: Georgia, serif;
}

h1, h2, h3 {
  font-family: Georgia, serif !important;
  font-weight: 300;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

h1 {
  font-size: 3.5rem !important;
  background: linear-gradient(135deg, var(--kimani-gold) 0%, var(--kimani-cream) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

h2 {
  color: var(--kimani-gold);
  font-size: 2rem !important;
  margin-bottom: 1.5rem;
}

p, li {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-weight: 300;
  line-height: 1.8;
  color: var(--kimani-cream);
  font-size: 1.1rem;
}

.gold-accent {
  color: var(--kimani-gold);
  font-weight: 500;
}

.elegant-border {
  border: 1px solid var(--kimani-gold);
  border-radius: 0;
  padding: 2rem;
  background: rgba(212, 175, 55, 0.05);
  backdrop-filter: blur(10px);
}

.divider {
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--kimani-gold), transparent);
  margin: 2rem 0;
}

.organ-card {
  border: 1px solid rgba(212, 175, 55, 0.3);
  padding: 2rem;
  background: rgba(42, 42, 42, 0.5);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.organ-card:hover {
  border-color: var(--kimani-gold);
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(212, 175, 55, 0.2);
}
</style>

# Kimani

<div class="mt-8 mb-4 text-2xl font-light tracking-wider">Giving Your Club a Heart, a Memory, and a Mind</div>

<div class="divider"></div>

<div class="text-lg italic font-light opacity-80">From kibbutz roots to a global community where exclusivity is earned by generosity</div>

<div @click="$slidev.nav.next" class="inline-block px-6 py-2 mt-16 transition-all border cursor-pointer border-gold hover:bg-gold/10" style="border-color: var(--kimani-gold)">
  <span class="gold-accent">Press Space to Begin</span>
</div>

---

transition: fade
layout: two-cols
layoutClass: gap-12

---

# From the Negev <br/>to the World

<div class="divider"></div>

<div class="space-y-6 text-base">

<div v-click>

**Born in a Kibbutz**  
Community before luxury, values before wealth

</div>

<div v-click>

**Global Perspective**  
NYC • Miami • Paris • Ibiza • Mykonos • St. Tropez

</div>

<div v-click>

**Proven Success**  
Co-built LVH: scaled ultra-luxury without losing soul

</div>

</div>

::right::

<div v-click class="mt-20">

<div class="text-center elegant-border">

<div class="mb-4 text-xl italic gold-accent">"The Bridge"</div>

Kimani is that life story turned into a members club where **generosity**, not money, is the real access key.

</div>

</div>

---

transition: fade
class: text-center

---

# The Three Organs of Kimani

<div class="divider"></div>

<div class="grid grid-cols-3 gap-8 px-8 mt-16">

<div v-click class="organ-card">
<div class="mb-4 text-5xl">❤️</div>
<h3 class="mb-2 text-xl">The Heart</h3>
<div class="text-sm tracking-widest gold-accent">CONCIERGE</div>
</div>

<div v-click class="organ-card">
<div class="mb-4 text-5xl">📖</div>
<h3 class="mb-2 text-xl">The Memory</h3>
<div class="text-sm tracking-widest gold-accent">CRM</div>
</div>

<div v-click class="organ-card">
<div class="mb-4 text-5xl">🧠</div>
<h3 class="mb-2 text-xl">The Mind</h3>
<div class="text-sm tracking-widest gold-accent">AI</div>
</div>

</div>

---

## transition: slide-left

# ❤️ The Heart

## Concierge

<div class="divider"></div>

<div class="space-y-5">

<div v-click class="flex items-start gap-3">
<span class="text-xl gold-accent">•</span>
<span>Front line for requests, curation, bookings, follow-up</span>
</div>

<div v-click class="flex items-start gap-3">
<span class="text-xl gold-accent">•</span>
<span>Feels like <span class="italic gold-accent">"Amir is behind every yes"</span></span>
</div>

<div v-click class="flex items-start gap-3">
<span class="text-xl gold-accent">•</span>
<span>Fast, human, warm – not tickets or support</span>
</div>

</div>

<div v-click class="mt-12">

<div class="elegant-border">
<span class="font-semibold gold-accent">Promise:</span> Every interaction feels <span v-mark.underline.gold="5">personally curated</span>, not transactional.
</div>

</div>

---

## transition: slide-left

# 📖 The Memory

## CRM

<div class="divider"></div>

<div class="space-y-5">

<div v-click class="flex items-start gap-3">
<span class="text-xl gold-accent">•</span>
<span>Living memory of members, trips, tastes, and stories</span>
</div>

<div v-click class="flex items-start gap-3">
<span class="text-xl gold-accent">•</span>
<span>Remembers preferences and context across channels</span>
</div>

<div v-click class="flex items-start gap-3">
<span class="text-xl gold-accent">•</span>
<span>Powers "We know you" moments: proactive, not reactive</span>
</div>

</div>

<div v-click class="mt-12">

<div class="elegant-border">
<span class="font-semibold gold-accent">Promise:</span> The more members interact, the more <span v-mark.circle.gold="5">Kimani feels like family</span>.
</div>

</div>

---

## transition: slide-left

# 🧠 The Mind

## AI / Inner Memory

<div class="divider"></div>

<div class="space-y-5">

<div v-click class="flex items-start gap-3">
<span class="text-xl gold-accent">•</span>
<span>AI copilots the concierge – never replaces it</span>
</div>

<div v-click class="flex items-start gap-3">
<span class="text-xl gold-accent">•</span>
<span>Surfaces member history, suggests experiences, drafts replies</span>
</div>

<div v-click class="flex items-start gap-3">
<span class="text-xl gold-accent">•</span>
<span>Learns from feedback while protecting your standards and taste</span>
</div>

</div>

<div v-click class="mt-12">

<div class="elegant-border">
<span class="font-semibold gold-accent">Promise:</span> You can scale to <span v-mark.box.gold="5">hundreds/thousands of members</span> without losing intimacy.
</div>

</div>

---

layout: two-cols
layoutClass: gap-16

---

# KLIFE Token

## The Ledger of Contribution

<div class="divider"></div>

<div class="space-y-4 text-base">

<div v-click class="flex items-start gap-3">
<span class="gold-accent">→</span>
<span>Every act of generosity recorded<br/><span class="text-sm opacity-70">Hosting • Mentoring • Curating • Referrals</span></span>
</div>

<div v-click class="flex items-start gap-3">
<span class="gold-accent">→</span>
<span>On-chain proofs = neutral, portable reputation</span>
</div>

<div v-click class="flex items-start gap-3">
<span class="gold-accent">→</span>
<span>Unlocks perks, access, status that are <strong>earned</strong>, not purchased</span>
</div>

</div>

<div v-click class="mt-8 text-sm italic elegant-border">
KLIFE is how Kimani says "thank you" in a traceable, fair way.
</div>

::right::

<div v-click>

# Rollout Phases

<div class="divider"></div>

<v-clicks depth="2" class="space-y-6 text-sm">

<div>
<div class="mb-2 font-semibold tracking-wider gold-accent">I. BETA – INNER CIRCLE</div>
<div class="opacity-80">Small trusted group<br/>Test concierge, CRM basics, light AI assist</div>
</div>

<div>
<div class="mb-2 font-semibold tracking-wider gold-accent">II. CURATED CORE</div>
<div class="opacity-80">Expand membership carefully<br/>Refine AI + first KLIFE perks</div>
</div>

<div>
<div class="mb-2 font-semibold tracking-wider gold-accent">III. SCALED COMMUNITY</div>
<div class="opacity-80">Larger membership, contribution-based gates<br/>Rich token mechanics and marketplace</div>
</div>

</v-clicks>

</div>

---

layout: center
class: text-center

---

# Ownership & Partnership

<div class="divider"></div>

<div class="grid grid-cols-2 gap-16 mt-12 text-left">

<div v-click>

<h3 class="mb-4 text-lg tracking-wider gold-accent">AMIR / KIMANI</h3>

<v-clicks class="space-y-3 text-sm">

<div class="flex items-start gap-2">
<span class="gold-accent">✦</span>
<span>Brand, narrative, membership rules</span>
</div>

<div class="flex items-start gap-2">
<span class="gold-accent">✦</span>
<span>Experience design and final product decisions</span>
</div>

</v-clicks>

</div>

<div v-click>

<h3 class="mb-4 text-lg tracking-wider gold-accent">UKLOK</h3>

<v-clicks class="space-y-3 text-sm">

<div class="flex items-start gap-2">
<span class="gold-accent">✦</span>
<span>Infrastructure, orchestration, inner-memory & on-chain patterns</span>
</div>

<div class="flex items-start gap-2">
<span class="gold-accent">✦</span>
<span>Modular tech architecture – <strong>no vendor lock-in</strong></span>
</div>

</v-clicks>

</div>

</div>

<div v-click class="max-w-4xl mx-auto mt-16 text-center elegant-border">

<div class="text-xl italic">
"You own the club and the story.<br/>We give Kimani the heart, the memory, and the mind to scale your values."
</div>

</div>

---

layout: center
class: text-center

---

<div class="space-y-8">

<h1 class="text-5xl">Thank You</h1>

<div class="divider"></div>

<div v-click class="text-2xl font-light opacity-80">Questions?</div>

<div v-click class="inline-block px-8 py-4 mt-12 elegant-border">
<div class="mb-2 text-sm tracking-widest gold-accent">READY TO BEGIN?</div>
<div class="text-lg">Let's give your club a heart, a memory, and a mind</div>
</div>

</div>
