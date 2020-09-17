var earth;

function initialize() {
    var options = {
        atmosphere: true,
        center: [0, 0],
        zoom: 0
    };
    earth = new WE.map('earth_div', options);

    WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Â© OpenStreetMap contributors'
    }).addTo(earth);

}

function goHome() {
   earth.setZoom(14.8225789);
   earth.setCenter([ 60.18165469744737, 24.922172112295748 ]);
}

function showCoords() {
   alert(earth.getCenter());

}
