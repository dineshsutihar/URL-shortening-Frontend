import { Toaster } from "sonner";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Nav from "./components/Nav";
import PreFooter from "./components/PreFooter";
import ShortenLink from "./components/ShortenLink";
import Statistics from "./components/Statistics";

function App() {
  return (
    <>
      <Toaster richColors closeButton />
      <div className="w-full">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <Nav />
          <Home />
        </div>
        <ShortenLink />
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <Statistics />
        </div>
        <PreFooter />
        <Footer />
      </div>
    </>
  );
}

export default App;


