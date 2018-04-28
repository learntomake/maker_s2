/*
    ex_9_交通燈.js
    可用針腳：
        2, 4, 5, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 27, 32
 */

//  宣告 LED 在針腳 D2
var led1 = D12;
var led2 = D13;
var led3 = D14;

//  宣告 LED 開著的時間，100% 中有 5% 是點亮的
//  0.05 x 100% = 5%
var valueR = 0.02;
var valueY = 1.0;
var valueG = 0.05;
var off = 0;

function R(value) {analogWrite(led1, value);}
function Y(value) {analogWrite(led2, value);}
function G(value) {analogWrite(led3, value);}


function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}

var state = 0;
while (true) {
    if (state===0) {
        R(valueR); Y(off); G(off);
    }
    if (state===1) {
        R(valueR); Y(valueY); G(off);
    }
    if (state===2) {
        R(off); Y(off); G(valueG);
    }
    if (state===3) {
        R(off); Y(valueY); G(off);
    }
    if (state===4) {
        R(valueR); Y(off); G(off);
    }
    state++;
    if (state===5) {
        state = 0;
    }
    sleep(1000);
}