import QuickAccess from "./QuickAccess";

export default function Footer() {
  return (
    <footer className="relative bg-white mt-40 pt-24 lg:pt-40 pb-2 grid gap-5">
      <QuickAccess />
      <div className="home-container flex flex-col justify-center items-center text-xs text-list">
        <div className="grid grid-cols-10 rtl gap-3">
          <div className="col-span-10 lg:col-span-3">
            <img
              src="/assets/Layer 2.svg"
              alt="home"
              className="block w-10 h-9 lg:h-12"
            />
            <p className="w-full lg:w-4/5 my-1 text-3xs lg:text-xs">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است.
            </p>
          </div>
          <div className="col-span-10 lg:col-span-1">
            <h4 className="font-bold text-dark">موضوعات</h4>
            <ul className="grid grid-cols-2 lg:grid-cols-1">
              <li className="flex w-fit items-center font-thin">
                <svg
                  className="mx-auto w-4 lg:w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.5874 8.41738L10.7074 12.2974L14.5874 16.1774C14.7746 16.3642 14.8799 16.6179 14.8799 16.8824C14.8799 17.1469 14.7746 17.4006 14.5874 17.5874C14.1974 17.9774 13.5674 17.9774 13.1774 17.5874L8.5874 12.9974C8.1974 12.6074 8.1974 11.9774 8.5874 11.5874L13.1774 6.99738C13.5674 6.60738 14.1974 6.60738 14.5874 6.99738C14.9674 7.38738 14.9774 8.02738 14.5874 8.41738Z"
                    fill="#29AFBD"
                  />
                </svg>
                <span>درسی</span>
              </li>
              <li className="flex w-fit items-center font-thin text-3xs lg:text-xxs">
                <svg
                  className="mx-auto w-4 lg:w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.5874 8.41738L10.7074 12.2974L14.5874 16.1774C14.7746 16.3642 14.8799 16.6179 14.8799 16.8824C14.8799 17.1469 14.7746 17.4006 14.5874 17.5874C14.1974 17.9774 13.5674 17.9774 13.1774 17.5874L8.5874 12.9974C8.1974 12.6074 8.1974 11.9774 8.5874 11.5874L13.1774 6.99738C13.5674 6.60738 14.1974 6.60738 14.5874 6.99738C14.9674 7.38738 14.9774 8.02738 14.5874 8.41738Z"
                    fill="#29AFBD"
                  />
                </svg>
                <span>زبان</span>
              </li>
              <li className="flex w-fit items-center font-thin text-3xs lg:text-xxs">
                <svg
                  className="mx-auto w-4 lg:w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.5874 8.41738L10.7074 12.2974L14.5874 16.1774C14.7746 16.3642 14.8799 16.6179 14.8799 16.8824C14.8799 17.1469 14.7746 17.4006 14.5874 17.5874C14.1974 17.9774 13.5674 17.9774 13.1774 17.5874L8.5874 12.9974C8.1974 12.6074 8.1974 11.9774 8.5874 11.5874L13.1774 6.99738C13.5674 6.60738 14.1974 6.60738 14.5874 6.99738C14.9674 7.38738 14.9774 8.02738 14.5874 8.41738Z"
                    fill="#29AFBD"
                  />
                </svg>
                <span>هنر</span>
              </li>
              <li className="flex w-fit items-center font-thin text-3xs lg:text-xxs">
                <svg
                  className="mx-auto w-4 lg:w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.5874 8.41738L10.7074 12.2974L14.5874 16.1774C14.7746 16.3642 14.8799 16.6179 14.8799 16.8824C14.8799 17.1469 14.7746 17.4006 14.5874 17.5874C14.1974 17.9774 13.5674 17.9774 13.1774 17.5874L8.5874 12.9974C8.1974 12.6074 8.1974 11.9774 8.5874 11.5874L13.1774 6.99738C13.5674 6.60738 14.1974 6.60738 14.5874 6.99738C14.9674 7.38738 14.9774 8.02738 14.5874 8.41738Z"
                    fill="#29AFBD"
                  />
                </svg>
                <span>ورزش</span>
              </li>
              <li className="flex w-fit items-center font-thin text-3xs lg:text-xxs">
                <svg
                  className="mx-auto w-4 lg:w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.5874 8.41738L10.7074 12.2974L14.5874 16.1774C14.7746 16.3642 14.8799 16.6179 14.8799 16.8824C14.8799 17.1469 14.7746 17.4006 14.5874 17.5874C14.1974 17.9774 13.5674 17.9774 13.1774 17.5874L8.5874 12.9974C8.1974 12.6074 8.1974 11.9774 8.5874 11.5874L13.1774 6.99738C13.5674 6.60738 14.1974 6.60738 14.5874 6.99738C14.9674 7.38738 14.9774 8.02738 14.5874 8.41738Z"
                    fill="#29AFBD"
                  />
                </svg>
                <span>مهارت</span>
              </li>
              <li className="flex w-fit items-center font-thin text-3xs lg:text-xxs">
                <svg
                  className="mx-auto w-4 lg:w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.5874 8.41738L10.7074 12.2974L14.5874 16.1774C14.7746 16.3642 14.8799 16.6179 14.8799 16.8824C14.8799 17.1469 14.7746 17.4006 14.5874 17.5874C14.1974 17.9774 13.5674 17.9774 13.1774 17.5874L8.5874 12.9974C8.1974 12.6074 8.1974 11.9774 8.5874 11.5874L13.1774 6.99738C13.5674 6.60738 14.1974 6.60738 14.5874 6.99738C14.9674 7.38738 14.9774 8.02738 14.5874 8.41738Z"
                    fill="#29AFBD"
                  />
                </svg>
                <span>تکنولوژی</span>
              </li>
            </ul>
          </div>
          <div className="col-span-5 lg:col-span-3">
            <h5 className="font-bold text-dark">سوالات متداول</h5>
            <ul className="grid gap-2 my-2">
              <li className="text-3xs lg:text-xxs">
                آیا مخل لورم ایپسوم ساختگی است؟
              </li>
              <li className="text-3xs lg:text-xxs">
                آیا مخل لورم ایپسوم ساختگی است؟
              </li>
              <li className="text-3xs lg:text-xxs">
                آیا مخل لورم ایپسوم ساختگی است؟
              </li>
              <li className="text-3xs lg:text-xxs">
                آیا مخل لورم ایپسوم ساختگی است؟
              </li>
            </ul>
          </div>
          <div className="col-span-5 lg:col-span-3">
            <h6 className="font-bold text-dark">تماس با ما</h6>
            <ul className="grid gap-2 my-2 text-3xs lg:text-xxs">
              <li className="flex gap-1 items-center">
                <img
                  src="/assets/emailIcon.svg"
                  alt="email"
                  className="self-start w-3 lg:w-7"
                />
                <span>info@gajino.com</span>
              </li>
              <li className="flex gap-1 items-center">
                <img
                  src="/assets/phoneIcon.svg"
                  alt="phone"
                  className="self-start w-3 lg:w-7"
                />
                <span>021-6420</span>
              </li>
              <li className="flex gap-1 items-center">
                <img
                  src="/assets/locationIcon.svg"
                  alt="location"
                  className="self-start w-3 lg:w-7"
                />
                <span>
                  تهران کیلومتر 14 جاده مخصوص - بلوار ایران خوردرو - نرسیده به
                  فتح - پلاک 2
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid lg:flex gap-5 my-5 rtl justify-center lg:justify-between w-full">
          <div className="grid grid-cols-2 lg:flex gap-3">
            <img src="/assets/connections/gaj.svg" alt="gaj" className="w-20" />
            <img
              src="/assets/connections/gajMarket.svg"
              alt="gaj-market"
              className="w-20"
            />
            <img
              src="/assets/connections/drIq.svg"
              alt="Doctor-IQ"
              className="w-20"
            />
            <img
              src="/assets/connections/gajMag.svg"
              alt="Gaj-mag"
              className="w-20"
            />
          </div>
          <div className="grid grid-cols-2 lg:flex gap-3">
            <img src="/assets/connections/1.svg" alt="gaj" className="w-20" />
            <img src="/assets/connections/2.svg" alt="gaj" className="w-20" />
            <img src="/assets/connections/e.svg" alt="gaj" className="w-20" />
            <img src="/assets/connections/4.svg" alt="gaj" className="w-20" />
          </div>
        </div>
      </div>
      <div className="text-center text-xxs lg:text-xs font-thin text-list">
        <p>تمامی حقوق برای گاچ محفوظ است</p>
      </div>
    </footer>
  );
}
