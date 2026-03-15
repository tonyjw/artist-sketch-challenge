const CACHE_NAME = 'watercolor-tools-v1';

// Handle share target POST requests
self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);

    // Handle share target
    if (url.pathname === '/value-study.html' && event.request.method === 'POST') {
        event.respondWith(handleShareTarget(event.request));
        return;
    }
});

async function handleShareTarget(request) {
    const formData = await request.formData();
    const imageFile = formData.get('image');

    if (imageFile) {
        // Store the shared image in IndexedDB
        await storeSharedImage(imageFile);
    }

    // Redirect to value-study.html with a flag indicating shared content
    return Response.redirect('/value-study.html?shared=true', 303);
}

async function storeSharedImage(file) {
    const db = await openDatabase();
    const tx = db.transaction('sharedImages', 'readwrite');
    const store = tx.objectStore('sharedImages');

    // Convert file to array buffer for storage
    const arrayBuffer = await file.arrayBuffer();

    await store.put({
        id: 'lastShared',
        data: arrayBuffer,
        type: file.type,
        name: file.name,
        timestamp: Date.now()
    });

    await tx.complete;
}

function openDatabase() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open('WatercolorToolsDB', 1);

        request.onerror = () => reject(request.error);
        request.onsuccess = () => resolve(request.result);

        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            if (!db.objectStoreNames.contains('sharedImages')) {
                db.createObjectStore('sharedImages', { keyPath: 'id' });
            }
        };
    });
}

// Install event - activate immediately
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

// Activate event - claim clients immediately
self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});
