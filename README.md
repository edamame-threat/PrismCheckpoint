# PrismCheckpoint

Built for Base

PrismCheckpoint is a small, Base-oriented repository that pairs OnchainKit wallet UX with Viem JSON-RPC reads. It serves as a clean checkpoint for confirming Base connectivity, chain identity, and basic account state.

## What This Repo Validates

- Base Mainnet and Base Sepolia accessibility
- Wallet connection UX using OnchainKit
- RPC consistency (chainId + latest block)
- Simple native balance reads
- Basescan visibility for deployments and verification

## Networks

Base Sepolia  
chainId (decimal): 84532  
Explorer: https://sepolia.basescan.org  
RPC: https://sepolia.base.org  

Base Mainnet  
chainId (decimal): 8453  
Explorer: https://basescan.org  
RPC: https://mainnet.base.org  

## Code Layout

app/  
- prismCheckpoint.ts  
  React component that initializes OnchainKitProvider and executes Base reads using Viem.

Common supporting files:
- package.json
- tsconfig.json
- index.html / main.tsx
- .env (optional)

## Libraries Used

OnchainKit  
https://github.com/coinbase/onchainkit  

Viem  
EVM client for Base JSON-RPC reads

## Installation and Running

Requirements:
- Node.js 18+
- Browser environment with wallet support

Install dependencies with your preferred package manager and run using a standard React/Vite or Next.js dev server.

Optional environment variables:
- VITE_BASE_RPC_URL
- VITE_BASE_SEPOLIA_RPC_URL

## Author

GitHub: https://github.com/edamame-threat

Public contact (email): edamame_threat_0v@icloud.com

Public contact (X): https://x.com/stunga321

## License

MIT License

## References

createBaseAccount reference:  
https://docs.base.org/base-account/reference/core/createBaseAccount?utm_source=chatgpt.com

Account Abstraction on Base:  
https://docs.base.org/base-chain/tools/account-abstraction?utm_source=chatgpt.com

OnchainKit repository:  
https://github.com/coinbase/onchainkit

## Testnet Deployment (Base Sepolia)

As part of pre-production validation, one or more contracts may be deployed to the Base Sepolia test network to confirm correct behavior and tooling compatibility.

Network: Base Sepolia  
chainId (decimal): 84532  
Explorer: https://sepolia.basescan.org  

Contract #1 address:  
0x86476bd2e9a8f02f7ffa1b39466de8e20a392bae

Deployment and verification:
- https://sepolia.basescan.org/address/0x86476bd2e9a8f02f7ffa1b39466de8e20a392bae 
- https://sepolia.basescan.org/0x86476bd2e9a8f02f7ffa1b39466de8e20a392bae/0#code  

Contract #2 address:  
0x8ea1013e23204914c468c33fb645628d92cb29e2

Deployment and verification:
- https://sepolia.basescan.org/address/0x8ea1013e23204914c468c33fb645628d92cb29e2
- https://sepolia.basescan.org/0x8ea1013e23204914c468c33fb645628d92cb29e2/0#code  
