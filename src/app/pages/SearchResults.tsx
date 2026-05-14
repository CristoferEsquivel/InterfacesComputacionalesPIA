import { useSearchParams, Link } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ProductCard } from "../components/ProductCard";
import { searchProducts } from "../data/products";

export function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const results = searchProducts(query);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl mb-2">RESULTADOS DE BÚSQUEDA</h1>
          <p className="text-gray-600">
            {results.length > 0 ? (
              <>
                {results.length} resultado{results.length !== 1 ? "s" : ""} para "{query}"
              </>
            ) : (
              <>No se encontraron resultados para "{query}"</>
            )}
          </p>
        </div>

        {results.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {results.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg mb-6">
              No encontramos productos que coincidan con tu búsqueda.
            </p>
            <p className="text-gray-600 mb-8">
              Intenta con otras palabras clave o explora nuestras categorías.
            </p>
            <Link
              to="/categoria/mujer"
              className="inline-block bg-[#111111] text-white px-8 py-3 hover:bg-gray-800 transition-colors"
            >
              Explorar productos
            </Link>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
