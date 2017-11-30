function Skyscraper(windows) {
  this.what = "A type of skyscraper";
  this.windows = windows;
}

Skyscraper.prototype.countWindows = function () {
  console.log(this.windows);
}

const WTC = new Skyscraper(100);
WTC.countWindows();
