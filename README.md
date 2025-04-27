# Artist Sketch Challenge

A fullscreen image gallery designed to inspire artists with rotating reference photos. The gallery features carefully curated themes perfect for sketching and painting practice, with a clean interface that lets you focus on the subject matter.

## Features

- Fullscreen reference image display
- Configurable rotation interval for timed sketching sessions
- Curated artistic themes with "Surprise Me" option
- Progress bar for timing your sketches
- Proper Unsplash photo attribution
- Responsive design
- Local development server with CORS support
- Paginated image loading (up to 100 images per theme)

## Prerequisites

- Python 3.x (for local development server)
- Modern web browser
- Unsplash API credentials

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

3. Set up your API configuration:
   ```bash
   # Copy the sample configuration file
   cp config.sample.js config.js
   ```
   
   Then edit `config.js` with your API credentials:
   ```javascript
   const apiConfig = {
       appId: 'YOUR_APP_ID',
       accessKey: 'YOUR_ACCESS_KEY',
       secretKey: 'YOUR_SECRET_KEY'
   };
   ```

   Note: The `config.js` file is ignored by git to prevent accidentally committing your API credentials.

## Configuration

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

## Running the Application

1. Start the local development server:
```bash
python server.py
```

2. Open your browser and navigate to:
```
http://localhost:8000
```

The server will:
- Serve the application files
- Handle CORS requests
- Enable local development

## Development

### Project Structure

```
.
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript application code
├── themes.json         # Theme configuration
├── server.py           # Python development server
├── config.sample.js    # Sample configuration file
├── .gitignore         # Git ignore rules
└── README.md          # This file
```

### Adding New Themes

1. Open `themes.json`
2. Add a new theme object:
```json
{
    "query": "your theme query",
    "display": "Your Theme Display Name"
}
```

### Customizing Styles

- Main styles are in `styles.css`
- The application uses a clean, minimal design
- All colors and transitions can be modified in the CSS file

### API Usage

The application uses the Unsplash API to:
- Search for photos by theme
- Display high-quality images
- Properly attribute photographers

Make sure to:
- Keep your API credentials secure
- Follow Unsplash's API guidelines
- Include proper attribution for all photos

## Troubleshooting

### CORS Issues
If you encounter CORS errors:
1. Ensure the Python server is running
2. Check that you're accessing the site through `http://localhost:8000`
3. Verify the server is sending proper CORS headers

### Image Loading Issues
If images aren't loading:
1. Verify your Unsplash API credentials in `config.js`
2. Check the browser console for errors
3. Ensure you have an active internet connection

### Server Issues
If the server won't start:
1. Verify Python 3.x is installed
2. Check if port 8000 is available
3. Try running with administrator privileges

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Unsplash](https://unsplash.com) for providing the image API
- All photographers whose work is featured in the gallery
- The artistic community for inspiration and feedback