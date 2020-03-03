import * as data from './data.js'

function hideElement(element) {
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
};

function teste(){
    let artist = inputartist.value
    let title = inputtitle.value
    console.log(artist,title)
    data.fetchLyrics(artist, title);
}

window.onload = function () {
    console.log('External: onload fired');
    document.getElementById("but1").addEventListener("click", function () {
        hideElement(map)
    });
    document.getElementById("but2").addEventListener("click", function () {
        hideElement(lyrics)
    });
    document.getElementById("but3").addEventListener("click", function () {
        hideElement(ele3)
    });
    document.getElementById("but4").addEventListener("click", function () {
        hideElement(ele4)
    });
    
    lyricsOut.onclick = teste

    data.fetchGeo();
    
    
    
};



document.addEventListener('DOMContentLoaded', function () {
    console.log('External: DOM fully loaded and parsed');
})
