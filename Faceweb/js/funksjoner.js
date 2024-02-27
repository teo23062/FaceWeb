function sur()
    {
    document.getElementById('bilde').src="./img/sur.jpg";    
    }

function trist()
    {
    document.getElementById('bilde').src="./img/trist.jpg";    
    }
    

// Utvikler 1
function glad()
    {
    document.getElementById('bilde').src="./img/glad.jpg";    
    }

function redd()
    {
    document.getElementById('bilde').src="./img/redd.jpg";    
    }

var bilder = ["./img/glad.jpg", "./img/redd.jpg", "./img/sint.jpg", "./img/spro.jpg", "./img/sur.jpg", "./img/trist.jpg"];
var i = 0;

function tilfeldig() {
    var max = 5;
    var min = 0;

    i = Math.floor(Math.random() * (max - min + 1)) + min;
    if (i >= bilder.length) {
        i = 0;
    }
    document.getElementById("bilde").src = bilder[i];
}