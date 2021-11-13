import { useState } from 'react';
import StarRatingComponent from 'react-rating-stars-component';

export default function Startrating({rating,searchRating, edit}){
    // const[rating, setrating]=useState(1);

    //  const onStarClick = (NextValue) => {
        //   setrating(NextValue);
      
    // };
    
    return (
    <StarRatingComponent 
          name="rate" 
          count={5}
          edit={edit}
          value={rating}
        onChange={(num)=> searchRating && searchRating  (num)}
        />
     );
    }  