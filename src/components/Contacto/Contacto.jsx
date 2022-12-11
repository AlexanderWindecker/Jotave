import React from 'react'
import './Contacto.css'
import { Footer } from '../Footer/Footer'
import { NavBar } from '../NavBar/NavBar'
import Whatsap from '../Whatsap/Whatsap'
import { motion } from 'framer-motion'


const svgVariante={
    hidden:{rotate:-180},
    visible:{
        rotate:0,
        transition:{duration:1}
    }
}
const pathVariante={
    hidden:{
        opacity:0,
        pathLenght:0
    }
    ,
    visible:{
        opacity:1,
        pathLenght:1,
        transition:{
            duration:2,
            ease:"easeInOut"
        }
    }
}

const Contacto = () => {
    return (
        <>
        <NavBar />
<motion.h6 
 animate={{x:0}}
initial={{x:"-100vw"}}
transition={{delay:0.5, type:'spring'}} 
whileHover={{scale:1, textShadow:'1px 1px 2px  grey'}}
>Para realizar la compra seguí los pasos:
</motion.h6>
      <div className='container justify-content-center text-center mt-10'>
<div  className='texto'>
 
    
    <p> <i className="bi bi-1-circle"></i> Solicitas el producto que deseas comprar a nuestros vendedores.</p>
    <p><i className="bi bi-2-circle"></i>   Te registramos en nuestro sistema.</p>
    <p> <i className="bi bi-3-circle"></i> Se coordina que un inspector visite tu domicilio para tu seguridad y la nuestra, y así pactamos la entrega.</p>
    <p> <i className="bi bi-4-circle"></i>  Se te envía el producto y llegado a tu domicilio , probas el funcionamiento.</p>
    <p> <i className="bi bi-5-circle"></i>  Luego firmas el contrato y abonas la primer cuota y ya estaría todo listo para que lo disfrutes!</p>

   
    
</div>



    <div className='iconos'>
        
           
              <motion.svg animate={{x:0}} initial={{x:"-100vw"}} transition={{delay:0.5, duration:2}} className="icon-svg" id="Layer_1" enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="75.066" x2="436.935" y1="436.935" y2="75.066"><stop offset="0" stop-color="#fcc60e"/><stop offset="1" stop-color="#e92e29"/></linearGradient><path d="m389.361 196.696c-2.245-3.213-5.918-5.128-9.838-5.128h-49.239l8.27-38.69c.757-3.542-.127-7.237-2.405-10.055-2.278-2.816-5.707-4.453-9.33-4.453h-176.678c-6.628 0-12 5.373-12 12s5.372 12 12 12h161.841l-8.27 38.69-21.849 102.224h-79.106c-7.66-8.274-18.604-13.466-30.742-13.466-12.104 0-23.019 5.164-30.676 13.396l-35.194-.424c-.05-.001-.099-.001-.147-.001-6.56 0-11.917 5.278-11.996 11.855-.08 6.627 5.228 12.063 11.854 12.144l24.516.295c-.168 1.524-.263 3.071-.263 4.64 0 23.107 18.799 41.906 41.906 41.906s41.906-18.799 41.906-41.906c0-1.5-.083-2.98-.237-4.44h77.842c.019 0 .037.003.056.003.022 0 .045-.003.067-.003h1.556c-.154 1.46-.237 2.94-.237 4.44 0 23.107 18.799 41.906 41.906 41.906s41.906-18.799 41.906-41.906c0-1.5-.083-2.98-.237-4.44h13.681c5.661 0 10.552-3.956 11.735-9.492l15.776-73.813c.695-3.254.008-6.651-1.897-9.38zm-217.346 152.935c-9.873 0-17.906-8.033-17.906-17.906s8.033-17.906 17.906-17.906 17.906 8.033 17.906 17.906-8.033 17.906-17.906 17.906zm162.859 0c-9.873 0-17.906-8.033-17.906-17.906s8.033-17.906 17.906-17.906 17.906 8.033 17.906 17.906-8.033 17.906-17.906 17.906zm45.643-46.347h-14.902c-7.66-8.274-18.604-13.466-30.742-13.466-10.69 0-20.453 4.029-27.864 10.641l18.145-84.891h48.113l19.907 28.498zm-271.696-76.91c0-6.627 5.373-12 12-12h81c6.627 0 12 5.373 12 12s-5.373 12-12 12h-81c-6.627 0-12-5.373-12-12zm147.179-226.374c-141.159 0-256 114.841-256 256s114.841 256 256 256 256-114.841 256-256-114.841-256-256-256zm0 488c-127.924 0-232-104.075-232-232s104.076-232 232-232 232 104.075 232 232-104.075 232-232 232z" fill="url(#SVGID_1_)"/></motion.svg>  
        
              <motion.svg  variants={svgVariante} initial='hidden' animate='visible'  className="icon-svg" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512" ><g><g><motion.path d="M342.725,195.051l-82.828-50.467c-2.396-1.46-5.409-1.461-7.806,0c0,0-82.971,50.553-83.175,50.678 c-6.36,3.875-3.529,13.906,3.902,13.906c0,0,165.58,0,166.367,0C346.685,209.169,349.334,198.593,342.725,195.051z M199.545,194.167l56.449-34.394l56.449,34.394H199.545z" variants={pathVariante} /></g></g><g><g><circle cx="238.934" cy="355.686" r="11.632"/></g></g><g><g><motion.path d="M106.667,250.137H62.256c-4.142,0-7.501,3.358-7.501,7.501v146.33c0,4.142,3.358,7.501,7.501,7.501h44.411 c4.142,0,7.501-3.358,7.501-7.501v-146.33C114.168,253.495,110.81,250.137,106.667,250.137z M99.167,396.466h-29.41v-14.264h29.41 V396.466z M99.167,367.2h-29.41v-14.264h29.41V367.2z M99.167,337.934h-29.41V323.67h29.41V337.934z M99.167,308.668h-29.41 v-14.264h29.41V308.668z M99.167,279.403h-29.41v-14.264h29.41V279.403z" variants={pathVariante}  /></g></g><g><g><motion.path d="M510.704,198.486l-40.41-58.864c-1.399-2.038-3.712-3.255-6.185-3.255c0,0-56.391,0-56.59,0 c-9.65,0-9.71,15.001-0.001,15.001h52.642l30.111,43.862h-99.201l-71.987-43.862c0,0,58.183,0,58.431,0 c9.47,0,9.728-15.001,0.001-15.001h-83.052l-34.565-21.061c-2.396-1.46-5.409-1.46-7.806,0l-34.566,21.061h-57.152V98.775h8.711 c4.143,0,7.501-3.358,7.501-7.501V62.647c0-4.143-3.357-7.501-7.501-7.501H95.692c-4.142,0-7.501,3.357-7.501,7.501v28.627 c0,4.142,3.358,7.501,7.501,7.501h8.71v37.592H47.879c-2.472,0-4.784,1.218-6.184,3.255c0,0-40.355,58.783-40.411,58.864 c-3.358,4.892,0.274,11.746,6.184,11.746h19.054v239.122c0,4.142,3.358,7.501,7.501,7.501h443.94c4.143,0,7.501-3.358,7.501-7.501 V210.232c0,0,19.026,0,19.055,0C510.216,210.232,514.166,203.531,510.704,198.486z M255.993,130.495l145.534,88.675h-291.07 L255.993,130.495z M103.193,83.773V70.148h58.391v13.625H103.193z M145.372,98.775v37.592h-25.968V98.775H145.372z M21.716,195.23 l30.112-43.862h141.076l-71.988,43.862H21.716z M127.398,441.854H41.524V210.232h54.771c0,0-16.413,10-16.466,10.033 c-6.334,3.859-3.521,13.906,3.902,13.906h43.666V441.854z M198.117,441.853h-20.358V269.531h20.358V441.853z M298.866,441.853 h-85.747V269.531h85.747V441.853z M334.227,441.854h-20.358V269.531h20.358V441.854z M369.587,441.853L369.587,441.853h-20.358 V262.03c0-4.143-3.357-7.501-7.501-7.501H170.259c-4.143,0-7.501,3.357-7.501,7.501v179.824h-20.357V234.171h227.186V441.853z M470.462,441.853h-85.875v-46.654h85.875V441.853z M470.462,380.198h-85.875v-46.655h85.875V380.198z M470.463,318.542h-85.875 v-46.654h85.875V318.542z M470.463,256.885h-85.875V234.17c0,0,43.46,0,43.665,0c7.422,0,10.242-10.045,3.903-13.906 l-16.466-10.032h54.771V256.885z" variants={pathVariante}/></g></g></motion.svg>
                   
          
    </div>
</div>
   
  
      

        <Whatsap />
        <Footer />
        </>
        
  ) 
}

export { Contacto }