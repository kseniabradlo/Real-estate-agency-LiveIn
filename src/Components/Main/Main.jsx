import './Main.css';
import video from '../../assets/video/coverr-a-glass-building-on-lisbon-street-645-1080p.mp4';
import grzegorz from '../../assets/images/IMG_3848.jpg';
import orly from "../../assets/images/orlySolo.png";
import orlylogo from '../../assets/images/2023-nieruchomosci400px.png';
import Swiper from '../../Common/Swiper/Swiper';
import {NavLink,Link} from "react-router-dom";
import Backtotop from "../../Common/Backtotop/Backtotop";
import Mainbranches from "../../Common/Mainbranches/Mainbranches";

function Main(){
    return(
        <div className="main-comp">
            <section className="video">
                <video className="video_media" src={video} autoPlay muted loop></video>

                <div className="videotextcontainer">
                    <h2 className="videotitle">Zmieniamy jakość nieruchomości w Krakowie</h2>
                </div>
            </section>

            <div className="grzegorz-and-mission">

                <div className="grzegorz-div">
                    <img className="grzegorz-photo" src={grzegorz}/>
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
                    <Mainbranches/>
                <div className="mission">

                    <p>Działalność naszej agencji skupia się w szczególności na <b>sprzedaży, zarządzaniu i wynajmie</b> nieruchomości zlokalizowanych w centralnych dzielnicach miasta <b>Kraków</b>.
                    Naszym priorytetem jest świadczenie <b>wysokiej jakości usług</b> i budowanie długotrwałych relacji z Klientami.</p>
                </div>


                    {/*<div className="sell-rent">*/}
                    {/*    <div><NavLink to="https://www.otodom.pl/pl/firmy/biura-nieruchomosci/livein-ID6339060?lang=&estate=ALL&transaction=SELL&market=ALL" target={"_blank"}>ZAKUP</NavLink></div>*/}
                    {/*    <div><NavLink to="https://www.otodom.pl/pl/firmy/biura-nieruchomosci/livein-ID6339060?lang=&estate=ALL&transaction=RENT&market=ALL" target={"_blank"}>WYNAJEM</NavLink></div>*/}
                    {/*    <div><Link to="/managing">ZARZĄDZANIE</Link></div>*/}
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
export default Main;