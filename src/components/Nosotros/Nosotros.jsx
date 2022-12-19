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

      <div className="container justify-content-center text-center m-20">
        <a>
          <motion.img
            animate={{ x: 0 }}
            initial={{ x: "-100vw" }}
            transition={{ delay: 1, type: "spring", duration: 2 }}
            src="https://i.ibb.co/6H8bgWf/IMG-20221206-WA0028.jpg"
            alt=""
            className="img-nosotros"
          />
        </a>
        <div className="container  text-center">
          <motion.h2
            animate={{
              x: 100,
              y: -100,
              scale: 0.8,
              rotate: 360,
            }}
            transition={{ delay: 2, duration: 3 }}
            whileHover={{ scale: 1.1, textShadow: "1px 1px 3px grey" }}
          >
            <b>Bienvenido a Grupo Jotave</b>
          </motion.h2>

          <div className="container fluid">
            <p>
              Somos una empresa que se dedica exclusivamente a la venta
              financianda de electrodómesticos. Desde hace 5 años nos
              encontramos en el mercado. Abastecemos y abarcamos la logística de
              distribución de más de 50 localidades de la provincia de Buenos
              Aires.
            </p>
            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export { Nosotros };
