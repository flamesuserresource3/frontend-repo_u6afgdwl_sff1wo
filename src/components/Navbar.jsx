import { ShoppingCart, Search, User, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Brand */}
          <div className="flex items-center gap-3">
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              aria-label="Open menu"
              onClick={() => setMobileOpen((v) => !v)}
            >
              <Menu className="h-5 w-5" />
            </button>
            <a href="#" className="flex items-center gap-2">
              <img
                src="https://images.unsplash.com/photo-1606166324730-c91e579805bb?q=80&w=160&auto=format&fit=crop"
                alt="Belanja Papua logo"
                className="h-8 w-8 rounded object-cover"
              />
              <span className="font-bold text-lg tracking-tight">BelanjaPapua</span>
            </a>
          </div>

          {/* Center: Search */}
          <div className="hidden md:flex items-center flex-1 max-w-xl mx-6">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="search"
                placeholder="Cari produk Papua: kopi, noken, kerajinan..."
                className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 bg-white/70"
              />
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg hover:bg-gray-100" aria-label="Account">
              <User className="h-5 w-5" />
            </button>
            <button className="p-2 rounded-lg hover:bg-gray-100 relative" aria-label="Cart">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 rounded-full bg-emerald-500 text-white text-[10px] px-1.5 py-0.5">2</span>
            </button>
          </div>
        </div>

        {/* Mobile search */}
        <div className="md:hidden pb-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="search"
              placeholder="Cari produk Papua"
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 bg-white/70"
            />
          </div>
        </div>

        {/* Mobile menu (simple) */}
        {mobileOpen && (
          <nav className="md:hidden pb-4 space-y-1">
            {["Beranda", "Produk", "Promo", "Tentang", "Kontak"].map((item) => (
              <a
                key={item}
                href="#"
                className="block px-3 py-2 rounded-lg hover:bg-gray-100"
                onClick={() => setMobileOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
