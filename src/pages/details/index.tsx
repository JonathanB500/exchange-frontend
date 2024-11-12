import Grid from "@mui/material/Grid2";
import StatCard from "../../components/stat_card";
import "./styles.css";
import Chart from "../../components/chart";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { getStockHistory } from "../../services/Stocks";
import { useParams } from "react-router-dom";
import { getCryptoHistory } from "../../services/Crypto";

type Props = {};

const Details = (props: Props) => {
  const { type, symbol } = useParams();

  const [itemHistory, setItemHistory] = useState<any>([]);

  const getHistory = async (symbol: string | undefined) => {
    try {
      let response: any = null;
      if (type === "stock") {
        response = await getStockHistory(symbol ?? "");
      } else {
        response = await getCryptoHistory(symbol ?? "");
      }
      setItemHistory(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log(type);
    getHistory(symbol);
  }, [symbol]);

  useEffect(() => {
    console.log(itemHistory);
  }, [itemHistory]);

  if (itemHistory.length === 0) {
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
              itemHistory[6].updated_at
            ).toLocaleString("en-EN", {
              month: "long",
            })} - ${new Date(itemHistory[6].updated_at).getDate()}`}
            value={String(itemHistory[6].price)}
            interval={"Last 7 days"}
            data={itemHistory}
            field={"price"}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <StatCard
            title={`Volume | ${new Date(
              itemHistory[6].updated_at
            ).toLocaleString("en-EN", {
              month: "long",
            })} - ${new Date(itemHistory[6].updated_at).getDate()}`}
            value={String(itemHistory[6].volume)}
            interval={"Last 7 days"}
            data={itemHistory}
            field={"volume"}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <StatCard
            title={`Coin Market Cap | ${new Date(
              itemHistory[6].updated_at
            ).toLocaleString("en-EN", {
              month: "long",
            })} - ${new Date(itemHistory[6].updated_at).getDate()}`}
            value={String(itemHistory[6].price)}
            interval={"Last 7 days"}
            data={itemHistory}
            field={"coin_market_cap"}
          />
        </Grid>
      </Grid>
      <Box component={"section"} sx={{ width: "90%", margin: "20px auto" }}>
        <Chart data={itemHistory} />
      </Box>
    </div>
  );
};

export default Details;
