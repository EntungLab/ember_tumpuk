'use client'

import { motion } from 'framer-motion'
import { 
  LightBulbIcon,
  ArrowPathIcon,
  SparklesIcon,
  HeartIcon 
} from '@heroicons/react/24/outline'

const benefits = [
  {
    icon: LightBulbIcon,
    title: 'Ramah Lingkungan',
    description: 'Mengurangi sampah organik yang terbuang ke TPA'
  },
  {
    icon: ArrowPathIcon,
    title: 'Daur Ulang',
    description: 'Mengubah sampah menjadi pupuk berkualitas'
  },
  {
    icon: SparklesIcon,
    title: 'Mudah Digunakan',
    description: 'Sistem yang sederhana dan praktis'
  },
  {
    icon: HeartIcon,
    title: 'Sehat',
    description: 'Menciptakan lingkungan yang lebih bersih'
  }
]

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Manfaat Ember Tumpuk
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dengan menggunakan Ember Tumpuk, Anda berkontribusi dalam menjaga kelestarian lingkungan
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow"
            >
              <benefit.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}