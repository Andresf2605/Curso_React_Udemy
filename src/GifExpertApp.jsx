import React, { useState } from 'react'
import {AddCategory,GifGrid} from './components'


const GifExpertApp = () => {

    const [categories, setCategories] = React.useState(['one punch']);

    const onAddCategory = (newCategory) => {
        if (categories.find(item => item.toLowerCase() === newCategory.toLowerCase())) return;
        // if (categories.includes(newCategory)) return;

        setCategories(categories => [newCategory,...categories])
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory
                // setCategories={setCategories} 
                onNewCategory={(value) => onAddCategory(value)}
            />

            {
                categories.map(categoria => {
                    return (
                        <GifGrid
                            categoria={categoria}
                            key={categoria}
                        />
                    )
                }
                )
            }

        </>
    )
}

export default GifExpertApp
