import * as data from './data.js'

function hideElement(element) {
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
};


window.onload = function () {
    console.log('External: onload fired');
    document.getElementById("but1").addEventListener("click", function () {
        hideElement(ele1)
    });
    document.getElementById("but2").addEventListener("click", function () {
        hideElement(ele2)
    });
    document.getElementById("but3").addEventListener("click", function () {
        hideElement(ele3)
    });
    document.getElementById("but4").addEventListener("click", function () {
        hideElement(ele4)
    });

    data.fetchGeo();
    data.fetchMap();
    
};



document.addEventListener('DOMContentLoaded', function () {
    console.log('External: DOM fully loaded and parsed');
})
