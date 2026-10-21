# 🛍️ AuraMart - Modern E-Commerce Frontend

AuraMart is a blazing-fast, highly scalable Single-Page Application (SPA) designed to deliver a seamless shopping experience. Built with **React 18** and **Vite**, this project demonstrates modern frontend engineering practices, including global state persistence with **Zustand**, dynamic client-side routing with **React Router DOM v7**, and utility-first responsive design via **Tailwind CSS**.

From a variant-aware shopping cart architecture to zero-layout-shift image fallbacks and strict checkout validation, AuraMart is engineered for performance, resilience, and user conversion.

## 🚀 Core Features

*   **Variant-Aware Cart:** Composite key architecture (`id-size`) preventing state collisions for multi-variant product additions.
*   **Persistent State:** Seamless shopping experience with `localStorage` synchronization for carts and light/dark theme preferences.
*   **Resilient UI:** Defensive programming with fallback SVGs for broken CDN images to maintain strict aspect ratios and zero layout shifts.
*   **Conversion-Optimized Checkout:** Multi-step wizard with strict regex validation, programmatic UI decluttering, and confetti animations upon order generation.
*   **Dynamic Search & Filtering:** Real-time query parameter synchronization enabling shareable, bookmarkable search and category filters.

## 🛠️ Tech Stack

*   **Core:** React 18.3, Vite 5.4
*   **Routing:** React Router DOM v7
*   **State Management:** Zustand 5.0 (with persist middleware)
*   **Styling:** Tailwind CSS 3.4, PostCSS, Autoprefixer
*   **Animations:** AOS (Animate On Scroll), React Slick, Canvas-Confetti
*   **Icons:** React Icons

## ⚙️ Installation & Setup

To run this project locally on your machine, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/rophilekhan/auramart-frontend.git](https://github.com/rophilekhan/auramart-frontend.git)
   cd auramart-frontend
