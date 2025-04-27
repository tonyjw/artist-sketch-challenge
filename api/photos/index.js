const fetch = require('node-fetch');

module.exports = async (req, res) => {
    // Set proper content type
    res.setHeader('Content-Type', 'application/json');

    // Only allow GET requests
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    // Check if API key is configured
    if (!process.env.UNSPLASH_ACCESS_KEY) {
        return res.status(500).json({ 
            error: 'API key not configured',
            message: 'Please configure your Unsplash API key in your .env file or Vercel environment variables'
        });
    }

    try {
        const { query, page, per_page } = req.query;
        
        // Validate required parameters
        if (!query) {
            return res.status(400).json({ error: 'Query parameter is required' });
        }

        const response = await fetch(
            `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=${per_page || 10}&page=${page || 1}`,
            {
                headers: {
                    'Authorization': `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`
                }
            }
        );
        
        if (!response.ok) {
            const errorText = await response.text();
            console.error('Unsplash API error:', errorText);
            throw new Error(`Unsplash API error: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        return res.status(200).json(data);
    } catch (error) {
        console.error('Error proxying to Unsplash:', error);
        return res.status(500).json({ 
            error: 'Failed to fetch images',
            message: error.message
        });
    }
}; 