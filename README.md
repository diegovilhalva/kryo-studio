# 🎨 Kryo Studio — Creative Digital Agency Website

Kryo Studio is a modern and responsive digital agency website built with **Next.js**, **TypeScript**, and **TailwindCSS**.  
The platform showcases services, pricing plans, testimonials, booking options, and global contact information — all wrapped into a clean, high-performance UI with smooth animations.

🚀 **Live Demo:** https://kryo-studio.vercel.app/

---

## ✨ Features

- ⚡ **Next.js 14 + TypeScript**
- 🎨 **Fully responsive UI** with TailwindCSS  
- 🌗 **Dark/Light mode** included  
- 🧩 Component-based architecture  
- 🎞️ Smooth scroll + AOS animations  
- 🧾 Dynamic pricing section  
- ⭐ Client testimonials carousel  
- 📍 Interactive contact section  
- 📝 Booking section with CTA  
- 🖼️ Optimized images using Next/Image  
- 🔍 SEO metadata included  

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Next.js 14** | App Router, SSR/SSG, optimized routing |
| **TypeScript** | Type safety and maintainability |
| **TailwindCSS** | Styling and responsive design |
| **React Icons** | Iconography |
| **AOS (Animate On Scroll)** | Smooth UI animations |
| **React Multi Carousel** | Testimonials slider |
| **Vercel** | Deployment |

---

## 📂 Project Structure

```

src/
├─ app/
│   ├─ page.tsx
│   ├─ layout.tsx
│   └─ globals.css
├─ components/
│   ├─ Helper/
│   │   └─ Logo.tsx
│   ├─ Hero/
│   ├─ Services/
│   ├─ Price/
│   ├─ Booking/
│   ├─ Reviews/
│   ├─ Contact/
│   └─ Footer/
├─ constant/
│   └─ constant.ts
└─ public/
└─ images/

````

---

## 📦 Installation & Usage

### 1. Clone the repository  
```bash
git clone https://github.com/diegovilhalva/kryo-studio.git
````

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

### 4. Build for production

```bash
npm run build
```

---

## 🔍 SEO Metadata Example (Next.js)

```ts
export const metadata = {
  title: "Kryo Studio — Creative Digital Agency",
  description:
    "Kryo Studio is a modern digital agency website built with Next.js, TypeScript, and TailwindCSS. Explore services, pricing, testimonials, and more.",
  keywords: [
    "Digital Agency",
    "Creative Agency",
    "Next.js Website",
    "TailwindCSS",
    "Web Development",
    "UI Design",
  ],
  authors: [{ name: "Diego Vilhalva" }],
  metadataBase: new URL("https://kryo-studio.vercel.app"),
  openGraph: {
    title: "Kryo Studio — Creative Digital Agency",
    description:
      "A modern and responsive digital agency website built with Next.js.",
    url: "https://kryo-studio.vercel.app",
    siteName: "Kryo Studio",
    type: "website",
  },
};
```



## 🧑‍💻 Author

**Diego Vilhalva**
Fullstack Web Developer
🔗 GitHub: [https://github.com/diegovilhalva](https://github.com/diegovilhalva)


## 📜 License

This project is licensed under the **MIT License**.
