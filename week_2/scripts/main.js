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
