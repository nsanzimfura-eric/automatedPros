import styles from "./partners.module.scss";
import { partnersData } from "./demoData";

const Partners = () => {
    return (
        <div className={`${styles.Partners} w-100 p-0 m-0 d-flex pt-5`}>
            <div className="my-5 py-5 container containerWrapper">
                <div className="introJourney d-flex flex-column">
                    <h2 className="text-center">OUR PARTNERS</h2>
                    <h3 className="text-center">We don’t walk alone, Deliver X works thanks to our partners</h3>
                    <p className="text-center">Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu egestas morbi sem vulputate etiam facilisis pellentesque ut quis.</p>
                </div>
                <div className="partnerBox w-100 d-flex flex-column flex-lg-row py-3 py-lg-5 mt-5 mt-lg-0">
                    {partnersData.map((data, id) => (
                        <div key={id} className="singlePartner flex-column align-items-center d-flex">
                            <img src={data.image} alt="Partner" className="partner" />
                            <h3 className="text-center">{data.title}</h3>
                            <p className="text-center">{data.details}</p>
                        </div>
                    ))}
                </div>
            </div>


        </div>
    )
}

export default Partners;