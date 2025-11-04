export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <img
                src="https://images.unsplash.com/photo-1606166324730-c91e579805bb?q=80&w=160&auto=format&fit=crop"
                alt="Belanja Papua logo"
                className="h-8 w-8 rounded object-cover"
              />
              <span className="font-bold text-lg tracking-tight">BelanjaPapua</span>
            </div>
            <p className="mt-3 text-gray-600 max-w-md">
              Marketplace yang menghubungkan pembeli di seluruh Indonesia dengan
              pengrajin dan UMKM Papua. Setiap transaksi membantu ekonomi lokal.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Bantuan</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:underline">Cara Belanja</a></li>
              <li><a href="#" className="hover:underline">Pembayaran</a></li>
              <li><a href="#" className="hover:underline">Pengiriman</a></li>
              <li><a href="#" className="hover:underline">Pusat Bantuan</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Perusahaan</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:underline">Tentang</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">Karier</a></li>
              <li><a href="#" className="hover:underline">Kontak</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-100 text-sm text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} BelanjaPapua. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:underline">Syarat & Ketentuan</a>
            <a href="#" className="hover:underline">Kebijakan Privasi</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
