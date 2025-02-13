import { motion } from 'framer-motion'
import Image from 'next/image'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'

export default function Product() {
  return (
    <section id="product" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Produk Kami
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ember Tumpuk dirancang khusus untuk memudahkan proses pengomposan sampah organik rumah tangga
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px]"
          >
            <Image
              src="/images/product-image.jpg"
              alt="Ember Tumpuk Product"
              fill
              className="object-contain rounded-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ember Tumpuk Premium
            </h3>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Terbuat dari bahan berkualitas tinggi</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Sistem ventilasi yang optimal</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Mudah dibersihkan dan tahan lama</span>
              </li>
            </ul>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors"
            >
              <ShoppingCartIcon className="h-5 w-5 mr-2" />
              Beli Sekarang
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}