# Shreyash Pal: Portfolio

AI/ML portfolio built with semantic HTML, custom CSS, and lightweight scroll interactions.

## Run locally

From this folder, install dependencies, then start the local server:

```powershell
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://127.0.0.1:5173/`).

To check the production build locally, run `npm run build` and then `npm run preview`.

## Deploy on GitHub Pages

This site is prepared for the repository `shreyash578/Portfolio` and will be available at:

`https://shreyash578.github.io/Portfolio/`

1. Keep the project files, `public/` assets, and `.github/workflows/deploy.yml` in the repository.
2. In the repository, open **Settings > Pages** and set the build and deployment source to **GitHub Actions**.
3. New pushes to `main` deploy automatically. If the first push ran before Pages was enabled, open **Actions > Deploy portfolio to GitHub Pages > Run workflow** to retry.
4. When the workflow finishes, the site is live at the URL above. The workflow builds the site and publishes the resume, `robots.txt`, and sitemap with it.

## Why it is ATS-friendly

- All content is real text in semantic HTML (`h1`, `h2`, `section`, `article`, `ul`).
- Standard section names cover profile, education, skills, projects, and certifications.
- Title, meta description, canonical URL, `robots.txt`, `sitemap.xml` and Person JSON-LD for search engines.
- Wording matches your resume, so keywords match the resume you submit.
- Downloadable PDF resume and print stylesheet.

## After deploying

- Add the live portfolio link to your resume header, LinkedIn, and HCLTech / IBM application forms.
- Submit the site in Google Search Console so it gets indexed sooner.
