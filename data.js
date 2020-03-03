export const fetchGeo = async () => {
    let response = await navigator.geolocation.getCurrentPosition(data => {
        console.log('first ', data)
        const {latitude,longitude} = data.coords
        fillDiv([latitude, longitude], ele1)
    })
}

export const fetchMap = () => {
    var mymap = L.map('mapid').setView([52.5091575, 13.4164579], 14);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap);
    var marker = L.marker([52.5091575, 13.4164579]).addTo(mymap);
}

function fillDiv(data, div) {
    ele1.innerHTML = data.toString()
}
