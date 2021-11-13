import React from "react";
import Startrating from "./Startrating";
export default function Filter({searchMovie,searchRating,rating}){
    return(
        <div>
            <input type="search" placeholder="search Movie" onChange ={e=> searchMovie(e.target.value)}/>
            <Startrating searchRating={searchRating} rating={rating} edit={true} />
        </div>
    )

}