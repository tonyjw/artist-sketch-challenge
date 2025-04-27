import { createApi } from 'unsplash-js';

// Initialize the Unsplash API client
const unsplash = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY,
});

// Vercel serverless function handler
export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  // Handle OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Get query parameters
    const { query, per_page = 10, page = 1 } = req.query;

    if (!query) {
      return res.status(400).json({ error: 'Query parameter is required' });
    }

    // Check if API key is configured
    if (!process.env.UNSPLASH_ACCESS_KEY) {
      return res.status(500).json({ error: 'API key not configured' });
    }

    // Make request to Unsplash API
    const result = await unsplash.search.getPhotos({
      query,
      perPage: parseInt(per_page),
      page: parseInt(page),
    });

    if (result.errors) {
      console.error('Unsplash API errors:', result.errors);
      return res.status(500).json({ error: 'Failed to fetch photos from Unsplash' });
    }

    // Return the results
    return res.status(200).json(result.response);
  } catch (error) {
    console.error('Error in photos API:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
} 