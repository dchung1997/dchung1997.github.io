import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import * as Plot from '@observablehq/plot'

const ConsumptionBoxPlot = ({
  data,
  midpoints,
  bounds,
  markers,
  width,
  height,
  title,
  x,
  y,
  group,
}) => {
  const plotRef = useRef();

  useEffect(() => {
    if (data && plotRef.current && data.length > 0) {
      const plotWidth = width ? width : 640
      const plotHeight = height ? height : 640
      const costs = markers.map((d) => {
        return d.cost
      })

      const plot = Plot.plot({
        label: null,
        marginLeft: 75,
        height: plotHeight,
        width: plotWidth,
        grid: true,
        title: title,
        style: { fontSize: '14px' },
        color: {
          legend: true,
        },
        x: { domain: x, type: 'log' },
        y: {
          domain: y,
          paddingInner: 0.2,
          insetTop: 30,
        },
        marks: [
          Plot.axisX({
            tickFormat: (d, i) => (d >= 1 ? d : d.toFixed(1)),
          }),
          Plot.ruleX(costs, {
            stroke: (d, i) => markers[i].color,
            strokeWidth: 2.5,
            strokeDasharray: '4 6 4',
          }),
          Plot.boxX(data, {
            x: 'avg_welfare',
            y: 'country_code',
            sort: 'avg_welfare',
            fill: group,
          }),
          Plot.dot(midpoints, {
            x: { label: 'Median', value: 'percentile50' },
            y: { label: 'Country Code', value: 'country_code' },
            fill: '#1F305E',
            r: 1,
            channels: {
              'Top 10%': 'percentile90',
              'Bottom 10%': 'percentile10',
              Median: 'percentile50',
              'Upper 25%': 'percentile75',
              'Lower 25%': 'percentile25',
              Country: 'name',
              Year: (d) => `${d.year.toString().replace(/,/g, "")}`,
            },
            tip: {
              format: {
                Country: true,
                Year: true,
                'Top 10%': true,
                'Upper 25%': true,
                Median: true,
                'Lower 25%': true,
                'Bottom 10%': true,
                x: false,
                y: false,
              },
            },
          }),
          Plot.dot(bounds, {
            x: 'avg_welfare',
            y: 'country_code',
            fill: '#1F305E',
            r: 5,
          }),
        ],
      })

      plotRef.current.appendChild(plot)

      // Hack to put swatches at bottom of chart.
      const swatches = d3.select(plot).select('div');
      swatches.raise() // Places swatch below the plot
      swatches.classed("centered-swatches", true);
      swatches.classed("pt-4", true);

      return () => {
        if (plotRef.current) {
          plotRef.current.removeChild(plot)
        }
      }
    }
  }, [data, midpoints, bounds, markers, x, y, width, height, title])

  return <div ref={plotRef} className="box-plot-chart chart w-auto"></div>
}

export default ConsumptionBoxPlot
