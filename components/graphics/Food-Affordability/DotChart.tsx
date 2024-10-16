'use client'

import React, { useEffect, useRef } from 'react';
import * as Plot from '@observablehq/plot';
import * as d3 from 'd3';

const DotChart = ({data, fx, title, caption, id}) => {
  const plotRef = useRef();
  
  useEffect(() => {
    if (data && data.length > 0) {
      const colorScale = d3.scaleDiverging().domain([75, 25, 0]).interpolator(d3.interpolateRdBu)
      const plot = Plot.plot({
            label: null,
            height: 800,
            width: 1600,
            y: { type:"log", grid: true },
            title: title,
            subtitle: "Deaths Per 1,000 Live Births, 1990-2020",
            caption: caption,
            marks: [
            Plot.dot(data, {
                x: "Year", 
                fx: fx, 
                y: "Under-five Mortality Rate Per 1000", 
                stroke:"none", 
                fill: (d) => colorScale(d["Under-five Mortality Rate Per 1000"]), 
                r:5,
                tip: {
                    channels: {
                        Country: "Entity",
                        'Sub-Region': "sub-region" ,
                        'Region': "region",
                        'Mortality Rate': 'Under-five Mortality Rate Per 1000'
                    },
                    format: {
                        Country: true,
                        Region: true,
                        'Sub-Region': true,
                        'Mortality Rate': true,
                        x: (d) => `${d.getUTCFullYear()}`,
                        fx: false,
                        y: false
                    }
                },
                }
            ),
            Plot.ruleY([25], {stroke: "grey", strokeWidth: 3}),
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
      <div ref={plotRef} className="dot-chart chart" id={id}></div>
    );
};

export default DotChart;