export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 via-white to-white pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center py-14 md:py-20">
          <div>
            <span className="inline-flex items-center gap-2 text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full text-sm font-medium">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Cinta Produk Lokal Papua
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Belanja Produk Asli Papua, Langsung dari Pengrajin
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              Temukan kopi Wamena, noken, ukiran, dan kuliner khas Papua dari UMKM
              lokal. Mudah, aman, dan mendukung ekonomi daerah.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#products"
                className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-emerald-600 text-white font-semibold shadow-sm hover:bg-emerald-700 transition"
              >
                Belanja Sekarang
              </a>
              <a
                href="#categories"
                className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-gray-200 font-semibold hover:bg-gray-50 transition"
              >
                Jelajah Kategori
              </a>
            </div>
            <dl className="mt-8 grid grid-cols-3 gap-6 text-center md:text-left">
              <div>
                <dt className="text-2xl md:text-3xl font-bold">5rb+</dt>
                <dd className="text-gray-500">Produk terkurasi</dd>
              </div>
              <div>
                <dt className="text-2xl md:text-3xl font-bold">100%</dt>
                <dd className="text-gray-500">UMKM lokal</dd>
              </div>
              <div>
                <dt className="text-2xl md:text-3xl font-bold">4.9/5</dt>
                <dd className="text-gray-500">Rating pembeli</dd>
              </div>
            </dl>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1606166324770-17c3250e4ab8?q=80&w=1200&auto=format&fit=crop"
              alt="Kerajinan tangan Papua"
              className="w-full h-[320px] md:h-[480px] object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-lg p-4 hidden md:flex gap-4 items-center">
              <img
                src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=200&auto=format&fit=crop"
                alt="Kopi Wamena"
                className="h-14 w-14 rounded-lg object-cover"
              />
              <div>
                <p className="font-semibold">Kopi Wamena</p>
                <p className="text-sm text-gray-500">Best seller minggu ini</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
