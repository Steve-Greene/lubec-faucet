# LUBEC Token Faucet

<p align="center">
  <img src="assets/LUBEC Token Icon.png" alt="LUBEC Token" width="200"/>
</p>

A production-ready Solana token faucet built on Vercel's serverless infrastructure. Distributes LUBEC tokens on Solana Devnet with seamless Phantom wallet integration.

**Live Demo:** [lubec-faucet.vercel.app](https://lubec-faucet.vercel.app)

## 🎯 What This Does

Allows anyone to claim 100 LUBEC tokens by simply connecting their Phantom wallet. No signup, no forms, just one click.

Built as proof-of-concept for **AffiniCoin Platform** by [Steve Greene](https://linkedin.com/in/stevegreene).

## ✨ Features

- ✅ Serverless (Vercel) - scales automatically
- ✅ Phantom wallet integration
- ✅ Fixed supply token distribution (transfers from treasury)
- ✅ Transaction verification via Solscan
- ✅ Mobile-friendly UI

## 🚀 Fork & Deploy Your Own

### Prerequisites
- A Solana token on Devnet
- Wallet keypair with tokens
- Vercel account (free)

### Quick Start

1. Fork this repo
2. Deploy to Vercel
3. Add environment variables:
   - `MINT_AUTHORITY_PRIVATE_KEY` - Your wallet keypair as JSON array
   - `LUBEC_MINT_ADDRESS` - Your token mint address

### Customize

Edit `index.html`:
- Change token name/branding
- Adjust claim amount in `api/airdrop.js` (line 69)

## 📜 License

**MIT License**

Copyright (c) 2024 Steve Greene

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---

**TL;DR:** Feel free to fork and adapt for your own community tokens! Attribution appreciated but not required.

Created by [Steve Greene](https://github.com/Steve-Greene) for the AffiniCoin Platform.
