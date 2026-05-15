import { useState } from "react";
import { useNavigate } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useCart } from "../context/CartContext";
import { Check, Loader2, ArrowLeft, CreditCard, Truck, ClipboardCheck } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Separator } from "../components/ui/separator";

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
                    className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${
                      currentStep >= step.number
                        ? "border-[#111111] bg-[#111111] text-white scale-110 shadow-lg"
                        : "border-gray-200 text-gray-300 bg-white"
                    }`}
                  >
                    {currentStep > step.number ? (
                      <Check className="w-6 h-6" />
                    ) : (
                      <span className="text-sm font-bold">{step.number}</span>
                    )}
                  </div>
                  <p
                    className={`text-xs mt-3 uppercase tracking-widest font-medium ${
                      currentStep >= step.number
                        ? "text-[#111111]"
                        : "text-gray-400"
                    }`}
                  >
                    {step.title}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="relative flex-1 h-0.5 bg-gray-100 mx-2">
                    <div
                      className="absolute inset-0 bg-[#111111] transition-all duration-700 ease-in-out"
                      style={{ width: currentStep > step.number ? "100%" : "0%" }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>


        {/* Step 1: Shipping Information */}
        {currentStep === 1 && (
          <form onSubmit={handleShippingSubmit} className="max-w-2xl space-y-8 bg-white p-8 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <Truck className="w-5 h-5" />
              <h2 className="text-xl font-light tracking-widest uppercase">Detalles de entrega</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre completo *</Label>
                <Input
                  id="name"
                  value={shippingData.name}
                  onChange={(e) =>
                    setShippingData({ ...shippingData, name: e.target.value })
                  }
                  placeholder="Ej. Juan Pérez"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Correo electrónico *</Label>
                <Input
                  id="email"
                  type="email"
                  value={shippingData.email}
                  onChange={(e) =>
                    setShippingData({ ...shippingData, email: e.target.value })
                  }
                  placeholder="juan@ejemplo.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Teléfono *</Label>
              <Input
                id="phone"
                type="tel"
                value={shippingData.phone}
                onChange={(e) =>
                  setShippingData({ ...shippingData, phone: e.target.value })
                }
                placeholder="10 dígitos"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Dirección *</Label>
              <Input
                id="address"
                value={shippingData.address}
                onChange={(e) =>
                  setShippingData({ ...shippingData, address: e.target.value })
                }
                placeholder="Calle, número, colonia"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="city">Ciudad *</Label>
                <Input
                  id="city"
                  value={shippingData.city}
                  onChange={(e) =>
                    setShippingData({ ...shippingData, city: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="state">Estado *</Label>
                <Input
                  id="state"
                  value={shippingData.state}
                  onChange={(e) =>
                    setShippingData({ ...shippingData, state: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="zip">Código Postal *</Label>
                <Input
                  id="zip"
                  value={shippingData.zipCode}
                  onChange={(e) =>
                    setShippingData({
                      ...shippingData,
                      zipCode: e.target.value,
                    })
                  }
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full py-6 bg-[#111111] hover:bg-black text-white rounded-none tracking-widest transition-all hover:shadow-lg"
            >
              CONTINUAR AL PAGO
            </Button>
          </form>
        )}


        {/* Step 2: Payment Information */}
        {currentStep === 2 && (
          <form onSubmit={handlePaymentSubmit} className="max-w-2xl space-y-8 bg-white p-8 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <CreditCard className="w-5 h-5" />
              <h2 className="text-xl font-light tracking-widest uppercase">Información de pago</h2>
            </div>

            <div className="space-y-2">
              <Label htmlFor="card">Número de tarjeta *</Label>
              <Input
                id="card"
                value={paymentData.cardNumber}
                onChange={(e) =>
                  setPaymentData({
                    ...paymentData,
                    cardNumber: e.target.value.replace(/\D/g, '').replace(/(\d{4})(?=\d)/g, '$1 '),
                  })
                }
                placeholder="0000 0000 0000 0000"
                maxLength={19}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="cardName">Nombre en la tarjeta *</Label>
              <Input
                id="cardName"
                value={paymentData.cardName}
                onChange={(e) =>
                  setPaymentData({ ...paymentData, cardName: e.target.value.toUpperCase() })
                }
                placeholder="COMO APARECE EN LA TARJETA"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="expiry">Fecha de vencimiento *</Label>
                <Input
                  id="expiry"
                  value={paymentData.expiryDate}
                  onChange={(e) =>
                    setPaymentData({
                      ...paymentData,
                      expiryDate: e.target.value.replace(/\D/g, '').replace(/(\d{2})(?=\d)/g, '$1/'),
                    })
                  }
                  placeholder="MM/AA"
                  maxLength={5}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="cvv">CVV *</Label>
                <Input
                  id="cvv"
                  type="password"
                  value={paymentData.cvv}
                  onChange={(e) =>
                    setPaymentData({ ...paymentData, cvv: e.target.value.replace(/\D/g, '') })
                  }
                  placeholder="123"
                  maxLength={3}
                  required
                />
              </div>
            </div>

            <Separator className="my-6" />

            {/* Order Summary */}
            <div className="space-y-3">
              <h3 className="font-medium text-sm uppercase tracking-wider text-gray-500">Resumen del pedido</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>${subtotal.toFixed(2)} MXN</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Envío</span>
                  <span>
                    {shipping === 0 ? (
                      <span className="text-green-600 font-medium">GRATIS</span>
                    ) : (
                      `$${shipping.toFixed(2)} MXN`
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-lg font-bold pt-4 border-t border-dashed">
                  <span>TOTAL</span>
                  <span>${total.toFixed(2)} MXN</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setCurrentStep(1)}
                className="flex-1 py-6 rounded-none border-gray-200 hover:border-black transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                VOLVER
              </Button>
              <Button
                type="submit"
                disabled={processing}
                className="flex-1 py-6 bg-[#111111] hover:bg-black text-white rounded-none tracking-widest disabled:bg-gray-300"
              >
                {processing ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                    PROCESANDO...
                  </>
                ) : (
                  "FINALIZAR PEDIDO"
                )}
              </Button>
            </div>
          </form>
        )}


        {/* Step 3: Confirmation */}
        {currentStep === 3 && (
          <div className="max-w-2xl text-center py-12 bg-white p-12 border border-gray-100 shadow-xl animate-in fade-in zoom-in duration-500">
            <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-100">
              <ClipboardCheck className="w-12 h-12 text-green-600" />
            </div>

            <h2 className="text-4xl font-light tracking-widest mb-4 uppercase">¡Gracias por tu compra!</h2>
            <p className="text-gray-500 mb-2">
              Tu pedido ha sido recibido y está siendo procesado.
            </p>
            <div className="inline-block bg-gray-50 px-6 py-2 rounded-full text-sm font-mono text-gray-600 mb-12">
              ORDEN: {orderNumber}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-12">
              <div className="space-y-4 p-6 bg-gray-50/50 border border-gray-100">
                <h3 className="font-bold text-xs uppercase tracking-widest text-gray-400">Detalles de envío</h3>
                <div className="space-y-2 text-sm">
                  <p className="font-semibold">{shippingData.name}</p>
                  <p className="text-gray-600">{shippingData.email}</p>
                  <p className="text-gray-600 leading-relaxed">
                    {shippingData.address}<br />
                    {shippingData.city}, {shippingData.state}<br />
                    {shippingData.zipCode}
                  </p>
                </div>
              </div>
              <div className="space-y-4 p-6 bg-gray-50/50 border border-gray-100">
                <h3 className="font-bold text-xs uppercase tracking-widest text-gray-400">Resumen final</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Artículos</span>
                    <span>{items.length}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg pt-4 border-t border-gray-200">
                    <span>Total pagado</span>
                    <span>${total.toFixed(2)} MXN</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-400 mb-8 max-w-md mx-auto">
              Te hemos enviado un correo de confirmación con los detalles del seguimiento.
            </p>

            <Button
              onClick={() => navigate("/")}
              className="bg-[#111111] hover:bg-black text-white px-12 py-7 rounded-none tracking-[0.3em] text-sm transition-all hover:shadow-2xl"
            >
              VOLVER A LA TIENDA
            </Button>
          </div>
        )}

      </div>

      <Footer />
    </div>
  );
}
