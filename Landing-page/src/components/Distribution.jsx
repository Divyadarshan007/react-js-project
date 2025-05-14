import DistributionLeft from "./DistributionLeft";
import DistributionRight from "./DistributionRight";
import SectionTitle from "./SectionTitle"

const Distribution = () => {
    let title = "Our ICO Distribution";
    let desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.";

    return (
        <section className="py-5 mt-5">
            <div className="container">
              <SectionTitle title={title} desc={desc}/>
                <div className="row">
                    <DistributionLeft/>
                    <DistributionRight/>
                </div>
            </div>
        </section>
    )
}

export default Distribution