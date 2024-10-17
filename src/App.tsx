import Footer from "./components/Footer"
import Home from "./components/Home"
import Nav from "./components/Nav"
import PreFooter from "./components/PreFooter"
import ShortenLink from "./components/ShortenLink"
import Statistics from "./components/Statistics"

function App() {

  return (
    <div>
      <main className="p-5 md:mx-14">
        <div className="h-[95vh]">
          <Nav />
          <Home />
        </div>
        <ShortenLink />
        <Statistics />
      </main>
      <PreFooter />
      <Footer />
    </div>
  )
}

export default App
