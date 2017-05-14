var config1 = liquidFillGaugeDefaultSettings();
config1.circleColor = "F60A20";
config1.textColor = "#F60A20";
config1.waveTextColor = "#F2F2F2";
config1.waveColor = "#F60A20";
config1.circleThickness = 0.1;
config1.textVertPosition = 0.5;
config1.maxValue = 80;
config1.waveAnimateTime = 1000;
var gauge1= loadLiquidFillGauge("fillgauge1", 25.6, config1);

var config2 = liquidFillGaugeDefaultSettings();
config2.circleColor = "F60A20";
config2.textColor = "#F60A20";
config2.waveTextColor = "#F2F2F2";
config2.waveColor = "#F60A20";
config2.circleThickness = 0.07;
config2.textVertPosition = 0.5;
config2.waveAnimateTime = 1000;
config2.maxValue = 4000000;
config2.textSize = 0.5;
config2.displayPercent = false;
config2.displayDollar = true;
var gauge2= loadLiquidFillGauge("fillgauge2", 2920000, config2);

var config3 = liquidFillGaugeDefaultSettings();
config3.circleColor = "F60A20";
config3.textColor = "#F60A20";
config3.waveTextColor = "#F2F2F2";
config3.waveColor = "#F60A20";
config3.circleThickness = 0.1;
config3.textVertPosition = 0.5;
config3.waveAnimateTime = 1000;
config3.maxValue = 50;
config3.displayPercent = false;
var gauge3= loadLiquidFillGauge("fillgauge3", 39, config3);

