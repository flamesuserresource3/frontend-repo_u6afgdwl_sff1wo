import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";

function App() {
  const products = [
    {
      id: 1,
      name: "Kopi Arabika Wamena 250g",
      category: "Minuman",
      price: 78000,
      originalPrice: 90000,
      rating: 4.8,
      badge: "Terlaris",
      image:
        "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Noken Anyaman Asli Papua",
      category: "Kerajinan",
      price: 165000,
      rating: 4.9,
      badge: "UMKM",
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Ukiran Kayu Motif Cendrawasih",
      category: "Seni & Dekorasi",
      price: 245000,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1562183241-b937e95585b6?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 4,
      name: "Cokelat Papua Single Origin 70%",
      category: "Makanan",
      price: 52000,
      originalPrice: 59000,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1548907040-4bea6b3c1a69?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 5,
      name: "Kalung Manik-manikan Papua",
      category: "Aksesori",
      price: 69000,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 6,
      name: "Keripik Keladi Khas Papua",
      category: "Makanan Ringan",
      price: 24000,
      rating: 4.4,
      image:
        "https://images.unsplash.com/photo-1514511547117-f9c3a1e5e66e?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 7,
      name: "Topi Motif Papua Bordir",
      category: "Fashion",
      price: 85000,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1545289414-1c3cb1c06238?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 8,
      name: "Tas Anyam Daun Pandan",
      category: "Kerajinan",
      price: 135000,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1545579133-99bb5ab1a0e8?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <ProductGrid products={products} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
