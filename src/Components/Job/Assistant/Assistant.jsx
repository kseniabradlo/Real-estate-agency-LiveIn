import {Link} from "react-router-dom";
import './Assistant.css';
import Back from "../../../Common/Backtoprevious/Back";
import whitebedwindow from '../../../assets/images/DSC_2133.jpg';
import greystudiosalon from '../../../assets/images/IMG_0016.jpg';
import loftkitchen from '../../../assets/images/IMG_8676.jpg';

function Assistant(){
    return(
        <div className="agent-comp">
            <Back/>

            <h2 className="agent-title">Asystent działu nieruchomości</h2>

            <div className="grid-main">

                <div className="offering">
                    <h2 className="div-title">Oferujemy</h2>

                    <img src={whitebedwindow}/>

                    <div className="divofdivs">
                        <ul>
                            <li>Zatrudniamy osoby bez doświadczenia - zapewniamy trening wprowadzający w rynek nieruchomości: teoria, analiza rynku, nawyki komunikacyjne i sprzedażowe.</li>
                            <li>Zatrudnienie na podstawie umowy zlecenia (praca dla studentów) lub b2b</li>
                            <li>Biuro w samym centrum przy ul. Świętokrzyska,12</li>
                            <li>Możliwość rozwoju zawodowego i stałego podnoszenia kwalifikacji</li>
                            <li>Miłą i przyjazną atmosferę w pracy</li>
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

                    <img src={greystudiosalon}/>


                    <div className="divofdivs">
                        <ul>
                            <li>Odpowiadanie na e-maile i listy</li>
                            <li>Pomoc w procesie formalności związanych z transakcjami</li>
                            <li>Zarządzanie zapasami biurowymi i zamawianie niezbędnych materiałów</li>
                            <li>Aktualizacja ofert na stronie internetowej biura nieruchomości</li>
                            <li>Wykonanie zdjęć nieruchomości</li>
                            <li>Sporządzanie umów, ofert, raportów i innych dokumentów związanych z transakcjami nieruchomościami</li>
                            <li>Aktualizacja i utrzymywanie porządku w dokumentacji biurowej</li>

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

                    <img src={loftkitchen}/>


                    <div className="divofdivs">

                        <ul>
                            <li>Znajomość obsługi komputera i pakietu biurowego (Word, Excel, Outlook)</li>
                            <li>Umiejętność skrupulatnego wykonywania obowiązków</li>
                            <li>Doskonała organizacja pracy, punktualność, wysoka kultura osobista</li>
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

export default Assistant;