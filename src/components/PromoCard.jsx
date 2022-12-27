import React from 'react'

export default function PromoCard({promo}) {
  return (
    <div className='promo_card'>
      <div className='text'>
        <h3>{promo.text}</h3>
        <button className='btn'>Learn more...</button>
      </div>
      <div className="img">
        <img src={promo.img} alt={promo.text} />
      </div>
    </div>
  )
}
