# Portfolio Website - Sarthak Gaikwad

A modern, responsive portfolio website built with Next.js 15 and React 19, featuring dynamic animations and a sleek dark mode interface.

## ✨ Features

- **Responsive Design**: Fully responsive layout optimized for all devices (mobile, tablet, desktop)
- **Modern UI/UX**: Clean and professional interface with smooth animations using Framer Motion
- **Dark Mode Support**: Eye-friendly dark theme with gradient accents
- **Dynamic Content**:
  - Animated hero section with typing effects
  - Floating technology icons
  - Project showcase
  - Contact section with social links
- **Performance Optimized**: Built with Next.js 15 App Router and Turbopack for optimal performance
- **SEO Friendly**: Optimized for search engines with proper meta tags and semantic HTML

## 🚀 Tech Stack

### Frontend
- **Framework**: [Next.js 15.1.0](https://nextjs.org/) with App Router
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 3.4.1](https://tailwindcss.com/)
- **Animations**: [Framer Motion 11.15.0](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/)

### Utilities
- **Type Animation**: [React Type Animation](https://www.npmjs.com/package/react-type-animation), [React Typed](https://www.npmjs.com/package/react-typed)
- **Notifications**: [React Toastify](https://fkhadra.github.io/react-toastify/)
- **Carousel**: [Embla Carousel React](https://www.embla-carousel.com/)
- **Utilities**: clsx, tailwind-merge

### Development Tools
- **Linting**: ESLint with Next.js configuration
- **CSS Processing**: PostCSS

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 18.x or higher)
- **npm**, **yarn**, **pnpm**, or **bun** package manager
- **Git** for version control

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd sarthak-next
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to see the application

## 📁 Project Structure

```
sarthak-next/
├── app/                      # Next.js App Router directory
│   ├── globals.css          # Global styles
│   ├── layout.js            # Root layout component
│   └── page.js              # Home page
├── components/              # React components
│   ├── Contact.js          # Contact section
│   ├── FloatingIcon.js     # Animated floating icons
│   ├── Footer.js           # Footer component
│   ├── Hero.js             # Hero/landing section
│   ├── Navbar.js           # Navigation bar
│   └── Projects.js         # Projects showcase
├── config/                  # Configuration files
│   └── FloatingIcons.js    # Floating icons configuration
├── lib/                     # Utility functions
│   └── utils.js            # Helper utilities
├── public/                  # Static assets
│   ├── icons/              # Technology icons
│   ├── projects/           # Project images
│   └── ...                 # Other images
├── .gitignore
├── eslint.config.mjs       # ESLint configuration
├── jsconfig.json           # JavaScript configuration
├── next.config.mjs         # Next.js configuration
├── package.json            # Project dependencies
├── postcss.config.mjs      # PostCSS configuration
├── tailwind.config.mjs     # Tailwind CSS configuration
└── README.md               # Project documentation
```

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build the application for production |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint to check code quality |

## 🔧 Configuration

### Tailwind CSS
Custom theme configuration can be found in `tailwind.config.mjs`. Includes custom colors, animations, and utility classes.

### Next.js
Next.js configuration is available in `next.config.mjs`. Currently using default settings with room for customization.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Sarthak Gaikwad**

- GitHub: [@sarthak5290](https://github.com/sarthak5290)
- LinkedIn: [Sarthak Gaikwad](https://www.linkedin.com/in/sarthak-gaikwad-848288529029082003)
- Twitter: [@Sarthak27400371](https://twitter.com/Sarthak27400371)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Vercel](https://vercel.com/) - Deployment Platform
- [Tailwind CSS](https://tailwindcss.com/) - Styling Framework
- [Framer Motion](https://www.framer.com/motion/) - Animation Library

---

## 🚀 Deployment

### Deploy on Vercel (Recommended)

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new):

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your repository to Vercel
3. Add environment variables in Vercel project settings
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=<your-repo-url>)

### Other Deployment Options

- **Netlify**: Follow the [Next.js deployment guide for Netlify](https://docs.netlify.com/frameworks/next-js/overview/)
- **AWS Amplify**: Use the [Amplify Next.js deployment guide](https://docs.amplify.aws/guides/hosting/nextjs/q/platform/js/)
- **Docker**: Containerize using the official [Next.js Docker example](https://github.com/vercel/next.js/tree/canary/examples/with-docker)

For more deployment options, check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

---

**Made with ❤️ by Sarthak Gaikwad**
