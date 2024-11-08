import React, { useEffect, useRef } from 'react'
import * as Plot from '@observablehq/plot'

const CerealYields = ({ data, cereal_yields, id }) => {
  const plotRef = useRef();
  
  useEffect(() => {
    if (data && plotRef.current && data.length > 0) {
      const filteredData = data.filter((d) => d['intermediate-region'] !== null && d['intermediate-region'] !== undefined && d['intermediate-region'] !== "");

      const plot = Plot.plot({
        width: 1080,
        height: 300,
        x: {label: null},
        fx: {label: null},
        y: {label:null},
        caption: "Source: Food and Agriculture Organization of the United Nations (2023) – with major processing by Our World in Data",
        marks: [
          Plot.lineY(filteredData, {x: "Year", y: "Cereals", z:"Entity", fx: "intermediate-region", stroke: "grey", opacity: 0.5}),
          Plot.lineY(cereal_yields, {x: "Year", y: "yield", fx: "Country", stroke: "Country", strokeWidth: 2.5, tip: {
                channels: {
                    'Yield': 'yield'
                },
                format: {
                    fx:false,
                    y:false,
                    stroke:true,
                    x: (d) => d.toString().replace(",", ""),
                    'Yield':true,
                },
                fontSize:14
            }
          }),   
          Plot.axisFx({ fontSize: 18 }),
          Plot.axisX({ fontSize: 18, tickFormat: (d) => d.toString().replace(",", "") }),
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
  }, [data])

  return <div ref={plotRef} className="cereal-yields-linechart chart-small chart" id={id}></div>
}

export default CerealYields
