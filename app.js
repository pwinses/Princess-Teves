var slide = 1;
showDivs(slide);

function plusDivs(n) {
  showDivs(slide += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("image");
  if (n > x.length) {slide = 1}
  if (n < 1) {slide = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slide-1].style.display = "block";
}