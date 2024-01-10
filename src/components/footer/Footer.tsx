import { Button } from "react-bootstrap";
import styles from "./footer.module.scss";

const Footer = () => {
    return (
        <div className={`${styles.footer} w-100 p-0 m-0 d-flex flex-column pt-5`} id="Footer">
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
            <div className="container linksBoxFooter d-flex py-5">
                <div className="leftPartFooter d-flex">
                    <div className="menuBox">
                        <h3>Menu</h3>
                        <div className="d-flex align-items-start menus justify-content-start">
                            <div className="d-flex flex-column">
                                <a href="#Footer" className="text-decoration-none">Home</a>
                                <a href="#Footer" className="text-decoration-none">About</a>
                                <a href="#Footer" className="text-decoration-none">Contact</a>
                                <a href="#Footer" className="text-decoration-none">Blog</a>
                                <a href="#Footer" className="text-decoration-none">Blog posts</a>

                            </div>
                            <div className="d-flex flex-column">
                                <a href="#Footer" className="text-decoration-none">Plans</a>
                                <a href="#Footer" className="text-decoration-none">Plan single</a>
                                <a href="#Footer" className="text-decoration-none">Register</a>

                            </div>
                        </div>

                    </div>
                    <div className="utilities">
                        <h3>Utility pages</h3>
                        <div className="utilityBox d-flex flex-column">
                            <a href="#Footer" className="text-decoration-none">Start Here</a>
                            <a href="#Footer" className="text-decoration-none">Styleguide</a>
                            <a href="#Footer" className="text-decoration-none">Password protected</a>
                            <a href="#Footer" className="text-decoration-none">404 Not found</a>
                            <a href="#Footer" className="text-decoration-none">Licenses</a>
                            <a href="#Footer" className="text-decoration-none">Changelog</a>
                            <a href="#Footer" className="text-decoration-none browse">Browse More Templates</a>
                        </div>

                    </div>
                </div>
                <div className=" marksWrapper d-flex flex-column">
                    <h3>Available in</h3>
                    <div className="d-flex markBox">
                        <div className="d-flex align-items-center">
                            <img src="/images/sans.svg" alt="Mark" />
                            <span>San Francisco, CA</span>
                        </div>
                        <div className="d-flex align-items-center">
                            <img src="/images/los.svg" alt="Mark" />
                            <span>Los Angeles, CA</span>
                        </div>
                        <div className="d-flex align-items-center">
                            <img src="/images/new.svg" alt="Mark" />
                            <span>New York, NY</span>
                        </div>
                        <div className="d-flex align-items-center">
                            <img src="/images/se.svg" alt="Mark" />
                            <span>Seattle, WA</span>
                        </div>
                    </div>

                </div>
            </div>
            <div className="container copyright py-4">
                Copyright © Deliver X | Designed by
                <a href="https://brixtemplates.com/" className="text-decoration-none mx-1">BRIX Templates</a>
                - Powered by
                <a href="https://webflow.com/" className="text-decoration-none mx-1">Webflow</a>
            </div>


        </div>
    )
}

export default Footer;