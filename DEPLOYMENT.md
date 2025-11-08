# Deployment Guide

This project uses Webpack for bundling and can be deployed to various platforms.

## Building for Production

### 1. Install Dependencies

```bash
npm install
```

### 2. Build the Project

```bash
npm run build
```

This will create an optimized production bundle in the `dist` folder.

## Deployment Options

### Option 1: Static Hosting (Netlify, Vercel, GitHub Pages)

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to your hosting provider.

#### Netlify
- Drag and drop the `dist` folder to Netlify
- Or connect your Git repository and set build command: `npm run build` and publish directory: `dist`

#### Vercel
- Install Vercel CLI: `npm i -g vercel`
- Run `vercel` in the project directory
- Or connect via GitHub and set output directory to `dist`

#### GitHub Pages
- Install gh-pages: `npm install --save-dev gh-pages`
- Add to package.json scripts: `"deploy": "npm run build && gh-pages -d dist"`
- Run: `npm run deploy`

### Option 2: Traditional Web Server (Apache, Nginx)

1. Build the project:
   ```bash
   npm run build
   ```

2. Copy the contents of the `dist` folder to your web server's document root.

3. Configure your server to serve `index.html` for all routes (for React Router support).

#### Apache (.htaccess)
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

#### Nginx
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

### Option 3: Docker

Create a `Dockerfile`:

```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Build and run:
```bash
docker build -t product-finder .
docker run -p 8080:80 product-finder
```

## Development

To run the development server:

```bash
npm start
```

The app will be available at `http://localhost:3000`

## Build Output

The production build creates:
- Optimized JavaScript bundles in `dist/static/js/`
- Optimized CSS in `dist/static/css/`
- Images and assets in `dist/static/media/` and `dist/images/`
- HTML file at `dist/index.html`

## Environment Variables

If you need environment variables, create a `.env` file:

```
REACT_APP_API_URL=https://api.example.com
```

Access in code: `process.env.REACT_APP_API_URL`

## Troubleshooting

### Images not loading
- Ensure image paths in `productData.js` are relative to the `public` folder
- Check that images exist in `public/images/`
- Verify the build copied images to `dist/images/`

### Routing issues
- Ensure your server is configured to serve `index.html` for all routes
- Check that `publicPath` in webpack.config.js matches your deployment path

### Build errors
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Clear build cache: `rm -rf dist`
- Check Node.js version (requires Node 14+)

