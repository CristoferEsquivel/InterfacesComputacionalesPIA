import { useState } from "react";
import { useNavigate } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useCart } from "../context/CartContext";
import { Check, Loader2 } from "lucide-react";

export function Checkout() {
  const navigate = useNavigate();
  const { items, clearCart } = useCart();
  const [currentStep, setCurrentStep] = useState(1);
  const [processing, setProcessing] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");

  const [shippingData, setShippingData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  });

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal >= 1000 ? 0 : 150;
  const total = subtotal + shipping;

  const steps = [
    { number: 1, title: "Datos de envío" },
    { number: 2, title: "Método de pago" },
    { number: 3, title: "Confirmación" },
  ];

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep(2);
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      const randomOrderNumber = `ZARA-${Math.random().toString(36).substring(2, 10).toUpperCase()}`;
      setOrderNumber(randomOrderNumber);
      setProcessing(false);
      setCurrentStep(3);
      clearCart();
    }, 2500);
  };

  if (items.length === 0 && currentStep !== 3) {
    navigate("/carrito");
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl mb-8">FINALIZAR COMPRA</h1>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors ${
                      currentStep >= step.number
                        ? "border-[#111111] bg-[#111111] text-white"
                        : "border-gray-300 text-gray-400"
                    }`}
                  >
                    {currentStep > step.number ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      step.number
                    )}
                  </div>
                  <p
                    className={`text-sm mt-2 ${
                      currentStep >= step.number
                        ? "text-[#111111] font-semibold"
                        : "text-gray-400"
                    }`}
                  >
                    {step.title}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`h-0.5 flex-1 transition-colors ${
                      currentStep > step.number ? "bg-[#111111]" : "bg-gray-300"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step 1: Shipping Information */}
        {currentStep === 1 && (
          <form onSubmit={handleShippingSubmit} className="max-w-2xl space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  value={shippingData.name}
                  onChange={(e) =>
                    setShippingData({ ...shippingData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#111111]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Correo electrónico *
                </label>
                <input
                  type="email"
                  value={shippingData.email}
                  onChange={(e) =>
                    setShippingData({ ...shippingData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#111111]"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                Teléfono *
              </label>
              <input
                type="tel"
                value={shippingData.phone}
                onChange={(e) =>
                  setShippingData({ ...shippingData, phone: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#111111]"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                Dirección *
              </label>
              <input
                type="text"
                value={shippingData.address}
                onChange={(e) =>
                  setShippingData({ ...shippingData, address: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#111111]"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Ciudad *
                </label>
                <input
                  type="text"
                  value={shippingData.city}
                  onChange={(e) =>
                    setShippingData({ ...shippingData, city: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#111111]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Estado *
                </label>
                <input
                  type="text"
                  value={shippingData.state}
                  onChange={(e) =>
                    setShippingData({ ...shippingData, state: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#111111]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Código Postal *
                </label>
                <input
                  type="text"
                  value={shippingData.zipCode}
                  onChange={(e) =>
                    setShippingData({
                      ...shippingData,
                      zipCode: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#111111]"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#111111] text-white py-4 hover:bg-gray-800 transition-colors"
            >
              Continuar al pago
            </button>
          </form>
        )}

        {/* Step 2: Payment Information */}
        {currentStep === 2 && (
          <form onSubmit={handlePaymentSubmit} className="max-w-2xl space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-2">
                Número de tarjeta *
              </label>
              <input
                type="text"
                value={paymentData.cardNumber}
                onChange={(e) =>
                  setPaymentData({
                    ...paymentData,
                    cardNumber: e.target.value,
                  })
                }
                placeholder="1234 5678 9012 3456"
                maxLength={19}
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#111111]"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                Nombre en la tarjeta *
              </label>
              <input
                type="text"
                value={paymentData.cardName}
                onChange={(e) =>
                  setPaymentData({ ...paymentData, cardName: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#111111]"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Fecha de vencimiento *
                </label>
                <input
                  type="text"
                  value={paymentData.expiryDate}
                  onChange={(e) =>
                    setPaymentData({
                      ...paymentData,
                      expiryDate: e.target.value,
                    })
                  }
                  placeholder="MM/AA"
                  maxLength={5}
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#111111]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  CVV *
                </label>
                <input
                  type="text"
                  value={paymentData.cvv}
                  onChange={(e) =>
                    setPaymentData({ ...paymentData, cvv: e.target.value })
                  }
                  placeholder="123"
                  maxLength={3}
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#111111]"
                  required
                />
              </div>
            </div>

            {/* Order Summary */}
            <div className="border-t pt-6 mt-6">
              <h3 className="font-semibold mb-4">Resumen del pedido</h3>
              <div className="space-y-2">
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
                <div className="flex justify-between text-xl font-semibold pt-2 border-t">
                  <span>Total</span>
                  <span>${total.toFixed(2)} MXN</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setCurrentStep(1)}
                className="flex-1 border border-gray-300 py-4 hover:border-[#111111] transition-colors"
              >
                Volver
              </button>
              <button
                type="submit"
                disabled={processing}
                className="flex-1 bg-[#111111] text-white py-4 hover:bg-gray-800 transition-colors disabled:bg-gray-400 flex items-center justify-center gap-2"
              >
                {processing ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Procesando pago...
                  </>
                ) : (
                  "Realizar pago"
                )}
              </button>
            </div>
          </form>
        )}

        {/* Step 3: Confirmation */}
        {currentStep === 3 && (
          <div className="max-w-2xl text-center py-12">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-12 h-12 text-white" />
            </div>

            <h2 className="text-3xl mb-4">¡Pedido confirmado!</h2>
            <p className="text-gray-600 mb-2">
              Tu pedido ha sido procesado exitosamente
            </p>
            <p className="text-xl font-semibold mb-8">
              Número de pedido: {orderNumber}
            </p>

            <div className="bg-[#F5F5F5] p-6 mb-8 text-left">
              <h3 className="font-semibold mb-4">Detalles del envío</h3>
              <div className="space-y-2 text-sm">
                <p>
                  <span className="font-semibold">Nombre:</span>{" "}
                  {shippingData.name}
                </p>
                <p>
                  <span className="font-semibold">Email:</span>{" "}
                  {shippingData.email}
                </p>
                <p>
                  <span className="font-semibold">Dirección:</span>{" "}
                  {shippingData.address}, {shippingData.city},{" "}
                  {shippingData.state}, {shippingData.zipCode}
                </p>
              </div>
            </div>

            <p className="text-gray-600 mb-8">
              Recibirás un correo de confirmación con los detalles de tu pedido
              y el seguimiento del envío.
            </p>

            <button
              onClick={() => navigate("/")}
              className="bg-[#111111] text-white px-12 py-4 hover:bg-gray-800 transition-colors"
            >
              Seguir comprando
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
