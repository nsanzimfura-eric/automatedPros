import NavbarComponent from "../components/Navbar/Navbar";
import Hero from "../components/hero/Hero";
import styles from "./about.module.scss";

export default function About() {
    return (
        <div className={`${styles.about} container-fluid m-0 p-0 bg-pale w-100`}>
            <NavbarComponent />
            <Hero />
        </div>
    )
}
