# Static Coffee Shop Website

A high-fidelity, static Coffee Shop Website built with React.js and Tailwind CSS. This project showcases the shop's ambiance, menu, and services, with a functional WhatsApp ordering integration.

## 🎯 Project Features

- **Modern & Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Hero Section**: Eye-catching full-width banner with shop branding and call-to-action
- **About Us**: Engaging section highlighting the shop's history and unique atmosphere
- **Menu Display**: Beautiful grid layout showcasing 8 menu items (coffees and pastries) with high-quality images
- **Services Section**: Icon-based display of shop offerings (Dine-In, Takeaway, Free Wi-Fi, Work/Study Space, Live Music)
- **Gallery**: Responsive image grid displaying the shop's ambiance and products
- **Contact & Ordering**: Complete contact information with Google Maps integration
- **WhatsApp Ordering**: Functional form that opens WhatsApp with pre-filled order messages

## 🛠️ Tech Stack

- **React.js** - Frontend framework
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Modern icon library
- **React Scroll** - Smooth scrolling navigation

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Kalana8/Static-Coffee-Shop-Website.git
cd Static-Coffee-Shop-Website
```

2. Install dependencies:
```bash
npm install
```

## 🚀 How to Run

### Development Mode

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port shown in your terminal).

### Production Build

Build the project for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 📁 Project Structure

```
Static-Coffee-Shop-Website/
├── public/
│   └── images/          # Placeholder images directory
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Menu.jsx
│   │   ├── MenuCard.jsx
│   │   ├── Services.jsx
│   │   ├── Gallery.jsx
│   │   ├── Contact.jsx
│   │   └── WhatsAppOrderForm.jsx
│   ├── data/
│   │   └── menuData.js  # Menu items data (easy to edit)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎨 Design Features

- **Color Palette**: Warm, earthy tones (Deep Espresso, Cream, Warm Gold)
- **Typography**: Inter/Lato for body text, Playfair Display for headings
- **Responsive Breakpoints**:
  - Mobile: < 640px (single column, hamburger menu)
  - Tablet: 640px - 1024px (two-column grids)
  - Desktop: > 1024px (multi-column grids, full navigation)

## 📝 Customization

### Updating Menu Items

Edit `src/data/menuData.js` to add, remove, or modify menu items. Each item should have:
- `id`: Unique identifier
- `name`: Item name
- `description`: Short description
- `price`: Price as string (e.g., "$4.50")
- `image`: Image URL
- `category`: "Coffee" or "Pastries"

### Updating WhatsApp Phone Number

In `src/components/WhatsAppOrderForm.jsx`, replace the placeholder phone number:
```javascript
const phoneNumber = "+1234567890"; // Replace with your actual number
```

### Updating Contact Information

Edit the contact details in `src/components/Contact.jsx`:
- Address
- Phone number
- Email address
- Google Maps embed URL

### Replacing Placeholder Images

All images currently use Unsplash placeholder URLs. Replace them with your own images:
- Hero background: `src/components/Hero.jsx`
- About section: `src/components/About.jsx`
- Menu items: `src/data/menuData.js`
- Gallery: `src/components/Gallery.jsx`

## ✅ Acceptance Criteria

- ✅ **Menu Display**: All 8 products render correctly with images and prices
- ✅ **WhatsApp Integration**: Order form successfully opens WhatsApp with pre-filled message
- ✅ **Responsiveness**: Layout adjusts smoothly without horizontal scrolling on all devices
- ✅ **Clean Code**: Modular components with clear separation of concerns

## 📹 Live Demo

<!-- Add your live demo video link here -->
[Live Demo Video Link - Coming Soon]

## 📄 License

ISC

## 👤 Author

Kalana Kavinda

---

**Note**: This is a frontend-only project. No backend is required. All data is stored in local JavaScript files for easy editing.
