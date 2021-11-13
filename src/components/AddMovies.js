import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";


    export default function AddMovies({setShowForm,setMovies,AddNewMovies}){
    const[newMovies,setNewMovies]= useState({
        id:uuidv4(),
        Title:"",
        img:"",
        type:"",
        année:"",
        rating:1,
    });
    const handleChange = (e) =>{
        setNewMovies({...newMovies,[e.target.name]: e.target.value})
    }
    const handleSubmit = e =>{
        e.preventDefault();
        AddNewMovies(newMovies)
        
        setShowForm(false);
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title</label>
                    <input type="text" name="title" onChange={handleChange}/>
                </div>
                <div>
                    <label>Image URL</label>
                    <input type="text" name="image" onChange={handleChange}/>
                </div>
                <div>
                    <label>Type</label>
                    <input type="text"name="type" onChange={handleChange}/>
                </div>
                <div>
                    <label>année</label>
                    <input type="number"name="année" onChange={handleChange}/>
                </div>
                <div>
                    <label>rating</label>
                    <input type="number" min="1" max="5"/>
                </div>
                <input type ="submit" value="AddMovie"/>
                <input type="reset" value="Cancel" onClick={() => setShowForm(false)}/>
            </form>
        </div>
    )
}