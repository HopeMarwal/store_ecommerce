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
        <HeaderBanner />
        <CategoriesBanner />
        <Promos />
        <Featured />
        <FooterBanner />
    </div>
  )
}
