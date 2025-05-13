import Card from "./Card";
import SectionTitle from "./SectionTitle"
let cardArr = [
    {
        image:"./src/assets/image/image-1.svg",
        title:"Smart Trading Modules",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maximus ut accumsan ut, posuere sit Lorem ipsum."
    },
    {
        image:"./src/assets/image/image-2.svg",
        title:"Adaptive Social Assistant",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maximus ut accumsan ut, posuere sit Lorem ipsum."
    },
    {
        image:"./src/assets/image/image-3.svg",
        title:"Analyzer of the News",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maximus ut accumsan ut, posuere sit Lorem ipsum."
    },
    {
        image:"./src/assets/image/image-4.svg",
        title:"Exchange Order Management",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maximus ut accumsan ut, posuere sit Lorem ipsum."
    },
    {
        image:"./src/assets/image/image-5.svg",
        title:"Module of Price Notification",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maximus ut accumsan ut, posuere sit Lorem ipsum."
    },
    {
        image:"./src/assets/image/image-6.svg",
        title:"Crypto Trading Platform",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla neque quam, maximus ut accumsan ut, posuere sit Lorem ipsum."
    }
]
const Service = () => {
    let title="Our Core Services";
    let desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.";
    return (
        <section className="py-5 bg-color">
            <div className="container">
                <div>
                    <SectionTitle title={title} desc={desc}/>
                   <div className="row gy-4 py-5">
                        {cardArr.map((item)=>{
                           return <Card image={item.image} title={item.title} desc={item.description}/>
                        })}
                   </div>
                </div>
            </div>
        </section>
    )
}

export default Service