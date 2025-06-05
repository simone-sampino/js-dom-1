const imgEl = document.querySelector("img");

// imgEl.src = "../img/yellow_lamp.png";
// imgEl.alt = "light on";
// console.log(imgEl);

const btnEl = document.getElementById("on-off");
// btnEl.innerHTML = "Spegni";
// console.log(btnEl);

btnEl.addEventListener("click", function () {
  //   console.log("clicked");
  if (imgEl.src.includes("white_lamp.png")) {
    imgEl.src = "../img/yellow_lamp.png";
    imgEl.alt = "light on";
    // console.log(imgEl);
    btnEl.innerHTML = "Spegni";
    // console.log(btnEl);
  } else {
    // procedimento inverso
    imgEl.src = "../img/white_lamp.png";
    imgEl.alt = "light off";
    btnEl.innerHTML = "Accendi";
  }
});
