import Header from "./components/Header"
import MainBanner from "./components/MainBanner"
import Roadmap from "./components/Roadmap"
import Service from "./components/Service"
import Wallet from "./components/Wallet"
import Distribution from "./components/Distribution"
import TeamSection from "./components/TeamSection"
import PartnerSection from "./components/PartnerSection"
import ContactSection from "./components/ContactSection"


const App = () => {
  return (
    <div>
      <Header />
      <MainBanner />
      <Service />
      <Roadmap />
      <Wallet />
      <Distribution />
      <TeamSection/>
      <PartnerSection/>
      <ContactSection/>
    </div>
  )
}

export default App