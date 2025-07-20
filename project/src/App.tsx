import React from 'react';
import { Header } from './components/Header';
import { EncryptionCard } from './components/EncryptionCard';
import { InfoPanel } from './components/InfoPanel';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <EncryptionCard
              algorithm="AES"
              title="AES-256 Encryption"
              description="Advanced Encryption Standard with 256-bit key"
            />
            
            <EncryptionCard
              algorithm="DES"
              title="DES Encryption"
              description="Data Encryption Standard (Legacy)"
            />
            
            <EncryptionCard
              algorithm="RSA"
              title="RSA Encryption"
              description="Asymmetric encryption with public/private keys"
            />
          </div>
          
          <div className="lg:col-span-1">
            <InfoPanel />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;