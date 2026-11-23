const theme_btn = document.querySelector("#theme");
const body = document.querySelector("body");
const img_sun_light = document.querySelector(".icon-sunlight");
const img_moon_light = document.querySelector(".icon-moonlight");
const intro_title = document.querySelector(".title-container")

theme_btn.addEventListener("change", (e) => {
 if (e.target.checked) {
  body.style.background = "url('/starter-code/assets/images/pattern-background-mobile-dark.svg') no-repeat";
  body.style.backgroundColor = "var(--blue-900)";
  img_sun_light.src = "/starter-code/assets/images/icon-sun-light.svg";
  img_moon_light.src = "/starter-code/assets/images/icon-moon-light.svg";
 } else {
  body.style.backgroundImage = "url('/starter-code/assets/images/pattern-background-mobile-light.svg')";
  body.style.backgroundColor = "var(--grey-50)";
  img_sun_light.src = "/starter-code/assets/images/icon-sun-dark.svg";
  img_moon_light.src = "/starter-code/assets/images/icon-moon-dark.svg";

 }
})