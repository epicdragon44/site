// fade about to black on scroll out

const [red1, green1, blue1] = [252, 245, 229];
const section1 = document.querySelector(".welcome-splash");

window.addEventListener("scroll", () => {
  const y = 1 + (window.scrollY || window.pageYOffset) / 50;
  const [r, g, b] = [red1 / y, green1 / y, blue1 / y].map(Math.round);
  section1.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

// fade projects to black on scroll in

const [red2, green2, blue2] = [252, 245, 229];
const section2 = document.querySelector(".about-splash");

window.addEventListener("scroll", () => {
  const y = 1 + (window.scrollY || window.pageYOffset) / 50;
  const [r, g, b] = [red2 / y, green2 / y, blue2 / y].map(Math.round);
  section2.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

// detect mobile

if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  const page = document.querySelector("body");
  page.innerHTML =
    "<center><h1><br><br><br>This page really works better on desktop.</h1><center>";
}
