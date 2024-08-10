"use client";
import { useEffect } from "react";
import NavItemsTrigger from "./NavItemsTrigger";
import {
  clickedHandler,
  closeNavList,
  openMobileNav,
  closeMobileNav,
} from "./script";

export default function NavBar() {
  useEffect(() => {
    openMobileNav();
  }, []);

  return (
    <main>
      <div
        onClick={() => closeMobileNav()}
        id="get-things-dark-mobileMode"
        className="overlay fixed w-full h-full left-0 bg-black/65 z-40 transition-all opacity-0 invisible"
      ></div>
      <div
        onBlur={() => closeMobileNav()}
        id="mobile-mode-nav"
        className="fixed bg-white -right-[100%] h-screen z-50 w-[90%] rtl 
        rounded-l-xl border-solid border-black border-2 transition-all duration-500"
      >
        <ul className="grid my-5">
          <li className="grid grid-cols-2 shadow-[0px_1px_0px_0px_#ECEAEF] w-full p-3 font-bold text-primary my-1.5">
            <span>موضوعات</span>
            <svg
              className="w-6 mx-2 justify-self-end"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.5874 8.41738L10.7074 12.2974L14.5874 16.1774C14.7746 16.3642 14.8799 16.6179 14.8799 16.8824C14.8799 17.1469 14.7746 17.4006 14.5874 17.5874C14.1974 17.9774 13.5674 17.9774 13.1774 17.5874L8.5874 12.9974C8.1974 12.6074 8.1974 11.9774 8.5874 11.5874L13.1774 6.99738C13.5674 6.60738 14.1974 6.60738 14.5874 6.99738C14.9674 7.38738 14.9774 8.02738 14.5874 8.41738Z"
                fill="#29AFBD"
              />
            </svg>
          </li>
          <li className="shadow-[0px_1px_0px_0px_#ECEAEF] w-full p-3 font-bold text-primary my-1.5">
            درباره ما
          </li>
          <li className="shadow-[0px_1px_0px_0px_#ECEAEF] w-full p-3 font-bold text-primary my-1.5">
            تماس با ما
          </li>
          <li className="shadow-[0px_1px_0px_0px_#ECEAEF] w-full p-3 font-bold text-primary my-1.5">
            سوالات متداول
          </li>
          <li>
            <button class="bg-primary text-white px-5 py-2 rounded-lg my-1.5 mx-3">
              معلم خصوصی شو
            </button>
          </li>
        </ul>
      </div>

      <div className="fixed top-0 w-full z-30 bg-white flex items-center justify-between rtl px-2 lg:px-10 py-3 gap-5 text-sm font-bold">
        <div
          id="get-things-dark"
          className="overlay fixed w-full h-full top-[4.5rem] left-0 bg-black/40 z-10 transition-all opacity-0 invisible"
        ></div>
        <div
          className="flex items-center justify-between lg:justify-normal w-full lg:w-fit gap-10"
          id="Home-text"
        >
          <img
            id="mobile-mode-hambergerIcon"
            src="/assets/hambergerIcon.svg"
            alt="menue"
            className="block lg:hidden w-6 h-6 lg:w-10 lg:h-12"
          />
          <img
            src="/assets/Layer 2.svg"
            alt="home"
            className="block w-10 h-9 lg:h-12"
          />
          <img
            src="/assets/logOut.svg"
            alt="menue"
            className="block lg:hidden w-6 h-6 lg:w-10 lg:h-12"
          />
          <ul className="hidden lg:flex gap-5 text-primary">
            <NavItemsTrigger onClick={clickedHandler} onBlur={closeNavList} />
            <li>
              <a href="#">درباره ما</a>
            </li>
            <li>
              <a href="#">تماس با ما</a>
            </li>
            <li>
              <a href="#">سوالات متداول</a>
            </li>
          </ul>
        </div>
        <div className="hidden lg:flex gap-5 items-center min-w-max">
          <a href="#" className="text-primary ">
            ورود/ثبت نام
          </a>
          <button className="bg-primary text-white px-3 py-1 rounded-lg">
            معلم خصوصی شو
          </button>
        </div>
      </div>
    </main>
  );
}
