const TeamProfile = ({image, name, desig}) => {
    return (
        <div className="col-md-3 col-sm-6 col-12">
            <div className="h-100">
                <div className="profile-image text-center">
                    <img src={image} alt="" />
                </div>
                <div className="profile-info text-center">
                    <h3 className="mt-3 text-center f-18">{name}</h3>
                    <p>{desig}</p>
                    <div className="social-icons d-flex justify-content-center gap-2">
                        <span><i className="bi bi-twitter"></i></span>
                        <span><i className="bi bi-instagram"></i></span>
                        <span><i className="bi bi-facebook"></i></span>
                        <span><i className="bi bi-skype"></i></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamProfile