export const fetchGeo = async () => {
    let response = await navigator.geolocation.getCurrentPosition(data => {
        console.log('first ', data);
        const {latitude,longitude} = data.coords;
        fetchMap(latitude, longitude);
    })
}

export const fetchMap = (xx, yy) => {
    var mymap = L.map('mapid').setView([xx, yy], 14);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap);
    var marker = L.marker([xx,yy]).addTo(mymap);
}

function fillDiv(data, div) {
    div.innerHTML = data.toString()
}

function const fetchLyrics = async () => {
    let response = await fetch('https://api.lyrics.ovh/v1/coldplay/yellow');
    let data = await response.json();
    fillDiv(data, ele2)
}