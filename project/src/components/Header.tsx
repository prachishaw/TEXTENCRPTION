import React from 'react';
import { Shield, Lock } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-black border-b border-green-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Shield className="text-green-400" size={32} />
              <Lock className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-green-600" size={16} />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-green-400">TextEncryption</h1>
              <p className="text-green-300/70 text-sm">Advanced Text Encryption Suite</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};