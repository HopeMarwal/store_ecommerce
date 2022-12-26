import React from 'react'
//components
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import HeaderBanner from '../components/HeaderBanner'
import CategoriesBanner from '../components/CategoriesBanner'
import Promos from '../components/Promos'
import Featured from '../components/Featured'
import FooterBanner from '../components/FooterBanner'
import Footer from '../components/Footer'
//Style
import '../assets/style/style.scss'

export default function Home() {
  return (
    <div className='home'>
      <Header />
      <NavBar />
      <main>
        <HeaderBanner />
        <CategoriesBanner />
        <Promos />

        {/* 2 featured components with different 
        props for laptop & smartphones*/}

        <Featured />
        <FooterBanner />
      </main>

      <Footer />
    </div>
  )
}
