<h1 align="center">🔐 TextEncryption</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Python-3.x-blue.svg" />
  <img src="https://img.shields.io/badge/License-MIT-green.svg" />
  <img src="https://img.shields.io/github/stars/prachishaw/TEXTENCRPTION?style=social" />
</p>

<p align="center">
  <b>A powerful, multi-algorithm encryption tool to keep your text safe and secure 💬🔒</b><br/>
  Built with ❤️ by <a href="https://github.com/prachishaw">Prachi Shaw</a>
</p>

---

## ✨ Overview

**TextEncryption** is a 🔐 cybersecurity project that enables you to encrypt and decrypt your sensitive text using **AES**, **DES**, and **RSA** algorithms. It’s lightweight, secure, and built for real-world data protection needs.

---

## 🚀 Features

✅ Supports **AES**, **DES**, and **RSA** encryption  
✅ Easy-to-use Python classes & CLI  
✅ Cross-platform compatibility  
✅ Secure key management  
✅ Clean and modular design  

---

## 🧠 Algorithms Used

### 🔒 AES (Advanced Encryption Standard)
- Symmetric encryption
- Best for large data blocks
- 🔑 Key Sizes: 128 / 192 / 256 bits

### 🧩 DES (Data Encryption Standard)
- Symmetric encryption
- Lightweight and fast
- 🔑 Key Size: 56 bits

### 🛡️ RSA (Rivest–Shamir–Adleman)
- Asymmetric encryption
- Ideal for secure key exchange
- 🔑 Key Sizes: 1024 / 2048 / 4096 bits


---

## 📁 Project Structure

```
TextEncryption/
├── cli.py                    # Command Line Interface for encryption/decryption
├── text_encryption/
│   ├── __init__.py
│   ├── aes_module.py         # AES algorithm implementation
│   ├── des_module.py         # DES algorithm implementation
│   ├── rsa_module.py         # RSA algorithm implementation
├── examples/
│   └── usage_examples.py     # Example scripts using the library
├── tests/
│   └── test_encryption.py    # Unit tests for all algorithms
├── requirements.txt          # Dependencies
├── LICENSE
└── README.md
```

---

## ⚙️ Usage

### ▶️ Python Code Example

```python
from text_encryption import AES_Encryptor, DES_Encryptor, RSA_Encryptor

# AES
aes = AES_Encryptor(key="your-256-bit-key")
cipher = aes.encrypt("Hello World")
plain = aes.decrypt(cipher)

# DES
des = DES_Encryptor(key="your-56-bit-key")
cipher = des.encrypt("Hello")
plain = des.decrypt(cipher)

# RSA
rsa = RSA_Encryptor(public_key, private_key)
cipher = rsa.encrypt("Secret Message")
plain = rsa.decrypt(cipher)
```

---

## 🖥️ Command Line Interface

```bash
# Encrypt using AES
python cli.py encrypt --algorithm AES --key yourkey --text "Hello World"

# Decrypt using RSA
python cli.py decrypt --algorithm RSA --key yourkey --text "EncryptedText"
```

---

## 🔐 Security Tips

- ✅ Use **strong, random keys**
- ❌ Never hardcode sensitive keys in your code
- 💡 Use **RSA** mainly for key exchange, not bulk data encryption

---

## 👩‍💻 Author

**Prachi Shaw**  
🔗 GitHub: [@prachishaw](https://github.com/prachishaw)
