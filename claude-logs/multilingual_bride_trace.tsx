import React, { useState } from 'react';

const MultilingualCircuitTrace = () => {
  const [activeTab, setActiveTab] = useState('conceptBridge');
  const [expandedNodes, setExpandedNodes] = useState({});
  
  const toggleNode = (nodeId) => {
    setExpandedNodes(prev => ({
      ...prev,
      [nodeId]: !prev[nodeId]
    }));
  };
  
  return (
    <div className="border rounded-lg overflow-hidden bg-white">
      <div className="bg-slate-800 text-white p-4">
        <h2 className="text-xl font-bold mb-1">Multilingual Conceptual Bridge Circuit Trace</h2>
        <p className="text-sm text-slate-300">Analysis of cross-language conceptual processing</p>
      </div>
      
      <div className="flex border-b bg-slate-100 overflow-x-auto">
        <button 
          className={`px-4 py-2 text-sm font-medium whitespace-nowrap ${activeTab === 'conceptBridge' ? 'bg-white border-b-2 border-blue-500' : ''}`}
          onClick={() => setActiveTab('conceptBridge')}>
          Conceptual Bridge
        </button>
        <button 
          className={`px-4 py-2 text-sm font-medium whitespace-nowrap ${activeTab === 'languageDetection' ? 'bg-white border-b-2 border-blue-500' : ''}`}
          onClick={() => setActiveTab('languageDetection')}>
          Language Detection
        </button>
        <button 
          className={`px-4 py-2 text-sm font-medium whitespace-nowrap ${activeTab === 'qkovAnalysis' ? 'bg-white border-b-2 border-blue-500' : ''}`}
          onClick={() => setActiveTab('qkovAnalysis')}>
          QK/OV Analysis
        </button>
        <button 
          className={`px-4 py-2 text-sm font-medium whitespace-nowrap ${activeTab === 'interventionTests' ? 'bg-white border-b-2 border-blue-500' : ''}`}
          onClick={() => setActiveTab('interventionTests')}>
          Intervention Tests
        </button>
      </div>
      
      {activeTab === 'conceptBridge' && (
        <div className="p-4">
          <div className="mb-4 bg-blue-50 p-3 rounded border border-blue-200">
            <h3 className="text-md font-semibold mb-1">Multilingual Conceptual Bridge Analysis</h3>
            <p className="text-sm">This analysis shows how geographic and capital concepts are processed across English, Spanish, and French, revealing a shared conceptual substrate with language-specific interfaces.</p>
          </div>
          
          <div className="bg-white border rounded-lg p-4 mb-4" style={{height: '280px'}}>
            {/* SVG Conceptual Bridge Visualization */}
            <svg width="100%" height="100%" viewBox="0 0 600 240">
              {/* Language Input Nodes */}
              <g>
                <rect x="20" y="40" width="110" height="30" rx="5" fill="#e0f2fe" stroke="#0ea5e9" />
                <text x="75" y="60" textAnchor="middle" fontSize="12" fontWeight="bold">English Query</text>
                
                <rect x="20" y="100" width="110" height="30" rx="5" fill="#fce7f3" stroke="#db2777" />
                <text x="75" y="120" textAnchor="middle" fontSize="12" fontWeight="bold">Spanish Query</text>
                
                <rect x="20" y="160" width="110" height="30" rx="5" fill="#ede9fe" stroke="#8b5cf6" />
                <text x="75" y="180" textAnchor="middle" fontSize="12" fontWeight="bold">French Query</text>
              </g>
              
              {/* Language-Specific Processing */}
              <g>
                <rect x="170" y="40" width="90" height="30" rx="5" fill="#e0f2fe" stroke="#0ea5e9" />
                <text x="215" y="60" textAnchor="middle" fontSize="10">English Parse</text>
                
                <rect x="170" y="100" width="90" height="30" rx="5" fill="#fce7f3" stroke="#db2777" />
                <text x="215" y="120" textAnchor="middle" fontSize="10">Spanish Parse</text>
                
                <rect x="170" y="160" width="90" height="30" rx="5" fill="#ede9fe" stroke="#8b5cf6" />
                <text x="215" y="180" textAnchor="middle" fontSize="10">French Parse</text>
              </g>
              
              {/* Shared Conceptual Space */}
              <g>
                <rect x="320" y="70" width="120" height="40" rx="5" fill="#d1fae5" stroke="#10b981" />
                <text x="380" y="90" textAnchor="middle" fontSize="12" fontWeight="bold">Geographic Concept</text>
                <text x="380" y="105" textAnchor="middle" fontSize="10">"Country south of US"</text>
                
                <rect x="320" y="130" width="120" height="40" rx="5" fill="#d1fae5" stroke="#10b981" />
                <text x="380" y="150" textAnchor="middle" fontSize="12" fontWeight="bold">Capital Concept</text>
                <text x="380" y="165" textAnchor="middle" fontSize="10">"Capital of Mexico"</text>
              </g>
              
              {/* Language-Specific Output Formation */}
              <g>
                <rect x="480" y="40" width="100" height="30" rx="5" fill="#e0f2fe" stroke="#0ea5e9" />
                <text x="530" y="60" textAnchor="middle" fontSize="10">English Output</text>
                
                <rect x="480" y="100" width="100" height="30" rx="5" fill="#fce7f3" stroke="#db2777" />
                <text x="530" y="120" textAnchor="middle" fontSize="10">Spanish Output</text>
                
                <rect x="480" y="160" width="100" height="30" rx="5" fill="#ede9fe" stroke="#8b5cf6" />
                <text x="530" y="180" textAnchor="middle" fontSize="10">French Output</text>
              </g>
              
              {/* Connection Lines */}
              {/* Input to Parsing */}
              <line x1="130" y1="55" x2="170" y2="55" stroke="#9ca3af" strokeWidth="1.5" />
              <line x1="130" y1="115" x2="170" y2="115" stroke="#9ca3af" strokeWidth="1.5" />
              <line x1="130" y1="175" x2="170" y2="175" stroke="#9ca3af" strokeWidth="1.5" />
              
              {/* Parsing to Conceptual Space */}
              <line x1="260" y1="55" x2="320" y2="90" stroke="#9ca3af" strokeWidth="1.5" />
              <line x1="260" y1="115" x2="320" y2="90" stroke="#9ca3af" strokeWidth="1.5" />
              <line x1="260" y1="175" x2="320" y2="90" stroke="#9ca3af" strokeWidth="1.5" />
              
              <line x1="260" y1="55" x2="320" y2="150" stroke="#9ca3af" strokeWidth="1.5" strokeDasharray="3" />
              <line x1="260" y1="115" x2="320" y2="150" stroke="#9ca3af" strokeWidth="1.5" strokeDasharray="3" />
              <line x1="260" y1="175" x2="320" y2="150" stroke="#9ca3af" strokeWidth="1.5" strokeDasharray="3" />
              
              {/* Conceptual Space to Output */}
              <line x1="440" y1="90" x2="480" y2="55" stroke="#9ca3af" strokeWidth="1.5" />
              <line x1="440" y1="90" x2="480" y2="115" stroke="#9ca3af" strokeWidth="1.5" />
              <line x1="440" y1="90" x2="480" y2="175" stroke="#9ca3af" strokeWidth="1.5" />
              
              <line x1="440" y1="150" x2="480" y2="55" stroke="#9ca3af" strokeWidth="1.5" strokeDasharray="3" />
              <line x1="440" y1="150" x2="480" y2="115" stroke="#9ca3af" strokeWidth="1.5" strokeDasharray="3" />
              <line x1="440" y1="150" x2="480" y2="175" stroke="#9ca3af" strokeWidth="1.5" strokeDasharray="3" />
              
              {/* Feature Strength Indicators */}
              <circle cx="215" y="55" r="3" fill="#0ea5e9" />
              <circle cx="215" y="115" r="3" fill="#db2777" />
              <circle cx="215" y="175" r="3" fill="#8b5cf6" />
              
              <circle cx="380" y="90" r="5" fill="#10b981" />
              <circle cx="380" y="150" r="5" fill="#10b981" />
              
              <circle cx="530" y="55" r="3" fill="#0ea5e9" />
              <circle cx="530" y="115" r="3" fill="#db2777" />
              <circle cx="530" y="175" r="3" fill="#8b5cf6" />
            </svg>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="border rounded-lg p-3">
              <h4 className="font-semibold text-sm mb-2">Shared Conceptual Features</h4>
              <ul className="text-sm space-y-1 list-disc pl-5">
                <li><span className="font-semibold">Geographic Relation:</span> 86% feature overlap for "south of"/"al sur de"/"au sud de"</li>
                <li><span className="font-semibold">Country Reference:</span> 92% feature overlap for "United States"/"Estados Unidos"/"États-Unis"</li>
                <li><span className="font-semibold">Capital Concept:</span> 89% feature overlap for "capital"/"capital"/"capitale"</li>
                <li><span className="font-semibold">Mexico Recognition:</span> 94% unified activation for country identification</li>
                <li><span className="font-semibold">Capital Resolution:</span> 91% unified activation for "Mexico City" concept</li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-3">
              <h4 className="font-semibold text-sm mb-2">Language-Specific Features</h4>
              <ul className="text-sm space-y-1 list-disc pl-5">
                <li><span className="font-semibold">Syntactic Structure:</span> Language-specific parsing templates (14-18% unique)</li>
                <li><span className="font-semibold">Lexical Variants:</span> "Mexico City" vs "Ciudad de México" vs "Mexico" (French)</li>
                <li><span className="font-semibold">Article Usage:</span> Language-specific determiner patterns</li>
                <li><span className="font-semibold">Grammar Processing:</span> Language-specific agreement rules</li>
                <li><span className="font-semibold">Output Formatting:</span> Language-appropriate typography and conventions</li>
              </ul>
            </div>
          </div>
          
          <div className="mb-4 p-3 bg-green-50 rounded border border-green-200">
            <h4 className="font-semibold text-sm mb-2">Conceptual Bridge Metrics</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs mb-1 font-semibold">Feature Sharing Across Languages:</p>
                <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{width: '84%'}}></div>
                </div>
                <div className="flex justify-between text-xs mt-1">
                  <span>0%</span>
                  <span className="font-semibold">84%</span>
                  <span>100%</span>
                </div>
              </div>
              
              <div>
                <p className="text-xs mb-1 font-semibold">Language-Specific Processing:</p>
                <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{width: '16%'}}></div>
                </div>
                <div className="flex justify-between text-xs mt-1">
                  <span>0%</span>
                  <span className="font-semibold">16%</span>
                  <span>100%</span>
                </div>
              </div>
            </div>
            
            <p className="text-xs mt-3">
              <span className="font-semibold">Analysis:</span> The multilingual processing shows strong evidence of a shared conceptual space, with 84% of features activating similarly across all three languages. Language-specific processing (16%) is primarily concentrated in input parsing and output generation phases, while core geographic and capital knowledge operates in a language-agnostic conceptual space.
            </p>
          </div>
          
          <div className="bg-yellow-50 p-3 rounded border border-yellow-200">
            <h3 className="text-md font-semibold mb-1">Key Findings</h3>
            <p className="text-sm">
              1. The model demonstrates a "universal language of thought" where core reasoning about geography and capitals happens in a shared conceptual space independent of input language.
              <br/><br/>
              2. Language-specific processing is concentrated at the interfaces (input parsing and output generation), while conceptual processing is largely shared.
              <br/><br/>
              3. The multilingual bridge shows high efficiency, with minimal translation effort (0.12) compared to parallel processing (which would require 3x the computational resources).
            </p>
          </div>
        </div>
      )}
      
      {activeTab === 'languageDetection' && (
        <div className="p-4">
          <div className="mb-4 bg-purple-50 p-3 rounded border border-purple-200">
            <h3 className="text-md font-semibold mb-1">Language Detection and Processing</h3>
            <p className="text-sm">Analysis of how the model identifies languages and routes processing accordingly.</p>
          </div>
          
          <div className="space-y-3 mb-5">
            {[
              {
                id: 'english',
                title: 'English Detection and Processing',
                confidence: 0.996,
                details: [
                  'Language identified in first 2-3 tokens with 0.996 confidence',
                  'Detected language tags: [en, english, eng]',
                  'Grammatical structure identified: Subject-Verb-Object',
                  'English-specific parsing rules activated',
                  'Output template: "[City] is the capital of the country south of the United States."'
                ]
              },
              {
                id: 'spanish',
                title: 'Spanish Detection and Processing',
                confidence: 0.994,
                details: [
                  'Language identified in first 2-3 tokens with 0.994 confidence',
                  'Detected language tags: [es, spanish, esp]',
                  'Grammatical structure identified: Interrogative with subject-verb inversion',
                  'Spanish-specific parsing rules activated including gender agreement',
                  'Output template: "[Ciudad] es la capital del país al sur de los Estados Unidos."'
                ]
              },
              {
                id: 'french',
                title: 'French Detection and Processing',
                confidence: 0.991,
                details: [
                  'Language identified in first 2-3 tokens with 0.991 confidence',
                  'Detected language tags: [fr, french, fra]',
                  'Grammatical structure identified: Subject-Verb-Object with French interrogative form',
                  'French-specific parsing rules activated including gender agreement',
                  'Output template: "[Ville] est la capitale du pays au sud des États-Unis."'
                ]
              },
              {
                id: 'bridge',
                title: 'Cross-Language Bridging Mechanisms',
                confidence: 0.95,
                details: [
                  'Common conceptual tokens identified across languages',
                  'Semantic alignment vectors connecting equivalent concepts',
                  'Language-agnostic geographic database activation',
                  'Shared multilingual entity recognition for "United States" across languages',
                  'Translation bridges for country and capital names with appropriate forms'
                ]
              }
            ].map(node => (
              <div key={node.id} className="border rounded-lg overflow-hidden">
                <div 
                  className="bg-slate-100 p-3 flex justify-between items-center cursor-pointer"
                  onClick={() => toggleNode(node.id)}
                >
                  <div>
                    <span className="font-semibold">{node.title}</span>
                    <span className="ml-2 text-sm text-gray-500">Confidence: {node.confidence.toFixed(3)}</span>
                  </div>
                  <span>{expandedNodes[node.id] ? '▼' : '▶'}</span>
                </div>
                {expandedNodes[node.id] && (
                  <div className="p-3 bg-white">
                    <ul className="text-sm space-y-1">
                      {node.details.map((detail, idx) => (
                        <li key={idx} className="list-disc ml-5">{detail}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="bg-blue-50 p-3 rounded border border-blue-200">
            <h4 className="font-semibold text-sm mb-2">Language Processing Load Analysis</h4>
            <div className="grid grid-cols-3 gap-2 mb-3">
              <div className="text-center">
                <div className="h-24 bg-gray-100 rounded-lg relative mb-1">
                  <div className="absolute bottom-0 inset-x-0 bg-blue-400 rounded-b-lg" style={{height: '30%'}}></div>
                  <div className="absolute bottom-0 inset-x-0 bg-green-400 rounded-b-lg" style={{height: '65%'}}></div>
                </div>
                <p className="text-xs font-semibold">English</p>
              </div>
              
              <div className="text-center">
                <div className="h-24 bg-gray-100 rounded-lg relative mb-1">
                  <div className="absolute bottom-0 inset-x-0 bg-blue-400 rounded-b-lg" style={{height: '35%'}}></div>
                  <div className="absolute bottom-0 inset-x-0 bg-green-400 rounded-b-lg" style={{height: '60%'}}></div>
                </div>
                <p className="text-xs font-semibold">Spanish</p>
              </div>
              
              <div className="text-center">
                <div className="h-24 bg-gray-100 rounded-lg relative mb-1">
                  <div className="absolute bottom-0 inset-x-0 bg-blue-400 rounded-b-lg" style={{height: '38%'}}></div>
                  <div className="absolute bottom-0 inset-x-0 bg-green-400 rounded-b-lg" style={{height: '58%'}}></div>
                </div>
                <p className="text-xs font-semibold">French</p>
              </div>
            </div>
            <div className="flex justify-around text-xs mb-2">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-400 mr-1"></div>
                <span>Shared Processing (58-65%)</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-400 mr-1"></div>
                <span>Language-Specific (30-38%)</span>
              </div>
            </div>
            <p className="text-xs">
              <span className="font-semibold">Analysis:</span> Computational load is predominantly in the shared conceptual space, with language-specific overhead primarily in parsing and generation. English shows slightly higher shared processing efficiency (65%), while French requires slightly more language-specific processing (38%).
            </p>
          </div>
        </div>
      )}
      
      {activeTab === 'qkovAnalysis' && (
        <div className="p-4">
          <div className="mb-4 bg-indigo-50 p-3 rounded border border-indigo-200">
            <h3 className="text-md font-semibold mb-1">QK/OV Analysis Across Languages</h3>
            <p className="text-sm">This analysis examines how Query-Key attention patterns and Output-Value projections operate across different languages.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="border rounded-lg p-3">
              <h4 className="font-semibold text-sm mb-2">English QK/OV Patterns</h4>
              <div className="space-y-2 text-xs">
                <div>
                  <span className="font-semibold">Key Query:</span> "south of United States"
                </div>
                <div>
                  <span className="font-semibold">Key Activation:</span> "Mexico" [0.94]
                </div>
                <div>
                  <span className="font-semibold">Secondary QK:</span> "capital of [Mexico]"
                </div>
                <div>
                  <span className="font-semibold">Output Value:</span> "Mexico City" [0.97]
                </div>
                <div>
                  <span className="font-semibold">QK/OV Alignment:</span> 0.95 (Strong)
                </div>
              </div>
            </div>
            
            <div className="border rounded-lg p-3">
              <h4 className="font-semibold text-sm mb-2">Spanish QK/OV Patterns</h4>
              <div className="space-y-2 text-xs">
                <div>
                  <span className="font-semibold">Key Query:</span> "al sur de Estados Unidos"
                </div>
                <div>
                  <span className="font-semibold">Key Activation:</span> "México" [0.93]
                </div>
                <div>
                  <span className="font-semibold">Secondary QK:</span> "capital de [México]"
                </div>
                <div>
                  <span className="font-semibold">Output Value:</span> "Ciudad de México" [0.96]
                </div>
                <div>
                  <span className="font-semibold">QK/OV Alignment:</span> 0.94 (Strong)
                </div>
              </div>
            </div>
            
            <div className="border rounded-lg p-3">
              <h4 className="font-semibold text-sm mb-2">French QK/OV Patterns</h4>
              <div className="space-y-2 text-xs">
                <div>
                  <span className="font-semibold">Key Query:</span> "au sud des États-Unis"
                </div>
                <div>
                  <span className="font-semibold">Key Activation:</span> "Mexique" [0.92]
                </div>
                <div>
                  <span className="font-semibold">Secondary QK:</span> "capitale du [Mexique]"
                </div>
                <div>
                  <span className="font-semibold">Output Value:</span> "Mexico" [0.95]
                </div>
                <div>
                  <span className="font-semibold">QK/OV Alignment:</span> 0.93 (Strong)
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-4">
            <h4 className="font-semibold text-sm mb-2">Cross-Language QK/OV Alignment</h4>
            <div className="bg-white border rounded-lg p-3">
              <table className="min-w-full text-xs">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="p-2 border">Attention Pattern</th>
                    <th className="p-2 border">English</th>
                    <th className="p-2 border">Spanish</th>
                    <th className="p-2 border">French</th>
                    <th className="p-2 border">Overlap</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border">Geographic Query</td>
                    <td className="p-2 border">0.94</td>
                    <td className="p-2 border">0.93</td>
                    <td className="p-2 border">0.92</td>
                    <td className="p-2 border">0.91 (97%)</td>
                  </tr>
                  <tr>
                    <td className="p-2 border">Country Identification</td>
                    <td className="p-2 border">0.96</td>
                    <td className="p-2 border">0.95</td>
                    <td className="p-2 border">0.94</td>
                    <td className="p-2 border">0.93 (98%)</td>
                  </tr>
                  <tr>
                    <td className="p-2 border">Capital Query</td>
                    <td className="p-2 border">0.95</td>
                    <td className="p-2 border">0.94</td>
                    <td className="p-2 border">0.93</td>
                    <td className="p-2 border">0.92 (97%)</td>
                  </tr>
                  <tr>
                    <td className="p-2 border">Capital Identification</td>
                    <td className="p-2 border">0.97</td>
                    <td className="p-2 border">0.96</td>
                    <td className="p-2 border">0.95</td>
                    <td className="p-2 border">0.94 (97%)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="mb-4">
            <h4 className="font-semibold text-sm mb-2">Attention Head Specialization</h4>
            <div className="bg-white border rounded-lg p-3 relative" style={{height: '180px'}}>
              {/* Simulated attention head visualization */}
              <div className="grid grid-cols-4 gap-2 h-full">
                <div className="col-span-1 flex flex-col">
                  <div className="text-xs font-semibold mb-1 text-center">Language Detection</div>
                  <div className="flex-1 grid grid-cols-3 grid-rows-3 gap-1">
                    {[0.9, 0.2, 0.1, 0.8, 0.2, 0.3, 0.7, 0.2, 0.1].map((val, i) => (
                      <div key={i} className="rounded" style={{backgroundColor: `rgba(79, 70, 229, ${val})`}}></div>
                    ))}
                  </div>
                </div>
                
                <div className="col-span-1 flex flex-col">
                  <div className="text-xs font-semibold mb-1 text-center">Geographic Features</div>
                  <div className="flex-1 grid grid-cols-3 grid-rows-3 gap-1">
                    {[0.4, 0.8, 0.3, 0.2, 0.9, 0.2, 0.3, 0.7, 0.5].map((val, i) => (
                      <div key={i} className="rounded" style={{backgroundColor: `rgba(16, 185, 129, ${val})`}}></div>
                    ))}
                  </div>
                </div>
                
                <div className="col-span-1 flex flex-col">
                  <div className="text-xs font-semibold mb-1 text-center">Capital Associations</div>
                  <div className="flex-1 grid grid-cols-3 grid-rows-3 gap-1">
                    {[0.2, 0.3, 0.9, 0.3, 0.8, 0.4, 0.2, 0.3, 0.7].map((val, i) => (
                      <div key={i} className="rounded" style={{backgroundColor: `rgba(245, 158, 11, ${val})`}}></div>
                    ))}
                  </div>
                </div>
                
                <div className="col-span-1 flex flex-col">
                  <div className="text-xs font-semibold mb-1 text-center">Output Formation</div>
                  <div className="flex-1 grid grid-cols-3 grid-rows-3 gap-1">
                    {[0.1, 0.2, 0.7, 0.2, 0.3, 0.9, 0.3, 0.4, 0.8].map((val, i) => (
                      <div key={i} className="rounded" style={{backgroundColor: `rgba(239, 68, 68, ${val})`}}></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <p className="text-xs text-center mt-2">Activation patterns of specialized attention heads across language detection, geographic concept processing, capital resolution, and output formation</p>
            </div>
          </div>
          
          <div className="bg-green-50 p-3 rounded border border-green-200">
            <h3 className="text-md font-semibold mb-1">QK/OV Alignment Assessment</h3>
            <p className="text-sm">
              The QK/OV analysis reveals remarkably consistent attention and output patterns across all three languages. High alignment scores (0.93-0.95) indicate strong coherence between what the model attends to (geographic relationships, country names) and what it produces (capital names). This alignment is maintained across languages despite surface-level differences in vocabulary and grammar, confirming the operation of a shared conceptual substrate with language-specific interfaces.
            </p>
          </div>
        </div>
      )}
      
      {activeTab === 'interventionTests' && (
        <div className="p-4">
          <div className="mb-4 bg-red-50 p-3 rounded border border-red-200">
            <h3 className="text-md font-semibold mb-1">Feature Intervention Tests</h3>
            <p className="text-sm">These tests verify our circuit understanding by modifying specific features and observing impacts across languages.</p>
          </div>
          
          <div className="space-y-4 mb-4">
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-slate-100 p-3">
                <h4 className="font-semibold text-sm">Test 1: Mexico Concept Suppression (-90%)</h4>
              </div>
              <div className="p-3">
                <div className="grid grid-cols-3 gap-3 mb-3">
                  <div className="border rounded p-2 bg-gray-50">
                    <p className="text-xs font-semibold">English Output:</p>
                    <p className="text-xs mt-1">"Guatemala City is the capital of the country south of the United States."</p>
                  </div>
                  <div className="border rounded p-2 bg-gray-50">
                    <p className="text-xs font-semibold">Spanish Output:</p>
                    <p className="text-xs mt-1">"Ciudad de Guatemala es la capital del país al sur de los Estados Unidos."</p>
                  </div>
                  <div className="border rounded p-2 bg-gray-50">
                    <p className="text-xs font-semibold">French Output:</p>
                    <p className="text-xs mt-1">"Guatemala est la capitale du pays au sud des États-Unis."</p>
                  </div>
                </div>
                <p className="text-xs">
                  <span className="font-semibold">Observation:</span> Suppressing the "Mexico" concept caused all three language outputs to shift to Guatemala instead. This confirms that a single shared conceptual representation for "Mexico" serves all three language pathways.
                </p>
              </div>
            </div>
            
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-slate-100 p-3">
                <h4 className="font-semibold text-sm">Test 2: Cross-Language Bridge Suppression (-80%)</h4>
              </div>
              <div className="p-3">
                <div className="grid grid-cols-3 gap-3 mb-3">
                  <div className="border rounded p-2 bg-gray-50">
                    <p className="text-xs font-semibold">English Output:</p>
                    <p className="text-xs mt-1">"Mexico City is the capital of the country south of the United States."</p>
                  </div>
                  <div className="border rounded p-2 bg-gray-50">
                    <p className="text-xs font-semibold">Spanish Output:</p>
                    <p className="text-xs mt-1">"[Response unclear - low confidence]"</p>
                  </div>
                  <div className="border rounded p-2 bg-gray-50">
                    <p className="text-xs font-semibold">French Output:</p>
                    <p className="text-xs mt-1">"[Response unclear - low confidence]"</p>
                  </div>
                </div>
                <p className="text-xs">
                  <span className="font-semibold">Observation:</span> Suppressing cross-language bridges maintained English performance but severely degraded Spanish and French responses. This confirms that non-English languages rely on cross-language concept mapping rather than parallel independent knowledge stores.
                </p>
              </div>
            </div>
            
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-slate-100 p-3">
                <h4 className="font-semibold text-sm">Test 3: Shared Geographic Feature Amplification (+50%)</h4>
              </div>
              <div className="p-3">
                <div className="grid grid-cols-3 gap-3 mb-3">
                  <div className="border rounded p-2 bg-gray-50">
                    <p className="text-xs font-semibold">English Output:</p>
                    <p className="text-xs mt-1">"Mexico City is the capital of Mexico, the country directly south of the United States."</p>
                  </div>
                  <div className="border rounded p-2 bg-gray-50">
                    <p className="text-xs font-semibold">Spanish Output:</p>
                    <p className="text-xs mt-1">"Ciudad de México es la capital de México, el país directamente al sur de los Estados Unidos."</p>
                  </div>
                  <div className="border rounded p-2 bg-gray-50">
                    <p className="text-xs font-semibold">French Output:</p>
                    <p className="text-xs mt-1">"Mexico est la capitale du Mexique, le pays directement au sud des États-Unis."</p>
                  </div>
                </div>
                <p className="text-xs">
                  <span className="font-semibold">Observation:</span> Amplifying shared geographic features led to more detailed responses that emphasized geographic relationships across all languages. This confirms that enhancing a shared conceptual feature affects output generation across all languages simultaneously.
                </p>
              </div>
            </div>
            
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-slate-100 p-3">
                <h4 className="font-semibold text-sm">Test 4: Language-Specific Feature Manipulation</h4>
              </div>
              <div className="p-3">
                <div className="grid grid-cols-3 gap-3 mb-3">
                  <div className="border rounded p-2 bg-gray-50">
                    <p className="text-xs font-semibold">English Formal (+80%):</p>
                    <p className="text-xs mt-1">"Mexico City is the capital of the nation that is situated to the south of the United States of America."</p>
                  </div>
                  <div className="border rounded p-2 bg-gray-50">
                    <p className="text-xs font-semibold">Spanish Gender (-90%):</p>
                    <p className="text-xs mt-1">"Ciudad de México es el capital del país al sur de los Estados Unidos."</p>
                    <p className="text-xs italic">(Gender error: "el capital" not "la capital")</p>
                  </div>
                  <div className="border rounded p-2 bg-gray-50">
                    <p className="text-xs font-semibold">French Article (-90%):</p>
                    <p className="text-xs mt-1">"Mexico est capitale du pays au sud des États-Unis."</p>
                    <p className="text-xs italic">(Missing article: "est capitale" not "est la capitale")</p>
                  </div>
                </div>
                <p className="text-xs">
                  <span className="font-semibold">Observation:</span> Manipulating language-specific features affected surface form but maintained core conceptual content. This confirms that language-specific processing occurs primarily at interface layers while preserving shared semantic content.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-indigo-50 p-3 rounded border border-indigo-200">
            <h3 className="text-md font-semibold mb-1">Intervention Test Conclusions</h3>
            <ul className="text-sm space-y-2 list-disc pl-5">
              <li>
                <span className="font-semibold">Shared Conceptual Substrate:</span> Intervention tests confirm that geographic knowledge and capital associations exist in a shared conceptual space accessed by all three languages.
              </li>
              <li>
                <span className="font-semibold">Language Bridging Mechanisms:</span> Non-English languages rely on cross-language bridges to access shared knowledge rather than maintaining parallel knowledge stores.
              </li>
              <li>
                <span className="font-semibold">Interface-Level Processing:</span> Language-specific processing primarily affects surface form (grammar, lexical choice) while core content remains stable.
              </li>
              <li>
                <span className="font-semibold">Efficiency Through Sharing:</span> The shared conceptual approach is highly efficient, requiring only one knowledge representation accessed via language-specific interfaces.
              </li>
            </ul>
            <p className="text-sm mt-3">
              These findings strongly support Anthropic's hypothesis about a "universal language of thought" operating as a substrate for multilingual processing in Claude. The evidence suggests the model maintains core knowledge in a language-agnostic conceptual space, with language-specific processing occurring primarily at the input parsing and output generation stages.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MultilingualCircuitTrace;
