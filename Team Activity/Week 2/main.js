const addNumbers = () => {
    const input = parseInt(document.getElementById('fname').value);

    if (typeof input == 'number') {
        let $total = 0;
        for (let i = 0; i <= input; i++) {
            $total += i;
        }

        document.getElementById("result").innerHTML = $total;
    }
}

function calculateadd() {
    let input1 = parseInt(document.getElementById('fname').value);
    let input2 = parseInt(document.getElementById('add').value);
    let result = input1 + input2;
    document.getElementById('result').innerHTML = result;
}

const calculateSub = function () {
    let input1 = parseInt(document.getElementById('fname').value);
    let input2 = parseInt(document.getElementById('add').value);
    let result = input1 - input2;
    document.getElementById('result').innerHTML = result;
}


function myFunction() {
    const input = document.getElementById('fname').value;
    document.getElementById('result').innerHTML = input;
}