import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Berenjenas en escabeche con finas hierbas',
    category: 'Salado',
    description: 'Berenjenas seleccionadas, curadas en un escabeche suave aromatizado con una mezcla secreta de finas hierbas.',
    image: 'https://i.postimg.cc/Sx6Jv0sd/Gemini-Generated-Image-fmy46vfmy46vfmy4.png',
    price: 23000
  },
  {
    id: '2',
    name: 'Antipasto de vegetales',
    category: 'Salado',
    description: 'Una explosión de huerta en tu boca. Mezcla premium de vegetales salteados y conservados en aceite de oliva.',
    image: 'https://i.postimg.cc/kX5sCc8s/Gemini-Generated-Image-1ehwtz1ehwtz1ehw.png',
    price: 20000
  },
  {
    id: '3',
    name: 'Antipasto de atún',
    category: 'Salado',
    description: 'Lomos de atún de alta calidad combinados con vegetales crocantes. Perfecto para bruschettas.',
    image: 'https://i.postimg.cc/Sx6Jv0sd/Gemini-Generated-Image-fmy46vfmy46vfmy4.png',
    price: 24000
  },
  {
    id: '4',
    name: 'Mermeladas de frutas',
    category: 'Dulce',
    description: 'Dulzor natural. Frutas de estación cocidas lentamente para preservar su color y sabor intenso.',
    image: 'https://i.postimg.cc/KjNhX56r/Gemini-Generated-Image-3uq0j13uq0j13uq0.png',
    price: 16000
  },
  {
    id: '5',
    name: 'Salsa pesto',
    category: 'Salsa',
    description: 'El clásico italiano con nuestro toque artesanal. Albahaca fresca, ajo, nueces y parmesano.',
    image: 'https://i.postimg.cc/cCjW9R6j/Gemini-Generated-Image-ykh89bykh89bykh8.png',
    price: 25000
  },
  {
    id: '6',
    name: 'Pimentones asados con finas hierbas',
    category: 'Salado',
    description: 'Pimientos rojos asados al fuego vivo, pelados a mano y marinados para realzar su dulzura natural.',
    image: 'https://i.postimg.cc/x87Qxvc2/Gemini-Generated-Image-81hcg281hcg281hc.png',
    price: 18000
  },
  {
    id: '7',
    name: 'Relish agridulce de pepino',
    category: 'Salsa',
    description: 'El equilibrio perfecto entre acidez y dulzor. Ideal para hamburguesas gourmet y hot dogs.',
    image: 'https://i.postimg.cc/rwzT6YSX/Gemini-Generated-Image-qxyn17qxyn17qxyn.png',
    price: 18000
  },
  {
    id: '8',
    name: 'Chimichurri estilo argentino',
    category: 'Picante',
    description: 'Nuestra versión del clásico acompañante de carnes. Vibrante, herbáceo y con el punto justo de picante.',
    image: 'https://i.postimg.cc/280YKfLJ/Gemini-Generated-Image-o4n7cbo4n7cbo4n7.png',
    price: 18000
  }
];

export const SYSTEM_INSTRUCTION = `
Eres el "Chef Virtual De Green". Tu trabajo es sugerir recetas, maridajes y formas creativas de usar los productos de la marca "De Green - Cocina Artesanal".
Los productos son: Berenjenas en escabeche, Antipasto de vegetales, Antipasto de atún, Mermeladas de frutas, Salsa pesto, Pimentones asados, Relish de pepino, Chimichurri argentino.
Tu tono debe ser moderno, atrevido, apasionado por la comida natural y muy amigable.
Siempre recomienda usar uno de nuestros productos en tus respuestas.
Sé conciso y vibrante.
`;