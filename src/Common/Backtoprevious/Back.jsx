import {Link} from "react-router-dom";
import './Back.css';
import arrow from "../../assets/images/2812180-200.png";

function Back(){
    return(
        <div className="back">
            <Link to="/job"><img className="arrow-img" src={arrow}/></Link>
        </div>
    )
}

export default Back;