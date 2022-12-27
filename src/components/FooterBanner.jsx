//img
import headphones from '../assets/img/headphones_banner.webp'
//scss
import '../assets/style/footerBanner.scss';

export default function FooterBanner() {
  return (
    <div className='footerBanner'>

      <div className="left">
        <p className='small'>25% off</p>
        <p className="large">smile</p>
        <p className="large">fine</p>
      </div>

      <div className="right">
        <p className="small">Best choise</p>
        <p className="medium">winter sale</p>
        <p className="small">Great headphones on the market</p>
        <button className='btn'>Buy now</button>
      </div>

      <img src={headphones} alt="headphones" />
    </div>
  )
}
