import express from 'express';
import fetch from 'node-fetch';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8000;

// Serve static files
app.use(express.static(path.join(__dirname, '.')));

// Photos endpoint
app.get('/api/photos', async (req, res) => {
    try {
        // Check if API key is configured
        const apiKey = process.env.UNSPLASH_ACCESS_KEY;
        if (!apiKey) {
            console.error('API key not found in environment variables');
            return res.status(500).json({
                error: 'API key not configured',
                message: 'Please configure your Unsplash API key in your environment variables'
            });
        }

        const { query, page, per_page } = req.query;
        
        // Validate required parameters
        if (!query) {
            return res.status(400).json({ error: 'Query parameter is required' });
        }

        const response = await fetch(
            `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=${per_page || 10}&page=${page || 1}`,
            {
                headers: {
                    'Authorization': `Client-ID ${apiKey}`
                }
            }
        );
        
        if (!response.ok) {
            const errorText = await response.text();
            console.error('Unsplash API error:', errorText);
            throw new Error(`Unsplash API error: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error proxying to Unsplash:', error);
        res.status(500).json({ 
            error: 'Failed to fetch images',
            message: error.message
        });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log('Environment variables loaded:', {
        UNSPLASH_ACCESS_KEY: process.env.UNSPLASH_ACCESS_KEY ? 'Configured' : 'Not configured'
    });
}); 