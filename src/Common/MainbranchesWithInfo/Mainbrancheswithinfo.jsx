import {Link, NavLink} from "react-router-dom";
import zakup from "../../assets/images/1-3.jpg";
import wynajem from "../../assets/images/IMG_9914.jpg";
import zarzadzanie from "../../assets/images/IMG_0186.jpg";
import './Mainbrancheswithinfo.css';
import {useState} from "react";

function Mainbrancheswithinfo(){

    const [infoIndex, setInfoIndex] = useState(1)

    return(
        <div className="mainbranches-aboutus-wrapper">

            <div className="mainbranches-aboutus-tabs">
                <button className={infoIndex === 1 ? "tab-clicked" : "button"}  onClick={()=>setInfoIndex(1)}>ZAKUP</button>
                <button className={infoIndex === 2 ? "tab-clicked" : "button"} onClick={()=>setInfoIndex(2)}> WYNAJEM</button>
                <button className={infoIndex === 3 ? "tab-clicked" : "button"} onClick={()=>setInfoIndex(3)}>ZARZĄDZANIE</button>
            </div>

            <div className={infoIndex === 1 ? "show-tab-div" : "hide-tab-div"}>
                <NavLink to="https://www.otodom.pl/pl/firmy/biura-nieruchomosci/livein-ID6339060?lang=&estate=ALL&transaction=SELL&market=ALL" target={"_blank"}>
                    <div className="aboutus-buy-grid">
                        <div className="aboutus-img"><img className="img-in-aboutus" src={zakup}/></div>

                        <div className="aboutus-grid-text">

                            <p>Zalecamy skorzystać z profesjonalnego wsparcia doświadczonego biura nieruchomości, co pomoże skrócić czas poszukiwania i zapewni bezpieczeństwo transakcji.

                                Zapraszamy do zapoznania się z naszą bogatą ofertą nieruchomości w atrakcyjnych dzielnicach Krakowa!
                            </p>
                            <button className="aboutus-grid-button">oferty na zakup</button>
                        </div>
                    </div>
                </NavLink>
            </div>


            <div className={infoIndex === 2 ? "show-tab-div" : "hide-tab-div"}>
                <NavLink to="https://www.otodom.pl/pl/firmy/biura-nieruchomosci/livein-ID6339060?lang=&estate=ALL&transaction=RENT&market=ALL" target={"_blank"}>
                    <div className="aboutus-buy-grid">
                        <div className="aboutus-img"><img className="img-in-aboutus" src={wynajem}/></div>

                        <div className="aboutus-grid-text">

                            <p>Pomożemy znaleźć wymarzoną nieruchomość lub rzetelnego Najemcę i poprowadzimy cały proces od A do Z.</p>
                            <button className="aboutus-grid-button">oferty wynajmu</button>
                        </div>
                    </div>
                </NavLink>
            </div>


            <div className={infoIndex === 3 ? "show-tab-div" : "hide-tab-div"}>
                <Link to="/managing">
                    <div className="aboutus-buy-grid">
                        <div className="aboutus-img"><img className="img-in-aboutus" src={zarzadzanie}/></div>

                        <div className="aboutus-grid-text">

                            <p>Zarządzanie najmem - to kompleksowa usługa, która obejmuje całą opiekę nad nieruchomością, by wziąć na siebie wszystkie obowiązki z tym związane. </p>
                            <button className="aboutus-grid-button">więcej o zarządzaniu</button>
                        </div>
                    </div>
                </Link>
            </div>

        </div>
    )
}

export default Mainbrancheswithinfo;