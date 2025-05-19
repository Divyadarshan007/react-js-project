const Card = ({image, title, desc}) => {
    return (
        <div className="col-md-4 col-sm-6 col-12">
            <div className="Service-card">
                <div className="card-svg">
                    <img src={image} alt="logo" />
                </div>
                <div>
                    <h3 className="text-white fs-6 pt-3">{title}</h3>
                    <p className="text-secondary fw-medium">{desc}</p>
                </div>
            </div>
        </div>
    )
}

export default Card