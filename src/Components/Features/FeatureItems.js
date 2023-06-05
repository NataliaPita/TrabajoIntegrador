import {BsCheckCircleFill} from "react-icons/bs";

const data= [
  { 
    id:1,    
    text:" Nos esforzamos por ser el destino preferido para los amantes del café, brindando una amplia gama de productos y accesorios relacionados con la cafetería."},
  {
    id:2,   
    text:" Ofrecemos una selección diversa de cafés de origen único y mezclas exclusivas." 
  },
  {
    id:3,        
    text:" Nuestra pasión por el café impulsa nuestra búsqueda constante de la excelencia, la innovación y la satisfacción del cliente."
  },
  {
    id:4,     
    text:" Estamos constantemente ofreciendo nuevos productos y promociones."

  },
  {
    id:5,    
    text:" Buscamos inspirar y educar a nuestros clientes sobre el arte y la cultura del café."
  }
]

const FeatureItems = () => {
  return (
    <ul>
        {
        data.map((item, index)=>
        <li className='feature-item'
        key={index}>       
        <p><BsCheckCircleFill className="icon-feature" />
        {item.text}</p>       
        </li>
        )}
        <button className='btn-feature'>Nuestros Productos</button>
        </ul>  
  )
}

 export default FeatureItems