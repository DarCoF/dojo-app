"use client";

import React, { useRef, useEffect, useState } from 'react';
import ForceGraph3D from '3d-force-graph';

const ThreeScene = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [isClient, setIsClient] = useState(false); // State to track when it's client-side

  // Highlight-related state
  const highlightNodes = new Set();
  const highlightLinks = new Set();
  let hoverNode: any = null;

  // Function to update the highlight effect
  const updateHighlight = (Graph: any) => {
    Graph
      .nodeColor(Graph.nodeColor())  // Trigger re-render
      .linkWidth(Graph.linkWidth())
      .linkDirectionalParticles(Graph.linkDirectionalParticles());
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && mountRef.current) {
      const elem = mountRef.current;

      // Fetch the graph data manually
      fetch('/datasets/generated_tree_graph.json')
        .then((res) => res.json())
        .then((gData) => {
          // Cross-link node objects
          gData.links.forEach((link: any) => {
            const a = gData.nodes.find((n: any) => n.id === link.source);
            const b = gData.nodes.find((n: any) => n.id === link.target);
            
            // Initialize neighbors and links if they are undefined
            if (!a.neighbors) a.neighbors = [];
            if (!b.neighbors) b.neighbors = [];
            if (!a.links) a.links = [];
            if (!b.links) b.links = [];

            a.neighbors.push(b);
            b.neighbors.push(a);

            a.links.push(link);
            b.links.push(link);
          });

          const Graph = ForceGraph3D({ controlType: 'trackball' })(elem)
            .graphData(gData)
            .nodeLabel('id')
            .nodeAutoColorBy('group')
            .nodeColor((node: any) => highlightNodes.has(node) ? (node === hoverNode ? 'rgb(255,0,0,1)' : 'rgba(255,160,0,0.8)') : 'rgba(0,255,255,0.6)')
            .linkWidth((link: any) => highlightLinks.has(link) ? 4 : 1)
            .linkDirectionalParticles((link: any) => highlightLinks.has(link) ? 4 : 0)
            .linkDirectionalParticleWidth(4)
            .onNodeClick((node: any) => {
              const distance = 40;
              const distRatio = 1 + distance / Math.hypot(node.x ?? 0, node.y ?? 0, node.z ?? 0);

              const newPos = node.x || node.y || node.z
                ? { x: (node.x ?? 0) * distRatio, y: (node.y ?? 0) * distRatio, z: (node.z ?? 0) * distRatio }
                : { x: 0, y: 0, z: distance };

              Graph.cameraPosition(
                newPos,  // new position
                node,    // lookAt ({ x, y, z })
                1000     // ms transition duration
              );

              // Fit to canvas when engine stops
              Graph.onEngineStop(() => Graph.zoomToFit(400));
            })
            .onNodeHover((node: any) => {
              // If no state change, return
              if ((!node && !highlightNodes.size) || (node && hoverNode === node)) return;

              highlightNodes.clear();
              highlightLinks.clear();

              if (node) {
                highlightNodes.add(node);

                // Ensure neighbors and links are added to the highlights when hovering a node
                if (node.neighbors) {
                  node.neighbors.forEach((neighbor: any) => highlightNodes.add(neighbor));
                }
                if (node.links) {
                  node.links.forEach((link: any) => highlightLinks.add(link));
                }
              }

              hoverNode = node || null;
              updateHighlight(Graph);
            })
            .onLinkHover((link: any) => {
              highlightNodes.clear();
              highlightLinks.clear();

              if (link) {
                highlightLinks.add(link);
                highlightNodes.add(link.source);
                highlightNodes.add(link.target);
              }

              updateHighlight(Graph);
            });
        });
    }

    return () => {
      if (mountRef.current) {
        mountRef.current.innerHTML = ''; // Clean up the graph on unmount
      }
    };
  }, [isClient]);

  return <div ref={mountRef} style={{ width: '100%', height: '100%' }} />;
};

export default ThreeScene;
