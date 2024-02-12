import lusinahousewindow from '../../assets/images/IMG_6851.jpg';
import './Managing.css';
import wycena from '../../assets/images/pobrane.png';
import homestaging from '../../assets/images/homest.jpeg';
import person from '../../assets/images/people.png';
import docs from '../../assets/images/docs.png';
import efforts from '../../assets/images/eff.jpeg';


function Managing(){
        let stylemnging={
                backgroundImage:"url("+lusinahousewindow+")",
                backgroundRepeat:"no-repeat",
                backgroundSize:"cover",
                backgroundPosition:"50% 50%",
                backgroundAttachment:"scroll",
                zIndex:"1"
        };
    return(
        <div  className="managing-comp">
                <div style={stylemnging}>
                <div  className="managing-comp-main">

                        <div className="managing-comp-main-intro">
                           <h2>ZARZĄDZANIE</h2>
                           <h2>POWIEŻ NAM SWOJĄ NIERUCHOMOŚĆ</h2>

                           <p>Zarządzanie najmem - to kompleksowa usługa, która obejmuje całą opiekę nad nieruchomością od A do Z, by wziąć na siebie wszystkie obowiązki z tym związane. Przygotowujemy mieszkanie do wynajmu, wyceniamy, szukamy i weryfikujemy najemcę, opiekujemy się najmecą i mieszkaniem w trakcie najmu.</p>
                        </div>

                        <div className="managing-comp-main-grid">
                                <div>
                                        <img src={homestaging}/>
                                        <p>wystrój mieszkania i wykonanie profesjonalnej sesji zdjęciowej</p>
                                </div>


                                <div>
                                        <img src={wycena}/>
                                        <p>wycena najmu, usługi marketingowe</p>
                                </div>

                                <div>
                                        <img src={person}/>
                                        <p>prezentacja mieszkania, poszukiwanie i weryfikacja Najemcy</p>
                                </div>

                                <div>
                                        <img src={docs}/>
                                        <p>dokumentacja, notariusz, tłumacz, spisanie protokołu, zaświadczenie o zarobkach Najemcy</p>
                                </div>

                                <div>
                                        <img src={efforts}/>
                                        <p>pierwsi do kontaktu z Najemcą, naprawianie usterek, rozliczenie kaucji</p>
                                </div>

                        </div>

                        <div className="down-title"><p >LiveIn - agencja nieruchomości, której można zaufać.</p></div>
                </div>
                </div>

                <div className="managing-comp-list">

                        <h2>CO OBEJMUJE ZARZĄDZANIE</h2>
                        <ul>
                                <li><b>Home staging</b> ( przygotowanie lokalu do sesji zdjęciowej) i sesja zdjęciowa lokalu,</li>

                                <li>Zestawienie cen lokali konkurencyjnych i dopasowanie odpowiedniej ceny zgodnie z Państwa akceptacją i sytuacją rynkową,</li>
                                <li><b>Usługi marketingowe,</b></li>
                                <li><b>Poszukiwanie najemcy</b> zgodnie z Państwa wytycznymi ( np. bez zwierząt, bez obcokrajowców - oczywiście im więcej wymagań tym bardziej może wydłużyć się proces znalezienia najemcy),</li>
                                <li>Prezentowanie nieruchomości,</li>
                                <li><b>Weryfikacja Najemcy</b> z uzyskaniem certyfikatu zewnętrznej Firmy(sprawdzenie w bazach danych dłużników oraz sprawdzenie przychodów) lub uzyskanie potwierdzenia o zarobkach,</li>
                                <li><b>Najem okazjonalny (nawet dla obcokrajowców)</b>, załatwiamy wszystkie formalności u Notariusza dot. aktu poddania się egzekucji:
                                    <ul>
                                            <li>Oświadczenie właściciela lokalu zatępczego,</li>
                                            <li>Oświadczenie Najemcy,</li>
                                            <li>Odpowiednia konstrukcja umowy,</li>
                                            <li>Tłumacz przysięgły w przypadku obcokrajowców,</li>
                                    </ul>
                                </li>
                                <li><b>Ubezpieczenie Najemcy</b> na szkody powstałe w lokalu do 50 000 PLN,</li>
                                <li>Przekazanie lokalu zgodnie z protokołem zdawczo-odbiorczym w tym:
                                        <ul>
                                                <li>Przekazanie kluczy,</li>
                                                <li>Dokumentacja zdjęciowa,</li>
                                                <li>Spisanie liczników,</li>
                                        </ul>
                                </li>

                                <li>Obsługa Mieszkania min:
                                        <ul>
                                                <li><b>Pierwszy kontakt z najemcą,</b> nie zawraca Państwu głowy z każdym tematem np. obsługi mieszkania,</li>
                                                <li><b>Obsługa usterek i drobne naprawy</b>, np. cieknący kran, uszkodzona roleta, uszkodzony sprzęt AGD, ( oczywiście zgodnie z kosztorysem zaakceptowanym przez Państwa),</li>
                                                <li>Konieczne naprawy po zakończonym najmie, np. malowanie lokalu zgodnie z przedstawionym kosztorysem,</li>
                                                <li><b>Rozliczanie liczników</b> tj. wpisywanie w system aktualnego zużycia mediów,</li>
                                                <li>Wizyta w lokalu co dwa miesiące w celu sprawdzenia stanu technicznego lokalu oraz spisania liczników,</li>

                                        </ul>
                                </li>

                                <li>Odebranie lokalu:
                                        <ul>
                                                <li>Odebranie kluczy,</li>
                                                <li>Spisanie protokołu zdawczo - odbiorczego,</li>
                                                <li>Dokumentacja zdjęciowa  ew. uszkodzeń,</li>
                                                <li>Kosztorys ew. uszkodzeń i podsumowanie do potrącenia kaucji,</li>
                                                <li>Sprzątanie lokalu jeżeli nie został posprzątany przez najemcę i potrącenie z kaucji, z reguły 10PLN/m2 sprzątania (wpisane w umowie),</li>
                                        </ul>
                                </li>
                                <li><b>Poszukiwanie następnych najemców zapewniając ciągły przychód bez przestojów,</b></li>
                                <li>Płatność tylko 10% miesięcznego czynszu + VAT w miesiącach, w których mieszkanie pracuje np. Jak mieszkanie nie jest wynajęte nie pobieramy opłaty,</li>
                                <li>Windykacja należności możliwa za pomocą naszych prawników.</li>
                        </ul>

                </div>
        </div>
    )
}

export default Managing;