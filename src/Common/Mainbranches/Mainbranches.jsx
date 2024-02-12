import './Mainbranches.css';
import {Link, NavLink} from "react-router-dom";
function Mainbranches(){
    return(
        <div className="sell-rent">
            <NavLink to="https://www.otodom.pl/pl/firmy/biura-nieruchomosci/livein-ID6339060?lang=&estate=ALL&transaction=SELL&market=ALL" target={"_blank"}>ZAKUP</NavLink>
           <NavLink to="https://www.otodom.pl/pl/firmy/biura-nieruchomosci/livein-ID6339060?lang=&estate=ALL&transaction=RENT&market=ALL" target={"_blank"}> WYNAJEM</NavLink>
            <Link to="/managing">ZARZĄDZANIE</Link>
        </div>
    )
}

export default Mainbranches;