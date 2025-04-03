import { Category, Badge } from '../types';

export const categories: Category[] = [
  {
    id: 'web3-basics',
    title: 'Web3 Basics',
    slug: 'web3-basics',
    description: 'Learn the fundamentals of Web3 technology',
    lessons: [
      {
        id: 'what-is-web3',
        title: 'What is Web3?',
        slug: 'what-is-web3',
        description: 'An introduction to Web3 and its core concepts',
        content: `
# What is Web3?

Web3 represents the next evolution of the internet, built on decentralized technologies like blockchain. Unlike Web2 (the current internet dominated by large tech companies), Web3 aims to give users more control over their data and digital interactions.

## The Evolution of the Web

### Web1 (1990s-early 2000s)
The first iteration of the internet was primarily **read-only**. Websites were static, and users consumed information without much interaction. Content creation required technical knowledge, and most users were passive consumers.

### Web2 (early 2000s-present)
The current version of the internet is **read-write**. Social media platforms, blogs, and interactive websites allow users to both consume and create content. However, this model led to centralization, with a few large companies controlling most of the internet's infrastructure, data, and monetization.

### Web3 (emerging)
Web3 aims to be **read-write-own**. It introduces ownership as a core component, allowing users to own their data, digital assets, and even pieces of the platforms they use.

## Key Characteristics of Web3:

1. **Decentralization**: Instead of applications running on a single server or being controlled by a single company, Web3 applications (dApps) run on blockchain networks powered by many computers worldwide. This reduces single points of failure and censorship.

2. **Trustless Interactions**: Traditional online transactions require trusting intermediaries like banks or payment processors. Web3 uses consensus mechanisms and cryptography to enable direct peer-to-peer interactions without trusted third parties.

3. **Permissionless Innovation**: Anyone can participate in Web3 without seeking approval from gatekeepers. Developers can build and deploy applications without needing permission from platform owners.

4. **Native Payments**: Web3 integrates digital currencies and tokens directly into the infrastructure. This enables seamless global transactions without the friction of traditional payment systems.

5. **Self-Sovereign Identity**: Users control their digital identities rather than relying on accounts provided by Google, Facebook, or other centralized services. This gives users more privacy and control over their online presence.

6. **Open Source and Composability**: Most Web3 protocols and applications are open source, allowing developers to build on each other's work. This "composability" has been called "money legos" in DeFi, where protocols can be combined in novel ways.

7. **Community Governance**: Many Web3 projects implement decentralized governance through DAOs (Decentralized Autonomous Organizations), allowing token holders to vote on important decisions.

## Web3 Technologies and Applications

### Blockchain Networks
Blockchains like Ethereum, Solana, and Polkadot provide the foundation for Web3 applications. They maintain a distributed ledger of transactions and enable smart contracts—self-executing code that runs when predetermined conditions are met.

### Smart Contracts
These are programs stored on a blockchain that run when predetermined conditions are met. They automate agreements so that all participants can be immediately certain of the outcome, without an intermediary's involvement.

### Decentralized Applications (dApps)
Applications built on blockchain networks that connect users and providers directly. Unlike traditional apps, no single entity controls the application or its data.

### Decentralized Finance (DeFi)
Financial services rebuilt on blockchain technology, including lending, borrowing, trading, and asset management without traditional financial intermediaries.

### Non-Fungible Tokens (NFTs)
Unique digital assets that represent ownership of specific items, from digital art to virtual real estate. NFTs have revolutionized digital ownership and creator economies.

### Decentralized Autonomous Organizations (DAOs)
Internet-native organizations collectively owned and managed by their members. Decisions are made from the bottom-up, governed by a community and organized around specific rules enforced on a blockchain.

## Challenges and Criticisms

Despite its promise, Web3 faces several challenges:

1. **Scalability**: Many blockchain networks struggle with transaction throughput and high fees during peak usage.

2. **User Experience**: Web3 applications often have steeper learning curves than their Web2 counterparts.

3. **Environmental Concerns**: Some blockchain consensus mechanisms (particularly Proof of Work) consume significant energy.

4. **Regulatory Uncertainty**: The regulatory landscape for cryptocurrencies and Web3 technologies is still evolving.

5. **Centralization Risks**: Despite the decentralization ethos, some Web3 projects still have centralized elements, from development teams to token distribution.

## The Future of Web3

Web3 is still in its early stages, comparable to the internet of the mid-1990s. As the technology matures, we can expect improvements in scalability, user experience, and integration with existing systems. The vision is not to completely replace Web2 but to create a more open, fair, and user-centric internet.

Whether Web3 fulfills its promise of a more decentralized and equitable internet depends on how the technology evolves and how society chooses to implement and regulate it.
        `,
        quiz: {
          id: 'web3-basics-quiz',
          title: 'Web3 Basics Quiz',
          questions: [
            {
              id: 'q1',
              text: 'What is a key characteristic of Web3?',
              options: [
                'Centralized control',
                'Decentralization',
                'Mandatory identity verification',
                'Limited access'
              ],
              correctAnswer: 'Decentralization'
            },
            {
              id: 'q2',
              text: 'Web3 is built primarily on what technology?',
              options: [
                'Cloud computing',
                'Artificial intelligence',
                'Blockchain',
                'Virtual reality'
              ],
              correctAnswer: 'Blockchain'
            },
            {
              id: 'q3',
              text: 'How does Web3 differ from Web2?',
              options: [
                'Web3 is slower but more secure',
                'Web3 gives users more control over their data',
                'Web3 requires special hardware',
                'Web3 is only accessible to developers'
              ],
              correctAnswer: 'Web3 gives users more control over their data'
            },
            {
              id: 'q4',
              text: 'What does "composability" refer to in Web3?',
              options: [
                'The ability to create music on the blockchain',
                'The requirement to use multiple devices',
                'The ability to combine different protocols and applications',
                'The process of converting fiat to cryptocurrency'
              ],
              correctAnswer: 'The ability to combine different protocols and applications'
            },
            {
              id: 'q5',
              text: 'Which of the following is NOT a major challenge facing Web3?',
              options: [
                'Scalability issues',
                'Poor user experience',
                'Limited developer interest',
                'Regulatory uncertainty'
              ],
              correctAnswer: 'Limited developer interest'
            }
          ]
        }
      },
      {
        id: 'web3-wallets',
        title: 'Web3 Wallets',
        slug: 'web3-wallets',
        description: 'Understanding digital wallets and how they work',
        content: `
# Web3 Wallets

Web3 wallets are essential tools that allow users to interact with blockchain networks and decentralized applications. They serve as your gateway to the Web3 ecosystem, enabling you to manage digital assets, sign transactions, and verify your identity across various platforms.

## What is a Web3 Wallet?

A Web3 wallet is fundamentally different from traditional online banking or payment apps. Rather than being an account hosted by a company, a Web3 wallet is a software application or hardware device that:

1. **Stores your private keys**: These cryptographic keys prove ownership of your digital assets
2. **Manages your digital identity**: Your wallet address serves as your unique identifier in the Web3 space
3. **Connects to blockchain networks**: Allowing you to view balances and transaction history
4. **Signs transactions**: Authorizing transfers, smart contract interactions, and other blockchain operations
5. **Interacts with dApps**: Serving as a single sign-on solution for decentralized applications

## How Web3 Wallets Work

### The Cryptography Behind Wallets

Web3 wallets use public-key cryptography, which involves:

- **Private Key**: A secret number known only to you, used to sign transactions
- **Public Key**: Derived from the private key, used to create your wallet address
- **Wallet Address**: A shortened version of your public key that others can see and send assets to

This system ensures that only the person with the private key can access and transfer assets from a wallet. The relationship is one-way: you can derive a public key from a private key, but not vice versa.

### Seed Phrases

Most modern wallets use a recovery seed phrase (also called a mnemonic phrase), typically consisting of 12 or 24 random words. This seed:

- Serves as a human-readable backup of your private keys
- Can regenerate all private keys associated with your wallet
- Must be stored securely offline and never shared with anyone

Example of a seed phrase:
\`witch collapse practice feed shame open despair creek road again ice least\`

### Hierarchical Deterministic (HD) Wallets

Modern wallets are typically HD wallets, which:

- Generate multiple addresses from a single seed phrase
- Create separate key pairs for different cryptocurrencies
- Allow for better privacy by using new addresses for each transaction
- Enable recovery of all addresses from the same seed phrase

## Types of Web3 Wallets

### Based on Connection Status

#### 1. Hot Wallets
Connected to the internet, offering convenience but with higher security risks.

**Examples:**
- **Browser Extensions**: MetaMask, Brave Wallet
- **Mobile Apps**: Trust Wallet, Rainbow, Coinbase Wallet
- **Web-Based**: WalletConnect, Phantom

**Pros:**
- Convenient for frequent transactions
- Easy to use for dApp interactions
- Free to create and use

**Cons:**
- More vulnerable to online attacks
- Susceptible to phishing and malware

#### 2. Cold Wallets
Offline storage solutions that prioritize security over convenience.

**Examples:**
- **Hardware Wallets**: Ledger, Trezor, GridPlus Lattice1
- **Paper Wallets**: Physical documents containing keys
- **Air-Gapped Computers**: Computers never connected to the internet

**Pros:**
- Significantly enhanced security
- Protection against online threats
- Better for storing large amounts

**Cons:**
- Less convenient for frequent transactions
- Hardware wallets have a purchase cost
- Risk of physical damage or loss

### Based on Key Management

#### 1. Custodial Wallets
Third parties (like exchanges) manage your private keys.

**Examples:**
- Coinbase
- Binance
- Kraken

**Pros:**
- Easy to use for beginners
- Password recovery options
- Customer support for issues

**Cons:**
- You don't truly control your assets
- Vulnerable to exchange hacks
- May have withdrawal limitations
- Counter to the "not your keys, not your coins" Web3 philosophy

#### 2. Non-Custodial Wallets
You maintain full control of your private keys.

**Examples:**
- MetaMask
- Ledger
- Trust Wallet

**Pros:**
- Complete ownership of your assets
- Independence from third parties
- True to Web3 principles of self-sovereignty

**Cons:**
- Full responsibility for key security
- No recovery options if keys are lost
- Steeper learning curve

### Based on Functionality

#### 1. Single-Chain Wallets
Support only one blockchain network.

**Examples:**
- Phantom (Solana)
- Aave Wallet (Ethereum)

#### 2. Multi-Chain Wallets
Support multiple blockchain networks.

**Examples:**
- MetaMask (Ethereum & EVM-compatible chains)
- Trust Wallet (Multiple chains)
- Exodus (Multiple chains)

#### 3. Smart Contract Wallets
Use smart contracts to add features like social recovery, transaction batching, and spending limits.

**Examples:**
- Argent
- Gnosis Safe
- Ambire Wallet

## Setting Up Your First Web3 Wallet

### Step 1: Choose a Wallet
For beginners, MetaMask is often recommended due to its widespread adoption and ease of use.

### Step 2: Installation
- For browser extensions: Install from your browser's extension store
- For mobile apps: Download from the App Store or Google Play

### Step 3: Create a New Wallet
- Follow the setup wizard
- Create a strong password
- **CRITICAL**: Write down your seed phrase on paper and store it securely
- Never store your seed phrase digitally or share it with anyone

### Step 4: Backup Verification
Most wallets will ask you to verify your seed phrase by selecting the words in the correct order.

### Step 5: Fund Your Wallet
To interact with most dApps, you'll need some cryptocurrency for transaction fees (gas).

## Best Practices for Wallet Security

1. **Never share your private keys or seed phrase**
2. **Use hardware wallets for significant holdings**
3. **Enable additional security features** when available:
   - Biometric authentication
   - Multi-signature requirements
   - Time-locks for large transactions
4. **Regularly update your wallet software**
5. **Be cautious of phishing attempts**:
   - Always verify URLs
   - Don't click suspicious links
   - Check wallet addresses carefully before transactions
6. **Consider a multi-wallet strategy**:
   - "Hot wallet" with small amounts for daily use
   - "Cold wallet" for long-term storage
   - Separate wallets for different purposes (trading, DeFi, NFTs)

## Common Wallet Operations

### Sending Transactions
1. Enter the recipient's address (or scan QR code)
2. Specify the amount to send
3. Set the transaction fee/gas price
4. Confirm and sign the transaction
5. Wait for blockchain confirmation

### Connecting to dApps
1. Navigate to the dApp website or open the dApp
2. Click "Connect Wallet" or similar button
3. Select your wallet from the options
4. Approve the connection request in your wallet
5. Review permissions requested by the dApp

### Managing Multiple Assets
Most wallets can display various tokens, but you may need to:
1. Add custom tokens by contract address
2. Enable visibility for specific assets
3. Use portfolio tracking features

## The Future of Web3 Wallets

Wallet technology is rapidly evolving with innovations like:

1. **Account Abstraction**: Making wallets more user-friendly with features like gasless transactions and social recovery
2. **Integrated DeFi**: Built-in swapping, staking, and lending features
3. **Cross-Chain Compatibility**: Seamless interaction across multiple blockchains
4. **Enhanced Security**: MPC (Multi-Party Computation) and other advanced security techniques
5. **Improved UX**: Simplified interfaces that hide blockchain complexity from users
6. **Identity Solutions**: Integration with decentralized identity systems and reputation

## Conclusion

Web3 wallets are much more than simple cryptocurrency storage—they're your digital identity and gateway to the decentralized web. Choosing the right wallet and securing it properly is one of the most important steps in your Web3 journey. As you become more comfortable with basic wallet operations, you'll be ready to explore the vast ecosystem of decentralized applications and services that Web3 has to offer.
        `,
        quiz: {
          id: 'web3-wallets-quiz',
          title: 'Web3 Wallets Quiz',
          questions: [
            {
              id: 'q1',
              text: 'Which type of wallet provides the highest security?',
              options: [
                'Hot wallet',
                'Cold wallet',
                'Custodial wallet',
                'Exchange wallet'
              ],
              correctAnswer: 'Cold wallet'
            },
            {
              id: 'q2',
              text: 'What is the main benefit of non-custodial wallets?',
              options: [
                'User retains full control over their assets',
                'Wallet provider manages the keys',
                'Easier to recover lost keys',
                'Requires identity verification'
              ],
              correctAnswer: 'User retains full control over their assets'
            },
            {
              id: 'q3',
              text: 'What is a seed phrase used for?',
              options: [
                'Encrypting transactions on the blockchain',
                'Generating random wallet addresses',
                'Backing up and recovering wallet access',
                'Verifying transactions with miners'
              ],
              correctAnswer: 'Backing up and recovering wallet access'
            },
            {
              id: 'q4',
              text: 'What is the relationship between private keys and public keys?',
              options: [
                'They are identical copies of each other',
                'Public keys can be derived from private keys, but not vice versa',
                'Private keys can be derived from public keys if you have the seed phrase',
                'They are completely unrelated cryptographic elements'
              ],
              correctAnswer: 'Public keys can be derived from private keys, but not vice versa'
            },
            {
              id: 'q5',
              text: 'What is "account abstraction" in the context of Web3 wallets?',
              options: [
                'The process of creating multiple accounts from one wallet',
                'Hiding your transaction history from blockchain explorers',
                'Technology that makes wallets more user-friendly with features like gasless transactions',
                'Converting between different cryptocurrency denominations'
              ],
              correctAnswer: 'Technology that makes wallets more user-friendly with features like gasless transactions'
            }
          ]
        }
      },
      {
        id: 'web2-vs-web3',
        title: 'Key Differences Between Web2 and Web3',
        slug: 'web2-vs-web3',
        description: 'Understanding how Web3 differs from the traditional internet',
        content: `
# Key Differences Between Web2 and Web3

Web2 and Web3 represent different generations of internet technology, with fundamental differences in architecture, control, and user experience.

## Web2 vs Web3: The Main Differences

| Aspect | Web2 | Web3 |
|--------|------|------|
| **Architecture** | Centralized servers | Distributed blockchain networks |
| **Data Control** | Controlled by companies | Controlled by users |
| **Identity** | Single accounts per platform | Self-sovereign identity |
| **Payments** | Requires payment processors | Native digital currencies |
| **Governance** | Corporate decisions | Community governance |

## Web2: The Current Internet

Web2 is characterized by:
- Social media platforms
- Cloud-based services
- User-generated content
- Advertising-based business models
- Data collection and monetization

## Web3: The Emerging Internet

Web3 introduces:
- Decentralized applications (dApps)
- Token-based economics
- Open protocols
- Trustless interactions
- Community ownership

The transition from Web2 to Web3 represents a shift from "the internet of information" to "the internet of value."
        `,
        quiz: {
          id: 'web2-vs-web3-quiz',
          title: 'Web2 vs Web3 Quiz',
          questions: [
            {
              id: 'q1',
              text: 'Which statement best describes Web2?',
              options: [
                'A fully decentralized internet',
                'An internet dominated by large tech companies',
                'A blockchain-based internet',
                'An internet without social media'
              ],
              correctAnswer: 'An internet dominated by large tech companies'
            },
            {
              id: 'q2',
              text: 'In Web3, who typically controls user data?',
              options: [
                'Government agencies',
                'Tech companies',
                'The users themselves',
                'Cloud service providers'
              ],
              correctAnswer: 'The users themselves'
            },
            {
              id: 'q3',
              text: 'Which is NOT a characteristic of Web3?',
              options: [
                'Decentralization',
                'Self-sovereign identity',
                'Centralized data storage',
                'Native digital payments'
              ],
              correctAnswer: 'Centralized data storage'
            }
          ]
        }
      },
      {
        id: 'blockchain-in-web3',
        title: 'The Role of Blockchain in Web3',
        slug: 'blockchain-in-web3',
        description: 'How blockchain technology powers the Web3 ecosystem',
        content: `
# The Role of Blockchain in Web3

Blockchain technology serves as the foundation of Web3, providing the infrastructure for a decentralized internet.

## What is Blockchain?

A blockchain is a distributed ledger that records transactions across many computers. Key features include:

1. **Immutability**: Once data is recorded, it cannot be altered
2. **Transparency**: All transactions are publicly viewable
3. **Security**: Cryptographic techniques protect data integrity
4. **Consensus**: Network participants agree on the state of the ledger

## How Blockchain Enables Web3

Blockchain technology enables Web3 by providing:

- **Decentralized Infrastructure**: Eliminating single points of failure
- **Tokenization**: Representing digital and physical assets on-chain
- **Smart Contracts**: Self-executing agreements that enable dApps
- **Digital Scarcity**: Creating truly unique digital assets
- **Verifiable Ownership**: Proving ownership of digital assets

## Popular Blockchain Networks in Web3

- **Ethereum**: The first programmable blockchain
- **Solana**: High-speed, low-cost transactions
- **Polkadot**: Connecting different blockchains
- **Avalanche**: Fast finality and scalability

Blockchain technology continues to evolve, with ongoing improvements in scalability, interoperability, and user experience.
        `,
        quiz: {
          id: 'blockchain-in-web3-quiz',
          title: 'Blockchain in Web3 Quiz',
          questions: [
            {
              id: 'q1',
              text: 'What key property of blockchain makes it impossible to alter past records?',
              options: [
                'Transparency',
                'Immutability',
                'Decentralization',
                'Tokenization'
              ],
              correctAnswer: 'Immutability'
            },
            {
              id: 'q2',
              text: 'How does blockchain help enable Web3?',
              options: [
                'By making websites load faster',
                'By providing centralized data storage',
                'By providing decentralized infrastructure',
                'By improving internet search capabilities'
              ],
              correctAnswer: 'By providing decentralized infrastructure'
            },
            {
              id: 'q3',
              text: 'Which of these is NOT a major blockchain network?',
              options: [
                'Ethereum',
                'Solana',
                'WebChain',
                'Polkadot'
              ],
              correctAnswer: 'WebChain'
            }
          ]
        }
      },
      {
        id: 'smart-contracts',
        title: 'Smart Contracts and Their Importance',
        slug: 'smart-contracts',
        description: 'Understanding the self-executing code that powers Web3 applications',
        content: `
# Smart Contracts and Their Importance

Smart contracts are self-executing programs stored on a blockchain that run when predetermined conditions are met.

## What Are Smart Contracts?

Smart contracts are:
- Digital agreements with the terms directly written into code
- Automatically executed when conditions are met
- Stored and replicated on a blockchain network
- Transparent and immutable once deployed

## How Smart Contracts Work

1. **Creation**: Developers write code defining rules and conditions
2. **Deployment**: The contract is deployed to a blockchain
3. **Execution**: The contract automatically executes when triggered
4. **Verification**: Results are verified by the network and recorded

## Real-World Applications

Smart contracts enable:
- **DeFi**: Automated lending, borrowing, and trading
- **NFTs**: Provable ownership of digital assets
- **DAOs**: Decentralized governance and treasury management
- **Supply Chain**: Automated verification of goods
- **Insurance**: Automatic claim processing

## Limitations and Challenges

- **Immutability**: Errors in code cannot be easily fixed
- **Oracle Problem**: Getting reliable external data
- **Scalability**: Processing limitations on some blockchains
- **Legal Status**: Varying recognition across jurisdictions

Smart contracts are fundamental to Web3 as they remove the need for trusted intermediaries in digital agreements.
        `,
        quiz: {
          id: 'smart-contracts-quiz',
          title: 'Smart Contracts Quiz',
          questions: [
            {
              id: 'q1',
              text: 'What is a smart contract?',
              options: [
                'A legal document signed digitally',
                'Self-executing code that runs when conditions are met',
                'A contract between smart device manufacturers',
                'An AI-powered legal assistant'
              ],
              correctAnswer: 'Self-executing code that runs when conditions are met'
            },
            {
              id: 'q2',
              text: 'Which of these is a key benefit of smart contracts?',
              options: [
                'They require lawyers to execute',
                'They can be easily modified after deployment',
                'They eliminate the need for trusted intermediaries',
                'They are only visible to the contract creator'
              ],
              correctAnswer: 'They eliminate the need for trusted intermediaries'
            },
            {
              id: 'q3',
              text: 'What is the "oracle problem" in smart contracts?',
              options: [
                'The difficulty in predicting future events',
                'The challenge of getting reliable external data',
                'The problem of finding skilled developers',
                'The issue of contract translation between languages'
              ],
              correctAnswer: 'The challenge of getting reliable external data'
            }
          ]
        }
      }
    ]
  },
  {
    id: 'wallets-identity',
    title: 'Wallets & Identity',
    slug: 'wallets-identity',
    description: 'Master the essentials of crypto wallets and digital identity',
    lessons: [
      {
        id: 'crypto-wallets',
        title: 'What is a Crypto Wallet?',
        slug: 'crypto-wallets',
        description: 'Understanding the gateway to blockchain interactions',
        content: `
# What is a Crypto Wallet?

A crypto wallet is a digital tool that allows users to interact with blockchain networks, store cryptocurrency, and manage digital assets.

## How Crypto Wallets Work

Despite the name, crypto wallets don't actually "store" your cryptocurrency. Instead, they:

- Store your private keys (like a password)
- Provide an interface to interact with the blockchain
- Allow you to view your balances and transaction history
- Enable you to send and receive digital assets

Your assets exist on the blockchain itself, and your wallet provides access to them.

## Key Components

1. **Public Key**: Your wallet address that others can see and send assets to
2. **Private Key**: The secret code that gives you control over your assets
3. **Seed Phrase**: A backup of 12-24 words that can recover your wallet

## Common Wallet Features

- Asset management
- Transaction history
- dApp connections
- NFT viewing
- Staking capabilities
- Token swapping

## Security Best Practices

- Never share your private key or seed phrase
- Use hardware wallets for large amounts
- Enable additional security features when available
- Verify transactions before confirming
- Backup your seed phrase in multiple secure locations

Wallets are your personal gateway to Web3, making them one of the most important tools in your crypto journey.
        `,
        quiz: {
          id: 'crypto-wallets-quiz',
          title: 'Crypto Wallets Quiz',
          questions: [
            {
              id: 'q1',
              text: 'What do crypto wallets actually store?',
              options: [
                'Digital coins',
                'Private keys',
                'Blockchain records',
                'Smart contracts'
              ],
              correctAnswer: 'Private keys'
            },
            {
              id: 'q2',
              text: 'What is a seed phrase used for?',
              options: [
                'Mining new cryptocurrencies',
                'Creating smart contracts',
                'Recovering wallet access',
                'Encrypting messages'
              ],
              correctAnswer: 'Recovering wallet access'
            },
            {
              id: 'q3',
              text: 'Which of these is a public piece of information?',
              options: [
                'Your private key',
                'Your wallet address',
                'Your seed phrase',
                'Your password'
              ],
              correctAnswer: 'Your wallet address'
            }
          ]
        }
      },
      {
        id: 'custodial-vs-non-custodial',
        title: 'Custodial vs. Non-Custodial Wallets',
        slug: 'custodial-vs-non-custodial',
        description: 'Understanding the different types of wallet custody models',
        content: `
# Custodial vs. Non-Custodial Wallets

The distinction between custodial and non-custodial wallets is one of the most important concepts in crypto security and self-sovereignty.

## Custodial Wallets

In custodial wallets, a third party (like an exchange) holds your private keys.

**Characteristics:**
- The service provider controls your private keys
- Similar to traditional bank accounts
- Usually easier for beginners
- Often feature account recovery options

**Examples:** Coinbase, Binance, Kraken, most exchange wallets

**Pros:**
- Easy to use
- Password recovery available
- Less technical knowledge required
- Often include customer support

**Cons:**
- You don't truly control your assets
- Vulnerable to exchange hacks
- Subject to platform policies
- May have withdrawal limits

## Non-Custodial Wallets

In non-custodial wallets, you alone control your private keys.

**Characteristics:**
- You have full control of your private keys
- No third party can access your funds
- Embodies the "not your keys, not your coins" principle
- Requires responsible key management

**Examples:** MetaMask, Phantom, Ledger, Trezor

**Pros:**
- Full ownership of your assets
- Not affected by exchange issues
- Greater privacy
- No withdrawal limits

**Cons:**
- No recovery options if keys are lost
- More responsibility on the user
- May be more complex for beginners

## Which Should You Choose?

The right choice depends on your needs:
- **Beginners** might start with custodial solutions while learning
- **Active traders** might use custodial exchanges for convenience
- **Long-term holders** should consider non-custodial options
- **Large holdings** are best secured in non-custodial hardware wallets

Remember: "Not your keys, not your coins" is a fundamental principle in crypto.
        `,
        quiz: {
          id: 'custodial-vs-non-custodial-quiz',
          title: 'Custodial vs. Non-Custodial Wallets Quiz',
          questions: [
            {
              id: 'q1',
              text: 'In a custodial wallet, who controls the private keys?',
              options: [
                'The user',
                'A third-party service',
                'The blockchain network',
                'No one controls them'
              ],
              correctAnswer: 'A third-party service'
            },
            {
              id: 'q2',
              text: 'Which type of wallet gives you full control over your assets?',
              options: [
                'Custodial wallet',
                'Exchange wallet',
                'Non-custodial wallet',
                'Web wallet'
              ],
              correctAnswer: 'Non-custodial wallet'
            },
            {
              id: 'q3',
              text: 'What does the phrase "not your keys, not your coins" refer to?',
              options: [
                'The importance of backing up your seed phrase',
                'The risk of using custodial wallets',
                'The need for hardware wallets',
                'The process of mining cryptocurrency'
              ],
              correctAnswer: 'The risk of using custodial wallets'
            }
          ]
        }
      },
      {
        id: 'wallet-security',
        title: 'Wallet Security Best Practices',
        slug: 'wallet-security',
        description: 'Essential security measures to protect your digital assets',
        content: `
# Wallet Security Best Practices

Securing your crypto wallet is one of the most important aspects of participating in Web3. Here are essential practices to keep your assets safe.

## Seed Phrase Protection

Your seed phrase (recovery phrase) is the master key to your wallet:

- Write it down physically (never digitally)
- Store in multiple secure locations
- Consider metal backups for fire/water resistance
- Never share it with anyone
- Be wary of phishing attempts

## Hardware Wallets

For significant holdings, hardware wallets provide the best security:

- Store private keys offline
- Require physical confirmation for transactions
- Protect against malware and online threats
- Popular options: Ledger, Trezor, GridPlus

## Software Wallet Security

If using software wallets:

- Only download from official sources
- Keep software updated
- Use strong, unique passwords
- Enable biometric authentication when available
- Be cautious of browser extensions

## General Security Practices

- Use 2-factor authentication (2FA) where available
- Avoid public Wi-Fi for transactions
- Consider a dedicated device for crypto
- Use separate wallets for different purposes
- Verify addresses before sending

## Common Threats to Avoid

1. **Phishing**: Fake websites or messages trying to steal your information
2. **SIM Swapping**: Attackers take control of your phone number
3. **Malware**: Software that can steal keys or redirect transactions
4. **Social Engineering**: Manipulation to trick you into revealing information

Remember: In Web3, you are your own bank—security is your responsibility.
        `,
        quiz: {
          id: 'wallet-security-quiz',
          title: 'Wallet Security Quiz',
          questions: [
            {
              id: 'q1',
              text: 'What is the safest way to store your seed phrase?',
              options: [
                'In a password manager',
                'In a text file with a strong password',
                'In a physical format in secure locations',
                'In an encrypted email to yourself'
              ],
              correctAnswer: 'In a physical format in secure locations'
            },
            {
              id: 'q2',
              text: 'Which type of wallet offers the highest security for large holdings?',
              options: [
                'Mobile wallet',
                'Desktop wallet',
                'Hardware wallet',
                'Exchange wallet'
              ],
              correctAnswer: 'Hardware wallet'
            },
            {
              id: 'q3',
              text: 'What is phishing in the context of crypto security?',
              options: [
                'Using multiple wallets to hide transactions',
                'Attempts to trick you into revealing private information',
                'Mining small amounts of cryptocurrency',
                'Transferring assets between blockchains'
              ],
              correctAnswer: 'Attempts to trick you into revealing private information'
            }
          ]
        }
      }
    ]
  },
  {
    id: 'decentralization',
    title: 'Decentralization & Trustlessness',
    slug: 'decentralization',
    description: 'Explore the core principles that make Web3 revolutionary',
    lessons: [
      {
        id: 'what-is-decentralization',
        title: 'What is Decentralization?',
        slug: 'what-is-decentralization',
        description: 'Understanding the concept of distributed control and authority',
        content: `
# What is Decentralization?

Decentralization is the distribution of power, control, and decision-making away from central authorities to a broader network of participants.

## Centralization vs. Decentralization

**Centralized Systems:**
- Single point of control
- Hierarchical structure
- Efficient but vulnerable
- Examples: Traditional banks, social media platforms

**Decentralized Systems:**
- Distributed control
- Peer-to-peer networks
- Resilient but can be less efficient
- Examples: Bitcoin, Ethereum, BitTorrent

## Types of Decentralization

1. **Architectural Decentralization**: How many physical computers make up the system
2. **Political Decentralization**: How many individuals or organizations control those computers
3. **Logical Decentralization**: Whether the interface and data structures appear more like a single system or many separate ones

## Benefits of Decentralization

- **Resilience**: No single point of failure
- **Censorship Resistance**: Difficult to shut down or control
- **Accessibility**: Open to anyone with internet access
- **Reduced Corruption**: Transparent processes limit abuse
- **Innovation**: Permissionless environment for building

## Challenges of Decentralization

- **Efficiency**: Often slower than centralized alternatives
- **User Experience**: Can be more complex
- **Coordination**: Harder to make system-wide changes
- **Responsibility**: Users must manage their own security

## Degrees of Decentralization

Most systems exist on a spectrum from fully centralized to fully decentralized:

- **Fully Centralized**: Single controlling entity
- **Partially Decentralized**: Some distribution of control
- **Fully Decentralized**: No central point of control

Decentralization is a foundational principle of Web3, enabling many of its unique capabilities and benefits.
        `,
        quiz: {
          id: 'decentralization-quiz',
          title: 'Decentralization Quiz',
          questions: [
            {
              id: 'q1',
              text: 'What is a key characteristic of a decentralized system?',
              options: [
                'Single point of control',
                'Hierarchical management',
                'Distributed decision-making',
                'Centralized data storage'
              ],
              correctAnswer: 'Distributed decision-making'
            },
            {
              id: 'q2',
              text: 'Which of these is a benefit of decentralization?',
              options: [
                'Faster transaction processing',
                'Simplified user experience',
                'Censorship resistance',
                'Lower energy consumption'
              ],
              correctAnswer: 'Censorship resistance'
            },
            {
              id: 'q3',
              text: 'Which system would be considered the most decentralized?',
              options: [
                'A government-issued digital currency',
                'A social media platform',
                'Bitcoin',
                'A traditional bank'
              ],
              correctAnswer: 'Bitcoin'
            }
          ]
        }
      },
      {
        id: 'trustless-systems',
        title: 'How Trustless Systems Work',
        slug: 'trustless-systems',
        description: 'Understanding systems that don\'t require trust in central authorities',
        content: `
# How Trustless Systems Work

Trustless systems allow participants to interact and transact without needing to trust each other or a central authority.

## What Does "Trustless" Really Mean?

In Web3, "trustless" doesn't mean there's no trust at all. Rather:

- Trust is placed in code and math instead of people or institutions
- Rules are enforced by protocols rather than authorities
- Verification is done by the network rather than trusted third parties

## Components of Trustless Systems

1. **Consensus Mechanisms**: Methods for agreeing on the state of the network
   - Proof of Work (PoW)
   - Proof of Stake (PoS)
   - Delegated Proof of Stake (DPoS)
   - Proof of History (PoH)

2. **Cryptography**: Mathematical techniques that secure information
   - Public/private key pairs
   - Hash functions
   - Digital signatures

3. **Transparency**: Open verification of all transactions
   - Public ledgers
   - Open-source code
   - Verifiable processes

## Real-World Applications

- **Payments**: Send value without banks or payment processors
- **Smart Contracts**: Self-executing agreements without intermediaries
- **DAOs**: Organizational governance without central management
- **DeFi**: Financial services without traditional financial institutions

## Trust Minimization vs. Trust Elimination

Most Web3 systems minimize rather than eliminate trust:

- **Code Bugs**: Smart contracts may contain errors
- **Oracle Problem**: External data sources may be compromised
- **Development Centralization**: Some projects have concentrated development teams
- **Validator Concentration**: Some networks have few validators

## The Value Proposition

Trustless systems offer:
- Reduced counterparty risk
- Lower barriers to entry
- Greater user sovereignty
- Resistance to censorship and corruption

By reducing the need for trust, Web3 enables new forms of coordination and collaboration that weren't previously possible.
        `,
        quiz: {
          id: 'trustless-systems-quiz',
          title: 'Trustless Systems Quiz',
          questions: [
            {
              id: 'q1',
              text: 'In Web3, what does "trustless" primarily mean?',
              options: [
                'There is no trust in the system',
                'Users must verify everything manually',
                'Trust is placed in code rather than central authorities',
                'The system cannot be trusted at all'
              ],
              correctAnswer: 'Trust is placed in code rather than central authorities'
            },
            {
              id: 'q2',
              text: 'Which of these is a key component of trustless systems?',
              options: [
                'Central authority',
                'Consensus mechanisms',
                'Human moderators',
                'Corporate oversight'
              ],
              correctAnswer: 'Consensus mechanisms'
            },
            {
              id: 'q3',
              text: 'What is the "oracle problem" in trustless systems?',
              options: [
                'The difficulty in predicting market movements',
                'The challenge of getting external data reliably',
                'The issue of finding skilled developers',
                'The problem of slow transaction speeds'
              ],
              correctAnswer: 'The challenge of getting external data reliably'
            }
          ]
        }
      }
    ]
  },
  {
    id: 'defi',
    title: 'Decentralized Finance (DeFi)',
    slug: 'defi',
    description: 'Explore the world of decentralized finance',
    lessons: [
      {
        id: 'intro-to-defi',
        title: 'Introduction to DeFi',
        slug: 'intro-to-defi',
        description: 'Learn the basics of decentralized finance',
        content: `
# Introduction to DeFi

Decentralized Finance (DeFi) refers to financial applications built on blockchain that operate without intermediaries.

## Key Components:

1. **Decentralized Exchanges (DEXs)**: Platforms like Uniswap, Raydium
2. **Lending & Borrowing**: Protocols like Aave, Solend
3. **Yield Farming**: Providing liquidity for rewards
4. **Stablecoins**: Price-stable cryptocurrencies

DeFi offers financial services without traditional banks, providing greater accessibility.
        `,
        quiz: {
          id: 'defi-quiz',
          title: 'DeFi Basics Quiz',
          questions: [
            {
              id: 'q1',
              text: 'What is a key feature of DeFi?',
              options: [
                'Requires bank approval',
                'No intermediaries',
                'Only available on Bitcoin',
                'Limited to developed countries'
              ],
              correctAnswer: 'No intermediaries'
            },
            {
              id: 'q2',
              text: 'Which platform is a decentralized exchange?',
              options: [
                'Coinbase',
                'Binance',
                'Uniswap',
                'PayPal'
              ],
              correctAnswer: 'Uniswap'
            }
          ]
        }
      },
      {
        id: 'key-defi-concepts',
        title: 'Key DeFi Concepts: Staking, Yield Farming, and Lending',
        slug: 'key-defi-concepts',
        description: 'Understanding the core mechanisms of decentralized finance',
        content: `
# Key DeFi Concepts: Staking, Yield Farming, and Lending

Decentralized Finance offers various ways to earn passive income and utilize your crypto assets. Let's explore the key concepts.

## Staking

Staking involves locking up your cryptocurrency to support a blockchain network's operations and security.

**How it works:**
- You lock (stake) tokens in a wallet or platform
- Your tokens help validate transactions on proof-of-stake networks
- You earn rewards for contributing to network security
- Rewards typically range from 3-20% APY depending on the network

**Popular staking platforms:**
- Lido (for ETH, SOL)
- Marinade Finance (for SOL)
- Native blockchain staking (Cosmos, Polkadot, Solana)

## Yield Farming

Yield farming involves providing liquidity to decentralized exchanges or lending protocols to earn rewards.

**How it works:**
- You deposit assets into liquidity pools
- These pools facilitate trading or lending
- You earn fees from transactions plus incentive tokens
- Rewards can be higher but with increased risk

**Common yield farming strategies:**
- Providing liquidity on DEXs (Raydium, Orca, Uniswap)
- Supplying to lending protocols
- Leveraged yield farming
- Auto-compounding

## Lending and Borrowing

DeFi lending platforms allow users to lend their assets for interest or borrow against their crypto holdings.

**How lending works:**
- You deposit assets into a lending protocol
- Others borrow these assets and pay interest
- You earn a portion of the interest paid
- Interest rates fluctuate based on supply and demand

**How borrowing works:**
- You deposit collateral (often more than you wish to borrow)
- You can borrow other assets against your collateral
- You pay interest on the borrowed amount
- If your collateral value falls below a threshold, it may be liquidated

**Popular lending platforms:**
- Aave
- Compound
- Solend (Solana)
- Mango Markets (Solana)

## Risks to Consider

- **Smart Contract Risk**: Vulnerabilities in the code
- **Impermanent Loss**: Loss of value when providing liquidity
- **Liquidation Risk**: Losing collateral if market moves against you
- **Protocol Risk**: Governance or economic design flaws
- **Market Risk**: Overall crypto market volatility

DeFi offers exciting opportunities but requires careful research and risk management.
        `,
        quiz: {
          id: 'key-defi-concepts-quiz',
          title: 'Key DeFi Concepts Quiz',
          questions: [
            {
              id: 'q1',
              text: 'What is staking in the context of DeFi?',
              options: [
                'Trading tokens on a decentralized exchange',
                'Locking up cryptocurrency to support network operations',
                'Borrowing against your crypto assets',
                'Converting between different cryptocurrencies'
              ],
              correctAnswer: 'Locking up cryptocurrency to support network operations'
            },
            {
              id: 'q2',
              text: 'What is "impermanent loss" in DeFi?',
              options: [
                'Temporary server downtime',
                'Loss of private keys',
                'Loss of value when providing liquidity compared to holding',
                'Failed transactions on the blockchain'
              ],
              correctAnswer: 'Loss of value when providing liquidity compared to holding'
            },
            {
              id: 'q3',
              text: 'In DeFi lending, what happens if your collateral value falls too low?',
              options: [
                'You receive a warning notification',
                'Your interest rate increases',
                'Your collateral may be liquidated',
                'The loan term is automatically extended'
              ],
              correctAnswer: 'Your collateral may be liquidated'
            }
          ]
        }
      },
      {
        id: 'defi-risks-benefits',
        title: 'Risks and Benefits of DeFi',
        slug: 'defi-risks-benefits',
        description: 'Weighing the opportunities and challenges in decentralized finance',
        content: `
# Risks and Benefits of DeFi

Decentralized Finance offers revolutionary possibilities but also comes with significant risks. Understanding both sides is essential for responsible participation.

## Benefits of DeFi

### Financial Inclusion
- **Global Access**: Available to anyone with internet connection
- **No Credit Checks**: No traditional banking requirements
- **Self-Custody**: Direct control of your assets

### Innovation
- **Composability**: Protocols can be combined like "money legos"
- **Rapid Development**: Fast iteration and innovation
- **New Financial Products**: Previously impossible financial instruments

### Efficiency
- **Automation**: Smart contracts reduce operational costs
- **Disintermediation**: Fewer middlemen taking fees
- **24/7 Operation**: Markets never close

### Transparency
- **Open Source**: Code is publicly viewable
- **On-Chain Activity**: Transactions are verifiable
- **Clear Rules**: Protocol rules are explicit in code

## Risks of DeFi

### Technical Risks
- **Smart Contract Vulnerabilities**: Code bugs can lead to hacks
- **Oracle Failures**: External data feeds may be manipulated
- **Frontend Attacks**: Malicious interfaces can trick users

### Financial Risks
- **Volatility**: Extreme price fluctuations
- **Impermanent Loss**: Specific risk to liquidity providers
- **Liquidations**: Collateralized positions can be forcibly closed

### Regulatory Risks
- **Uncertain Regulations**: Evolving legal landscape
- **Compliance Challenges**: KYC/AML requirements may increase
- **Tax Complexity**: Unclear tax treatment in many jurisdictions

### Operational Risks
- **User Error**: Complex interfaces lead to mistakes
- **Gas Fees**: Transaction costs can be high on some networks
- **Scalability Issues**: Network congestion during high demand

## Risk Management Strategies

1. **Start Small**: Only use funds you can afford to lose
2. **Research Thoroughly**: Understand protocols before using them
3. **Diversify**: Don't put everything in one protocol
4. **Monitor Positions**: Keep track of collateral ratios
5. **Use Established Protocols**: Prefer audited, battle-tested platforms
6. **Stay Informed**: Follow project updates and security news

DeFi represents a significant evolution in finance, but participants should approach it with appropriate caution and education.
        `,
        quiz: {
          id: 'defi-risks-benefits-quiz',
          title: 'DeFi Risks and Benefits Quiz',
          questions: [
            {
              id: 'q1',
              text: 'Which of these is a key benefit of DeFi?',
              options: [
                'FDIC insurance on deposits',
                'Customer service call centers',
                'Global access without traditional banking requirements',
                'Stable, unchanging interest rates'
              ],
              correctAnswer: 'Global access without traditional banking requirements'
            },
            {
              id: 'q2',
              text: 'What is a significant technical risk in DeFi?',
              options: [
                'Bank holidays',
                'Smart contract vulnerabilities',
                'Physical theft of assets',
                'Server maintenance downtime'
              ],
              correctAnswer: 'Smart contract vulnerabilities'
            },
            {
              id: 'q3',
              text: 'Which risk management strategy is recommended for DeFi participants?',
              options: [
                'Invest all available funds to maximize returns',
                'Focus on a single protocol to master it completely',
                'Start small with funds you can afford to lose',
                'Ignore audits as they slow down innovation'
              ],
              correctAnswer: 'Start small with funds you can afford to lose'
            }
          ]
        }
      }
    ]
  },
  {
    id: 'nfts',
    title: 'NFTs & Digital Ownership',
    slug: 'nfts',
    description: 'Understand non-fungible tokens and their applications',
    lessons: [
      {
        id: 'what-are-nfts',
        title: 'What Are NFTs?',
        slug: 'what-are-nfts',
        description: 'Understanding non-fungible tokens and how they work',
        content: `
# What Are NFTs?

Non-Fungible Tokens (NFTs) are unique digital assets that represent ownership of specific items on the blockchain.

## Fungible vs. Non-Fungible

- **Fungible**: Interchangeable and identical (like dollars or Bitcoin)
- **Non-Fungible**: Unique and not interchangeable (like artwork or collectibles)

## How NFTs Work

NFTs are created ("minted") on blockchain networks that support smart contracts, such as Ethereum, Solana, or Polygon. Each NFT:

- Has a unique identifier
- Contains metadata about the asset it represents
- Can be transferred between wallets
- Has verifiable scarcity and ownership history

## NFT Standards

Different blockchains use different standards for NFTs:
- **Ethereum**: ERC-721 and ERC-1155
- **Solana**: Metaplex NFT Standard
- **Flow**: Flow NFT Standard

## Common NFT Properties

- **Provenance**: Verifiable history of ownership
- **Royalties**: Creators can earn from secondary sales
- **Utility**: Some NFTs provide access or functionality
- **Composability**: NFTs can interact with other blockchain elements

## Popular NFT Categories

1. **Digital Art**: Original artwork in digital form
2. **Collectibles**: Digital trading cards and collectible items
3. **Gaming Assets**: In-game items, characters, and land
4. **Virtual Real Estate**: Parcels in virtual worlds
5. **Music and Media**: Songs, videos, and other media
6. **Membership Tokens**: Access to communities or services

NFTs have revolutionized digital ownership by creating scarcity and provable authenticity for digital items.
        `,
        quiz: {
          id: 'nfts-quiz',
          title: 'NFTs Quiz',
          questions: [
            {
              id: 'q1',
              text: 'What does "non-fungible" mean in the context of NFTs?',
              options: [
                'Not able to be sold',
                'Not able to be copied',
                'Unique and not interchangeable',
                'Not able to be transferred'
              ],
              correctAnswer: 'Unique and not interchangeable'
            },
            {
              id: 'q2',
              text: 'Which of these is a key feature of NFTs?',
              options: [
                'They can be duplicated infinitely',
                'They have verifiable ownership history',
                'They can only represent artwork',
                'They are always free to create'
              ],
              correctAnswer: 'They have verifiable ownership history'
            },
            {
              id: 'q3',
              text: 'What are "royalties" in the context of NFTs?',
              options: [
                'Taxes paid to governments on NFT sales',
                'Fees paid to marketplaces for listing NFTs',
                'Payments to creators when their NFTs are resold',
                'Rewards for holding NFTs for long periods'
              ],
              correctAnswer: 'Payments to creators when their NFTs are resold'
            }
          ]
        }
      },
      {
        id: 'nft-use-cases',
        title: 'Use Cases of NFTs Beyond Art',
        slug: 'nft-use-cases',
        description: 'Exploring the diverse applications of NFT technology',
        content: `
# Use Cases of NFTs Beyond Art

While digital art has dominated NFT headlines, the technology has far broader applications across many industries.

## Gaming and Virtual Worlds

- **In-Game Assets**: Weapons, skins, characters that players truly own
- **Virtual Land**: Ownable parcels in metaverse platforms
- **Play-to-Earn**: Games where players earn valuable NFTs
- **Cross-Game Assets**: Items usable across different games

**Examples**: Axie Infinity, The Sandbox, Decentraland, Star Atlas

## Identity and Access

- **Membership Passes**: Access to communities, Discord servers, or events
- **Digital Credentials**: Certificates, degrees, and qualifications
- **Ticketing**: Event tickets with benefits and provable authenticity
- **Digital Identity**: Self-sovereign identity verification

**Examples**: Moonbirds, Proof Collective, POAP (Proof of Attendance Protocol)

## Real-World Assets

- **Real Estate**: Tokenized property ownership
- **Luxury Goods**: Authentication of high-value physical items
- **Supply Chain**: Tracking and verifying product authenticity
- **Legal Documents**: Deeds, certificates, and contracts

**Examples**: Propy, Arianee, VeChain

## Media and Entertainment

- **Music Ownership**: Royalty rights and exclusive releases
- **Film and Video**: Funding, distribution, and ownership rights
- **Books and Publishing**: Direct author-to-reader relationships
- **Journalism**: Supporting creators and fighting misinformation

**Examples**: Royal, Glass, Mirror

## Social and Community

- **Social Media Profiles**: Verified digital presence
- **Reputation Systems**: Verifiable credentials and history
- **Governance Rights**: Voting power in DAOs
- **Charitable Giving**: Transparent donation tracking

**Examples**: ENS Domains, Gitcoin Passport, Friend.tech

## Future Directions

- **Fractional Ownership**: Partial ownership of high-value assets
- **Dynamic NFTs**: NFTs that change based on external conditions
- **Soulbound Tokens**: Non-transferable tokens tied to an identity
- **Physical-Digital Twins**: NFTs linked to physical objects

NFTs are still in their early stages, with new use cases emerging as the technology matures and becomes more accessible.
        `,
        quiz: {
          id: 'nft-use-cases-quiz',
          title: 'NFT Use Cases Quiz',
          questions: [
            {
              id: 'q1',
              text: 'Which of these is a use case for NFTs in gaming?',
              options: [
                'Storing game save files',
                'Ownable in-game assets',
                'Improving graphics processing',
                'Reducing download times'
              ],
              correctAnswer: 'Ownable in-game assets'
            },
            {
              id: 'q2',
              text: 'What is a "POAP" in the NFT space?',
              options: [
                'A type of cryptocurrency',
                'A proof of attendance protocol',
                'A physical art print',
                'A programming language for NFTs'
              ],
              correctAnswer: 'A proof of attendance protocol'
            },
            {
              id: 'q3',
              text: 'How might NFTs be used in the music industry?',
              options: [
                'To prevent people from listening to music',
                'To replace streaming services entirely',
                'To represent ownership of royalty rights',
                'To increase the cost of music production'
              ],
              correctAnswer: 'To represent ownership of royalty rights'
            }
          ]
        }
      }
    ]
  },
  {
    id: 'daos',
    title: 'DAOs (Decentralized Autonomous Organizations)',
    slug: 'daos',
    description: 'Discover new forms of collective organization and governance',
    lessons: [
      {
        id: 'what-is-dao',
        title: 'What is a DAO?',
        slug: 'what-is-dao',
        description: 'Understanding decentralized autonomous organizations',
        content: `
# What is a DAO?

A Decentralized Autonomous Organization (DAO) is an entity with no central leadership, governed by its community members through transparent rules encoded as smart contracts.

## Key Characteristics of DAOs

- **Decentralized Governance**: Decision-making distributed among members
- **Transparency**: Rules and transactions visible on the blockchain
- **Autonomy**: Operations executed via smart contracts
- **Community Ownership**: Members hold governance tokens
- **Shared Treasury**: Collectively managed funds

## How DAOs Work

1. **Formation**: Smart contracts establish the rules
2. **Funding**: Members contribute capital for tokens
3. **Proposals**: Members submit ideas for consideration
4. **Voting**: Token holders vote on proposals
5. **Execution**: Approved proposals are implemented automatically

## Types of DAOs

- **Protocol DAOs**: Govern DeFi protocols (e.g., Uniswap, Aave)
- **Investment DAOs**: Pool capital for investments (e.g., MetaCartel)
- **Social DAOs**: Community-focused organizations (e.g., Friends With Benefits)
- **Service DAOs**: Provide services to other projects (e.g., Developer DAO)
- **Collector DAOs**: Acquire and manage assets (e.g., PleasrDAO)
- **Media DAOs**: Create and distribute content (e.g., BanklessDAO)

## Advantages of DAOs

- **Global Participation**: Anyone can join from anywhere
- **Reduced Hierarchy**: Flatter organizational structure
- **Aligned Incentives**: Members share in success
- **Resistance to Censorship**: Difficult to shut down
- **Transparency**: Open processes and finances

## Challenges of DAOs

- **Governance Participation**: Voter apathy and low turnout
- **Regulatory Uncertainty**: Unclear legal status in many jurisdictions
- **Technical Complexity**: Smart contract vulnerabilities
- **Coordination Issues**: Decision-making can be slow
- **Plutocracy Risk**: Wealth concentration affecting voting

DAOs represent a new model for human coordination, enabling global collaboration around shared goals and resources.
        `,
        quiz: {
          id: 'dao-quiz',
          title: 'DAO Basics Quiz',
          questions: [
            {
              id: 'q1',
              text: 'What does DAO stand for?',
              options: [
                'Digital Asset Organization',
                'Decentralized Autonomous Organization',
                'Distributed Application Ownership',
                'Direct Authority Operation'
              ],
              correctAnswer: 'Decentralized Autonomous Organization'
            },
            {
              id: 'q2',
              text: 'How do members typically participate in DAO governance?',
              options: [
                'By being elected to a board of directors',
                'By holding governance tokens and voting on proposals',
                'By being employed by the DAO',
                'By paying a monthly subscription fee'
              ],
              correctAnswer: 'By holding governance tokens and voting on proposals'
            },
            {
              id: 'q3',
              text: 'Which of these is a challenge faced by DAOs?',
              options: [
                'Too much centralized control',
                'Limited global accessibility',
                'Governance participation and voter apathy',
                'Inability to hold funds'
              ],
              correctAnswer: 'Governance participation and voter apathy'
            }
          ]
        }
      },
      {
        id: 'how-daos-work',
        title: 'How DAOs Work',
        slug: 'how-daos-work',
        description: 'The mechanics and operations of decentralized organizations',
        content: `
# How DAOs Work

Decentralized Autonomous Organizations operate through a combination of smart contracts, governance mechanisms, and community participation.

## The Technical Foundation

DAOs are built on blockchain technology, typically using:

- **Smart Contracts**: Self-executing code that defines the rules
- **Governance Tokens**: Digital assets that represent voting power
- **Voting Systems**: Mechanisms for collective decision-making
- **Treasury Management**: Systems for handling shared funds

## Governance Models

DAOs employ various governance approaches:

1. **Token-Based Voting**: One token equals one vote
2. **Quadratic Voting**: Voting power is the square root of tokens held
3. **Reputation-Based**: Voting power earned through participation
4. **Delegation**: Members can delegate votes to trusted representatives
5. **Multi-Signature**: Key actions require approval from multiple members

## The Proposal Process

Most DAOs follow a similar proposal workflow:

1. **Discussion**: Ideas are discussed in forums or Discord
2. **Formal Proposal**: A detailed proposal is submitted
3. **Review Period**: Community examines and debates the proposal
4. **Voting**: Members cast votes during a specified period
5. **Execution**: If approved, the proposal is implemented
6. **Feedback**: Results are monitored and evaluated

## Treasury Management

DAOs manage collective resources through:

- **Multi-signature Wallets**: Requiring multiple approvals for transactions
- **Escrow Contracts**: Holding funds until conditions are met
- **Streaming Payments**: Gradual release of funds over time
- **Investment Strategies**: Managing treasury assets for sustainability

## Operational Tools

Common tools used by DAOs include:

- **Snapshot**: Off-chain voting platform
- **Discourse/Commonwealth**: Discussion forums
- **Discord/Telegram**: Community communication
- **Gnosis Safe**: Multi-signature treasury management
- **Aragon/Colony/DAOhaus**: DAO creation and management platforms

## Legal Considerations

DAOs are navigating evolving legal frameworks:

- **Legal Wrappers**: Some DAOs use LLCs or Foundations
- **DAO-Specific Laws**: Wyoming and other jurisdictions have DAO legislation
- **Liability Questions**: Member liability remains unclear in many places
- **Compliance Challenges**: Securities laws, taxation, and KYC/AML

DAOs represent an evolving experiment in human coordination, with practices and tools constantly improving as the ecosystem matures.
        `,
        quiz: {
          id: 'how-daos-work-quiz',
          title: 'How DAOs Work Quiz',
          questions: [
            {
              id: 'q1',
              text: 'What typically forms the technical foundation of a DAO?',
              options: [
                'Traditional corporate bylaws',
                'Smart contracts on a blockchain',
                'Government regulations',
                'A central database'
              ],
              correctAnswer: 'Smart contracts on a blockchain'
            },
            {
              id: 'q2',
              text: 'What is "quadratic voting" in DAO governance?',
              options: [
                'Voting four times per proposal',
                'Voting power equals the square root of tokens held',
                'Requiring a 4/5 majority to pass proposals',
                'Voting on four options simultaneously'
              ],
              correctAnswer: 'Voting power equals the square root of tokens held'
            },
            {
              id: 'q3',
              text: 'What is a common tool used for off-chain DAO voting?',
              options: [
                'Twitter polls',
                'Google Forms',
                'Snapshot',
                'Email surveys'
              ],
              correctAnswer: 'Snapshot'
            }
          ]
        }
      }
    ]
  },
  {
    id: 'solana-intro',
    title: 'Introduction to Solana',
    slug: 'solana-intro',
    description: 'Learn about the high-performance Solana blockchain',
    lessons: [
      {
        id: 'solana-unique',
        title: 'What Makes Solana Unique?',
        slug: 'solana-unique',
        description: 'Understanding Solana\'s distinctive features and advantages',
        content: `
# What Makes Solana Unique?

Solana is a high-performance blockchain designed for scalability and speed, with several innovative features that set it apart from other networks.

## Core Innovations

### Proof of History (PoH)
- A novel timekeeping method for the blockchain
- Creates a historical record that proves events occurred at a specific time
- Allows validators to process transactions without extensive communication
- Serves as a cryptographic clock, reducing coordination overhead

### Proof of Stake (PoS)
- Validators stake SOL tokens to participate in consensus
- Energy-efficient alternative to Proof of Work
- Validators are rewarded for securing the network
- Malicious actors can lose their stake (slashing)

## Performance Advantages

### Speed
- Capable of processing 65,000+ transactions per second (TPS)
- Block time of approximately 400 milliseconds
- Near-instant transaction finality

### Cost
- Average transaction cost of less than $0.01
- Enables microtransactions that aren't feasible on other chains
- Affordable NFT minting and trading

### Scalability
- Single global state, no sharding required
- Designed to scale with Moore's Law
- Validator requirements increase with network usage

## Technical Architecture

Solana's architecture includes eight key innovations:

1. **Tower BFT**: A PoH-optimized version of Practical Byzantine Fault Tolerance
2. **Turbine**: A block propagation protocol
3. **Gulf Stream**: A mempool-less transaction forwarding protocol
4. **Sealevel**: Parallel smart contracts runtime
5. **Pipelining**: A transaction processing unit for optimization
6. **Cloudbreak**: A horizontally-scaled accounts database
7. **Archivers**: Distributed ledger storage
8. **Proof of History**: A verifiable delay function

## Ecosystem Strengths

- **Developer Experience**: Familiar programming models and tools
- **Composability**: All applications share the same state
- **Capital Efficiency**: Fast and cheap transactions enable new use cases
- **Growing Ecosystem**: Vibrant community of developers and projects

Solana's unique combination of speed, cost-efficiency, and scalability has attracted a diverse ecosystem of applications, from DeFi and NFTs to gaming and social platforms.
        `,
        quiz: {
          id: 'solana-unique-quiz',
          title: 'Solana\'s Unique Features Quiz',
          questions: [
            {
              id: 'q1',
              text: 'What is Proof of History in Solana?',
              options: [
                'A consensus mechanism that replaces Proof of Stake',
                'A timekeeping method that creates a historical record of events',
                'A way to verify the history of token transfers',
                'A system for tracking validator uptime'
              ],
              correctAnswer: 'A timekeeping method that creates a historical record of events'
            },
            {
              id: 'q2',
              text: 'What is a key performance advantage of Solana?',
              options: [
                'Unlimited free transactions',
                'Complete anonymity for all users',
                'High transaction speed and low costs',
                'Compatibility with Ethereum smart contracts'
              ],
              correctAnswer: 'High transaction speed and low costs'
            },
            {
              id: 'q3',
              text: 'How does Solana achieve scalability?',
              options: [
                'By using multiple interconnected blockchains (sharding)',
                'By limiting the number of validators',
                'By using a single global state with parallel processing',
                'By processing transactions in batches once per day'
              ],
              correctAnswer: 'By using a single global state with parallel processing'
            }
          ]
        }
      },
      {
        id: 'proof-of-history',
        title: 'Proof of History (PoH) & Solana\'s Consensus Mechanism',
        slug: 'proof-of-history',
        description: 'Understanding the innovative time-keeping system behind Solana',
        content: `
# Proof of History (PoH) & Solana's Consensus Mechanism

Solana's breakthrough innovation is Proof of History, a timekeeping method that enables its high-performance consensus.

## The Problem PoH Solves

In traditional blockchains:
- Nodes must communicate extensively to agree on time
- This communication creates bottlenecks
- Reaching consensus on transaction order is time-consuming

## What is Proof of History?

Proof of History is:
- A verifiable delay function (VDF)
- A method to cryptographically verify passage of time
- A way to create a historical record of events
- A "cryptographic clock" for the blockchain

## How PoH Works

1. **Sequential Hashing**: A sequence of computation that must be done in order
2. **Timestamp Embedding**: Each hash includes the output of the previous hash
3. **Verifiable Sequence**: Anyone can verify the sequence took a specific time to create
4. **Trustless Timekeeping**: No need to trust external time sources

## Solana's Consensus: Tower BFT

Solana combines PoH with a modified Proof of Stake system called Tower BFT:

- **Leader Selection**: Validators take turns producing blocks
- **Vote Weighting**: Votes are weighted by stake amount
- **Slashing**: Penalties for malicious behavior
- **Pipelining**: Efficient transaction processing

## The Validator Network

Solana's network consists of:

- **Leaders**: Validators selected to produce blocks
- **Validators**: Nodes that verify transactions and vote on blocks
- **Delegators**: SOL holders who stake with validators
- **RPC Nodes**: Service providers that connect users to the network

## Benefits of Solana's Approach

- **High Throughput**: 65,000+ transactions per second
- **Low Latency**: 400-600ms block times
- **Fast Finality**: Transactions confirm quickly
- **Energy Efficiency**: No wasteful mining
- **Deterministic Ordering**: Clear sequence of events

Proof of History represents a fundamental innovation in blockchain design, enabling Solana to achieve performance levels previously thought impossible for decentralized systems.
        `,
        quiz: {
          id: 'proof-of-history-quiz',
          title: 'Proof of History Quiz',
          questions: [
            {
              id: 'q1',
              text: 'What problem does Proof of History primarily solve?',
              options: [
                'Transaction privacy',
                'Time synchronization between nodes',
                'Token distribution',
                'Smart contract security'
              ],
              correctAnswer: 'Time synchronization between nodes'
            },
            {
              id: 'q2',
              text: 'How does Proof of History work?',
              options: [
                'By requiring miners to solve complex puzzles',
                'By using a sequential hashing process that creates a verifiable time record',
                'By relying on trusted timestamping authorities',
                'By synchronizing with atomic clocks'
              ],
              correctAnswer: 'By using a sequential hashing process that creates a verifiable time record'
            },
            {
              id: 'q3',
              text: 'What consensus mechanism does Solana use alongside Proof of History?',
              options: [
                'Proof of Work',
                'Delegated Proof of Stake',
                'Proof of Authority',
                'Tower BFT (a modified Proof of Stake)'
              ],
              correctAnswer: 'Tower BFT (a modified Proof of Stake)'
            }
          ]
        }
      },
      {
        id: 'solana-ecosystem',
        title: 'Key Projects in the Solana Ecosystem',
        slug: 'solana-ecosystem',
        description: 'Exploring the major applications and protocols built on Solana',
        content: `
# Key Projects in the Solana Ecosystem

The Solana ecosystem has grown rapidly, with projects spanning DeFi, NFTs, gaming, and more. Here's an overview of key projects in different categories.

## DeFi Protocols

### Decentralized Exchanges (DEXs)
- **Raydium**: AMM and liquidity provider for Serum
- **Orca**: User-friendly AMM with concentrated liquidity
- **Jupiter**: Aggregator for best swap routes across DEXs
- **Serum**: Order book-based DEX infrastructure

### Lending and Borrowing
- **Solend**: Algorithmic lending protocol
- **Mango Markets**: Margin trading and lending
- **Larix**: Multi-asset lending platform
- **Jet Protocol**: Institutional-grade lending

### Yield and Staking
- **Marinade Finance**: Liquid staking solution
- **Lido for Solana**: Staked SOL (stSOL)
- **Tulip Protocol**: Yield aggregation and leveraged farming
- **Kamino Finance**: Automated liquidity management

## NFT Ecosystem

### Marketplaces
- **Magic Eden**: Leading Solana NFT marketplace
- **Solanart**: Early Solana NFT marketplace
- **Tensor**: Trading platform with advanced features
- **Formfunction**: Curated 1/1 NFT marketplace

### Notable Collections
- **Solana Monkey Business**: Early profile picture collection
- **DeGods**: Community-focused PFP project
- **Okay Bears**: Mainstream-recognized PFP collection
- **Claynosaurz**: Gaming-integrated NFTs

### NFT Infrastructure
- **Metaplex**: NFT standard and tooling
- **Cardinal**: NFT infrastructure and utilities
- **Crossmint**: NFT minting and payments infrastructure

## Gaming and Metaverse

- **Star Atlas**: Space exploration MMO
- **Aurory**: RPG with play-to-earn elements
- **Genopets**: Move-to-earn game
- **Solana Saga**: Web3 mobile phone with gaming focus

## Social and Identity

- **Dialect**: Messaging protocol
- **Coral**: Social graph protocol
- **Backpack**: Identity and wallet infrastructure
- **Phantom**: Popular wallet with social features

## Infrastructure and Tools

- **Helius**: RPC and developer infrastructure
- **Triton**: Data indexing and APIs
- **Solana Pay**: Payment protocol
- **Squads**: Multisig and DAO tools
- **Anchor**: Development framework

## Stablecoins and Payments

- **USDC on Solana**: Circle's stablecoin
- **USDT on Solana**: Tether's stablecoin
- **Pyth**: Oracle network for price data
- **Switchboard**: General-purpose oracle

The Solana ecosystem continues to evolve rapidly, with new projects launching regularly to address various use cases and market needs.
        `,
        quiz: {
          id: 'solana-ecosystem-quiz',
          title: 'Solana Ecosystem Quiz',
          questions: [
            {
              id: 'q1',
              text: 'Which of these is a popular DEX in the Solana ecosystem?',
              options: [
                'Uniswap',
                'PancakeSwap',
                'Raydium',
                'SushiSwap'
              ],
              correctAnswer: 'Raydium'
            },
            {
              id: 'q2',
              text: 'What is Metaplex in the Solana ecosystem?',
              options: [
                'A gaming platform',
                'A lending protocol',
                'NFT standard and tooling',
                'A stablecoin'
              ],
              correctAnswer: 'NFT standard and tooling'
            },
            {
              id: 'q3',
              text: 'Which project provides liquid staking for SOL?',
              options: [
                'Serum',
                'Marinade Finance',
                'Magic Eden',
                'Coral'
              ],
              correctAnswer: 'Marinade Finance'
            }
          ]
        }
      }
    ]
  },
  {
    id: 'using-solana',
    title: 'Using Solana',
    slug: 'using-solana',
    description: 'Practical guidance for interacting with the Solana blockchain',
    lessons: [
      {
        id: 'solana-wallet-setup',
        title: 'How to Set Up a Solana Wallet',
        slug: 'solana-wallet-setup',
        description: 'Step-by-step guide to creating and securing a Solana wallet',
        content: `
# How to Set Up a Solana Wallet

A Solana wallet is your gateway to the Solana ecosystem. This guide will walk you through setting up a wallet and keeping it secure.

## Popular Solana Wallets

Several wallet options are available for Solana users:

- **Phantom**: User-friendly browser extension and mobile app
- **Solflare**: Feature-rich wallet with staking support
- **Backpack**: Identity-focused wallet with xNFT support
- **Glow**: Mobile-first wallet with advanced features
- **Ledger**: Hardware wallet for maximum security

## Setting Up Phantom Wallet (Browser)

1. **Installation**:
   - Visit [phantom.app](https://phantom.app)
   - Click "Download" and select your browser
   - Install the browser extension

2. **Wallet Creation**:
   - Click the Phantom icon in your browser
   - Select "Create New Wallet"
   - Create and confirm a strong password

3. **Seed Phrase Backup**:
   - Write down your 12-word seed phrase in order
   - Confirm your seed phrase when prompted
   - Store this phrase securely offline

4. **Wallet Configuration**:
   - Customize settings (optional)
   - Connect to Solana Mainnet
   - Add tokens you want to track

## Setting Up a Mobile Wallet

1. **Download the App**:
   - Get Phantom, Solflare, or another wallet from your app store
   - Verify you're downloading the official app

2. **Create or Import**:
   - Create a new wallet or import existing
   - Set up biometric authentication
   - Secure your seed phrase

## Securing Your Wallet

- **Never share your seed phrase or private key**
- **Use a hardware wallet for large amounts**
- **Enable additional security features**:
  - App lock
  - Transaction signing confirmations
  - Auto-lock timeout
- **Be cautious of phishing attempts**
- **Verify all transaction details before signing**

## Next Steps After Setup

- **Get SOL**: Purchase SOL from an exchange and withdraw to your wallet
- **Explore dApps**: Connect to Solana applications
- **Manage NFTs**: View and organize your NFT collection
- **Stake SOL**: Earn rewards by staking with validators

Your wallet is now ready to use across the Solana ecosystem!
        `,
        quiz: {
          id: 'solana-wallet-setup-quiz',
          title: 'Solana Wallet Setup Quiz',
          questions: [
            {
              id: 'q1',
              text: 'What should you do with your seed phrase?',
              options: [
                'Share it with wallet support staff',
                'Store it in a password manager',
                'Write it down and store it securely offline',
                'Take a screenshot and save it on your computer'
              ],
              correctAnswer: 'Write it down and store it securely offline'
            },
            {
              id: 'q2',
              text: 'Which of these is a popular wallet for Solana?',
              options: [
                'MetaMask',
                'Phantom',
                'Trust Wallet',
                'Coinbase Wallet'
              ],
              correctAnswer: 'Phantom'
            },
            {
              id: 'q3',
              text: 'What is the purpose of a hardware wallet?',
              options: [
                'To mine Solana tokens',
                'To increase transaction speed',
                'To provide maximum security for your assets',
                'To reduce transaction fees'
              ],
              correctAnswer: 'To provide maximum security for your assets'
            }
          ]
        }
      },
      {
        id: 'sending-receiving-sol',
        title: 'Sending and Receiving SOL',slug: 'sending-receiving-sol',
        description: 'Learn how to transfer SOL and other tokens on Solana',
        content: `
# Sending and Receiving SOL

Transferring SOL and other tokens on the Solana blockchain is fast, inexpensive, and straightforward once you understand the basics.

## Receiving SOL

To receive SOL or other Solana tokens:

1. **Access Your Address**:
   - Open your Solana wallet
   - Find your wallet address (a long string starting with a letter)
   - Use the "Copy" button to copy your address

2. **Share Your Address**:
   - Send your address to the person sending you SOL
   - Use the QR code option for in-person transfers
   - Double-check the address before sharing

3. **Verify Receipt**:
   - Transactions typically confirm in less than a second
   - Check your wallet balance to confirm receipt
   - View transaction details in your history

## Sending SOL

To send SOL to another address:

1. **Initiate Transfer**:
   - Open your wallet
   - Click "Send" or equivalent button
   - Enter the recipient's Solana address

2. **Enter Details**:
   - Specify the amount to send
   - Add a memo/reference (optional)
   - Review the transaction fee (typically <$0.01)

3. **Confirm and Send**:
   - Double-check the recipient address
   - Verify the amount is correct
   - Approve the transaction
   - Sign with your password/biometrics if required

## Managing SPL Tokens

SPL tokens are Solana's equivalent of ERC-20 tokens on Ethereum:

1. **Adding Tokens**:
   - Most wallets auto-detect known tokens
   - For others, you may need to "Add Token"
   - Enter the token's mint address

2. **Sending Tokens**:
   - Process is similar to sending SOL
   - Select the token from your asset list
   - Enter amount and recipient address

3. **Token Accounts**:
   - Each token requires an account on Solana
   - Account creation requires a small SOL fee
   - Keep some SOL for account management

## Understanding Rent and Accounts

Solana uses a concept called "rent" for storing data:

- New accounts require a small SOL deposit
- This deposit is fully refundable if you close the account
- Minimum balance varies by account type
- Most wallets handle this automatically

## Troubleshooting Common Issues

- **Transaction Failed**: Ensure you have enough SOL for fees
- **Token Not Showing**: Add the token manually with its mint address
- **Recipient Can't See Funds**: Verify they have the token account created
- **Slow Transaction**: Rare, but network congestion can cause delays

Solana's efficiency makes transfers quick and affordable, with most transactions confirming in less than a second.
        `,
        quiz: {
          id: 'sending-receiving-sol-quiz',
          title: 'Sending and Receiving SOL Quiz',
          questions: [
            {
              id: 'q1',
              text: 'What information do you need to receive SOL?',
              options: [
                'Your email address',
                'Your phone number',
                'Your Solana wallet address',
                'Your bank account details'
              ],
              correctAnswer: 'Your Solana wallet address'
            },
            {
              id: 'q2',
              text: 'What is typically required to create a new token account on Solana?',
              options: [
                'A government ID',
                'A small amount of SOL',
                'Permission from the token creator',
                'A minimum of 100 tokens'
              ],
              correctAnswer: 'A small amount of SOL'
            },
            {
              id: 'q3',
              text: 'How long do Solana transactions typically take to confirm?',
              options: [
                'About 10 minutes',
                'Less than a second',
                '24 hours',
                '1-2 minutes'
              ],
              correctAnswer: 'Less than a second'
            }
          ]
        }
      },
      {
        id: 'exploring-solana-dapps',
        title: 'Exploring Solana DApps',
        slug: 'exploring-solana-dapps',
        description: 'How to discover and use decentralized applications on Solana',
        content: `
# Exploring Solana DApps

Decentralized applications (DApps) on Solana offer a wide range of services and experiences. This guide will help you discover and use them safely.

## What Are Solana DApps?

Solana DApps are applications that:
- Run on the Solana blockchain
- Operate without central authorities
- Connect to your wallet for transactions
- Offer services from finance to gaming to social

## Finding Quality DApps

Discover reliable Solana applications through:

1. **Aggregators and Directories**:
   - [DappRadar](https://dappradar.com/solana)
   - [Solana.com Ecosystem](https://solana.com/ecosystem)
   - [SolanaFM Discover](https://solana.fm/discover)

2. **Community Resources**:
   - Solana Twitter/X community
   - Discord servers
   - Reddit (r/solana)

3. **Wallet Integrations**:
   - Phantom's DApp browser
   - Solflare's Discover section

## Connecting Your Wallet

To use a DApp, you'll need to connect your wallet:

1. Visit the DApp's website
2. Click "Connect Wallet" or similar
3. Select your wallet provider
4. Approve the connection request
5. Review permissions carefully

## Popular DApp Categories

### DeFi Applications
- **DEXs**: Jupiter, Raydium, Orca
- **Lending**: Solend, Mango Markets
- **Yield**: Marinade Finance, Tulip Protocol

### NFT Platforms
- **Marketplaces**: Magic Eden, Tensor
- **Minting Sites**: Various project websites
- **NFT Tools**: Cardinal, Metaplex

### Games and Entertainment
- **Web Games**: Aurory, Star Atlas
- **Gambling**: Solana Casino, BetDEX
- **Metaverse**: Portals, Somnium Space

### Social and Communication
- **Social Platforms**: Dialect, Squads
- **Content Creation**: Audius, Glass

## Security Best Practices

When using DApps, protect yourself by:

- **Verifying URLs**: Check for the correct domain
- **Starting Small**: Test with small amounts first
- **Reading Permissions**: Understand what you're approving
- **Researching Projects**: Look for audits and community trust
- **Revoking Access**: Disconnect from unused DApps

## Troubleshooting Connection Issues

Common issues and solutions:

- **Wallet Not Connecting**: Refresh the page or restart your browser
- **Transaction Errors**: Ensure you have enough SOL for fees
- **Slow Loading**: Try a different RPC provider in your wallet settings
- **Incompatible Wallet**: Try an alternative supported wallet

Exploring Solana DApps opens up a world of possibilities, from earning yield on your assets to collecting digital art or playing games.
        `,
        quiz: {
          id: 'exploring-solana-dapps-quiz',
          title: 'Exploring Solana DApps Quiz',
          questions: [
            {
              id: 'q1',
              text: 'What do you need to interact with Solana DApps?',
              options: [
                'A credit card',
                'A Solana wallet',
                'A developer account',
                'A subscription service'
              ],
              correctAnswer: 'A Solana wallet'
            },
            {
              id: 'q2',
              text: 'Which of these is a security best practice when using DApps?',
              options: [
                'Share your seed phrase with the DApp for better integration',
                'Connect to as many DApps as possible',
                'Verify the URL and start with small amounts',
                'Always use public WiFi for better speed'
              ],
              correctAnswer: 'Verify the URL and start with small amounts'
            },
            {
              id: 'q3',
              text: 'What is Jupiter in the Solana ecosystem?',
              options: [
                'A planet-themed game',
                'A DEX aggregator',
                'A hardware wallet',
                'A staking service'
              ],
              correctAnswer: 'A DEX aggregator'
            }
          ]
        }
      }
    ]
  }
];

