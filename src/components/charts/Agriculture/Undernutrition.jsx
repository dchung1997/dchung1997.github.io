import React, { useEffect, useRef } from 'react'
import * as Plot from '@observablehq/plot'

const Undernutrition = ({ data, id }) => {
  const plotRef = useRef();
  
  useEffect(() => {
    if (data && data.length > 0 && plotRef.current) {
      const plot = Plot.plot({
        style: "overflow: visible;",
        y: {
          label: "Percentage of Individuals Undernourished (%)",
          ticks: 5,
        },
        x: {
          tickFormat: (d) => d.toString().replace(",","")
        },
        color: {
          legend: true,
        },
        title: "Undernutrition Prevalence by Region",
        subtitle: "Africa, 2000-2024",
        caption: "Source: FAO | FAOSTAT | Prevalence of Undernutrition.",
        marks: [
          Plot.lineY(data, {x: "Year", y: "Value", stroke: "Area", strokeOpacity: 1, strokeWidth: 2.5, curve: "catmull-rom"}),
          Plot.dot(data, Plot.selectLast({x: "Year", y: "Value", z: "Area", text: "Area", textAnchor: "start", fill: "Area", fontWeight: "bold"})),
          Plot.text(data, Plot.selectLast({x: "Year", y: "Value", z: "Area", text: "Area", textAnchor: "start", dx: 5, fill: "Area", fontWeight: "bold", fontSize: 14})),
      
        ]
      });

      plotRef.current.appendChild(plot)

      return () => {
        if (plotRef.current) {
          plotRef.current.removeChild(plot)
        }
      }
    }
  }, [data])

  return <div ref={plotRef} className="undernutrition-linechart chart" id={id}></div>
}

export default Undernutrition;
