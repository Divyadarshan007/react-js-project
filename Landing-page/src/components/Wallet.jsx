import SectionTitle from "./SectionTitle"
import WalletLeft from "./WalletLeft";
import WalletRight from "./WalletRight";

const Wallet = () => {
    let title = "Our Wallet Application";
    let desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.";
    return (
        <section className="py-5">
            <div className="container">
                <SectionTitle title={title} desc={desc}/>
                <div className="row">
                    <WalletLeft/>
                    <WalletRight/>
                </div>

            </div>
        </section>
    )
}

export default Wallet