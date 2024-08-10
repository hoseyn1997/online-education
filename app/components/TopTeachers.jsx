"use client";
import Link from "next/link";
import React from "react";

let topTeachers = [
  {
    id: "1",
    name: "مینا جعفری زاده همدانی",
    expertise: "زبان انگلیسی",
    img: "/assets/topTeachers/mina.png",
    score: "4.2",
    total: "586",
  },
  {
    id: "2",
    name: "بهرام موسوی راد",
    expertise: "ادبیات فراسی",
    img: "/assets/topTeachers/bahram.png",
    score: "4.2",
    total: "586",
  },
  {
    id: "3",
    name: "علیرضا محمدیان",
    expertise: "زبان آلمانی",
    img: "/assets/topTeachers/alireza.png",
    score: "4.2",
    total: "586",
  },
  {
    id: "4",
    name: "پژمان نصیری",
    expertise: "بسکتبال",
    img: "/assets/topTeachers/pejman.png",
    score: "4.2",
    total: "586",
  },
];

export default function TopTeachers() {
  function scrollToLeft() {
    let scroll_area = document.getElementById("teachers-list");
    scroll_area.scrollLeft = scroll_area.scrollLeft - 120;
  }
  function scrollToRight() {
    let scroll_area = document.getElementById("teachers-list");
    scroll_area.scrollLeft = scroll_area.scrollLeft + 120;
  }
  return (
    <main className="grid grid-cols-1 lg:grid-cols-5 rtl lg:mr-36 mb-10 gap-5 pr-5 lg:gap-14">
      <div className="grid col-span-1 self-start gap-5 w-full lg:w-4/5 mx-auto text-center">
        <h5 className="font-bold">برترین مدرسین</h5>
        <p className="text-xs leading-6 p-2">
          رتبه مدرسی بر اساس امتیازی است که فراگیران پس از هر جلسه به کلاس خود
          می دهند(مثلا!!)
        </p>
        <div className="hidden lg:flex justify-center">
          <button
            onClick={() => scrollToRight()}
            className="bg-blurground hover:bg-primary transition-all 
            w-7 aspect-square flex justify-center items-center px-0 py-2 rounded-lg mx-1"
          >
            <svg
              width={8}
              height={10}
              viewBox="0 0 14 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.80011 21.8003L11.6001 12.0003L1.80011 2.20032"
                stroke="white"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={() => scrollToLeft()}
            className="bg-blurground hover:bg-primary transition-all 
            w-7 aspect-square flex justify-center items-center px-0 py-2 rounded-lg mx-1"
          >
            <svg
              width={8}
              height={10}
              viewBox="0 0 14 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.1995 21.8003L2.39952 12.0003L12.1995 2.20032"
                stroke="white"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        id="teachers-list"
        className="flex col-span-1 lg:col-span-4 overflow-hidden overflow-x-scroll 
          gap-3 lg:gap-10 no-scroll-bar transition-all pb-9 px-2 lg:px-5"
      >
        {topTeachers.map((teacher) => (
          <div
            key={teacher.id}
            className="grid gap-y-1 lg:gap-y-5 bg-white rounded-xl p-0 py-3 min-w-[45%] lg:min-w-[25%] 
              relative shadow-xl"
          >
            <img
              src={teacher.img}
              alt="top-teacher-mina"
              className="rounded-full aspect-square object-cover 
                  shadow-[0px_9px_32px_5px_#00000024] mx-auto w-1/2"
            />
            <div className="grid gap-2">
              <p className="text-xs lg:text-lg font-bold text-center">
                {teacher.name}
              </p>
              <p className="text-xxs lg:text-xs font-thin text-center">
                {teacher.expertise}
              </p>
            </div>
            <svg
              className="w-full h-[2px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 280 2"
              fill="none"
            >
              <path
                d="M1 1L279 1.00002"
                stroke="url(#paint0_linear_1_195)"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1_195"
                  x1={279}
                  y1="1.00056"
                  x2={1}
                  y2="0.999504"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#29AFBD" stopOpacity={0} />
                  <stop offset="0.497596" stopColor="#29AFBD" />
                  <stop offset={1} stopColor="#29AFBD" stopOpacity={0} />
                </linearGradient>
              </defs>
            </svg>

            <div className="flex justify-center gap-2 text-xs lg:text-sm">
              <svg
                className="w-3 h-3 lg:w-5 lg:h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.0981 14.9295C18.7874 15.2466 18.6446 15.7051 18.7154 16.1547L19.782 22.369C19.872 22.8957 19.6608 23.4288 19.2421 23.7332C18.8318 24.0489 18.2859 24.0868 17.8384 23.8342L12.5249 20.9165C12.3401 20.8129 12.135 20.7574 11.925 20.751H11.5999C11.4871 20.7687 11.3768 20.8066 11.276 20.8647L5.96124 23.7963C5.6985 23.9352 5.40097 23.9845 5.10944 23.9352C4.39921 23.7938 3.92532 23.0814 4.0417 22.3299L5.10944 16.1156C5.18023 15.6621 5.03746 15.2011 4.72673 14.879L0.394558 10.4582C0.0322434 10.0882 -0.0937269 9.53242 0.071834 9.03098C0.232596 8.5308 0.642899 8.16577 1.13838 8.08367L7.10097 7.17299C7.55446 7.12373 7.95277 6.83323 8.15672 6.40378L10.7841 0.732583C10.8465 0.606275 10.9269 0.490073 11.024 0.391553L11.132 0.303138C11.1884 0.237458 11.2532 0.183146 11.3252 0.138938L11.4559 0.0884152L11.6599 0H12.165C12.6161 0.0492599 13.0132 0.333451 13.2207 0.757844L15.8829 6.40378C16.0749 6.81681 16.448 7.10353 16.8787 7.17299L22.8412 8.08367C23.3451 8.15946 23.7662 8.52575 23.933 9.03098C24.0902 9.53747 23.9546 10.0932 23.5851 10.4582L19.0981 14.9295Z"
                  fill="#FFB820"
                />
              </svg>
              <span>{teacher.score}</span>
              <img
                src="/assets/vertical-devider.svg"
                alt="vertical-devider"
                className="hidden lg:grid w-[1px]"
              />
              <span>از {teacher.total} نفر</span>
            </div>
            <Link href="#">
              <svg
                className="rotate-180 mx-auto w-4 lg:w-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.5874 8.41738L10.7074 12.2974L14.5874 16.1774C14.7746 16.3642 14.8799 16.6179 14.8799 16.8824C14.8799 17.1469 14.7746 17.4006 14.5874 17.5874C14.1974 17.9774 13.5674 17.9774 13.1774 17.5874L8.5874 12.9974C8.1974 12.6074 8.1974 11.9774 8.5874 11.5874L13.1774 6.99738C13.5674 6.60738 14.1974 6.60738 14.5874 6.99738C14.9674 7.38738 14.9774 8.02738 14.5874 8.41738Z"
                  fill="#29AFBD"
                />
              </svg>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
