import { Link } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex items-center justify-center py-20">
        <div className="text-center">
          <h1 className="text-6xl font-light mb-4">404</h1>
          <h2 className="text-2xl mb-6">Página no encontrada</h2>
          <p className="text-gray-600 mb-8">
            Lo sentimos, la página que buscas no existe.
          </p>
          <Link
            to="/"
            className="inline-block bg-[#111111] text-white px-8 py-3 hover:bg-gray-800 transition-colors"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
