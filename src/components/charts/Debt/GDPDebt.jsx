import React, { useEffect, useRef } from "react";
import * as Plot from "@observablehq/plot";

const GDPDebt = ({ data, geo, id }) => {
  const plotRef = useRef();

  useEffect(() => {
    if (data && data.length > 0 && plotRef.current) {
      const no_data = geo.features.filter((d) => {
        const element = data.find((e) => d.properties.adm0_a3 == e.Code);
        return element ? false : true;
      });

      const filteredData = data
        .filter((d) => {
          const element = geo.features.find(
            (e) => e.properties.adm0_a3 == d.Code
          );
          return element && d.Value !== "no data" ? true : false;
        })
        .map((d) => {
          const element = geo.features.find(
            (e) => e.properties.adm0_a3 == d.Code
          );
          d.geometry = element.geometry;
          d.type = element.type;
          return d;
        });

      const plot = Plot.plot({
        projection: "equal-earth",
        color: {
          scheme: "BrBG",
          legend: true,
          type: "quantile",
          label: "GDP to Central Government Debt (%)",
          domain: [0, 125],
          reverse: true,
        },
        title: "GDP to Debt Ratio 2023",
        subtitle: "Central Government Debt, World",
        caption: "Source: IMF Global Debt Monitor",
        marks: [
          Plot.graticule(),
          Plot.geo(geo, { strokeOpacity: 0.5, stroke: "grey" }),
          Plot.geo(no_data, { fill: "white", fillOpacity: 0.4 }),
          Plot.geo(
            filteredData,
            Plot.centroid({
              fill: "Value",
              stroke: "black",
              strokeOpacity: 0.5,
              strokeWidth: 0.5,
              tip: true,
            })
          ),
          Plot.sphere(),
        ],
      });

      plotRef.current.appendChild(plot);

      return () => {
        if (plotRef.current) {
          plotRef.current.removeChild(plot);
        }
      };
    }
  }, [data]);

  return <div ref={plotRef} className="GDP-Debt-Map chart" id={id}></div>;
};

export default GDPDebt;
