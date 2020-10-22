console.log("hello world!!");

function StopWatch() {
  Object.defineProperty(this, "duration", {
    get: function () {
      if (this.isRunning) return Date.now() / 1000 - this.startTimestamp;

      return this.stopTimestamp - this.startTimestamp;
    },
  });

  Object.defineProperty(this, "isRunning", {
    value: false,
  });
  Object.defineProperty(this, "startTimestamp", {
    value: 0,
  });
  Object.defineProperty(this, "stopTimestamp", {
    value: 0,
  });
}

StopWatch.prototype.start = function () {
  if (this.isRunning) throw new Error("Already running");
  this.startTimestamp = Date.now() / 1000;
  this.isRunning = true;
};

StopWatch.prototype.stop = function () {
  if (!this.isRunning) throw new Error("Already stopped");
  this.stopTimestamp = Date.now() / 1000;
  this.isRunning = false;
};

StopWatch.prototype.reset = function () {
  this.isRunning = false;
  this.startTimestamp = 0;
  this.stopTimestamp = 0;
};

/// Prototypical inheritance
function HtmlElement() {
  this.click = function () {
    console.log("clicked");
  };
}

HtmlElement.prototype.focus = function () {
  console.log("Focused");
};

