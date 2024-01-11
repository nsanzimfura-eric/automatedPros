import styles from "./AboutUs.module.scss";
import { useEffect, useRef } from "react";
import { gsap, Power1 } from 'gsap';
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
    const timeline = gsap.timeline();
    const easeInOut = Power1.easeOut;

    const refImages = useRef<HTMLImageElement | null>(null);

    useEffect(() => {
        const imagesElement = refImages.current;
        if (imagesElement) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        timeline.fromTo(imagesElement, { opacity: 0, scale: .5 }, { opacity: 1, scale: 1, duration: 1, ease: easeInOut });

                        observer.disconnect();
                    }
                });
            }, { threshold: 0.5 });

            observer.observe(imagesElement);

            return () => observer.disconnect();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <div className={`${styles.aboutUs} w-100 p-0 m-0 d-flex pt-5`}>
            <div className="my-5 py-5 container containerWrapper">
                <div className={`wrapperBox d-flex flex-column-reverse  flex-lg-row m-0 ${reverseColumns ? "reverseColumns" : ""}`}>
                    <img src={data.image} alt="Burger APP" className="image-burger" ref={refImages} />
                    <div className="aboutBox">
                        <h3>{data.title}</h3>
                        <h2>{data.bigTitle}</h2>
                        <p>{data.details}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;