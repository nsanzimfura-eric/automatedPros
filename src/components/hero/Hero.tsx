import { useEffect, useRef } from 'react';
import { gsap, Power1 } from 'gsap';
import styles from "./hero.module.scss";
import { numbersStatistics } from "./heroData";


const Hero = () => {
    // animation
    const timeline = gsap.timeline();
    const easeInOut = Power1.easeOut;
    // images
    const motorRef = useRef<HTMLImageElement | null>(null)
    const burgerRef = useRef<HTMLImageElement | null>(null)
    const refImages = useRef<HTMLImageElement | null>(null)
    // intro
    const detailsRef = useRef<HTMLParagraphElement | null>(null)
    const IntroRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const element1 = motorRef.current;
        const element2 = burgerRef.current;
        const tl = gsap.timeline({ repeat: -1, yoyo: true });
        tl.to(element1, { duration: 2, y: '-=20', ease: 'power1.inOut' });
        tl.to(element2, { duration: 2, y: '+=20', ease: 'power1.inOut' });
        // intro
        timeline.fromTo(detailsRef.current, { opacity: 0, y: 100 }, { delay: 1, opacity: 1, y: 0, duration: 1, ease: easeInOut });
        timeline.fromTo(IntroRef.current, { opacity: 0, scale: 0.8, y: 200 }, { opacity: 1, scale: 1, y: 0, duration: 1, ease: easeInOut });
        timeline.fromTo([refImages.current, element1, element2], { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 1, ease: easeInOut });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);



    return (
        <div className={`${styles.hero} container d-flex flex-column`}>
            <div className="heroIntro mt-0 d-flex flex-column flex-lg-row justify-content-between row-lg">
                <div className="HeroDescription-wrapper col-lg-7 d-flex justify-content-start align-items-center overflow-hidden">
                    <div className="HeroDescription d-flex flex-column overflow-hidden" ref={IntroRef}>
                        <h3>ABOUT DELIVER X</h3>
                        <h1>We are here to help <br /> amazing restaurants <br /> get great customers</h1>
                        <p ref={detailsRef} className='justify-content-center justify-content-lg-start'>
                            At morbi adipiscing sit sed  consectetur senectus Dignissim sed
                            <br />
                            amet tincidunt vitae ultricies ultrices amet fermentum amet neque et
                            <br />
                            id sed lacinia massa pretium aliquam libero et.
                        </p>
                    </div>
                </div>
                <div className="p-0 col-lg-5 imagesBox d-flex position-relative">
                    <img src="/images/burger-deliverer.png" alt="Bg Burger" className="bgBurger position-absolute" ref={refImages} />
                    <div className="imgLeft m-0 d-flex flex-column justify-content-center">
                        <img src="/images/burger.png" alt="Burger" className="img-fluid burger" ref={burgerRef} />
                    </div>
                    <div className="imgRight m-0 d-flex flex-column justify-content-center" >
                        <img src="/images/moto-deliverer.svg" alt="Burger" className="img-fluid mt-5 burger-motor" ref={motorRef} />
                    </div>
                </div>
            </div>
            <div className="numbers row py-4 overflow-hidden">
                {numbersStatistics.map((stat, i) => (
                    <div key={i} className="col-12 col-md-6 d-flex lastBox row-md justify-content-between overflow-hidden">
                        {stat.map((statistic, idx) => (
                            <div key={idx} className="col-md-6 d-flex justify-content-start align-items-center overflow-hidden singleStat" >
                                <div className="numberBox d-flex flex-column justify-content-center align-items-center overflow-hidden">
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
