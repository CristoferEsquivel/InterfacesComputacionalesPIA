import { Link } from "react-router";
import { ShoppingCart } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  inStock: boolean;
}

export function ProductCard({ id, name, price, image, inStock }: ProductCardProps) {
  return (
    <div className="group relative">
      <Link to={`/producto/${id}`} className="block">
        <div className="relative aspect-[3/4] bg-[#F5F5F5] overflow-hidden mb-3">
          <ImageWithFallback
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {!inStock && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <span className="bg-white px-4 py-2 text-sm">SIN STOCK</span>
            </div>
          )}
        </div>
        <h3 className="text-sm mb-1 group-hover:underline">{name}</h3>
        <p className="font-semibold">${price.toFixed(2)} MXN</p>
      </Link>
      {inStock && (
        <button className="mt-3 w-full bg-[#111111] text-white py-2 px-4 flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors opacity-0 group-hover:opacity-100">
          <ShoppingCart className="w-4 h-4" />
          <span className="text-sm">Agregar al carrito</span>
        </button>
      )}
    </div>
  );
}
