const imgEl = document.querySelector("img");

// imgEl.src = "../img/yellow_lamp.png";
// imgEl.alt = "light on";
// console.log(imgEl);

const btnEl = document.getElementById("on-off");
// console.log(btnEl);

btnEl.addEventListener("click", function () {
  //   console.log("clicked");
  imgEl.src = "../img/yellow_lamp.png";
  imgEl.alt = "light on";
  //   console.log(imgEl);
});
