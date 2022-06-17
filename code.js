let celsius = document.getElementById("Celsius");
let farenheit = document.getElementById("Farenheit");

function farToCels(){
    farenheit.value = Math.round(((celsius.value*9/5)+32) *100)/1000;
}

function celsToFar(){
    celsius.value = Math.round(((farenheit.value-32)*5/9) *100)/1000;
}