// Cloudflare Pages Function for Unsplash API proxy
export async function onRequest(context) {
  const { request, env } = context;

  // Set CORS headers
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  // Handle OPTIONS request for CORS
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: corsHeaders,
    });
  }

  // Only allow GET requests
  if (request.method !== 'GET') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  try {
    // Parse URL and get query parameters
    const url = new URL(request.url);
    const query = url.searchParams.get('query');
    const perPage = url.searchParams.get('per_page') || '10';
    const page = url.searchParams.get('page') || '1';

    if (!query) {
      return new Response(JSON.stringify({ error: 'Query parameter is required' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Check if API key is configured
    const apiKey = env.UNSPLASH_ACCESS_KEY;
    if (!apiKey) {
      console.error('API key not found in environment variables');
      return new Response(
        JSON.stringify({
          error: 'API key not configured',
          message: 'Please configure your Unsplash API key in Cloudflare environment variables',
        }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    // Make request to Unsplash API search endpoint for proper pagination
    // Using search endpoint to get unique photos across pages without repeats
    const pageNum = parseInt(page);
    const perPageNum = Math.min(parseInt(perPage), 30); // Unsplash API max per_page is 30
    const unsplashUrl = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&page=${pageNum}&per_page=${perPageNum}&order_by=latest`;

    const response = await fetch(unsplashUrl, {
      headers: {
        'Authorization': `Client-ID ${apiKey}`,
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Unsplash API error:', errorText);
      throw new Error(`Unsplash API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    // Search endpoint returns data with results array
    const formattedData = {
      results: data.results || [],
      total: data.total || 0,
      total_pages: data.total_pages || 1
    };

    return new Response(JSON.stringify(formattedData), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error proxying to Unsplash:', error);
    return new Response(
      JSON.stringify({
        error: 'Failed to fetch images',
        message: error.message,
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
}
