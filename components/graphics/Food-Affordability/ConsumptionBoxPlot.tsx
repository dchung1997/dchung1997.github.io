'use client'

import React, { useEffect, useRef } from 'react';
import * as Plot from '@observablehq/plot';

const ConsumptionBoxPlot = ({data, midpoints, bounds, width, height, title, x, y, markers}) => {
  const plotRef = useRef();
  
  useEffect(() => {
    if (data && data.length > 0) {
        const plotWidth = width ? width : 640;
        const plotHeight = height ? height : 640;

        const plot = Plot.plot({
          label: null,
          marginLeft: 32,
          height: plotHeight,
          width: plotWidth,
          grid: true,
          title: title,
          color: {legend: true},
          x: { domain: x, type: "log"},
          y: { domain: y, paddingInner: 0.2 },  
          marks: [
            Plot.ruleX(markers, {
              stroke: (d) =>  lineAsiaColorScale(d),
              strokeWidth: 2.5, 
              strokeDasharray:"4 6 4"
            }),
            Plot.boxX(data, {
              x: "avg_welfare", 
              y: "country_code", 
              sort: "avg_welfare", 
              fill: "sub-region",
            }),
            Plot.dot(midpoints, {
              x: { label: 'Median', value: "percentile50" }, 
              y: { label: 'Country Code', value: "country_code"}, 
              fill: "#1F305E", 
              r: 1,
              channels: {
                'Top 10%': 'percentile90',
                'Bottom 10%': 'percentile10',
                'Upper 25%': 'percentile75',
                'Lower 25%': 'percentile25'
              },
              tip: {
                format:{
                   y: (d) => `${d}`,
                  'Top 10%': true,
                  'Upper 25%': true,
                   x: (d) => `${d}`,
                  'Lower 25%': true,          
                  'Bottom 10%': true,
                }
              }
            }),
            Plot.dot(bounds, {
              x: "avg_welfare", 
              y: "country_code", 
              fill: "#1F305E", 
              r: 3,
            }),    
          ]
        })

        plotRef.current.appendChild(plot);
        return () => {
          if (plotRef.current) {
            plotRef.current.removeChild(plot);
          }
        }
      }
    }, [data]);

    return (
      <div ref={plotRef} className="box-plot-chart chart"></div>
    );
};

export default ConsumptionBoxPlot;