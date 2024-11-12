import React, { useEffect, useState } from "react";
import { Container, Typography, Paper, List, ListItem, ListItemText, Divider, Button } from "@mui/material";
import Footer from "../../components/footer/Footer";
import { createWallet, getWalletDetails } from "../../services/Wallet";

type Asset = {
  type: "stock" | "crypto";
  symbol: string;
  amount: number;
  value: number;
};

type Wallet = {
  walletId: string;
  balance: number;
  assets: Asset[];
};

const WalletPage = () => {
  const [wallet, setWallet] = useState<Wallet | null>(null);
  const [walletAssets, setWalletAssets] = useState<Asset[]>([]);
  
  const userId = "TODO: userId ";
  
  useEffect(() => {
    const initializeWallet = async () => {
      try {
        let walletData = await createWallet(userId);
        const walletDetails = await getWalletDetails(walletData.walletId);
        setWallet(walletDetails);
        setWalletAssets(walletDetails.assets);
      } catch (error) {
        console.error("Failed to initialize wallet:", error);
      }
    };
    
    initializeWallet();
  }, []);

  return (
    <Container maxWidth="md" style={{ marginTop: "2rem" }}>
      <Typography variant="h4" gutterBottom>
        Your Wallet
      </Typography>
      <Typography variant="body1" color="textSecondary" paragraph>
        Check your cryptocurrency balances and their estimated value.
      </Typography>

      {wallet ? (
        <Paper elevation={3} style={{ padding: "1rem" }}>
          <List>
            {walletAssets.map((asset, index) => (
              <React.Fragment key={asset.symbol}>
                <ListItem>
                  <ListItemText
                    primary={`${asset.symbol} - ${asset.type}`}
                    secondary={`Balance: ${asset.amount} - Value: $${asset.value}`}
                  />
                </ListItem>
                {index < walletAssets.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List>
        </Paper>
      ) : (
        <Typography variant="body1">Loading wallet data...</Typography>
      )}
      <Footer />
    </Container>
  );
};

export default WalletPage;
