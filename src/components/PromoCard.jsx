import React from 'react'

export default function PromoCard({img, text}) {
  return (
    <div className='promo_card'>
      <div className='text'>
        <h3>{text}</h3>
        <button className='btn'>Learn more...</button>
      </div>
      <div className="img">
        <img src={img} alt={text} />
      </div>
    </div>
  )
}
