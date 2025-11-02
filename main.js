// main.js

document.addEventListener('DOMContentLoaded', () => {
    console.log("Main script loaded.");

    const cacheStatus = document.getElementById('cache-status');

    function runPayload(payloadName) {

        // تحديث الواجهة إلى وضع التشغيل
        if (cacheStatus) {
            cacheStatus.classList.remove('alert-success', 'alert-danger');
            cacheStatus.classList.add('alert-warning');
            cacheStatus.innerHTML = `⏳ **جاري التشغيل:** بدء تشغيل حمولة ${payloadName}... الرجاء الانتظار.`;
        }

        console.log(`Attempting to execute payload: ${payloadName}`);

        // ********************************************
        // ********** منطقة تنفيذ الحمولة ***************
        // ********************************************

        /* ضع كود الحمولة الفعلي هنا */

        // ********************************************
        // ********************************************

        // محاكاة تأخير للتنفيذ
        setTimeout(() => {
            // تحديث الواجهة إلى وضع النجاح
            if (cacheStatus) {
                cacheStatus.classList.remove('alert-warning');
                cacheStatus.classList.add('alert-success');
                cacheStatus.innerHTML = `🎉 **نجاح!** تم تشغيل حمولة ${payloadName} بنجاح.`;
            }
            console.log(`Payload ${payloadName} executed successfully.`);
        }, 3000); // 3 ثواني
    }

    // ربط الأزرار بوظيفة التشغيل
    document.getElementById('payload-goldhen')?.addEventListener('click', () => {
        runPayload("GoldHEN");
    });

    document.getElementById('tool-ftp')?.addEventListener('click', () => {
        runPayload("FTP Server");
    });

    document.getElementById('tool-dumper')?.addEventListener('click', () => {
        runPayload("App Dumper");
    });

    document.getElementById('tool-linux')?.addEventListener('click', () => {
        runPayload("Linux 2GB Loader");
    });
});