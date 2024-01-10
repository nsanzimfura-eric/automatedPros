import styles from "./news.module.scss";
import { newsData } from "./demoData";

const News = () => {
    return (
        <div className={`${styles.news} w-100 p-0 m-0 d-flex pt-5`}>
            <div className="my-5 py-5 container containerWrapper">
                <div className="introJourney d-flex flex-column">
                    <h2 className="text-center">PRESS & NEWS</h2>
                    <h3 className="text-center">See what the press says about Deliver X</h3>
                </div>
                <div className="partnerBox w-100 d-flex flex-column flex-lg-row py-3 py-lg-5" id="news">
                    {newsData.map((data, id) => (
                        <a href="#news" key={id} className="singlePartner flex-column align-items-center d-flex">
                            <img src="/images/compa.svg" alt="Partner" className="news" />
                            <span className="text-center title">{data.title}</span>
                            <div className="d-flex justify-content-between w-100">
                                <img src="/images/read.png" alt="Read More" className="readMore" />
                                <span className="text-secondary date">{data.date}</span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>


        </div>
    )
}

export default News;