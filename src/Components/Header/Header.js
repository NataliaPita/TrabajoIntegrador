import React from 'react'
import Warning from '../Warning/Warning.js'
import ShoppingCart from '../ShoppingCart/ShoppingCart.js'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Dropdown from 'react-bootstrap/Dropdown';
import './Header.css'
import SearchIcon from './Images/SearchIcon.svg'
import Avatar from './Images/Avatar.png'

const screen = window.screen.width;

const Header = () => {
  return (
    <div>
      <Warning/> 
      <header className='container-fluid header-style'>
        <div className='row'>
          <div className='col-1'>
            <Image className='logo-style d-inline-flex align-items-center justify-content-center' src={require('./Images/Logo1.png')}/>
          </div>           
          {screen < 992 ? (
            <div className='col-6 d-inline-flex menu-style'> 
            <Dropdown>
            <Dropdown.Toggle className = 'd-inline-flex align-items-center dropdown-style' variant='outline-white' id="dropdown-basic">
              Menú
            </Dropdown.Toggle>
            <Dropdown.Menu className='dropdown-menu-style'>
              <Dropdown.Item className='d-flex align-items-center dropdown-item-style'>                
                <details>
                  <summary>
                      Categorias 
                  </summary>
                </details>
              </Dropdown.Item>
              <Dropdown.Divider/>
              <Dropdown.Item className='d-flex align-items-center dropdown-item-style'>
                <details>
                  <summary>
                      Locales 
                  </summary>
                </details>
              </Dropdown.Item>
              <Dropdown.Divider/>
              <Dropdown.Item className='d-flex align-items-center dropdown-item-style'>
                <details>
                  <summary>
                      Paquetes y Regalos 
                  </summary>
                </details>
              </Dropdown.Item>
              <Dropdown.Divider/>
              <Dropdown.Item className='d-flex align-items-center dropdown-item-style'>
                  Nuestras Marcas 
              </Dropdown.Item>
              <Dropdown.Divider/>
              <Dropdown.Item className='d-flex align-items-center dropdown-item-style'>
                  Sobre Nosotros 
              </Dropdown.Item>
            </Dropdown.Menu>       
          </Dropdown>       
          </div>
          ) : (
            <div className='col-9 d-inline-flex menu-style'>
                <details>
                  <summary>
                    <strong>
                      Categorias 
                    </strong>
                  </summary>
                </details>
                <details>
                  <summary>
                    <strong>
                      Locales 
                    </strong>
                  </summary>
                </details>
                <details>
                  <summary>
                    <strong>
                      Paquetes y Regalos 
                    </strong>
                  </summary>
                </details>
                <strong>
                  Nuestras Marcas 
                </strong> 
                <strong>
                  Sobre Nosotros 
                </strong> 
              </div>)}                        
          { screen < 992 ? (
            <div className='col-5 d-inline-flex align-items-center icons-container-style'>
            <Button variant='outline-dark'className='search-avatar-buttons-style d-flex align-items-center justify-content-center rounded-circle'><Image className='search-avatar-style' src={SearchIcon}/></Button>            
            <Button variant='outline-dark'className='search-avatar-buttons-style d-flex align-items-center justify-content-center rounded-circle'><Image className='search-avatar-style' src={Avatar}/></Button>   
            <ShoppingCart/>
          </div>
          ) : (<div className='col-2 d-inline-flex align-items-center icons-container-style'>
                <Button variant='outline-dark'className='search-avatar-buttons-style d-flex align-items-center justify-content-center rounded-circle'><Image className='search-avatar-style' src={SearchIcon}/></Button>            
                <Button variant='outline-dark'className='search-avatar-buttons-style d-flex align-items-center justify-content-center rounded-circle'><Image className='search-avatar-style' src={Avatar}/></Button>   
                <ShoppingCart className= "carro-suma"/>
              </div>)}                       
        </div>
      </header>        
    </div>
  )
}

export default Header