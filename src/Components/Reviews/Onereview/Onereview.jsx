import './Onereview.css';
import stars from '../../../assets/images/5-star-rating-review-star-transparent-free-png.webp';

function Onereview({user,text}){
    return(
        <div className="onereview-comp">
            <p className="onereview-user"><b>{user}</b></p>
            <img src={stars}/>
            <p className="onereview-text">{text}</p>
        </div>
    )
}

export default Onereview;