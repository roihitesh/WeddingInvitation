# Wedding invitation

A static, bilingual Traditional Hindu wedding invitation built with semantic HTML, CSS, and native JavaScript modules. It needs no build step or framework.

## View it on your computer

From this folder, run:

```sh
python3 -m http.server 8000
```

Open <http://localhost:8000>. Click **Enter Auspicious Invitation**, then click the kumkum seal to open the invitation. The server must remain running while you view it. To open the sample tenant, use <http://localhost:8000/?id=sample-sharma-verma>.

## Make it yours

Edit `config/weddings/demo-wedding.js` and replace the sample couple names, family acknowledgements, muhurat, ceremony times, venue, map links, photos, RSVP deadline, and page title. The current demo uses Hitesh and Shivanee, 26 November 2027, and Sheraton Grand Palace Indore as a sample venue. Each ceremony card opens a details popup with an original, browser-generated Bollywood-inspired instrumental cue. For a specific Bollywood recording, add a licensed audio URL to that event's `musicUrl`; use music you have permission to share. Each user-facing string has English and Hindi values. Replace the SVG sample artwork in `assets/images/` with your own image files, then update the `gallery` URLs. The three available themes are in `config/templates/`.

To add a tenant, create a file under `config/weddings/`, register its imported `weddingData` in `config/tenants.js`, and use `?id=your-tenant-id` or `#your-tenant-id` in the URL. Unknown IDs fall back to the demo. This is static multi-tenancy: anyone who knows a tenant URL can view that invitation; it does not provide private accounts or access control.

## RSVP collection

The form is intentionally disconnected until `googleSheetEndpoint` is set in the tenant config. It does not store replies in the browser or GitHub. To collect replies in Google Sheets, deploy a Google Apps Script web app that validates and appends form fields to a sheet, then put its HTTPS web-app URL in that field. The static site sends a simple form POST with `no-cors`; browsers cannot read the Apps Script response, so the success message means the request was sent, not that the script confirmed the row was saved. Test the full flow with sample data before sharing. A public form URL is not a secret; never place private keys or service credentials in this repository.

## Host it

This project can be deployed as a static site by GitHub Pages, Netlify, or Vercel. GitHub Pages serves public repositories on GitHub Free; using a private repository as its source requires an eligible paid plan. Netlify and Vercel can connect to a private GitHub repository. A hosted invitation link is public to anyone who has it, even while the source repository stays private.

The GitHub repository is `roihitesh/WeddingInvitation`. Push code to GitHub, then connect the repository in your chosen host and deploy the repository root. No build command is required.

## Project layout

```text
index.html
config/
  tenants.js
  templates/                  Theme presets
  weddings/                   One configuration module per invitation
assets/
  css/                         Theme, typography, envelope, and page styles
  images/                      Replaceable sample gallery and preview art
  js/core/                     Tenant routing, language, sound, app setup
  js/components/               Envelope, countdown, itinerary, gallery, RSVP
```
