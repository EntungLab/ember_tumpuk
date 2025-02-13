import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Hero Background"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center text-white"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Ember Tumpuk: Solusi Pengolahan Sampah Menjadi Pupuk Organik
          </h1>
          <p className="text-xl mb-8">
            Ubah sampah organik rumah tangga Anda menjadi pupuk berkualitas dengan cara yang mudah dan ramah lingkungan
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors"
          >
            Pelajari Lebih Lanjut
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}