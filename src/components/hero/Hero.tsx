import styles from "./hero.module.scss";
import { numbersStatistics } from "./heroData";

const Hero = () => {

    return (
        <div className={`${styles.hero} container d-flex flex-column`}>
            <div className="heroIntro mt-0 d-flex flex-column flex-lg-row justify-content-between row-lg">
                <div className="HeroDescription-wrapper col-lg-7 d-flex justify-content-start align-items-center">
                    <div className="HeroDescription d-flex flex-column">
                        <h3>ABOUT DELIVER X</h3>
                        <h1>We are here to help <br /> amazing restaurants <br /> get great customers</h1>
                        <p>
                            At morbi adipiscing sit sed  consectetur senectus Dignissim sed
                            <br />
                            amet tincidunt vitae ultricies ultrices amet fermentum amet neque et
                            <br />
                            id sed lacinia massa pretium aliquam libero et.
                        </p>
                    </div>
                </div>
                <div className="p-0 col-lg-5 imagesBox d-flex position-relative">
                    <img src="/images/burger-deliverer.png" alt="Bg Burger" className="bgBurger position-absolute" />
                    <div className="imgLeft m-0 d-flex flex-column justify-content-center">
                        <img src="/images/burger.png" alt="Burger" className="img-fluid burger" />
                    </div>
                    <div className="imgRight m-0 d-flex flex-column justify-content-center ">
                        <img src="/images/moto-deliverer.svg" alt="Burger" className="img-fluid mt-5 burger-motor" />
                    </div>
                </div>
            </div>
            <div className="numbers row py-4">
                {numbersStatistics.map((stat, i) => (
                    <div key={i} className="col-12 col-md-6 d-flex lastBox row-md justify-content-between">
                        {stat.map((statistic, idx) => (
                            <div key={idx} className="col-md-6 d-flex justify-content-start align-items-center singleStat">
                                <div className="numberBox d-flex flex-column justify-content-center align-items-center">
                                    <div className="number d-flex">
                                        {statistic.number}
                                        <span className="sign">{statistic.sign}</span>

                                    </div>
                                    <p className="details">{statistic.details}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )

                )}
            </div>

        </div>
    )
}
export default Hero;
