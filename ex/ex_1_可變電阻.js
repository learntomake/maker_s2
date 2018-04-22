/*
    ex_1_可變電阻

    可用針腳：
        34, 35, 36
 */

// 宣告變量 vr
// 可變電阻
var vr;

function readVR() {

    // 輸入 D35 的值，儲存在 vr
    //  analogRead(<針腳編號>) - 輸入模擬數據
    vr = analogRead(D35);

    // 將 變量 vr 的值輸出至屏幕
    print(vr);

}

// 每 300 毫秒執行 readVR 一次
//  300 毫秒 = 300/1000 秒 = 0.3 秒
setInterval(readVR,300);
