import Link from "next/link";

let quickAcceses = [
  {
    name: "برنامه نویسی",
    img: "/online-education/assets/lessons/programming.png",
    id: "1",
  },
  {
    name: "شیرینی پزی",
    img: "/online-education/assets/lessons/baking.png",
    id: "2",
  },
  {
    name: "گویندگی",
    img: "/online-education/assets/lessons/talking.png",
    id: "3",
  },
  {
    name: "نقاشی سیاه قلم",
    img: "/online-education/assets/lessons/painting.png",
    id: "4",
  },
];
export default function QuickAccess() {
  return (
    <main
      className="flex justify-center gap-10 lg:w-3/4 pr-3 lg:pr-0 mx-auto h-56 lg:h-56 overflow-scroll rtl no-scroll-bar
      absolute -top-20 lg:-top-28 left-0 right-0 pb-5"
    >
      {quickAcceses.map((access) => (
        <Link
          key={access.id}
          href="#"
          className={`bg-white rounded-lg grid overflow-hidden shadow-lg w-1/6 min-w-32 self-start ${
            access.id % 2 !== 0 ? "lg:self-start" : "lg:self-end"
          }`}
        >
          <div className="relative">
            <div className="w-full h-full absolute top-0 z-10 bg-fillShadow opacity-40"></div>
            <img src={access.img} alt="lesson" className="object-cover" />
          </div>
          <p className="text-sm font-bold text-center py-3">{access.name}</p>
        </Link>
      ))}
    </main>
  );
}
