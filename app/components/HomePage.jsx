import NavBar from "./NavBar";
import Search from "./Search";
import Categories from "./Categories";
import Courses from "./Courses";
import TopTeachers from "./TopTeachers";
import Footer from "./Footer";

export default function HomePage() {
  return (
    <main>
      <NavBar />
      <div className="relative">
        <img
          src="/assets/Homebg.webp"
          alt="learn-here"
          className="w-full object-cover h-[350px] lg:h-[600px]"
        />
        <div className="mt-40 lg:mt-28">
          <Search />
        </div>
      </div>
      <section>
        <Categories className="home-container" />
        <Courses />
        <TopTeachers />
        <Footer />
      </section>
    </main>
  );
}
