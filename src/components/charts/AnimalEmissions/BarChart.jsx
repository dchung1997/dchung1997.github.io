import React, { useEffect, useRef } from 'react'
import * as Plot from '@observablehq/plot'

const BarChart = ({ meatYield, meatProduction, id }) => {
  const plotRef = useRef();
  const plotBottomRef = useRef();
  
  useEffect(() => {
    if (meatYield && meatYield.length > 0 && meatProduction && meatProduction.length > 0 && plotRef.current && plotBottomRef.current) {
      const plot = Plot.plot({
        style: {fontSize: "16px"},
        y: {
          grid: true,
          label: "Meat Yield (kg)",
          insetTop: 40,
          ticks: 5
        },
        x: {
            type: "band",
            label: null,
        },
        fx: {
            label: null,
            tickPadding: -20,
        },
        color: {
            scheme: "Blues"
        },
        marks: [
          Plot.ruleY([0]),
          Plot.barY(meatYield, {fx: "country", x: "year", y: "value", fill:"country"})
        ]
      });

      const plotProduction = Plot.plot({
        style: {fontSize: "16px"},
        y: {
          grid: true,
          label: "Meat Production (Million Metric Tons)",
          insetTop: 40,
          tickPadding: -0.001,
          tickFormat: (d) => d / 1000000 + "m",
          ticks: 5
        },
        x: {
            type: "band",
            label: null,
        },
        fx: {
            label: null,
            tickPadding: -20,
        },
        color: {
            scheme: "Greens"
        },
        marks: [
          Plot.ruleY([0]),
          Plot.barY(meatProduction, {fx: "country", x: "year", y: "value", fill:"country" })
        ]
      });


      plotRef.current.appendChild(plot)
      plotBottomRef.current.appendChild(plotProduction)

      return () => {
        if (plotRef.current) {
          plotRef.current.removeChild(plot)
          plotBottomRef.current.removeChild(plotProduction)
        }
      }
    }
  }, [meatYield, meatProduction])

  return (
    <div className="flex justify-between"> 
        <div ref={plotRef} className="animal-consumption-barchart chart-small chart" id={id + "-top"}></div>
        <div ref={plotBottomRef} className="animal-consumption-barchart chart-small chart" id={id + "-bottom"}></div>    
     </div>
  )
}

export default BarChart;
