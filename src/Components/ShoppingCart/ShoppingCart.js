import React, { useContext } from 'react';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import ShoppingCartIcon from './Images/ShoppingCartIcon.svg'
import {CounterContext} from '../../Context/CounterContext'
import './ShoppingCart.css'

const ShoppingCart = () => {
  const { contador } = useContext(CounterContext);

  return (
    <div>
      <Button variant='outline-dark'className ='shopping-cart-button-style d-flex justify-content-center align-items-center rounded-circle'>
        <Image className ='shopping-cart-style'src={ShoppingCartIcon}/>
          <div className='counter-style d-flex align-items-center justify-content-center'>{contador}</div>
        </Button>
    </div>
  )
}

export default ShoppingCart;