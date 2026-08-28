"use client";

import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import * as topojson from "topojson-client";

interface GlobeVisualizationProps {
  data: any[];
}

export default function GlobeVisualization({ data }: GlobeVisualizationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rotationRef = useRef<number>(0);

  useEffect(() => {
    const currentContainer = containerRef.current;
    if (!currentContainer) return;
    
    // Clear previous SVG
    d3.select(currentContainer).selectAll("*").remove();

    const width = currentContainer.clientWidth;
    const height = currentContainer.clientHeight;

    const svg = d3.select(currentContainer)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .style("overflow", "visible")
      .attr("viewBox", `0 0 ${width} ${height}`);

    const projection = d3.geoOrthographic()
      .scale(Math.min(width, height) / 2.2)
      .translate([width / 2, height / 2]);

    const path = d3.geoPath().projection(projection) as any;

    const graticule = d3.geoGraticule();

    // Draw Graticule
    svg.append("path")
      .datum(graticule)
      .attr("class", "graticule")
      .attr("d", path)
      .style("fill", "none")
      .style("stroke", "var(--theme-secondary)")
      .style("stroke-width", "0.5px")
      .style("opacity", 0.15);
    
    const landGroup = svg.append("g");
    const pointsGroup = svg.append("g");

    // Get color from CSS variable
    const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--theme-primary').trim() || '#F27D26';
    const secondaryColor = getComputedStyle(document.documentElement).getPropertyValue('--theme-secondary').trim() || '#00F0FF';

    // Load data
    d3.json("https://unpkg.com/world-atlas@2.0.2/countries-110m.json").then((worldData: any) => {
      const land = topojson.feature(worldData, worldData.objects.countries) as any;
      
      landGroup.selectAll("path")
        .data(land.features)
        .enter()
        .append("path")
        .attr("d", path)
        .style("fill", "rgba(255,255,255,0.02)")
        .style("stroke", "rgba(255,255,255,0.1)")
        .style("stroke-width", "1px");

      // Setup points
      const pointsData = data.filter(d => d.coords).map(d => ({
        ...d,
        coords: d.coords
      }));

      const circles = pointsGroup.selectAll("circle")
        .data(pointsData)
        .enter()
        .append("circle")
        .attr("r", 4)
        .style("fill", d => d.temperature > 30 ? primaryColor : secondaryColor)
        .style("opacity", 0.8)
        .style("box-shadow", "0 0 10px rgba(255,255,255,0.5)");
        
      const labels = pointsGroup.selectAll("text")
        .data(pointsData)
        .enter()
        .append("text")
        .text(d => d.location.split(",")[0])
        .attr("font-size", "10px")
        .attr("font-family", "monospace")
        .style("fill", "rgba(255,255,255,0.7)")
        .attr("dx", 8)
        .attr("dy", 3);

      let timer = d3.timer(() => {
        rotationRef.current += 0.3;
        projection.rotate([rotationRef.current, -10]);
        
        svg.selectAll("path").attr("d", path);
        
        circles.attr("cx", (d: any) => {
          const p = projection(d.coords);
          return p ? p[0] : 0;
        }).attr("cy", (d: any) => {
          const p = projection(d.coords);
          return p ? p[1] : 0;
        }).style("display", (d: any) => {
          // Hide if on the back of the globe
          const geoCircle = d3.geoCircle().center(projection.invert ? projection.invert([width/2, height/2]) || [0,0] : [0,0]).radius(90);
          return d3.geoDistance(d.coords, projection.invert ? projection.invert([width/2, height/2]) || [0,0] : [0,0]) > Math.PI / 2 ? "none" : "block";
        });

        labels.attr("x", (d: any) => {
          const p = projection(d.coords);
          return p ? p[0] : 0;
        }).attr("y", (d: any) => {
          const p = projection(d.coords);
          return p ? p[1] : 0;
        }).style("display", (d: any) => {
          return d3.geoDistance(d.coords, projection.invert ? projection.invert([width/2, height/2]) || [0,0] : [0,0]) > Math.PI / 2 ? "none" : "block";
        });
      });
      
      // Store timer so it can be stopped on unmount/re-render
      (currentContainer as any).__d3_timer = timer;
    });

    return () => {
      if ((currentContainer as any).__d3_timer) {
        (currentContainer as any).__d3_timer.stop();
      }
      d3.select(currentContainer).selectAll("*").remove();
    }
  }, [data]);

  return <div ref={containerRef} className="w-full h-full min-h-[400px] relative z-10" />;
}
