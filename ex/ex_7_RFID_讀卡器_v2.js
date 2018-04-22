/*
    ex_7_RFID_讀卡器

    可用針腳 (spi)：
        5, 18, 23, 19, 21
 */
// MH-ET LIVE ESP32 mini-kit
//  RC522 13.6 MHz RFID card reader
//
//  2018-01-13
//

const board = 'esp32';
const spi_SS_CS_DA = D5;
const spi_SCK = D18;
const spi_MOSI = D23;
const spi_MISO = D19;
//const spi_RST = D21;

// 連接 RFID 讀卡器
var spi = new SPI();
spi.setup({sck:D18, miso:D19, mosi:D23 });
var nfc = require("MFRC522").connect(spi, D5 /*SS CS DA*/);


// find cards
setInterval(function() {
    // 等待同戶拍卡
    nfc.findCards(function(card) {
        // 找到 RFID 卡
        print("Found card "+card);

        // 用變量 card 儲存卡的編號
        card = JSON.stringify(card);

        // 顯示編號
        console.log(card);
        /*
        var leds = [LED1,LED2];
        if (card=="[147,239,211,128]") digitalWrite(leds,1);
        if (card=="[249,192,235,164]") digitalWrite(leds,2);
        */
    });
}, 300);
