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

function bottles() {
    let bottles = 99;
    while (bottles > 0) {
        console.log("I'm here");
        document.getElementById('bottle_result').innerHTML += bottles + " bottles of beer on the wall, " + bottles + " bottles of beer on the wall, take one down, pass it around. " + (bottles-1) + " bottles of beer on the wall. <br />";
        bottles--;
    }
}

function bottleReset () {
    document.getElementById('bottle_result').innerHTML = "";
}

var liftoff = function() {
    var countdown = 10;
    do {
        document.getElementById("liftOff_result").innerHTML += countdown + '<br />';
        countdown--;
    } while (countdown > 0)
}

document.getElementById('liftOff').addEventListener('click', liftoff);

liftOffReset = () => {
    document.getElementById("liftOff_result").innerHTML = "";
}

function counting() {
    for(let i = 1; i <= 25; i++) {
        document.getElementById('counting_result').innerHTML += i + '<br />';
    }
}

countingReset = () => {
    document.getElementById('counting_result').innerHTML = "";
}
