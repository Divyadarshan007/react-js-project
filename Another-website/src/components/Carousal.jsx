const Carousal = ({ image }) => {
    return (
        <div>
            <div className="carousel-item active">
                <img src={image} className="d-block hello w-100" loading="lazy" alt="image" />
            </div>
        </div>
    )
}

export default Carousal
