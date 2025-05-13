const WalletCard = ({icon, title, desc}) => {
    return (
        <div className="col-12">
            <div className="wallet-block d-flex align-items-start gap-4">
                <div className="icon-box">
                    <span className="fs-2 text-white circle"><i class={icon}></i></span>
                </div>
                <div className="wallet-content">
                    <h3 className="text-white">{title}</h3>
                    <p className="text-white">{desc}</p>
                </div>
            </div>
        </div>
    )
}

export default WalletCard