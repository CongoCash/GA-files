self.addEventListener('install', function(event) {

  // Perform install steps
    var CACHE_NAME = 'service-worker-cache-v1';
    var urlsToCache = [
        'index.html',
        'burger-cat.jpg'
    ];

    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function(cache) {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
        .then(function(response) {
                // Cache hit - return response
                if (response) {
                    return response;
                }
                return fetch(event.request);
            }
        )
    );
});