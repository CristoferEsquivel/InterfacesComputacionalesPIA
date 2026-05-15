import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ProductCard } from "../components/ProductCard";
import { ProductSkeleton } from "../components/ProductSkeleton";
import { products } from "../data/products";
import { Slider } from "../components/Slider";
import { useRef } from "react";

export function Category() {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const { categoryName } = useParams();
  const [loading, setLoading] = useState(true);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [sortBy, setSortBy] = useState("popularity");
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [inStockOnly, setInStockOnly] = useState(false);

  useEffect(() => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set initial load if category changed
    const isCategoryChange = !timeoutRef.current; 
    if (isCategoryChange) setIsInitialLoad(true);
    
    setLoading(true);

    timeoutRef.current = setTimeout(() => {
      let filtered = categoryName === "novedades" 
        ? products 
        : products.filter((p) => p.category === categoryName?.toLowerCase());

      // Apply filters
      if (inStockOnly) {
        filtered = filtered.filter((p) => p.inStock);
      }

      if (selectedSizes.length > 0) {
        filtered = filtered.filter((p) =>
          p.sizes.some((size) => selectedSizes.includes(size))
        );
      }

      if (selectedColors.length > 0) {
        filtered = filtered.filter((p) =>
          p.colors.some((color) => selectedColors.includes(color))
        );
      }

      filtered = filtered.filter(
        (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
      );

      // Apply sorting
      switch (sortBy) {
        case "price-asc":
          filtered.sort((a, b) => a.price - b.price);
          break;
        case "price-desc":
          filtered.sort((a, b) => b.price - a.price);
          break;
        case "newest":
          break;
        default:
          break;
      }

      setFilteredProducts(filtered);
      setLoading(false);
      setIsInitialLoad(false);
    }, 400); // Reduced delay for better responsiveness

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [categoryName, sortBy, priceRange, selectedSizes, selectedColors, inStockOnly]);

  const toggleSize = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const toggleColor = (color: string) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  const allSizes = ["XS", "S", "M", "L", "XL"];
  const allColors = ["Negro", "Blanco", "Azul", "Gris", "Beige", "Multicolor"];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl mb-8 uppercase">{categoryName}</h1>

        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28 space-y-6">
              {/* Sort */}
              <div>
                <h3 className="font-semibold mb-3">Ordenar por</h3>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full border border-gray-300 px-3 py-2 focus:outline-none focus:border-[#111111]"
                >
                  <option value="popularity">Popularidad</option>
                  <option value="price-asc">Precio: menor a mayor</option>
                  <option value="price-desc">Precio: mayor a menor</option>
                  <option value="newest">Novedades</option>
                </select>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="font-semibold mb-3">Precio</h3>
                <Slider
                  value={priceRange}
                  onChange={setPriceRange}
                  min={0}
                  max={2000}
                  step={50}
                />
                <div className="flex justify-between text-sm text-gray-600 mt-2">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>

              {/* Sizes */}
              <div>
                <h3 className="font-semibold mb-3">Talla</h3>
                <div className="space-y-2">
                  {allSizes.map((size) => (
                    <label key={size} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedSizes.includes(size)}
                        onChange={() => toggleSize(size)}
                        className="w-4 h-4"
                      />
                      <span className="text-sm">{size}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Colors */}
              <div>
                <h3 className="font-semibold mb-3">Color</h3>
                <div className="space-y-2">
                  {allColors.map((color) => (
                    <label key={color} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedColors.includes(color)}
                        onChange={() => toggleColor(color)}
                        className="w-4 h-4"
                      />
                      <span className="text-sm">{color}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div>
                <h3 className="font-semibold mb-3">Disponibilidad</h3>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => setInStockOnly(e.target.checked)}
                    className="w-4 h-4"
                  />
                  <span className="text-sm">En stock</span>
                </label>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            <p className="text-gray-600 mb-6">
              {filteredProducts.length} producto{filteredProducts.length !== 1 ? "s" : ""}
            </p>

            {isInitialLoad ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, i) => (
                  <ProductSkeleton key={i} />
                ))}
              </div>
            ) : (
              <div className={`transition-opacity duration-300 ${loading ? "opacity-50" : "opacity-100"}`}>
                {filteredProducts.length === 0 ? (
                  <div className="text-center py-16">
                    <p className="text-gray-500 text-lg">
                      No se encontraron productos con los filtros seleccionados
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                    {filteredProducts.map((product) => (
                      <ProductCard key={product.id} {...product} />
                    ))}
                  </div>
                )}
              </div>
            )}

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
