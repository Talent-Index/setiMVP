<div align="center">

# 🔮 seti — Sui-native Prediction Markets

**Create, trade, and resolve markets on real-world events — secured by the Sui blockchain**

![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)
![Build](https://img.shields.io/badge/Build-Passing-success?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

</div>

## 🌍 Overview

Seti is a professional-grade prediction market platform that lets anyone launch a market, add liquidity, and trade YES/NO outcomes with transparent on-chain settlement. Built for speed and usability on Sui, it features real-time pricing, wallet-native flows, and a clean, responsive interface.

Try the live demo: https://seti-mvp.vercel.app/

## ✨ Key Features

### 🏪 Marketplace & Discovery
- **Browse live markets** across multiple categories (Crypto, Stocks, Sports, Politics, Tech, and more).
- **Real-time pricing** for YES/NO outcomes with dynamic liquidity.
- **Structured analytics**: 24h volume, total liquidity, and performance signals.

### 📊 Market Analytics
- **24h volume tracking** and market-level liquidity metrics.
- **Performance visualization** to understand price momentum and risk.

### 🧰 Market Creation
- **One-click launch** of markets with question, description, end time, category, image, and tags.
- **Initial liquidity** supplied in SUI with on-chain settlement.

### 💧 Liquidity & Trading
- **Add liquidity** to deepen markets and earn fees.
- **Fast trades** with clear pre-trade payout and risk visibility.

### 🧩 Technical Architecture
- **TypeScript-first** implementation for strong typing.
- **Custom React hooks** for blockchain interactions and state.
- **Modular components** with clean separation of concerns.
- **Robust error handling** and user-friendly feedback.

### 🔐 Wallet-first UX
- **Sui wallet integration** via `@mysten/dapp-kit`.
- **Session persistence** and smooth signing flows.

### 📱 Polished UX
- **Modern, responsive UI** powered by Tailwind and shadcn/ui.
- **Accessible components** with Radix primitives.

## 🛠️ Tech Stack

### Languages & Frameworks
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

### Styling & UI
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge)
![Radix](https://img.shields.io/badge/Radix_UI-161618?style=for-the-badge)

### Blockchain & Data
![Sui](https://img.shields.io/badge/Sui-6FBCF0?style=for-the-badge)
![Mysten dapp-kit](https://img.shields.io/badge/@mysten/dapp--kit-0A7AFF?style=for-the-badge)
![React Query](https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge)

## 🚀 Live Demo

Experience seti in action: **https://seti-mvp.vercel.app/**
The demo showcases market browsing, trading, liquidity, and wallet integration on Sui.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- A Sui-compatible wallet (Sui Wallet, Suiet)

### System Requirements
- Modern browser: Chrome 90+, Firefox 88+, Safari 14+, or Edge 90+.
- Network access to Sui Devnet/Testnet/Mainnet.

### 1) Clone & install
```bash
# Clone your fork or this repo
git clone https://github.com/your-organization/seti.git
cd seti

# Install dependencies
npm install
# or: yarn install
```

### 2) Configure environment
Copy and adjust env values:
```bash
cp .env.example .env.local
```
Then edit `.env.local`:
```env
# Sui Blockchain
VITE_SUI_PACKAGE_ID=0x0          # Your deployed Move package ID
VITE_NETWORK=devnet              # devnet | testnet | mainnet

# Optional RPC override
VITE_SUI_RPC_URL=https://fullnode.devnet.sui.io:443
```

### 3) Run the app
```bash
npm run dev
# or: yarn dev
```
Open http://localhost:5173 (Vite default) in your browser.

> Tip: Connect your Sui wallet and ensure it’s on the same network defined in `VITE_NETWORK`.

## 🔗 Smart Contracts
- Move module: `contract/sources/polymarket.move`
- Provides core entry functions like `create_market`, liquidity ops, and market resolution primitives consumed by the frontend (`src/hooks/`).
- Frontend interactions are handled via `@mysten/dapp-kit` and typed helpers in `src/types/contract`.

### Contract Entry Points
| Function | Purpose | Parameters |
|----------|---------|------------|
| `create_market` | Initialize a new market | question, description, end_time, category, image_url, tags, initial_liquidity |
| `get_market_info` | Retrieve market details and status | market object reference |
| `place_prediction` | Trade on market outcomes | market_id, outcome, amount |
| `add_liquidity` | Provide additional market liquidity | market_id, liquidity_amount |
| `resolve_market` | Resolve completed markets | market_id, winning_outcome |
| `withdraw_liquidity` | Remove liquidity from markets | market_id, amount |
| `claim_winnings` | Claim payouts for resolved markets | market_id |

## 📦 Project Structure
```
src/
├─ components/           # UI + domain components (shadcn/ui)
├─ hooks/                # Data + blockchain interactions (React hooks)
├─ pages/                # Page-level components
├─ types/                # Contract + app types
├─ App.tsx               # App shell
└─ main.tsx              # Entry point
contract/
└─ sources/polymarket.move  # Move sources
```

## 🧭 User Guide

### Trading Workflow
- **Connect Wallet**: Use the header to connect Sui Wallet or Suiet.
- **Explore Markets**: Browse categories, read details, and check YES/NO prices and liquidity.
- **Place Prediction**: Select YES/NO, enter SUI amount, review payout estimate, and sign.
- **Manage Portfolio**: Track active positions and claim when resolved.

### Market Creation Process
- **Prerequisites**: Connected wallet, sufficient SUI, and a clear market question.
- **Setup**: Provide question, description, end time (future), category, image, and tags.
- **Launch**: Add initial liquidity and publish on-chain.

### Market Categories
| Category | Description | Examples |
|----------|-------------|----------|
| Crypto | Blockchain and crypto predictions | BTC price, L2 adoption, NFT volumes |
| Stocks | Equity and company performance | Earnings beats, price targets |
| Sports | Sports and athlete performance | Match outcomes, standings |
| Politics | Elections and policy | Election winners, bills passing |
| Technology | Product launches and tech | Feature releases, company metrics |
| Economics | Macro indicators | GDP, CPI, employment |
| Space | Exploration and astronomy | Launches, missions |
| Other | Everything else | Culture, entertainment |

## 🧪 Developer Experience
- **TypeScript strict** for reliability.
- **ESLint** for code quality.
- **Consistent UI system** with Tailwind + shadcn/ui.
- **Production-ready builds** via Vite.

## 🚢 Deployment
- Vercel or Netlify recommended.
- Build: `npm run build` → outputs to `dist/`.
- Configure env vars in your hosting dashboard.

### Vercel quick start
```bash
npm i -g vercel
vercel --prod
```

### Netlify quick start
```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

### Environment Configuration
#### Required Environment Variables
```env
VITE_SUI_PACKAGE_ID=0x0  # Your deployed contract package ID
VITE_NETWORK=devnet      # devnet | testnet | mainnet
```

#### Optional Environment Variables
```env
VITE_SUI_RPC_URL=https://fullnode.devnet.sui.io:443
VITE_APP_NAME=seti
VITE_APP_VERSION=1.0.0
```

### Deployment Checklist
- [ ] Environment variables configured
- [ ] Build tested locally
- [ ] Domain and SSL configured
- [ ] CDN for static assets
- [ ] Error and performance monitoring enabled

## 🗺️ Roadmap
- Advanced market analytics and charts.
- Portfolio dashboard and historical PnL.
- Additional market types and conditional markets.
- Governance and community discovery.

## 👏 Acknowledgments
- Sui Foundation and Mysten Labs
- shadcn/ui, Radix UI, Tailwind CSS
- React and Vite communities

## 👥 The Team

| Name | Role | Contact |
| ---- | ---- | ------- |
| Mary Njoroge | Frontend Developer | marrianapeters00@gmail.com |
| Graham | Full‑stack Engineer | grahanm@gmail.com |
| John Mokaya | Frontend Developer | mokayaj857@gmail.com |
| Peter Njuguna | Smart Contract Developer | peternjuguna@gmail.com|

### Marketplace Overview
<img width="1701" height="956" alt="image" src="https://github.com/user-attachments/assets/46e124ae-d73e-4720-a136-0c6457ad4779" />


### Market Setup
<img width="1701" height="956" alt="image" src="https://github.com/user-attachments/assets/ed4053fe-7830-4345-8b88-c3dc583fdb15" />


### Trading YES/NO
<img width="1517" height="946" alt="Trading YES/NO" src="https://github.com/user-attachments/assets/04def0fe-73c3-4c44-912c-8e0946e4381b" />

### Dashboard
<img width="1701" height="956" alt="Dashboard" src="https://github.com/user-attachments/assets/1671f66e-7010-4bce-b8ff-914bb8414d07" />

### Trading Activity
<img width="1701" height="956" alt="Trading Activity" src="https://github.com/user-attachments/assets/2462c984-7e30-4913-9b23-9409b6a77ae3" />

## 📈 Milestones

### MVP Release
- Core market creation and trading on Sui
- Wallet integration and responsive UI

![MVP Release](./public/og-image.svg)

### Liquidity & Analytics Enhancements
- Add liquidity flow and 24h volume metrics

![Liquidity & Analytics](./public/placeholder.svg)

### Next: Portfolio & Advanced Markets
- Portfolio dashboard, conditional markets, and governance discovery

![Roadmap Preview](./public/placeholder.svg)

## 📄 License
MIT — see `LICENSE` for details.

---

## 🧰 Development Reference

### Technology Matrix
| Component | Technology | Purpose |
|-----------|------------|---------|
| Frontend | React + TypeScript | UI and state management |
| Build | Vite | Dev server and builds |
| Styling | Tailwind CSS | Utility-first CSS |
| UI | shadcn/ui + Radix UI | Accessible components |
| Blockchain | Sui + @mysten/dapp-kit | Wallet + chain interactions |
| Data | React Query | Server-state caching |

### Development Scripts
| Command | Purpose |
|---------|---------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

### Code Quality Standards
- TypeScript strict mode
- ESLint with React + TS rules
- Conventional commits

### Contributing Guidelines
1. Fork the repo and create a feature branch.
2. Follow coding standards and TypeScript usage.
3. Write clear commit messages.
4. Update documentation when adding features.
5. Open a PR with details of changes.

## 🔒 Security

### Measures
| Component | Practice |
|-----------|----------|
| Wallet Security | Never store private keys |
| Smart Contracts | Audited Move modules (when applicable) |
| Validation | Client-side validation for inputs |
| HTTPS | Use TLS in production |
| Access Control | Wallet-based auth |

### Best Practices
- Don’t store sensitive data in local/session storage.
- Validate inputs on client and server.
- Regularly audit dependencies and contracts.

## 🌐 Browser Compatibility
| Browser | Minimum Version | Status |
|---------|-----------------|--------|
| Chrome | 90+ | ✅ Supported |
| Firefox | 88+ | ✅ Supported |
| Safari | 14+ | ✅ Supported |
| Edge | 90+ | ✅ Supported |

## ❓ Support & Troubleshooting
- Open GitHub Issues for bugs and feature requests.
- Ensure wallet is installed, updated, connected to the correct Sui network.
- Verify SUI balance for gas; review market status before trading.
