import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Btn.css';
import {CounterContext} from '../../Context/CounterContext';
import React, { useState , useContext } from 'react';

const Btn = (props) => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const {incrementarContador} = useContext(CounterContext)

  return (
    <>
      <button className="quickShop" onClick={handleShow}>
        Comprar
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Confirmar Compra </Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal-body d-flex'>  
          Desea agregar este producto a su carrito?
          <img className='modal-images' src= {require(`./imagen cards/${props.item.imagen}.jpg`)} alt="cafe" />
          Producto: {props.item.nombre}
          <br></br>
          Precio: {props.item.precio}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" className = "accept-button"onClick= { () => {
            const funcion1 = handleClose;
            const funcion2 = incrementarContador;
            
            funcion1();
            funcion2();
            }
          }
          >
            Agregar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Btn