import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const NavBar = () => {
    return(
        <header>
            {/* <h1 className='text-center text-white'>Portfolio</h1> */}
            <nav>
                <div className='logo'>
                    <a href=''><img src={logo} alt='logo'/></a>
                </div>
                <div className='list-items'>
                    <li><a href='#home'>Home</a></li>
                    <li><a href='#skills'>Skills</a></li>
                    <li><a href='#projects'>Projects</a></li>
                </div>
                <div className='social-icon ms-auto'>
                    <a href='#icon1'><img src={navIcon1} alt=''/></a>
                    <a href='#icon2'><img src={navIcon2} alt=''/></a>
                    <a href='#icon3'><img src={navIcon3} alt=''/></a>
                </div>
            </nav>
        </header>
    )
}