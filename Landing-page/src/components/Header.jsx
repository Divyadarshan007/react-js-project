const Header = () => {
    return (
        <header className="p-3">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="logo">
                        <img src=" /public/image/download.png" alt="" />
                    </div>
                    <div className="d-flex align-items-center gap-5">
                        <ul className="m-0 p-0 d-none d-lg-flex menus gap-4">
                            <li className="fs-5 fw-semibold text-secondary">Home</li>
                            <li className="fs-5 fw-semibold text-secondary">About</li>
                            <li className="fs-5 fw-semibold text-secondary">Services</li>
                            <li className="fs-5 fw-semibold text-secondary">Roadmap</li>
                            <li className="fs-5 fw-semibold text-secondary">Team</li>
                            <li className="fs-5 fw-semibold text-secondary">Contact</li>
                        </ul>
                        <div className="menu-icon text-white fs-3 d-lg-none d-flex">
                            <i class="bi bi-list"></i>
                        </div>
                        <div>
                            <button className="login-btn fs-6 fw-medium text-white">Log in</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;