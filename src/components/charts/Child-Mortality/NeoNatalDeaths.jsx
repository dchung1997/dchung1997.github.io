import React, { useEffect, useRef } from 'react'
import * as Plot from '@observablehq/plot'

const NeoNatalDeaths = ({ data, id }) => {
  const plotRef = useRef();
  
  useEffect(() => {
    if (data && plotRef.current && data.length > 0) {
      const plot = Plot.plot({
        style: "overflow: visible;",
        width:700,
        x: {grid: true, tickFormat: (d) => d.toString().replace(/,/g, ""), label: "",  ticks: 10 },
        title: "Children Stunted Under 5",
        subtitle: "South Asia 2000-2020",
        caption: "Source: Our World in Data",
        color: {
          legend: true
        },
        marks: [
          Plot.ruleY([0]),
          Plot.lineY(data, {x: "Year", y: "Share of children who are stunted (modeled estimates)", stroke: "Entity"}),
          Plot.text(data, Plot.selectLast({x: "Year", y: "Share of children who are stunted (modeled estimates)", z: "Entity", text: "Entity", textAnchor: "start", dx: 3}))
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

  return <div ref={plotRef} className="neo-natal-linechart chart" id={id}></div>
}

export default NeoNatalDeaths
