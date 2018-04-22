/*
    ex_8_泥土濕度

    可用針腳：
        34, 35, 36 (VP)
 */

// 宣告變量 soil
// 泥土濕度
var soil;

function readSoil() {

    // 輸入 D35 的值，儲存在 vr
    //  analogRead(<針腳編號>) - 輸入模擬數據
    soil = analogRead(D35);

    // 將 變量 vr 的值輸出至屏幕
    print(soil);

}

// 每 300 毫秒執行 readVR 一次
//  300 毫秒 = 300/1000 秒 = 0.3 秒
setInterval(readSoil, 300);
