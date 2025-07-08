# Vivek Gangdhar Portfolio - Personal Website

## Overview

This is a personal portfolio website for Vivek Gangdhar, a B.Tech Computer Science Engineering student. The application showcases his skills, projects, education, and contact information in a modern, responsive design. The site is built as a single-page application (SPA) with a full-stack architecture using React for the frontend and Express.js for the backend.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Library**: Radix UI components with shadcn/ui styling system
- **Styling**: Tailwind CSS with custom design tokens and CSS variables
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Component Structure**: Modular component architecture with reusable UI components

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API**: REST API endpoints for resume downloads and potential future features
- **Development**: Hot reloading with Vite integration in development mode
- **Database**: Drizzle ORM with PostgreSQL (via Neon Database) for future user management features

## Key Components

### Frontend Components
- **Hero Section**: Landing page with personal introduction and contact buttons
- **About Section**: Educational background and personal statistics
- **Skills Section**: Technical skills categorized by domain (Programming, Web Dev, Tools, Soft Skills)
- **Projects Section**: Portfolio projects with descriptions and technology stacks
- **Education Section**: Academic timeline, experience, and certifications
- **Contact Section**: Contact information and resume download functionality
- **Navigation**: Smooth scrolling navigation with mobile-responsive design

### Backend Components
- **Express Server**: Main application server with middleware for logging and error handling
- **Route Handlers**: API endpoints for resume downloads and future features
- **Storage Layer**: Memory-based storage with interfaces for future database integration
- **Vite Integration**: Development server integration for seamless full-stack development

## Data Flow

1. **Client Requests**: Browser loads the React SPA served by Express
2. **Component Rendering**: React components render with data from props and local state
3. **API Calls**: TanStack Query manages server state for API requests
4. **Resume Downloads**: Direct API calls to backend for file downloads
5. **Navigation**: Client-side routing with smooth scrolling to sections
6. **Responsive Design**: Tailwind CSS handles responsive layout adjustments

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React, React DOM, React Hook Form with Zod validation
- **UI Components**: Radix UI primitives for accessible components
- **Styling**: Tailwind CSS, class-variance-authority for component variants
- **Icons**: Lucide React for general icons, React Icons for brand icons
- **Utilities**: date-fns for date formatting, clsx for conditional classes

### Backend Dependencies
- **Server**: Express.js for HTTP server functionality
- **Database**: Drizzle ORM with PostgreSQL adapter (@neondatabase/serverless)
- **Development**: tsx for TypeScript execution, esbuild for production builds
- **Session Management**: connect-pg-simple for future session storage

## Deployment Strategy

### Development
- **Local Development**: Vite dev server with Express backend integration
- **Hot Reloading**: Automatic refresh for both frontend and backend changes
- **TypeScript**: Full TypeScript support with shared types between frontend and backend

### Production Build
- **Frontend**: Vite builds optimized React bundle to `dist/public`
- **Backend**: esbuild compiles TypeScript server to `dist/index.js`
- **Static Assets**: Express serves built frontend files in production
- **Database**: Drizzle migrations handle schema changes

### Hosting Considerations
- **Environment**: Designed for Node.js hosting platforms
- **Database**: PostgreSQL database connection via environment variables
- **Assets**: Static file serving through Express in production
- **Performance**: Optimized builds with code splitting and asset optimization

## Changelog

```
Changelog:
- July 08, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```