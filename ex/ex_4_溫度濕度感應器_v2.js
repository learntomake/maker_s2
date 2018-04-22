/*
    ex_4_溫度濕度感應器_v2

    可用針腳：
        2
 */

//  宣告變量 dht
//  宣告使用 DHT22 程式
//  dht 連接針腳 D22
var dht=require("DHT22").connect(D22);


// 讀取溫度 Temperature
// 讀取濕度 RH
function readDHT22() {
    dht.read(function (a) {
        //  列印溫度 Temp 的值
        //  a.temp.toString() 代表將 a 裡的 temp 換成字符格式
        print("Temperature is " + a.temp.toString());

        //  列印濕度 RH 的值
        print("RH is " + a.rh.toString());
    });
}


setInterval(readDHT22, 1000);