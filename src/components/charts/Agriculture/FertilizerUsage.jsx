import React, { useEffect, useRef } from "react";
import * as Plot from "@observablehq/plot";
import * as d3 from "d3";

const FertilizerUsage = ({ data, geo, id }) => {
  const plotRef = useRef();
  const plotRefBottom = useRef();

  useEffect(() => {
    if (data && plotRef.current && data.length > 0) {
      const no_data = geo.features.filter((d) => {
        const element = data.find((e) => d.properties.sov_a3 == e.Code);
        return element ? false : true;
      });

      const firstThree = data.filter((d) => d.Year % 10 == 0 && d.Year <= 1990  && d.Year > 1950);
      const lastThree = data.filter((d) => d.Year % 10 == 0 && d.Year > 1990);

      const firstData = firstThree.filter((d) => {
        const element = geo.features.find((e) => e.properties.sov_a3 == d.Code);
        return element ? true : false;
      }).map((d) => {
        const element = geo.features.find((e) => e.properties.sov_a3 == d.Code);
        d.geometry = element.geometry;
        d.type = element.type;
        return d;
      });

      const lastData = lastThree.filter((d) => {
        const element = geo.features.find((e) => e.properties.sov_a3 == d.Code);
        return element ? true : false;
      }).map((d) => {
        const element = geo.features.find((e) => e.properties.sov_a3 == d.Code);
        d.geometry = element.geometry;
        d.type = element.type;
        return d;
      }); 

      const plot = Plot.plot({
        fx: { label:null},
        projection: { 
          type:"mercator",
          domain: d3.geoCircle().center([0, 0]).radius(40)(),
        },
        color: {
          legend: true,
          scheme:"Greens",
          label: "Total Fertilizer Usage per Hectacre (kg/ha)",
          type:"quantize",
          domain: [0,100]
        },
        height: 190,
        marks: [
          Plot.axisFx({ fontSize: 14, tickFormat: (d) => d.toString().replace(",", ""), dx: 15 }),    
          Plot.geo(geo, {strokeOpacity: 0.5, stroke: "grey", dx: -15}),
          Plot.geo(no_data, {fill: "grey",fillOpacity: 0.4, dx: -15}),
          Plot.geo(firstData, Plot.centroid({
            fill: "Value",
            stroke: "black",
            strokeOpacity: 0.5,
            strokeWidth: 0.5,
            fx: "Year",
            tip: true,
            dx: -15
          })),
        ]
      });

      const plotBottom = Plot.plot({
        caption: "Source: UN FAO, FAOSTAT",
        fx: { label:null},
        projection: { 
          type:"mercator",
          domain: d3.geoCircle().center([0, 0]).radius(40)(),
        },
        color: {
          legend: false,
          scheme:"Greens",
          label: "Total Grain Production Per Capita (kg)",
          type:"quantize",
          domain: [0,100]
        },
        height: 190,
        marks: [
          Plot.axisFx({ fontSize: 14, tickFormat: (d) => d.toString().replace(",", ""), dx: 15 }),    
          Plot.geo(geo, {strokeOpacity: 0.5, stroke: "grey", dx: -15}),
          Plot.geo(no_data, {fill: "grey",fillOpacity: 0.4, dx: -15}),
          Plot.geo(lastData, Plot.centroid({
            fill: "Value",
            stroke: "black",
            strokeOpacity: 0.5,
            strokeWidth: 0.5,
            fx: "Year", 
            dx: -15
            
          })),
        ]
      });

      plotRef.current.appendChild(plot);
      plotRefBottom.current.appendChild(plotBottom);

      return () => {
        if (plotRef.current) {
          plotRef.current.removeChild(plot);
          plotRefBottom.current.removeChild(plotBottom);
        }
      };
    }
  }, [data]);

  return (
    <>
      <div ref={plotRef} className="fertilizer-usage-chart chart" id={id}></div>
      <div
        ref={plotRefBottom}
        className="fertilizer-usage-chart chart"
        id={id + "-bottom"}
      ></div>
    </>
  );
};

export default FertilizerUsage;
