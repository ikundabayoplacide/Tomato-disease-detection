"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useRef } from "react"

export function ContactMap() {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // This is a placeholder for an actual map implementation
    // In a real application, you would use a library like Google Maps, Mapbox, or Leaflet

    if (mapRef.current) {
      const canvas = document.createElement("canvas")
      canvas.width = mapRef.current.clientWidth
      canvas.height = 250
      mapRef.current.appendChild(canvas)

      const ctx = canvas.getContext("2d")
      if (ctx) {
        // Draw a simple map placeholder
        ctx.fillStyle = "#f3f4f6"
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        // Draw some roads
        ctx.strokeStyle = "#d1d5db"
        ctx.lineWidth = 3

        // Horizontal roads
        for (let i = 1; i < 5; i++) {
          ctx.beginPath()
          ctx.moveTo(0, i * 50)
          ctx.lineTo(canvas.width, i * 50)
          ctx.stroke()
        }

        // Vertical roads
        for (let i = 1; i < 8; i++) {
          ctx.beginPath()
          ctx.moveTo(i * 80, 0)
          ctx.lineTo(i * 80, canvas.height)
          ctx.stroke()
        }

        // Draw a marker for the office location
        ctx.fillStyle = "#10b981"
        ctx.beginPath()
        ctx.arc(canvas.width / 2, canvas.height / 2, 10, 0, 2 * Math.PI)
        ctx.fill()

        // Add a pulse effect
        ctx.strokeStyle = "#10b981"
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.arc(canvas.width / 2, canvas.height / 2, 15, 0, 2 * Math.PI)
        ctx.stroke()

        // Add some text
        ctx.fillStyle = "#111827"
        ctx.font = "bold 14px sans-serif"
        ctx.textAlign = "center"
        ctx.fillText("TomatoGuard Headquarters", canvas.width / 2, canvas.height / 2 - 25)
      }
    }

    return () => {
      if (mapRef.current) {
        while (mapRef.current.firstChild) {
          mapRef.current.removeChild(mapRef.current.firstChild)
        }
      }
    }
  }, [])

  return (
    <Card>
      <CardContent className="p-0 overflow-hidden rounded-lg">
        <div ref={mapRef} className="h-[250px] w-full relative">
          {/* Map will be rendered here */}
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-muted-foreground text-sm">Interactive map loading...</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

