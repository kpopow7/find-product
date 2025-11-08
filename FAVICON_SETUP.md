# Favicon Setup

The favicon has been updated to use `hd_logo.svg` from the images folder.

## What's Been Done

✅ Created `public/favicon.svg` from `public/images/hd_logo.svg`
✅ Updated `index.html` to use the new SVG favicon
✅ Updated `manifest.json` with new app name and icon references

## Current Status

- **SVG Favicon**: ✅ Working (modern browsers)
- **PNG Icons**: ⚠️ Still using old React logos (logo192.png, logo512.png)

## Optional: Create PNG Versions

For better compatibility and PWA support, you may want to create PNG versions of your logo:

1. **192x192 PNG** - For Android home screen
2. **512x512 PNG** - For larger displays and splash screens
3. **favicon.ico** - For older browsers (16x16, 32x32, 48x48 sizes)

### Tools to Convert SVG to PNG/ICO:

- **Online**: 
  - https://convertio.co/svg-png/
  - https://cloudconvert.com/svg-to-png
  - https://realfavicongenerator.net/ (creates all sizes)

- **Command Line** (if you have ImageMagick):
  ```bash
  magick convert public/images/hd_logo.svg -resize 192x192 public/logo192.png
  magick convert public/images/hd_logo.svg -resize 512x512 public/logo512.png
  ```

- **Node.js** (using sharp):
  ```bash
  npm install --save-dev sharp
  ```
  Then create a script to convert the SVG.

## Testing

1. Clear your browser cache
2. Hard refresh (Ctrl+F5 or Cmd+Shift+R)
3. Check the browser tab - you should see the new logo

The SVG favicon will work in:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)

Older browsers will fall back to favicon.ico.

