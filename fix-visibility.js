// This script ensures the body becomes visible after data loading
(function() {
    // Directly patch the worker.onmessage handler
    const originalWorkerOnMessage = Worker.prototype.onmessage;
    
    // Override the existing worker handler in main.js
    // This runs after main.js has been loaded
    const patchWorkerHandler = function() {
        try {
            // Find the worker instance
            const workerInstance = Array.from(document.querySelectorAll('script'))
                .find(script => script.src && script.src.includes('main.js'))
                ?.__worker;
                
            if (workerInstance) {
                const originalHandler = workerInstance.onmessage;
                workerInstance.onmessage = function(event) {
                    // Call the original handler
                    originalHandler.call(this, event);
                    
                    // Make body visible after data load completes
                    if (event.data && event.data.type === 'complete') {
                        document.body.style.visibility = 'visible';
                        console.log('Fixed body visibility after data load');
                    }
                };
            }
        } catch (e) {
            console.error('Failed to patch worker:', e);
        }
    };
    
    // Try to patch after a short delay
    setTimeout(patchWorkerHandler, 100);
    
    // Set an interval to check if body is hidden and make it visible
    // This helps when the membership plugin may be keeping the body hidden
    const visibilityInterval = setInterval(function() {
        if (document.body.style.visibility === 'hidden' && 
            document.getElementById('loadingContainer')?.style.display === 'none') {
            document.body.style.visibility = 'visible';
            console.log('Fixed body visibility via interval check');
            clearInterval(visibilityInterval);
        }
    }, 500);

    // Also set a timeout to force visibility after a delay
    // This prevents the page from being permanently hidden if something goes wrong
    setTimeout(function() {
        if (document.body.style.visibility === 'hidden') {
            document.body.style.visibility = 'visible';
            console.log('Forced body visibility after timeout');
            clearInterval(visibilityInterval);
        }
    }, 5000);
    
    // Handle the case where mobile devices take longer
    // This checks if we're on a mobile device and extends the timeout
    if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
        // Add mobile-specific fixes
        setTimeout(function() {
            document.body.style.visibility = 'visible';
            console.log('Mobile-specific visibility fix applied');
        }, 7000);
    }
})(); 