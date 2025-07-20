import React from 'react';
import { Info, AlertTriangle, CheckCircle } from 'lucide-react';

export const InfoPanel: React.FC = () => {
  return (
    <div className="bg-gray-900 border border-green-500/30 rounded-lg p-6">
      <div className="flex items-center gap-2 mb-4">
        <Info className="text-green-400" size={20} />
        <h3 className="text-lg font-semibold text-green-400">Encryption Algorithms</h3>
      </div>
      
      <div className="space-y-4">
        <div className="border-l-4 border-green-500 pl-4">
          <h4 className="font-medium text-green-300 mb-1">AES (Advanced Encryption Standard)</h4>
          <p className="text-gray-400 text-sm">Industry-standard symmetric encryption. Fast and secure for most applications.</p>
        </div>
        
        <div className="border-l-4 border-yellow-500 pl-4">
          <h4 className="font-medium text-yellow-300 mb-1">DES (Data Encryption Standard)</h4>
          <p className="text-gray-400 text-sm">Legacy encryption algorithm. Included for educational purposes only.</p>
        </div>
        
        <div className="border-l-4 border-blue-500 pl-4">
          <h4 className="font-medium text-blue-300 mb-1">RSA (Rivest-Shamir-Adleman)</h4>
          <p className="text-gray-400 text-sm">Asymmetric encryption using public/private key pairs. Ideal for secure key exchange.</p>
        </div>
      </div>

      <div className="mt-6 p-4 bg-yellow-900/30 border border-yellow-500/30 rounded-lg">
        <div className="flex items-start gap-2">
          <AlertTriangle className="text-yellow-400 mt-0.5" size={16} />
          <div>
            <h5 className="font-medium text-yellow-400 mb-1">Security Notice</h5>
            <p className="text-yellow-300/80 text-sm">
              This tool is for educational purposes. For production applications, use established cryptographic libraries and follow security best practices.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 p-4 bg-green-900/30 border border-green-500/30 rounded-lg">
        <div className="flex items-start gap-2">
          <CheckCircle className="text-green-400 mt-0.5" size={16} />
          <div>
            <h5 className="font-medium text-green-400 mb-1">Features</h5>
            <ul className="text-green-300/80 text-sm space-y-1">
              <li>• Real-time encryption/decryption</li>
              <li>• Automatic key generation</li>
              <li>• Copy to clipboard functionality</li>
              <li>• Error handling and validation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};