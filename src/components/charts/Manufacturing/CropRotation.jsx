import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

function CropRotation() {
  const svgRef = useRef(null);

  function findNthIndexOfValue(array, value, n) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] === value) {
        count++;
        if (count === n) {
          return i;
        }
      }
    }
    return -1; // Not found
  }

  useEffect(() => {
    const svg = d3.select(svgRef.current).attr("shape-rendering", "crispEdges");

    // For example, to access the data:
    const data = [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // Monoculture
      [1, 1, 2, 2, 1, 1, 2, 2, 1, 1], // Two Crop Rotation
      [1, 1, 2, 2, 3, 3, 1, 1, 2, 2], // Three
      [1, 1, 2, 2, 3, 3, 4, 4, 1, 1],
      [1, 1, 2, 2, 3, 3, 4, 4, 5, 5],
    ];

    const yScale = d3.scaleLinear([0, 4], [50, 450]);
    const xScale = d3.scaleLinear([0, 4]).range([0, 200]); // 10%, 25%, 33%, 50%, 75% Percent Loss of Crop.
    const hScale = d3.scaleLinear([0, 4]).range([0, 125]); // 10%, 25%, 33%, 50%, 75% Percent Loss of Crop.
    const colorScale = d3.scaleOrdinal([1, 2, 3, 4, 5]).range(d3.schemeSet3);
    const labels = [0, 10, 30, 50, 100];
    const yLabels = ["Mono", "2 Crop", "3 Crop", "4 Crop", "5 Crop"];
    const cropLabels = ["Corn", "Soybean", "Wheat", "Alfalfa", "Oats"];
    const lossArea = [0, 0.1, 0.3, 0.5, 1];
    const numOnes = [10, 6, 4, 4, 2];

    const g = svg.append("g").attr("transform", `translate(${[150, 50]})`);
    const gText = g.append("g");
    const gCrops = g.append("g");

    gText
      .selectAll("text.xLabel")
      .data(labels)
      .enter()
      .append("text")
      .attr("x", (d, i) => xScale(i))
      .attr("y", 40)
      .text((d, i) => (i > 0 ? d + "% Loss" : "No Loss"))
      .classed("xLabel");

    gText
      .selectAll("text.yLabel")
      .data(yLabels)
      .enter()
      .append("text")
      .attr("x", -40)
      .attr("y", (d, i) => yScale(i) + 30)
      .attr("text-anchor", "middle")
      .text((d, i) => yLabels[i])
      .classed("yLabel");

    gText
      .selectAll("text.cropLabel")
      .data(cropLabels)
      .enter()
      .append("text")
      .attr("x", (d, i) => hScale(i) + 170)
      .attr("y", -10)
      .attr("text-anchor", "start")
      .text((d, i) => cropLabels[i])
      .classed("cropLabel");

    gText
      .selectAll("rect.cropLabel")
      .data(cropLabels)
      .enter()
      .append("rect")
      .attr("x", (d, i) => hScale(i) + 150)
      .attr("y", -22.5)
      .attr("width", 15)
      .attr("height", 15)
      .attr("stroke", "black")
      .attr("fill", (d, i) => colorScale(i + 1))
      .classed("cropLabel");

    for (let x = 0; x < 5; x++) {
      for (let y = 0; y < 5; y++) {
        let loss = Math.floor(lossArea[x] * numOnes[y]);
        const remainder = Math.floor(lossArea[x] * numOnes[y]);

        gCrops
          .selectAll("rect.i")
          .data(data[y])
          .enter()
          .append("rect")
          .attr("x", (d, i) => xScale(x) + Math.floor(i / 2) * 25)
          .attr("y", (d, i) => yScale(y) + (i % 2) * 25)
          .attr("width", 25)
          .attr("height", 25)
          .attr("stroke", "black")
          .attr("fill", (d) => {
            if (d == 1 && loss > 0) {
              loss -= 1;
              return "gainsboro";
            }
            return colorScale(d);
          });

        if (
          remainder >= 0 &&
          lossArea[x] !== 1 &&
          lossArea[x] !== 0.5 &&
          y !== 0
        ) {
          const index = findNthIndexOfValue(data[y], 1, remainder) + 1;
          // Smaller Leftovers.
          gCrops
            .append("rect")
            .attr("x", xScale(x) + Math.floor(index / 2) * 25)
            .attr("y", yScale(y) + (index % 2) * 25)
            .attr("width", Math.sqrt(((lossArea[x] * numOnes[y]) % 1) * 25 * 25))
            .attr("height", Math.sqrt(((lossArea[x] * numOnes[y]) % 1) * 25 * 25))
            .attr("stroke", "black")
            .attr("fill", "gainsboro");
        }
      }
    }
  }, []);

  return <svg ref={svgRef} viewBox="0 0 1200 600"></svg>;
}

export default CropRotation;
