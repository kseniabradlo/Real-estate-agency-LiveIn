import {Link} from "react-router-dom";
import './Agent.css';
import Back from "../../../Common/Backtoprevious/Back";
import arrow from '../../../assets/images/2812180-200.png';
import loftkitchen from "../../../assets/images/IMG_8673.jpg";
import navywindow from '../../../assets/images/IMG_9919.jpg';
import whitesalontv from '../../../assets/images/IMG_0186.jpg';

function Agent(){
    return(
        <div className="agent-comp">
            <Back/>

            <h2 className="agent-title">Agent nieruchomości</h2>

            <div className="grid-main">

                <div className="offering">
                    <h2 className="div-title">Oferujemy</h2>

                    <img src={loftkitchen}/>

                    <div className="divofdivs">
                        <ul>
                            <li>Zatrudniamy osoby bez doświadczenia - zapewniamy trening wprowadzający w rynek nieruchomości: teoria, analiza rynku, nawyki komunikacyjne i sprzedażowe.</li>
                            <li>Zatrudnienie na podstawie umowy zlecenia lub b2b</li>
                            <li>Nielimitowane zarobki dzięki prowizyjnemu systemowi wynagrodzeń</li>
                            <li>Biuro w samym centrum przy ul. Świętokrzyska,12</li>
                            <li>Pracę na prestiżowych, nowoczesnych nieruchomościach</li>
                            <li>Możliwość rozwoju zawodowego i stałego podnoszenia kwalifikacji</li>
                        </ul>
                    {/*<div>Zatrudniamy osoby bez doświadczenia - zapewniamy trening wprowadzający w rynek nieruchomości: teoria, analiza rynku, nawyki komunikacyjne i sprzedażowe. Wsparcie potreningowe</div>*/}
                    {/*<div>Zatrudnienie na podstawie umowy zlecenia (praca dla studentów) lub b2b</div>*/}
                    {/*<div>Nielimitowane zarobki dzięki prowizyjnemu systemowi wynagrodzeń</div>*/}
                    {/*<div>Biuro w samym cetrum przy ul. Świętokrzyska,12</div>*/}
                    {/*<div>Pracę na prestiżowych, nowoczesnych nieruchomościach</div>*/}
                    {/*<div>Możliwość rozwoju zawodowego i stałego podnoszenia kwalifikacji</div>*/}
                    </div>
                </div>

                <div className="duties">
                    <h2 className="div-title">Na czym polega praca</h2>

                    <img src={navywindow}/>


                    <div className="divofdivs">
                        <ul>
                            <li>Poszukiwanie nieruchomości według wymagań klienta</li>
                            <li>Obsługa i nawiązywanie trwałych relacji z właścicielami oraz poszukującymi</li>
                            <li>Prezentowanie nieruchomości klientom</li>
                            <li>Tworzenie ofert nieruchomości na sprzedaż oraz wynajem</li>
                            <li>Monitorowanie rynku nieruchomości i ich pozyk</li>
                        </ul>
                    {/*<div>Poszukiwanie nieruchomości według wymagań klienta</div>*/}
                    {/*<div>Obsługa i nawiązywanie trwałych relacji z właścicielami oraz poszukującymi</div>*/}
                    {/*<div>Prezentowanie nieruchomości klientom</div>*/}
                    {/*<div>Tworzenie ofert nieruchomości na sprzedaż oraz wynajem</div>*/}
                    {/*<div>Monitorowanie rynku nieruchomości i ich pozyk</div>*/}
                    </div>
                </div>

                <div className="qualifies">
                    <h2 className="div-title">Niezbędne kompetencje</h2>

                    <img src={whitesalontv}/>


                    <div className="divofdivs">

                        <ul>
                            <li>Wysoki poziom nawyków komunikatywnych</li>
                            <li>Angielski na poziomie komunikatywnym</li>
                            <li>Doskonała organizacja pracy, punktualność, wysoka kultura osobista</li>
                            <li>Ambitność i chęć do rozwoju</li>
                        </ul>
                    {/*<div>Wysoki poziom nawyków komunikatywnych</div>*/}
                    {/*<div>Angielski na poziomie komunikatywnym</div>*/}
                    {/*<div>Doskonała organizacja pracy, punktualność, wysoka kultura osobista</div>*/}
                    {/*<div>Ambitność i chęć do rozwoju</div>*/}
                    </div>
                </div>

            </div>
            <Back/>
            <div className="cv">Zainteresowane osoby prosimy o przesłanie CV na ksenia@livein-estates.pl</div>

        </div>
    )
}

export default Agent;