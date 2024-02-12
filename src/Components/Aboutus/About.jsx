import Swiper from "../../Common/Swiper/Swiper";
import ginside from "../../assets/images/Ginside.jpg";
import Reviews from "../Reviews/Reviews";
import {Link, NavLink, Route, Routes} from "react-router-dom";
import Mainbranches from "../../Common/Mainbranches/Mainbranches";
import Swiperreview from "../Reviews/Swiperreview/Swiperreview";
import './About.css';
import orly from "../../assets/images/orlySolo.png";
import orlylogo from "../../assets/images/2023-nieruchomosci400px.png";
import {useState} from "react";
// import pic from "../../assets/images/Zrzut ekranu 2022-11-16 o 14.31.44.png";
import Mainbrancheswithinfo from "../../Common/MainbranchesWithInfo/Mainbrancheswithinfo";

function About (){

    // const [infoIndex, setInfoIndex] = useState(1)

    return(
        <div className="aboutus-comp">

            {/*<div className="reviews-comp-in-contacts">*/}
            {/*    <Reviews/>*/}
            {/*    <NavLink to="https://maps.app.goo.gl/rFhKD2pH78NYtrXRA" target={"_blank"}>zobaczyć więcej opinji</NavLink>*/}

            {/*</div>*/}

            <div className="aboutus-intro-text">
                    <p>Możemy być dumni, że <b>większość klientów zostaje u nas,</b> by po udanym wynajmie szukać z nami własnego zakątku. A po pomyślnym zakupie razem wybierać inwestycje na przyszłość.</p>
            </div>

            <div className="swiperreview-comp"><Swiperreview/></div>

            <NavLink target={"_blank"} className="more-opinions" to="https://maps.app.goo.gl/ihPPxHezXb3WJJw48">Więcej opinii</NavLink>

            <div className="aboutus-text-quality">
            <p>Prioritetem naszej pracy jest <b>jakościowa obsługa Klienta,</b> by oczekiwania, wymagania i pytania każdej strony transakcji były brane pod uwagę. Dominującą część naszej oferty obejmują <b>mieszkania oraz domy o wysokim standardzie wykończenia.</b> Naszą ofertę nieruchomości dostosowujemy <b>indywidualnie do każdego Klienta.</b> Współpracujemy zarówno z Klientami prywatnymi, jak i z agencjami relokacyjnymi oraz agencjami europejskimi, co pozwala nam działać skutecznie. Z naszą pomocą <b>sprzedaż, zakup, zarządzanie oraz wynajem</b> mieszkań w Krakowie przebiegają szybko i bezproblemowo.
                Naszym Klientom pomagamy w podjęciu decyzji dotyczących <b>inwestycji w nieruchomości</b> w tej niezwykle dogodnej lokalizacji. Dopilnujemy też <b>każdego szczegółu prawnego,</b> aby wynajem lub sprzedaż mieszkań w Krakowie były jak najmniej problematyczne dla Klienta.</p>
            </div>

            <div className="grzegorz-and-mission">

                <div className="grzegorz-div">
                    <img className="grzegorz-photo" src={ginside}/>
                    <div className="grzegorz-contact">
                        <div className="name-title">
                            <p className="name">GRZEGORZ BRADŁO</p>
                            <p className="title">Założyciel Agencji</p>
                        </div>
                        <div className="tel-email">
                            <p>+48 503 195 056</p>
                            <p>grzegorz@livein-estates.pl</p>

                        </div>
                    </div>
                </div>

                <div className="mission-swiper">
                    {/*<div className="mission">*/}

                    {/*    <p>Działalność naszej agencji skupia się w szczególności na <b>sprzedaży, zarządzaniu i wynajmie</b> nieruchomości zlokalizowanych w centralnych dzielnicach miasta <b>Kraków</b>.*/}
                    {/*        Naszym priorytetem jest świadczenie <b>wysokiej jakości usług</b> i budowanie długotrwałych relacji z Klientami. </p>*/}
                    {/*</div>*/}


                   {/*<Mainbranches/>*/}


                    <Mainbrancheswithinfo/>

                    {/*<div className="mainbranches-aboutus-wrapper">*/}

                    {/*<div className="mainbranches-aboutus-tabs">*/}
                    {/*    <button onClick={()=>setInfoIndex(1)}>ZAKUP</button>*/}
                    {/*    <button onClick={()=>setInfoIndex(2)}> WYNAJEM</button>*/}
                    {/*    <button onClick={()=>setInfoIndex(3)}>ZARZĄDZANIE</button>*/}
                    {/*</div>*/}

                    {/*    <div className={infoIndex === 1 ? "show-tab-div" : "hide-tab-div"}>*/}
                    {/*        <NavLink to="https://www.otodom.pl/pl/firmy/biura-nieruchomosci/livein-ID6339060?lang=&estate=ALL&transaction=SELL&market=ALL" target={"_blank"}>*/}
                    {/*            <div className="aboutus-buy-grid">*/}
                    {/*                <div className="aboutus-img"><img className="img-in-aboutus" src={pic}/></div>*/}

                    {/*                <div className="aboutus-grid-text">*/}

                    {/*                    <p>Zalecamy skorzystać z profesjonalnego wsparcia doświadczonego biura nieruchomości, co pomoże skrócić czas poszukiwania i zapewni bezpieczeństwo transakcji.*/}

                    {/*                        Zapraszamy do zapoznania się z naszą bogatą ofertą nieruchomości w atrakcyjnych dzielnicach Krakowa!*/}
                    {/*                    </p>*/}
                    {/*                    <button className="aboutus-grid-button">nasze oferty</button>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </NavLink>*/}
                    {/*    </div>*/}


                    {/*    <div className={infoIndex === 2 ? "show-tab-div" : "hide-tab-div"}>*/}
                    {/*        <NavLink to="https://www.otodom.pl/pl/firmy/biura-nieruchomosci/livein-ID6339060?lang=&estate=ALL&transaction=RENT&market=ALL" target={"_blank"}>*/}
                    {/*            <div className="aboutus-buy-grid">*/}
                    {/*                <div className="aboutus-img"><img className="img-in-aboutus" src={pic}/></div>*/}

                    {/*                <div className="aboutus-grid-text">*/}

                    {/*                    <p>Pomożemy znaleźć wymarzoną nieruchomość lub rzetelnego Najemcę i poprowadzimy cały proces od A do Z.</p>*/}
                    {/*                    <button className="aboutus-grid-button">nasze oferty</button>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </NavLink>*/}
                    {/*    </div>*/}


                    {/*    <div className={infoIndex === 3 ? "show-tab-div" : "hide-tab-div"}>*/}
                    {/*        <Link to="/managing">*/}
                    {/*            <div className="aboutus-buy-grid">*/}
                    {/*                <div className="aboutus-img"><img className="img-in-aboutus" src={pic}/></div>*/}

                    {/*                <div className="aboutus-grid-text">*/}

                    {/*                    <p>Zarządzanie najmem - to kompleksowa usługa, która obejmuje całą opiekę nad nieruchomością, by wziąć na siebie wszystkie obowiązki z tym związane. </p>*/}
                    {/*                    <button className="aboutus-grid-button">więcej</button>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </Link>*/}
                    {/*    </div>*/}
                    {/*    */}
                    {/*</div>*/}




                    <div className="swiper">
                        <Swiper/>
                    </div>
                </div>

            </div>


            <div className="orly">
                <div className="photo-orly">
                    <img src={orly}/>
                </div>

                <div className="logo">
                    <img src={orlylogo}/>
                </div>
                <div className="text">
                    <p>
                        W 2023 roku firma LiveIn znalazła się w gronie przedsiębiorcy o <b>najwyższych ocenach</b> w Polsce!
                        <b> Plebiscyt Orły Nieruchomości</b> wyłania tych przedsiębiorców, którzy wyróżniają się <b>najwyższą jakością świadczonych usług na polskim rynku.</b>

                        Kapitułą oceniającą są sami klienci dzielący się swoją opinią na portalach społecznościowych, takich jak: Google Maps, Facebook  i innych stronach. Weryfikacja tak ogromnej ilości źródeł pozwoliła dotrzeć do prawie <b>miliona ocen klientów.</b>

                        Aby wyłonić wyłącznie najlepszych z branży na rynku, przebadano było ponad 65 tysięcy firm.
                        Potwierdza to świetną pozycję LiveIn na tle konkurencji, ale również sympatię i <b>zaufanie Klientów</b>, które zaskarbiliśmy sobie swoją codzienną pracą.

                    </p>
                </div>

            </div>


    </div>

    )
}

export default About;