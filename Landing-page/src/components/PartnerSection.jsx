import PartnerBox from "./PartnerBox";
import SectionTitle from "./SectionTitle"
let partnerArr=[
    {
        image:"/public/image/partner-1.png"
    },
    {
        image:"/public/image/partner-2.png"
    },
    {
        image:"/public/image/partner-3.png"
    },
    {
        image:"/public/image/partner-4.png"
    },
    {
        image:"/public/image/partner-5.png"
    },
    {
        image:"/public/image/partner-1.png"
    },
    {
        image:"/public/image/partner-2.png"
    },
    {
        image:"/public/image/partner-3.png"
    },
    {
        image:"/public/image/partner-4.png"
    },
    {
        image:"/public/image/partner-5.png"
    },
    {
        image:"/public/image/partner-2.png"
    },
    {
        image:"/public/image/partner-3.png"
    },
]
const PartnerSection = () => {
    let title = "Our Awesome Partners";
    let desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.";
    return (
        <section className="d-sm-block d-none">
            <div className="container">
                <SectionTitle title={title} desc={desc} />
                <div className="row gy-4">
                    {partnerArr.map((item)=>{
                        return <PartnerBox image={item.image}/>
                    })}
                </div>
            </div>
        </section>
    )
}

export default PartnerSection