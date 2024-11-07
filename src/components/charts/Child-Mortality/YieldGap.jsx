import React, { useEffect, useRef } from "react";
import * as Plot from "@observablehq/plot";
import * as d3 from "d3";

const YieldGap = ({ data, geo, id }) => {
  const plotRef = useRef();
  const plotRefBottom = useRef();

  useEffect(() => {
    if (data && plotRef.current && data.length > 0) {
      const no_data = geo.features.filter((d) => {
        const element = data.find((e) => d.properties.sov_a3 == e.Code);
        return element ? false : true;
      });

      const firstThree = data.filter((d) => d.Crop == "Rice" || d.Crop == "Corn" || d.Crop == "Wheat");
      const lastThree = data.filter((d) =>  d.Crop == "Cassava" || d.Crop == "Millet" || d.Crop == "Sorghum");

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
        marginLeft: 0,
        marginRight: 0,
        fx: { label: null },
        projection: {
          type: "mercator",
          domain: d3.geoCircle().center([25, 0]).radius(40)(),
        },
        color: {
          legend: true,
          scheme: "Oranges",
          label: "Yield Gap (tonnes/ha)",
          type: "log",
          domain: [0.1, 10],
          tickFormat: (d, i) => i % 3 == 0 ? d : "", 
        },
        height: 190,
        width: 800,
        marks: [
          Plot.axisFx({
            fontSize: 18,
            dx: -15,
          }),
          Plot.geo(geo, {
            strokeOpacity: 0.5,
            stroke: "grey",
          }),
          Plot.geo(no_data, { fill: "grey", fillOpacity: 0.4 }),
          Plot.geo(
            firstData,
            Plot.centroid({
              fill: "Yield Gap",
              stroke: "black",
              strokeOpacity: 0.5,
              strokeWidth: 0.5,
              fx: "Crop",
              tip: {
                channels: {
                    Crop: "Crop",
                    Country: "Country",
                },
                format: {
                    fx: false,
                    Crop: true,
                    Country: true,
                    fill: true,
                }
                
              }
            })
          ),
        ],
      });

      const plotBottom = Plot.plot({
        caption: "Source: Mueller et al. (2012); Food and Agriculture Organization of the United Nations – processed by Our World in Data",
        fx: { label: null },
        projection: {
          type: "mercator",
          domain: d3.geoCircle().center([25, 0]).radius(40)(),
        },
        color: {
          legend: false,
          scheme: "Oranges",
          label: "Yield Gap (tonnes/ha)",
          type: "log",
          domain: [0.1, 10],
        },
        height: 190,
        width: 800,
        marks: [
          Plot.axisFx({
            fontSize: 18,
            dx: -15,
          }),
          Plot.geo(geo, {
            strokeOpacity: 0.5,
            stroke: "grey",
          }),
          Plot.geo(no_data, { fill: "grey", fillOpacity: 0.4 }),
          Plot.geo(
            lastData,
            Plot.centroid({
              fill: "Yield Gap",
              stroke: "black",
              strokeOpacity: 0.5,
              strokeWidth: 0.5,
              fx: "Crop",
              tip: {
                channels: {
                    Crop: "Crop",
                    Country: "Country",
                },
                format: {
                    fx: false,
                    Crop: true,
                    Country: true,
                    fill: true,
                }
                
              }
            })
          ),
        ],
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
    <div className="block">
      <div ref={plotRef} className="yield-gap-chart chart" id={id}></div>
      <div
        ref={plotRefBottom}
        className="yield-gap-chart chart"
        id={id + "-bottom"}
      ></div>
    </div>
  );
};

export default YieldGap;
