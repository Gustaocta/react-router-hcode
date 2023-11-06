import logo from '../../assets/images/logo-porsche.svg';
import { Link } from 'react-router-dom';
import './header.scss';


const Header = () => {

    return (
        <header>
            <div>
                <Link to='/' className='logo' aria-label='Logo'>
                <img src={logo} alt='Logo da Porsche'></img>
                </Link>
            </div>

            <nav className='menu'> 
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/models">Models</Link></li>
                    <li><Link to="/discover">Descubra</Link></li>
                </ul>
            </nav>
      </header>
    )

}

export default Header;