import React from "react";
import { motion } from "framer-motion";
import "./Nosotros.css";

const Nosotros = () => {
  return (
    <>
      <div className="titulo">
        <motion.h1
          initial={{ y: -250 }}
          animate={{ y: -10 }}
          transition={{ delay: 0.2, type: "spring" }}
          whileHover={{ scale: 1.1, textShadow: "1px 1px 3px grey" }}
        >
          Quienes somos
        </motion.h1>
      </div>
<div className="contenedor">
  
        <div className="container justify-center text-center">
      
      <div className="telephone_container">
  
       
             <section className="telephone">
              <div className="telephone_content">
  
                   <div className="telephone_top">
                    
                    <div className="telephone_user">
  
                    <img
                src="https://i.ibb.co/bvM0jYg/Logo-Blanco.png"
                alt="logo"
                className="telephone_logo"
                     />
  
                 
                    <div className="telephone_info">
                 <div className="telephone_name">
                      <h4>Grupo Jotave</h4>
                 </div>
                    <div className="telephone_dots"> 
                         <i className="bi bi-three-dots"></i>
                      
                    </div>
  
                    </div>
                            
                    <i className="bi bi-justify"></i>
                    </div>
                    
                    </div> 
  
                     <div className="telephone_main">
                      <p className="telephone_chat"><i className="bi bi-check"></i>Facilidad</p>
                    <div className="telephone_check">
                        <i className="bi bi-check2-all"></i>
                    </div>
                      <p className="telephone_chat"><i className="bi bi-check"></i> Efectividad</p>
                   <div className="telephone_check">
                       <i className="bi bi-check2-all"></i>
                   </div>
                      
                      <p className="telephone_chat"><i className="bi bi-check"></i> Responsabilidad</p>
                     <div className="telephone_check">
                       <i className="bi bi-check2-all"></i>
                      
                     </div>
                    <div className="">
                    </div>
  
                     </div>
  
              </div>
             </section>
       <div className="telephone_text">
             <p>
               
               Todo el universo de artículos del hogar en un solo lugar, con la mejor calidad, diseño y al mejor precio.
               <br />
               Somos una empresa que se dedica exclusivamente a la venta
               financiada de electrodómesticos. Desde hace 5 años nos
               encontramos en el mercado. Abastecemos y abarcamos la logística de distribución de más de 50 localidades de la provincia de Buenos
               Aires.
               <br />
               Simplemente todo lo que necesitas para amueblar y decorar tu hogar a un solo Click.
               Hoy mediante nuestra tienda on-line podes ver nuestro amplio catálogo de productos.
               Ademas de brindarte la atención personalizada de nuestros asesores, que te guiaran durante todo el proceso y orientaran de manera profesional para hacer de cada espacio de tu hogar un lugar único.
        
               Encontrá en nosotros una nueva experiencia de compra y una nueva forma de mejorar tu hogar.
             </p> 
       </div>
        </div>
</div>
                
</div>
</>
);
};

export { Nosotros };
