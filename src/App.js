import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero-section/hero-section";

function App() {
  return (
    <>
      <div className="bg-black px-36 h-full">
        
        <div className="bg-new_black text-white border-l border-[#29292C]">
          <br/>
          <Navbar />  
          <Hero />
        </div>
      
      </div>
    </>
  );
}

export default App;
