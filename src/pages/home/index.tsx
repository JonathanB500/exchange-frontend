import Grid from "@mui/material/Grid2";
import StatCard from "../../components/stat_card";
import "./styles.css";
import Chart from "../../components/chart";
import { Box } from "@mui/material";

type Props = {};

const Home = (props: Props) => {
  const stockData = {
    symbol: "NVDA",
    history: [
      {
        price: 120.87,
        date: new Date("09/28/2024"),
        volume: 354966800,
        coinMarketCap: 120,
      },
      {
        price: 123.51,
        date: new Date("09/29/2024"),
        volume: 284692900,
        coinMarketCap: 123,
      },
      {
        price: 124.04,
        date: new Date("09/30/2024"),
        volume: 302582900,
        coinMarketCap: 124,
      },
      {
        price: 121.4,
        date: new Date("09/31/2024"),
        volume: 354966800,
        coinMarketCap: 121,
      },
      {
        price: 121.44,
        date: new Date("10/1/2024"),
        volume: 70988100,
        coinMarketCap: 121,
      },
      {
        price: 117.0,
        date: new Date("10/2/2024"),
        volume: 47423200,
        coinMarketCap: 117,
      },
      {
        price: 121.44,
        date: new Date("10/3/2024"),
        volume: 70988100,
        coinMarketCap: 121,
      },
    ],
  };

  return (
    <div className="home">
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
            title={`Price | ${stockData.history[6].date.toLocaleString(
              "en-EN",
              {
                month: "long",
              }
            )} - ${stockData.history[6].date.getDate()}`}
            value={String(stockData.history[6].price)}
            interval={"Last 7 days"}
            data={stockData.history}
            field={"price"}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <StatCard
            title={`Volume | ${stockData.history[6].date.toLocaleString(
              "en-EN",
              {
                month: "long",
              }
            )} - ${stockData.history[6].date.getDate()}`}
            value={String(stockData.history[6].volume)}
            interval={"Last 7 days"}
            data={stockData.history}
            field={"volume"}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <StatCard
            title={`Coin Market Cap | ${stockData.history[6].date.toLocaleString(
              "en-EN",
              {
                month: "long",
              }
            )} - ${stockData.history[6].date.getDate()}`}
            value={String(stockData.history[6].price)}
            interval={"Last 7 days"}
            data={stockData.history}
            field={"coinMarketCap"}
          />
        </Grid>
      </Grid>
      <Box component={"section"} sx={{ width: "90%", margin: "20px auto" }}>
        <Chart data={stockData.history} />
      </Box>
    </div>
  );
};

export default Home;
