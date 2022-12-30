import React from 'react'
//components
import HeaderBanner from '../components/HeaderBanner'
import CategoriesBanner from '../components/CategoriesBanner'
import Promos from '../components/Promos'
import Featured from '../components/Featured'
import FooterBanner from '../components/FooterBanner'
//Style
import '../assets/style/style.scss'

export default function Home() {
  return (
    <div className='home'>
      <main>
        <HeaderBanner />
        <CategoriesBanner />
        <Promos />

        {/* 2 featured components with different 
        props for laptop & smartphones*/}

        <Featured />
        <FooterBanner />
      </main>
    </div>
  )
}
