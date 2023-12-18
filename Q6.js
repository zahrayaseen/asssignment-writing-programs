"use strict";
function checktemperature(temperature) {
    let temperature_ = 45;
    if (temperature_ >= 8 && temperature_ <= 15) {
        console.log("please wear warm clothes");
    }
    else if (temperature_ > 15 && temperature_ <= 40) {
        console.log("please wear cool clothes");
    }
    else {
        console.log("too hot temperature , wear cool clothes");
    }
}
checktemperature(45);
