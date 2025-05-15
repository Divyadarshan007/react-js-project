const SectionTitle = ({ title, desc }) => {
    return (
        <div className="py-5">
            <div className="dream-dots">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <h3 className="text-center text-white">{title}</h3>
            <div className="d-flex justify-content-center">
                <p className="text-center color-b2 w-50">{desc}</p>
            </div>
        </div>
    )
}

export default SectionTitle