export const badges: Badge[] = [
  // ... existing badges ...
  {
    id: 'web3-novice',
    title: 'Web3 Novice',
    description: 'Completed your first Web3 lesson',
    image: '/badges/web3-novice.svg'
  },
  {
    id: 'web3-explorer',
    title: 'Web3 Explorer',
    description: 'Completed all Web3 Basics lessons',
    image: '/badges/web3-explorer.svg'
  },
  {
    id: 'defi-beginner',
    title: 'DeFi Beginner',
    description: 'Completed your first DeFi lesson',
    image: '/badges/defi-beginner.svg'
  },
  {
    id: 'wallet-master',
    title: 'Wallet Master',
    description: 'Completed all Wallets & Identity lessons',
    image: '/badges/wallet-master.svg'
  },
  {
    id: 'decentralization-advocate',
    title: 'Decentralization Advocate',
    description: 'Completed all Decentralization & Trustlessness lessons',
    image: '/badges/decentralization-advocate.svg'
  },
  {
    id: 'defi-explorer',
    title: 'DeFi Explorer',
    description: 'Completed all DeFi lessons',
    image: '/badges/defi-explorer.svg'
  },
  {
    id: 'nft-collector',
    title: 'NFT Collector',
    description: 'Completed all NFT lessons',
    image: '/badges/nft-collector.svg'
  },
  {
    id: 'dao-member',
    title: 'DAO Member',
    description: 'Completed all DAO lessons',
    image: '/badges/dao-member.svg'
  },
  {
    id: 'solana-pioneer',
    title: 'Solana Pioneer',
    description: 'Completed your first Solana lesson',
    image: '/badges/solana-pioneer.svg'
  },
  {
    id: 'solana-builder',
    title: 'Solana Builder',
    description: 'Completed all Introduction to Solana lessons',
    image: '/badges/solana-builder.svg'
  },
  {
    id: 'solana-user',
    title: 'Solana User',
    description: 'Completed all Using Solana lessons',
    image: '/badges/solana-user.svg'
  },
  {
    id: 'web3-graduate',
    title: 'Web3 Graduate',
    description: 'Completed all lessons in The Web3 Playbook',
    image: '/badges/web3-graduate.svg'
  }
];