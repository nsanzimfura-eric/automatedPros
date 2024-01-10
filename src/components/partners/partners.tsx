import styles from "./partners.module.scss";
import { partnersData } from "./demoData";

const Partners = () => {
    return (
        <div className={`${styles.Partners} w-100 p-0 m-0 d-flex pt-5`}>
            <div className="my-5 py-5 container containerWrapper">
                <div className="introJourney d-flex flex-column">
                    <h2>OUR PARTNERS</h2>
                    <h3>We don’t walk alone, Deliver X works thanks to our partners</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu egestas morbi sem vulputate etiam facilisis pellentesque ut quis.</p>
                </div>
                <div className="partnerBox flex">
                    {partnersData.map((data, id) => (
                        <div key={id} className="singlePartner d-flex flex-column p-5">
                            <img src={data.image} alt="Partner" className="partner" />
                            <h3>{data.title}</h3>
                            <p>{data.details}</p>
                        </div>
                    ))}

                </div>
            </div>


        </div>
    )
}

export default Partners;