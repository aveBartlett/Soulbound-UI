// -------------------------
// CHAIN CONSTANTS
//--------------------------

export const AVALANCHE_MAINNET_PARAMS = {
  chainId: "0xA86A",
  chainName: "Avalanche Mainnet C-Chain",
  nativeCurrency: {
    name: "Avalanche",
    symbol: "AVAX",
    decimals: 18,
  },
  rpcUrls: ["https://api.avax.network/ext/bc/C/rpc"],
  blockExplorerUrls: ["https://snowtrace.io/"],
};

export const AVALANCHE_TESTNET_PARAMS = {
  chainId: "0xA869",
  chainName: "Avalanche Testnet C-Chain",
  nativeCurrency: {
    name: "Avalanche",
    symbol: "AVAX",
    decimals: 18,
  },
  rpcUrls: ["https://api.avax-test.network/ext/bc/C/rpc"],
  blockExplorerUrls: ["https://testnet.snowtrace.io/"],
};

export const AVALANCHE_LOCAL_PARAMS = {
  chainId: "0xA868",
  chainName: "Avalanche Local C-Chain",
  nativeCurrency: {
    name: "Avalanche",
    symbol: "AVAX",
    decimals: 18,
  },
  rpcUrls: ["https://localhost:9650/ext/bc/C/rpc"],
  blockExplorerUrls: ["https://testnet.snowtrace.io/"],
};

export const AVALANCHE_MORALIS_PARAMS = {
  chainId: "0xA868",
  chainName: "Avalanche Local C-Chain",
  nativeCurrency: {
    name: "Avalanche",
    symbol: "AVAX",
    decimals: 18,
  },
  rpcUrls: [
    "https://speedy-nodes-nyc.moralis.io/543b50e7bb5ca4f50c9df822/avalanche/mainnet",
  ],
  blockExplorerUrls: ["https://snowtrace.io/"],
};

export const networks = [
  AVALANCHE_LOCAL_PARAMS,
  AVALANCHE_MAINNET_PARAMS,
  AVALANCHE_MORALIS_PARAMS,
  AVALANCHE_TESTNET_PARAMS,
];

export const SECONDS_IN_YEAR = 60 * 60 * 24 * 365;

export const JOE_TOKEN_LIST_URL =
  "https://raw.githubusercontent.com/traderjoe-xyz/joe-tokenlists/main/joe.tokenlist.json";

export const MORALIS_MAINNET_RPC =
  "https://speedy-nodes-nyc.moralis.io/543b50e7bb5ca4f50c9df822/avalanche/mainnet";

export const MAINNET_RPC = "https://api.avax.network/ext/bc/C/rpc";

export const WAVAX_ADDRESS = "0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7";
