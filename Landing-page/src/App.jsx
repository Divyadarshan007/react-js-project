import Header from "./components/Header"
import MainBanner from "./components/MainBanner"
import Roadmap from "./components/Roadmap"
import Service from "./components/Service"
import Wallet from "./components/Wallet"
import Distribution from "./components/Distribution"


const App = () => {
  return (
    <div>
      <Header />
      <MainBanner />
      <Service />
      <Roadmap />
      <Wallet />
      <Distribution />
    </div>
  )
}

export default App