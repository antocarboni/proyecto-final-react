import './NavBar.css';
import logo from'../../images/logo.png';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    
    <div className="navbar bg-base-100 flex headerNav">
        <div className="flex-5">
          <Link to='/' className=" logoNavBar btn btn-ghost normal-case text-xl" href='https://www.google.com'><img src={logo}/></Link>
        </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu">
          <li><NavLink className={({isActive})=>isActive ? 'active' : 'inactive'} to={'/categoria/serum/'}>Serum</NavLink></li>
          <li><NavLink className={({isActive})=>isActive ? 'active' : 'inactive'} to={'/categoria/cremas'}>Cremas</NavLink></li>
          <li><NavLink className={({isActive})=>isActive ? 'active' : 'inactive'} to={'/categoria/parches'}>Parches</NavLink></li>
        </ul>
      </div>
    
      <CartWidget/>

    </div>

  );
};

export default NavBar;