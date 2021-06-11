var squares;
var prevWidth;

$(() => {
  var customMessages = [];

  var $width = (prevWidth = $(window).width());

  for (var i = 0; i < 10; i++) {
    customMessages.push(`Message #${i}`);
  }

  squares = [...$(".square")];

  squares.forEach((element, index) => {
    $(element).css(
      "background-color",
      "rgb(" +
        Math.floor(Math.random() * 255) +
        "," +
        Math.floor(Math.random() * 255) +
        "," +
        Math.floor(Math.random() * 255) +
        ")"
    );

    var calculated = index * 100;

    $(element).css("animation-delay", `${calculated}ms`);
  });

  console.log($width);

  if ($width < 900) {
    readySquares();
  }
});

var customMessages = ["Message 1", "Message 2", "Message 3"];

//index index.html index.htm index.nginx-debian.html;
//try_files $uri $uri/ =404;

window.addEventListener("resize", function () {
  var $width = $(window).width();

  if ($width < 900 && prevWidth > 900) {
    readySquares();
  } else if ($width > 900) {
    this.clearInterval(setCSS);
  }
  prevWidth = $width;
});

function setCSS(element) {
  console.log("setting css");

  $(element).css(
    "background-color",
    "rgb(" +
      Math.floor(Math.random() * 255) +
      "," +
      Math.floor(Math.random() * 255) +
      "," +
      Math.floor(Math.random() * 255) +
      ")"
  );
}

function readySquares() {
  squares.forEach((element, index) => {
    //var calculated = index * 50 + 6000;
    setInterval(() => setCSS(element), 7500);
  });
}

function checkSize() {}
