import React, { useEffect, useRef } from "react";
import * as Plot from "@observablehq/plot";

const AnnualProductionPerCapita = ({ firstThree, lastThree, id }) => {
  const plotRef = useRef();
  const plotBottomRef = useRef();

  useEffect(() => {
    if (firstThree && firstThree.length >  0 && lastThree && lastThree.length >  0 && plotRef.current && plotBottomRef.current) {
      const plot =   Plot.plot({
        style: "overflow: visible;",
        title: "Annual Production Per Capita (kg), Africa",
        subtitle: "Top Regional Fertilizer Usage Per Hecta Acre, 1960-2023",
        height: 250,
        width: 1300,
        color: {
          scheme: "Observable10",
          legend: true,
          domain: ["Benin", "Kenya", "Nigeria", "Botswana", "Zimbabawe", "Zambia"],
        },
        marks: [
          Plot.lineY(firstThree, {x: "Year", y: "Production per capita (kg)", fx: "Country", stroke: "Country"}),
          Plot.areaY(firstThree, {x: "Year", y: "Production per capita (kg)", fx: "Country", fill: "Country", fillOpacity: 0.7}),
          Plot.axisX({ fontSize: 14, tickFormat: (d) => d.toString().replace(",", ""), label:null }),
          Plot.axisFx({ fontSize: 14, label:null, tickFormat: null}),  
          Plot.axisY({ ticks: 5, fontSize: 14, label:null }),
        ]
      });

      const plotBottom =  Plot.plot({
        style: "overflow: visible;",
        caption: "Source: UN FAO",
        height: 250,
        width: 1300,
        color: {
          scheme: "Observable10",
          domain: ["Benin", "Kenya", "Nigeria", "Botswana", "Zimbabwe", "Zambia"]    
        },
        marks: [
          Plot.lineY(lastThree, {x: "Year", y: "Production per capita (kg)", fx: "Country", stroke: "Country"}),
          Plot.areaY(lastThree, {x: "Year", y: "Production per capita (kg)", fx: "Country", fill: "Country", fillOpacity: 0.7}),
          Plot.axisX({ fontSize: 14, tickFormat: (d) => d.toString().replace(",", ""), label:null }),
          Plot.axisFx({ fontSize: 14, label:null, tickFormat: null}),  
          Plot.axisY({ ticks: 5, fontSize: 14, label:null })  
        ]
      });

      plotRef.current.appendChild(plot);
      plotBottomRef.current.appendChild(plotBottom);

      return () => {
        if (plotRef.current && plotBottomRef.current) {
          plotRef.current.removeChild(plot);
          plotBottomRef.current.removeChild(plotBottom);
        }
      };
    }
  }, [firstThree, lastThree]);

  return (
    <>
      <div ref={plotRef} className="annual-production-linechart chart-small chart" id={id + "-top"}></div>
      <div ref={plotBottomRef} className="annual-production-linechart chart-small chart" id={id + "-bottom"}></div>    
    </>
  );
};

export default AnnualProductionPerCapita;
