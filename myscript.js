// as for input
const name = prompt("what is your name?");

const degFahren = prompt("enter degree in farenheit");

const degCel = toCelcius(degFahren);
fahrenMsg(degFahren);
let clyde = toCelcius(80);

// convert input to celsius
function toCelcius(fahrenheit){
    const degCel = (5 / 9) * (fahrenheit - 32);
    return degCel;
}

// display message based on temperature in farenheit
function fahrenMsg(fahrenheit){
    let msg = fahrenheit + "\xB0 Fahrenheit is " + degCel + "\xB0 Celcius ";      
    if (fahrenheit < 69) {
        alert(msg + "\n Oh that's cold!");
      } else if (fahrenheit > 69 && fahrenheit < 83) {
        alert(msg + "\n Temperature is just right!");
      } else {
        alert(msg + "\n Its way too hot!");
      }
}



