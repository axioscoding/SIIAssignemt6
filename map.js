const map = L.map('map').setView([51.9607, 7.6261], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);



const marker = L.marker([51.9607, 7.6261]).addTo(map);

marker.bindPopup("<b>Münster</b>");



const polygon1 = L.polygon([
    [51.8833, 7.6416],
    [51.8693, 7.5610],
    [51.8276, 7.5551],
    [51.8324, 7.6348],
    [51.8441, 7.6602],
    [51.8833, 7.6417]
]).addTo(map);


polygon1.bindPopup("<b>Davert</b>")

const polygon2 = L.polygon([
    [51.9137, 7.697],
    [51.9112, 7.6972],
    [51.9112, 7.7002],
    [51.9129, 7.6996],
    [51.9137, 7.6977]
]).addTo(map);

polygon2.bindPopup("<b>Bonnenkamp</b>")


const polygon3 = L.polygon([
    [52.0188, 7.6638],
    [52.0183, 7.6513],
    [52.0116, 7.6510],
    [52.0109, 7.6554],
    [52.0134, 7.6571],
    [52.0115, 7.6616],
    [52.0188, 7.6638]
]).addTo(map);

polygon3.bindPopup("<b>Rieselfelder</b>")