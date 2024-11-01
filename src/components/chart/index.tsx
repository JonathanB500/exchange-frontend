import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { LineChart } from "@mui/x-charts/LineChart";
import { getDaysValues } from "../../utils/getDaysValues";

export interface ChartProps {
  data: any[];
}

function AreaGradient({ color, id }: { color: string; id: string }) {
  return (
    <defs>
      <linearGradient id={id} x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" stopColor={color} stopOpacity={0.5} />
        <stop offset="100%" stopColor={color} stopOpacity={0} />
      </linearGradient>
    </defs>
  );
}

function getElementList(data: any[], key: string) {
  return data.map((i) => i[key]);
}

export default function Chart({ data }: ChartProps) {
  const theme = useTheme();
  const days = getDaysValues(data);
  const pricesList = getElementList(data, "price");
  const volumeList = getElementList(data, "volume");
  const cmcList = getElementList(data, "coinMarketCap");

  const colorPalette = [
    theme.palette.primary.light,
    theme.palette.primary.main,
    theme.palette.primary.dark,
  ];

  return (
    <Card variant="outlined" sx={{ width: "100%" }}>
      <CardContent>
        <Typography component="h2" variant="subtitle2" gutterBottom>
          Summary
        </Typography>
        <Stack sx={{ justifyContent: "space-between" }}>
          <Typography variant="caption" sx={{ color: "text.secondary" }}>
            Summary for price, volume and coin market cap for the last 7 days
          </Typography>
        </Stack>
        <LineChart
          colors={colorPalette}
          xAxis={[
            {
              scaleType: "point",
              data: days,
              tickInterval: (index, i) => (i + 1) % 5 === 0,
            },
          ]}
          series={[
            {
              id: "price",
              label: "Price",
              showMark: false,
              curve: "linear",
              stack: "total",
              area: true,
              stackOrder: "ascending",
              data: pricesList,
            },
            {
              id: "volume",
              label: "Volume",
              showMark: false,
              curve: "linear",
              stack: "total",
              area: true,
              stackOrder: "ascending",
              data: volumeList,
            },
            {
              id: "cmc",
              label: "Coin Market Cap",
              showMark: false,
              curve: "linear",
              stack: "total",
              stackOrder: "ascending",
              data: cmcList,
              area: true,
            },
          ]}
          height={250}
          margin={{ left: 50, right: 20, top: 20, bottom: 20 }}
          grid={{ horizontal: true }}
          sx={{
            "& .MuiAreaElement-series-cmc": {
              fill: "url('#cmc')",
            },
            "& .MuiAreaElement-series-volume": {
              fill: "url('#volume')",
            },
            "& .MuiAreaElement-series-price": {
              fill: "url('#price')",
            },
          }}
          slotProps={{
            legend: {
              hidden: true,
            },
          }}
        >
          <AreaGradient color={theme.palette.primary.dark} id="price" />
          <AreaGradient color={theme.palette.primary.main} id="volume" />
          <AreaGradient color={theme.palette.primary.light} id="cmc" />
        </LineChart>
      </CardContent>
    </Card>
  );
}
