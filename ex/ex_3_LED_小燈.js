/*
    ex_3_LED_小燈

    可用針腳：
        2, 4, 5, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 27, 32
 */

//  宣告 LED 在針腳 D2
var led = D2;

//  宣告 LED 開著的時間，100% 中有 5% 是點亮的
//  0.05 x 100% = 5%
var value = 0.05;

//  宣告 LED 點亮的頻率
//  freq:2 代表每秒鐘 2 次
var options ={freq:2};

//  執行模擬輸出指令 analogWrite
analogWrite(led, value, options);

