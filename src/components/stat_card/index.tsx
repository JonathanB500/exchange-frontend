import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { SparkLineChart } from "@mui/x-charts/SparkLineChart";
import { areaElementClasses } from "@mui/x-charts/LineChart";

export type StatCardProps = {
  title: string;
  value: string;
  interval: string;
  data: any[];
  field: string;
};

function getValues(data: any[], field: string) {
  return data.map((i) => i[field]);
}

function AreaGradient({ color, id }: { color: string; id: string }) {
  return (
    <defs>
      <linearGradient id={id} x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" stopColor={color} stopOpacity={0.3} />
        <stop offset="100%" stopColor={color} stopOpacity={0} />
      </linearGradient>
    </defs>
  );
}

function getDaysValues(data: any[]) {
  return data.map(
    (i) =>
      `${i.date.toLocaleString("en-EN", { month: "long" })} ${i.date.getDate()}`
  );
}

function calcTrend(data: any[], field: string) {
  const value = ((data[6][field] - data[0][field]) * 100) / data[5][field];
  const type = value < 0 ? "down" : "up";
  return {
    value,
    type,
  };
}

export default function StatCard({
  title,
  value,
  interval,
  data,
  field,
}: StatCardProps) {
  const theme = useTheme();
  const daysValue = getDaysValues(data);
  const dataValues = getValues(data, field);
  const trend = calcTrend(data, field);

  const trendColors = {
    up:
      theme.palette.mode === "light"
        ? theme.palette.success.main
        : theme.palette.success.dark,
    down:
      theme.palette.mode === "light"
        ? theme.palette.error.main
        : theme.palette.error.dark,
    neutral:
      theme.palette.mode === "light"
        ? theme.palette.grey[400]
        : theme.palette.grey[700],
  };

  const labelColors = {
    up: "success" as const,
    down: "error" as const,
    neutral: "default" as const,
  };

  const color = labelColors[trend.type as keyof typeof labelColors];
  const chartColor = trendColors[trend.type as keyof typeof labelColors];

  return (
    <Card variant="outlined" sx={{ height: "100%", width: "100%" }}>
      <CardContent>
        <Typography component="h2" variant="subtitle2" gutterBottom>
          {title}
        </Typography>
        <Stack
          direction="column"
          sx={{ justifyContent: "space-between", flexGrow: "1", gap: 1 }}
        >
          <Stack sx={{ justifyContent: "space-between" }}>
            <Stack
              direction="row"
              sx={{ justifyContent: "space-between", alignItems: "center" }}
            >
              <Typography variant="h4" component="p">
                {value}
              </Typography>
              <Chip
                size="small"
                color={color}
                label={`${trend.type === "up" ? "+" : ""} ${trend.value.toFixed(
                  5
                )}%`}
              />
            </Stack>
            <Typography variant="caption" sx={{ color: "text.secondary" }}>
              {interval}
            </Typography>
          </Stack>
          <Box sx={{ width: "100%", height: 50 }}>
            <SparkLineChart
              colors={[chartColor]}
              data={dataValues}
              area
              showHighlight
              showTooltip
              xAxis={{
                scaleType: "band",
                data: daysValue, // Use the correct property 'data' for xAxis
              }}
              sx={{
                [`& .${areaElementClasses.root}`]: {
                  fill: `url(#area-gradient-${value})`,
                },
              }}
            >
              <AreaGradient color={chartColor} id={`area-gradient-${value}`} />
            </SparkLineChart>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}
