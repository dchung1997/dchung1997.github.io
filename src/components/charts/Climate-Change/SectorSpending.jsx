import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import * as Plot from '@observablehq/plot'

const SectorSpending = ({ data }) => {
  const plotRef = useRef();

  useEffect(() => {
    if (data && plotRef.current && data.length > 0) {
      const filteredData = data.filter((d) => d.Spending !== undefined && d.Spending !== null).map((d) => {
        d.Sector = String(d.Sector).charAt(0).toUpperCase() + String(d.Sector).slice(1)
        return d
      });

      const order = d3.groupSort(
        filteredData,
        (g) => d3.max(g, (d) => d['Region']),
        (d) => d['Code']
      )

      const greaterThan5 = filteredData.filter((d) => {
        if (d.Sector == 'Education') {
          const element = filteredData.find((e) => e.Sector != d.Sector && e.Code == d.Code)
          return element && d.Spending / element.Spending >= 3;
        }
      })

      const plot = Plot.plot({
        x: { label: 'Percent of Annual Spending (%)' },
        fy: { label: null, domain: order },
        y: { label: null, axis: null },
        marginLeft: 30,
        height: 640,
        caption:
          'Source: Government Spending Watch',
        color: { scheme: 'GnBu', legend: true },
        marks: [
          Plot.ruleX([10], {
            strokeDasharray: '4,4',
            stroke: 'green',
          }),
          Plot.axisFx({fontSize: 14 }),
          Plot.barX(filteredData, {
            x: 'Spending',
            y: 'Sector',
            fy: 'Code',
            fx: 'Region',
            fill: 'Sector',
            tip: {
              channels: {
                Sector: 'Sector',
                Region: 'intermediate-region',
                Country: 'Country',
              },
              format: {
                Country: true,
                Region: true,
                Sector: true,
                x: true,
                y: false,
                fy: false,
                fill: false,
              },
            },
          }),
          Plot.dot(greaterThan5, {
            x: 'Spending',
            y: 'Sector',
            fy: 'Code',
            fx: 'Region',
            fill: 'Sector',
            dx: 5,
          }),
          Plot.ruleX([0]),
        ],
      })

      plotRef.current.appendChild(plot)

      return () => {
        if (plotRef.current) {
          plotRef.current?.removeChild(plot)
        }
      }
    }
  }, [data])

  return <div ref={plotRef} className="sector-spending chart"></div>
}

export default SectorSpending
