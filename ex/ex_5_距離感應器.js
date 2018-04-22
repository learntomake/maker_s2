/*
    ex_5_距離感應器

    可用針腳：
        22, 21

        Vcc: 5v
        Gnd: Gnd
        trig: D22
        echo: -->HV1    LV1 -->D21

    參考網址：
        https://www.espruino.com/HC-SR04
 */


var sensor = require("HC-SR04").connect(D22, D21, function(distance) {
    console.log(distance+" cm away");
});

setInterval(function() {
    sensor.trigger(); // send pulse
}, 500);