const Credentials = () => {
    return (
        <div>
            <div className="d-flex gap-3 align-items-center">
                <span className="fs-6 fw-medium">Login</span>
                <span className="fs-6 fw-medium">|</span>
                <span className="fs-6 fw-medium">Register</span>
                <span className="fs-6 fw-medium">USD</span>
                <button type="button" class="border-0 bg-transparent position-relative">
                    <i className="bi bi-bag fs-5"></i>
                    <span class="position-absolute gola text-white translate-middle badge rounded-pill bg-dark">
                        0
                        
                    </span>
                </button>
                <span></span>
            </div>
        </div>
    )
}

export default Credentials