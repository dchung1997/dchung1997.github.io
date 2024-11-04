import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import * as Plot from '@observablehq/plot'

const PlannedSpendingGroupedBarChart = ({ data }) => {
  const plotRef = useRef();

  useEffect(() => {
    if (data && plotRef.current && data.length > 0) {
      const filteredData = data.filter((d) => d.Value !== undefined && d.Value !== null).map((d) => {
        d.Sector = String(d.Sector).charAt(0).toUpperCase() + String(d.Sector).slice(1)
        return d
      });

      const order = d3.groupSort(
        filteredData,
        (g) => d3.max(g, (d) => d['intermediate-region']),
        (d) => d['name']
      )

      const greaterThan5 = filteredData.filter((d) => {
        if (d.Sector == 'Defence') {
          const element = filteredData.find((e) => e.Sector != d.Sector && e.name == d.name)
          return element && d.Value - element.Value >= 5
        }
      })

      const plot = Plot.plot({
        x: { label: 'Percent of Annual Spending (%)' },
        fy: { label: null, domain: order },
        y: { label: null, axis: null },
        marginLeft: 120,
        height: 900,
        title: 'Planned Total Percent Spending of Countries',
        subtitle: 'Sub-Saharan Africa Agriculture vs Defense, 2022',
        caption:
          'Source: Government Spending Watch, Note: Nigeria, Mozambique, and Dijbouti did not have data for agriculture spending. Chad, Djibouti, and Sao Tome did not have data on defense spending.',
        color: { scheme: 'Set2', legend: true },
        marks: [
          Plot.ruleX([10], {
            strokeDasharray: '4,4',
            stroke: 'green',
          }),
          Plot.ruleX([5], {
            strokeDasharray: '4,4',
            stroke: '#8B4000',
          }),

          Plot.barX(filteredData, {
            x: 'Value',
            y: 'Sector',
            fy: 'name',
            fill: 'Sector',
            tip: {
              channels: {
                Sector: 'Sector',
                Region: 'intermediate-region',
                Country: 'name',
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
            x: 'Value',
            y: 'Sector',
            fy: 'name',
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

  return <div ref={plotRef} className="diverging-bar-chart chart"></div>
}

export default PlannedSpendingGroupedBarChart
