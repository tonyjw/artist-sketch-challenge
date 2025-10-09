// API configuration
const apiUrl = '/api/photos'; // Use server endpoint
const perPage = 10;

// Initialize variables
let currentImageIndex = 0;
let images = [];
let rotationInterval = parseInt(localStorage.getItem('rotationInterval')) || 30; // Load saved interval or use default
let intervalId = null;
let progressIntervalId = null;
let isPaused = false;
let successMessageTimeout = null;
let startTime = Date.now();
let duration = rotationInterval * 1000;
let themes = [];

// DOM Elements
const imageContainer = document.querySelector('.image-container');
const themeSelect = document.getElementById('theme');
const progressFill = document.querySelector('.progress-fill');
const photoAttribution = document.querySelector('.photo-attribution');

// Load themes from themes.json
async function loadThemes() {
  try {
    const response = await fetch('themes.json', {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    });
    
    if (!response.ok) {
      throw new Error('Failed to load themes');
    }
    
    const data = await response.json();
    themes = data.themes;
    
    // Clear existing options
    themeSelect.innerHTML = '';
    
    // Add themes to select
    themes.forEach(theme => {
      const option = document.createElement('option');
      option.value = theme.query;
      option.textContent = theme.display;
      themeSelect.appendChild(option);
    });
    
    // Load initial images
    await loadImages();
  } catch (error) {
    console.error('Error loading themes:', error);
    // Fallback to default theme
    themes = [{ query: 'quaint streets', display: 'Quaint Streets' }];
    themeSelect.value = 'quaint streets';
    await loadImages();
  }
}

// Load images from server API
async function loadImages() {
  try {
    const query = themeSelect.value;
    const response = await fetch(`${apiUrl}?query=${encodeURIComponent(query)}&per_page=${perPage}`);
    
    if (!response.ok) {
      const error = await response.json();
      if (error.error === 'API key not configured') {
        throw new Error('Please configure your Unsplash API key on the server');
      }
      throw new Error('Failed to load images');
    }
    
    const data = await response.json();

    if (!data.results || !Array.isArray(data.results)) {
      console.error('Invalid response format:', data);
      throw new Error('Invalid response format from server');
    }
    
    images = data.results;
    currentImageIndex = 0;
    
    if (images.length > 0) {
      displayImage();
    }
  } catch (error) {
    console.error('Error loading images:', error);
    showError(error.message);
  }
}

// Show error message
function showError(message) {
    // Create error message element if it doesn't exist
    let errorMessage = document.querySelector('.error-message');
    if (!errorMessage) {
        errorMessage = document.createElement('div');
        errorMessage.className = 'error-message';
        document.body.appendChild(errorMessage);
    }
    
    // Set the error message
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
    
    // Hide the message after 3 seconds
    setTimeout(() => {
        errorMessage.style.display = 'none';
    }, 3000);
}

// Show success message
function showSuccessMessage() {
    const successMessage = document.querySelector('.success-message');
    if (successMessage) {
        successMessage.classList.add('show');
        
        // Clear any existing timeout
        if (successMessageTimeout) {
            clearTimeout(successMessageTimeout);
        }
        
        // Hide the message after 2 seconds
        successMessageTimeout = setTimeout(() => {
            successMessage.classList.remove('show');
        }, 2000);
    }
}

// Display the current image
function displayImage() {
    // Clear existing images
    imageContainer.innerHTML = '';

    // Lazy load: only create img elements for current and next image
    // This significantly improves performance by not loading all images at once
    const nextIndex = (currentImageIndex + 1) % images.length;

    images.forEach((photo, index) => {
        const img = document.createElement('img');
        // Use 'regular' size (~1080px) instead of 'raw' for better performance

        // Only set src for current and next image (lazy loading)
        if (index === currentImageIndex || index === nextIndex) {
            img.src = photo.urls.regular;
        }

        img.alt = `Gallery image ${index + 1}`;
        if (index === currentImageIndex) {
            img.classList.add('active');
        }
        imageContainer.appendChild(img);
    });

    // Update photo attribution
    updatePhotoAttribution();

    // Start rotation if this is the first page
    if (currentPage === 1) {
        startRotation();
    }
}

// Update photo attribution
function updatePhotoAttribution() {
    if (images[currentImageIndex]) {
        const photo = images[currentImageIndex];
        photoAttribution.innerHTML = `Photo by <a href="${photo.user.links.html}" target="_blank" rel="noopener noreferrer">${photo.user.name}</a> on <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">Unsplash</a>`;
    }
}

// Initialize the gallery
async function initGallery() {
    // Load themes first
    await loadThemes();
    
    // Set up hamburger menu and config overlay
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const configOverlay = document.querySelector('.config-overlay');
    const closeButton = document.querySelector('.close-button');

    // Set initial interval value in input
    const intervalInput = document.getElementById('interval');
    intervalInput.value = rotationInterval;

    hamburgerMenu.addEventListener('click', () => {
        configOverlay.classList.add('active');
        pauseRotation();
    });

    // Close overlay when clicking outside the config content
    configOverlay.addEventListener('click', (e) => {
        if (e.target === configOverlay) {
            configOverlay.classList.remove('active');
            resumeRotation();
        }
    });

    // Close overlay when clicking the close button
    closeButton.addEventListener('click', () => {
        configOverlay.classList.remove('active');
        resumeRotation();
    });

    // Set up theme selection with auto-save
    const themeSelect = document.getElementById('theme');
    themeSelect.addEventListener('change', () => {
        loadImages();
        showSuccessMessage();
    });

    // Set up surprise theme link
    const surpriseLink = document.querySelector('.surprise-theme');
    surpriseLink.addEventListener('click', (e) => {
        e.preventDefault();
        if (themes.length === 0) {
            console.error('No themes available');
            return;
        }
        const randomIndex = Math.floor(Math.random() * themes.length);
        if (themes[randomIndex]) {
            themeSelect.value = themes[randomIndex].query;
            loadImages();
            showSuccessMessage();
        }
    });

    // Set up interval control with auto-save
    intervalInput.addEventListener('change', () => {
        const newInterval = parseInt(intervalInput.value);
        if (newInterval >= 1 && newInterval <= 300) {
            rotationInterval = newInterval;
            localStorage.setItem('rotationInterval', newInterval); // Save to localStorage
            resetRotation();
            showSuccessMessage();
        } else {
            alert('Please enter a value between 1 and 300 seconds');
            intervalInput.value = rotationInterval;
        }
    });

    // Start initial rotation
    startRotation();
}

