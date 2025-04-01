"use client"

import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { name: "Early Blight", value: 8, color: "#ef4444" },
  { name: "Late Blight", value: 5, color: "#f97316" },
  { name: "Leaf Mold", value: 3, color: "#eab308" },
  { name: "Septoria Leaf Spot", value: 4, color: "#84cc16" },
  { name: "Healthy", value: 12, color: "#22c55e" },
]

const CustomTooltip = ({ active, payload }: any) => {
  if (!active || !payload || !payload.length) return null

  const { name, value } = payload[0]
  const data = payload[0].payload

  return (
    <div className="bg-background p-3 shadow-md rounded-md border">
      <div className="flex items-center gap-2">
        <div className="h-3 w-3 rounded-full" style={{ backgroundColor: data.color }} />
        <div className="text-sm font-medium">{name}</div>
      </div>
      <div className="text-sm text-muted-foreground mt-1">{value} instances detected</div>
    </div>
  )
}

const CustomLegend = ({ payload }: any) => {
  if (!payload) return null

  return (
    <div className="flex flex-col gap-2 text-sm">
      {payload.map((entry: any, index: number) => (
        <div key={`item-${index}`} className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full" style={{ backgroundColor: entry.color }} />
          <div className="flex items-center gap-1">
            <div className="font-medium">{entry.value}</div>
            <div className="text-muted-foreground">({entry.payload.value})</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export function DiseaseOverviewChart() {
  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" innerRadius={70} outerRadius={90} paddingAngle={2}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend
            verticalAlign="middle"
            align="right"
            layout="vertical"
            iconType="circle"
            iconSize={10}
            content={<CustomLegend />}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

