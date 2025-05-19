const PartnerBox = ({image}) => {
    return (
       <div className="col-md-2 col-sm-4 d-sm-flex d-none">
         <div className="partner-box">
            <img src={image} alt="" width={'100%'}/>
        </div>
       </div>
    )
}

export default PartnerBox