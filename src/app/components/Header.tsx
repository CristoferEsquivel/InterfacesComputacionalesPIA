import { Link, useNavigate } from "react-router";
import { Search } from "lucide-react";
import { useState } from "react";

export function Header() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

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

          {/* Right search */}
          <div className="flex-1 flex items-center justify-end">
            <form onSubmit={handleSearch} className="hidden md:block">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar productos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 px-4 py-2 pr-10 border border-gray-300 focus:outline-none focus:border-[#111111] transition-colors"
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

        {/* Navigation menu */}
        <nav className="border-t border-[#F5F5F5]">
          <ul className="flex items-center justify-center gap-8 h-14">
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
        <div className="md:hidden py-3 border-t border-[#F5F5F5]">
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