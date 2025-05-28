# Real Estate Communication Platform

A modern, full-stack SaaS app built with React + Vite + Supabase + Tailwind CSS.

## 🔧 Setup

1. Install dependencies (use PNPM preferred):
   ```bash
   pnpm install
   ```

2. Create a `.env` file based on `.env.example`:
   ```env
   VITE_SUPABASE_URL=your-supabase-url
   VITE_SUPABASE_ANON_KEY=your-anon-key
   ```

3. Start the development server:
   ```bash
   pnpm dev
   ```

## 🚀 Deploying

### Option 1: Netlify (Recommended)
- Netlify reads `netlify.toml` automatically.
- Add your environment variables in Netlify → Site Settings → Environment.
- Use build command: `pnpm build`
- Publish directory: `dist`

### Option 2: Vercel
- Set environment variables in Project Settings
- Framework preset: **Vite**
- Output directory: `dist`

## 📦 Build

```bash
pnpm build
```

Then deploy the `dist/` folder.

---

Built with ❤️ for real estate pros.