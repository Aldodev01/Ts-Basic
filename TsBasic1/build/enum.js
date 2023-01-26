"use strict";
//* enum
//* Numeric Enum
var MonthNum;
(function (MonthNum) {
    MonthNum[MonthNum["JAN"] = 1] = "JAN";
    MonthNum[MonthNum["FEB"] = 2] = "FEB";
    MonthNum[MonthNum["MAR"] = 100] = "MAR";
    MonthNum[MonthNum["APR"] = 101] = "APR";
    MonthNum[MonthNum["MEI"] = 200] = "MEI";
    MonthNum[MonthNum["JUN"] = 201] = "JUN";
    MonthNum[MonthNum["JUL"] = 202] = "JUL";
})(MonthNum || (MonthNum = {}));
//* String Enum
var MonthStr;
(function (MonthStr) {
    MonthStr["JAN"] = "Januari";
    MonthStr["FEB"] = "Februari";
    MonthStr["MAR"] = "Maret";
    MonthStr["APR"] = "April";
    MonthStr["MEI"] = "Mei";
    MonthStr["JUN"] = "Juni";
    MonthStr["JUL"] = "Juli";
})(MonthStr || (MonthStr = {}));
console.log(MonthStr);
