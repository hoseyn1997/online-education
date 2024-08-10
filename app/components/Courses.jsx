import Link from "next/link";
import Course from "../components/Course";

let courses = [
  {
    name: "آموزش بسکتبال",
    count: "10",
    author: "پژمان نصیری",
    image: "/assets/lessons/pejman.png",
    id: "1",
  },
  {
    name: "آموزش گیتار",
    count: "8",
    author: "آرمان پیرزاده",
    image: "/assets/lessons/arman.png",
    id: "2",
  },
  {
    name: "آموزش مجسمه سازی",
    count: "12",
    author: "فرید انصاری فرد",
    image: "/assets/lessons/farid.png",
    id: "3",
  },
  {
    name: "آموزش زبان فرانسوی",
    count: "8",
    author: "مارال صفاری نژاد",
    image: "/assets/lessons/maral.png",
    id: "4",
  },
  {
    name: "آموزش نقاشی کودکان",
    count: "8",
    author: "مونا سعیدی پور",
    image: "/assets/lessons/mona.png",
    id: "5",
  },
];
export default function Courses() {
  return (
    <main className="bg-white py-5 w-full mt-20 mb-10">
      <h3 className="font-bold text-center">برترین ویدئو های آموزشی</h3>
      <div
        className="w-full lg:w-3/4 mx-auto flex overflow-scroll no-scroll-bar rtl ltr lg:grid grid-cols-3 
      gap-3 lg:gap-14 pt-3 pb-10 px-5 pr-8 lg:pr-5"
      >
        {courses.map((course) => (
          <Course key={course.id} course={course} />
        ))}
        <div className="hidden lg:flex flex-col justify-center items-center">
          <h4
            className="text-4xl xl:text-6xl font-bold underline underline-offset-8 
            decoration-primary"
          >
            +218
          </h4>
          <p className="my-2">ویدئو با موضوعات مختلف</p>
          <Link
            href="#"
            className="flex my-2 bg-primary rounded-lg text-sm text-white py-1 px-2"
          >
            <span>مشاهده تمام ویدئو ها</span>
            <svg
              width={20}
              height={20}
              className="rotate-180"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.5874 8.41738L10.7074 12.2974L14.5874 16.1774C14.7746 16.3642 14.8799 16.6179 14.8799 16.8824C14.8799 17.1469 14.7746 17.4006 14.5874 17.5874C14.1974 17.9774 13.5674 17.9774 13.1774 17.5874L8.5874 12.9974C8.1974 12.6074 8.1974 11.9774 8.5874 11.5874L13.1774 6.99738C13.5674 6.60738 14.1974 6.60738 14.5874 6.99738C14.9674 7.38738 14.9774 8.02738 14.5874 8.41738Z"
                fill="#ffffff"
              />
            </svg>
          </Link>
        </div>
      </div>
      <div className="flex lg:hidden flex-col justify-center items-center">
        <h4 className="text-6xl font-bold underline underline-offset-8 decoration-primary">
          +218
        </h4>
        <p className="my-2">ویدئو با موضوعات مختلف</p>
        <Link
          href="#"
          className="flex my-2 bg-primary rounded-lg text-sm text-white py-1 px-2"
        >
          <span>مشاهده تمام ویدئو ها</span>
          <svg
            width={20}
            height={20}
            className="rotate-180"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.5874 8.41738L10.7074 12.2974L14.5874 16.1774C14.7746 16.3642 14.8799 16.6179 14.8799 16.8824C14.8799 17.1469 14.7746 17.4006 14.5874 17.5874C14.1974 17.9774 13.5674 17.9774 13.1774 17.5874L8.5874 12.9974C8.1974 12.6074 8.1974 11.9774 8.5874 11.5874L13.1774 6.99738C13.5674 6.60738 14.1974 6.60738 14.5874 6.99738C14.9674 7.38738 14.9774 8.02738 14.5874 8.41738Z"
              fill="#ffffff"
            />
          </svg>
        </Link>
      </div>
    </main>
  );
}
