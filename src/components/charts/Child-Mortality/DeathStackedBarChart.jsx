import React, { useEffect, useRef } from 'react'
import * as Plot from '@observablehq/plot'

const DeathStackedBarChart = ({ data, id }) => {
  const plotRef = useRef();
  
  useEffect(() => {
    if (data && plotRef.current && data.length > 0) {
      const plot = Plot.plot({
          width: 928,
          height: 500,
          marginLeft: 33,
          title: "Total Number of Child Deaths Under 5 to Total Infant Deaths",
          subtitle: "UNICEF Global 2000-2022",
          caption: "Source: UNICEF Data Warehouse",
          x: {label: null},
          y: {
            label: "Deaths (Millions)",
            tickFormat: (x) => {
              const millions = x / 1000000;
              return millions != 0 ? `${millions.toFixed(0)}M` : 0;
          }},
          color: {scheme: "Blues", legend: true, reverse: true },
          marks: [
            Plot.barY(data, Plot.stackY({x: "Time", y: "Deaths", fill: "category", reverse: true}))
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

  return <div ref={plotRef} className="child-death-stacked-barchart chart" id={id}></div>
}

export default DeathStackedBarChart
