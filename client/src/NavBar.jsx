import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => (
  <nav className="navbar">
    <span className="navbar-brand">TechFest 2026</span>
    <ul className="nav-list">
      <li><NavLink to="/" end className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Home</NavLink></li>
      <li><NavLink to="/gallery" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Gallery</NavLink></li>
      <li><NavLink to="/about" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>About</NavLink></li>
    </ul>
  </nav>
);

export default NavBar;
