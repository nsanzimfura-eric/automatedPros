import styles from "./AboutUs.module.scss";

interface Prop {
    reverseColumns: boolean;
    data: {
        title: string;
        bigTitle: string;
        details: string;
        image: string;

    };
}
const AboutUs = (props: Prop) => {
    const { reverseColumns, data } = props;

    return (
        <div className={`${styles.aboutUs} container d-flex flex-column pt-5`}>
            <div className={`wrapperBox w-100 d-flex flex-column flex-lg-row m-0 ${reverseColumns ? "reverseColumns" : ""}`}>
                <img src={data.image} alt="Burger APP" className="image-burger" />
                <div className="aboutBox">
                    <h3>{data.title}</h3>
                    <h2>{data.bigTitle}</h2>
                    <p>{data.details}</p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;