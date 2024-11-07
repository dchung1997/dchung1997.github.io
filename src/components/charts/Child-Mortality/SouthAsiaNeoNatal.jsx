import React, { useEffect, useRef } from 'react'
import * as Plot from '@observablehq/plot'

const NeoNatalDeaths = ({ data, id, width, title, subtitle, fSize, color }) => {
  const plotRef = useRef();
  
  useEffect(() => {
    if (data && plotRef.current && data.length > 0) {
      const plot = Plot.plot({
        style: "overflow: visible;",
        title: title,
        subtitle: subtitle,
        width: width,
        marks: [
          Plot.ruleY([0]),
          Plot.axisX({fontSize: fSize, grid:false, tickFormat: (d) => d.toString().replace(",", ""), label: "",  ticks:  10}),
          Plot.axisY({fontSize: fSize, grid: true, label: null, ticks: 5}),
          Plot.lineY(data, {x: "period", y: "value", stroke: color}),
          Plot.areaY(data, {x: "period", y: "value", fill: color, opacity: 0.5}),    
        ]
      })
      plotRef.current.appendChild(plot)

      return () => {
        if (plotRef.current) {
          plotRef.current.removeChild(plot)
        }
      }
    }
  }, [data])

  return <div ref={plotRef} className="south-asia-areachart chart-small chart" id={id}></div>
}

export default NeoNatalDeaths
