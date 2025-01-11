// src/pages/Home.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import WalletConnectButton from '../components/walletConnectButton';

const Home = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-6">Welcome to Solvex</h1>
      <p className="text-lg text-center mb-6">
        The decentralized platform for freelancers and clients. Connect your wallet and start earning!
      </p>

      {/* Wallet connection button */}
      <div className="flex justify-center">
        <WalletConnectButton />
      </div>
    </div>
  );
};

export default Home;
