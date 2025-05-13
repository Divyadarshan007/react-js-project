import Header from "./components/header"
import MainBanner from "./components/MainBanner"
import Roadmap from "./components/Roadmap"
import Service from "./components/Service"
import Wallet from "./components/Wallet"


const App = () => {
  return (
    <div>
          <Header/>
          <MainBanner/>
          <Service/>
          <Roadmap/>
          <Wallet/>
    </div>
  )
}

export default App