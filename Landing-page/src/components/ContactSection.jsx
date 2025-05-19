import SectionTitle from "./SectionTitle"

const ContactSection = () => {
    let title = "Contact With Us";
    let desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.";
    return (
        <section className="contact-back-image">
            <div className="container">
                <SectionTitle title={title} desc={desc} />
                <form action="">
                    <div className="row gy-3">
                        <div className="col-sm-6 col-12 py-3">
                            <input placeholder="Name" type="text" className="" />
                        </div>
                        <div className="col-sm-6 col-12 py-3">
                            <input placeholder="Email" type="text" className="" />
                        </div>
                        <div className="col-12 py-3">
                            <input placeholder="Subject" type="text" className="" />
                        </div>
                        <div className="col-12 py-3">
                            <textarea name="" cols={'5'} placeholder="Message" className="" rows={'5'} id=""></textarea>
                        </div>
                    </div>
                    <div className="twoButton text-center">
                        <button className="">SEND MESSAGE</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default ContactSection