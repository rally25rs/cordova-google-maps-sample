(function (global) {
    "use strict";

    function onDeviceReady() {
        document.addEventListener("online", onOnline, false);
        document.addEventListener("resume", onResume, false);
        loadMapsApi();
    }

    function onOnline() {
        loadMapsApi();
    }

    function onResume() {
        loadMapsApi();
    }

    function loadMapsApi() {
        if (navigator.connection.type === Connection.NONE || (global.google !== undefined && global.google.maps)) {
            return;
        }

        //TODO: Add your own Google maps API key to the URL below.
        $.getScript('https://maps.googleapis.com/maps/api/js?sensor=true&callback=onMapsApiLoaded');
    }

    global.onMapsApiLoaded = function () {
        // Maps API loaded and ready to be used.
        var map = new google.maps.Map(document.getElementById("map"), {
            zoom: 8,
            center: new google.maps.LatLng(-34.397, 150.644)
        });
    };

    document.addEventListener("deviceready", onDeviceReady, false);
})(window);