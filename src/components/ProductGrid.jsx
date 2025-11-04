import { Star, ShoppingCart } from "lucide-react";

const formatCurrency = (n) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(n);

export default function ProductGrid({ products = [] }) {
  return (
    <section id="products" className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Produk Unggulan</h2>
            <p className="text-gray-500 mt-1">Pilihan terbaik dari UMKM Papua</p>
          </div>
          <a href="#" className="text-emerald-700 font-medium hover:underline">Lihat semua</a>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }) {
  return (
    <div className="group border border-gray-100 rounded-2xl overflow-hidden bg-white hover:shadow-lg transition">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="h-52 w-full object-cover"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 text-xs font-semibold bg-white/90 px-2 py-1 rounded-full border border-gray-200">
            {product.badge}
          </span>
        )}
      </div>
      <div className="p-4">
        <p className="text-xs text-emerald-700 font-medium">{product.category}</p>
        <h3 className="mt-1 font-semibold group-hover:text-emerald-700 transition line-clamp-2">
          {product.name}
        </h3>
        <div className="mt-2 flex items-center gap-1 text-amber-500">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={`h-4 w-4 ${i < Math.round(product.rating) ? "fill-amber-400" : ""}`} />
          ))}
          <span className="ml-1 text-xs text-gray-500">{product.rating.toFixed(1)}</span>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <div>
            <p className="text-lg font-bold">{formatCurrency(product.price)}</p>
            {product.originalPrice && (
              <p className="text-sm text-gray-400 line-through">{formatCurrency(product.originalPrice)}</p>
            )}
          </div>
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700">
            <ShoppingCart className="h-4 w-4" />
            Tambah
          </button>
        </div>
      </div>
    </div>
  );
}
