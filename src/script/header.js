const navLink = document.querySelectorAll(".nav_link");
const winndowPathName = window.location.pathname;

navLink.forEach((navLink) => {
  if (navLink.href.include(winndowPathName)) {
    navLink.classList.add("active");
  }
});

console.log("baba");
