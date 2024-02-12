import './Reviews.css';
import {showAllReviews} from "../../data/store/reviewsReducer";
import {useSelector,useDispatch} from "react-redux";
import Onereview from "./Onereview/Onereview";

function Reviews (){
let reviewsUseSelector = useSelector(state=>state.reviews.reviews)
    console.log(reviewsUseSelector)
    let dispatch=useDispatch();
    return(
        <div className="reviews-comp">
            {
                reviewsUseSelector.map(el=><Onereview {...el}/>)
            }
        </div>
    )
}

export default Reviews;