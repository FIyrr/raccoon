function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

window.onload = function() {
    const image_id = randomIntFromInterval(1, 3);

    // Get a reference to the image element
    var img = document.getElementById("randomImage");

    // Set the source of the image to a random image from the dataset
    img.src = "images/" + image_id + ".jpg";
};
