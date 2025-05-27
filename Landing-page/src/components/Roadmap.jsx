import RoadmapCard from "./RoadmapCard";
import SectionTitle from "./SectionTitle";
let roadmapArr = [
    {
        title: "Platform Development Starts",
        startDate: "May 12, 2018",
        endDate: "Jun 19, 2018",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto adipisci provident officia animi.",
        positon: "left"
    },
    {
        title: "Groundwork Preparation for ICO",
        startDate: "Aug 18, 2018",
        endDate: "Sep 23, 2018",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto adipisci provident officia animi.",
        position: "right",
    },
    {
        title: "Crypto Blockchain Release",
        startDate: "Oct 08, 2018",
        endDate: "Nov 16, 2018",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto adipisci provident officia animi.",
        position: "left",
    },
    {
        title: "Release Bank & Cards Phase",
        startDate: "Dec 28, 2018",
        endDate: "Jan 29, 2019",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto adipisci provident officia animi.",
        position: "right",
    },
]

const Roadmap = () => {
    let title = "Our ICO Roadmap";
    let desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.";
    let right = "right";
    let left = "left";
    return (
        <section className=" h-100">
            <div className="container">
                <SectionTitle title={title} desc={desc} />
                <div className="timeline py-6 mt-5">
                    {roadmapArr.map((item) => {
                        return <RoadmapCard title={item.title} startDate={item.startDate} endDate={item.endDate} desc={item.desc} position={item.position} />
                    })}
                </div>
            </div>
        </section>
    )
}

export default Roadmap