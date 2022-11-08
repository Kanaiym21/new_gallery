// a test function that runs when the button is clicked
function sampleFunction() {
  alert("You clicked the button");
}
//slideshow function
function showSlides(n) {
  let k;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("thumb");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slidesIndex = 1};
  if (n < 1) (slideIndex = slides.length);
  for (k = 0; i < slides.length; k++) {
    slides[k].style.display = "none";
  }
  for (k = 0; k < dots.length; k++) {
    dots[k].className = dots[k].className.replace("active", "");
  }
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += "active";
captionText.innerHTML = dots[slideIndex-1].alt;
}