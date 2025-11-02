// service-worker.js

const CACHE_NAME = 'my-project-cache-v1.0.0'; 
// قائمة بجميع الملفات التي يجب تخزينها مؤقتاً
const urlsToCache = [
    '/', 
    'index.html',
    'main.js', 
    'sw_register.js', 
    // تضمين الروابط الخارجية التي نحتاجها (Bootstrap)
    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js',
    // أي ملفات حمولة ستضيفها لاحقًا
];

// مرحلة التثبيت (INSTALL): تخزين الملفات
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                return cache.addAll(urlsToCache);
            })
    );
    self.skipWaiting();
});

// مرحلة التفعيل (ACTIVATE): حذف النسخ القديمة
self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// مرحلة الجلب (FETCH): جلب الملف من الذاكرة المؤقتة أولاً
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});