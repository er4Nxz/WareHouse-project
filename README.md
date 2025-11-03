# WareHouse Project

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000000)
![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge)

---

## 🇬🇧 English

### 🎯 Overview
*WareHouse Project is a full-featured inventory & warehouse management SPA built by Erfan Ahmadi. 
It helps teams search, index, add, update and track components across different locations (warehouses and positions). 
The project blends real-world workflows with React patterns (routing, custom hooks, and modular components).

### 🧩 Features
- Component catalog with search & filters
- Create / Edit / Delete items with validation and confirmations
- Locations & placements handling (warehouse / shelf / position)
- Requirement List (collect missing parts for procurement)
- Sidebar navigation with clean UX
- Reusable `useFetch` hook for data fetching
- Loading skeletons and polished alerts

### ⚙️ Installation & Setup
git clone https://github.com/er4Nxz/WareHouse-project.git
cd WareHouse-project/Code

# Install dependencies
npm install

# Start the API (choose one of the following)
# 1) JSON Server (local db.json)
npx json-server --watch db.json --port 3000

# 2) Use MockAPI (already integrated in code)
#   set API base to your MockAPI endpoint

# Run the dev server
npm run dev

### 🚀 Usage Examples
// Fetch items via custom hook
const { state: components, loading } = useFetch('http://localhost:3000/Components');

// Create a new component
await axios.post('http://localhost:3000/Components', payload);

### 🛠️ Technologies Used
- React (Hooks, modular components, routing)
- React Router DOM
- Axios
- SweetAlert2
- React Icons
- React Loading Skeleton
- Custom Hook: `useFetch`
- Data Sources: JSON Server (db.json) and MockAPI

### 📁 Project Structure

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
│   │   │   │   ├── Delete/
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

### 💡 Lessons Learned
- Designing multi-view CRUD for real warehouse workflows
- Building reusable hooks and decoupled data layer
- Managing UI state across forms, lists and detail pages

### 🧾 License
MIT License — free for personal and educational use.

---

## 🇮🇷 فارسی

### 🎯 معرفی پروژه
WareHouse Project یک اپلیکیشن تک‌صفحه‌ای برای مدیریت انبار و قطعات است که توسط عرفان احمدی ساخته شده. 
با این ابزار می‌توانید قطعات را جستجو، ثبت، ویرایش و حذف کنید و برای هر قطعه محل نگهداری (انبار/قفسه/جایگاه) مشخص نمایید. 
این پروژه ترکیبی از چالش‌های واقعی انبارداری با الگوهای استاندارد React است (روتینگ، کامپوننت‌های ماژولار و هوک اختصاصی).

### 🧩 ویژگی‌ها
- کاتالوگ قطعات با جستجو و فیلتر
- ایجاد/ویرایش/حذف با اعتبارسنجی و تاییدیه‌ها
- مدیریت مکان‌ها (warehouse / shelf / position)
- لیست نیازمندی‌ها* برای قطعات موردنیاز خرید
- ناوبری سایدبار با تجربه کاربری تمیز
- هوک اختصاصی `useFetch` برای فراخوانی داده
- اسکلت‌لودینگ و پیام‌های حرفه‌ای

### ⚙️ نصب و اجرا
git clone https://github.com/er4Nxz/WareHouse-project.git
cd WareHouse-project/Code

# نصب پکیج‌ها
npm install

# اجرای API (یکی را انتخاب کنید)
# 1) JSON Server (لوکال با db.json)
npx json-server --watch db.json --port 3000

# 2) MockAPI (آماده در کد)
#   آدرس MockAPI خود را تنظیم کنید

# اجرای محیط توسعه
npm run dev

### 🚀 مثال استفاده
// واکشی آیتم‌ها با هوک اختصاصی
const { state: components, loading } = useFetch('http://localhost:3000/Components');

// ایجاد یک قطعه جدید
await axios.post('http://localhost:3000/Components', payload);

### 🛠️ تکنولوژی‌ه

ا
- *React (Hooks، کامپوننت‌های ماژولار، Routing)
- React Router DOM
- Axios
- SweetAlert2
- React Icons
- React Loading Skeleton
- هوک سفارشی: `useFetch`
- منابع داده: JSON Server (db.json) و MockAPI

### 📁 ساختار پروژه

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
│   │   │   │   ├── Delete/
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

### 💡 نکات و تجربیات
- طراحی CRUD چندصفحه‌ای برای سناریوهای واقعی انبار
- ساخت هوک‌های قابل استفاده مجدد و لایه داده مستقل
- مدیریت state رابط کاربری بین فرم‌ها، لیست‌ها و جزئیات

### 🧾 لایسنس
مجوز MIT* — آزاد برای استفاده شخصی و آموزشی.
