cat > README.md << 'EOF'
# 🌊 LUBEC Token Faucet

<p align="center">
  <img src="assets/lubec-logo.png" alt="LUBEC Token Logo" width="200"/>
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

## 📁 Structure

