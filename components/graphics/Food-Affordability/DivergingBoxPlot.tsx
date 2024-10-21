'use client'

import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import * as Plot from '@observablehq/plot'

const DivergingBoxPlot = ({ data, annualDiff }) => {
  const plotRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (data && plotRef.current && data.length > 0) {
      const order = d3
        .groupSort(
          data,
          (g) => d3.max(g, (d) => d['intermediate-region']),
          (d) => d['country_code']
        )
        .reverse()

      const medians = data.filter((d) => {
        if (d['percentile'] == 50) {
          d.Median = d.avg_welfare
          d.Country_Code = d.country_code
          return d
        }
      })

      const beforeEnd = data
        .filter((d) => d.percentile == 90 && d.avg_welfare < 0)
        .map((d) => {
          d.year = '' + d.year
          return d
        })

      const afterEnd = data
        .filter((d) => d.percentile == 90 && d.avg_welfare > 0)
        .map((d) => {
          d.year = '' + d.year
          return d
        })

      const after = data.filter((d) => d.avg_welfare > 0)
      const before = data.filter((d) => d.avg_welfare < 0)

      const plot = Plot.plot({
        label: null,
        marginLeft: 32,
        height: 1100,
        width: 800,
        grid: true,
        title: 'African Countries Daily Income or Consumption (PPP)',
        subtitle: 'Median Daily Income Difference Between 2000-2020, 5-10+ Years',
        caption:
          'Source: World Bank, Poverty and Inequality Platform, Survey Years Percentiles 2017 PPP Values',
        x: { domain: [-50, 50], type: 'sqrt' },
        y: { domain: order, paddingInner: 0.3 },
        color: {
          legend: true,
        },
        insetTop: 25,
        marks: [
          Plot.axisX({
            tickFormat: (d, i) => (d < 0 ? -1 * d : d),
          }),
          Plot.text(['2000-2010'], {
            frameAnchor: 'top-left',
            dx: 5,
            fontWeight: 'bold',
            fontSize: 24,
          }),
          Plot.text(['2010-2020'], {
            frameAnchor: 'top-right',
            dx: -5,
            fontWeight: 'bold',
            fontSize: 24,
          }),
          Plot.text(['Average Annual Change of Median'], {
            frameAnchor: 'top',
            dy: 20,
            fontWeight: 'bold',
            fontSize: 12,
          }),
          Plot.dot(medians, {
            x: 'Median',
            y: 'Country_Code',
            sort: 'Median',
            r: 5,
            tip: {
              channels: {
                "Country Code": 'Country_Code'
              },
              format: {
                "Country Code": true,
                x: (d) => (d < 0 ? `${d.toFixed(2) * -1}` : `${d.toFixed(2)}`),
                y: false,
              },
            },
          }),
          Plot.boxX(after, {
            x: 'avg_welfare',
            y: 'country_code',
            sort: 'avg_welfare',
            fill: 'intermediate-region',
          }),
          Plot.boxX(before, {
            x: 'avg_welfare',
            y: 'country_code',
            sort: 'avg_welfare',
            fill: 'intermediate-region',
          }),
          Plot.text(afterEnd, {
            x: 'avg_welfare',
            y: 'country_code',
            text: 'year',
            dx: 17.5,
            fontWeight: 'bold',
          }),
          Plot.text(beforeEnd, {
            x: 'avg_welfare',
            y: 'country_code',
            text: 'year',
            dx: -17.5,
            fontWeight: 'bold',
          }),
          Plot.text(annualDiff, {
            x: 0,
            y: 'country_code',
            text: 'annual_change',
            textAnchor: 'middle',
            fontWeight: 'bold',
            fill: (d) => {
              if (d.annual_change > 0 && d.annual_change.toFixed(1) == 0) {
                return 'orange'
              }
              return d.annual_change < 0 ? 'red' : 'green'
            },
          }),
        ],
      })

      plotRef.current.appendChild(plot)

      return () => {
        if (plotRef.current) {
          plotRef.current?.removeChild(plot)
        }
      }
    }
  }, [data, annualDiff])

  return <div ref={plotRef} className="diverging-box-plot-chart chart"></div>
}

export default DivergingBoxPlot
