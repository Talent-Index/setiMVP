# seti

<div align="center">
  <div style="display: flex; align-items: center; justify-content: center; gap: 12px; margin-bottom: 24px;">
    <div style="width: 48px; height: 48px; border-radius: 8px; background: linear-gradient(135deg, #FFD700, #FFA500); display: flex; align-items: center; justify-content: center;">
      <span style="color: #1a1a1a; font-weight: bold; font-size: 24px; font-family: 'Orbitron', monospace;">S</span>
    </div>
    <h1 style="font-size: 36px; font-weight: bold; background: linear-gradient(135deg, #FFD700, #FFA500); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-family: 'Orbitron', monospace; margin: 0;">seti</h1>
  </div>
  <p style="font-size: 18px; color: #666; max-width: 600px; margin: 0 auto 32px;">
    Professional prediction market platform built on Sui blockchain technology
  </p>
</div>

---

## Overview

seti is a sophisticated prediction market platform that enables users to create, trade, and participate in prediction markets for real-world events. Built on the Sui blockchain, it provides a secure, transparent, and efficient environment for market participants to express their views on future outcomes.

## 🚀 Live Demo

Experience seti in action: **[https://seti-mvp.vercel.app/](https://seti-mvp.vercel.app/)**

The live demo showcases all core features including market browsing, trading, and wallet integration on the Sui blockchain.

## Core Features

### Marketplace Platform
- **Live Market Browsing**: Access active prediction markets across multiple categories
- **Category Management**: Organized markets in Crypto, Stocks, Sports, Politics, Technology, Economics, Space, and more
- **Dynamic Pricing**: Real-time YES/NO pricing based on market liquidity and trading activity
- **Market Analytics**: Comprehensive 24h volume tracking, total liquidity metrics, and performance visualization
- **Responsive Interface**: Optimized user experience across desktop, tablet, and mobile devices

### Trading Infrastructure
- **Streamlined Trading**: Intuitive one-click YES/NO prediction placement with immediate feedback
- **Automated Market Making**: Advanced pricing algorithms with liquidity pool management
- **Portfolio Tracking**: Comprehensive prediction tracking with potential payout calculations
- **Risk Assessment**: Transparent pricing and payout calculations before trade execution

### User Experience
- **Professional Interface**: Clean, modern design with dark theme support
- **Wallet Integration**: Seamless Sui wallet connection and management
- **Session Persistence**: Automatic wallet connection restoration across sessions
- **Real-time Data**: Live market data and price updates
- **Cross-platform Compatibility**: Fully responsive design for all device types

### Technical Architecture
- **TypeScript Implementation**: Complete type safety and enhanced development experience
- **Custom React Hooks**: Specialized hooks for blockchain interactions and state management
- **Modular Design**: Clean separation of concerns with maintainable code structure
- **Error Management**: Comprehensive error handling with user-friendly feedback
- **Testing Framework**: Structured architecture for comprehensive testing and quality assurance

## Getting Started

### System Requirements

- **Node.js** 18.0 or higher
- **Package Manager**: npm 8.0+ or yarn 1.22+
- **Browser**: Chrome 90+, Firefox 88+, Safari 14+, or Edge 90+
- **Sui Wallet**: Sui Wallet or Suiet browser extension
- **Network Access**: Sui Devnet, Testnet, or Mainnet connectivity

### Installation Guide

#### 1. Repository Setup
```bash
git clone https://github.com/your-organization/seti.git
cd seti
```

#### 2. Dependency Installation
```bash
npm install
# Alternative: yarn install
```

#### 3. Environment Configuration
```bash
cp .env.example .env.local
```

Configure environment variables in `.env.local`:
```env
# Sui Blockchain Configuration
VITE_SUI_PACKAGE_ID=0x0  # Deployed contract package ID
VITE_NETWORK=devnet      # Network: devnet, testnet, or mainnet

# Optional: Custom RPC endpoints
VITE_SUI_RPC_URL=https://fullnode.devnet.sui.io:443
```

#### 4. Development Server
```bash
npm run dev
# Alternative: yarn dev
```

#### 5. Application Access
Open your browser and navigate to: `http://localhost:8080`

## Technical Architecture

### Technology Stack

| Component | Technology | Version | Purpose |
|-----------|------------|---------|---------|
| **Frontend Framework** | React | 18.3.1 | User interface and component management |
| **Language** | TypeScript | 5.8.3 | Type safety and enhanced development experience |
| **Build Tool** | Vite | 5.4.19 | Fast development server and production builds |
| **Styling** | Tailwind CSS | 3.4.17 | Utility-first CSS framework |
| **UI Components** | shadcn/ui + Radix UI | Latest | Accessible and customizable components |
| **Blockchain** | Sui + @mysten/dapp-kit | 1.38.0 | Blockchain integration and wallet management |
| **State Management** | React Query | 5.83.0 | Server state management and caching |
| **Routing** | React Router | 6.30.1 | Client-side routing and navigation |
| **Icons** | Lucide React | 0.462.0 | Consistent icon library |
| **Forms** | React Hook Form + Zod | Latest | Form management and validation |

### Project Structure

```
src/
├── components/                    # Reusable UI components
│   ├── ui/                       # Base UI components (shadcn/ui)
│   │   ├── button.tsx           # Button component
│   │   ├── input.tsx            # Input component
│   │   ├── dialog.tsx           # Modal components
│   │   └── ...                  # Additional UI primitives
│   ├── Header.tsx               # Navigation and wallet connection
│   ├── MarketCard.tsx           # Individual market display
│   ├── MarketSlideshow.tsx      # Featured markets carousel
│   ├── CreateMarketModal.tsx    # Market creation form
│   ├── PredictionModal.tsx      # Trading interface
│   ├── WalletModal.tsx          # Wallet selection
│   └── MarketBadge.tsx          # Market category badges
├── hooks/                        # Custom React hooks
│   ├── useMarkets.ts            # Market data fetching and management
│   ├── useCreateMarket.ts       # Market creation functionality
│   ├── useMarket.ts             # Single market data retrieval
│   ├── usePrediction.ts         # Trading and prediction placement
│   ├── useLiquidity.ts          # Liquidity management
│   ├── useMarketPrices.ts       # Price calculation and updates
│   ├── useMarketResolution.ts   # Market resolution handling
│   └── use-toast.ts             # Toast notification system
├── pages/                        # Page components
│   ├── Index.tsx                # Main marketplace page
│   └── NotFound.tsx             # 404 error page
├── types/                        # TypeScript type definitions
│   └── contract.ts              # Sui contract interfaces and types
├── App.tsx                      # Main application component
└── main.tsx                     # Application entry point
```

### Smart Contract Integration

seti integrates with a Sui Move smart contract (`polymarket::polymarket`) providing the following core functionality:

| Function | Purpose | Parameters |
|----------|---------|------------|
| **`create_market`** | Initialize new prediction markets | question, description, end_time, category, image_url, tags, initial_liquidity |
| **`get_market_info`** | Retrieve market details and status | market object reference |
| **`place_prediction`** | Execute trades on market outcomes | market_id, outcome, amount |
| **`add_liquidity`** | Provide additional market liquidity | market_id, liquidity_amount |
| **`resolve_market`** | Resolve completed markets | market_id, winning_outcome |
| **`withdraw_liquidity`** | Remove liquidity from markets | market_id, amount |
| **`claim_winnings`** | Claim resolved market payouts | market_id |

## User Guide

### Trading Workflow

#### 1. Wallet Connection
- Click "Connect Sui Wallet" in the application header
- Select your preferred Sui wallet (Sui Wallet or Suiet)
- Authorize the connection and verify your wallet address
- Your wallet balance will be displayed in the header

#### 2. Market Exploration
- Browse active markets using the category filters
- View market details including question, description, and end time
- Analyze current YES/NO prices and market liquidity
- Review 24h volume and total liquidity metrics

#### 3. Prediction Placement
- Click "Trade YES" or "Trade NO" on your selected market
- Enter your prediction amount in SUI (minimum 0.1 SUI)
- Review the potential payout calculation
- Confirm your prediction and authorize the transaction

#### 4. Portfolio Management
- Monitor your active predictions in the portfolio section
- Track potential payouts and market performance
- Claim winnings when markets are resolved

### Market Creation Process

#### 1. Prerequisites
- Ensure your wallet is connected and has sufficient SUI balance
- Have market details prepared (question, description, end time)
- Prepare an image URL for market visualization

#### 2. Market Setup
- Click "Create Market" in the application header
- Enter the market question (clear and specific)
- Provide a detailed description with context
- Set the market end time (must be in the future)
- Select appropriate category and add relevant tags

#### 3. Market Launch
- Add initial liquidity (minimum 1 SUI)
- Review all market details for accuracy
- Confirm and deploy the market to the blockchain
- Share your market with the community

### Market Categories

| Category | Description | Examples |
|----------|-------------|----------|
| **Crypto** | Cryptocurrency and blockchain predictions | Bitcoin price, DeFi protocols, NFT trends |
| **Stocks** | Stock market and company performance | Company earnings, stock prices, market indices |
| **Sports** | Sports events and athlete performance | Game outcomes, tournament results, player stats |
| **Politics** | Political events and policy changes | Elections, legislation, government decisions |
| **Technology** | Tech industry and product launches | Company announcements, product releases, tech trends |
| **Economics** | Economic indicators and market trends | GDP growth, inflation rates, employment data |
| **Space** | Space exploration and astronomy | Mission launches, astronomical events, space technology |
| **Other** | Miscellaneous real-world events | Weather, entertainment, social trends |

## Development

### Development Scripts

| Command | Purpose | Description |
|---------|---------|-------------|
| `npm run dev` | Development server | Start Vite development server with hot reload |
| `npm run build` | Production build | Create optimized production build |
| `npm run build:dev` | Development build | Create development build for testing |
| `npm run preview` | Preview build | Preview production build locally |
| `npm run lint` | Code linting | Run ESLint for code quality checks |

### Code Quality Standards

- **TypeScript**: Strict mode enabled for type safety
- **ESLint**: Configured with React and TypeScript rules
- **Code Formatting**: Consistent code style across the project
- **Commit Messages**: Conventional commit format for clear history
- **Testing**: Comprehensive test coverage (when implemented)

### Development Workflow

#### 1. Environment Setup
```bash
# Clone repository
git clone https://github.com/your-organization/seti.git
cd seti

# Install dependencies
npm install

# Start development server
npm run dev
```

#### 2. Feature Development
```bash
# Create feature branch
git checkout -b feature/your-feature-name

# Make changes and commit
git add .
git commit -m "feat: add your feature description"

# Push and create pull request
git push origin feature/your-feature-name
```

#### 3. Code Review Process
- All changes require pull request review
- Code must pass linting and type checking
- Tests must pass (when implemented)
- Documentation updates required for new features

### Contributing Guidelines

1. **Fork the repository** and create a feature branch
2. **Follow coding standards** and use TypeScript strictly
3. **Write clear commit messages** using conventional format
4. **Add tests** for new functionality (when test framework is implemented)
5. **Update documentation** for any new features or changes
6. **Submit pull request** with detailed description of changes

## Deployment

### Production Deployment Options

#### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel --prod
```

**Configuration:**
- Build Command: `npm run build`
- Output Directory: `dist`
- Environment Variables: Set in Vercel dashboard

#### Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy to Netlify
netlify deploy --prod --dir=dist
```

**Configuration:**
- Build Command: `npm run build`
- Publish Directory: `dist`
- Environment Variables: Set in Netlify dashboard

#### Manual Deployment
```bash
# Build for production
npm run build

# Upload dist/ folder to your web server
# Configure web server for SPA routing
```

### Environment Configuration

#### Required Environment Variables
```env
VITE_SUI_PACKAGE_ID=0x0  # Your deployed contract package ID
VITE_NETWORK=mainnet     # Network: devnet, testnet, or mainnet
```

#### Optional Environment Variables
```env
VITE_SUI_RPC_URL=https://fullnode.mainnet.sui.io:443
VITE_APP_NAME=seti
VITE_APP_VERSION=1.0.0
```

### Deployment Checklist

- [ ] Environment variables configured
- [ ] Build process tested locally
- [ ] Domain and SSL certificate configured
- [ ] CDN setup for static assets
- [ ] Error monitoring and logging configured
- [ ] Performance monitoring enabled

## Security

### Security Measures

| Component | Security Implementation | Description |
|-----------|------------------------|-------------|
| **Wallet Security** | No private key storage | Private keys never stored in application |
| **Smart Contracts** | Audited Sui Move contracts | Security-reviewed blockchain contracts |
| **Input Validation** | Client and server validation | All user inputs validated and sanitized |
| **Error Handling** | Comprehensive error management | Prevents crashes and information leakage |
| **HTTPS** | SSL/TLS encryption | Secure communication in production |
| **Access Control** | Wallet-based authentication | Secure user authentication system |

### Best Practices

- **Never store sensitive data** in localStorage or sessionStorage
- **Validate all inputs** on both client and server side
- **Use HTTPS** for all production deployments
- **Regular security audits** of smart contracts
- **Monitor for vulnerabilities** in dependencies

## Browser Compatibility

| Browser | Minimum Version | Status |
|---------|----------------|---------|
| **Chrome** | 90+ | ✅ Fully Supported |
| **Firefox** | 88+ | ✅ Fully Supported |
| **Safari** | 14+ | ✅ Fully Supported |
| **Edge** | 90+ | ✅ Fully Supported |
| **Mobile Safari** | 14+ | ✅ Fully Supported |
| **Chrome Mobile** | 90+ | ✅ Fully Supported |

## Support & Documentation

### Getting Help

- **Documentation**: Comprehensive guides and API documentation
- **GitHub Issues**: Report bugs and request features
- **Community Discord**: Join our developer community
- **Email Support**: Contact support@seti.app
- **Knowledge Base**: Search our documentation portal

### Troubleshooting

#### Common Issues

**Wallet Connection Problems**
- Verify Sui wallet extension is installed and updated
- Check network configuration (devnet/testnet/mainnet)
- Clear browser cache and refresh the page
- Ensure wallet is unlocked and authorized

**Transaction Failures**
- Verify sufficient SUI balance for gas fees
- Check market status (active/resolved)
- Ensure wallet has adequate balance
- Review transaction details before confirmation

**Market Creation Issues**
- Validate all required fields are completed
- Ensure end time is set in the future
- Verify sufficient SUI for initial liquidity
- Check image URL is accessible and valid

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

We extend our gratitude to the following organizations and communities:

- **Sui Foundation** for providing the innovative blockchain platform
- **shadcn/ui** for the exceptional UI component library
- **Radix UI** for accessible and robust component primitives
- **Tailwind CSS** for the utility-first CSS framework
- **React Team** for the outstanding frontend framework
- **Vite Team** for the fast and efficient build tool
- **TypeScript Team** for the powerful type system

## Roadmap

### Current Phase (v1.0)
- ✅ Core market creation and trading functionality
- ✅ Sui wallet integration and management
- ✅ Responsive design and mobile optimization
- ✅ Market browsing and category filtering
- ✅ Real-time price updates and analytics

### Next Phase (v1.1)
- 🔄 Advanced trading features and order types
- 🔄 Comprehensive portfolio management dashboard
- 🔄 Enhanced market analytics and insights
- 🔄 Social features and community interactions
- 🔄 Advanced market creation tools

### Future Phases (v2.0+)
- 📋 Mobile application (React Native)
- 📋 Advanced market types and derivatives
- 📋 Governance and voting mechanisms
- 📋 API for third-party integrations
- 📋 Cross-chain compatibility
- 📋 Institutional trading features

---

<div align="center">
  <p><strong>Built with ❤️ for the Sui ecosystem</strong></p>
  <p><em>seti - Where the future meets prediction markets</em></p>
</div>
