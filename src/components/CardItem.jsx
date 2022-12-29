//scss
import '../assets/style/cardItem.scss'

export default function CardItem({img, price, desc}) {
  return (
    <div className='card-item'>
      <img src={img} alt={desc} />
      <p className='desc'>{desc}</p>
      <p className="price">$ {price}</p>
    </div>
  )
}
