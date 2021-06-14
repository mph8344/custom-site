var squares;
var prevWidth;
var globalSound;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

var sounds = [
  "beandip.mp3",
  "hedontbox.mp3",
  "hillaryisinhim.mp3",
  "mattaah.mp3",
];

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

    var sound = "./sounds/" + sounds[getRandomInt(sounds.length)];

    var audio = new Audio(sound);

    element.onclick = () => playSound(audio);

    var calculated = index * 100;

    $(element).css("animation-delay", `${calculated}ms`);
  });

  if ($width < 900) {
    readySquares();
  }
});

function playSound(audio) {
  if (globalSound) {
    globalSound.pause();
  }

  globalSound = audio;

  globalSound.play();
}

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
