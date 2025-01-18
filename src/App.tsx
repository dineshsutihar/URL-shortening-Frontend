import Footer from "./components/Footer";
import Home from "./components/Home";
import Nav from "./components/Nav";
import PreFooter from "./components/PreFooter";
import ShortenLink from "./components/ShortenLink";
import Statistics from "./components/Statistics";

function App() {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto">
        <main className="p-5 md:mx-14 font-">
          <Nav />
          <Home />
          <ShortenLink />
          <Statistics />
        </main>
      </div>
      <PreFooter />
      <Footer />
    </>
  );
}

export default App;
