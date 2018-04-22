/*
    ex_2_紅外線感應器

    可用針腳：
        34, 35, 36
 */


// 宣告變量 LIR
// 左邊紅外線感應器
var ir1;
var ir2;
var ir3;

function readCarIR() {

    // 輸入 D34 的值，儲存在 LIR
    //  digitalRead(<針腳編號>) - 輸入數字數據 (1 或 0)
    ir1 = digitalRead(D35);
    ir2 = digitalRead(D34);
    ir3 = digitalRead(D36);


    // 將 變量 LIR 的值輸出至屏幕
    print(ir1+" "+ir2+" "+ir3);

}


// 每 300 毫秒執行 readCarIR 一次
//  300 毫秒 = 300/1000 秒 = 0.3 秒
setInterval(readCarIR,300);