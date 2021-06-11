$(() => {
  [...$(".square")].forEach(element => {
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
  });
});

//index index.html index.htm index.nginx-debian.html;
//try_files $uri $uri/ =404;
