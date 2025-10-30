// A simple object to hold all our JS Interop functions
window.BarcodeScanner = {

    // Starts the camera and scanning process
    // dotNetHelper is the reference back to the C# component
    initScanner: function (dotNetHelper) {
        // 1. Initialize Quagga
        Quagga.init({
            inputStream: {
                name: "Live",
                type: "LiveStream",
                target: document.querySelector('#scanner-container'), // Target the div element on the Blazor page
                constraints: {
                    facingMode: "environment" // Use the rear camera
                }
            },
            decoder: {
                readers: ["ean_reader", "upc_reader", "code_128_reader"] // Specify barcode types
            }
        }, function (err) {
            if (err) {
                console.error(err);
                alert("Error initializing scanner: " + err);
                return
            }
            Quagga.start();
        });

        // 2. Set up event listener for when a barcode is detected
        Quagga.onDetected(function (data) {
            Quagga.stop(); // Stop scanning once a code is found
            var barcode = data.codeResult.code;
            console.log("Barcode detected: " + barcode);

            // 3. Call the C# method back in the Blazor component!
            dotNetHelper.invokeMethodAsync('OnBarcodeScanned', barcode)
                .then(() => {
                    // Optional: Clean up scanner container 
                    document.querySelector('#scanner-container').innerHTML = '';
                });
        });
    },

    // A function to gracefully stop the scanner
    stopScanner: function () {
        if (typeof Quagga !== 'undefined') {
            Quagga.stop();
        }
    }
};