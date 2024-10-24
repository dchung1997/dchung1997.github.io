'use client'

import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import * as Plot from '@observablehq/plot'

const DivergingBarChart = ({ data }) => {
  const plotRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (data && plotRef.current && data.length > 0) {
      const order = d3.groupSort(data,
        (g) => d3.max(g, (d) => d["intermediate-region"]),
        (d) => d['name']
      )
      
      const greaterThan5 = data.filter((d) => {
        if (d.Sector == "defence") {
            const element = data.find((e) => e.Sector != d.Sector && e.name == d.name);
            return element && d.Value - element.Value >= 5; 
        }
      });

      const plot = Plot.plot({
        x: {label: "Percent of Annual Spending (%)"},
        fx: {label: null, tickFormat: (d) => String(d).charAt(0).toUpperCase() + String(d).slice(1) },
        y: {label: null, domain: order},
        marginLeft: 120,
        title: "Planned Total Percent Spending of Countries",
        subtitle: "Sub-Saharan Africa Agriculture vs Defense, 2022",
        caption: "Source: Government Spending Watch, Note: Nigeria, Mozambique, and Dijbouti did not have data for agriculture spending. Chad, Djibouti, and Sao Tome did not have data on defense spending.",
        color: {scheme: "Observable10", legend: true},
        marks: [
          Plot.ruleX([10, 10], {
            strokeDasharray: "4,4",
            stroke: "green"
          }),
          Plot.ruleX([5], {
            strokeDasharray: "4,4",
            stroke: "orange",
          }),
          
          Plot.barX(data, {
            x: "Value",
            y: "name",
            fx: "Sector",
            fill: "intermediate-region",
            tip: {
                channels: {
                    Sector: "Sector",
                    Region: "intermediate-region",
                    Country: "name",
                },
                format: {
                  Country: true,
                  Region: true,
                  Sector: (d) => String(d).charAt(0).toUpperCase() + String(d).slice(1),
                  x: true,
                  fx: false,
                  y: false,
                  fill: false
                },
            },        
          }),
          Plot.dot(greaterThan5, {
            x: "Value",
            y: "name",
            fx: "Sector",
            fill: "intermediate-region",
            dx: 5,
          }),
          Plot.ruleX([0]),
        ]
      })

      plotRef.current.appendChild(plot)

      return () => {
        if (plotRef.current) {
          plotRef.current?.removeChild(plot)
        }
      }
    }
  }, [data])

  return <div ref={plotRef} className="diverging-bar-chart chart"></div>
}

export default DivergingBarChart
