import React from 'react';
import { Nav } from './styled';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Nav>
      <Link to="/">
        <FaHome size={28} color="white" />
      </Link>
      <Link to="/login">
        <FaSignInAlt size={28} color="white" />
      </Link>
      <Link to="/a">
        <FaUserAlt size={28} color="white" />
      </Link>
    </Nav>
  );
}
