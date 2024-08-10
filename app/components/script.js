export function navListHandle(predicate) {
  let navItemsList = document.getElementById("nav-items-list");
  if (predicate === "close") {
    navItemsList.classList.add("opacity-0", "invisible");
  } else if (predicate === "open") {
    navItemsList.classList.remove("opacity-0", "invisible");
  }
}
export function darkerHandle(predicate) {
  let getThingsDark = document.getElementById("get-things-dark");
  if (predicate === "open") {
    getThingsDark.classList.remove("opacity-0", "invisible");
  } else if (predicate === "close") {
    getThingsDark.classList.add("opacity-0", "invisible");
  }
}

export function closeNavList() {
  navListHandle("close");
  darkerHandle("close");
}
export function openNavList() {
  darkerHandle("open");
  navListHandle("open");
}
export function clickedHandler() {
  let getThingsDark = document.getElementById("get-things-dark");
  let showIcon = document.getElementById("show-more-items-icon");

  if (getThingsDark.classList.contains("opacity-0")) {
    openNavList();
    showIcon.classList.add("rotate-90", "transition-all");
  } else {
    closeNavList();
    showIcon.classList.remove("rotate-90", "transition-all");
  }
}

export function openMobileNav() {
  let mobile_mode_nav = document.getElementById("mobile-mode-nav");
  let getThingsDarkMobile = document.getElementById(
    "get-things-dark-mobileMode"
  );
  document
    .getElementById("mobile-mode-hambergerIcon")
    .addEventListener("click", () => {
      mobile_mode_nav.classList.remove("-right-[100%]");
      mobile_mode_nav.classList.add("right-0");
      getThingsDarkMobile.classList.remove("opacity-0", "invisible");
    });
}
export function closeMobileNav() {
  let mobile_mode_nav = document.getElementById("mobile-mode-nav");
  let getThingsDarkMobile = document.getElementById(
    "get-things-dark-mobileMode"
  );

  mobile_mode_nav.classList.add("-right-[100%]");
  mobile_mode_nav.classList.remove("right-0");
  getThingsDarkMobile.classList.add("opacity-0", "invisible");
}
