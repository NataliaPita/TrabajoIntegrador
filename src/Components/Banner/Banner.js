import React from 'react'
import './Banner.css'

const Banner = () => {
  return (  
  <div className='d-flex container-fluid container-slogan'>
        <div className="slogan">
            <h2 className="artesanos">Apoyá a los Artesanos locales!</h2>           
            <h2 className="artesanos"> <span>Descubrí las marcas y sus historias...</span></h2>
        </div>
        <button className="btn-sabores"> Nosotros </button>
  </div>
  ) 
}

export default Banner