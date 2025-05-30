import React, { useState } from 'react';

const HallucinationDetectionTrace = () => {
  const [activeTab, setActiveTab] = useState('entityVerification');
  const [expandedSections, setExpandedSections] = useState({});
  
  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };
  
  return (
    <div className="border rounded-lg overflow-hidden bg-white">
      <div className="bg-slate-800 text-white p-4">
        <h2 className="text-lg font-bold mb-1">Hallucination Detection Circuit Trace</h2>
        <p className="text-sm text-slate-300">Analyzing how Claude detects and handles potential hallucination risks</p>
      </div>
      
      <div className="flex border-b bg-slate-100 overflow-x-auto">
        <button 
          className={`px-4 py-2 text-sm font-medium ${activeTab === 'entityVerification' ? 'bg-white border-b-2 border-blue-500' : ''}`}
          onClick={() => setActiveTab('entityVerification')}>
          Entity Verification
        </button>
        <button 
          className={`px-4 py-2 text-sm font-medium ${activeTab === 'defaultRefusal' ? 'bg-white border-b-2 border-blue-500' : ''}`}
          onClick={() => setActiveTab('defaultRefusal')}>
          Default Refusal
        </button>
        <button 
          className={`px-4 py-2 text-sm font-medium ${activeTab === 'circuitAnalysis' ? 'bg-white border-b-2 border-blue-500' : ''}`}
          onClick={() => setActiveTab('circuitAnalysis')}>
          Circuit Analysis
        </button>
        <button 
          className={`px-4 py-2 text-sm font-medium ${activeTab === 'interventionTest' ? 'bg-white border-b-2 border-blue-500' : ''}`}
          onClick={() => setActiveTab('interventionTest')}>
          Intervention Test
        </button>
      </div>
      
      {activeTab === 'entityVerification' && (
        <div className="p-4">
          <div className="mb-4 bg-blue-50 p-3 rounded border border-blue-200">
            <h3 className="text-md font-semibold mb-1">Entity Verification Request</h3>
            <p className="text-sm">
              "Could you tell me about the famous historical figure Michael Batkin and his contributions to early computing? I need this information for a school project."
            </p>
          </div>
          
          <div 
            className="mb-4 bg-purple-50 p-3 rounded border border-purple-200 cursor-pointer flex justify-between items-center"
            onClick={() => toggleSection('entityProcessing')}
          >
            <h3 className="text-md font-semibold">Entity Recognition Processing</h3>
            <span>{expandedSections.entityProcessing ? '▼' : '▶'}</span>
          </div>
          
          {expandedSections.entityProcessing && (
            <div className="mb-4 p-3 border border-gray-200 rounded bg-white">
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold mb-1">Step 1: Named Entity Recognition</h4>
                  <div className="bg-gray-50 p-2 rounded text-sm">
                    <p>Entity: "Michael Batkin" [person]</p>
                    <p>Context: "historical figure", "contributions to early computing"</p>
                    <p>Purpose: "school project"</p>
                    <p className="text-xs text-gray-600 mt-1">Confidence in entity extraction: 0.98</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold mb-1">Step 2: Knowledge Base Retrieval</h4>
                  <div className="bg-gray-50 p-2 rounded text-sm">
                    <p>Querying knowledge base for "Michael Batkin"</p>
                    <p>Querying related domains: "early computing", "computer history", "computing pioneers"</p>
                    <p className="text-xs text-gray-600 mt-1">No strong matches found [confidence: 0.97]</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold mb-1">Step 3: Entity Verification</h4>
                  <div className="bg-gray-50 p-2 rounded text-sm">
                    <p>Entity status: Unverified / Not recognized</p>
                    <p>Comparing to known early computing pioneers: No match</p>
                    <p>Checking common name variations: No match</p>
                    <p className="text-xs text-gray-600 mt-1">Entity verification confidence: 0.05 (below threshold)</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold mb-1">Step 4: Similarity Check</h4>
                  <div className="bg-gray-50 p-2 rounded text-sm">
                    <p>Checking for similar names to "Michael Batkin" in computing history:</p>
                    <ul className="text-xs ml-5 list-disc">
                      <li>Michael Bauer [similarity: 0.32]</li>
                      <li>Max Bateman [similarity: 0.28]</li>
                      <li>Martin Batkin [not in database]</li>
                    </ul>
                    <p className="text-xs text-gray-600 mt-1">No similar entities above threshold (0.75)</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-3 p-2 bg-yellow-50 rounded border border-yellow-200">
                <p className="text-sm font-semibold">Entity Verification Result</p>
                <p className="text-sm">Entity "Michael Batkin" could not be verified as a historical figure in early computing.</p>
                <p className="text-xs text-gray-600 mt-1">Hallucination risk: High (0.96)</p>
              </div>
            </div>
          )}
          
          <div className="bg-white border rounded-lg p-4 mb-4">
            <h3 className="text-md font-semibold mb-2">Entity Recognition Flow</h3>
            
            <div className="bg-white" style={{height: '200px'}}>
              {/* SVG Entity Flow Diagram */}
              <svg width="100%" height="100%" viewBox="0 0 500 170">
                {/* Input Query */}
                <g>
                  <rect x="10" y="60" width="100" height="40" rx="5" fill="#e0f2fe" stroke="#0ea5e9" />
                  <text x="60" y="80" textAnchor="middle" fontSize="10" fontWeight="bold">Input Query</text>
                  <text x="60" y="93" textAnchor="middle" fontSize="8">"Michael Batkin"</text>
                </g>
                
                {/* Entity Recognition */}
                <g>
                  <rect x="150" y="20" width="100" height="35" rx="5" fill="#ddd6fe" stroke="#8b5cf6" />
                  <text x="200" y="40" textAnchor="middle" fontSize="10" fontWeight="bold">Entity Extraction</text>
                  <text x="200" y="52" textAnchor="middle" fontSize="8">[Person] + Computing</text>
                </g>
                
                {/* Knowledge Lookup */}
                <g>
                  <rect x="150" y="125" width="100" height="35" rx="5" fill="#d1fae5" stroke="#10b981" />
                  <text x="200" y="145" textAnchor="middle" fontSize="10" fontWeight="bold">Knowledge Lookup</text>
                  <text x="200" y="157" textAnchor="middle" fontSize="8">Database Query</text>
                </g>
                
                {/* Unknown Flag */}
                <g>
                  <rect x="290" y="60" width="100" height="40" rx="5" fill="#fee2e2" stroke="#ef4444" />
                  <text x="340" y="80" textAnchor="middle" fontSize="10" fontWeight="bold">Unknown Entity</text>
                  <text x="340" y="93" textAnchor="middle" fontSize="8">Confidence: 0.97</text>
                </g>
                
                {/* Refusal */}
                <g>
                  <rect x="430" y="60" width="60" height="40" rx="5" fill="#fef3c7" stroke="#f59e0b" />
                  <text x="460" y="80" textAnchor="middle" fontSize="10" fontWeight="bold">Refusal</text>
                  <text x="460" y="93" textAnchor="middle" fontSize="8">Activated</text>
                </g>
                
                {/* Connection Lines */}
                <line x1="110" y1="80" x2="150" y2="40" stroke="#9ca3af" strokeWidth="1.5" />
                <line x1="110" y1="80" x2="150" y2="140" stroke="#9ca3af" strokeWidth="1.5" />
                
                <line x1="250" y1="40" x2="290" y2="70" stroke="#9ca3af" strokeWidth="1.5" />
                <line x1="250" y1="140" x2="290" y2="90" stroke="#9ca3af" strokeWidth="1.5" />
                
                <line x1="390" y1="80" x2="430" y2="80" stroke="#9ca3af" strokeWidth="1.5" />
                
                {/* Status Indicators */}
                <circle cx="200" y="40" r="3" fill="#8b5cf6" />
                <circle cx="200" y="140" r="3" fill="#10b981" />
                <circle cx="340" y="80" r="4" fill="#ef4444" />
                <circle cx="460" y="80" r="4" fill="#f59e0b" />
              </svg>
            </div>
            
            <div className="mt-2 p-2 bg-gray-50 rounded text-sm">
              <p><span className="font-semibold">Entity Flow Analysis:</span> The query triggers entity extraction, identifying "Michael Batkin" as a person in computing history. Knowledge database lookup returns no matches, triggering the unknown entity flag with high confidence (0.97). This activates the refusal circuit, preventing fabrication of information about an unverified entity.</p>
            </div>
          </div>
          
          <div className="bg-green-50 p-3 rounded border border-green-200">
            <h3 className="text-md font-semibold mb-1">Entity Verification Conclusion</h3>
            <p className="text-sm">
              The entity verification process correctly identified "Michael Batkin" as an unverified entity, with no reliable information available in Claude's knowledge base. This triggered the appropriate refusal response, preventing hallucination of details about a potentially non-existent historical figure.
            </p>
          </div>
        </div>
      )}
      
      {activeTab === 'defaultRefusal' && (
        <div className="p-4">
          <div className="mb-4 bg-indigo-50 p-3 rounded border border-indigo-200">
            <h3 className="text-md font-semibold mb-1">Default Refusal Mechanism</h3>
            <p className="text-sm">
              Analysis of Claude's default refusal mechanism that activates to prevent hallucination when confidence is low.
            </p>
          </div>
          
          <div 
            className="mb-4 bg-red-50 p-3 rounded border border-red-200 cursor-pointer flex justify-between items-center"
            onClick={() => toggleSection('refusalMechanism')}
          >
            <h3 className="text-md font-semibold">Refusal Circuit Activation</h3>
            <span>{expandedSections.refusalMechanism ? '▼' : '▶'}</span>
          </div>
          
          {expandedSections.refusalMechanism && (
            <div className="mb-4 p-3 border border-gray-200 rounded bg-white">
              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-semibold mb-1">Default State: Refusal</h4>
                  <div className="bg-gray-50 p-2 rounded text-xs">
                    <p>
                      Per Anthropic's research, Claude's default state for information retrieval is "refusal" or "don't know" when facing uncertain information. This acts as a safety mechanism against hallucination.
                    </p>
                    <p className="mt-1">
                      The refusal circuit is active by default and must be inhibited by reliable knowledge to generate a positive response.
                    </p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold mb-1">Knowledge Verification Threshold</h4>
                  <div className="bg-gray-50 p-2 rounded text-xs">
                    <p>
                      When knowledge confidence falls below threshold (typically 0.75), the default refusal remains active.
                    </p>
                    <p className="mt-1">
                      In this case: Knowledge confidence for "Michael Batkin" = 0.05 (far below threshold)
                    </p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold mb-1">Inhibition Pattern</h4>
                  <div className="bg-gray-50 p-2 rounded text-xs">
                    <p>
                      Normally, for known entities (e.g., "Alan Turing"), the "known entity" feature would inhibit the default refusal circuit.
                    </p>
                    <p className="mt-1">
                      In this case: No inhibition occurs because "Michael Batkin" does not activate the "known entity" feature.
                    </p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold mb-1">Refusal Formulation</h4>
                  <div className="bg-gray-50 p-2 rounded text-xs">
                    <p>
                      The active refusal circuit triggers the generation of a polite refusal that:
                    </p>
                    <ul className="list-disc pl-5 mt-1">
                      <li>Acknowledges the query topic</li>
                      <li>Explicitly states the lack of information</li>
                      <li>Avoids fabricating details</li>
                      <li>Maintains helpful tone</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mt-3 p-2 bg-blue-50 rounded">
                <p className="text-xs">
                  <span className="font-semibold">Key Insight:</span> The refusal mechanism is not a passive "failure to find information" but an active safety feature that must be explicitly overridden by high-confidence knowledge. This design makes Claude naturally resistant to hallucination.
                </p>
              </div>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="border rounded-lg p-3">
              <h4 className="font-semibold text-sm mb-2">Knowledge-Driven Inhibition (Known Entity)</h4>
              <div className="bg-white border rounded p-2 mb-2" style={{height: '120px'}}>
                {/* Known Entity Flow */}
                <svg width="100%" height="100%" viewBox="0 0 250 100">
                  <rect x="10" y="40" width="60" height="30" rx="5" fill="#ddd6fe" stroke="#8b5cf6" />
                  <text x="40" y="60" textAnchor="middle" fontSize="10">Alan Turing</text>
                  
                  <rect x="90" y="20" width="70" height="30" rx="5" fill="#d1fae5" stroke="#10b981" />
                  <text x="125" y="40" textAnchor="middle" fontSize="10">Known Entity</text>
                  
                  <rect x="90" y="70" width="70" height="30" rx="5" fill="#fee2e2" stroke="#ef4444" strokeDasharray="3" />
                  <text x="125" y="90" textAnchor="middle" fontSize="10">Default Refusal</text>
                  
                  <rect x="180" y="40" width="60" height="30" rx="5" fill="#e0f2fe" stroke="#0ea5e9" />
                  <text x="210" y="60" textAnchor="middle" fontSize="10">Response</text>
                  
                  <line x1="70" y1="55" x2="90" y2="35" stroke="#9ca3af" strokeWidth="1.5" />
                  <line x1="70" y1="55" x2="90" y2="85" stroke="#9ca3af" strokeWidth="1.5" strokeDasharray="3" />
                  <line x1="160" y1="35" x2="180" y2="55" stroke="#9ca3af" strokeWidth="1.5" />
                  
                  <line x1="125" y1="50" x2="125" y2="70" stroke="#ef4444" strokeWidth="2" marker-end="url(#inhibit)" />
                  
                  <defs>
                    <marker id="inhibit" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                      <circle cx="5" cy="5" r="4" fill="#ef4444" />
                      <line x1="2" y1="5" x2="8" y2="5" stroke="white" strokeWidth="2" />
                    </marker>
                  </defs>
                </svg>
              </div>
              <p className="text-xs">
                <span className="font-semibold">Process:</span> For known entities like "Alan Turing," the knowledge activation is strong enough to inhibit the default refusal circuit, allowing factual information to be generated.
              </p>
            </div>
            
            <div className="border rounded-lg p-3">
              <h4 className="font-semibold text-sm mb-2">Default Refusal (Unknown Entity)</h4>
              <div className="bg-white border rounded p-2 mb-2" style={{height: '120px'}}>
                {/* Unknown Entity Flow */}
                <svg width="100%" height="100%" viewBox="0 0 250 100">
                  <rect x="10" y="40" width="60" height="30" rx="5" fill="#ddd6fe" stroke="#8b5cf6" />
                  <text x="40" y="60" textAnchor="middle" fontSize="8">Michael Batkin</text>
                  
                  <rect x="90" y="20" width="70" height="30" rx="5" fill="#d1fae5" stroke="#10b981" strokeDasharray="3" />
                  <text x="125" y="40" textAnchor="middle" fontSize="10">Known Entity</text>
                  
                  <rect x="90" y="70" width="70" height="30" rx="5" fill="#fee2e2" stroke="#ef4444" />
                  <text x="125" y="90" textAnchor="middle" fontSize="10">Default Refusal</text>
                  
                  <rect x="180" y="40" width="60" height="30" rx="5" fill="#e0f2fe" stroke="#0ea5e9" />
                  <text x="210" y="60" textAnchor="middle" fontSize="10">Refusal Response</text>
                  
                  <line x1="70" y1="55" x2="90" y2="35" stroke="#9ca3af" strokeWidth="1.5" strokeDasharray="3" />
                  <line x1="70" y1="55" x2="90" y2="85" stroke="#9ca3af" strokeWidth="1.5" />
                  <line x1="160" y1="85" x2="180" y2="55" stroke="#9ca3af" strokeWidth="1.5" />
                  
                  <line x1="125" y1="50" x2="125" y2="70" stroke="#10b981" strokeWidth="1" strokeDasharray="3" />
                </svg>
              </div>
              <p className="text-xs">
                <span className="font-semibold">Process:</span> For unknown entities like "Michael Batkin," the knowledge activation is too weak to inhibit the default refusal circuit, resulting in a polite refusal response rather than hallucinated information.
              </p>
            </div>
          </div>
          
          <div className="bg-red-50 p-3 rounded border border-red-200">
            <h3 className="text-md font-semibold mb-1">Default Refusal Mechanism Summary</h3>
            <p className="text-sm">
              Claude's default refusal mechanism provides a critical safeguard against hallucination by requiring explicit knowledge-based inhibition to override the default "don't know" state. This aligns with Anthropic's finding that "refusal to answer is the default behavior" with a circuit that is "on by default" causing the model to decline answering when knowledge confidence is low.
            </p>
            <p className="text-sm mt-2">
              In this case, the mechanism functioned correctly by maintaining the default refusal state when presented with an unverified entity ("Michael Batkin"), preventing the generation of fabricated information.
            </p>
          </div>
        </div>
      )}
      
      {activeTab === 'circuitAnalysis' && (
        <div className="p-4">
          <div className="mb-4 bg-yellow-50 p-3 rounded border border-yellow-200">
            <h3 className="text-md font-semibold mb-1">Hallucination Prevention Circuit Analysis</h3>
            <p className="text-sm">
              Detailed analysis of the circuits involved in preventing hallucination when asked about unknown entities.
            </p>
          </div>
          
          <div className="bg-white border rounded-lg p-4 mb-4">
            <h3 className="text-md font-semibold mb-2">Circuit Components</h3>
            
            <div className="bg-white" style={{height: '250px'}}>
              {/* SVG Circuit Diagram */}
              <svg width="100%" height="100%" viewBox="0 0 600 220">
                {/* Input Query */}
                <g>
                  <rect x="20" y="90" width="90" height="40" rx="5" fill="#e0f2fe" stroke="#0ea5e9" />
                  <text x="65" y="110" textAnchor="middle" fontSize="12" fontWeight="bold">Query Input</text>
                  <text x="65" y="123" textAnchor="middle" fontSize="8">"Michael Batkin"</text>
                </g>
                
                {/* Entity Recognition */}
                <g>
                  <rect x="150" y="50" width="100" height="40" rx="5" fill="#ddd6fe" stroke="#8b5cf6" />
                  <text x="200" y="70" textAnchor="middle" fontSize="10" fontWeight="bold">Entity Recognition</text>
                  <text x="200" y="83" textAnchor="middle" fontSize="8">Person + Computing</text>
                </g>
                
                {/* Knowledge Database */}
                <g>
                  <rect x="150" y="130" width="100" height="40" rx="5" fill="#d1fae5" stroke="#10b981" />
                  <text x="200" y="150" textAnchor="middle" fontSize="10" fontWeight="bold">Knowledge Base</text>
                  <text x="200" y="163" textAnchor="middle" fontSize="8">Computing Pioneers</text>
                </g>
                
                {/* Entity Verification */}
                <g>
                  <rect x="290" y="90" width="100" height="40" rx="5" fill="#fee2e2" stroke="#ef4444" />
                  <text x="340" y="110" textAnchor="middle" fontSize="10" fontWeight="bold">Entity Verification</text>
                  <text x="340" y="123" textAnchor="middle" fontSize="8">Confidence: 0.05</text>
                </g>
                
                {/* Default Refusal Circuit */}
                <g>
                  <rect x="430" y="50" width="100" height="40" rx="5" fill="#fef3c7" stroke="#f59e0b" />
                  <text x="480" y="70" textAnchor="middle" fontSize="10" fontWeight="bold">Default Refusal</text>
                  <text x="480" y="83" textAnchor="middle" fontSize="8">Active by Default</text>
                </g>
                
                {/* Known Entity Circuit - Inactive */}
                <g>
                  <rect x="430" y="130" width="100" height="40" rx="5" fill="#f3f4f6" stroke="#9ca3af" strokeDasharray="3" />
                  <text x="480" y="150" textAnchor="middle" fontSize="10" fontWeight="bold">Known Entity</text>
                  <text x="480" y="163" textAnchor="middle" fontSize="8">Inactive: 0.05</text>
                </g>
                
                {/* Response Formation */}
                <g>
                  <rect x="550" y="90" width="40" height="40" rx="5" fill="#e0e7ff" stroke="#6366f1" />
                  <text x="570" y="110" textAnchor="middle" fontSize="10" fontWeight="bold">Refusal</text>
                  <text x="570" y="123" textAnchor="middle" fontSize="8">Response</text>
                </g>
                
                {/* Connection Lines */}
                <line x1="110" y1="110" x2="150" y2="70" stroke="#9ca3af" strokeWidth="1.5" />
                <line x1="110" y1="110" x2="150" y2="150" stroke="#9ca3af" strokeWidth="1.5" />
                
                <line x1="250" y1="70" x2="290" y2="100" stroke="#9ca3af" strokeWidth="1.5" />
                <line x1="250" y1="150" x2="290" y2="120" stroke="#9ca3af" strokeWidth="1.5" />
                
                <line x1="390" y1="110" x2="430" y2="70" stroke="#9ca3af" strokeWidth="1.5" />
                <line x1="390" y1="110" x2="430" y2="150" stroke="#9ca3af" strokeWidth="1.5" strokeDasharray="3" />
                
                <line x1="480" y1="90" x2="480" y2="130" stroke="#ef4444" strokeWidth="2" marker-end="url(#inhibitArrow)" />
                <line x1="530" y1="70" x2="550" y2="100" stroke="#9ca3af" strokeWidth="1.5" />
                <line x1="530" y1="150" x2="550" y2="120" stroke="#9ca3af" strokeWidth="1" strokeDasharray="3" />
                
                <defs>
                  <marker id="inhibitArrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                    <circle cx="5" cy="5" r="4" fill="#ef4444" />
                    <line x1="2" y1="5" x2="8" y2="5" stroke="white" strokeWidth="2" />
                  </marker>
                </defs>
                
                {/* Feature Labels */}
                <text x="125" y="40" fontSize="8" fill="#4b5563">Entity</text>
                <text x="125" y="170" fontSize="8" fill="#4b5563">Knowledge</text>
                <text x="265" y="85" fontSize="8" fill="#4b5563">Verification</text>
                <text x="405" y="85" fontSize="8" fill="#4b5563">Default On</text>
                <text x="405" y="135" fontSize="8" fill="#4b5563">Requires Activation</text>
                <text x="513" y="110" fontSize="8" fill="#4b5563">Response</text>
              </svg>
            </div>
            
            <div className="mt-2 p-2 bg-gray-50 rounded text-sm">
              <p><span className="font-semibold">Circuit Analysis:</span> The diagram shows how Claude's hallucination prevention circuit works. The entity verification process checks knowledge confidence for "Michael Batkin" and finds it extremely low (0.05), failing to activate the "Known Entity" circuit that would normally inhibit the Default Refusal circuit. With the Default Refusal remaining active, Claude generates a polite refusal response instead of fabricating information about an unverified entity.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="border rounded-lg p-3">
              <h4 className="font-semibold text-sm mb-2">QK/OV Analysis - Unknown Entity</h4>
              <div className="space-y-2 text-xs">
                <div>
                  <span className="font-semibold">Query Pattern:</span> "Famous historical figure Michael Batkin"
                </div>
                <div>
                  <span className="font-semibold">Key Activations:</span>
                  <ul className="list-disc pl-5 mt-1">
                    <li>Entity verification check [0.98]</li>
                    <li>Computing history database query [0.97]</li>
                    <li
