export interface EncryptionResult {
  encrypted: string;
  key?: string;
  iv?: string;
  error?: string;
}

export interface DecryptionResult {
  decrypted: string;
  error?: string;
}

export type EncryptionAlgorithm = 'AES' | 'DES' | 'RSA';

export interface KeyPair {
  publicKey: string;
  privateKey: string;
}