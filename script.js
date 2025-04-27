// Unsplash API configuration
let themes = [];
let currentIndex = 0;
let rotationInterval = parseInt(localStorage.getItem('rotationInterval')) || 30; // Load saved interval or use default
let intervalId = null;
let progressIntervalId = null;
let currentImages = [];
let currentAttributions = [];
let isPaused = false;
let successMessageTimeout = null;
let currentPage = 1;
const MAX_PAGES = 10;
const IMAGES_PER_PAGE = 10;

// Load themes from JSON file
async function loadThemes() {
    try {
        const response = await fetch('themes.json', {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (!response.ok) {
            throw new Error(`Failed to load themes: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        if (!data.themes || !Array.isArray(data.themes)) {
            throw new Error('Invalid themes data format');
        }
        
        themes = data.themes;
        populateThemeSelect();
        
        // Pick a random theme on startup
        const randomIndex = Math.floor(Math.random() * themes.length);
        const themeSelect = document.getElementById('theme');
        themeSelect.value = themes[randomIndex].query;
        loadImages();
    } catch (error) {
        console.error('Error loading themes:', error);
        // Fallback to default theme if loading fails
        themes = [{
            query: 'quaint streets',
            display: 'Quaint Streets'
        }];
        populateThemeSelect();
        // Use the default theme
        const themeSelect = document.getElementById('theme');
        themeSelect.value = themes[0].query;
        loadImages();
    }
}

// Populate theme select options
function populateThemeSelect() {
    const themeSelect = document.getElementById('theme');
    themeSelect.innerHTML = themes.map(theme => 
        `<option value="${theme.query}">${theme.display}</option>`
    ).join('');
}

// Show success message
function showSuccessMessage() {
    const successMessage = document.querySelector('.success-message');
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

// Update photo attribution
function updatePhotoAttribution() {
    const attributionElement = document.querySelector('.photo-attribution');
    if (currentAttributions[currentIndex]) {
        const { photographer, profileUrl } = currentAttributions[currentIndex];
        attributionElement.innerHTML = `Photo by <a href="${profileUrl}" target="_blank" rel="noopener noreferrer">${photographer}</a> on <a href="https://unsplash.com" target="_blank" rel="noopener noreferrer">Unsplash</a>`;
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
        currentPage = 1; // Reset page counter when theme changes
        loadImages();
        showSuccessMessage();
    });

    // Set up surprise theme link
    const surpriseLink = document.querySelector('.surprise-theme');
    surpriseLink.addEventListener('click', (e) => {
        e.preventDefault();
        currentPage = 1; // Reset page counter when theme changes
        const randomIndex = Math.floor(Math.random() * themes.length);
        themeSelect.value = themes[randomIndex].query;
        loadImages();
        showSuccessMessage();
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

    // Load initial images
    await loadImages();
}

// Load images from Unsplash API
async function loadImages(page = 1) {
    const theme = document.getElementById('theme').value;
    
    try {
        const response = await fetch(`/api/photos?query=${encodeURIComponent(theme)}&per_page=${IMAGES_PER_PAGE}&page=${page}`);

        if (!response.ok) {
            let errorData;
            try {
                errorData = await response.json();
            } catch (e) {
                console.error('Error parsing error response:', e);
                showError('Failed to load images. Please try again later.');
                return;
            }

            if (errorData.error === 'API key not configured') {
                showError('Please configure your Unsplash API key in your environment variables');
                return;
            }
            throw new Error(errorData.message || 'Failed to fetch images');
        }

        let data;
        try {
            data = await response.json();
        } catch (e) {
            console.error('Error parsing response:', e);
            showError('Failed to load images. Please try again later.');
            return;
        }

        if (!data.results || !Array.isArray(data.results)) {
            console.error('Invalid response format:', data);
            showError('Failed to load images. Please try again later.');
            return;
        }

        const newImages = data.results.map(photo => photo.urls.raw);
        const newAttributions = data.results.map(photo => ({
            photographer: photo.user.name,
            profileUrl: photo.user.links.html
        }));

        // If this is the first page, clear existing images
        if (page === 1) {
            currentImages = [];
            currentAttributions = [];
            currentIndex = 0;
        }

        // Append new images and attributions
        currentImages = [...currentImages, ...newImages];
        currentAttributions = [...currentAttributions, ...newAttributions];

        // Create and add new images
        newImages.forEach((src, index) => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = `Gallery image ${currentImages.length - newImages.length + index + 1}`;
            if (currentImages.length - newImages.length + index === 0) img.classList.add('active');
            document.querySelector('.image-container').appendChild(img);
        });

        // Update initial attribution if this is the first page
        if (page === 1) {
            updatePhotoAttribution();
            startRotation();
        }
    } catch (error) {
        console.error('Error loading images:', error);
        showError('Failed to load images. Please try again later.');
    }
}

// Start the image rotation
function startRotation() {
    if (intervalId) clearInterval(intervalId);
    if (progressIntervalId) clearInterval(progressIntervalId);
    
    const progressFill = document.querySelector('.progress-fill');
    progressFill.style.width = '100%';
    
    // Start progress bar animation
    const startTime = Date.now();
    const duration = rotationInterval * 1000;
    
    progressIntervalId = setInterval(() => {
        if (!isPaused) {
            const elapsed = Date.now() - startTime;
            const progress = Math.max(0, 100 - (elapsed / duration) * 100);
            progressFill.style.width = `${progress}%`;
        }
    }, 10);
    
    intervalId = setInterval(() => {
        if (!isPaused) {
            rotateImage();
        }
    }, rotationInterval * 1000);
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

// Rotate to the next image
function rotateImage() {
    const images = document.querySelectorAll('.image-container img');
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
    updatePhotoAttribution();
    
    // If we're at the last image and haven't reached max pages, load more
    if (currentIndex === images.length - 1 && currentPage < MAX_PAGES) {
        currentPage++;
        loadImages(currentPage);
    }
    
    // Reset progress bar immediately to 100%
    const progressFill = document.querySelector('.progress-fill');
    progressFill.style.transition = 'none';
    progressFill.style.width = '100%';
    // Force a reflow
    progressFill.style.transition = 'width 1s linear';
}

// Initialize the gallery when the page loads
window.addEventListener('load', initGallery);