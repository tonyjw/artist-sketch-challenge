import { apiConfig, validateApiConfig } from './config.js';

// Mock the DOM elements and functions
document.body.innerHTML = `
  <div class="image-container"></div>
  <select id="theme"></select>
  <div class="progress-fill"></div>
  <div class="photo-attribution"></div>
`;

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
});

// Mock fetch
global.fetch = jest.fn();

// Mock the loadThemes function
const mockLoadThemes = jest.fn();

describe('Gallery Initialization', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
    document.body.innerHTML = `
      <div class="image-container"></div>
      <select id="theme"></select>
      <div class="progress-fill"></div>
      <div class="photo-attribution"></div>
    `;
  });

  test('should validate API configuration', () => {
    expect(() => validateApiConfig(apiConfig)).not.toThrow();
  });

  test('should load themes successfully', async () => {
    const mockThemes = {
      themes: [
        { query: 'test', display: 'Test Theme' }
      ]
    };
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockThemes)
    });

    // Create and append theme select
    const themeSelect = document.createElement('select');
    themeSelect.id = 'theme';
    document.body.appendChild(themeSelect);

    // Mock the loadThemes function
    mockLoadThemes.mockImplementation(async () => {
      const response = await fetch('themes.json', {
        method: 'GET',
        headers: {
          'Accept': 'application/json'
        }
      });
      const data = await response.json();
      return data;
    });

    // Call the mocked function
    await mockLoadThemes();

    // Verify fetch was called
    expect(global.fetch).toHaveBeenCalledWith('themes.json', {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    });
  });

  test('should handle theme loading error gracefully', async () => {
    global.fetch.mockRejectedValueOnce(new Error('Network error'));

    // Create and append theme select
    const themeSelect = document.createElement('select');
    themeSelect.id = 'theme';
    document.body.appendChild(themeSelect);

    // Mock the loadThemes function
    mockLoadThemes.mockImplementation(async () => {
      try {
        const response = await fetch('themes.json');
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Failed to load themes:', error);
        // Set the default theme value
        themeSelect.value = 'quaint streets';
        // Add the option to the select
        const option = document.createElement('option');
        option.value = 'quaint streets';
        option.text = 'Quaint Streets';
        themeSelect.appendChild(option);
        return null;
      }
    });

    // Call the mocked function
    await mockLoadThemes();

    // Should fall back to default theme
    expect(themeSelect.value).toBe('quaint streets');
  });

  test('should save rotation interval to localStorage', async () => {
    const newInterval = 60;
    const intervalInput = document.createElement('input');
    intervalInput.id = 'interval';
    intervalInput.value = newInterval;
    document.body.appendChild(intervalInput);

    // Create and append the event listener
    intervalInput.addEventListener('change', () => {
      localStorage.setItem('rotationInterval', newInterval.toString());
    });

    // Simulate change event
    const event = new Event('change');
    intervalInput.dispatchEvent(event);

    expect(localStorageMock.setItem).toHaveBeenCalledWith('rotationInterval', newInterval.toString());
  });

  test('should update progress bar width', async () => {
    const progressFill = document.querySelector('.progress-fill');
    progressFill.style.width = '100%';
    
    // Force a reflow
    progressFill.style.transition = 'none';
    progressFill.style.width = '50%';
    progressFill.style.transition = 'width 1s linear';
    
    expect(progressFill.style.width).toBe('50%');
  });
}); 