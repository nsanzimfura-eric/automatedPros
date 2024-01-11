import { useEffect, useRef } from "react";
import { gsap, Power1 } from 'gsap';
import styles from "./journey.module.scss";
import { journeyData } from "./demoData";
import { Button } from "react-bootstrap";


const Journey = () => {
    const timeline = gsap.timeline();
    const easeInOut = Power1.easeOut;

    const refDivsJourney = useRef<(HTMLDivElement | null)[]>([])

    useEffect(() => {
        if (refDivsJourney.current) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        timeline.fromTo([...refDivsJourney.current], { scale: .5 }, { scale: 1, duration: 1, ease: easeInOut });

                        observer.disconnect();
                    }
                });
            }, { threshold: 0.5 });

            refDivsJourney.current.forEach((El) => {
                observer.observe(El as HTMLDivElement);

            })
            return () => observer.disconnect();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={`${styles.journey} container d-flex flex-column flex-lg-row mt-5 py-5`}>
            <div className="introJourney d-flex flex-column">
                <h2>OUR JOURNEY</h2>
                <h3>It has been a long but incredible journey</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu egestas morbi sem vulputate etiam facilisis pellentesque ut quis.
                </p>
                <Button className="btnDownload">Download app</Button>
            </div>
            <div className="journeyBox">
                {journeyData.map((journeyData, id) => (
                    <div key={id} className="singleJourney d-flex flex-column p-5" ref={el => (refDivsJourney.current[id] = el)}>
                        <h4>{journeyData.year}</h4>
                        <h3>{journeyData.title}</h3>
                        <p>{journeyData.details}</p>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Journey;