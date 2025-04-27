// Sample configuration file - Copy this to config.js and update with your values
const apiConfig = {
    appId: 'YOUR_APP_ID',
    accessKey: 'YOUR_ACCESS_KEY',
    secretKey: 'YOUR_SECRET_KEY'
};

// Validate API configuration
function validateApiConfig() {
    if (!apiConfig.accessKey) {
        console.error('Unsplash API Access Key is not configured. Please set your API credentials in config.js');
        return false;
    }
    return true;
}

export { apiConfig, validateApiConfig }; 