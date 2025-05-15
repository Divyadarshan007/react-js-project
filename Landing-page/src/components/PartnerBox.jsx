const PartnerBox = ({image}) => {
    return (
       <div className="col-2">
         <div className="partner-box">
            <img src={image} alt="" width={'100%'}/>
        </div>
       </div>
    )
}

export default PartnerBox