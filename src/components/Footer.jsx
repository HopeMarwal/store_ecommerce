//social icons 
import { BsInstagram, BsTwitter } from 'react-icons/bs';
//scss
import '../assets/style/footer.scss'
//context
import { useThemeContext } from '../context/ThemeContext';

export default function Footer() {
  const { isDark } = useThemeContext()
  return (
    <footer className={ isDark ? 'dark' : ''}>
      <p>2022 E-commerce store</p>
      <div>
        <BsInstagram />
        <BsTwitter />
      </div>
    </footer>
  )
}
