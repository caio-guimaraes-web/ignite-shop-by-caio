# Ignite Shop — Case Study with Next.js ⚡

**Case study with Next.js: Optimizing performance with SSR, ISR, SPA strategies + Stripe integration & Stitches styling.**

---

## 🔍 About this case study

This project simulates a product display page using Stripe's product data. The goal is to study and demonstrate **different data fetching strategies** in modern Next.js (App Router), showing performance tradeoffs and practical implementations.

---

## ⚙️ Technologies

- **Next.js (App Router)**
- **Stitches (CSS-in-JS)**
- **Stripe SDK**
- **TypeScript**

---

## 📊 What is being studied?

This case walks through **3 strategies** for fetching data with Next.js:

---

### ✅ Commit 1 – SSR (Server-Side Rendering)

**Approach**: Fetching Stripe data directly on the server component and passing it to a client component.

- 🔗 [View Commit](https://github.com/caio-guimaraes-web/ignite-shop-by-caio/commit/641500ad5587f0b8bd419d5399b183669b318f64)

- 🧠 _Highlights_:
  - Simple server-side rendering.
  - Stripe SDK fetch inside the same `page.tsx`.
  - Ideal starting point for separation of concerns.

---

### ✅ Commit 2 – ISR with `export const revalidate`

**Approach**: Using Incremental Static Regeneration with a static revalidation time.

- 🔗 [View Commit](https://github.com/caio-guimaraes-web/ignite-shop-by-caio/commit/afa2653226ff2892f1e02f285747be0e98cab341)

- 🧠 _Highlights_:
  - Uses `export const revalidate = 10` for automatic background regeneration.
  - Great for performance and predictable cache control.
  - Timestamp added to visualize regeneration cycle.

---

### ✅ Commit 3 – ISR with fetch abstraction (Recommended)

**Approach**: Moves fetching logic to a separate module to keep server component clean and allow better testability.

- 🔗 [View Commit](https://github.com/caio-guimaraes-web/ignite-shop-by-caio/commit/d2f0c957c2e0c68cd7a62452fad82f3329de3b59)

- 🧠 _Highlights_:
  - Isolates fetching logic from rendering.
  - Stripe SDK fetch now properly abstracted.
  - Uses `next.revalidate` in a clean, production-friendly way.

---

## 🛠️ Setup

```bash
npm install
npm run dev
```

---

## 📦 Build

```bash
npm run build
npm start
```

---

## ✍️ Author

Made with 💻 and ☕ by [Caio Guimarães](https://github.com/caio-guimaraes-web/)
