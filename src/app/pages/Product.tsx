import { useState } from "react";
import { useParams, Link } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { getProductById } from "../data/products";
import { useCart } from "../context/CartContext";
import { Heart, Truck, Check, Undo2 } from "lucide-react";
import { toast } from "sonner";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Product() {
  const { productId } = useParams();
  const product = getProductById(productId || "");
  const { addToCart, setIsCartOpen } = useCart();

  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl mb-4">Producto no encontrado</h1>
            <Link to="/" className="text-blue-600 hover:underline">
              Volver al inicio
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error("Por favor selecciona una talla");
      return;
    }

    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: selectedSize,
      quantity,
    });

    setIsCartOpen(true);

    toast.success("Producto agregado correctamente", {
      action: {
        label: "Deshacer",
        onClick: () => toast.info("Producto eliminado del carrito"),
      },
      icon: <Check className="w-5 h-5" />,
    });
  };

  const handleAddToFavorites = () => {
    setIsFavorite(!isFavorite);
    toast.success(isFavorite ? "Eliminado de favoritos" : "Agregado a favoritos");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:underline">Inicio</Link>
          {" / "}
          <Link to={`/categoria/${product.category}`} className="hover:underline capitalize">
            {product.category}
          </Link>
          {" / "}
          <span>{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-[#F5F5F5] overflow-hidden">
              <ImageWithFallback
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((img, index) => (
                  <div key={index} className="aspect-square bg-[#F5F5F5] overflow-hidden cursor-pointer hover:opacity-75 transition-opacity">
                    <ImageWithFallback
                      src={img}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl mb-2">{product.name}</h1>
              <p className="text-2xl font-semibold">${product.price.toFixed(2)} MXN</p>
            </div>

            <p className="text-gray-700">{product.description}</p>

            {/* Size Selector */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold">Talla</h3>
                {!selectedSize && <span className="text-sm text-red-600">Selecciona una talla</span>}
              </div>
              <div className="grid grid-cols-5 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    disabled={!product.inStock}
                    className={`py-3 border transition-colors ${
                      selectedSize === size
                        ? "border-[#111111] bg-[#111111] text-white"
                        : "border-gray-300 hover:border-[#111111]"
                    } ${!product.inStock ? "opacity-50 cursor-not-allowed" : ""}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div>
              <h3 className="font-semibold mb-3">Cantidad</h3>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-gray-300 hover:border-[#111111] transition-colors"
                >
                  -
                </button>
                <span className="w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-gray-300 hover:border-[#111111] transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className={`w-full py-4 text-white transition-colors ${
                  product.inStock
                    ? "bg-[#111111] hover:bg-gray-800"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                {product.inStock ? "Agregar al carrito" : "Agotado"}
              </button>

              <button
                onClick={handleAddToFavorites}
                className={`w-full py-4 border transition-colors ${
                  isFavorite
                    ? "border-[#111111] bg-[#111111] text-white"
                    : "border-gray-300 hover:border-[#111111]"
                }`}
              >
                <Heart className={`w-5 h-5 inline mr-2 ${isFavorite ? "fill-current" : ""}`} />
                {isFavorite ? "En favoritos" : "Agregar a favoritos"}
              </button>
            </div>

            {/* Shipping Info */}
            <div className="border-t pt-6 space-y-4">
              <div className="flex items-start gap-3">
                <Truck className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Envío estimado</p>
                  <p className="text-sm text-gray-600">3-5 días hábiles</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Disponibilidad inmediata</p>
                  <p className="text-sm text-gray-600">Producto en stock listo para enviar</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Undo2 className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Devoluciones gratuitas</p>
                  <p className="text-sm text-gray-600">30 días para devoluciones</p>
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="border-t pt-6">
              <h3 className="font-semibold mb-3">Detalles del producto</h3>
              <div className="space-y-2 text-sm text-gray-700">
                {product.style && (
                  <p>
                    <span className="font-semibold">Estilo:</span> {product.style}
                  </p>
                )}
                {product.season && (
                  <p>
                    <span className="font-semibold">Temporada:</span> {product.season}
                  </p>
                )}
                <p>
                  <span className="font-semibold">Colores disponibles:</span>{" "}
                  {product.colors.join(", ")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
