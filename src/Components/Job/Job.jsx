import Agent from "./Agent/Agent";
import {Link, Route, Routes} from "react-router-dom";
import Assistant from "./Assistant/Assistant";
import './Jon.css';
import team from '../../assets/images/IMG_3848.jpg';

function Job(){
    return(

        <section className="job-wrapper">
        <div className="job-title">
            <h2>Dołącz się do naszego zespołu</h2>
            <p>Marzy Ci się praca w nieruchomościach? Zatrudniamy osoby na następne stanowiska.</p>
        </div>

        <div className="job-comp">

           <div className="team-photo"><img src={team}/></div>

            <div className="job-cards">
                <Link to="/agent">
                    <div className="agent-card">
                    <h3>Agent nieruchomości</h3>
                        <p>praca w sprzedaży</p>
                        <p>nielimitowane zarobki</p>
                        <p>kontakt z Klientem</p>
                    </div>
                </Link>
                <Link to="/assistant"><div className="agent-card">
                    <h3>Asystent działu nieruchomości</h3>
                    <p>praca biurowa</p>
                    <p>pomoc w formalnościch związanych z transakcjami</p>
                </div></Link>
            </div>

        </div>


        </section>
    )
}

export default Job;