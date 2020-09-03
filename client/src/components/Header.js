import React from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../static/images/bemo-logo2.png';
import '../static/css/Header.css';

function Header() {

  const history = useHistory();

  return(
    <div className="header">
      <div className="header__logo">
        <img src={logo} alt="" width={167} height={100} />
      </div>
      <nav className="header__navigation">
        <ul className="navigation">
          <li onClick={() => {history.push('/')}}>Main</li>
          <li onClick={() => {history.push('/contact-us')}}>Contact Us</li>
        </ul>
      </nav>
    </div>
  )
}

export default Header;