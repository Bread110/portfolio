import Home from "./routes/Home";
import Navbar from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[url(./assets/background.png)] bg-blend-lighten bg-cover bg-center bg-no-repeat">
      <Navbar />

      <div className="snap-y snap-mandatory overflow-y-scroll h-screen">
        <Home />

        <div className=" snap-start">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
