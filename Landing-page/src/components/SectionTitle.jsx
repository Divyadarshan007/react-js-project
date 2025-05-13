const SectionTitle = ({ title, desc }) => {
    return (
        <div>
            <h3 className="text-center text-white">{title}</h3>
            <div className="d-flex justify-content-center">
                <p className="text-center text-white w-50">{desc}</p>
            </div>
        </div>
    )
}

export default SectionTitle