import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GrifGrid } from './components/GrifGrid';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = () => {
    //     setCategories([...categories, 'Ranma']);
    // }
    
    return (
        <>
            <h2>GifExpertApp</h2>
            {/* <button onClick={handleAdd}>Agregar</button> */}
            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>
                {
                    categories.map(category => (
                            <GrifGrid key={category} category={category} />
                    ))
                }
            </ol>
        </>
    )
}
