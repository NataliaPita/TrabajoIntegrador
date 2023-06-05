import Btn from './Btn.js';
import './Cards.css';


const Cards = (props) => {
  return (
    <figure className="cards">
      <div className='contenedor-card'>
        <img className='tarjetas' src= {require(`./imagen cards/${props.card.imagen}.jpg`)} alt="cafe" />
      </div>
      <figcaption className='texto-tarjetas'>
        <h1 className='nombre-card'> {props.card.nombre}</h1>
        <p className='precio-product'>{props.card.precio}</p>
      </figcaption>
      <Btn item={props.card}/>
    </figure>
  )
}
export default Cards