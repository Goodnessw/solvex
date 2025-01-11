// src/App.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Profile from './pages/profile';
import Tasks from './pages/Tasks';
import WalletConnectButton from './components/walletConnectButton';

// Import the AppKit and Solana adapters
import { createAppKit } from '@reown/appkit/react';
import { SolanaAdapter } from '@reown/appkit-adapter-solana/react';
import { solana, solanaTestnet, solanaDevnet } from '@reown/appkit/networks';
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets';

// Set up Solana Adapter
const solanaWeb3JsAdapter = new SolanaAdapter({
  wallets: [new PhantomWalletAdapter(), new SolflareWalletAdapter()]
});

// Get projectId from https://cloud.reown.com
const projectId = 'abe9997931e511dd402d5b2ea588cb1d';

// Create a metadata object - optional
const metadata = {
  name: 'Solvex',
  description: 'Decentralized Freelance Platform',
  url: 'https://yourapp.com',
  icons: ['https://assets.reown.com/reown-profile-pic.png']
};

// Create modal and initialize AppKit
createAppKit({
  adapters: [solanaWeb3JsAdapter],
  networks: [solana, solanaTestnet, solanaDevnet],
  metadata: metadata,
  projectId,
  features: {
    analytics: true, // Optional - enable analytics
  }
});

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if the user is already connected (check for user details in localStorage)
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleUserLogin = (email, walletAddress) => {
    // Send the wallet address and email to the backend for authentication
    fetch('http://localhost/solvex/backend/api/authenticate.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, wallet_address: walletAddress }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'success') {
          setUser(data.user);
          localStorage.setItem('user', JSON.stringify(data.user)); // Store user in localStorage
        } else {
          alert('Error: ' + data.message);
        }
      });
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <Router>
      <Navbar user={user} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile user={user} />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>

      {/* Show wallet connection button if user is not logged in */}
      {!user && (
        <div className="wallet-connect">
          <h3>Connect Wallet or Sign in</h3>
          <WalletConnectButton onLogin={handleUserLogin} />
        </div>
      )}
    </Router>
  );
}
