'use client'

import dynamic from 'next/dynamic'

const Navbar = dynamic(() => import('@/components/layout/Navbar'))
const Hero = dynamic(() => import('@/components/home/Hero'))
const About = dynamic(() => import('@/components/home/About'))
const Tutorial = dynamic(() => import('@/components/home/Product'))
const Benefits = dynamic(() => import('@/components/home/Benefits'))
const Contact = dynamic(() => import('@/components/home/Contact'))
const Footer = dynamic(() => import('@/components/layout/Footer'))


export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Tutorial />
        <Benefits />
        <Contact />
      </main>
      <Footer />
    </>
  )
}