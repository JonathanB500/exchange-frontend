// import axios from "axios";

// const BASE_URL = "http://127.0.0.1:8000/api";

// export const createWallet = async (userId: string): Promise<{ walletId: string; message: string }> => {
//   try {
//     const response = await axios.post(`${BASE_URL}/wallets`, { userId });
//     return response.data;
//   } catch (error) {
//     console.error("Error creating wallet:", error);
//     throw error;
//   }
// };

// export const getWalletDetails = async (walletId: string): Promise<{
//   walletId: string;
//   balance: number;
//   assets: { type: "stock" | "crypto"; symbol: string; amount: number; value: number }[];
// }> => {
//   try {
//     const response = await axios.get(`${BASE_URL}/wallets/${walletId}`);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching wallet details:", error);
//     throw error;
//   }
// };

// Mock implementation
export const createWallet = async (userId: string): Promise<{ walletId: string; message: string }> => {
    console.log(`Creating wallet for user: ${userId}`);
    // Mock response data
    return {
      walletId: "mock_wallet_id_123",
      message: "Wallet created successfully",
    };
  };
  
  // Get Wallet Details with Mock Data
  export const getWalletDetails = async (walletId: string): Promise<{
    walletId: string;
    balance: number;
    assets: { type: "stock" | "crypto"; symbol: string; amount: number; value: number }[];
  }> => {
    console.log(`Fetching details for wallet: ${walletId}`);
    // Mock wallet details
    return {
      walletId,
      balance: 5000, // Mocked balance in USD
      assets: [
        { type: "crypto", symbol: "BTC", amount: 0.5, value: 25000 },
        { type: "crypto", symbol: "ETH", amount: 5, value: 10000 },
        { type: "stock", symbol: "AAPL", amount: 10, value: 1500 },
        { type: "stock", symbol: "TSLA", amount: 3, value: 2100 },
      ],
    };
  };
  