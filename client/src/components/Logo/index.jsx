import React from 'react';
import { Link } from 'react-router-dom';
import CONSTANTS from '../../constants.js';

const Logo = ({ to, ...props }) => (
  <Link to="/">
    <img src={`${CONSTANTS.STATIC_IMAGES_PATH}blue-logo.png` } alt="logo" />
  </Link>
);

export default Logo;
