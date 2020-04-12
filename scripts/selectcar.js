var us = document.getElementById("us_car");
var e = document.getElementById("euro_car");
var j = document.getElementById("japan_car");

function show_us() {
  if (us.style.display === "none" || us.style.display == "") {
    us.style.display = "flex";
    j.style.display = "none";
    e.style.display = "none";
  }
}

function show_euro() {
  if (e.style.display === "none" || e.style.display == "") {
    e.style.display = "flex";
    us.style.display = "none";
    j.style.display = "none";
  }
}

function show_japan() {
  if (j.style.display === "none" || j.style.display == "") {
    j.style.display = "flex";
    us.style.display = "none";
    e.style.display = "none";
  }
}
