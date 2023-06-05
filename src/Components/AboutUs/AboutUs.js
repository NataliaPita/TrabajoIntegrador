import React from 'react'
import CardList from './CardList'
import './AboutUs.css'
const cardsDB = [
  {
    id : 1,
    titulo: "Descubrí las variedades", 
    descripcion : "Descubrí nuevos sabores para preparar un café único. También averigua de donde proviene y quién lo hace."  
  }, 
  {
      id : 2,
      titulo : "Comprar al por mayor",
      descripcion : "Ofrecemos formatos en granos, cajas de variedades y cajas de descubrimiento para que pueda ahorrar dinero comprando a precios mayoristas."  
    }, 
    {
      id : 3,
      titulo : "Apoya a tu comunidad ",
      descripcion : "Al comprar a nuestros emprendedores estas ayudando a crecer a la producción y economía local."  
    },  
    {
      id : 4,
      titulo : "Disfruta de la mejor calidad", 
      descripcion : " Ofrecemos alimentos de gran sabor, todos los alimentos naturales que son mejores para vos."  
    }, 
] 
const AboutUs = () => {
  return (
    <div className='div_container_section'>
      <h2 className='h2title_section'> ¿Por qué elegir la calidad  premium de nuestros productos?</h2>
      <>
      <CardList
      data= {cardsDB}
      />
      </>
      
    </div>
  )
}

export default AboutUs