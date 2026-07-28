# WareHouse Project

> A full-featured warehouse & components management SPA — the project that pushed me furthest, from search bars to sidebar filtering to fully dynamic rendering.

![status](https://img.shields.io/badge/status-in%20production-brightgreen) ![license](https://img.shields.io/badge/license-MIT-blue) ![react](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB) ![javascript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

🔗 [Live Demo](https://er4nxz.github.io/WareHouse-project/)

**English** | [فارسی](#فارسی)

---

## 📖 About

This is, honestly, the best project I've built so far. It's a real inventory & warehouse management app for Asman Tajhiz, and it pushed me into territory I had zero experience with — things like a working search bar, sidebar-based filtering, and dynamic rendering of large, filtered lists. Going in, I had no clear idea how the logic behind any of that should even be structured.

Beyond the search and filter system, the project includes a genuinely complete "Add Item" form — one that captures exactly where every part lives across the warehouse (location, shelf, position), so nothing ever gets lost or hard to find again.

## ✨ Features

- Component catalog with live search & sidebar filtering
- Dynamic rendering of filtered/searched results
- Create / Edit / Delete items with validation and confirmations
- Detailed location tracking (warehouse / shelf / position) via a complete "Add Item" form
- Requirement List — track missing parts that still need to be purchased
- Clean sidebar navigation
- Reusable `useFetch` custom hook for data fetching
- Loading skeletons and polished alert messages

## 🚀 Getting Started

### Prerequisites

- Node.js and npm installed

### Installation

```bash
git clone https://github.com/er4Nxz/WareHouse-project.git
cd WareHouse-project/Code
npm install
```

### Usage

```bash
# Option 1: JSON Server (local db.json)
npx json-server --watch db.json --port 3000

# Option 2: MockAPI (already integrated in code)
# just set the API base to your MockAPI endpoint

# Run the dev server
npm run dev
```

## 📁 Project Structure

```
WareHouse-project/
├── Code/
│   ├── src/
│   │   ├── App/
│   │   ├── Components/
│   │   │   ├── Create/
│   │   │   ├── Header/
│   │   │   ├── Home/
│   │   │   │   ├── Index/
│   │   │   │   ├── Edit/
│   │   │   │   └── Delete/
│   │   │   ├── Inventory/
│   │   │   ├── RequirementList/
│   │   │   ├── SideBar/
│   │   │   └── NotFound/
│   │   ├── Hooks/
│   │   │   └── useFetch/
│   │   ├── index.css
│   │   └── main.jsx
│   ├── db.json
│   └── index.html
└── README.md
```

## 🛠️ Tech Stack

- React (Hooks, modular components, routing)
- React Router DOM
- Axios
- SweetAlert2
- React Icons
- React Loading Skeleton
- Custom Hook: `useFetch`
- Data sources: JSON Server (db.json) and MockAPI

## 💡 What I Learned

- Building a real search bar with live filtering logic from scratch
- Implementing sidebar-based filtering and dynamic result rendering
- Designing a complete, multi-field form for real-world data (item location tracking)
- Designing multi-view CRUD flows for real warehouse workflows
- Building reusable hooks and a decoupled data layer
- Managing UI state across forms, lists, and detail pages

## 📄 License

This project is licensed under the [MIT License](LICENSE) — free for personal and educational use.

---
---

<a name="فارسی"></a>
## فارسی

**[English](#warehouse-project)** | فارسی

---

## 📖 درباره پروژه

راستش رو بخوای، این بهترین پروژه‌ایه که تا الان ساختم. یه اپلیکیشن واقعی برای مدیریت انبار و قطعات آسمان تجهیزه، و منو وارد حوزه‌هایی کرد که هیچ تجربه‌ای توشون نداشتم؛ چیزایی مثل یه SearchBar واقعی، فیلتر کردن از طریق SideBar، و رندر داینامیک لیست‌های بزرگ و فیلترشده. اول کار اصلاً نمی‌دونستم منطق پشت این چیزا باید چجوری پیاده‌سازی بشه.

جدا از سیستم جستجو و فیلتر، پروژه شامل یه فرم «افزودن آیتم» واقعاً کامله؛ فرمی که دقیقاً مشخص می‌کنه هر قطعه کجای انبار قرار داره (انبار، قفسه، جایگاه)، تا هیچ‌وقت هیچ چیزی گم یا سخت‌پیدا نشه.

## ✨ ویژگی‌ها

- کاتالوگ قطعات با جستجوی زنده و فیلتر از طریق سایدبار
- رندر داینامیک نتایج جستجو/فیلترشده
- ایجاد/ویرایش/حذف با اعتبارسنجی و تاییدیه
- ردیابی دقیق محل قطعات (انبار/قفسه/جایگاه) با یه فرم «افزودن» کامل
- لیست نیازمندی‌ها — پیگیری قطعاتی که هنوز باید خریداری بشن
- ناوبری تمیز با سایدبار
- هوک اختصاصی `useFetch` برای فراخوانی داده
- اسکلت‌لودینگ و پیام‌های هشدار حرفه‌ای

## 🚀 شروع سریع

### پیش‌نیازها

- نصب بودن Node.js و npm

### نصب

```bash
git clone https://github.com/er4Nxz/WareHouse-project.git
cd WareHouse-project/Code
npm install
```

### اجرا

```bash
# روش اول: JSON Server (لوکال با db.json)
npx json-server --watch db.json --port 3000

# روش دوم: MockAPI (از قبل توی کد یکپارچه شده)
# فقط آدرس API رو به endpoint خودت توی MockAPI تنظیم کن

# اجرای سرور توسعه
npm run dev
```

## 📁 ساختار پروژه

```
WareHouse-project/
├── Code/
│   ├── src/
│   │   ├── App/
│   │   ├── Components/
│   │   │   ├── Create/
│   │   │   ├── Header/
│   │   │   ├── Home/
│   │   │   │   ├── Index/
│   │   │   │   ├── Edit/
│   │   │   │   └── Delete/
│   │   │   ├── Inventory/
│   │   │   ├── RequirementList/
│   │   │   ├── SideBar/
│   │   │   └── NotFound/
│   │   ├── Hooks/
│   │   │   └── useFetch/
│   │   ├── index.css
│   │   └── main.jsx
│   ├── db.json
│   └── index.html
└── README.md
```

## ⚙️ تکنولوژی‌های استفاده‌شده

- React (Hooks، کامپوننت‌های ماژولار، Routing)
- React Router DOM
- Axios
- SweetAlert2
- React Icons
- React Loading Skeleton
- هوک اختصاصی: `useFetch`
- منابع داده: JSON Server (db.json) و MockAPI

## 💡 نکات و تجربیات یادگرفته‌شده

- ساخت یه SearchBar واقعی با منطق فیلتر زنده از صفر
- پیاده‌سازی فیلتر از طریق سایدبار و رندر داینامیک نتایج
- طراحی یه فرم چندفیلدی کامل برای داده‌ی واقعی (ردیابی محل قطعات)
- طراحی جریان‌های CRUD چندصفحه‌ای برای سناریوهای واقعی انبارداری
- ساخت هوک‌های قابل استفاده مجدد و لایه‌ی داده‌ی مستقل
- مدیریت state رابط کاربری بین فرم‌ها، لیست‌ها و صفحات جزئیات

## 📄 لایسنس

این پروژه تحت لایسنس [MIT](LICENSE) منتشر شده — برای استفاده شخصی و آموزشی آزاده.
