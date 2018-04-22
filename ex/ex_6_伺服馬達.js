/*
    ex_6_伺服馬達

    可用針腳：
        2, 4, 5, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 27, 32

    伺服馬達:
        紅色線 --> Vin
        啡色線 --> Gnd
        橙色線 --> D12 或 D13

     參考網址：
        https://www.espruino.com/Servo+Motors
 */


function setServo(pin, pos) {
    if (pos<0) pos=0;
    if (pos>1) pos=1;
    analogWrite(pin, (1+pos) / 50.0, {freq:20});
}

//  有限角度伺服馬達，連接到針腳 D12
setServo(D12, 0);   //  轉至 0 度
/*
setServo(D12, 0.5); //  轉至 45 度
setServo(D12, 1);   //  轉至 90 度

//  連續轉動伺服馬達
setServo(D12, 0);   //  順時針轉動
setServo(D12, 0.5); //  停止轉動
setServo(D12, 1);   //  逆時針轉動
*/