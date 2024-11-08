import React, { useEffect, useRef } from "react";
import * as Plot from "@observablehq/plot";
import * as d3 from "d3";

const AnnualExpenditures = ({ data, geo, id }) => {
  const plotRef = useRef();
  const plotRefBottom = useRef();

  function calculate4YearAverages(datum) {
    const groupedData = {};
    const countryCodes = {};

    // Group data by country/region
    datum.forEach((item) => {
      const { Country, Code, Year, Value } = item;
      if (!groupedData[Country]) {
        groupedData[Country] = {};
        countryCodes[Country] = Code;
      }
      groupedData[Country][Year] = Value;
    });

    // Calculate 5-year averages
    const averages = [];
    for (const country in groupedData) {
      const countryData = groupedData[country];
      const countryCode = countryCodes[country];
      const years = [2000, 2004, 2008, 2012, 2016, 2020];
      years.forEach((year) => {
        const values = [];
        for (let i = 0; i < 4; i++) {
          const currentYear = year + i;
          if (countryData[currentYear]) {
            values.push(countryData[currentYear]);
          }
        }

        const average =
          values.reduce((sum, value) => sum + value, 0) / values.length;
        averages.push({
          country,
          Code: countryCode,
          Year: year,
          Value: average,
        });
      });
    }

    return averages;
  }

  useEffect(() => {
    if (data && plotRef.current && data.length > 0) {
      const no_data = geo.features.filter((d) => {
        const element = data.find((e) => d.properties.sov_a3 == e.Code);
        return element ? false : true;
      });

      const firstThree = calculate4YearAverages(data).filter(
        (d) => d.Year % 4 == 0 && d.Year <= 2010 && d.Year >= 2000
      );
      const lastThree = calculate4YearAverages(data).filter(
        (d) => d.Year % 4 == 0 && d.Year > 2010
      );

      const firstData = firstThree
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

      const lastData = lastThree
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

      const plot = Plot.plot({
        marginLeft: 0,
        marginRight: 0,
        fx: { label: null },
        projection: {
          type: "mercator",
          domain: d3.geoCircle().center([0, 0]).radius(40)(),
        },
        color: {
          legend: true,
          scheme: "RdYlGn",
          label: " Agricultural Expenditure (Total Budget %)",
          type: "quantize",
          domain: [0, 12],
        },
        height: 190,
        marks: [
          Plot.axisFx({
            fontSize: 14,
            tickFormat: (d) => d.toString().replace(",", ""),
            dx: 15,
          }),
          Plot.geo(geo, { strokeOpacity: 0.5, stroke: "grey", dx:-15 }),
          Plot.geo(no_data, { fill: "grey", fillOpacity: 0.4, dx:-15}),
          Plot.geo(
            firstData,
            Plot.centroid({
              fill: "Value",
              stroke: "black",
              strokeOpacity: 0.5,
              strokeWidth: 0.5,
              fx: "Year",
              tip: true,
              dx:-15
            })
          ),
          Plot.ruleX([15], { fx: [2004], strokeWidth: 1 }),
          Plot.ruleX([15], { fx: [2008], strokeWidth: 1 }),
          Plot.text(["Marputo Declaration"], {
            fx: [2004],
            x: 15,
            frameAnchor: "top",
            dy: -15,
          }),
          Plot.text(["Great Recession"], {
            fx: [2008],
            x: 15,
            frameAnchor: "top",
            dy: -15,
          }),
        ],
      });

      const plotBottom = Plot.plot({
        marginLeft: 0,
        marginRight: 0,
        caption: "Source: UN FAO, FAOSTAT",
        fx: { label: null },
        projection: {
          type: "mercator",
          domain: d3.geoCircle().center([0, 0]).radius(40)(),
        },
        color: {
          legend: false,
          scheme: "RdYlGn",
          label: "Total Grain Production Per Capita (kg)",
          type: "quantize",
          domain: [0, 12],
        },
        height: 190,
        marks: [
          Plot.axisFx({
            fontSize: 14,
            tickFormat: (d) => d.toString().replace(",", ""),
            dx: 15,
          }),
          Plot.geo(geo, { strokeOpacity: 0.5, stroke: "grey", dx:-15 }),
          Plot.geo(no_data, { fill: "grey", fillOpacity: 0.4, dx:-15 }),
          Plot.geo(
            lastData,
            Plot.centroid({
              fill: "Value",
              stroke: "black",
              strokeOpacity: 0.5,
              strokeWidth: 0.5,
              fx: "Year",
              dx:-15
            })
          ),
          Plot.ruleX([15], { fx: [2020], strokeWidth: 1 }),
          Plot.text(["COVID-19 Pandemic"], {
            fx: [2020],
            x: 15,
            frameAnchor: "top",
            dy: -15,
          }),
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

export default AnnualExpenditures;
