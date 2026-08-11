# Podstr - Community-Powered Podcast Platform

[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Built with React](https://img.shields.io/badge/React-18.x-61dafb.svg)](https://reactjs.org/)
[![Nostr Protocol](https://img.shields.io/badge/Nostr-Protocol-purple.svg)](https://nostr.com/)
[![Lightning Network](https://img.shields.io/badge/Lightning-Network-yellow.svg)](https://lightning.network/)

Podstr is an open-source, decentralized podcast platform that merges Podcasting 2.0 with the Nostr protocol. Built for sovereign podcasters who want true ownership of their content, community, and revenue streams.

## 🎯 Mission

To empower podcasters with a censorship-resistant platform where they maintain complete control over their content distribution, audience relationships, and monetization - no middlemen, no platform fees, no deplatforming risk.

## ✨ Features

### Core Capabilities
- **Decentralized Distribution**: Built on Nostr protocol for unstoppable content delivery
- **Direct Monetization**: Bitcoin Lightning payments go straight to creators (0% platform fees)
- **Community Ownership**: Your audience owns their identity and data
- **Cross-Platform Publishing**: Automatic RSS feed generation for all major podcast platforms
- **Real-Time Engagement**: Live comments, discussions, and reactions on every episode
- **Value4Value Streaming**: Support for streaming sats and micropayments
- **Open Source**: MIT licensed - fork it, modify it, deploy it anywhere

### Technical Features
- Modern React 18.x with TypeScript
- TailwindCSS for responsive design
- Nostrify for Nostr protocol integration
- shadcn/ui component library
- WebLN support for Lightning payments
- Vite for fast development and builds

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- A Nostr keypair (for publishing)
- (Optional) Lightning wallet for payments

### Installation

1. Clone the repository:
```bash
git clone https://github.com/derekross/podstr.git
cd podstr
```

2. Install dependencies:
```bash
npm install
```

3. Copy the environment example:
```bash
cp .env.example .env
```

4. Configure your environment variables in `.env`

5. Start the development server:
```bash
npm run dev
```

6. Open http://localhost:5173 in your browser

### Building for Production

```bash
npm run build
```

The production build will be in the `dist/` directory.

### Deployment

Deploy to any static hosting service or use the included Nostr Deploy CLI:

```bash
npm run deploy
```

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run test` - Run tests (TypeScript, ESLint, Vitest)
- `npm run deploy` - Deploy using Nostr Deploy CLI

### Project Structure

```
podstr/
├── src/
│   ├── components/     # UI components
│   │   ├── ui/         # shadcn/ui components
│   │   ├── auth/       # Authentication components
│   │   └── comments/   # Comment system
│   ├── hooks/          # Custom React hooks
│   ├── pages/          # Page components
│   ├── contexts/       # React contexts
│   └── lib/            # Utility functions
├── public/             # Static assets
└── dist/              # Production build
```

### Key Technologies

- **Frontend**: React 18.x, TypeScript, TailwindCSS
- **Nostr Integration**: Nostrify, nostr-tools
- **UI Components**: shadcn/ui, Radix UI
- **State Management**: TanStack Query
- **Routing**: React Router v6
- **Build Tool**: Vite
- **Testing**: Vitest, React Testing Library

## 📖 Documentation

- [Setup Guide](https://podstr.org/guide) - Complete setup instructions
- [FAQ](https://podstr.org/faq) - Frequently asked questions
- [Contributing](CONTRIBUTING.md) - Contribution guidelines

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Setup

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🔐 Security

Podstr is built with security and sovereignty in mind:
- No tracking or analytics
- No data collection
- Client-side key management
- Direct peer-to-peer payments
- Open source for full transparency

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Nostrify](https://github.com/nostrify/nostrify)
- UI components from [shadcn/ui](https://ui.shadcn.com)
- Vibed with [MKStack](https://soapbox.pub/mkstack)
- Powered by the Nostr and Bitcoin Lightning communities

## 🔗 Links

- **Website**: [https://podstr.org](https://podstr.org)
- **GitHub**: [https://github.com/derekross/podstr](https://github.com/derekross/podstr)
- **Issues**: [https://github.com/derekross/podstr/issues](https://github.com/derekross/podstr/issues)

## 💬 Community

Join the conversation and connect with other sovereign podcasters:
- Follow us on Nostr: `npub1...` (coming soon)
- Join our community discussions on the platform

---

**For the sovereign podcaster who refuses to be deplatformed.**

Built with ⚡ and 💜 for the decentralized future of podcasting.

## License

This project is licensed under the GNU Affero General Public License v3.0 or later — see the [LICENSE](LICENSE) file for details.
