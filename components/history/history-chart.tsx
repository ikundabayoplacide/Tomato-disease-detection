"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

export function HistoryChart() {
  // Sample data for the chart
  const data = [
    { date: "Jan", "Early Blight": 4, "Late Blight": 2, "Leaf Mold": 1, "Septoria Leaf Spot": 3, Healthy: 15 },
    { date: "Feb", "Early Blight": 3, "Late Blight": 1, "Leaf Mold": 2, "Septoria Leaf Spot": 2, Healthy: 17 },
    { date: "Mar", "Early Blight": 8, "Late Blight": 5, "Leaf Mold": 3, "Septoria Leaf Spot": 4, Healthy: 12 },
    { date: "Apr", "Early Blight": 6, "Late Blight": 3, "Septoria Leaf Spot": 4, Healthy: 12 },
    { date: "Apr", "Early Blight": 6, "Late Blight": 4, "Leaf Mold": 2, "Septoria Leaf Spot": 3, Healthy: 14 },
    { date: "May", "Early Blight": 5, "Late Blight": 3, "Leaf Mold": 1, "Septoria Leaf Spot": 2, Healthy: 18 },
    { date: "Jun", "Early Blight": 3, "Late Blight": 2, "Leaf Mold": 1, "Septoria Leaf Spot": 1, Healthy: 20 },
  ]

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Early Blight" stroke="#ef4444" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="Late Blight" stroke="#f97316" />
        <Line type="monotone" dataKey="Leaf Mold" stroke="#eab308" />
        <Line type="monotone" dataKey="Septoria Leaf Spot" stroke="#84cc16" />
        <Line type="monotone" dataKey="Healthy" stroke="#22c55e" />
      </LineChart>
    </ResponsiveContainer>
  )
}

