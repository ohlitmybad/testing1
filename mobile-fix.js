// Mobile optimization and visibility fixes
(function() {
    // Detect if we're on a mobile device
    const isMobile = /Mobi|Android|iPhone/i.test(navigator.userAgent);
    
    if (isMobile) {
        console.log("Mobile device detected, applying optimizations");
        
        // Modify worker behavior for better mobile performance
        // This injects a patch into the main.js script execution
        const originalWorker = window.Worker;
        window.Worker = function(scriptURL) {
            const worker = new originalWorker(scriptURL);
            
            // Store a reference to the original postMessage method
            const originalPostMessage = worker.postMessage;
            
            // Override the postMessage method to inject the mobile flag
            worker.postMessage = function(message) {
                // Inject mobile flag if it's an object
                if (typeof message === 'object' && message !== null) {
                    message.isMobile = true;
                }
                // Call the original postMessage with our modified message
                return originalPostMessage.call(this, message);
            };
            
            // Store a reference to the original onmessage setter
            const originalOnMessageDescriptor = Object.getOwnPropertyDescriptor(worker, 'onmessage');
            
            // Override the onmessage setter
            Object.defineProperty(worker, 'onmessage', {
                set: function(handler) {
                    // Create a wrapper for the onmessage handler
                    const wrappedHandler = function(event) {
                        // Call the original handler
                        handler.call(this, event);
                        
                        // Make sure body is visible when data is loaded
                        if (event.data && event.data.type === 'complete') {
                            document.body.style.visibility = 'visible';
                            console.log('Mobile fix: Made body visible after data load');
                        }
                    };
                    
                    // Set the wrapped handler as the onmessage handler
                    originalOnMessageDescriptor.set.call(this, wrappedHandler);
                },
                get: originalOnMessageDescriptor.get,
                configurable: true
            });
            
            return worker;
        };
        
        // Set a timeout to ensure body becomes visible even if loading fails
        setTimeout(function() {
            if (document.body.style.visibility === 'hidden') {
                document.body.style.visibility = 'visible';
                console.log('Mobile fix: Forced body visibility after timeout');
            }
        }, 15000);
        
        // Also monitor the loading container to make body visible when it's hidden
        const checkLoading = setInterval(function() {
            const loadingContainer = document.getElementById('loadingContainer');
            if (loadingContainer && loadingContainer.style.display === 'none' && 
                document.body.style.visibility === 'hidden') {
                document.body.style.visibility = 'visible';
                console.log('Mobile fix: Made body visible after loading container was hidden');
                clearInterval(checkLoading);
            }
        }, 500);
    }
})(); 