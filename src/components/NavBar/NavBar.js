import './NavBar.css';
import logo from'../../images/logos/logo.png';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    
    <div className="navbar bg-base-100 flex headerNav">
        <div className="flex-5">
          <Link to='/' className=" logoNavBar" href='https://www.google.com'><img src={logo} alt={logo}/></Link>
        </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
        <li><NavLink className={({isActive})=>isActive ? 'active' : 'inactive'} to={'/categoria/cremas/'}>Cremas</NavLink></li>
          <li><NavLink className={({isActive})=>isActive ? 'active' : 'inactive'} to={'/categoria/serums'}>Serums</NavLink></li>
          <li><NavLink className={({isActive})=>isActive ? 'active' : 'inactive'} to={'/categoria/parches'}>Parches</NavLink></li>
        </ul>
      </div>
    
      <NavLink className="carrito" to='cart'>
                            <CartWidget />
                        </NavLink>

    </div>
// mr-5 scaleCss nav__link btn btn-square btn-ghost
  );
};

export default NavBar;