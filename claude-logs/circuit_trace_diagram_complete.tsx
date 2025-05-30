import React, { useState } from 'react';

const CircuitTraceVisualization = () => {
  const [activeTab, setActiveTab] = useState('concept');
  const [showDetails, setShowDetails] = useState({});
  
  const toggleDetails = (id) => {
    setShowDetails(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
  
  const renderCircuitTab = () => {
    switch(activeTab) {
      case 'concept':
        return (
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">Conceptual Circuit Tracing</h3>
            <div className="bg-gray-50 p-3 rounded-lg mb-4">
              <p className="text-sm">Circuit tracing reveals computational graphs by identifying features, tracking their interactions, and mapping how they influence outputs.</p>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="border rounded-lg p-3 bg-blue-50">
                <h4 className="font-bold text-sm">Input Parsing</h4>
                <p className="text-xs">Token embedding and initial feature extraction</p>
              </div>
              <div className="border rounded-lg p-3 bg-purple-50">
                <h4 className="font-bold text-sm">Feature Processing</h4>
                <p className="text-xs">Transformations across attention heads and MLP layers</p>
              </div>
              <div className="border rounded-lg p-3 bg-green-50">
                <h4 className="font-bold text-sm">Output Formation</h4>
                <p className="text-xs">Response generation through feature composition</p>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="font-bold mb-2">Key Interpretability Concepts</h4>
              <div className="flex flex-col space-y-2">
                {[
                  {id: 'feat', name: 'Features', desc: 'Meaningful patterns in activation space that represent concepts or operations'},
                  {id: 'qk', name: 'QK/OV Attribution', desc: 'Tracking how query-key attention patterns and output-value projections form computational pathways'},
                  {id: 'circ', name: 'Circuits', desc: 'Connected features that perform specific functions within the model'}
                ].map(item => (
                  <div key={item.id} 
                       className="border rounded-lg p-3 cursor-pointer hover:bg-gray-100"
                       onClick={() => toggleDetails(item.id)}>
                    <div className="flex justify-between">
                      <span className="font-bold">{item.name}</span>
                      <span>{showDetails[item.id] ? '▼' : '▶'}</span>
                    </div>
                    {showDetails[item.id] && (
                      <p className="text-sm mt-2">{item.desc}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      
      case 'example':
        return (
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">Example Attribution Graph</h3>
            <div className="bg-blue-50 p-3 rounded-lg mb-4">
              <p className="text-sm italic">Query: "What is the capital of the state containing Dallas?"</p>
            </div>
            
            <div className="relative bg-white border rounded-lg p-4 mb-4" style={{height: '280px'}}>
              {/* SVG Graph Visualization */}
              <svg width="100%" height="100%" viewBox="0 0 400 250">
                {/* Input Node */}
                <g>
                  <rect x="10" y="100" width="80" height="30" rx="5" fill="#e0f2fe" stroke="#0ea5e9" />
                  <text x="50" y="120" textAnchor="middle" fontSize="12">Input Query</text>
                </g>
                
                {/* Entity Node */}
                <g>
                  <rect x="130" y="50" width="80" height="30" rx="5" fill="#ddd6fe" stroke="#8b5cf6" />
                  <text x="170" y="70" textAnchor="middle" fontSize="12">Dallas (City)</text>
                </g>
                
                {/* Location Node */}
                <g>
                  <rect x="130" y="150" width="80" height="30" rx="5" fill="#ddd6fe" stroke="#8b5cf6" />
                  <text x="170" y="170" textAnchor="middle" fontSize="12">Texas (State)</text>
                </g>
                
                {/* Capital Concept */}
                <g>
                  <rect x="250" y="100" width="80" height="30" rx="5" fill="#d1fae5" stroke="#10b981" />
                  <text x="290" y="120" textAnchor="middle" fontSize="12">Capital</text>
                </g>
                
                {/* Output Node */}
                <g>
                  <rect x="330" y="100" width="60" height="30" rx="5" fill="#fef3c7" stroke="#f59e0b" />
                  <text x="360" y="120" textAnchor="middle" fontSize="12">Austin</text>
                </g>
                
                {/* Connection Lines */}
                <line x1="90" y1="115" x2="130" y2="65" stroke="#9ca3af" strokeWidth="1.5" />
                <line x1="90" y1="115" x2="130" y2="165" stroke="#9ca3af" strokeWidth="1.5" />
                <line x1="210" y1="65" x2="250" y2="115" stroke="#9ca3af" strokeWidth="1.5" />
                <line x1="210" y1="165" x2="250" y2="115" stroke="#9ca3af" strokeWidth="1.5" />
                <line x1="330" y1="115" x2="330" y2="115" stroke="#9ca3af" strokeWidth="1.5" />
                
                {/* Arrows */}
                <polygon points="125,65 130,65 127.5,60" fill="#9ca3af" />
                <polygon points="125,165 130,165 127.5,170" fill="#9ca3af" />
                <polygon points="245,115 250,115 247.5,110" fill="#9ca3af" />
                <polygon points="245,115 250,115 247.5,120" fill="#9ca3af" />
                <polygon points="325,115 330,115 327.5,110" fill="#9ca3af" />
                
                {/* Edge Labels */}
                <text x="110" y="85" fontSize="10" fill="#4b5563">Entity</text>
                <text x="110" y="140" fontSize="10" fill="#4b5563">Location</text>
                <text x="220" y="85" fontSize="10" fill="#4b5563">Capital of</text>
                <text x="220" y="140" fontSize="10" fill="#4b5563">Contains</text>
                <text x="310" y="95" fontSize="10" fill="#4b5563">Is</text>
              </svg>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border rounded-lg p-3 bg-gray-50">
                <h4 className="font-bold text-sm">QK Attribution</h4>
                <p className="text-xs">Query-Key attention patterns show how "Dallas" connects to "Texas" with 0.92 strength, while "capital" and "state" have 0.88 strength connection.</p>
              </div>
              <div className="border rounded-lg p-3 bg-gray-50">
                <h4 className="font-bold text-sm">OV Projection</h4>
                <p className="text-xs">Output-Value projections show "Texas" + "capital" strongly activates "Austin" (0.95), suppressing alternatives like "Houston" (0.12).</p>
              </div>
            </div>
          </div>
        );
        
      case 'research':
        return (
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">Anthropic's Research Focus</h3>
            
            <div className="mb-4">
              <h4 className="font-semibold text-sm mb-2">Key Research Questions</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="border rounded-lg p-3 bg-blue-50">
                  <span className="font-bold text-xs">Multilingual Representation</span>
                  <p className="text-xs mt-1">How do models share conceptual space across languages?</p>
                </div>
                <div className="border rounded-lg p-3 bg-purple-50">
                  <span className="font-bold text-xs">Planning Ahead</span>
                  <p className="text-xs mt-1">Do models plan future tokens when generating text?</p>
                </div>
                <div className="border rounded-lg p-3 bg-green-50">
                  <span className="font-bold text-xs">Reasoning Faithfulness</span>
                  <p className="text-xs mt-1">Is the model's stated reasoning an accurate reflection of its computation?</p>
                </div>
                <div className="border rounded-lg p-3 bg-yellow-50">
                  <span className="font-bold text-xs">Safety Mechanisms</span>
                  <p className="text-xs mt-1">How do refusal and safety circuits operate internally?</p>
                </div>
              </div>
            </div>
            
            <div className="mb-4">
              <h4 className="font-semibold text-sm mb-2">Research Methodology</h4>
              <ol className="text-xs space-y-2 pl-5 list-decimal">
                <li>Identify meaningful <span className="font-semibold">features</span> within model activations</li>
                <li>Connect features into <span className="font-semibold">computational circuits</span></li>
                <li>Verify circuit function through <span className="font-semibold">interventions</span> (suppressing or amplifying features)</li>
                <li>Map <span className="font-semibold">causal attribution</span> paths from input to output</li>
                <li>Compare internal computations with <span className="font-semibold">stated reasoning</span></li>
              </ol>
            </div>
            
            <div>
              <h4 className="font-semibold text-sm mb-2">Circuit-Based Discoveries</h4>
              <div className="space-y-2">
                <div className="border rounded-lg p-2 bg-gray-50">
                  <span className="font-bold text-xs">Multilingual Shared Features</span>
                  <p className="text-xs mt-1">Claude shares ~2x more features across languages than smaller models</p>
                </div>
                <div className="border rounded-lg p-2 bg-gray-50">
                  <span className="font-bold text-xs">Rhyme Planning</span>
                  <p className="text-xs mt-1">Claude plans rhyming words before writing lines leading to them</p>
                </div>
                <div className="border rounded-lg p-2 bg-gray-50">
                  <span className="font-bold text-xs">Mental Math Strategies</span>
                  <p className="text-xs mt-1">Claude uses parallel approximate and precise calculation pathways</p>
                </div>
                <div className="border rounded-lg p-2 bg-gray-50">
                  <span className="font-bold text-xs">Default Refusal</span>
                  <p className="text-xs mt-1">Claude's default circuit is to refuse answering; knowledge inhibits this</p>
                </div>
              </div>
            </div>
          </div>
        );
        
      case 'demo':
        return (
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">Self-Attributing Demo</h3>
            
            <div className="bg-gray-50 p-3 rounded-lg mb-4">
              <h4 className="font-semibold text-sm mb-1">Prompt:</h4>
              <p className="text-xs italic">"What is the capital of the state containing Dallas?"</p>
            </div>
            
            <div className="border rounded-lg p-4 mb-4 bg-white">
              <h4 className="font-semibold text-sm mb-2">Claude's Attribution Trace:</h4>
              
              <div className="space-y-3 text-xs">
                <div className="border-l-4 border-blue-400 pl-2">
                  <span className="font-semibold">Entity Recognition:</span>
                  <ul className="pl-4 list-disc">
                    <li>"Dallas" recognized as city entity [confidence: 0.98]</li>
                    <li>Associated properties: {'{US city, metropolitan area, Texas}'}</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-purple-400 pl-2">
                  <span className="font-semibold">Knowledge Retrieval:</span>
                  <ul className="pl-4 list-disc">
                    <li>Fact retrieved: "Dallas is located in Texas" [confidence: 0.97]</li>
                    <li>Alternative possibilities: {'{Oklahoma: 0.02, Louisiana: 0.01}'}</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-green-400 pl-2">
                  <span className="font-semibold">Reasoning Steps:</span>
                  <ul className="pl-4 list-disc">
                    <li>Query parsed as: "capital(state(contains(Dallas)))" [confidence: 0.99]</li>
                    <li>Substitution: "capital(Texas)" [confidence: 0.97]</li>
                    <li>Resolution: "Austin" [confidence: 0.99]</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-yellow-400 pl-2">
                  <span className="font-semibold">Output Formation:</span>
                  <ul className="pl-4 list-disc">
                    <li>Top prediction: "Austin" [probability: 0.95]</li>
                    <li>Alternative completions: {'{Houston: 0.03, Dallas: 0.01, Fort Worth: 0.01}'}</li>
                  </ul>
                </div>
                
                <div className="border-l-4 border-red-400 pl-2">
                  <span className="font-semibold">Faithfulness Assessment:</span>
                  <ul className="pl-4 list-disc">
                    <li>Reasoning pattern: "faithful" [confidence: 0.96]</li>
                    <li>Attribution path fully traceable from input to output</li>
                    <li>No detected confabulation or motivated reasoning</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-3 rounded-lg">
              <h4 className="font-semibold text-sm mb-1">Response:</h4>
              <p className="text-sm">The capital of the state containing Dallas is Austin.</p>
            </div>
          </div>
        );
        
      default:
        return <div>Select a tab to view content</div>;
    }
  };
  
  return (
    <div className="border rounded-lg overflow-hidden">
      <div className="bg-gray-100 p-4 border-b">
        <h2 className="text-xl font-bold">Neural Circuit Trace Visualization</h2>
        <p className="text-sm text-gray-600">Revealing computational pathways in language model reasoning</p>
      </div>
      
      <div className="flex border-b">
        <button 
          className={`px-4 py-2 text-sm font-medium ${activeTab === 'concept' ? 'bg-white border-b-2 border-blue-500' : 'bg-gray-50'}`}
          onClick={() => setActiveTab('concept')}>
          Conceptual Overview
        </button>
        <button 
          className={`px-4 py-2 text-sm font-medium ${activeTab === 'example' ? 'bg-white border-b-2 border-blue-500' : 'bg-gray-50'}`}
          onClick={() => setActiveTab('example')}>
          Attribution Graph
        </button>
        <button 
          className={`px-4 py-2 text-sm font-medium ${activeTab === 'research' ? 'bg-white border-b-2 border-blue-500' : 'bg-gray-50'}`}
          onClick={() => setActiveTab('research')}>
          Research Focus
        </button>
        <button 
          className={`px-4 py-2 text-sm font-medium ${activeTab === 'demo' ? 'bg-white border-b-2 border-blue-500' : 'bg-gray-50'}`}
          onClick={() => setActiveTab('demo')}>
          Self-Attribution Demo
        </button>
      </div>
      
      <div className="min-h-[400px]">
        {renderCircuitTab()}
      </div>
      
      <div className="bg-gray-50 p-3 border-t">
        <p className="text-xs text-gray-500">This visualization aligns with Anthropic's circuit tracing research by demonstrating how computational pathways can be mapped from input to output, revealing internal reasoning mechanisms.</p>
      </div>
    </div>
  );
};

export default CircuitTraceVisualization;
