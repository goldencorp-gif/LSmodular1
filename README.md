
# Le Sector Website - Asset Management

This project uses a **`public`** folder to manage static assets like images and configuration files. This ensures your logo and settings can be updated easily without changing the code.

## 1. How to Upload Your Main Logo

To replace the default header logo with your own brand image:

1.  **Locate the `public` folder** in your file explorer.
2.  **Upload your image file** into this folder.
3.  **Rename the file** to `logo.png` (or `logo.jpg`, `logo.svg` etc).

## 2. How to Upload Your Footer Logo (Optional)

If you want a different version of your logo for the footer (e.g., all white or monochrome):

1.  **Upload your second image** into the `public` folder.
2.  **Rename the file** to `footer-logo.png` (or your preferred name).

## 3. Configuring the Site

The site looks for a settings file located at `public/site-settings.json`. You can edit this file to point to your new files.

**Example `public/site-settings.json`:**

```json
{
  "logoUrl": "/logo.png",
  "footerLogoUrl": "/footer-logo.png"
}
```

*   **`logoUrl`**: Used in the top Navigation bar.
*   **`footerLogoUrl`**: Used in the Footer. If you leave this blank or remove it, the site will automatically use the main `logoUrl`.

*Note: The path `/logo.png` works because files in the `public` folder are served at the root of the website.*

## 4. Troubleshooting

*   **Logo not showing?** Ensure the filename in `site-settings.json` matches your uploaded file exactly (case-sensitive).
*   **Cached?** If you uploaded a new file with the same name, you might need to hard-refresh your browser (Ctrl+F5 or Cmd+Shift+R).
