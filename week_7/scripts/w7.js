(function(){
    debugger;
});

 

// Self invoking function / IFFE
(function(){
    const temp = 'World';
    const funct = 'I am a self invoked fucntion'
    document.getElementById('out1').innerHTML = (`Hello ${temp}, ${funct}`);
})();



// Replacing variables using an IFFE with no unused variables
let out2 = document.getElementById('out2');

let a = 1;
let b = 2;

out2.innerHTML = `Before, a = ${a} and b = ${b} </br>`;

(()=>{
    const temp = a;
    a = b;
    b = temp;
})();
    // This took a lot longer than necessary to figure out how this worked.

out2.innerHTML += `After,  a = ${a} and b = ${b}`;


//Function defining and rewriting itself
        // Could not get it to work with an event listener.....
out3 = document.getElementById('out3');

i=0;
while (i < 3) {
    rewrite();
    i++;
}


function rewrite() {
    out3.innerHTML += 'This museum is pretty cool!';
    rewrite = function(){
        out3.innerHTML += "</br>Yeah, I've been to that museum";
    }
}
