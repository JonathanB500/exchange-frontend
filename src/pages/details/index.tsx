import Grid from "@mui/material/Grid2";
import StatCard from "../../components/stat_card";
import "./styles.css";
import Chart from "../../components/chart";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { getStockHistory } from "../../services/Stocks";
import { useParams } from "react-router-dom";

type Props = {};

const Details = (props: Props) => {
  const { symbol } = useParams();

  const [stockHistory, setStockHistory] = useState<any>([]);

  const getHistory = async (symbol: string | undefined) => {
    try {
      const response: any = await getStockHistory(symbol ?? "");
      setStockHistory(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getHistory(symbol);
  }, [symbol]);

  useEffect(() => {
    console.log(stockHistory);
  }, [stockHistory]);

  if (stockHistory.length === 0) {
    return <h3>Loading...</h3>;
  }

  return (
    <div className="details">
      <Grid
        container
        spacing={0}
        sx={{
          width: "90%",
          justifyContent: "space-between",
          margin: "0 auto",
          marginY: "50px",
          gap: "30px",
        }}
      >
        <Grid size={{ xs: 12, md: 3 }}>
          <StatCard
            title={`Price | ${new Date(
              stockHistory[6].updated_at
            ).toLocaleString("en-EN", {
              month: "long",
            })} - ${new Date(stockHistory[6].updated_at).getDate()}`}
            value={String(stockHistory[6].price)}
            interval={"Last 7 days"}
            data={stockHistory}
            field={"price"}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <StatCard
            title={`Volume | ${new Date(
              stockHistory[6].updated_at
            ).toLocaleString("en-EN", {
              month: "long",
            })} - ${new Date(stockHistory[6].updated_at).getDate()}`}
            value={String(stockHistory[6].volume)}
            interval={"Last 7 days"}
            data={stockHistory}
            field={"volume"}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <StatCard
            title={`Coin Market Cap | ${new Date(
              stockHistory[6].updated_at
            ).toLocaleString("en-EN", {
              month: "long",
            })} - ${new Date(stockHistory[6].updated_at).getDate()}`}
            value={String(stockHistory[6].price)}
            interval={"Last 7 days"}
            data={stockHistory}
            field={"coin_market_cap"}
          />
        </Grid>
      </Grid>
      <Box component={"section"} sx={{ width: "90%", margin: "20px auto" }}>
        <Chart data={stockHistory} />
      </Box>
    </div>
  );
};

export default Details;
