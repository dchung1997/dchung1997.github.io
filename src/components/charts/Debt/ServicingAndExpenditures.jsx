import React, { useEffect, useRef } from 'react'
import * as Plot from '@observablehq/plot'

const ServicingAndExpenditures = ({ data, id }) => {
  const plotRef = useRef();
  
  useEffect(() => {
    if (data && data.length > 0 && plotRef.current) {
      const plot = Plot.plot({
        style: "overflow: visible;",
        y: {
          label: "Annual Expenditure (Total Government Spending (%))",
          ticks: 5,
          domain:[0,20],
        },
        x: {
          tickFormat: (d) => d.toString().replace(",","")
        },
        color: {
          legend: true,
          scheme: "Set1"
        },
        title: "Debt Servicing to Education and Health Spending",
        subtitle: "Africa (Median), 2009-2024",
        caption: "Source: Africa One, International Debt Statistics (IDS), UNESCO Institute for Statistics, WHO GHED, IMF WEO",
        marks: [
          Plot.lineY(data, {x: "Year", y: "Expenditure", stroke: "Expenditure Type", strokeOpacity: 1, strokeWidth: 2.5, curve: "catmull-rom", tip: {
            channels: {
              "Annual Expenditure (%)": "Expenditure",
            },
            format: {
              "Expenditure Type": true, 
              "Annual Expenditure (%)": true, 
              "Year": true,
              y: false
            }
          }
        }),
          Plot.dot(data, Plot.selectLast({x: "Year", y: "Expenditure", z: "Expenditure Type", text: "Expenditure Type", textAnchor: "start", fill: "Expenditure Type", fontWeight: "bold"})),
          Plot.text(data, Plot.selectLast({x: "Year", y: "Expenditure", z: "Expenditure Type", text: "Expenditure Type", textAnchor: "start", dx: 5, dy:15, fill: "Expenditure Type", fontWeight: "bold", fontSize: 14})),
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

  return <div ref={plotRef} className="servicing-and-expenditures-linechart chart" id={id}></div>
}

export default ServicingAndExpenditures;
