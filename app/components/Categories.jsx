import Link from "next/link";

export default function Categories({ className }) {
  return (
    <main className={className}>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-5 lg:gap-x-14 lg:gap-y-7">
        <Link
          href="#"
          className="bg-white rounded-lg grid overflow-hidden shadow-lg"
        >
          <div className="relative">
            <div className="w-full h-full absolute top-0 z-10 bg-fillShadow opacity-40"></div>
            <img
              src="/assets/categories/technology.png"
              alt="lesson"
              className="object-cover"
            />
          </div>
          <p className="text-sm font-bold text-center py-3">تکنولوژی</p>
        </Link>
        <Link
          href="#"
          className="bg-white rounded-lg grid overflow-hidden shadow-lg"
        >
          <div className="relative">
            <div className="w-full h-full absolute top-0 z-10 bg-fillShadow opacity-40"></div>
            <img
              src="/assets/categories/lesson.png"
              alt="lesson"
              className="object-cover"
            />
          </div>
          <p className="text-sm font-bold text-center py-3">درسی</p>
        </Link>
        <Link
          href="#"
          className="bg-white rounded-lg grid overflow-hidden shadow-lg"
        >
          <div className="relative">
            <div className="w-full h-full absolute top-0 z-10 bg-fillShadow opacity-40"></div>
            <img
              src="/assets/categories/talent.png"
              alt="lesson"
              className="object-cover"
            />
          </div>
          <p className="text-sm font-bold text-center py-3">مهارت</p>
        </Link>
        <Link
          href="#"
          className="bg-white rounded-lg grid overflow-hidden shadow-lg"
        >
          <div className="relative">
            <div className="w-full h-full absolute top-0 z-10 bg-fillShadow opacity-40"></div>
            <img
              src="/assets/categories/art.png"
              alt="lesson"
              className="object-cover"
            />
          </div>
          <p className="text-sm font-bold text-center py-3">هنر</p>
        </Link>
        <Link
          href="#"
          className="bg-white rounded-lg grid overflow-hidden shadow-lg"
        >
          <div className="relative">
            <div className="w-full h-full absolute top-0 z-10 bg-fillShadow opacity-40"></div>
            <img
              src="/assets/categories/sport.png"
              alt="lesson"
              className="object-cover"
            />
          </div>
          <p className="text-sm font-bold text-center py-3">ورزش</p>
        </Link>
        <Link
          href="#"
          className="bg-white rounded-lg grid overflow-hidden shadow-lg"
        >
          <div className="relative">
            <div className="w-full h-full absolute top-0 z-10 bg-fillShadow opacity-40"></div>
            <img
              src="/assets/categories/language.png"
              alt="lesson"
              className="object-cover"
            />
          </div>
          <p className="font-bold text-center py-3">زبان</p>
        </Link>
      </div>
      <div className="hidden lg:grid grid-cols-3 gap-14 my-14">
        <Link
          href="#"
          className="bg-white rounded-lg overflow-hidden shadow-lg rtl"
        >
          <div className="relative">
            <div className="w-full h-full absolute top-0 z-10 bg-fillShadow opacity-40"></div>
            <img
              src="/assets/lessons/pejman.png"
              alt="pejman"
              className="object-cover max-w-full"
            />
          </div>
          <div className="relative text-center text-sm font-bold my-2">
            <img
              src="/assets/discountIcon.svg"
              alt="discount"
              className="w-5 absolute top-0 left-2"
            />
            <p className="text-sm font-bold">10 جلسه آموزش بسکتبال</p>
            <p className="font-thin text-sm">پژمان نصیری</p>
            <p className="relative text-xs font-thin my-3 w-fit mx-auto discount">
              520,000 تومان
            </p>
            <p className="text-primary font-bold">440,000 تومان</p>
          </div>
        </Link>
        <Link
          href="#"
          className="bg-white rounded-lg overflow-hidden shadow-lg rtl"
        >
          <div className="relative">
            <div className="w-full h-full absolute top-0 z-10 bg-fillShadow opacity-40"></div>
            <img
              src="/assets/lessons/arman.png"
              alt="pejman"
              className="object-cover max-w-full"
            />
          </div>
          <div className="relative text-center text-sm font-bold my-2">
            <img
              src="/assets/discountIcon.svg"
              alt="discount"
              className="w-5 absolute top-0 left-2"
            />
            <p className="text-sm font-bold">8 جلسه آموزش گیتار</p>
            <p className="font-thin text-sm">آرمان پیرزاده</p>
            <p className="relative text-xs font-thin my-3 w-fit mx-auto discount">
              1,200,000 تومان
            </p>
            <p className="text-primary font-bold">950,000 تومان</p>
          </div>
        </Link>
        <Link
          href="#"
          className="bg-white rounded-lg overflow-hidden shadow-lg rtl"
        >
          <div className="relative">
            <div className="w-full h-full absolute top-0 z-10 bg-fillShadow opacity-40"></div>
            <img
              src="/assets/lessons/farid.png"
              alt="pejman"
              className="object-cover max-w-full"
            />
          </div>
          <div className="relative text-center text-sm font-bold my-2">
            <p className="text-sm font-bold">12 جلسه آموزش مجسمه سازی</p>
            <p className="font-thin text-sm">فرید انصاری فرد</p>
            <p className="relative text-xs font-thin my-3 w-fit mx-auto discount">
              480,000 تومان
            </p>
            <p className="text-primary font-bold">380,000 تومان</p>
          </div>
        </Link>
      </div>
    </main>
  );
}
