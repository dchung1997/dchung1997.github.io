import React, { useEffect, useRef } from "react";
import * as Plot from "@observablehq/plot";
import * as d3 from "d3";

const TotalAgricultureSpending = ({ data, geo, id }) => {
  const plotRef = useRef();
  const plotMiddleRef = useRef();
  const plotBottomRef = useRef();

  useEffect(() => {
    if (
      data &&
      data.length > 0 &&
      plotRef.current &&
      plotMiddleRef.current &&
      plotBottomRef.current
    ) {
      const no_data = geo.features.filter((d) => {
        const element = data.find((e) => d.properties.sov_a3 == e.Code);
        return element ? false : true;
      });

      const cleanedData = data
        .filter((d) => {
          const element = geo.features.find(
            (e) => e.properties.sov_a3 == d.Code
          );
          return element ? true : false;
        })
        .map((d) => {
          const element = geo.features.find(
            (e) => e.properties.sov_a3 == d.Code
          );
          d.geometry = element.geometry;
          d.type = element.type;
          return d;
        });

      const firstThree = cleanedData.filter(
        (d) => d.Year % 4 == 0 && d.Year <= 1992
      );
      const middleThree = cleanedData.filter(
        (d) => d.Year % 4 == 0 && d.Year > 1992 && d.Year <= 2008
      );
      const lastThree = cleanedData.filter(
        (d) =>
          (d.Year % 4 == 0 && d.Year > 2008 && d.Year <= 2020) || d.Year == 2022
      );

      const plot = Plot.plot({
        marginLeft: 0,
        marginRight: 0,
        title: "Total Agricultural Spending by Governments",
        subtitle: "Africa, 1980 to 2022, 4 Year Period",
        fx: { label: null },
        projection: {
          type: "mercator",
          domain: d3.geoCircle().center([25, 0]).radius(40)(),
        },
        color: {
          legend: true,
          scheme: "RdYlGn",
          label: "Agricultural Expenditures (Total Budget %)",
          type: "quantize",
          domain: [0, 12],
        },
        height: 200,
        marks: [
          Plot.axisFx({
            fontSize: 14,
            tickFormat: (d) => d.toString().replace(",", ""),
            dx: 5,
          }),
          Plot.geo(geo, {
            strokeOpacity: 0.5,
            stroke: "grey",
            dx:15
          }),
          Plot.geo(no_data, { fill: "white", fillOpacity: 0.4, dx:15}),
          Plot.geo(
            firstThree,
            Plot.centroid({
              fill: "Value",
              stroke: "black",
              strokeOpacity: 0.5,
              strokeWidth: 0.5,
              fx: "Year",
              tip: {
                channels: {
                  "Expenditures (%)": "Value",
                  "Year": "Year",
                },
                format: {
                  "Expenditures (%)": true,
                  "Year": true,
                  fx: false,
                  fill:false
                },
              },
              dx:15

            })
          ),
        ],
      });

      const plotMiddle = Plot.plot({
        marginLeft: 0,
        marginRight: 0,
        fx: { label: null },
        projection: {
          type: "mercator",
          domain: d3.geoCircle().center([25, 0]).radius(40)(),
        },
        color: {
          scheme: "RdYlGn",
          label: "Total Grain Production Per Capita (kg)",
          type: "quantize",
          domain: [0, 12],
        },
        height: 200,
        marks: [
          Plot.axisFx({
            fontSize: 14,
            tickFormat: (d) => d.toString().replace(",", ""),
            dx: 5,
          }),
          Plot.geo(geo, {
            strokeOpacity: 0.5,
            stroke: "grey",
            dx:15
          }),
          Plot.geo(no_data, { fill: "white", fillOpacity: 0.4, dx:15 }),
          Plot.geo(
            middleThree,
            Plot.centroid({
              fill: "Value",
              stroke: "black",
              strokeOpacity: 0.5,
              strokeWidth: 0.5,
              fx: "Year",
              tip: true,
              dx:15
            })
          ),
        ],
      });

      const plotBottom = Plot.plot({
        marginLeft: 0,
        marginRight: 0,
        caption: "Source: ReSAKSS: Tracking Indicators, Level-3 Government Agricultural Spending (% of Total Expenditures).",
        fx: { label: null },
        projection: {
          type: "mercator",
          domain: d3.geoCircle().center([25, 0]).radius(40)(),
        },
        color: {
          scheme: "RdYlGn",
          label: "Total Grain Production Per Capita (kg)",
          type: "quantize",
          domain: [0, 12],
        },
        height: 200,
        marks: [
          Plot.axisFx({
            fontSize: 14,
            tickFormat: (d) => d.toString().replace(",", ""),
            dx: 5,
          }),
          Plot.geo(geo, {
            strokeOpacity: 0.5,
            stroke: "grey",
            dx:15
          }),
          Plot.geo(no_data, { fill: "white", fillOpacity: 0.4, dx:15 }),
          Plot.geo(
            lastThree,
            Plot.centroid({
              fill: "Value",
              stroke: "black",
              strokeOpacity: 0.5,
              strokeWidth: 0.5,
              fx: "Year",
              tip: true,
              dx:15
            })
          ),
        ],
      });

      plotRef.current.appendChild(plot);
      plotMiddleRef.current.appendChild(plotMiddle);
      plotBottomRef.current.appendChild(plotBottom);

      return () => {
        if (plotRef.current && plotMiddleRef.current && plotBottomRef.current) {
          plotRef.current.removeChild(plot);
          plotMiddleRef.current.removeChild(plotMiddle);
          plotBottomRef.current.removeChild(plotBottom);
        }
      };
    }
  }, [data]);

  return (
    <>
      <div
        ref={plotRef}
        className="annual-production-linechart chart-small chart"
        id={id + "-top"}
      ></div>
      <div
        ref={plotMiddleRef}
        className="annual-production-linechart chart-small chart"
        id={id + "-middle"}
      ></div>
      <div
        ref={plotBottomRef}
        className="annual-production-linechart chart-small chart"
        id={id + "-bottom"}
      ></div>
    </>
  );
};

export default TotalAgricultureSpending;
