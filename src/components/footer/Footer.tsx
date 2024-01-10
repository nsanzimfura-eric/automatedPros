import { Button } from "react-bootstrap";
import styles from "./footer.module.scss";
import { newsData } from "./footerData";

const Footer = () => {
    return (
        <div className={`${styles.footer} w-100 p-0 m-0 d-flex pt-5`}>
            <div className="container containerWrapper p-4">
                <div className="footerIntroWrapper py-3 pb-5 d-flex">
                    <div className="footerIntro pb-0 pb-lg-3">
                        <img src="/images/logo.svg" alt="Logo" className="FooterLogo" />
                        <p className="text-start">Lorem ipsum dolor sit amet, consectetur adipiscing<br /> elit sed do eiusmod tempor incididunt ut.</p>
                    </div>
                    <div className="btns d-flex pb-0 pb-lg-3">
                        <Button className=" btnFooter">
                            <img src="/images/a.png" alt="Icon" />
                            Download for iOS
                        </Button>
                        <Button className=" btnFooter">
                            <img src="/images/an.png" alt="Icon" />
                            Download for Android
                        </Button>
                    </div>
                </div>
            </div>
            <div className="pt-3">

            </div>


        </div>
    )
}

export default Footer;