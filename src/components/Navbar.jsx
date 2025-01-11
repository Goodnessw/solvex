// src/components/Navbar.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import WalletConnectButton from './walletConnectButton';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Solvex</Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <Link to="/dashboard" className="hover:text-gray-400">Dashboard</Link>
          <Link to="/profile" className="hover:text-gray-400">Profile</Link>
          <Link to="/tasks" className="hover:text-gray-400">Tasks</Link>
        </div>
        <div className="space-x-4">
          <div className="px-4 py-2 bg-transparent rounded hover:bg-transparent">  <WalletConnectButton /> </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
