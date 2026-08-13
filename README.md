# Keptel Frontend

A modern, responsive Next.js web application for Keptel's digital presence.

## Technology Stack

- **Framework**: Next.js with TypeScript
- **Styling**: Tailwind CSS, PostCSS
- **UI Components**: Custom React components
- **Code Quality**: ESLint, TypeScript strict mode

## Features

- **About Page**: Company information and team profiles
- **Blog**: Content management and articles
- **Careers**: Job listings and application portal
- **Case Studies**: Portfolio and client success stories
- **Contact Us**: Interactive contact form
- **Newsletter**: Subscription management interface
- **Service Pages**:
  - Executive Search
  - Global PEO Service
  - RPO (Recruitment Process Outsourcing)
  - Talent Acquisition & Intelligence
  - Tech Solutions

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Backend API running (see keptel_backend repository)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd keptel_frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:3001
   ```
   Update the URL to match your backend API endpoint.

## Development

Start the development server:

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build production-optimized application |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint for code quality checks |

## Project Structure

```
keptel_frontend/
├── app/
│   ├── about/              # About page
│   ├── blog/               # Blog section
│   ├── careers/            # Careers page
│   ├── case-study/         # Case studies
│   ├── contact-us/         # Contact form
│   ├── components/         # Reusable UI components
│   ├── executive-search/   # Executive search service
│   ├── global-peo-service/ # Global PEO service
│   ├── newsletter/         # Newsletter subscription
│   ├── rpo/                # RPO service
│   ├── talent-acquisition/ # Talent acquisition service
│   ├── tech-solutions/     # Tech solutions
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── public/                 # Static assets (images, fonts, etc.)
├── styles/                 # Global styles
├── .env.local             # Environment variables (create this)
├── next.config.js         # Next.js configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_API_URL` | Backend API base URL | Yes |

**Note**: All environment variables prefixed with `NEXT_PUBLIC_` are exposed to the browser.

## Building for Production

1. Create a production build:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy automatically on push

### Other Platforms

The application can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Azure Static Web Apps
- Custom Node.js hosting

Ensure the `NEXT_PUBLIC_API_URL` environment variable is set to your production backend URL.

## Code Style

This project uses:
- **ESLint** for code linting
- **TypeScript** for type safety
- **Tailwind CSS** for styling

Run linting before committing:
```bash
npm run lint
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Create a feature branch from `main`
2. Make your changes
3. Test thoroughly across different devices
4. Run `npm run lint` to ensure code quality
5. Submit a pull request with a clear description

## Troubleshooting

### Build Errors

If you encounter build errors:
```bash
rm -rf .next node_modules
npm install
npm run build
```

### API Connection Issues

Verify that:
- Backend server is running
- `NEXT_PUBLIC_API_URL` is correctly set
- CORS is properly configured in the backend

