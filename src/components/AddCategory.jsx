import React from 'react'

const AddCategory = ({ onNewCategory }) => {

    const [buscador, setBuscador] = React.useState('')

    const handleChange = (event) => {
        setBuscador(event.target.value)
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if (buscador.trim().length <= 1) {
            return;
        }
        // setCategories(categories => [...categories, buscador])
        onNewCategory(buscador.trim())
        setBuscador('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                id='categoriaNueva'
                onChange={handleChange}
                type="text"
                placeholder='Buscar gifs'
                value={buscador}
            />
        </form>
    )
}

export default AddCategory
