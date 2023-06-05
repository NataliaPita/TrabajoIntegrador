import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <header className ='container-fluid'>    
      <div className="row contenedor-menu">
      <div className="col-2">
          <img className='logo1'src={require('./Images/Logo1.png')} alt="Logo"/>
        </div>
        <nav className="col-10 d-inline-flex menu">
          <ul>
            <li><strong>Ocasiones</strong></li>
            <li>Trabajo en casa</li>
            <li>Desayuno</li>
            <li>Vida vegana</li>
          </ul>
          <ul>
            <li><strong>Categorías</strong></li>
            <li>Desayuno</li>
            <li>Saludables</li>
            <li>Para golosos</li>                  
          </ul>
          <ul>
            <li><strong>Marcas</strong></li>
            <li>Bodum</li>
            <li>Ruffo</li>
            <li>Resolute</li>
          </ul>
          <ul>
            <li><strong>Sobre nosotros</strong></li>
            <li>Nuestra historia</li>
            <li>Fotos</li>
            <li>Extras</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Footer
