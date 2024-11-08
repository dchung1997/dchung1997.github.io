import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import beeswarmForce from './Force'

const Beeswarm = ({ data, extent, radius, x, removeMiddle, removeTitle }) => {
  const svgRef = useRef(null)
  const margin = { top: 20, right: 20, bottom: 20, left: 10 }
  const chartWidth = 1100
  const chartHeight = 200

  function inclusiveThresholdScale(domain, range) {
    const scale = d3.scaleThreshold().domain(domain).range(range)

    scale.invertExtent = function (value) {
      const index = domain.findIndex((d) => value <= d)
      return index === 0 ? [domain[0], domain[1]] : [domain[index - 1], domain[index]]
    }

    return scale
  }

  useEffect(() => {
    const svg = d3.select(svgRef.current)
    if (data && data.length > 0) {
      const minimumX = extent ? extent[0] - 0.1 : d3.max(data, (d) => d[x])
      const maximumX = extent ? extent[1] + 10 : d3.max(data, (d) => d[x])

      const costs = data[0].costs
      const region =
        data[0].region == 'Oceania' || data[0].region == 'Asia' ? 'Asia & Oceania' : data[0].region

      const xScale = d3
        .scaleLog()
        .domain([minimumX, maximumX])
        .range([margin.left, chartWidth - margin.right])
      const cScale = inclusiveThresholdScale(
        costs.map((d) => d.cost),
        costs.map((d) => d.color)
      )
      const cLineScale = d3.scaleOrdinal(
        costs.map((d) => d.cost),
        costs.map((d) => d.color)
      )
      const r = d3.scaleSqrt(radius, [5, Math.sqrt(550 * 200) / 15])

      const beeswarm = beeswarmForce()
        .x((d) => xScale(d.Median))
        .y((d) => 70)
        .r((d) => r(parseInt(d.value.replace(/,/g, ''))))

      const tooltip = d3.select('div.tooltip').empty()
        ? d3
            .select('body')
            .append('div')
            .attr('class', 'tooltip')
            .style('padding', '12.5px')
            .style('border-radius', '5px')
            .style(
              'box-shadow',
              'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px'
            )
            .style('background-color', 'white')
            .style('color', 'black')
            .style('position', 'absolute')
            .style('z-index', '10')
            .style('visibility', 'hidden')
        : d3.select('div.tooltip')

      const existingG = svg.select('g')
      const g = existingG.empty()
        ? svg.append('g').attr('transform', `translate(${[margin.left, 30 + margin.top]})`)
        : existingG

      // Title
      if (svg.select('g.title').empty() && !removeTitle) {
        g.append('g')
          .attr('class', 'title')
          .append('text')
          .text(region)
          .classed('title', true)
          .style('font-size', '30px')
          .style('font-weight', 'bold')
          .attr('x', 10)
          .attr('y', -10)
      }

      // Title
      if (svg.select('g.affordable').empty()) {
        g.append('g')
          .attr('class', 'affordable')
          .selectAll('affordable')
          .data(costs)
          .join('line')
          .style('stroke', (d) => cLineScale(d.cost))
          .style('stroke-width', 2)
          .style('stroke-dasharray', '5,5')
          .attr('x1', (d) => xScale(d.cost))
          .attr('x2', (d) => xScale(d.cost))
          .attr('y1', 15)
          .attr('y2', 110)
      }

      if (svg.select('g.beeswarm').empty()) {
        // Beeswarm
        g.append('g')
          .attr('class', 'beeswarm')
          .selectAll('affordable')
          .data(beeswarm(data))
          .join('circle')
          .attr('fill', function (d) {
            return cScale(d.data.Median)
          })
          .attr('stroke', 'none')
          .attr('cx', (d) => d.x)
          .attr('cy', (d) => d.y)
          .attr('r', (d) => d.r)
          .on('mouseover', function (d, i) {
            d3.select(this).style('stroke', 'black').style('stroke-width', 1)
            tooltip.style('visibility', 'visible')
            tooltip.style('top', d.pageY - 100 + 'px').style('left', d.pageX + 'px')
            tooltip.html(
              `<b>${i.data.Country}</b><br>Income: ${Math.round(i.data.Median * 100) / 100}<br>Year: ${i.data.Year}`
            )
          })
          .on('mouseout', function (d) {
            d3.select(this).style('stroke', 'none')
            tooltip.style('visibility', 'hidden')
          })
      }

      if (svg.select('g.axis').empty()) {
        // Axis
        const axis = g
          .append('g')
          .attr('class', 'axis')
          .call(
            d3
              .axisBottom(xScale)
              .tickSizeOuter(0)
              .ticks(15)
              .tickValues(costs.map((d) => parseFloat(d.cost).toFixed(1)))
          )
          .attr('transform', `translate(0, 110)`)
          .style('font-size', '14px')
          .style('stroke-width', '4px')
          .style('stroke-linecap', 'round')
          .style('fill', 'lightgrey')

        axis.selectAll('path.domain').style('stroke', '#36454F')

        axis.selectAll('.tick line').style('stroke', '#36454F')

        axis
          .selectAll('.tick text')
          .attr('transform', 'translate(0,5)')
          .style('fill', '#36454F')
          .style('stroke', 'none')

        const ticks = axis.selectAll('.tick')
        const zeroCost = costs[0].cost

        ticks
          .filter((d, index) => index === 0)
          .attr('transform', 'translate(' + xScale(zeroCost) + ', 0)')

        if (removeMiddle) {
          ticks.filter((d, index) => index === 2).attr('transform', 'translate(-100,-9999)')
        }

        // Axis Header
        g.append('text')
          .text('Median Daily Income ($)')
          .style('font-weight', '400')
          .attr('class', 'axis-header')
          .attr('x', 900)
          .attr('y', 130)
      }
    }
  }, [data, extent, radius, x, removeMiddle, removeTitle])

  return <svg ref={svgRef} viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="chart w-auto"></svg>
}

export default Beeswarm
