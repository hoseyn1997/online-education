import Link from "next/link";

export default function Course({ course }) {
  return (
    <div
      id={course.id}
      className="bg-white rounded-lg overflow-hidden shadow-xl rtl lg:bg-white min-w-40"
    >
      <div className="relative">
        <div className="w-full h-full absolute top-0 z-10 bg-fillShadow opacity-40"></div>
        <img
          src={course.image}
          alt="pejman"
          className="object-cover max-w-full"
        />
      </div>
      <div className="relative text-center text-sm font-bold my-2 pr-2 lg:pr-0">
        <div className="grid lg:flex lg:justify-center gap-1">
          <span className="text-right font-thin lg:font-bold text-xxs lg:text-sm">
            {course.count + " جلسه "}
          </span>
          <p className="text-sm font-bold text-right lg:text-center">
            {course.name}
          </p>
        </div>
        <p className="font-thin text-sm text-right lg:text-center">
          {course.author}
        </p>
        <Link
          href="#"
          className="flex text-primary text-xs items-center font-bold lg:mx-auto my-4 w-fit"
        >
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
              fill="#29afbd "
            />
          </svg>
          <span>مشاهده ی ویدئو ها</span>
        </Link>
      </div>
    </div>
  );
}
