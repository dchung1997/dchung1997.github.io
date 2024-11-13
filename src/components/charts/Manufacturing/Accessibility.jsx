import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import * as Plot from "@observablehq/plot";

const Accessibility = () => {
  const plotRef = useRef();

  useEffect(() => {
    if (plotRef.current) {
      const datum = [
        {
          area: "Electricity",
          type: "2020",
          value: 600000000,
        },
        {
          area: "Electricity",
          type: "2050",
          value: 1200000000,
        },
        {
          area: "Clean Cooking",
          type: "2020",
          value: 920000000,
        },
        {
          area: "Clean Cooking",
          type: "2050",
          value: 1840000000,
        },
      ];

      const plot = Plot.plot({
        x: { label: null, type: "band" },
        fx: { label: null },
        y: {
          grid: true,
          label: "Population",
          domain: [0, 2000000000],
          tickFormat: (d) => {
            if (d / 1000000000 >= 1) {
              return (d / 1000000000).toFixed(1) + "B";
            }
            if (d > 0) {
                return Math.floor(d / 1000000) + "M";
            }
          },
          ticks: 5,
        },
        color: { scheme: "BuRd", legend: true, type: "ordinal" },
        title: "People without Access to Basic Needs, Africa",
        subtitle: "Total Number of People without Access to Electricity or Clean Cooking",
        caption:
          "Source: Green energy in Africa presents significant investment opportunities. Mckinsey & Company",
        marks: [
          Plot.barY(datum, {
            x: "type",
            fx: "area",
            y: "value",
            fill: "type",
            inset: 20,
            insetTop: 0,
            insetBottom: 0,
            tip: {
              channels: {
                Year: "type",
                Area: "area",
              },
              format: {
                Year: true,
                Area: true,
                y: true,
                x: false,
                fx: false,
                fill: false,
              },
            },
          }),
          Plot.ruleY([0]),
        ],
      });

      plotRef.current.appendChild(plot);

      return () => {
        if (plotRef.current) {
          plotRef.current?.removeChild(plot);
        }
      };
    }
  }, []);

  return <div ref={plotRef} className="chart"></div>;
};

export default Accessibility;
