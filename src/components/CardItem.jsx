//scss
import '../assets/style/cardItem.scss'
//context
import { useThemeContext } from '../context/ThemeContext';

export default function CardItem({img, price, desc}) {

  const { isDark } = useThemeContext()

  return (
    <div className={ isDark ? 'card-item dark' : 'card-item'}>
      <img src={img} alt={desc} />
      <p className='desc'>{desc}</p>
      <p className="price">$ {price}</p>
    </div>
  )
}
