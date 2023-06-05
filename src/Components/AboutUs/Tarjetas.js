import './Tarjetas.css'
const Card = (props ) => {
    return (
        <figure className='cardsAbout-us' >
            <figcaption className='contenedor-tarjetas'>
                <h3 className='titulo-tarjetas'>{props.card.titulo}</h3>
                <p className='parrafo-tarjetas'> {props.card.descripcion}</p>
            </figcaption>
        </figure>
    )
}
export default Card

