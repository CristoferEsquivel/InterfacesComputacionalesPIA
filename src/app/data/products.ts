export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  images: string[];
  description: string;
  sizes: string[];
  colors: string[];
  inStock: boolean;
  style?: string;
  season?: string;
}

export const products: Product[] = [
  // MUJER
  {
    id: "1",
    name: "Blusa Blanca Elegante",
    price: 599.00,
    category: "mujer",
    image: "https://images.unsplash.com/photo-1763346757162-52d7f30f33ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHdoaXRlJTIwYmxvdXNlJTIwZWxlZ2FudHxlbnwxfHx8fDE3NzIxMzI2MTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    images: [
      "https://images.unsplash.com/photo-1763346757162-52d7f30f33ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHdoaXRlJTIwYmxvdXNlJTIwZWxlZ2FudHxlbnwxfHx8fDE3NzIxMzI2MTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    description: "Blusa elegante de algodón, perfecta para cualquier ocasión. Diseño minimalista y sofisticado.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Blanco"],
    inStock: true,
    style: "Formal",
    season: "Todo el año",
  },
  {
    id: "2",
    name: "Vestido Negro Cocktail",
    price: 899.00,
    category: "mujer",
    image: "https://images.unsplash.com/photo-1712570430583-b6f11f333bcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGJsYWNrJTIwZHJlc3MlMjBjb2NrdGFpbHxlbnwxfHx8fDE3NzIxMzI2MTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    images: [
      "https://images.unsplash.com/photo-1712570430583-b6f11f333bcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGJsYWNrJTIwZHJlc3MlMjBjb2NrdGFpbHxlbnwxfHx8fDE3NzIxMzI2MTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    description: "Vestido negro elegante perfecto para eventos especiales. Corte sofisticado y atemporal.",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Negro"],
    inStock: true,
    style: "Formal",
    season: "Todo el año",
  },
  {
    id: "3",
    name: "Jeans Casual Estilo",
    price: 749.00,
    category: "mujer",
    image: "https://images.unsplash.com/photo-1760551733107-25bd7b041623?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGplYW5zJTIwY2FzdWFsJTIwc3R5bGV8ZW58MXx8fHwxNzcyMTMyNjE4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    images: [
      "https://images.unsplash.com/photo-1760551733107-25bd7b041623?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGplYW5zJTIwY2FzdWFsJTIwc3R5bGV8ZW58MXx8fHwxNzcyMTMyNjE4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    description: "Jeans de mezclilla con estilo casual moderno. Ideal para el día a día.",
    sizes: ["26", "28", "30", "32", "34"],
    colors: ["Azul"],
    inStock: true,
    style: "Casual",
    season: "Todo el año",
  },
  {
    id: "4",
    name: "Blazer Profesional",
    price: 1299.00,
    category: "mujer",
    image: "https://images.unsplash.com/photo-1770364019737-aca75ef026fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGJsYXplciUyMHByb2Zlc3Npb25hbCUyMG91dGZpdHxlbnwxfHx8fDE3NzIxMzI2MTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    images: [
      "https://images.unsplash.com/photo-1770364019737-aca75ef026fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGJsYXplciUyMHByb2Zlc3Npb25hbCUyMG91dGZpdHxlbnwxfHx8fDE3NzIxMzI2MTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    description: "Blazer de corte estructurado, perfecto para look profesional.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Negro", "Beige"],
    inStock: true,
    style: "Formal",
    season: "Otoño-Invierno",
  },
  {
    id: "5",
    name: "Suéter de Punto Cozy",
    price: 679.00,
    category: "mujer",
    image: "https://images.unsplash.com/photo-1687275159654-13e292177bfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHN3ZWF0ZXIlMjBrbml0JTIwY296eXxlbnwxfHx8fDE3NzIxMzI2MTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    images: [
      "https://images.unsplash.com/photo-1687275159654-13e292177bfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHN3ZWF0ZXIlMjBrbml0JTIwY296eXxlbnwxfHx8fDE3NzIxMzI2MTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    description: "Suéter acogedor de punto, ideal para los días fríos.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Gris", "Beige", "Negro"],
    inStock: true,
    style: "Casual",
    season: "Otoño-Invierno",
  },
  {
    id: "6",
    name: "Vestido Floral Verano",
    price: 799.00,
    category: "mujer",
    image: "https://images.unsplash.com/photo-1578404449256-0de908ee34ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGZsb3JhbCUyMGRyZXNzJTIwc3VtbWVyfGVufDF8fHx8MTc3MjEzMjYxOXww&ixlib=rb-4.1.0&q=80&w=1080",
    images: [
      "https://images.unsplash.com/photo-1578404449256-0de908ee34ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGZsb3JhbCUyMGRyZXNzJTIwc3VtbWVyfGVufDF8fHx8MTc3MjEzMjYxOXww&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    description: "Vestido ligero con estampado floral, perfecto para el verano.",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Multicolor"],
    inStock: true,
    style: "Casual",
    season: "Primavera-Verano",
  },
  {
    id: "7",
    name: "Chamarra de Piel Negra",
    price: 1599.00,
    category: "mujer",
    image: "https://images.unsplash.com/photo-1711227899090-5bc09478ade7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGxlYXRoZXIlMjBqYWNrZXQlMjBibGFja3xlbnwxfHx8fDE3NzIxMzI2MTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    images: [
      "https://images.unsplash.com/photo-1711227899090-5bc09478ade7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGxlYXRoZXIlMjBqYWNrZXQlMjBibGFja3xlbnwxfHx8fDE3NzIxMzI2MTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    description: "Chamarra de piel sintética con diseño moderno y versátil.",
    sizes: ["S", "M", "L"],
    colors: ["Negro"],
    inStock: true,
    style: "Urbano",
    season: "Otoño-Invierno",
  },
  {
    id: "8",
    name: "Trench Coat Beige",
    price: 1399.00,
    category: "mujer",
    image: "https://images.unsplash.com/photo-1666513241353-14a198830381?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHRyZW5jaCUyMGNvYXQlMjBiZWlnZXxlbnwxfHx8fDE3NzIxMjY3MDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    images: [
      "https://images.unsplash.com/photo-1666513241353-14a198830381?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHRyZW5jaCUyMGNvYXQlMjBiZWlnZXxlbnwxfHx8fDE3NzIxMjY3MDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    description: "Trench coat clásico, elegante y atemporal.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Beige", "Negro"],
    inStock: true,
    style: "Formal",
    season: "Primavera",
  },

  // HOMBRE
  {
    id: "9",
    name: "Camisa Formal Blanca",
    price: 649.00,
    category: "hombre",
    image: "https://images.unsplash.com/photo-1765175096499-edc413eba349?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBmb3JtYWwlMjBzaGlydCUyMHdoaXRlfGVufDF8fHx8MTc3MjEzMjYxNHww&ixlib=rb-4.1.0&q=80&w=1080",
    images: [
      "https://images.unsplash.com/photo-1765175096499-edc413eba349?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBmb3JtYWwlMjBzaGlydCUyMHdoaXRlfGVufDF8fHx8MTc3MjEzMjYxNHww&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    description: "Camisa formal de algodón premium, ideal para eventos formales y oficina.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Blanco"],
    inStock: true,
    style: "Formal",
    season: "Todo el año",
  },
  {
    id: "10",
    name: "Saco Negro Elegante",
    price: 1499.00,
    category: "hombre",
    image: "https://images.unsplash.com/photo-1628149329516-4b85b2225c5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBzdWl0JTIwamFja2V0JTIwYmxhY2t8ZW58MXx8fHwxNzcyMTMyNjE1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    images: [
      "https://images.unsplash.com/photo-1628149329516-4b85b2225c5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBzdWl0JTIwamFja2V0JTIwYmxhY2t8ZW58MXx8fHwxNzcyMTMyNjE1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    description: "Saco elegante de corte moderno, perfecto para ocasiones especiales.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Negro", "Azul marino"],
    inStock: true,
    style: "Formal",
    season: "Todo el año",
  },
  {
    id: "11",
    name: "Jeans Denim Azul",
    price: 799.00,
    category: "hombre",
    image: "https://images.unsplash.com/photo-1763609973511-77f5caecd0f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBqZWFucyUyMGRlbmltJTIwYmx1ZXxlbnwxfHx8fDE3NzIxMzI2MTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    images: [
      "https://images.unsplash.com/photo-1763609973511-77f5caecd0f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBqZWFucyUyMGRlbmltJTIwYmx1ZXxlbnwxfHx8fDE3NzIxMzI2MTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    description: "Jeans de mezclilla clásicos con corte regular fit.",
    sizes: ["30", "32", "34", "36", "38"],
    colors: ["Azul"],
    inStock: true,
    style: "Casual",
    season: "Todo el año",
  },
  {
    id: "12",
    name: "Zapatos de Piel Café",
    price: 1199.00,
    category: "hombre",
    image: "https://images.unsplash.com/photo-1658837407083-308b902ee99d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBsZWF0aGVyJTIwc2hvZXMlMjBicm93bnxlbnwxfHx8fDE3NzIxMzI2MTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    images: [
      "https://images.unsplash.com/photo-1658837407083-308b902ee99d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBsZWF0aGVyJTIwc2hvZXMlMjBicm93bnxlbnwxfHx8fDE3NzIxMzI2MTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    description: "Zapatos de piel genuina, elegantes y cómodos para uso diario.",
    sizes: ["7", "8", "9", "10", "11"],
    colors: ["Café"],
    inStock: true,
    style: "Formal",
    season: "Todo el año",
  },

  // NIÑOS
  {
    id: "13",
    name: "Playera Colorida Niños",
    price: 299.00,
    category: "ninos",
    image: "https://images.unsplash.com/photo-1632195217465-4f334314762f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwc2hpcnQlMjBjb2xvcmZ1bCUyMGNsb3RoaW5nfGVufDF8fHx8MTc3MjEzMjYxNnww&ixlib=rb-4.1.0&q=80&w=1080",
    images: [
      "https://images.unsplash.com/photo-1632195217465-4f334314762f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwc2hpcnQlMjBjb2xvcmZ1bCUyMGNsb3RoaW5nfGVufDF8fHx8MTc3MjEzMjYxNnww&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    description: "Playera divertida y colorida, perfecta para niños activos.",
    sizes: ["4", "6", "8", "10", "12"],
    colors: ["Multicolor"],
    inStock: true,
    style: "Casual",
    season: "Primavera-Verano",
  },
  {
    id: "14",
    name: "Vestido Infantil Juguetón",
    price: 449.00,
    category: "ninos",
    image: "https://images.unsplash.com/photo-1759313560222-b73784cd42f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGRyZXNzJTIwcGxheWZ1bCUyMGZhc2hpb258ZW58MXx8fHwxNzcyMTMyNjE2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    images: [
      "https://images.unsplash.com/photo-1759313560222-b73784cd42f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGRyZXNzJTIwcGxheWZ1bCUyMGZhc2hpb258ZW58MXx8fHwxNzcyMTMyNjE2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    description: "Vestido cómodo y alegre para niñas, ideal para cualquier ocasión.",
    sizes: ["4", "6", "8", "10"],
    colors: ["Rosa", "Azul"],
    inStock: true,
    style: "Casual",
    season: "Primavera-Verano",
  },
  {
    id: "15",
    name: "Tenis Deportivos Niños",
    price: 549.00,
    category: "ninos",
    image: "https://images.unsplash.com/photo-1538370806845-bfde3f43b72f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwc25lYWtlcnMlMjBzaG9lcyUyMHNwb3J0c3xlbnwxfHx8fDE3NzIxMzI2MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    images: [
      "https://images.unsplash.com/photo-1538370806845-bfde3f43b72f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwc25lYWtlcnMlMjBzaG9lcyUyMHNwb3J0c3xlbnwxfHx8fDE3NzIxMzI2MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    description: "Tenis cómodos y resistentes para actividades deportivas.",
    sizes: ["12", "13", "1", "2", "3"],
    colors: ["Multicolor"],
    inStock: true,
    style: "Deportivo",
    season: "Todo el año",
  },

  // BELLEZA
  {
    id: "16",
    name: "Perfume Elegante",
    price: 899.00,
    category: "belleza",
    image: "https://images.unsplash.com/photo-1759793500112-c588839cfc6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmdW1lJTIwZnJhZ3JhbmNlJTIwYm90dGxlJTIwZWxlZ2FudHxlbnwxfHx8fDE3NzIxMTcyMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    images: [
      "https://images.unsplash.com/photo-1759793500112-c588839cfc6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmdW1lJTIwZnJhZ3JhbmNlJTIwYm90dGxlJTIwZWxlZ2FudHxlbnwxfHx8fDE3NzIxMTcyMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    description: "Fragancia sofisticada con notas florales y amaderadas.",
    sizes: ["50ml", "100ml"],
    colors: ["N/A"],
    inStock: true,
    style: "Elegante",
    season: "Todo el año",
  },
  {
    id: "17",
    name: "Labial Luxury",
    price: 349.00,
    category: "belleza",
    image: "https://images.unsplash.com/photo-1586495487593-1e01d9890cd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXBzdGljayUyMG1ha2V1cCUyMGJlYXV0eSUyMGNvc21ldGljc3xlbnwxfHx8fDE3NzIxMzI2MTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    images: [
      "https://images.unsplash.com/photo-1586495487593-1e01d9890cd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXBzdGljayUyMG1ha2V1cCUyMGJlYXV0eSUyMGNvc21ldGljc3xlbnwxfHx8fDE3NzIxMzI2MTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    description: "Labial de larga duración con acabado mate y colores vibrantes.",
    sizes: ["Único"],
    colors: ["Rojo", "Rosa", "Nude"],
    inStock: true,
    style: "Moderno",
    season: "Todo el año",
  },
  {
    id: "18",
    name: "Crema Facial Premium",
    price: 749.00,
    category: "belleza",
    image: "https://images.unsplash.com/photo-1618478297003-218b7eddfe68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMGNyZWFtJTIwYm90dGxlJTIwcHJvZHVjdHxlbnwxfHx8fDE3NzIxMzI2MTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    images: [
      "https://images.unsplash.com/photo-1618478297003-218b7eddfe68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMGNyZWFtJTIwYm90dGxlJTIwcHJvZHVjdHxlbnwxfHx8fDE3NzIxMzI2MTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    description: "Crema hidratante facial con ingredientes naturales para todo tipo de piel.",
    sizes: ["50ml"],
    colors: ["N/A"],
    inStock: true,
    style: "Premium",
    season: "Todo el año",
  },

  // NOVEDADES (productos destacados de todas las categorías)
  {
    id: "19",
    name: "Blusa Blanca Elegante",
    price: 599.00,
    category: "novedades",
    image: "https://images.unsplash.com/photo-1763346757162-52d7f30f33ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHdoaXRlJTIwYmxvdXNlJTIwZWxlZ2FudHxlbnwxfHx8fDE3NzIxMzI2MTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    images: [
      "https://images.unsplash.com/photo-1763346757162-52d7f30f33ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHdoaXRlJTIwYmxvdXNlJTIwZWxlZ2FudHxlbnwxfHx8fDE3NzIxMzI2MTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    description: "Blusa elegante de algodón, perfecta para cualquier ocasión. Diseño minimalista y sofisticado.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Blanco"],
    inStock: true,
    style: "Formal",
    season: "Todo el año",
  },
  {
    id: "20",
    name: "Saco Negro Elegante",
    price: 1499.00,
    category: "novedades",
    image: "https://images.unsplash.com/photo-1628149329516-4b85b2225c5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBzdWl0JTIwamFja2V0JTIwYmxhY2t8ZW58MXx8fHwxNzcyMTMyNjE1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    images: [
      "https://images.unsplash.com/photo-1628149329516-4b85b2225c5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBzdWl0JTIwamFja2V0JTIwYmxhY2t8ZW58MXx8fHwxNzcyMTMyNjE1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
    description: "Saco elegante de corte moderno, perfecto para ocasiones especiales.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Negro", "Azul marino"],
    inStock: true,
    style: "Formal",
    season: "Todo el año",
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category.toLowerCase());
}

export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(lowerQuery) ||
      p.description.toLowerCase().includes(lowerQuery) ||
      p.category.toLowerCase().includes(lowerQuery)
  );
}
