import React from 'react';
import { Nav } from './styled';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const botaoClicado = useSelector((state) => state.example.botaoClicado);
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
      {botaoClicado ? 'Clicado' : 'Não Clicado'}
    </Nav>
  );
}
