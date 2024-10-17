'use client'

import React, { useEffect, useRef } from 'react'
import * as Plot from '@observablehq/plot'
import * as d3 from 'd3'
import * as htl from 'htl'

const LineChart = ({ data, extent, width, height, title, subtitle, caption, x, y, id }) => {
  const plotRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (data && extent && plotRef.current && data.length > 0 && extent.length > 0) {
      const plotWidth = width ? width : 640
      const plotHeight = height ? height : 640
      const color = d3.scaleThreshold([-1, 1], ['#C24641', 'gray', '#17B169'])
      const plot = Plot.plot({
        width: plotWidth,
        height: plotHeight,
        title: title,
        subtitle: subtitle,
        caption: caption,
        marks: [
          Plot.ruleY([0], { stroke: 'black', strokeWidth: 1.5 }),
          Plot.line(data, {
            x: x,
            y: y,
            tip: {
              format: {
                x: (d) => `${new Date(d).getUTCFullYear()}`,
              },
            },
            stroke: 'url(#gradient-' + id + ')',
            strokeWidth: 2.5,
          }),
          (_index, { y }) => {
            if (!_index || !y) {
              return null // Return null if _index or y is undefined
            }

            return htl.svg`<defs>
                <linearGradient id="gradient-${id}" gradientUnits="userSpaceOnUse"
                  x1=0 x2=0 y1=${y(extent[0])} y2=${y(extent[1])}>${d3.ticks(0, 1, 10).map((t) => {
                    return htl.svg`<stop
                              offset=${t * 100}%
                              stop-color=${color(extent[0] * (1 - t) + extent[1] * t)} />`
                  })}`
          },
        ],
      })
      plotRef.current.appendChild(plot)

      return () => {
        if (plotRef.current) {
          plotRef.current.removeChild(plot)
        }
      }
    }
  }, [data])

  return <div ref={plotRef} className="line-chart chart"></div>
}

export default LineChart
