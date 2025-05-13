const RoadmapCard = ({title, startDate, endDate, desc, position}) => {
    
    return (
        <div className={`roadmap-card block-${position} block-${position} text-white`}>
            <h3>{title}</h3>
            <span className="date">{startDate}</span>
            <span className="between fw-semibold">to</span>
            <span className="date">{endDate}</span>
            <p>{desc}</p>
        </div>
    )
}

export default RoadmapCard