import { useState } from "react"
import BannerContent from "./BannerContent"
import Carousal from "./Carousal"
let imageArr = ["./src/assets/image/slider-1.png", "./src/assets/image/slider-2.png"]
const MainBanner = () => {

  // const [BannerContent, setBannerContent] = useState(1);
  return (
    <section>
      <div className="">
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            {imageArr.map((item) => {
              return <Carousal image={item} />
            })}
            {/* <BannerContent title={BannerContent.title} desc={BannerContent.desc}/> */}
          
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next" onClick={() => {
              setBannerContent({
                title:"Healthy Life With",
                desc:"Natural Organic",
              })
            }}>
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden" >Next</span>
          </button>
        </div>

      </div>
    </section>
  )
}

export default MainBanner