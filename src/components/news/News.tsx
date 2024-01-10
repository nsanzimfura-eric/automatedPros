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
                        <a href="#news" key={id} className="singleCard flex-column align-items-start d-flex text-decoration-none">
                            <img src="/images/compa.svg" alt="CompanyLogo" className="news mt-5" />
                            <span className="text-start title ">{data.title}</span>
                            <div className="d-flex justify-content-between bottomCard align-items-center w-100 p-0 mb-5">
                                <img src="/images/more.png" alt="Read More" className="readMore" />
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