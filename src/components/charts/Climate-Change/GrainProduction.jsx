import React, { useEffect, useRef } from 'react'
import * as Plot from '@observablehq/plot'
import * as d3 from 'd3'

const GrainProduction = ({ data, geo, id }) => {
  const plotRef = useRef();
  
  useEffect(() => {
    if (data && plotRef.current && data.length > 0) {
        const no_data = geo.features.filter((d) => {
            const element = data.find((e) => d.properties.sov_a3 == e.Code);
            return element ? false : true;
        });

      const plot = Plot.plot({
        marginLeft: 0,
        marginRight: 0,
        caption: "Source: UN Population Division, UN FAO.",
        fx: { label:null},
        projection: { 
          type:"mercator",
          domain: d3.geoCircle().center([15, 0]).radius(40)(),
        },
        color: {
          legend: true,
          scheme:"RdYlGn",
          label: "Total Grain Production Per Capita (kg)",
          type:"sqrt",
        },
        marks: [
          Plot.axisFx({ fontSize: 14, tickFormat: (d) => d.toString().replace(",", ""), dx: 15 }),    
          Plot.geo(geo, {strokeOpacity: 0.5, stroke: "grey"}),
          Plot.geo(no_data, {fill: "grey",fillOpacity: 0.2}),
          Plot.geo(data, Plot.centroid({
            fill: "Value",
            stroke: "black",
            strokeOpacity: 0.5,
            strokeWidth: 0.5,
            fx: "Year",
            tip: {
              channels:{
                'Year': "Year",
                "Grain Per Capita": "Value",
                "Country": "Country"
              },
              format:{
                fx: false,
                fill: false,
                "Year": true,
                "Country": true,
                "Grain Per Capita": true,
              }
            },
          })),
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

  return <div ref={plotRef} className="grain-production-map chart" id={id}></div>
}

export default GrainProduction
