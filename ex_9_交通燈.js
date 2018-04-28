/*
    ex_9_交通燈.js
    可用針腳：
        2, 4, 5, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 27, 32
 */

//  宣告 LED 在針腳 D2
var led1 = D12;
var led2 = D13;
var led3 = D14;
var on = true;
var off = false;

//  宣告 LED 開著的時間，100% 中有 5% 是點亮的
//  0.05 x 100% = 5%


//  執行模擬輸出指令 analogWrite
function R(value) {digitalWrite(led1, value);}
function Y(value) {digitalWrite(led2, value);}
function G(value) {digitalWrite(led3, value);}


function changeLight() {
    state++;
    if (state==5) {
        state=0;
    }
}

function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}

state = 0;
while (true) {
    if (state===0) {
        R(on); Y(off); G(off);
    }
    if (state==1) {
        R(on); Y(on); G(off);
    }
    if (state==2) {
        R(off); Y(off); G(on);
    }
    if (state==3) {
        R(off); Y(on); G(off);
    }
    if (state==4) {
        R(on); Y(off); G(off);
    }
    state++;
    if (state==5) {
        state=0;
    }
    sleep(2000);
}