import React, { useEffect, useRef } from "react";
import * as Plot from "@observablehq/plot";
import * as d3 from "d3";

const Urbanization = ({ firstData, lastData, noData, geo, id }) => {
  const plotRef = useRef();
  const plotRefBottom = useRef();

  useEffect(() => {
    if (firstData && firstData.length > 0 && lastData && lastData.length > 0 && plotRef.current) {

      const plot = Plot.plot({
        marginLeft: 0,
        marginRight: 0,
        title: "Urbanization of Africa",
        subtitle: "Percentage of Population living in Urban Areas, 1960 to 2050",
        fx: { label:null},
        projection: { 
          type:"mercator",
          domain: d3.geoCircle().center([25, 0]).radius(40)(),
        },
        color: {
          legend: true,
          scheme:"RdYlGn",
          label: "Urban Population (% of total population)",
          type:"quantize",
          domain: [0,100]
        },
        marks: [
          Plot.axisFx({ fontSize: 14, tickFormat: (d) => d.toString().replace(",", ""), dx: -15 }),    
          Plot.geo(geo, {strokeOpacity: 0.5, stroke: "grey"}),
          Plot.geo(noData, {fill: "grey",fillOpacity: 0.4}),
          Plot.geo(firstData, Plot.centroid({
            fill: "Value",
            stroke: "black",
            strokeOpacity: 0.5,
            strokeWidth: 0.5,
            fx: "Year",
            tip: {
                channels: {
                    Country: "name",
                    "Urban (%)": "Value"
                },
                format: {
                    Country: true,
                    "Urban (%)": true,
                    fill: false,
                    fx: false
                }
            },
          })),
        ]
      });

      const plotBottom = Plot.plot({
        marginLeft: 0,
        marginRight: 0,
        caption: "Source: UN Population Division, World Urbanization Prospects",
        fx: { label:null},
        projection: { 
          type:"mercator",
          domain: d3.geoCircle().center([25, 0]).radius(40)(),
        },
        color: {
          legend: false,
          scheme:"RdYlGn",
          label: "Total Grain Production Per Capita (kg)",
          type:"quantize",
          domain: [0,100]
        },
        marks: [
          Plot.axisFx({ fontSize: 14, tickFormat: (d) => d.toString().replace(",", ""), dx: -15 }),    
          Plot.geo(geo, {strokeOpacity: 0.5, stroke: "grey"}),
          Plot.geo(noData, {fill: "grey",fillOpacity: 0.4}),
          Plot.geo(lastData, Plot.centroid({
            fill: "Value",
            stroke: "black",
            strokeOpacity: 0.5,
            strokeWidth: 0.5,
            fx: "Year",
            tip: {
                channels: {
                    Country: "name",
                    "Urban (%)": "Value"
                },
                format: {
                    Country: true,
                    "Urban (%)": true,
                    fill: false,
                    fx: false
                }
            },            
          })),
        ]
      });

      plotRef.current.appendChild(plot);
      plotRefBottom.current.appendChild(plotBottom);

      return () => {
        if (plotRef.current && plotRefBottom.current) {
          plotRef.current.removeChild(plot);
          plotRefBottom.current.removeChild(plotBottom);
        }
      };
    }
  }, [firstData, lastData, noData, geo]);

  return (
    <div className="block">
      <div ref={plotRef} className="chart" id={id}></div>
      <div
        ref={plotRefBottom}
        className="chart"
        id={id + "-bottom"}
      ></div>
    </div>
  );
};

export default Urbanization;
