import React, { useState } from 'react';
import CloseButton from 'react-bootstrap/CloseButton';
import './Warning.css'


const Warning = () => {

  const [warningVisible, setWarningVisible] = useState (true);

  const handleButtonClick = () => {
    setWarningVisible(false);
  };

  return (
    <>
      {warningVisible && (
        <div className='container-fluid warning-style'>
          <div className='row'>
            <strong className='col-11'>
              Delivery Gratis con compra mayor a $3000. Regalo con compra mayor a $5000
            </strong>
            <div className='col-1 warning-button-style align-self-center'>
              <CloseButton onClick={handleButtonClick}/>
            </div>
          </div>
        </div>   
      )}       
    </>   
  )
}

export default Warning