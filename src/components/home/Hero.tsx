'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    '/images/hero-bg.jpg',
    '/images/hero-bg2.jpg', 
    '/images/hero-bg3.jpg'
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Ganti slide setiap 5 detik

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <motion.div
          key={slide}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: currentSlide === index ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={slide}
            alt={`Hero Background ${index + 1}`}
            fill
            className="object-cover brightness-50"
            priority
          />
        </motion.div>
      ))}

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

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  )
}