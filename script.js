function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

window.onload = function() {
    const image_id = randomIntFromInterval(1, 59);

    var img = document.getElementById("randomImage");

    img.src = "images/" + image_id + ".jpg";
};
