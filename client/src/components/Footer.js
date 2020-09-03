import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../static/css/Footer.css';

function Footer() {
  return (
    <footer>
      <div id="footer">
        ©2013-2016 BeMo Academic Consulting Inc. All rights reserved. 
        <Link to='#'>
          <span>Disclaimer & Privacy Policy</span>
        </Link>
        <Link to='#'>
          <span>Contact Us</span>
        </Link>
      </div>
      <div id="socialIcons">
        <Link className="social" to='#'>
          F
        </Link>
        <Link className="social" to='#'>
          L
        </Link>
      </div>
    </footer>
  )

};

export default Footer;
