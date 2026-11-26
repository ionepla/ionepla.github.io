# ionepla.com: how to edit

Every change you save here goes live in about a minute.

## How to edit a file
1. Open the file in this repository (for example `art/index.html`).
2. Click the pencil icon, make your change, then click **Commit changes**.
   (Faster: press the `.` key on this page to open the full editor in your browser.)

## Where things live
- **Home page text:** `index.html`
- **About page text and links:** `about/index.html`
- **Artworks:** `art/index.html`. Find `const ARTWORKS = [` near the bottom and copy an existing block.
  Fields: title, category, medium, size, place, year, src (image path), alt (short description of the image).
  The gallery sorts newest first by year and builds the filter buttons from the categories.
- **Photography:** `photography/index.html`. Find `const PHOTOS = [` and edit `place`, `year` (the caption) and `category`. The page sorts itself newest first (by `year`; photos without a year go last). Photos live in `img/photo`; the page shows three same-width columns, filled in date order so the newest are at the top.
- **Connections:** `connections/index.html`. Find `const ITEMS = [` and copy an existing line.
  Fields: topic (creates the filter), name, url, note (one short line).
  The page sorts itself: topics A-Z, then names A-Z. Add new lines anywhere in the list.
- **Look and feel (fonts, colors, spacing):** `style.css`
- **About page background wash:** `img/about-wash.jpg` (a crop of the Snowline painting), same settings as the home wash.
- **Home page background wash:** `img/home-wash.jpg` (a crop of the Wavescape II painting). Replace the file to change it. Its strength and fade are in `style.css`, under `.wash`.

## Adding an artwork image
1. Resize the photo to about 1200 px on the longest side and save it as a JPEG.
   (On a Mac: open it in Preview, Tools > Adjust Size, then File > Export. Exporting also removes most hidden data.)
2. In the `img/art` folder, click **Add file > Upload files** and drop the photo in.
3. Add a block for it in `ARTWORKS` with `src: "/img/art/your-file-name.jpg"`.

## Good to know
- Use straight quotes `"` and keep the commas between blocks; a missing comma breaks the list.
- If something looks broken after an edit, open the **Commits** page and revert the last change.
- `CNAME` contains the domain name. Leave it as is.
