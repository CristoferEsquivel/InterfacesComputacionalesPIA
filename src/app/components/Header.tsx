import { Link, useNavigate } from "react-router";
import { Search, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { ImageWithFallback } from "./figma/ImageWithFallback";


export function Header() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const { items, cartCount, removeFromCart, updateQuantity, isCartOpen, setIsCartOpen } = useCart();

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/busqueda?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };


  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#F5F5F5]">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar with logo and search */}
        <div className="flex items-center justify-between h-20 gap-8">
          {/* Left space */}
          <div className="flex-1" />

          {/* Centered logo */}
          <Link to="/" className="flex-shrink-0">
            <h1 className="text-2xl tracking-[0.3em] font-light">ZARA</h1>
          </Link>

          {/* Right search & Cart */}
          <div className="flex-1 flex items-center justify-end gap-4">
            <form onSubmit={handleSearch} className="hidden md:block">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar productos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-48 lg:w-64 px-4 py-2 pr-10 border border-gray-300 focus:outline-none focus:border-[#111111] transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  <Search className="w-5 h-5 text-gray-500" />
                </button>
              </div>
            </form>

            {/* Cart Icon with Counter & Preview */}
            <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
              <SheetTrigger asChild>
                <button className="relative p-2 hover:bg-gray-100 transition-colors">
                  <ShoppingBag className="w-6 h-6 text-[#111111]" />
                  {cartCount > 0 && (
                    <span className="absolute top-0 right-0 bg-[#111111] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </button>
              </SheetTrigger>

              <SheetContent side="right" className="w-full sm:max-w-md flex flex-col p-0">
                <SheetHeader className="p-6 border-b">
                  <SheetTitle className="text-xl font-light tracking-widest">MI CARRITO ({cartCount})</SheetTitle>
                </SheetHeader>
                
                <div className="flex-1 overflow-y-auto p-6">
                  {items.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-center">
                      <ShoppingBag className="w-12 h-12 text-gray-300 mb-4" />
                      <p className="text-gray-500">Tu carrito está vacío</p>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {items.map((item) => (
                        <div key={`${item.id}-${item.size}`} className="flex gap-4">
                          <div className="w-20 h-28 bg-[#F5F5F5] flex-shrink-0">
                            <ImageWithFallback
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1 flex flex-col justify-between">
                            <div>
                              <div className="flex justify-between items-start">
                                <h4 className="text-sm font-medium pr-4">{item.name}</h4>
                                <button 
                                  onClick={() => removeFromCart(item.id, item.size)}
                                  className="text-xs text-gray-400 hover:text-black underline"
                                >
                                  Eliminar
                                </button>
                              </div>
                              <p className="text-xs text-gray-500 mt-1">Talla: {item.size}</p>
                              <div className="flex items-center gap-2 mt-2">
                                <button 
                                  onClick={() => updateQuantity(item.id, item.size, Math.max(1, item.quantity - 1))}
                                  className="w-6 h-6 border flex items-center justify-center text-xs"
                                >-</button>
                                <span className="text-xs">{item.quantity}</span>
                                <button 
                                  onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                                  className="w-6 h-6 border flex items-center justify-center text-xs"
                                >+</button>
                              </div>
                            </div>
                            <p className="text-sm font-semibold">${(item.price * item.quantity).toFixed(2)} MXN</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {items.length > 0 && (
                  <div className="p-6 border-t bg-gray-50 space-y-4">
                    <div className="flex justify-between items-center text-lg font-semibold">
                      <span>TOTAL</span>
                      <span>${subtotal.toFixed(2)} MXN</span>
                    </div>
                    <p className="text-[10px] text-gray-500 uppercase tracking-wider">
                      Impuestos incluidos. Envío calculado al finalizar.
                    </p>
                    <div className="flex flex-col gap-3">
                      <button 
                        onClick={() => {
                          navigate("/carrito");
                        }}
                        className="w-full bg-[#111111] text-white py-4 text-sm tracking-widest hover:bg-black transition-colors"
                      >
                        VER CARRITO
                      </button>
                      <button 
                        onClick={() => navigate("/checkout")}
                        className="w-full border border-[#111111] py-4 text-sm tracking-widest hover:bg-gray-100 transition-colors"
                      >
                        FINALIZAR COMPRA
                      </button>
                    </div>
                  </div>
                )}
              </SheetContent>
            </Sheet>
          </div>

        </div>

        {/* Navigation menu */}
        <nav className="border-t border-[#F5F5F5] overflow-x-auto overflow-y-hidden scrollbar-hide">
          <ul className="flex items-center justify-start md:justify-center gap-6 md:gap-8 h-14 px-4 md:px-0 min-w-max md:min-w-0">
            <li>
              <Link
                to="/categoria/mujer"
                className="hover:opacity-70 transition-opacity"
              >
                MUJER
              </Link>
            </li>
            <li>
              <Link
                to="/categoria/hombre"
                className="hover:opacity-70 transition-opacity"
              >
                HOMBRE
              </Link>
            </li>
            <li>
              <Link
                to="/categoria/ninos"
                className="hover:opacity-70 transition-opacity"
              >
                NIÑOS
              </Link>
            </li>
            <li>
              <Link
                to="/categoria/belleza"
                className="hover:opacity-70 transition-opacity"
              >
                BELLEZA
              </Link>
            </li>
            <li>
              <Link
                to="/categoria/novedades"
                className="hover:opacity-70 transition-opacity"
              >
                NOVEDADES
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile search */}
        <div className="md:hidden py-3 px-4 border-t border-[#F5F5F5]">
          <form onSubmit={handleSearch}>
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar productos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pr-10 border border-gray-300 focus:outline-none focus:border-[#111111] transition-colors"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                <Search className="w-5 h-5 text-gray-500" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </header>
  );
}