import React from "react";

export default function Search() {
  return (
    <main className="grid absolute -bottom-24 lg:-bottom-16 text-end gap-2 max-w-screen-fullSize lg:w-3/4 left-0 right-0 mx-auto">
      <h2 className="text-center lg:text-end text-white font-bold text-lg">
        دنبال یادگرفتن چی با کی هستی؟
      </h2>
      <form className="grid lg:grid-cols-10 bg-white shadow-lg px-5 py-8 rounded-xl w-full mx-auto">
        <div className="row-start-2 lg:row-start-1 lg:col-span-2 w-full lg:w-fit px-3">
          <button className="bg-primary w-full py-3 rounded-xl px-8 text-white font-bold mx-auto text-xs">
            جستجو
          </button>
        </div>
        <div className="bg-none lg:bg-background row-start-1 lg:col-span-8 grid lg:flex rounded-xl py-2 px-3 gap-3 mx-auto w-full rtl">
          <div className="bg-background lg:bg-none relative flex justify-end w-full p-2 lg:p-0 rounded-xl">
            <img src="/assets/Search.svg" alt="search" className="w-4" />
            <input
              type="text"
              placeholder="نام درس مدرس و ..."
              className="bg-background placeholder:text-placeholder w-full rtl px-1 focus-visible:outline-none"
            />
          </div>
          <img
            src="/assets/vertical-devider.svg"
            alt="vertical-devider"
            className="hidden lg:grid w-[1px]"
          />
          <div className="bg-background lg:bg-none relative flex justify-end w-full p-2 lg:p-0 rounded-xl">
            <img src="/assets/location.svg" alt="location" className="w-4" />
            <input
              type="text"
              placeholder="شهر"
              className="bg-background placeholder:text-placeholder w-full rtl px-1 focus-visible:outline-none"
            />
          </div>
        </div>
      </form>
    </main>
  );
}
