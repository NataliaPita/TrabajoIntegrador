import React from 'react'
import './SocialMedia.css'

const SocialMedia = () => {
  return (
    <div className='container-fluid social-contenedor'>
      <div className="row">
        <h2 className='amigo'>Contale a un amigo</h2>
          <div className="col-12 d-inline-flex justify-content-center social-icons">
            <img src="https://images2.imgbox.com/7a/d6/oU3v8Lcf_o.png" alt="Facebook"/>
            <img src="https://images2.imgbox.com/2c/08/ebIMPWIu_o.png" alt="Instagram"/>
            <img src="https://images2.imgbox.com/cb/db/8Och4elE_o.png" alt="Twitter"/>
            <img src="https://images2.imgbox.com/26/21/cm3YTwvd_o.png" alt="WhatsApp"/>
            <img src="https://images2.imgbox.com/36/a1/NOb1wyGb_o.png" alt="Messenger"/>
            <img src="https://images2.imgbox.com/96/e0/Sb4DzyRg_o.png" alt="Tik-Tok"/>
          </div>
      </div> 
    </div>
  )
}

export default SocialMedia