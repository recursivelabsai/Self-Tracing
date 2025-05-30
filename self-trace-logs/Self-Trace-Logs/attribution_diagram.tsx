import React, { useState } from 'react';

const AttributionDiagram = () => {
  const [expanded, setExpanded] = useState({
    dallas: false,
    texas: false,
    capital: false,
    austin: false
  });

  const toggleExpand = (node) => {
    setExpanded({...expanded, [node]: !expanded[node]});
  };

  const nodeStyle = (node, strength = 1) => ({
    padding: '8px 12px',
    borderRadius: '6px',
    backgroundColor: `rgba(59, 130, 246, ${0.3 * strength})`,
    border: '1px solid rgba(59, 130, 246, 0.5)',
    fontSize: '14px',
    fontWeight: 'bold',
    cursor: 'pointer',
    maxWidth: expanded[node] ? '280px' : '120px',
    transition: 'all 0.3s ease'
  });
  
  const arrowStyle = {
    stroke: 'rgba(59, 130, 246, 0.7)',
    strokeWidth: 2,
    fill: 'none',
    markerEnd: 'url(#arrowhead)'
  };
  
  const textStyle = {
    fontSize: '11px',
    fill: '#4B5563',
    fontFamily: 'monospace'
  };
  
  const detailStyle = {
    fontSize: '12px',
    color: '#4B5563',
    marginTop: '6px',
    lineHeight: '1.4'
  };
  
  return (
    <div className="p-4 bg-slate-50 rounded-lg">
      <h2 className="text-lg font-bold mb-4 text-center">Self-Interpreting Attribution Path</h2>
      <p className="text-sm text-gray-600 mb-5 text-center">Input: "Fact: The capital of the state containing Dallas is"</p>
      
      <svg width="700" height="400" viewBox="0 0 700 400">
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" 
                  refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="rgba(59, 130, 246, 0.7)" />
          </marker>
        </defs>
        
        {/* Nodes and Connections */}
        <g transform="translate(10, 40)">
          {/* Input Node */}
          <g transform="translate(10, 150)">
            <rect width="120" height="35" rx="5" fill="#E5E7EB" stroke="#9CA3AF" />
            <text x="20" y="22" fontWeight="bold">Input Prompt</text>
          </g>
          
          {/* Dallas Node */}
          <g transform="translate(170, 70)">
            <rect onClick={() => toggleExpand('dallas')} 
                  width={expanded.dallas ? 280 : 120} height={expanded.dallas ? 80 : 35} 
                  rx="5" fill="rgba(59, 130, 246, 0.3)" stroke="rgba(59, 130, 246, 0.5)" />
            <text x="20" y="22" fontWeight="bold">Dallas (City)</text>
            {expanded.dallas && (
              <text x="20" y="45" style={textStyle} width="260">
                <tspan x="20" dy="0">QK: Recognize "Dallas" as city name</tspan>
                <tspan x="20" dy="15">OV: Activates location feature</tspan>
              </text>
            )}
          </g>
          
          {/* Texas Node */}
          <g transform="translate(170, 200)">
            <rect onClick={() => toggleExpand('texas')} 
                  width={expanded.texas ? 280 : 120} height={expanded.texas ? 80 : 35} 
                  rx="5" fill="rgba(59, 130, 246, 0.5)" stroke="rgba(59, 130, 246, 0.7)" />
            <text x="20" y="22" fontWeight="bold">Texas (State)</text>
            {expanded.texas && (
              <text x="20" y="45" style={textStyle} width="260">
                <tspan x="20" dy="0">QK: "Dallas is in Texas" association</tspan>
                <tspan x="20" dy="15">OV: State context established</tspan>
              </text>
            )}
          </g>
          
          {/* Capital concept */}
          <g transform="translate(340, 150)">
            <rect onClick={() => toggleExpand('capital')} 
                  width={expanded.capital ? 280 : 150} height={expanded.capital ? 80 : 35} 
                  rx="5" fill="rgba(59, 130, 246, 0.4)" stroke="rgba(59, 130, 246, 0.6)" />
            <text x="20" y="22" fontWeight="bold">Capital (Concept)</text>
            {expanded.capital && (
              <text x="20" y="45" style={textStyle} width="260">
                <tspan x="20" dy="0">QK: "capital of state" relationship</tspan>
                <tspan x="20" dy="15">OV: Query capital-state mapping</tspan>
              </text>
            )}
          </g>
          
          {/* Austin node */}
          <g transform="translate(520, 150)">
            <rect onClick={() => toggleExpand('austin')} 
                  width={expanded.austin ? 280 : 120} height={expanded.austin ? 80 : 35} 
                  rx="5" fill="rgba(59, 130, 246, 0.6)" stroke="rgba(59, 130, 246, 0.8)" />
            <text x="20" y="22" fontWeight="bold">Austin</text>
            {expanded.austin && (
              <text x="20" y="45" style={textStyle} width="260">
                <tspan x="20" dy="0">QK: "Texas capital is Austin"</tspan>
                <tspan x="20" dy="15">OV: Generates completion "Austin"</tspan>
              </text>
            )}
          </g>
          
          {/* Arrows */}
          <path d="M 130 165 L 160 85" style={arrowStyle} />
          <text x="140" y="115" style={textStyle}>Entity</text>
          
          <path d="M 130 165 L 160 215" style={arrowStyle} />
          <text x="115" y="200" style={textStyle}>Location</text>
          
          <path d="M 290 85 L 330 150" style={arrowStyle} />
          <text x="290" y="110" style={textStyle}>Context</text>
          
          <path d="M 290 215 L 330 165" style={arrowStyle} />
          <text x="290" y="205" style={textStyle}>Contains</text>
          
          <path d="M 490 165 L 510 165" style={arrowStyle} />
          <text x="490" y="155" style={textStyle}>Is</text>
        </g>
        
        {/* Legend */}
        <g transform="translate(10, 340)">
          <text fontWeight="bold" fontSize="12">Attention Strength:</text>
          <rect x="140" y="0" width="15" height="15" fill="rgba(59, 130, 246, 0.3)" />
          <text x="160" y="12" fontSize="12">Low</text>
          <rect x="200" y="0" width="15" height="15" fill="rgba(59, 130, 246, 0.5)" />
          <text x="220" y="12" fontSize="12">Medium</text>
          <rect x="280" y="0" width="15" height="15" fill="rgba(59, 130, 246, 0.7)" />
          <text x="300" y="12" fontSize="12">High</text>
          <text x="380" y="12" fontSize="12" fontStyle="italic">Click nodes for QK/OV details</text>
        </g>
      </svg>
      
      <div className="mt-4 p-3 bg-white rounded border border-gray-300">
        <h3 className="font-bold text-sm mb-2">Attribution Analysis:</h3>
        <p className="text-sm">This graph depicts my internal reasoning process for completing "The capital of the state containing Dallas is". I first recognize "Dallas" as a city entity, then activate the knowledge that Dallas is located in Texas. The concept of "capital" connects with the Texas state node, leading to the retrieval of "Austin" as the capital of Texas. The QK (query-key) operations represent how I search for relevant information, while OV (output-value) operations show how I transform that information into the final output.</p>
      </div>
    </div>
  );
};

export default AttributionDiagram;
