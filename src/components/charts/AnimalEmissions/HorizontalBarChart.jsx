import React, { useEffect, useRef } from 'react'
import * as Plot from '@observablehq/plot'

const HorizontalBarChart = ({ data, id }) => {
  const plotRef = useRef();
  
  useEffect(() => {
    if (data && data.length > 0 && plotRef.current) {
      const plot = Plot.plot({
        height: 250,
        width: 2400,
        x: {
          axis: false,
          tickSize: 0,
          labelArrow:false,
          label:""
        },
        y: {
          axis:false
        },
        color: {
          scheme: "BuRd"
        },
        marks: [
          Plot.barX(data, {x: "population", y: "y", fill:"category", height: 25}),
          Plot.text(data.slice(0, 1).concat(data.slice(-1)), {
            x: "placement", 
            y: -5, // Adjust y-position as needed
            text: d => d.category, 
            fill: "black", 
            textAnchor: "start",
            fontSize: "4.5em"
          }),    
          Plot.text(data.slice(0, 2), {
            x: "placement", 
            y: -5, // Adjust y-position as needed
            text: d => d.category, 
            fill: "black", 
            textAnchor: "end",
            fontSize: "4.5em"
          }),             
          Plot.text(data.slice(0, 1), {
            x: "placement", 
            y: 0, // Adjust y-position as needed
            dy: -15,
            text: d => "Total Population: " + d.population.toLocaleString() + " (" + d.percent + ")", 
            fill: "black", 
            textAnchor: "start",
            fontSize: "3.5em"
          }),    
          Plot.text(data.slice(0, 2), {
            x: "placement", 
            y: 0, // Adjust y-position as needed
            dy: -15,
            text: d => "Total Population: " + d.population.toLocaleString()  + " (" + d.percent + ")", 
            fill: "black", 
            textAnchor: "end",
            fontSize: "3.5em"
          })                         
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

  return <div ref={plotRef} className="horizontal-barchart" id={id}></div>
}

export default HorizontalBarChart;
