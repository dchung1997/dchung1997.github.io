import React, { useEffect, useRef } from 'react'
import * as Plot from '@observablehq/plot'

const AnnualSpending = ({ countries, spending, id }) => {
  const plotRef = useRef();
  
  useEffect(() => {
    if (countries && countries.length > 0 && spending && spending.length > 0 &&plotRef.current) {
      const plot = Plot.plot({
        width: 1080,
        height: 300,
        x: {label: null},
        fx: {label: null},
        y: {label:null},
        caption: "Source: ReSAKSS: Tracking Indicators, Level-3 Government Agricultural Spending (% of Total Expenditures).",
        marks: [
          Plot.lineY(countries, {x: "Year", y: "Spending", z:"Country", fx: "intermediate-region", stroke: "grey", tip: true, opacity: 0.5}),
          Plot.lineY(spending, {x: "Year", y: "Spending", fx: "Country", stroke: "Country", strokeWidth: 2.5 }),   
          Plot.ruleY([10], {strokeDasharray: "4,4", stroke:"black"}),
          Plot.axisFx({ fontSize: 14 }),
          Plot.axisX({ fontSize: 14, tickFormat: (d) => d.toString().replace(",", "") }),
          Plot.axisY({ fontSize: 14 }) // Increase font size of Y-axis label    
        ]
      });

      plotRef.current.appendChild(plot)

      return () => {
        if (plotRef.current) {
          plotRef.current.removeChild(plot)
        }
      }
    }
  }, [countries, spending])

  return <div ref={plotRef} className="annual-spending-linechart chart-small chart" id={id}></div>
}

export default AnnualSpending;
