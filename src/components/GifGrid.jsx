import PropTypes from 'prop-types';
import GifItem from "./GifItem";
import useFetchGifs from "../hooks/useFetchGifs";

const GifGrid = ({ categoria }) => {

    const { images, isLoading } = useFetchGifs(categoria)

    return (
        <>
            <h3>{categoria}</h3>
            {isLoading && <h2>Cargando...</h2>}
            <div className="card-grid">
                {images.map(img => (
                    <GifItem {...img} key={img.id} />
                )

                )}
            </div>
        </>
    )
}

GifGrid.propTypes = {
    categoria: PropTypes.string.isRequired,
}

GifGrid.defaultProps = {
    categoria: 'hamburguesas'
}

export default GifGrid;