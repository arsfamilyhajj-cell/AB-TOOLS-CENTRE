# AB Tools Centre Website

A responsive, static business website for **AB Tools Centre** covering:
- Hand tools
- Power tools
- Welding equipment
- Workshop supplies
- Product enquiries
- Contact / quote requests
- Browser-based editing panel
- Logo upload
- GitHub Pages compatibility

## Project structure

```text
ab-tools-centre-website/
├── index.html
├── styles.css
├── scripts.js
├── README.md
└── assets/
    └── ab-tools-centre-logo.png
```

## Upload to GitHub Pages

1. Create a new GitHub repository, for example `ab-tools-centre`.
2. Upload **all files and folders** from this project.
3. Commit the files to the `main` branch.
4. Open the repository's **Settings → Pages**.
5. Select **Deploy from a branch**.
6. Select `main` and `/ (root)`.
7. Save.
8. GitHub will provide the public Pages URL.

## Editing the website

Click **Edit Website** on the live site.

The editor can change:
- Business name
- Phone
- WhatsApp
- Email
- Address
- Opening hours
- Hero heading and description
- About text
- Logo

### Important limitation

The built-in editor stores changes in the visitor's browser using `localStorage`. It does **not** automatically write files back to GitHub.

For permanent GitHub changes:
- Replace/edit `index.html`, `styles.css`, or `scripts.js`.
- Replace images inside `assets/`.
- Commit and push the changes to GitHub.

Do not put a GitHub personal access token inside this front-end website. A public browser application must not contain a GitHub write token.

## Adding real product photos

Place images inside `assets/`, for example:

```text
assets/
├── logo.png
├── cordless-drill.jpg
├── angle-grinder.jpg
├── welding-machine.jpg
└── tool-set.jpg
```

Then replace a product visual in `index.html` with:

```html
<div class="product-image">
  <img src="assets/cordless-drill.jpg" alt="Professional cordless drill">
</div>
```

Add this CSS if using product photos:

```css
.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

## Contact form

The current form opens the visitor's email application using `mailto:`.

For a real web form, connect it to a service such as Formspree, Netlify Forms, a custom backend, or your preferred CRM/form provider.

## Recommended real business details to replace

- Exact shop name
- Shop address
- Phone number
- WhatsApp number
- Email
- Opening hours
- Google Maps location
- Brands stocked
- Actual product photos
- Actual product names/prices
- Warranty/repair policy
- Delivery information
- Social media links
- VAT/tax/business registration information if appropriate

## Branding

The supplied logo is already included in:

`assets/ab-tools-centre-logo.png`

The design uses an industrial black / steel / orange visual system to match the supplied AB Tools Centre logo.

## Product category image

The `assets/ab-tools-centre-product-categories.png` file is the supplied product-category artwork covering Power Tools, Hand Tools, Abrasive Wheels and Welding Equipment. It is included in the final package for use as a catalogue/banner image.
