import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import * as Plot from '@observablehq/plot'

const ChildObesity = () => {
  const plotRef = useRef();

  useEffect(() => {
    if (plotRef.current) {
      const datum = [
        {
          area: "Urban",
          type: "Overweight",
          value: 12.8
        },
        {
          area: "Urban",
          type: "Obese",
          value: 9.8
        },  
        {
          area: "Rural",
          type: "Overweight",
          value: 6.9
        },
        {
          area: "Rural",
          type: "Obese",
          value: 1.5
        },    
      ];

      const plot = Plot.plot({
        x: {label: null},
        y: {tickFormat: "s", grid: true, label:"Population (%)"},
        color: {scheme: "Paired", legend: true},
        title: "Overweight And Obese Children, Africa",
        subtitle: "Primary School Learners, Children Ages 5-11",
        caption:"Source: Prevalence of overweight and obesity among African primary school learners: a systematic review and meta-analysis.",
        marks: [
          Plot.barY(datum, {
            x: "area",
            y: "value",
            fill: "type",
            inset: 80,
            insetTop: 0,
            insetBottom: 0,
            tip: {
                channels: {
                    Type: "type",
                    Area: "area"
                },
                format: {
                    Type: true,
                    Area: true,
                    y: true,
                    x:false,
                    fill: false
                }
            }
          }),
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

export default ChildObesity
