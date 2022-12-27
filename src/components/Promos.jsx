//scss
import '../assets/style/promo.scss'
//img
import smartphoneOne from '../assets/img/smartphone_card.webp';
import laptopOne from '../assets/img/laptop_card.webp';
import smartphoneTwo from '../assets/img/phone-b1.webp';
import laptopTwo from '../assets/img/laptop-b1.webp'
import PromoCard from './PromoCard';

export default function Promos() {
  const promos = [
    {
      id: 1,
      img: smartphoneOne,
      text: 'Best smartphone ever -20% off'
    },
    {
      id: 2,
      img: laptopOne,
      text: 'Gaming laptop prebuild to order'
    },
    {
      id: 3,
      img: smartphoneTwo,
      text: 'Make your broadcast moments'
    },
    {
      id: 4,
      img: laptopTwo,
      text: 'Prebuild to order gaming laptop'
    }
  ]
  return (
    <div className='promo'>
      {
        promos.map((item) => {
          return <PromoCard promo={item} key={item.id} />
        })
      }
      
    </div>
  )
}
