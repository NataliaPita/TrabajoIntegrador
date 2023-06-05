import React from 'react';
import Cards from '../Cards/Cards.js';
import './Products.css';

const Products = (props) => {

  return (
    <div className='venta'>
      <h1 className='titulo'> Nuestros productos </h1>
      <p className='ofertas'> Ofertas Especiales!</p>
      <section className='productos'>
        {
          props.data.map(item => <Cards key={item.id} card={item}/>)
        }
      </section>
    </div>
  )
}

export default Products