export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Kelompok 26 KPM UNSIQ Desa Purborejo</h3>
              <p className="text-gray-400">
                PILKITA "Pilah Sampah Kita Semua"
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Kontak</h4>
              <p className="text-gray-400">Email : Kpmunsiq26@gmail.com
              </p>
              <p className="text-gray-400">Tel: 081239685626</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Ikuti Kami</h4>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/kpm50_kel.26purborejo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-gray-400 hover:text-white">
                  Instagram
                </a>
                <a href="https://www.tiktok.com/@kpm.50.unsiq26purborejo?is_from_webapp=1&sender_device=pc" className="text-gray-400 hover:text-white">
                  Tiktok
                </a>
                <a href="https://youtube.com/@purborejo.official?si=h9Sc4WU032ZU0Xr9" className="text-gray-400 hover:text-white">
                  Youtube
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 Ember Tumpuk. Hak Cipta Dilindungi.</p>
          </div>
        </div>
      </footer>
    )
  }