function alertMe() {
    alert("The code makes it to the reference!")
}


function doInputOutput() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    var hh = today.getHours();
    var mn = today.getMinutes();
    var ss = today.getSeconds();
    
    if (hh > 12) {
        hh = hh - 12
    }
    
    if (hh < 10) {
        hh = "0"+hh
    }
    
    if (dd < 10) {
        dd = "0"+dd
    }
    
    if (mm < 10) {
        mm = "0"+mm
    }
    
    if (mn < 10) {
        mn = "0"+mn
    }
    
    if (ss < 10) {
        ss = "0"+ss
    }
    
    
    
    
    
    var display = "Last Updated: " + mm + "/" + dd + "/" + yyyy + "   " + hh + ":" + mn + ":" + ss;
    var display2 = "Last Updated: " + document.lastModified;

    document.getElementById("updateDate").innerHTML = display2;
    document.getElementById("curYear").innerHTML = yyyy;
    // alert("This works!")
}


function toggleMenu () {
    document.querySelector('#navigation').classList.toggle("open");
}

document.getElementById("menu").addEventListener('click', toggleMenu);


document.querySelector("#transform1").addEventListener('touchend', event => {document.querySelector('#transform1').classList.toggle("effective1");})
document.querySelector("#transform2").addEventListener('touchend', event => {document.querySelector('#transform2').classList.toggle("effective2");})



// Canvas scripts

let canvas = document.getElementById("myCanvas");     
let context = canvas.getContext("2d");
context.strokeStyle = "red";
context.fillStyle = "blue"