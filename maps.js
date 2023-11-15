var map = L.map('map').setView([-22.74603407211565, -43.70001251626407], 14);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker1 = L.marker([-22.761539226911854, -43.6868659734563]).addTo(map);
var marker2 = L.marker([-22.771055196712112, -43.68478216684181]).addTo(map);
var marker3 = L.marker([-22.76021300212017, -43.69220877212448]).addTo(map);

marker1.bindPopup("<b>UFRRJ</b><br>").openPopup();
marker2.bindPopup("<b>PAT</b><br>").openPopup();
marker3.bindPopup("<b>Lago do IA</b><br>").openPopup();