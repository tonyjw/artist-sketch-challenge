# Artist Sketch Challenge

Do you want to get better at urban sketching? Need some inspiration for painting or drawing?

Use the Artist Sketch Challenge to practice your skills with a little artistic pressure - you have only 30 seconds to draw what you see before moving on.  

We've pre-selected an assortment of artistic themes to show you, including "Quaint Streets", "Nature Close-ups" and more.

## Features

- Fullscreen reference image display
- Configurable rotation interval for timed sketching sessions
- Curated artistic themes with "Surprise Me" option
- Progress bar for timing your sketches
- Proper Unsplash photo attribution
- Responsive design
- Secure API key handling with environment variables
- Cloudflare Pages Functions for serverless API
- Paginated image loading (up to 100 images per theme)

## Prerequisites

- Node.js 18.x or later
- Modern web browser
- Unsplash API credentials
- Cloudflare account (for deployment)

## Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd <repository-name>
```

2. Get your Unsplash API credentials:
   - Go to [Unsplash Developers](https://unsplash.com/developers)
   - Create an account or sign in
   - Create a new application
   - Copy your Access Key

3. Install dependencies:
```bash
npm install
```

4. Set up environment variables for local development:
   - Create a `.dev.vars` file in the root directory
   - Add your Unsplash API key:
   ```
   UNSPLASH_ACCESS_KEY=your_unsplash_access_key_here
   ```
   - The `.dev.vars` file is already included in `.gitignore` to prevent committing sensitive data
   - Never commit your `.dev.vars` file or share your API keys

## Development

1. Start the development server with Wrangler:
```bash
npm run dev
```

2. Open your browser and navigate to:
```
http://localhost:8000
```

## Configuration

### Environment Variables
The application uses environment variables for configuration:

- `UNSPLASH_ACCESS_KEY`: Your Unsplash API access key
  - Required for both development and production
  - Never commit this value to version control
  - Set in `.dev.vars` for local development (automatically ignored by git)
  - Set in Cloudflare Pages dashboard for production
  - Keep your API keys secure and never share them

### Rotation Interval
The rotation interval determines how long each image is displayed before moving to the next one. You can configure this in two ways:

1. Through the UI:
   - Click the hamburger menu
   - Adjust the "Speed (in seconds)" value
   - The setting is automatically saved to localStorage

2. In the code:
   - Open `script.js`
   - Modify the default value in the `rotationInterval` variable:
   ```javascript
   let rotationInterval = parseInt(localStorage.getItem('rotationInterval')) || 30; // Default: 30 seconds
   ```

### Maximum Number of Images
The gallery loads images in batches of 10 and can display up to 100 images per theme. You can configure these limits in `script.js`:

```javascript
const MAX_PAGES = 10;      // Maximum number of pages to load
const IMAGES_PER_PAGE = 10; // Number of images per page
```

Total maximum images = MAX_PAGES × IMAGES_PER_PAGE (default: 100 images)

## Deployment to Cloudflare Pages

### Option 1: Deploy via Cloudflare Dashboard (Recommended)

1. Log in to your [Cloudflare dashboard](https://dash.cloudflare.com/)
2. Go to "Workers & Pages" → "Pages"
3. Click "Create application" → "Connect to Git"
4. Select your repository and authorize Cloudflare
5. Configure the build settings:
   - **Build command:** (leave empty)
   - **Build output directory:** `/` (root directory)
6. Add environment variables:
   - Variable name: `UNSPLASH_ACCESS_KEY`
   - Value: Your Unsplash API access key
7. Click "Save and Deploy"

Your site will be deployed to a `*.pages.dev` URL and automatically redeploy on every push to your main branch.

### Option 2: Deploy via Wrangler CLI

1. Install Wrangler CLI globally (if not already installed):
```bash
npm install -g wrangler
```

2. Authenticate with Cloudflare:
```bash
wrangler login
```

3. Deploy your site:
```bash
npm run deploy
```

4. Set environment variables in the Cloudflare dashboard:
   - Go to your Pages project
   - Navigate to Settings → Environment variables
   - Add `UNSPLASH_ACCESS_KEY` with your API key

## Project Structure

```
.
├── functions/           # Cloudflare Pages Functions
│   └── api/
│       └── photos.js    # API endpoint for Unsplash photos
├── index.html           # Main HTML file
├── styles.css           # CSS styles
├── script.js            # JavaScript application code
├── themes.json          # Theme configuration
├── package.json         # Dependencies and scripts
├── wrangler.toml        # Cloudflare Wrangler configuration
├── .dev.vars            # Local environment variables (git-ignored)
├── .gitignore           # Git ignore rules
└── README.md            # This file
```

## Adding New Themes

1. Open `themes.json`
2. Add a new theme object:
```json
{
    "query": "your theme query",
    "display": "Your Theme Display Name"
}
```

## Customizing Styles

- Main styles are in `styles.css`
- The application uses a clean, minimal design
- All colors and transitions can be modified in the CSS file

## Troubleshooting

### Image Loading Issues
If images aren't loading:
1. Verify your Unsplash API key is set in environment variables
   - Check `.dev.vars` file for local development
   - Check Cloudflare Pages dashboard for production
2. Check the browser console for errors
3. Ensure you have an active internet connection

### Development Server Issues
If the development server won't start:
1. Verify Node.js is installed
2. Check if port 8000 is available
3. Ensure all dependencies are installed (run `npm install`)
4. Verify Wrangler is installed correctly
5. Check the server logs for errors

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the GNU General Public License v3.0 - see the LICENSE file for details.

## Acknowledgments

- [Unsplash](https://unsplash.com) for providing the image API
- All photographers whose work is featured in the gallery
- The artistic community for inspiration and feedback