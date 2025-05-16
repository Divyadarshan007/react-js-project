const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div>
                            <div className="mb-3">
                                <img src="../../public/image/download.png" alt="" />
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ducimus voluptatibus neque illo id repellat quisquam? Autem expedita earum quae laborum ipsum ad, a eaque officiis eligendi blanditiis odio necessitatibus.</p>
                            <div className="text-white ps-2 d-flex align-items-center gap-2">
                                <span><i className="bi bi-facebook"></i></span>
                                <span><i className="bi bi-twitter"></i></span>
                                <span><i className="bi bi-google"></i></span>
                                <span><i className="bi bi-instagram"></i></span>
                                <span><i className="bi bi-linkedin"></i></span>
                            </div>
                        </div>
                    </div>
                    <div class="col-2">
                        <div>
                            <h5>NAVIGATE</h5>
                            <ul className="m-0 p-0">
                                <li>Advertisers</li>
                                <li>Developers</li>
                                <li>Resources</li>
                                <li>Company</li>
                                <li>Connect</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-3">
                        <div>
                            <h5>PRIVACY & TOYS</h5>
                            <ul className="m-0 p-0">
                                <li>Advertiser Agreement</li>
                                <li>Acceptable Use Policy</li>
                                <li>Privacy Policy</li>
                                <li>Technology Privacy</li>
                                <li>Developer Agreement</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-3">
                        <div>
                            <h5>PHONE</h5>
                            <ul className="m-0 p-0">
                                <li>Mailing Address:xx00 E. Union AveSuite 1100. Denver, CO 80237</li>
                                <li>+999 90932 627</li>
                                <li>support@yourdomain.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer