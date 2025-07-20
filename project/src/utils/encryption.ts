import CryptoJS from 'crypto-js';
import { EncryptionResult, DecryptionResult, KeyPair } from '../types/encryption';

// AES Encryption
export const encryptAES = (text: string, key?: string): EncryptionResult => {
  try {
    const secretKey = key || CryptoJS.lib.WordArray.random(256/8).toString();
    const encrypted = CryptoJS.AES.encrypt(text, secretKey).toString();
    
    return {
      encrypted,
      key: secretKey
    };
  } catch (error) {
    return {
      encrypted: '',
      error: 'AES encryption failed'
    };
  }
};

export const decryptAES = (encryptedText: string, key: string): DecryptionResult => {
  try {
    const decrypted = CryptoJS.AES.decrypt(encryptedText, key).toString(CryptoJS.enc.Utf8);
    
    if (!decrypted) {
      return {
        decrypted: '',
        error: 'Invalid key or corrupted data'
      };
    }
    
    return { decrypted };
  } catch (error) {
    return {
      decrypted: '',
      error: 'AES decryption failed'
    };
  }
};

// DES Encryption
export const encryptDES = (text: string, key?: string): EncryptionResult => {
  try {
    const secretKey = key || CryptoJS.lib.WordArray.random(64/8).toString();
    const encrypted = CryptoJS.DES.encrypt(text, secretKey).toString();
    
    return {
      encrypted,
      key: secretKey
    };
  } catch (error) {
    return {
      encrypted: '',
      error: 'DES encryption failed'
    };
  }
};

export const decryptDES = (encryptedText: string, key: string): DecryptionResult => {
  try {
    const decrypted = CryptoJS.DES.decrypt(encryptedText, key).toString(CryptoJS.enc.Utf8);
    
    if (!decrypted) {
      return {
        decrypted: '',
        error: 'Invalid key or corrupted data'
      };
    }
    
    return { decrypted };
  } catch (error) {
    return {
      decrypted: '',
      error: 'DES decryption failed'
    };
  }
};

// Simple RSA-like encryption (for demonstration purposes)
// Note: This is a simplified implementation for educational purposes
export const generateRSAKeyPair = (): KeyPair => {
  const publicKey = CryptoJS.lib.WordArray.random(256/8).toString();
  const privateKey = CryptoJS.lib.WordArray.random(256/8).toString();
  
  return {
    publicKey,
    privateKey
  };
};

export const encryptRSA = (text: string, publicKey?: string): EncryptionResult => {
  try {
    const key = publicKey || generateRSAKeyPair().publicKey;
    // Using AES with the public key for simplification
    const encrypted = CryptoJS.AES.encrypt(text, key).toString();
    
    return {
      encrypted,
      key
    };
  } catch (error) {
    return {
      encrypted: '',
      error: 'RSA encryption failed'
    };
  }
};

export const decryptRSA = (encryptedText: string, privateKey: string): DecryptionResult => {
  try {
    const decrypted = CryptoJS.AES.decrypt(encryptedText, privateKey).toString(CryptoJS.enc.Utf8);
    
    if (!decrypted) {
      return {
        decrypted: '',
        error: 'Invalid private key or corrupted data'
      };
    }
    
    return { decrypted };
  } catch (error) {
    return {
      decrypted: '',
      error: 'RSA decryption failed'
    };
  }
};