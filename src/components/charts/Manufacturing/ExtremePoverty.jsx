import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import * as Plot from '@observablehq/plot'

const ExtremePoverty = () => {
  const plotRef = useRef();

  useEffect(() => {
    if (plotRef.current) {
      const datum = [
        {
          year: 2018,
          area: "Rural",
          value: 46
        },
        {
          year: 2019,
          area: "Rural",
          value: 45
        },
        {
          year: 2020,
          area: "Rural",
          value: 47
        },
        {
          year: 2021,
          area: "Rural",
          value: 46
        },
        {
          year: 2022,
          area: "Rural",
          value: 46
        },
        {
          year: 2023,
          area: "Rural",
          value: 46
        },  
        {
          year: 2024,
          area: "Rural",
          value: 45
        },    
        {
          year: 2018,
          area: "Urban",
          value: 7
        },
        {
          year: 2019,
          area: "Urban",
          value: 7
        },
        {
          year: 2020,
          area: "Urban",
          value: 7
        },
        {
          year: 2021,
          area: "Urban",
          value: 7
        },
        {
          year: 2022,
          area: "Urban",
          value: 7
        },
        {
          year: 2023,
          area: "Urban",
          value: 7
        },  
        {
          year: 2024,
          area: "Urban",
          value: 7
        },  
      ];

      const plot = Plot.plot({
        x: {axis: null},
        fx: {label: null,  tickFormat: (d) => d.toString().replace(",","")},
        y: {grid: true, domain: [0, 60], label: "Share of Population (%)"},
        title: "Share Of Population Living In Extreme Poverty",
        subtitle: "Africa, 2018-2024",
        caption: "Source: Statista, Extreme poverty headcount ratio in Africa 2018-2024, by area of residence, Saifaddin Galal",
        height: 500,
        width:1100,
        color: {scheme: "Set2", legend: true},
        marks: [
          Plot.barY(datum, {
            x: "area",
            y: "value",
            fill: "area",
            fx: "year",
          }),
          Plot.text(datum, {
            x: "area",
            y: "value",
            text: "value",
            fx: "year", 
            dy: -7.5,
            fontWeight: 400,
            fontSize:14
          }),
          Plot.axisY({grid: true, domain: [0, 60], label: "Share of Population (%)", ticks: 5, fontSize:14}),
          Plot.axisFx({label: null,  tickFormat: (d) => d.toString().replace(",",""), anchor: "bottom", fontSize:14}),
          Plot.ruleY([0])
        ]
      });

      plotRef.current.appendChild(plot)

      return () => {
        if (plotRef.current) {
          plotRef.current?.removeChild(plot)
        }
      }
    }
  }, [])

  return <div ref={plotRef} className="chart"></div>
}

export default ExtremePoverty
