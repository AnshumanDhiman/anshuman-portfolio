import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Hero from "../components/hero-section/hero-section";
import Category from "../components/category/category";
export default function home() {
  return (
    <>
         <div className="bg-black px-36">
        <div className="bg-new_black text-white  border-l border-[#29292C]">
          <br/>
          <Navbar />
          <Hero />
          <Category />
          <Footer />
        </div>
      </div>
    </>
  )
}
