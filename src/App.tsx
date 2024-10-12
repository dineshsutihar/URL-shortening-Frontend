import Home from "./components/Home"
import Nav from "./components/Nav"
import ShortenLink from "./components/ShortenLink"

function App() {

  return (
    <main className="p-5 md:mx-14">
      <div className="h-screen">
        <Nav />
        <Home />
      </div>

      <ShortenLink />
    </main>
  )
}

export default App
