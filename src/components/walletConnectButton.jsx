
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useAppKit } from '@reown/appkit/react';

export default function WalletConnectButton() {
  const { connected, walletAddress, email, connect, disconnect } = useAppKit();
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (connected && walletAddress) {
      // Authenticate or register the user on the backend
      const authenticateUser = async () => {
        try {
          setLoading(true); // Show a loading indicator
          const response = await fetch('http://localhost/solvex/backend/api/authenticate.php', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              wallet_address: walletAddress,
              email: email, // Ensure the email is available or optional
            }),
          });

          if (!response.ok) {
            throw new Error('Failed to authenticate user');
          }

          const result = await response.json();
          setUserInfo(result); // Save the response, maybe user data or a success message
          console.log('User authenticated:', result);
        } catch (error) {
          console.error('Error authenticating user:', error);
        } finally {
          setLoading(false);
        }
      };

      authenticateUser();
    }
  }, [connected, walletAddress, email]);

  return (
    <div>
      {connected ? (
        <div>
          <p>Connected to wallet: {walletAddress}</p>
          <p>{userInfo ? `Welcome, ${userInfo.name || 'User'}` : 'Loading user info...'}</p>
          <button onClick={() => disconnect()} disabled={loading}>
            {loading ? 'Disconnecting...' : 'Disconnect'}
          </button>
        </div>
      ) : (
        <appkit-button onClick={() => connect()} disabled={loading}>
          {loading ? 'Connecting...' : 'Connect Wallet'}
        </appkit-button>
      )}
    </div>
  );
}
