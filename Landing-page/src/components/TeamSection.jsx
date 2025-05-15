import SectionTitle from "./SectionTitle"
import TeamProfile from "./TeamProfile";
let teamProfile = [
    {
        image: "/public/image/profile-1.png",
        name: "SUNNY KHAN",
        desig: "EXECUTIVE OFFICER",
    },
    {
        image: "/public/image/profile-2.png",
        name: "AJOY DAS",
        desig: "BUSINESS DEVELOPMENT",
    },
    {
        image: "/public/image/profile-3.png",
        name: "AFROZA MOU",
        desig: "UI/IX DESIGNER",
    },
    {
        image: "/public/image/profile-4.png",
        name: "LIM SARAH",
        desig: "HEAD OF MARKETING",
    },
]
const TeamSection = () => {
    let title = "Awesome Team";
    let desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.";
    return (
        <section>
            <div className="container">
                <SectionTitle title={title} desc={desc} />
                <div className="row">
                    {teamProfile.map((item) => {
                        return <TeamProfile image={item.image} name={item.name} desig={item.desig} />
                    })}
                </div>
            </div>
        </section>
    )
}

export default TeamSection