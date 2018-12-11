function add() {
    var value1 = parseInt(document.getElementById("value1").value, 10);
    var value2 = parseInt(document.getElementById("value2").value, 10);

    var result = value1 + value2;

    document.getElementById("result").innerHTML = result;
}

function subtract() {
    var value1 = parseInt(document.getElementById("value1").value, 10);
    var value2 = parseInt(document.getElementById("value2").value, 10);

    var result = value1 - value2;

    document.getElementById("result").innerHTML = result;
}
 
 function multiply() {
    var value1 = parseInt(document.getElementById("value1").value, 10);
    var value2 = parseInt(document.getElementById("value2").value, 10);

    var result = value1 * value2;

    document.getElementById("result").innerHTML = result;
}
 
 function divide() {
    var value1 = parseInt(document.getElementById("value1").value, 10);
    var value2 = parseInt(document.getElementById("value2").value, 10);

    var result = value1 / value2;

    document.getElementById("result").innerHTML = result;
}

function squareroot() {
    var value1 = parseInt(document.getElementById("value1").value, 10);
    var value2 = parseInt(document.getElementById("value2").value, 10);

    var result = Math.sqrt(value1);

    document.getElementById("result").innerHTML = result;
}

function pi() {
    var value1 = parseInt(document.getElementById("value1").value, 10);
    var value2 = parseInt(document.getElementById("value2").value, 10);

    var result = Math.PI * value1 * value1;

    document.getElementById("result").innerHTML = result;
}


function circumference() {
    var value1 = parseInt(document.getElementById("value1").value,10);
   
    var result = value1 * 2 * Math.PI;

    document.getElementById("result").innerHTML = result;
} 