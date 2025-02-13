'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { CheckCircleIcon } from '@heroicons/react/24/outline'

export default function About() {
  const features = [
    'Teknologi pengomposan modern',
    'Ramah lingkungan dan sustainable',
    'Hasil pupuk berkualitas tinggi',
    'Mudah digunakan di rumah',
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Gambar */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px]"
          >
            <Image
              src="/images/about-image.jpg"
              alt="Ember Tumpuk dalam penggunaan"
              fill
              className="object-cover rounded-lg shadow-xl"
              priority
            />
          </motion.div>

          {/* Konten */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-800">
              Tentang Ember Tumpuk
            </h2>
            
            <p className="text-gray-600 leading-relaxed">
              Ember Tumpuk adalah solusi inovatif untuk mengolah sampah organik rumah tangga
              menjadi pupuk berkualitas. Dikembangkan dengan teknologi modern dan pemahaman
              mendalam tentang proses pengomposan, produk kami membantu Anda berkontribusi
              dalam pelestarian lingkungan sambil menghasilkan pupuk organik berkualitas tinggi.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircleIcon className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>

            <div className="pt-6">
              <motion.div
                className="grid grid-cols-2 gap-4 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-3xl font-bold text-green-600">500+</h3>
                  <p className="text-gray-600">Pengguna Aktif</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="text-3xl font-bold text-green-600">1 Ton</h3>
                  <p className="text-gray-600">Sampah Terkelola</p>
                </div>
              </motion.div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors"
            >
              Pelajari Lebih Lanjut
            </motion.button>
          </motion.div>
        </div>

        {/* Bagian Visi & Misi */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 grid md:grid-cols-2 gap-8"
        >
          <div className="bg-green-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-green-800 mb-4">Visi Kami</h3>
            <p className="text-gray-600">
              Menjadi pionir dalam solusi pengelolaan sampah organik yang berkelanjutan
              dan menciptakan lingkungan yang lebih bersih untuk generasi mendatang.
            </p>
          </div>
          <div className="bg-green-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-green-800 mb-4">Misi Kami</h3>
            <p className="text-gray-600">
              Menyediakan solusi praktis dan efektif untuk mengolah sampah organik
              rumah tangga, sambil mengedukasi masyarakat tentang pentingnya
              pengelolaan sampah yang bertanggung jawab.
            </p>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-12">
            Perjalanan Kami
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                year: '2020',
                title: 'Awal Mula',
                description: 'Ide Ember Tumpuk lahir dari keprihatinan akan masalah sampah',
              },
              {
                year: '2021',
                title: 'Pengembangan',
                description: 'Proses riset dan pengembangan produk',
              },
              {
                year: '2022',
                title: 'Peluncuran',
                description: 'Ember Tumpuk resmi diluncurkan ke pasar',
              },
              {
                year: '2023',
                title: 'Ekspansi',
                description: 'Memperluas jangkauan ke berbagai kota',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">{item.year}</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}