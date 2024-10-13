'use client'

import React, { useEffect, useRef } from 'react';
import * as Plot from '@observablehq/plot';

const LineChart = ({data, width, height, title, x, y}) => {
  const plotRef = useRef();
  
  useEffect(() => {
    if (data && data.length > 0) {
        const plotWidth = width ? width : 640;
        const plotHeight = height ? height : 640;

        const plot = Plot.plot({
            width: plotWidth,
            height: plotHeight,
            title: title,
            marks: [
              Plot.ruleY([0], {stroke: "black", strokeWidth: 2.5}),
              Plot.lineY(data , {x: x, y: y, tip: "x", stroke: "black", strokeWidth: 2.5}),    
            ]
        });

        plotRef.current.appendChild(plot);
        return () => {
          if (plotRef.current) {
            plotRef.current.removeChild(plot);
          }
        }
      }
    }, [data]);

    return (
      <div ref={plotRef} className="area-chart chart"></div>
    );
};

export default LineChart;