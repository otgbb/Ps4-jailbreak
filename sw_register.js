// sw_register.js

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
            // تم التسجيل بنجاح
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
            
            // تحديث حالة التخزين المؤقت في الواجهة
            const statusElement = document.getElementById('cache-status');
            if (statusElement) {
                statusElement.classList.remove('alert-info', 'alert-danger');
                statusElement.classList.add('alert-success');
                statusElement.innerHTML = '✅ **حالة التخزين المؤقت:** تم تحميل جميع الملفات بنجاح. يمكنك الآن استخدام الموقع دون اتصال.';
            }

        }, function(err) {
            // فشل التسجيل
            console.log('ServiceWorker registration failed: ', err);

            // تحديث حالة التخزين المؤقت في الواجهة
            const statusElement = document.getElementById('cache-status');
            if (statusElement) {
                statusElement.classList.remove('alert-info', 'alert-success');
                statusElement.classList.add('alert-danger');
                statusElement.innerHTML = '❌ **حالة التخزين المؤقت:** فشل تحميل الملفات. تحقق من اتصالك بالإنترنت.';
            }
        });
    });
} else {
    console.log('Service Workers not supported by browser.');
}