import React, {useState}from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
//const categories=['One Punch','Samurai X','Dragon Ball'];
const GifExpertApp=()=>{
    const [categories, setCategories] = useState(['Dragon Ball']);
    // const handleAdd=()=>{
    //     //setCategories([...categories,'Naruto']);
    //     setCategories(cats=>[...cats,'Naruto']);
    // }
    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr></hr>
            {/* <button onClick={ handleAdd }>Agregar</button> */}
            <ol>
                {
                    categories.map( category => (
                        <GifGrid
                            key={ category }
                            category={ category }
                        />
                    ))
                }
            </ol>
        </>
    );
}
export default GifExpertApp;