# Portfolio Website - Afrizal Fikri

Portfolio website profesional yang dibangun dengan React + Vite dan Tailwind CSS. Website ini menampilkan profil, skills, pengalaman, proyek-proyek, dan informasi kontak dengan desain modern dark theme.

## 🚀 Fitur

- ✨ **Modern Design** - Dark theme dengan glassmorphism dan animasi smooth
- 📱 **Responsive** - Tampilan optimal di desktop, tablet, dan mobile
- 🎨 **Interactive UI** - Tilt effects, hover animations, dan scroll reveals
- 📊 **Sections**:
  - Profile dengan typewriter effect
  - Skills dengan progress bars
  - Work Experience timeline
  - **Projects showcase** dengan tech stack badges
  - **Contact information** dengan interactive cards

## 🛠️ Tech Stack

- **React** - UI Library
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Google Fonts (Outfit)** - Typography

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## ✏️ Customization

### 1. Update Personal Data

Edit file `src/portfolioData.json` untuk mengubah data pribadi Anda:

```json
{
  "name": "Your Name",
  "email": "your.email@example.com",
  "bio": "Your bio description",
  "location": "Your City, Country",
  "campus": "Your University",
  "profilePic": "/images/your-photo.jpg",
  ...
}
```

### 2. Add Your Projects

Tambahkan proyek Anda di array `projects` dalam `portfolioData.json`:

```json
{
  "id": 1,
  "title": "Project Name",
  "description": "Project description",
  "image": "/images/project-screenshot.jpg",
  "tech": ["React", "Node.js", "MongoDB"],
  "demoUrl": "https://your-demo.com",
  "githubUrl": "https://github.com/yourusername/repo",
  "featured": true
}
```

### 3. Update Skills

Edit array `skills` untuk menampilkan teknologi yang Anda kuasai:

```json
{
  "name": "Technology Name",
  "level": "Advanced/Intermediate/Beginner",
  "iconName": "tech-icon-name",
  "color": "cyan/green/yellow/purple"
}
```

### 4. Add Profile Picture & Project Images

- Letakkan foto profil di `public/images/fotoku.jpg`
- Letakkan screenshot proyek di `public/images/project-*.jpg`

### 5. Update Social Links

Edit `socials` object dalam `portfolioData.json`:

```json
"socials": {
  "github": "https://github.com/yourusername",
  "linkedin": "https://linkedin.com/in/yourprofile"
}
```

## 📁 Project Structure

```
portfolio-afrizal/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation bar
│   │   ├── Profile.jsx         # Hero section
│   │   ├── Skills.jsx          # Skills section
│   │   ├── Experiences.jsx     # Work experience
│   │   ├── Projects.jsx        # Projects showcase
│   │   ├── Contact.jsx         # Contact section
│   │   ├── ProjectCard.jsx     # Individual project card
│   │   ├── SkillCard.jsx       # Individual skill card
│   │   ├── TiltCard.jsx        # 3D tilt effect wrapper
│   │   └── RevealOnScroll.jsx  # Scroll animation wrapper
│   ├── App.jsx                 # Main app component
│   ├── portfolioData.json      # Your personal data
│   └── index.css               # Global styles
├── public/
│   └── images/                 # Your images here
└── index.html
```

## 🎨 Color Palette

- **Background**: `#050505`
- **Primary (Cyan)**: `#06b6d4`
- **Secondary (Purple)**: `#8b5cf6`
- **Text**: `#e2e8f0` (slate-300)
- **Muted**: `#94a3b8` (slate-400)

## 📝 License

Feel free to use this template for your own portfolio!

## 🙏 Credits

Built with ❤️ using React, Vite, and Tailwind CSS
