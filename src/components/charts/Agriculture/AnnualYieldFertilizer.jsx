import React, { useEffect, useRef } from "react";
import * as Plot from "@observablehq/plot";

const AnnualYieldFertilizer = ({ yieldData, fertilizerData, id }) => {
  const plotRef = useRef();
  const plotFertilizerRef = useRef();

  useEffect(() => {
    if (yieldData && yieldData.length >  0 && fertilizerData && fertilizerData.length >  0 && plotRef.current && plotFertilizerRef.current) {
      const plot =  Plot.plot({
        style: "overflow: visible;",
        title: "Annual Grain Yields, Kenya",
        subtitle: "Metric Ton Per Hecta Acre, 1960-2023",
        y: {
          domain: [0,3],
        },
        color: {
          scheme: "Set2",
          legend: false
        },
        marks: [
          Plot.lineY(yieldData, {x: "Year", y: "Yield (t/ha)", stroke: "Country"}),
          Plot.areaY(yieldData, {x: "Year", y: "Yield (t/ha)", fill: "Country", opacity:0.7}),
          Plot.axisX({ fontSize: 12, tickFormat: (d) => d.toString().replace(",", ""), label:null }),
          Plot.axisY({ ticks: 5, fontSize: 12})  
        ]
      });

      const plotFertilizer = Plot.plot({
        x: {tickFormat: (d) => d.toString().replace(",", "")},
        y: {label: "Fertilizer Per Hecta Acre (kg/ha)"},
        title: "Annual Fertilizer Usage, Kenya",
        subtitle: "Kilogram Per Hecta Acre, 1960-2023",
        color: {
          scheme: "Set1",    
          legend: false,
        },
        marks: [
          Plot.lineY(fertilizerData, {x: "Year", y: "All fertilizers use per area of cropland", stroke: "Entity"}),
          Plot.areaY(fertilizerData, {x: "Year", y: "All fertilizers use per area of cropland", fill: "Entity", opacity:0.7}),
          Plot.axisX({ fontSize: 12, tickFormat: (d) => d.toString().replace(",", "") }),
          Plot.axisY({ domain: [0,3], ticks: 10, fontSize: 12 })  
        ]
      })

      plotRef.current.appendChild(plot);
      plotFertilizerRef.current.appendChild(plotFertilizer);

      return () => {
        if (plotRef.current && plotFertilizerRef.current) {
          plotRef.current.removeChild(plot);
          plotFertilizerRef.current.removeChild(plotFertilizer);
        }
      };
    }
  }, [yieldData, fertilizerData]);

  return (
    <div className="display flex">
      <div ref={plotRef} className="annual-yield-linechart chart-small chart" id={id + "-yield"}></div>
      <div ref={plotFertilizerRef} className="annual-fertilizer-linechart chart-small chart" id={id + "-fertilizer"}></div>
    </div>
  );
};

export default AnnualYieldFertilizer;
