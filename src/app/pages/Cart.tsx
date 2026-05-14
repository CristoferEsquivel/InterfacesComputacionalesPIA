import { Link, useNavigate } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useCart } from "../context/CartContext";
import { Trash2, ShoppingBag } from "lucide-react";
import { toast } from "sonner";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Cart() {
  const { items, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 0 ? (subtotal >= 1000 ? 0 : 150) : 0;
  const total = subtotal + shipping;

  const handleRemove = (id: string, size: string, name: string) => {
    removeFromCart(id, size);
    toast.success(`${name} eliminado del carrito`, {
      action: {
        label: "Deshacer",
        onClick: () => toast.info("Funcionalidad de deshacer en desarrollo"),
      },
    });
  };

  const handleCheckout = () => {
    if (items.length === 0) {
      toast.error("Tu carrito está vacío");
      return;
    }
    navigate("/checkout");
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center py-20">
          <div className="text-center">
            <ShoppingBag className="w-20 h-20 mx-auto mb-6 text-gray-300" />
            <h2 className="text-2xl mb-4">Tu carrito está vacío</h2>
            <p className="text-gray-600 mb-8">
              Descubre nuestros productos y empieza a comprar
            </p>
            <Link
              to="/categoria/mujer"
              className="inline-block bg-[#111111] text-white px-8 py-3 hover:bg-gray-800 transition-colors"
            >
              Explorar productos
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl mb-8">CARRITO DE COMPRAS</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={`${item.id}-${item.size}`}
                className="flex gap-4 p-4 border border-gray-200"
              >
                <div className="w-24 h-32 bg-[#F5F5F5] flex-shrink-0 overflow-hidden">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-semibold mb-1">{item.name}</h3>
                    <p className="text-sm text-gray-600">Talla: {item.size}</p>
                    <p className="text-sm text-gray-600 mt-2">
                      ${item.price.toFixed(2)} MXN
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            item.size,
                            Math.max(1, item.quantity - 1)
                          )
                        }
                        className="w-8 h-8 border border-gray-300 hover:border-[#111111] transition-colors"
                      >
                        -
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.size, item.quantity + 1)
                        }
                        className="w-8 h-8 border border-gray-300 hover:border-[#111111] transition-colors"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => handleRemove(item.id, item.size, item.name)}
                      className="text-red-600 hover:text-red-700 transition-colors"
                      title="Eliminar producto"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 border border-gray-200 p-6 space-y-4">
              <h2 className="text-xl font-semibold mb-4">RESUMEN DEL PEDIDO</h2>

              <div className="space-y-3 pb-4 border-b border-gray-200">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>${subtotal.toFixed(2)} MXN</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Envío</span>
                  <span>
                    {shipping === 0 ? (
                      <span className="text-green-600">Gratis</span>
                    ) : (
                      `$${shipping.toFixed(2)} MXN`
                    )}
                  </span>
                </div>
                {subtotal < 1000 && subtotal > 0 && (
                  <p className="text-sm text-gray-500">
                    Envío gratis en compras mayores a $1,000 MXN
                  </p>
                )}
              </div>

              <div className="flex justify-between text-xl font-semibold pt-2">
                <span>Total</span>
                <span>${total.toFixed(2)} MXN</span>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full bg-[#111111] text-white py-4 hover:bg-gray-800 transition-colors mt-6"
              >
                Continuar al pago
              </button>

              <Link
                to="/categoria/mujer"
                className="block text-center py-3 border border-gray-300 hover:border-[#111111] transition-colors"
              >
                Seguir comprando
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
