import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero-section/hero-section";
import Category from "./components/category/category";

function App() {
  return (
    <>
      <div className="bg-black px-36 h-[100rem]">
        <div className="bg-new_black text-white h-[100rem] border-l border-[#29292C]">
          <br/>
          <Navbar />  
          <Hero />
          <Category />
        </div>
      
      </div>
    </>
  );
}

export default App;
