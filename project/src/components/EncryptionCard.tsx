import React, { useState } from 'react';
import { Lock, Unlock, Key, Copy, RefreshCw } from 'lucide-react';
import { EncryptionAlgorithm } from '../types/encryption';
import { encryptAES, decryptAES, encryptDES, decryptDES, encryptRSA, decryptRSA, generateRSAKeyPair } from '../utils/encryption';

interface EncryptionCardProps {
  algorithm: EncryptionAlgorithm;
  title: string;
  description: string;
}

export const EncryptionCard: React.FC<EncryptionCardProps> = ({ algorithm, title, description }) => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [key, setKey] = useState('');
  const [isEncrypting, setIsEncrypting] = useState(true);
  const [error, setError] = useState('');

  const generateKey = () => {
    if (algorithm === 'RSA') {
      const keyPair = generateRSAKeyPair();
      setKey(isEncrypting ? keyPair.publicKey : keyPair.privateKey);
    } else {
      const keyLength = algorithm === 'AES' ? 32 : 8;
      const newKey = Array.from(crypto.getRandomValues(new Uint8Array(keyLength)))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');
      setKey(newKey);
    }
  };

  const handleEncryptDecrypt = () => {
    setError('');
    
    if (!inputText.trim()) {
      setError('Please enter text to process');
      return;
    }
    
    if (!key.trim()) {
      setError('Please provide a key');
      return;
    }

    if (isEncrypting) {
      let result;
      switch (algorithm) {
        case 'AES':
          result = encryptAES(inputText, key);
          break;
        case 'DES':
          result = encryptDES(inputText, key);
          break;
        case 'RSA':
          result = encryptRSA(inputText, key);
          break;
      }
      
      if (result.error) {
        setError(result.error);
      } else {
        setOutputText(result.encrypted);
      }
    } else {
      let result;
      switch (algorithm) {
        case 'AES':
          result = decryptAES(inputText, key);
          break;
        case 'DES':
          result = decryptDES(inputText, key);
          break;
        case 'RSA':
          result = decryptRSA(inputText, key);
          break;
      }
      
      if (result.error) {
        setError(result.error);
      } else {
        setOutputText(result.decrypted);
      }
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const toggleMode = () => {
    setIsEncrypting(!isEncrypting);
    setInputText('');
    setOutputText('');
    setError('');
  };

  return (
    <div className="bg-gray-900 border border-green-500/30 rounded-lg p-6 hover:border-green-500/50 transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-green-400 mb-1">{title}</h3>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
        <button
          onClick={toggleMode}
          className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200"
        >
          {isEncrypting ? <Lock size={16} /> : <Unlock size={16} />}
          {isEncrypting ? 'Encrypt' : 'Decrypt'}
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-green-400 text-sm font-medium mb-2">
            {isEncrypting ? 'Plaintext' : 'Encrypted Text'}
          </label>
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder={isEncrypting ? 'Enter text to encrypt...' : 'Enter encrypted text to decrypt...'}
            className="w-full h-24 bg-black border border-green-500/30 rounded-lg px-3 py-2 text-green-300 font-mono text-sm placeholder-gray-500 focus:border-green-500 focus:outline-none resize-none"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-green-400 text-sm font-medium">
              {algorithm === 'RSA' ? (isEncrypting ? 'Public Key' : 'Private Key') : 'Secret Key'}
            </label>
            <button
              onClick={generateKey}
              className="flex items-center gap-1 px-2 py-1 bg-gray-800 hover:bg-gray-700 text-green-400 rounded text-xs transition-colors duration-200"
            >
              <RefreshCw size={12} />
              Generate
            </button>
          </div>
          <div className="relative">
            <input
              type="text"
              value={key}
              onChange={(e) => setKey(e.target.value)}
              placeholder="Enter or generate a key..."
              className="w-full bg-black border border-green-500/30 rounded-lg px-3 py-2 pr-10 text-green-300 font-mono text-sm placeholder-gray-500 focus:border-green-500 focus:outline-none"
            />
            <button
              onClick={() => copyToClipboard(key)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-green-400 transition-colors duration-200"
            >
              <Copy size={16} />
            </button>
          </div>
        </div>

        <button
          onClick={handleEncryptDecrypt}
          className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition-colors duration-200"
        >
          <Key size={16} />
          {isEncrypting ? `Encrypt with ${algorithm}` : `Decrypt with ${algorithm}`}
        </button>

        {error && (
          <div className="bg-red-900/50 border border-red-500/30 rounded-lg p-3">
            <p className="text-red-400 text-sm">{error}</p>
          </div>
        )}

        {outputText && (
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-green-400 text-sm font-medium">
                {isEncrypting ? 'Encrypted Text' : 'Decrypted Text'}
              </label>
              <button
                onClick={() => copyToClipboard(outputText)}
                className="flex items-center gap-1 px-2 py-1 bg-gray-800 hover:bg-gray-700 text-green-400 rounded text-xs transition-colors duration-200"
              >
                <Copy size={12} />
                Copy
              </button>
            </div>
            <textarea
              value={outputText}
              readOnly
              className="w-full h-24 bg-black border border-green-500/30 rounded-lg px-3 py-2 text-green-300 font-mono text-sm resize-none"
            />
          </div>
        )}
      </div>
    </div>
  );
};