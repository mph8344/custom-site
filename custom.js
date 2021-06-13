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
    setInterval(() => {
      setCSS(element);
    }, 80000);
  });
}

var countDownDate = new Date("Jun 19, 2021 17:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "CHAIRTIME :)";
  }
}, 1000);
