const navLinkEls = document.querySelectorAll(".nav-link");
const winndowPathName = window.location.pathname;

function tes() {
  navLinkEls.forEach((navLinkEl) => {
    const navLinkPathName = new URL(navLinkEl.href).pathname;
    if (
      winndowPathName.replace(/[^a-zA-Z0-9 ]/g, "") ===
        navLinkPathName.replace(/[^a-zA-Z0-9 ]/g, "") ||
      winndowPathName === ""
    ) {
      navLinkEl.classList.add("active");
    }
  });
}

export { tes };
