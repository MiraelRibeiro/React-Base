import React from 'react';
import { Nav } from './styled';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';

export default function Header() {
  return (
    <Nav>
      <a href="">
        <FaHome size={28} color="white" />
      </a>
      <a href="">
        <FaSignInAlt size={28} color="white" />
      </a>
      <a href="">
        <FaUserAlt size={28} color="white" />
      </a>
    </Nav>
  );
}
