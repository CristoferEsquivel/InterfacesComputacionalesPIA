import { Link } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  const categories = [
    {
      name: "Mujer",
      slug: "mujer",
      image: "https://images.unsplash.com/photo-1617790274211-cbe0e677b425?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGZhc2hpb24lMjBjbG90aGVzJTIwZWxlZ2FudHxlbnwxfHx8fDE3NzIxMzE2Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Elegancia y estilo contemporáneo",
    },
    {
      name: "Hombre",
      slug: "hombre",
      image: "https://images.unsplash.com/photo-1765175095186-401b54a817d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBmYXNoaW9uJTIwc3VpdCUyMG1vZGVybnxlbnwxfHx8fDE3NzIxMTI0OTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Sofisticación para el hombre moderno",
    },
    {
      name: "Niños",
      slug: "ninos",
      image: "https://images.unsplash.com/photo-1695262620869-fedab63bcc41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwY2hpbGRyZW4lMjBmYXNoaW9uJTIwY2xvdGhpbmd8ZW58MXx8fHwxNzcyMTAyMTgxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Moda cómoda y divertida",
    },
    {
      name: "Belleza",
      slug: "belleza",
      image: "https://images.unsplash.com/photo-1600417098578-1e858e93dc88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dHklMjBjb3NtZXRpY3MlMjBza2luY2FyZSUyMHByb2R1Y3RzfGVufDF8fHx8MTc3MjA1MzgyMHww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Productos de cuidado personal",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[70vh] bg-[#F5F5F5]">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1765044145286-2320351f2f03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZmFzaGlvbiUyMG1vZGVsJTIwc3R1ZGlvJTIwbWluaW1hbHxlbnwxfHx8fDE3NzIxMzE2Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Hero fashion"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h2 className="text-5xl md:text-6xl mb-6 tracking-wide">
              NUEVA COLECCIÓN
            </h2>
            <p className="text-xl mb-8">Descubre las últimas tendencias</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/categoria/novedades"
                className="bg-white text-[#111111] px-8 py-3 hover:bg-gray-100 transition-colors"
              >
                Explorar colección
              </Link>
              <Link
                to="/categoria/novedades"
                className="border border-white text-white px-8 py-3 hover:bg-white hover:text-[#111111] transition-colors"
              >
                Ver novedades
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl text-center mb-12">CATEGORÍAS DESTACADAS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.slug}
              to={`/categoria/${category.slug}`}
              className="group relative overflow-hidden bg-[#F5F5F5] aspect-[3/4]"
            >
              <ImageWithFallback
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-2xl mb-2">{category.name}</h3>
                <p className="text-white/90 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  {category.description}
                </p>
                <button className="bg-white text-[#111111] px-6 py-2 w-fit hover:bg-gray-100 transition-colors">
                  Comprar ahora
                </button>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Promotions Section */}
      <section className="bg-[#F5F5F5] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-80 bg-white overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1651336492616-4eebfdd995d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXclMjBhcnJpdmFscyUyMGZhc2hpb24lMjBjb2xsZWN0aW9ufGVufDF8fHx8MTc3MjEzMTY0MHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Promociones"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white">
              <h2 className="text-4xl md:text-5xl mb-4">HASTA 40% DE DESCUENTO</h2>
              <p className="text-xl mb-6">En productos seleccionados</p>
              <Link
                to="/categoria/mujer"
                className="bg-white text-[#111111] px-10 py-3 text-lg hover:bg-gray-100 transition-colors"
              >
                Ver ofertas
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
