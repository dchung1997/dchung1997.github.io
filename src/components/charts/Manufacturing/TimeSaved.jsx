import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import * as Plot from "@observablehq/plot";

const TimeSaved = () => {
  const plotRef = useRef();

  useEffect(() => {
    if (plotRef.current) {
      const datum = [
        {
          area: "Limited Access to Clean Cooking",
          value: 5,
        },
        {
          area: "Access to Clean Cooking",
          value: 1,
        },
      ];

      const plot = Plot.plot({
        x: { label: null, type: "band" },
        fx: { label: null },
        y: {
          tickFormat: "s",
          grid: true,
          label: "Hours Spent",
          domain: [0,8]
        },
        color: { scheme: "RdYlGn", legend: true, type: "ordinal",  reverse: true},
        title: "Time Spent on Cooking Related Tasks, Africa",
        caption:
          "Source: A Vision for Clean Cooking Access for All, IEA",
        marks: [
          Plot.barY(datum, {
            x: "area",
            y: "value",
            fill: "area",
            insetLeft: 60,
            insetRight: 60,
        }),
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

export default TimeSaved;
