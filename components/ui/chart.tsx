"use client"

import * as React from "react"
import { ResponsiveContainer, PieChart, Pie, Tooltip, Legend } from "recharts"

type ChartProps = {
  children: React.ReactNode
  className?: string
}

const Chart = React.forwardRef<HTMLDivElement, ChartProps>(({ className, children, ...props }, ref) => {
  return (
    <div className={className} ref={ref}>
      <ResponsiveContainer width="100%" height="100%">
        {children}
      </ResponsiveContainer>
    </div>
  )
})
Chart.displayName = "Chart"

type ChartPieProps = {
  data: any[]
  dataKey: string
  nameKey: string
  innerRadius?: number | string
  outerRadius?: number | string
  paddingAngle?: number
  children?: React.ReactNode
}

const ChartPie = React.forwardRef<any, ChartPieProps>(
  ({ data, dataKey, nameKey, innerRadius, outerRadius, paddingAngle, ...props }, ref) => {
    return (
      <PieChart>
        <Pie
          ref={ref}
          data={data}
          dataKey={dataKey}
          nameKey={nameKey}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          paddingAngle={paddingAngle}
          {...props}
        />
      </PieChart>
    )
  },
)
ChartPie.displayName = "ChartPie"

type ChartTooltipProps = {
  children?: React.ReactNode
}

const ChartTooltip = React.forwardRef<HTMLDivElement, ChartTooltipProps>(({ children, ...props }, ref) => {
  return <Tooltip ref={ref} content={children} {...props} />
})
ChartTooltip.displayName = "ChartTooltip"

type ChartTooltipContentProps = {
  content: (props: any) => React.ReactNode
  className?: string
}

const ChartTooltipContent = React.forwardRef<HTMLDivElement, ChartTooltipContentProps>(
  ({ content, className, ...props }, ref) => {
    // We're not rendering the content function directly, but passing it to Tooltip
    // The Tooltip component will call this function with the appropriate props
    return null
  },
)
ChartTooltipContent.displayName = "ChartTooltipContent"

type ChartLegendProps = {
  children?: React.ReactNode
  verticalAlign?: "top" | "middle" | "bottom"
  align?: "left" | "center" | "right"
  layout?: "horizontal" | "vertical"
  iconType?: "circle" | "rect" | "line" | "square" | "triangle" | "star" | "polygon" | "wye" | "diamond"
  iconSize?: number
}

const ChartLegend = React.forwardRef<HTMLDivElement, ChartLegendProps>(
  ({ children, verticalAlign, align, layout, iconType, iconSize, ...props }, ref) => {
    return (
      <Legend
        ref={ref}
        verticalAlign={verticalAlign}
        align={align}
        layout={layout}
        iconType={iconType}
        iconSize={iconSize}
        content={children}
        {...props}
      />
    )
  },
)
ChartLegend.displayName = "ChartLegend"

type ChartLegendContentProps = {
  content: (props: any) => React.ReactNode
  className?: string
  payload?: any[]
}

const ChartLegendContent = React.forwardRef<HTMLDivElement, ChartLegendContentProps>(
  ({ content, className, payload, ...props }, ref) => {
    // We're not rendering the content function directly, but passing it to Legend
    // The Legend component will call this function with the appropriate props
    return null
  },
)
ChartLegendContent.displayName = "ChartLegendContent"

type ChartContainerProps = {
  children: React.ReactNode
  className?: string
  config?: Record<string, { label: string; color: string }>
}

const ChartContainer = React.forwardRef<HTMLDivElement, ChartContainerProps>(
  ({ className, children, config, ...props }, ref) => {
    return (
      <div className={className} ref={ref} {...props}>
        {children}
      </div>
    )
  },
)
ChartContainer.displayName = "ChartContainer"

export { Chart, ChartPie, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent, ChartContainer }

