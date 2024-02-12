// import {useSelector,useDispatch} from "react-redux";
// import {showAllData} from "../data/store/estateReducer";
import {useEffect} from "react";
import {useState} from "react";
import lusinahousewindows from "../../assets/images/IMG_6851.jpg";
import loftapt from "../../assets/images/IMG_8674.jpg";
import lusinahouse from "../../assets/images/IMG_6835.jpg";

import './Estates.css'
import {Link, NavLink} from "react-router-dom";
import Mainbranches from "../../Common/Mainbranches/Mainbranches";

function Estates(){
    // let estatesuse = useSelector(state=>state.estate.estates);
    // let dispatch = useDispatch();
    //
    // useEffect(() => {
    //     fetch('https://api.asariweb.pl/apiSite/listing?userId=44268&loginToken=T116BUqfZUuhr86emX1ACaNJl6YIM6PSB71tPIpS&id=9583056')
    //         .then(response=>response.json())
    //         .then(json=>{
    //             dispatch(showAllData(json)),
    //             console.log(json)
    //             }
    //         )
    //         },[])

// , {
//         method: 'GET',
//             withCredentials: true,
//             crossorigin: true,
//             mode: 'no-cors',
//             headers: {
//             'Access-Control-Allow-Origin': '*',
//         }
//     }


//
//     let url = 'https://api.asariweb.pl/apiSite/listing?userId=44268&loginToken=T116BUqfZUuhr86emX1ACaNJl6YIM6PSB71tPIpS&id=9583056'
//     const [data,setData]=useState({})
//     useEffect(() => {
//         fetch(url)
//             .then(response=>response.json())
//             .then(json=>setData(json))
//     }, []);
// console.log(data)


    return(
        // <div >{data.success}</div>
        <div className="estates-comp">
            <div className="estates-text">
                <p>Działalność naszej agencji skupia się w szczególności na wynajmie, zarządzaniu i sprzedaży nieruchomości zlokalizowanych w centralnych dzielnicach miasta Kraków.
                    Naszym priorytetem jest świadczenie wysokiej jakości usług i budowanie długotrwałych relacji z Klientami.</p>
            </div>


            <div className="estates-grid">

                <NavLink to="https://www.otodom.pl/pl/firmy/biura-nieruchomosci/livein-ID6339060?lang=&estate=ALL&transaction=SELL&market=ALL" target={"_blank"}>
                    <div className="buy-grid">
                        <div className="estates-img"><img className="img-in-estates" src={lusinahouse}/></div>

                        <div className="estates-grid-text">
                            <div className="estates-title"><h2>ZAKUP & SPRZEDAŻ</h2></div>
                            <p>Poszukując nieruchomości na zakup w Krakowie, należy określić podstawowe preferencje, takie jak: <b>lokalizacja, powierzchnia, infrastruktura, standard, budżet.</b> Ale nie mniej ważne są <b>kwestie prawne, zdolność kredytowa, potencjał inwestycyjny.</b> Zalecamy skorzystać z profesjonalnego wsparcia doświadczonego biura nieruchomości, co pomoże skrócić czas poszukiwania i zapewni bezpieczeństwo transakcji.

                                Zapraszamy do zapoznania się z naszą bogatą ofertą nieruchomości w atrakcyjnych dzielnicach Krakowa!


                               </p>
                        <button className="estates-grid-button">WIĘCEJ</button>
                        </div>
                    </div>
                </NavLink>

                <NavLink to="https://www.otodom.pl/pl/firmy/biura-nieruchomosci/livein-ID6339060?lang=&estate=ALL&transaction=RENT&market=ALL" target={"_blank"}>
                    <div className="rent-grid">
                        <div className="estates-img"><img className="img-in-estates" src={loftapt}/></div>

                        <div className="estates-grid-text">
                            <div className="estates-title"><h2>WYNAJEM</h2></div>
                            <p>
                                Przy wynajmie ważnym jest skupić się na <b>lokalizacji, ilości osobnych pokoi, dostępnie do sklepów, komunikacji i stref zielonych.</b> Ważne są kwestie prawne, dobrze skonstruowana umowa najmu, <b>posiadanie adresu dla najmu okazjonalnego, zakup ubezpieczenia i rzetelne przygotowanie protokołu zdawczo-odbiorczego,</b> by zapewnić bezpieczeństwo najmu.
                                Pomożemy znaleźć wymarzoną nieruchomość lub rzetelnego Najemcę i poprowadzimy cały proces od A do Z.
                            </p>
                            <button className="estates-grid-button">WIĘCEJ</button>

                        </div>
                    </div>
                </NavLink>

                <Link to="/managing">
                    <div className="managing-grid">
                        <div className="estates-img"><img className="img-in-estates" src={lusinahousewindows}/></div>

                        <div className="estates-grid-text">
                            <div className="estates-title"><h2>ZARZĄDZANIE</h2></div>
                            <p>Zarządzanie apartamentami i domami na wynajem w Krakowie. Kompleksowa obsługa nieruchomości: <b>dopasowanie odpowiedniej ceny, poszukiwanie, weryfikacja i ubezpieczenie najemcy, dokumentacja, rozliczenia,
                                kwestie prawne, jesteśmy pierwsi do kontaktu z najemcą, naprawa usterek i duże naprawy, najem okazjonalny</b>. Odebranie lokalu: kluczy,
                                spisanie protokołu zdawczo - odbiorczego, dokumentacja zdjęciowa  ew. uszkodzeń, rozliczenie niedopłaty lub nadpłaty mediów, <b>kosztorys ew. uszkodzeń i podsumowanie do potrącenia kaucji,</b> sprzątanie lokalu.
                            </p>
                            <button className="estates-grid-button">WIĘCEJ</button>

                        </div>
                    </div>
                </Link>

            </div>

        </div>
    )
}

export default Estates;
//
// userId:44268
// siteToken:T116BUqfZUuhr86emX1ACaNJl6YIM6PSB71tPIpS