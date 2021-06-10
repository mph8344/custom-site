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
