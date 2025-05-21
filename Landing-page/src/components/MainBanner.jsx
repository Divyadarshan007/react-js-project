import MainLeftContent from "./mainLeftContent";
import MainRightContent from "./MainRightContent";

const MainBanner = () => {
  return (
    <section className="bg-image">
       <div className="container">
         <div className="row  position-relative z-1">
            <MainLeftContent/>
            <MainRightContent/>
          </div>
       </div>
    </section>
  )
}

export default MainBanner;