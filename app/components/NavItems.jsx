import React from "react";
import Image from "next/image";

export default function NavItems() {
  const nav_list = [
    { content: "پایه اول", idx: 0 },
    { content: "پایه دوم", idx: 1 },
    { content: "پایه سوم", idx: 2 },
    { content: "پایه چهارم", idx: 3 },
    { content: "پایه پنجم", idx: 4 },
    { content: "پایه ششم", idx: 5 },
    { content: "پایه هفتم", idx: 6 },
    { content: "پایه هشتم", idx: 7 },
    { content: "پایه نهم", idx: 8 },
    { content: "پایه دهم", idx: 9 },
    { content: "پایه یازدهم", idx: 10 },
    { content: "پایه دوازدهم", idx: 11 },
    { content: "تحصیلات تکمیلی", idx: 12 },
    { content: "کارشناسی ارشد", idx: 13 },
    { content: "مقطع دکتری", idx: 14 },
  ];
  return (
    <main>
      <div
        className="grid grid-cols-12 bg-white border-solid border-2 border-t-primary 
        rounded-md text-sm font-thin text-list z-20"
      >
        <ul className="grid col-span-2 shadow-[0.3px_0px_1px_0px_#9689A8]">
          <li className="flex h-14 gap-2 items-center justify-start pr-3 hover:bg-background bg-background cursor-pointer">
            <img
              src="/online-education/assets/lessonIcon.svg"
              alt="درسی"
              className="w-5 text-dark font-bold"
            />
            <span className="text-dark font-bold">درسی</span>
          </li>
          <li className="flex h-14 gap-2 items-center justify-start pr-3 hover:bg-background cursor-pointer">
            <img
              src="/online-education/assets/languageIcon.svg"
              alt="زبان"
              className="w-5"
            />
            <span>زبان</span>
          </li>
          <li className="flex h-14 gap-2 items-center justify-start pr-3 hover:bg-background cursor-pointer">
            <img
              src="/online-education/assets/artIcon.svg"
              alt="هنر"
              className="w-5"
            />
            <span>هنر</span>
          </li>
          <li className="flex h-14 gap-2 items-center justify-start pr-3 hover:bg-background cursor-pointer">
            <img
              src="/online-education/assets/exerciseIcon.svg"
              alt="ورزش"
              className="w-5"
            />
            <span>ورزش</span>
          </li>
          <li className="flex h-14 gap-2 items-center justify-start pr-3 hover:bg-background cursor-pointer">
            <img
              src="/online-education/assets/talentsIcon.svg"
              alt="مهارت"
              className="w-5"
            />
            <span>مهارت</span>
          </li>
          <li className="flex h-14 gap-2 items-center justify-start pr-3 hover:bg-background cursor-pointer">
            <img
              src="/online-education/assets/technologyIcon.svg"
              alt="تکنولوژی"
              className="w-5"
            />
            <span>تکنولوژی</span>
          </li>
        </ul>
        <div className="col-span-10">
          <div className="flex flex-col w-fit flex-wrap max-h-96 gap-x-5 text-xs">
            {nav_list.map((item) => (
              <li
                key={item.idx.toString()}
                className="grid grid-cols-2 py-[1.1rem] px-3 items-center rounded cursor-default"
              >
                <span>{item.content}</span>
                <Image
                  src="/online-education/assets/expand_more_24px.svg"
                  alt="expand more"
                  className="justify-self-end"
                  width={20}
                  height={20}
                />
              </li>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
