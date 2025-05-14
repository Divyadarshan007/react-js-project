import Credentials from "./Credentials"
import Menus from "./Menus"

const Header = () => {
    return (
        <header className="p-4">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="logo">
                        <img src="./src/assets/image/Obrien-Logo_125x.png" alt="" />
                    </div>
                    <Menus/>
                    <Credentials/>
                </div>
            </div>
        </header>
    )
}

export default Header