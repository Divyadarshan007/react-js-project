import WalletCard from "./WalletCard"
let walletCardArr = [
    {
        icon:"bi bi-phone-fill",
        title:"Powerfull Mobile and Online App",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium modi assumenda beatae provident non hic eum dolores natus, vitae, quae, facere perferendis quas tempore. Consequuntur commodi facilis sed similique."
    },
    {
        icon:"bi bi-sliders",
        title:"Brings more Transparency and Speed",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium modi assumenda beatae provident non hic eum dolores natus, vitae, quae, facere perferendis quas tempore. Consequuntur commodi facilis sed similique."
    },
    {
        icon:"bi bi-gear",
        title:"Special for Multiple Use Capabilities",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium modi assumenda beatae provident non hic eum dolores natus, vitae, quae, facere perferendis quas tempore. Consequuntur commodi facilis sed similique."
    },
]
const WalletLeft = () => {
    return (
        <div className="col-7">
          <div className="row gy-4">
              {walletCardArr.map((item)=>{
                return <WalletCard icon={item.icon} title={item.title} desc={item.desc}/>
            })}
          </div>
        </div>
    )
}

export default WalletLeft