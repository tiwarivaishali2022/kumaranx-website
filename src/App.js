import About from "./pages/About";
import Hero from "./pages/Hero";
import Navbar from "./pages/Navbar";
import Solutions from "./pages/Solutions";


function App() {
  return (
    <div className="font-poppins">
      <Navbar isHero={true} />
      <Hero />
      <Navbar />
      <About />
      <Solutions />
    </div>
  );
}

export default App;
