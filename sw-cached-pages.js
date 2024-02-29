const cacheName = 'v1'

const cacheAssets = [
    'index.html',
    'styles.css',
    'app.js',
]


// Install
self.addEventListener('install', e => {
    console.log('SW: installed')

    e.waitUntil(
        caches
            .open(cacheName)
            .then(cache => {
                console.log(cache)
                console.log('SW: Caching Files')
                cache.addAll(cacheAssets)
            })
            .then(() => self.skipWaiting())
    )
})


// Activate
self.addEventListener('activate', e => {
    console.log('SW: activated')
    // remove unwanted cache
    // caches is from Cache Storage API
    e.waitUntil(
        caches
            .keys()
            .then(cacheNames => {
                return Promise.all(
                    cacheNames.map(cache => {
                        if(cache !== cacheName) {
                            console.log('SW: Clearing Old Cache')
                            return caches.delete(cache)
                        }
                    })
                )
            })
    )

})

// Fetch
self.addEventListener('fetch', e => {
    console.log('SW: Fetching')

    e.respondWith(
        fetch(e.request)
            .catch(() => caches.match(e.request))
    )
})


// Push Notification