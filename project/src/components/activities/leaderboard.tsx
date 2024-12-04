import React, { useState, useEffect } from "react";
import { Typography, Box, useMediaQuery, useTheme } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

interface ClassStanding {
  className: string;
  points: number;
}

const LeaderboardLineChart: React.FC = () => {
  const [standings, setStandings] = useState<ClassStanding[]>([
    { className: "s1", points: 0 },
    { className: "s2", points: 0 },
    { className: "s3", points: 0 },
    { className: "s4", points: 0 },
    { className: "s5", points: 0 },
    { className: "s6", points: 0 },
    { className: "s7", points: 0 },
    { className: "s8", points: 0 },
    { className: "s9", points: 0 },
    { className: "s10", points: 0 },
    { className: "s11", points: 0 },
    { className: "s12", points: 0 },
    { className: "s13", points: 0 },
    { className: "s14", points: 0 },
  ]);

  // Sort standings by numeric order of className (e.g., s1, s2, s3, etc.)
  useEffect(() => {
    const sortedStandings = [...standings].sort((a, b) => {
      const idA = parseInt(a.className.replace("s", "")); // Convert "s1" to 1
      const idB = parseInt(b.className.replace("s", "")); // Convert "s2" to 2
      return idA - idB; // Sort numerically
    });
    setStandings(sortedStandings);
  }, []);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Responsive check

  return (
    <Box
      style={{
        maxWidth: isMobile ? "100%" : 1000,
        margin: "20px auto",
        textAlign: "center",
        padding: isMobile ? "10px" : "20px",
      }}
    >
      <Typography variant={isMobile ? "h5" : "h4"} gutterBottom>
        Leaderboard Trend
      </Typography>
      <ResponsiveContainer width="90%" height={isMobile ? 300 : 500}>
        <LineChart
          data={standings}
          margin={{
            top: 20,
            right: isMobile ? 10 : 30,
            bottom: isMobile ? 50 : 40,
            left: isMobile ? 10 : 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="className"
            angle={-45}
            textAnchor="end"
            interval={0}
            style={{ fontSize: isMobile ? "10px" : "12px" }}
          />
          <YAxis style={{ fontSize: isMobile ? "10px" : "12px" }} />
          <Tooltip />
          <Legend verticalAlign="top" />
          <Line
            type="monotone"
            dataKey="points"
            stroke="#8884d8"
            strokeWidth={2}
            dot={isMobile ? false : true}
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default LeaderboardLineChart;