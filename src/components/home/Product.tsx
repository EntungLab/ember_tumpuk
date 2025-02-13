'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { CheckCircleIcon, BeakerIcon, WrenchScrewdriverIcon, ArrowPathIcon, SparklesIcon } from '@heroicons/react/24/outline'

export default function Tutorial() {
  const materials = [
    'Ember bekas dengan tutup (2-3 buah, ukuran 20-25 liter)',
    'Keran plastik (opsional)',
    'Bor atau paku besar',
    'Kain kasa atau kawat nyamuk',
    'Sekam, tanah, atau starter kompos (opsional)',
  ]

  const steps = [
    {
      title: 'Menyiapkan Ember',
      icon: BeakerIcon,
      content: [
        'Ember atas untuk kompos padat',
        'Ember bawah untuk menampung pupuk cair',
        'Jika menggunakan 3 ember: tambahkan ember tengah untuk kompos padat'
      ]
    },
    {
      title: 'Membuat Lubang Drainase & Aerasi',
      icon: WrenchScrewdriverIcon,
      content: [
        'Buat lubang kecil (±5 mm) di bagian bawah ember atas',
        'Buat lubang di sisi ember untuk sirkulasi udara',
        'Pasang keran kecil di ember bawah (opsional)',
        'Jika menggunakan 3 ember, beri lubang pada ember tengah'
      ]
    },
    {
      title: 'Memulai Pengomposan',
      icon: ArrowPathIcon,
      content: [
        'Masukkan sampah organik (sisa sayuran, kulit buah, daun)',
        'Tambahkan tanah, sekam, atau starter kompos',
        'Tutup rapat dan aduk sesekali'
      ]
    },
    {
      title: 'Panen Pupuk',
      icon: SparklesIcon,
      content: [
        'Pupuk cair dapat dipanen setiap 3-7 hari',
        'Encerkan pupuk cair dengan air (1:10)',
        'Pupuk padat siap setelah ±1 bulan'
      ]
    }
  ]

  return (
    <section id="tutorial" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Cara Membuat Ember Tumpuk
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Membuat ember tumpuk untuk pengelolaan sampah organik menjadi pupuk cair dan padat 
            cukup mudah dan bisa dilakukan di rumah.
          </p>
        </motion.div>

        {/* Bahan & Alat */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-lg shadow-lg p-8 mb-16"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Bahan & Alat yang Dibutuhkan
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative h-[300px]">
              <Image
                src="/images/materials.jpg"
                alt="Bahan dan alat ember tumpuk"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <ul className="space-y-4">
                {materials.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Langkah-langkah */}
        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <step.icon className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {index + 1}. {step.title}
              </h3>
              <ul className="space-y-3">
                {step.content.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Tips Tambahan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 bg-green-50 rounded-lg p-8"
        >
          <h3 className="text-xl font-semibold text-green-800 mb-4">
            Tips Penting
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
              <span className="text-gray-700">
                Hindari memasukkan minyak dan daging ke dalam komposter
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
              <span className="text-gray-700">
                Aduk secara berkala untuk mempercepat proses pengomposan
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
              <span className="text-gray-700">
                Pastikan tutup ember selalu rapat untuk menghindari bau
              </span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}