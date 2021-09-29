// let numbers = document.querySelectorAll(".btn33");

function square() {
    let inputval = document.getElementById("inputVal");
    inputval.value = Math.pow(inputval.value, 2);
}

function factorial() {
    let inputval = document.getElementById("inputVal");
    let fact = 1;
    for (let i = 1; i <= inputval.value; i++) {
        fact *= i;
    }
    inputval.value = fact;
}

function modulus() {
    let inputval = document.getElementById("inputVal");
    if (inputval.value < 0)
        inputval.value = -(inputval.value);
    inputval.value;
}

function sqrt2() {
    let inputval = document.getElementById("inputVal");
    inputval.value = Math.pow(inputval.value, 1 / 2);
}

function sinval() {
    let inputval = document.getElementById("inputVal");
    let degree = inputval.value * (Math.PI / 180);
    let angle = Math.sin(degree);
    inputval.value = angle;
}

function cosval() {
    let inputval = document.getElementById("inputVal");
    let degree = inputval.value * (Math.PI / 180);
    let angle = Math.cos(degree);
    inputval.value = angle;
}

function tanval() {
    let inputval = document.getElementById("inputVal");
    let degree = inputval.value * (Math.PI / 180);
    let angle = Math.tan(degree);
    inputval.value = angle;
}

function tenpowX() {
    let inputval = document.getElementById("inputVal");
    inputval.value = Math.pow(10, inputval.value);
}

function twopowX() {
    let inputval = document.getElementById("inputVal");
    inputval.value = Math.pow(2, inputval.value);
}

function logarithmicX() {
    let inputval = document.getElementById("inputVal");
    inputval.value = Math.log10(inputval.value);
}

function powerY() {
    let inputval = document.getElementById("inputVal");
    let x = inputval.value;
    inputval.value = x + "^";
    number(val);
    let y = inputval.value;

    inputval.value = Math.pow(x, y)
}

function pieval() {
    let inputval = document.getElementById("inputVal");
    inputval.value *= Math.PI;
}

function number(val) {
    let inputval = document.getElementById("inputVal");
    inputval.value += val;
}

function clearVal() {
    let inputval = document.getElementById("inputVal");
    inputval.value = " ";
}

function backspace() {
    let inputval = document.getElementById("inputVal");
    let val = inputval.value;
    inputval.value = val.substr(0, val.length - 1)
}

function calculation() {
    let inputval = document.getElementById("inputVal");
    let x = inputval.value;
    inputval.value = eval(x);
}