// Start the image rotation
function startRotation() {
    // Clear any existing intervals
    if (intervalId) clearInterval(intervalId);
    if (progressIntervalId) clearInterval(progressIntervalId);
    
    const progressFill = document.querySelector('.progress-fill');
    progressFill.style.width = '100%';
    
    // Start progress bar animation
    startTime = Date.now();
    duration = rotationInterval * 1000;
    
    // Update progress bar every 10ms
    progressIntervalId = setInterval(() => {
        if (!isPaused) {
            const elapsed = Date.now() - startTime;
            const progress = Math.max(0, 100 - (elapsed / duration) * 100);
            progressFill.style.width = `${progress}%`;
        }
    }, 10);
    
    // Rotate images at the specified interval
    intervalId = setInterval(() => {
        if (!isPaused) {
            rotateImage();
        }
    }, rotationInterval * 1000);
}

// Rotate to the next image
function rotateImage() {
    const imgElements = document.querySelectorAll('.image-container img');
    if (imgElements.length === 0) return;

    // Remove active class from current image
    imgElements[currentImageIndex].classList.remove('active');

    // Update current index
    currentImageIndex = (currentImageIndex + 1) % imgElements.length;

    // Add active class to new image
    imgElements[currentImageIndex].classList.add('active');

    // Lazy load the current image if not already loaded
    if (!imgElements[currentImageIndex].src) {
        imgElements[currentImageIndex].src = images[currentImageIndex].urls.regular;
    }

    // Preload next image
    const nextIndex = (currentImageIndex + 1) % imgElements.length;
    if (!imgElements[nextIndex].src) {
        imgElements[nextIndex].src = images[nextIndex].urls.regular;
    }

    // Update photo attribution
    updatePhotoAttribution();

    // Reset progress bar
    resetProgressBar();
}

// Pause the rotation
function pauseRotation() {
    isPaused = true;
}

// Resume the rotation
function resumeRotation() {
    isPaused = false;
    startRotation();
}

// Reset the rotation with new interval
function resetRotation() {
    startRotation();
}

// Helper function to reset progress bar instantly
function resetProgressBar() {
    const progressFill = document.querySelector('.progress-fill');
    progressFill.style.transition = 'none';
    progressFill.style.width = '100%';
    void progressFill.offsetWidth;
    startTime = Date.now();
}

// Navigate to next image
function nextImage() {
    const imgElements = document.querySelectorAll('.image-container img');
    if (imgElements.length === 0) return;

    // Remove active class from current image
    imgElements[currentImageIndex].classList.remove('active');

    // Move to next image
    currentImageIndex = (currentImageIndex + 1) % imgElements.length;

    // Add active class to new image
    imgElements[currentImageIndex].classList.add('active');

    // Lazy load the current image if not already loaded
    if (!imgElements[currentImageIndex].src) {
        imgElements[currentImageIndex].src = images[currentImageIndex].urls.regular;
    }

    // Preload next image
    const nextIndex = (currentImageIndex + 1) % imgElements.length;
    if (!imgElements[nextIndex].src) {
        imgElements[nextIndex].src = images[nextIndex].urls.regular;
    }

    // Update photo attribution
    updatePhotoAttribution();

    // Reset progress bar
    const progressFill = document.querySelector('.progress-fill');
    progressFill.style.transition = 'none';
    progressFill.style.width = '100%';
    void progressFill.offsetWidth;

    // Reset start time for progress bar
    startTime = Date.now();
}

// Navigate to previous image
function previousImage() {
    const imgElements = document.querySelectorAll('.image-container img');
    if (imgElements.length === 0) return;

    // Don't go back if we're at the first image
    if (currentImageIndex === 0) return;

    // Remove active class from current image
    imgElements[currentImageIndex].classList.remove('active');

    // Move to previous image
    currentImageIndex = currentImageIndex - 1;

    // Add active class to new image
    imgElements[currentImageIndex].classList.add('active');

    // Lazy load the current image if not already loaded
    if (!imgElements[currentImageIndex].src) {
        imgElements[currentImageIndex].src = images[currentImageIndex].urls.regular;
    }

    // Update photo attribution
    updatePhotoAttribution();

    // Reset progress bar
    const progressFill = document.querySelector('.progress-fill');
    progressFill.style.transition = 'none';
    progressFill.style.width = '100%';
    void progressFill.offsetWidth;

    // Reset start time for progress bar
    startTime = Date.now();
}

// Keyboard navigation
window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        e.preventDefault();
        nextImage();
    } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        previousImage();
    }
});

// Initialize the gallery when the page loads
window.addEventListener('load', initGallery);

// Export functions that need to be accessed from other modules
export { loadThemes, loadImages };