// src/pages/Dashboard.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import WalletConnectButton from '../components/walletConnectButton';

const Dashboard = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <p className="mb-6">Welcome to the decentralized freelance platform!</p>
      
      {/* Wallet connection button */}
      <WalletConnectButton />
      
      {/* Add additional dashboard content here */}
    </div>
  );
};

export default Dashboard;
