import React from 'react'
import './Home.css'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import Banner from '../../components/banner/Banner'
import Hero from '../../components/hero/Hero'
import Booking from '../../components/booking/Booking'
import Gallery from '../../components/gallery/Gallery'
import Footer from '../../components/footer/Footer'

function Home() {
  return (
    <div>
        <Header />
        <Navbar />
        <Banner />
        <Hero />
        <Booking />
        <Gallery />
        <Footer />
    </div>
  )
}

export default Home;