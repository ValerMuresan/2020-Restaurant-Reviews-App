
// Define the variable of static data
let staticData = 'restaurant-data';
//Define the variable that holds all the app files
let cachedData = [
  './',
  './index.html',
  './restaurant.html',
  './css/styles.css',
  './data/restaurants.json',
  './img/1.jpg',
  './img/2.jpg',
  './img/3.jpg',
  './img/4.jpg',
  './img/5.jpg',
  './img/6.jpg',
  './img/7.jpg',
  './img/8.jpg',
  './img/9.jpg',
  './img/10.jpg',
  './js/dbhelper.js',
  './js/main.js',
  './js/restaurant_info.js',
  './js/register_service_worker.js'
];
//SW installation
self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(staticData)
      .then(function(cache) {
        return cache.addAll(cachedData);
      })
  );
});

//SW activation
self.addEventListener('activate', function(event) {
	event.waitUntil(cache.keys().then(function(cacheNames) {
		return Promise.all(cacheNames.filter(function(cacheName) {
			return cacheName.startsWith('restaurant-') && cacheName != staticData;})
			.map(function(cacheName) {
				return caches.delete(cacheName);
			})
		);
	})
);
});
/*Set the fetch for offline*/
self.addEventListener('fetch', function(event) {
	event.respondWith(caches.match(event.request).then(function(response) {
		return response || fetch(event.request);
	})
);
});
