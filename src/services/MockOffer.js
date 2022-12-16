export const data = [
  {
    id: 1001,
    title: "Smart Tv Noblex 55´ DK55X7100 UHD 4K Primera",
    detail: " Capacidad 245L Eficiencia energética: B Voltaje: 220v Exterior fabricado en lamina de acero prepintado con protección vinílica Interior fabricada en lamina de acero galvanizada Contrapuerta PsRf Aislación térmica por inyección de poliuretano de alta densidad Burlete magnético que evita la pérdida de frio y condensación con propiedades anti-hongos Canasta removible. Serpentina de aluminio. Producto totalmente nuevo. Medidas: 85 cm de Ancho x 65 cm de Profundidad x 85cm de Altura",
    img: "https://picsum.photos/200/300?random=1",
    price: 2500,
    marca: "samsung"
  },
  {
    id: 2,
    img: "https://i.ibb.co/pKCPbxc/aire-acondicionado-split-hitachi-2600w-fc.jpg",
    title: "Aire Acondicionado Split HITACHI 2600w FC",
    price: "$00,00",
    category: "imagen",
    marca:  "Star Trak",
    // category: "Climatización",
    detail: "STOCK DISPONIBLE",
  },

  {
    id: 3,
    img: "https://i.ibb.co/g9mKHqb/aire-acondicionado-split-kanji-3200w-fc.jpg",
    title: "Aire acondicionado Split KANJI 3200w FC",
    price: "$00,00",
    category: "imagen",
    marca:  "Star Trak",
    // category: "Climatización",
    detail: "STOCK DISPONIBLE",
  },
  {
    id: 4,
    img: "https://i.ibb.co/r67MbZ3/aire-acondicionado-inverter-greenstay-fc-3500.jpg",
    title: "Aire acondicionado Inverter GREENSTAY 3500w FC",
    price: "$00,00",
    category: "imagen",
    marca:  "Star Trak",
    // category: "Climatización",
    detail: "STOCK DISPONIBLE",
  },
  {
    id: 5,
    img: "https://i.ibb.co/HHG7r1D/aire-acondicionado-inverter-greenstay-fc-6900.jpg",
    title: "Aire acondicionado Inverter GREENSTAY 6900w FC",
    price: "$00,00",
    marca:  "Star Trak",
    category: "imagen",
    // category: "Climatización",
    detail: "STOCK DISPONIBLE",
  },
  {
    id: 6,
    img: "https://i.ibb.co/TLkWf51/ventilador-vitta-18pulgadas-3-en-1-90w.jpg",
    title: "Ventilador VITTA 18Pulgadas 3 en 1 90w",
    price: "$00,00",
    category: "imagen",
    marca:  "Star Trak",
    // category: "Climatización",
    deetail: "STOCK DISPONIBLE",
  },
  {
    id: 7,
    img: "https://i.ibb.co/7V2dS40/ventilador-industrial-vitta-30-Pulgadas-2-en-1.jpg",
    title: "Ventilador Industrial VITTA 30Pulgadas 2 en 1assdadsasadsadsdadsaasdsadasdsda",
    price: "$00,00",
    category: "imagen",
    marca:  "Star Trak",
    // category: "Climatización",
    deetail: "STOCK DISPONIBLE",
  },

  {
    id: 8,
    img: "https://i.ibb.co/hCKWR4J/Ventilador-18-Pulgadas-3-en-1-STAR-TRAK.jpg",
    title: "Ventilador 18Pulgadas 3 en 1 STAR TRAKasdsdadsadsaasdsad",
    price: "$00,00",
    category: "imagen",
    marca:  "Star Trak",
    // category: "Climatización",
    deetail: "STOCK DISPONIBLE"
  },
  {
    id: 9,
    img: "https://i.ibb.co/rmYxb0B/Ventilador-Pie-14-Pulgadas-STAR-TRAK-Multi-1000x1000.jpg",
    title: "Ventilador Pie 14Pulgadas Base Pesada STAR TRAK asdasdsaasddsaadsdsa",
    price: "$00,00",
    category: "imagen",

    // category: "Climatización",
    deetail: "STOCK DISPONIBLE"
  },
  {
    id: 10,
    img: "https://i.ibb.co/rmYxb0B/Ventilador-Pie-14-Pulgadas-STAR-TRAK-Multi-1000x1000.jpg",
    title: "Ventilador Pie 14Pulgadas STAR TRAK Multi",
    price: "$00,00",
    category: "imagen",
    marca:  "Star Trak",
    // category: "Climatización",
    deetail: "STOCK DISPONIBLE"
  },
];


export default function getItemsSlider() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 1500);
  });
}


export function getItemsSingleSlider(idItem) {
  return new Promise((resolve, reject) => {
    let itemFind = data.find((item) => {      
      
      return item.id === parseInt(idItem);
    });

    setTimeout(() => {
      if (itemFind) resolve(itemFind);
      else reject(new Error("Item no encontrado"));
    }, 1500);
  });
}