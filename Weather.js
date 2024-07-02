// this is a javascript file for solving the weather functions
// Developer name: Bayan Abu Sarari
//developer- Email: Bayan.sarari97@gmail.com
var temp = document.querySelectorAll(".tempW"); //global function for the code 

// This function will display an alert when clicking on a city from the nav bar

function displayAlert(Element) {
    alert("Loading weather report..");
}

// This function will dismiss the cookie ploicy message when clicking "I Accept"

function acceptCookie() {
    var Accept = document.querySelector(".bottom");
    Accept.remove();
}

// This function will convert the temerature when the select is changed
function convertTemperature(element) {// if F is selected  
    if(element.value == "F") {
        convertCelsiusToFahrenheitTemperature();
    }else if(element.value == "C"){// if C is selected
        convertFahrenheitToCelsiusTemperature();
    }
}

function convertCelsiusToFahrenheitTemperature(element) { //this function will be used to convert Celsius to Fahrenhit
    for(var i = 0; i < temp.length; i++) {
        var cTempreture = temp[i].innerText;
        var fTemreture = (cTempreture * 9/5) + 32; // this is the fahrenit converting equation 
        temp[i].innerText = Math.round(fTemreture);
    }
}

function convertFahrenheitToCelsiusTemperature(element) { // this function will be used to convert Fahrenhit to Celsius
    for(var i = 0; i < temp.length; i++) {
        var fTemreture = temp[i].innerText;
        var cTempreture = (fTemreture - 32) * 5/9 // this is the celsius converting equation 
        temp[i].innerText = Math.round(cTempreture);
    }
}
