//scss
import '../assets/style/cardItem.scss'

export default function CardItem({item}) {
  return (
    <div className='card-item'>
      <img src={item.img} alt={item.desc} />
      <p className='desc'>{item.desc}</p>
      <p className="price">$ {item.price}</p>
    </div>
  )
}
