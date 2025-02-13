export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Ember Tumpuk</h3>
              <p className="text-gray-400">
                Solusi pengolahan sampah organik untuk masa depan yang lebih hijau HIJAU
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Kontak</h4>
              <p className="text-gray-400">Email: info@embertumpuk.com</p>
              <p className="text-gray-400">Tel: (021) 1234-5678</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Ikuti Kami</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  Instagram
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  Facebook
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  Twitter
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