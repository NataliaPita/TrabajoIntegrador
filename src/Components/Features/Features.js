 import './Features.css';
 import FeatureItems from './FeatureItems';
 import FeatureImagen from '../Assets/cafeFeature.jpg';

 const featureTitulo = " Descubre el mundo del café";
 const featureSubtitulo = "Nuestra misión es ofrecer a nuestros clientes una experiencia excepcional en el mundo del café, proporcionando productos de alta calidad y un servicio personalizado."

 const Features = () => {
  
  return (
    <>
    < section className='feature'>
      <div>
        <h3 className="feature-title">{featureTitulo}</h3>
        <h4 className='feature-subt'>{featureSubtitulo}</h4>      
          <FeatureItems />
      </div> 
      <div>
        <img src = {FeatureImagen} alt='imagen-cafe' className='feature-imagen'/>
      </div> 
    </section>     
    </>
  )
}

export default Features