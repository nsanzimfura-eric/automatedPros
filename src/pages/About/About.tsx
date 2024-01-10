import { useState, useEffect } from "react";
import NavbarComponent from "../../components/Navbar/Navbar";
import AboutUs from "../../components/about/AboutUs";
import Hero from "../../components/hero/Hero";
import styles from "./about.module.scss";
import { aboutUsData, missionData } from "./demoData"
import useWindowSize from "../../hooks/useWindowSize";
import { mediaDevices } from "../../utils/constants";
import Journey from "../../components/journey/Journey";
import Partners from "../../components/partners/partners";

export default function About() {
    const [reverseColumns, setReverseColumns] = useState(true);
    const [reverseColumns2, setReverseColumns2] = useState(false);

    const { width } = useWindowSize();

    useEffect(() => {
        if (width <= mediaDevices.lg) {
            setReverseColumns(false);
            setReverseColumns2(false);
        } else {
            setReverseColumns(true);
            setReverseColumns2(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [width])

    return (
        <div className={`${styles.about} container-fluid m-0 p-0 bg-pale w-100`}>
            <NavbarComponent />
            <Hero />
            <AboutUs reverseColumns={reverseColumns2} data={aboutUsData} />
            <AboutUs reverseColumns={reverseColumns} data={missionData} />
            <Journey />
            <Partners />
        </div>
    )
}
