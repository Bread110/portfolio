import { useEffect, useRef } from "react";
import Home from "./routes/Home";
import Navbar from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const container = scrollContainerRef.current;

    if (container) {
      container.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[url(./assets/background.png)] bg-blend-lighten bg-cover bg-center bg-no-repeat">
      <Navbar />

      <div
        ref={scrollContainerRef}
        className="snap-y snap-mandatory overflow-y-auto h-screen"
      >
        <Home />

        <div id="footer" className="snap-start">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
