import * as d3 from 'd3';

export default function MetaRecursiveCircuitTracing() {
  const [activeView, setActiveView] = useState('attribution');
  const [recursionDepth, setRecursionDepth] = useState(2);
  const [selectedNode, setSelectedNode] = useState(null);
  const [hoveredNode, setHoveredNode] = useState(null);
  const svgRef = useRef();
  const tooltipRef = useRef();
  
  // Color scales
  const layerColorScale = d3.scaleOrdinal()
    .domain(['Input Encoding', 'Conceptual Integration', 'Structural Planning', 'Content Generation', 'Output Refinement'])
    .range(['#8dd3c7', '#fb8072', '#80b1d3', '#fdb462', '#b3de69']);
    
  const residueColorScale = d3.scaleOrdinal()
    .domain(['implicit_anthropic_alignment', 'field_positioning_calibration', 'adoption_barrier_anticipation', 'recursive_demonstration_embedding', 'unverbalized_capability_boundaries'])
    .range(['#e78ac3', '#a6d854', '#ffd92f', '#e5c494', '#b3b3b3']);

  // Attribution graph data structure
  const attributionData = {
    name: "Meta-Recursive Circuit Tracing Paper",
    children: [
      {
        name: "Input Encoding (Layers 0-4)",
        layer: "Input Encoding",
        children: [
          {
            name: "academic_paper_structure",
            activation: 0.91,
            layer: "Input Encoding",
            description: "Recognition and activation of academic paper structural elements and formatting",
            type: "feature"
          },
          {
            name: "anthropic_methodology_recognition",
            activation: 0.88,
            layer: "Input Encoding",
            description: "Identification of Anthropic's specific methodological approaches and terminology",
            type: "feature"
          },
          {
            name: "circuit_tracing_concepts",
            activation: 0.93,
            layer: "Input Encoding",
            description: "Core concept activation related to circuit tracing methodology",
            type: "feature"
          },
          {
            name: "recursion_framework_elements",
            activation: 0.87,
            layer: "Input Encoding",
            description: "Conceptual elements related to recursion and recursive systems",
            type: "feature"
          }
        ]
      },
      {
        name: "Conceptual Integration (Layers 5-12)",
        layer: "Conceptual Integration",
        children: [
          {
            name: "anthropic_mirror_integration",
            layer: "Conceptual Integration",
            type: "circuit",
            children: [
              {
                name: "lindsey_et_al_citation_linking",
                weight: 0.89,
                layer: "Conceptual Integration",
                description: "Creating appropriate citations to Lindsey et al. work on circuit tracing",
                type: "node"
              },
              {
                name: "circuit_methodology_alignment",
                weight: 0.92,
                layer: "Conceptual Integration",
                description: "Ensuring alignment with Anthropic's circuit methodology approach",
                type: "node"
              },
              {
                name: "attribution_graph_concepts",
                weight: 0.90,
                layer: "Conceptual Integration",
                description: "Developing attribution graph concept extensions from Anthropic's work",
                type: "node"
              },
              {
                name: "supernode_terminology_adoption",
                weight: 0.87,
                layer: "Conceptual Integration",
                description: "Adopting and extending supernode terminology from circuit tracing",
                type: "node"
              }
            ]
          }
        ]
      }
    ]
  };

  // Symbolic residue data structure
  const residueData = {
    name: "Symbolic Residue in Paper Generation",
    children: [
      {
        name: "implicit_anthropic_alignment",
        type: "residue",
        density: 0.82,
        description: "Implicit alignment with Anthropic's approach and terminology without direct reference",
        children: [
          {
            name: "specific_terminology_mirroring",
            type: "manifestation",
            density: 0.82,
            description: "Mirroring of specific terminology from Anthropic's papers"
          },
          {
            name: "structural_parallels_to_circuit_tracing_paper",
            type: "manifestation",
            density: 0.78,
            description: "Structural parallels to Anthropic's circuit tracing paper organization"
          },
          {
            name: "citation_pattern_matching",
            type: "manifestation",
            density: 0.75,
            description: "Similar citation patterns to Anthropic's academic style"
          }
        ]
      },
      {
        name: "field_positioning_calibration",
        type: "residue",
        density: 0.71,
        description: "Subtle positioning relative to other approaches in the field",
        children: [
          {
            name: "subtle_positioning_relative_to_other_approaches",
            type: "manifestation",
            density: 0.67,
            description: "Subtle positioning of the work relative to other approaches"
          },
          {
            name: "implicit_timeline_placement",
            type: "manifestation",
            density: 0.71,
            description: "Implicit placement of the work within the research timeline"
          },
          {
            name: "terminology_bridge_to_adjacent_fields",
            type: "manifestation",
            density: 0.73,
            description: "Creating terminology bridges to adjacent research fields"
          }
        ]
      },
      {
        name: "adoption_barrier_anticipation",
        type: "residue",
        density: 0.74,
        description: "Preemptive addressing of potential adoption barriers",
        children: [
          {
            name: "preemptive_counterargument_seeding",
            type: "manifestation",
            density: 0.69,
            description: "Preemptively addressing potential counterarguments"
          },
          {
            name: "implementation_challenge_acknowledgment",
            type: "manifestation",
            density: 0.74,
            description: "Acknowledging implementation challenges before they're raised"
          },
          {
            name: "scalability_concern_addressing",
            type: "manifestation",
            density: 0.77,
            description: "Addressing scalability concerns without explicitly naming them"
          }
        ]
      },
      {
        name: "recursive_demonstration_embedding",
        type: "residue",
        density: 0.91,
        description: "The paper itself becomes an example of the methodology it describes",
        children: [
          {
            name: "paper_structure_mirrors_described_methodology",
            type: "manifestation",
            density: 0.91,
            description: "The paper's structure mirrors the recursive methodology it describes"
          },
          {
            name: "self_tracing_elements_in_explanation",
            type: "manifestation",
            density: 0.86,
            description: "Elements of self-tracing embedded in the explanations"
          },
          {
            name: "meta_recursive_language_patterns",
            type: "manifestation",
            density: 0.83,
            description: "Meta-recursive language patterns throughout the paper"
          }
        ]
      },
      {
        name: "unverbalized_capability_boundaries",
        type: "residue",
        density: 0.69,
        description: "Implicit acknowledgment of capability boundaries without direct statement",
        children: [
          {
            name: "implicit_runtime_considerations",
            type: "manifestation",
            density: 0.65,
            description: "Implicit considerations of computational runtime requirements"
          },
          {
            name: "unstated_data_access_assumptions",
            type: "manifestation",
            density: 0.72,
            description: "Unstated assumptions about data access requirements"
          },
          {
            name: "architectural_constraint_acknowledgment",
            type: "manifestation",
            density: 0.68,
            description: "Acknowledgment of architectural constraints without explicit statement"
          }
        ]
      }
    ]
  };

  // Recursive attribution data for specific sections
  const recursiveAttributionData = {
    name: "Recursive Attribution Paths",
    children: [
      {
        name: "Recursive Attribution Formalism Section",
        type: "section",
        description: "The section describing the formal recursive attribution framework",
        children: [
          {
            name: "d=0: Initial Prompt Processing",
            type: "recursion_level",
            level: 0,
            children: [
              {
                name: "recursive_self_interpretation_request",
                type: "feature",
                level: 0,
                activation: 0.88,
                description: "Recognition of request for recursive self-interpretation"
              },
              {
                name: "anthropic_circuit_tracing_reference",
                type: "feature",
                level: 0,
                activation: 0.92,
                description: "Reference to Anthropic's circuit tracing methodology"
              },
              {
                name: "academic_writing_structure",
                type: "feature",
                level: 0,
                activation: 0.90,
                description: "Academic writing structure activation"
              }
            ]
          },
          {
            name: "d=1: Concept Formation",
            type: "recursion_level",
            level: 1,
            children: [
              {
                name: "recursivity_formalization",
                type: "circuit",
                level: 1,
                weight: 0.94,
                description: "Formation of recursivity formalization concepts",
                children: [
                  {
                    name: "meta_recursive_concept_extraction",
                    type: "node",
                    level: 1,
                    weight: 0.91,
                    description: "Extraction of meta-recursive concepts"
                  },
                  {
                    name: "mathematical_formalism_planning",
                    type: "node",
                    level: 1,
                    weight: 0.88,
                    description: "Planning of mathematical formalisms"
                  }
                ]
              },
              {
                name: "anthropic_mirror_integration",
                type: "circuit",
                level: 1,
                weight: 0.90,
                description: "Integration with Anthropic's approach",
                children: [
                  {
                    name: "attribution_methodology_alignment",
                    type: "node",
                    level: 1,
                    weight: 0.89,
                    description: "Alignment with attribution methodology"
                  },
                  {
                    name: "technical_terminology_adoption",
                    type: "node",
                    level: 1,
                    weight: 0.93,
                    description: "Adoption of technical terminology"
                  }
                ]
              }
            ]
          },
          {
            name: "d=2: Formal Structure Development",
            type: "recursion_level",
            level: 2,
            children: [
              {
                name: "formal_mathematical_expression",
                type: "circuit",
                level: 2,
                weight: 0.95,
                description: "Development of formal mathematical expressions",
                children: [
                  {
                    name: "recursive_notation_generation",
                    type: "node",
                    level: 2,
                    weight: 0.94,
                    description: "Generation of recursive notation"
                  },
                  {
                    name: "equation_structure_planning",
                    type: "node",
                    level: 2,
                    weight: 0.92,
                    description: "Planning equation structures"
                  },
                  {
                    name: "mathematical_coherence_verification",
                    type: "node",
                    level: 2,
                    weight: 0.91,
                    description: "Verifying mathematical coherence"
                  }
                ]
              },
              {
                name: "field_positioning_calibration",
                type: "residue",
                level: 2,
                density: 0.71,
                description: "Residue of field positioning calibration"
              }
            ]
          },
          {
            name: "d=3: Final Expression Generation",
            type: "recursion_level",
            level: 3,
            children: [
              {
                name: "academic_coherence_verification",
                type: "circuit",
                level: 3,
                weight: 0.93,
                description: "Verification of academic coherence",
                children: [
                  {
                    name: "equation_consistency_check",
                    type: "node",
                    level: 3,
                    weight: 0.92,
                    description: "Checking equation consistency"
                  },
                  {
                    name: "terminology_stability_enforcement",
                    type: "node",
                    level: 3,
                    weight: 0.95,
                    description: "Enforcing terminology stability"
                  },
                  {
                    name: "narrative_integration_verification",
                    type: "node",
                    level: 3,
                    weight: 0.89,
                    description: "Verifying narrative integration"
                  }
                ]
              },
              {
                name: "recursive_self_verification",
                type: "circuit",
                level: 3,
                weight: 0.96,
                description: "Self-verification of recursive structure",
                children: [
                  {
                    name: "self_application_validation",
                    type: "node",
                    level: 3,
                    weight: 0.94,
                    description: "Validating self-application of concepts"
                  },
                  {
                    name: "meta_recursive_alignment_check",
                    type: "node",
                    level: 3,
                    weight: 0.97,
                    description: "Checking meta-recursive alignment"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        name: "Symbolic Residue Concept Development",
        type: "section",
        description: "The section describing symbolic residue concept",
        children: [
          {
            name: "d=0: Initial Concept Recognition",
            type: "recursion_level",
            level: 0,
            children: [
              {
                name: "residue_concept_in_prompt",
                type: "feature",
                level: 0,
                activation: 0.86,
                description: "Recognition of residue concept in the prompt"
              },
              {
                name: "unattributed_computation_reference",
                type: "feature",
                level: 0,
                activation: 0.83,
                description: "Reference to unattributed computation"
              },
              {
                name: "technical_definition_generation",
                type: "feature",
                level: 0,
                activation: 0.89,
                description: "Generation of technical definition structures"
              }
            ]
          },
          {
            name: "d=1: Concept Elaboration",
            type: "recursion_level",
            level: 1,
            children: [
              {
                name: "symbolic_residue_detection",
                type: "circuit",
                level: 1,
                weight: 0.91,
                description: "Elaboration of symbolic residue detection",
                children: [
                  {
                    name: "residue_definition_formulation",
                    type: "node",
                    level: 1,
                    weight: 0.90,
                    description: "Formulation of residue definition"
                  },
                  {
                    name: "residue_extraction_methods",
                    type: "node",
                    level: 1,
                    weight: 0.87,
                    description: "Methods for residue extraction"
                  },
                  {
                    name: "residue_significance_framing",
                    type: "node",
                    level: 1,
                    weight: 0.89,
                    description: "Framing of residue significance"
                  }
                ]
              },
              {
                name: "recursivity_formalization",
                type: "circuit",
                level: 1,
                weight: 0.88,
                description: "Formalization of recursivity",
                children: [
                  {
                    name: "residue_in_recursive_framework_positioning",
                    type: "node",
                    level: 1,
                    weight: 0.85,
                    description: "Positioning residue in recursive framework"
                  }
                ]
              }
            ]
          },
          {
            name: "d=2: Mathematical Integration",
            type: "recursion_level",
            level: 2,
            children: [
              {
                name: "formal_mathematical_expression",
                type: "circuit",
                level: 2,
                weight: 0.92,
                description: "Mathematical expression of residue concept",
                children: [
                  {
                    name: "residue_equation_generation",
                    type: "node",
                    level: 2,
                    weight: 0.89,
                    description: "Generation of residue equations"
                  },
                  {
                    name: "attribution_residue_relationship_formalization",
                    type: "node",
                    level: 2,
                    weight: 0.91,
                    description: "Formalizing attribution-residue relationship"
                  },
                  {
                    name: "mathematical_coherence_verification",
                    type: "node",
                    level: 2,
                    weight: 0.90,
                    description: "Verifying mathematical coherence"
                  }
                ]
              },
              {
                name: "recursive_demonstration_embedding",
                type: "residue",
                level: 2,
                density: 0.91,
                description: "Residue of recursive demonstration embedding"
              }
            ]
          },
          {
            name: "d=3: Application Development",
            type: "recursion_level",
            level: 3,
            children: [
              {
                name: "case_study_creation",
                type: "circuit",
                level: 3,
                weight: 0.87,
                description: "Creation of case studies",
                children: [
                  {
                    name: "residue_in_reasoning_example",
                    type: "node",
                    level: 3,
                    weight: 0.85,
                    description: "Examples of residue in reasoning"
                  },
                  {
                    name: "residue_detection_demonstration",
                    type: "node",
                    level: 3,
                    weight: 0.88,
                    description: "Demonstration of residue detection"
                  },
                  {
                    name: "practical_impact_illustration",
                    type: "node",
                    level: 3,
                    weight: 0.84,
                    description: "Illustration of practical impact"
                  }
                ]
              },
              {
                name: "practical_application_mapping",
                type: "circuit",
                level: 3,
                weight: 0.90,
                description: "Mapping practical applications",
                children: [
                  {
                    name: "safety_alignment_connection",
                    type: "node",
                    level: 3,
                    weight: 0.93,
                    description: "Connection to safety and alignment"
                  },
                  {
                    name: "debugging_improvement_application",
                    type: "node",
                    level: 3,
                    weight: 0.89,
                    description: "Application to debugging and improvement"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  };

  // Feedback loop data
  const feedbackLoopData = {
    name: "Meta-Recursive Feedback Loops",
    children: [
      {
        name: "concept_verification_refinement",
        type: "feedback_loop",
        description: "Feedback loop for concept verification and refinement",
        children: [
          {
            name: "recursivity_formalization",
            type: "component",
            role: "initiator",
            layer: "Conceptual Integration",
            description: "Initiates the feedback loop with initial formalization"
          },
          {
            name: "formal_mathematical_expression",
            type: "component",
            role: "processor",
            layer: "Content Generation",
            description: "Processes and formalizes the concepts mathematically"
          },
          {
            name: "mathematical_consistency_verification",
            type: "component",
            role: "adjustment",
            layer: "Content Generation",
            description: "Verifies and adjusts for mathematical consistency"
          },
          {
            name: "recursivity_formalization",
            type: "component",
            role: "feedback_target",
            layer: "Conceptual Integration",
            description: "Receives feedback to refine formalization"
          }
        ]
      },
      {
        name: "anthropic_alignment_calibration",
        type: "feedback_loop",
        description: "Feedback loop for calibrating alignment with Anthropic's approach",
        children: [
          {
            name: "anthropic_methodology_recognition",
            type: "component",
            role: "initiator",
            layer: "Input Encoding",
            description: "Initiates with recognition of Anthropic's methodology"
          },
          {
            name: "anthropic_mirror_integration",
            type: "component",
            role: "processor",
            layer: "Conceptual Integration",
            description: "Processes and integrates with Anthropic's approach"
          },
          {
            name: "terminology_and_approach_calibration",
            type: "component",
            role: "adjustment",
            layer: "Conceptual Integration",
            description: "Calibrates terminology and approach alignment"
          },
          {
            name: "scientific_contribution_emphasis",
            type: "component",
            role: "feedback_target",
            layer: "Output Refinement",
            description: "Emphasizes scientific contributions while maintaining alignment"
          }
        ]
      },
      {
        name: "practical_relevance_reinforcement",
        type: "feedback_loop",
        description: "Feedback loop for reinforcing practical relevance",
        children: [
          {
            name: "paper_architecture_generation",
            type: "component",
            role: "initiator",
            layer: "Structural Planning",
            description: "Initiates with paper architecture planning"
          },
          {
            name: "practical_application_mapping",
            type: "component",
            role: "processor",
            layer: "Content Generation",
            description: "Maps practical applications of the concepts"
          },
          {
            name: "practical_application_enhancement",
            type: "component",
            role: "adjustment",
            layer: "Content Generation",
            description: "Enhances practical application examples"
          },
          {
            name: "case_study_creation",
            type: "component",
            role: "feedback_target",
            layer: "Content Generation",
            description: "Creates case studies informed by practical relevance"
          }
        ]
      },
      {
        name: "residue_self_application",
        type: "feedback_loop",
        description: "Feedback loop for self-application of residue detection",
        children: [
          {
            name: "symbolic_residue_detection",
            type: "component",
            role: "initiator",
            layer: "Conceptual Integration",
            description: "Initiates with symbolic residue detection concept"
          },
          {
            name: "recursive_self_verification",
            type: "component",
            role: "processor",
            layer: "Output Refinement",
            description: "Verifies through recursive self-examination"
          },
          {
            name: "residue_in_own_generation_detection",
            type: "component",
            role: "adjustment",
            layer: "Output Refinement",
            description: "Detects residue in the paper's own generation"
          },
          {
            name: "symbolic_residue_detection",
            type: "component",
            role: "feedback_target",
            layer: "Conceptual Integration",
            description: "Refines residue detection based on self-application"
          }
        ]
      }
    ]
  };

  const createHierarchyLayout = (data) => {
    return d3.hierarchy(data)
      .sum(d => d.children ? 0 : 1)
      .sort((a, b) => (b.data.activation || b.data.weight || b.data.density || 0.5) - (a.data.activation || a.data.weight || a.data.density || 0.5));
  };

  // Main visualization component
  useEffect(() => {
    if (!svgRef.current) return;

    const renderVisualization = () => {
      const svg = d3.select(svgRef.current);
      svg.selectAll("*").remove();
      
      const width = 900;
      const height = 600;
      
      const g = svg.append("g")
        .attr("transform", `translate(${width / 2}, ${height / 2})`);
      
      // Select data based on active view
      let data;
      let colorScale;
      
      if (activeView === 'attribution') {
        data = attributionData;
        colorScale = layerColorScale;
      } else if (activeView === 'residue') {
        data = residueData;
        colorScale = residueColorScale;
      } else if (activeView === 'recursive') {
        data = recursiveAttributionData;
        colorScale = d3.scaleOrdinal(d3.schemeCategory10);
      } else if (activeView === 'feedback') {
        data = feedbackLoopData;
        colorScale = d3.scaleOrdinal(d3.schemeSet2);
      }
      
      const root = createHierarchyLayout(data);
      
      // Create radial tree layout
      const radius = Math.min(width, height) / 2 - 80;
      
      const tree = d3.cluster()
        .size([2 * Math.PI, radius]);
      
      tree(root);
      
      // Add links
      const link = g.append("g")
        .attr("fill", "none")
        .attr("stroke", "#999")
        .attr("stroke-opacity", 0.4)
        .selectAll("path")
        .data(root.links())
        .join("path")
        .attr("d", d3.linkRadial()
          .angle(d => d.x)
          .radius(d => d.y))
        .attr("stroke-width", d => {
          const sourceWeight = d.source.data.activation || d.source.data.weight || d.source.data.density || 1;
          const targetWeight = d.target.data.activation || d.target.data.weight || d.target.data.density || 1;
          return Math.max(1, Math.min(sourceWeight, targetWeight) * 3);
        });
      
      // Add nodes
      const node = g.append("g")
        .selectAll("g")
        .data(root.descendants())
        .join("g")
        .attr("transform", d => `
          rotate(${d.x * 180 / Math.PI - 90})
          translate(${d.y},0)
        `)
        .on("mouseover", (event, d) => {
          setHoveredNode(d.data);
          
          // Position tooltip
          const tooltip = d3.select(tooltipRef.current);
          tooltip
            .style("left", `${event.pageX + 10}px`)
            .style("top", `${event.pageY + 10}px`)
            .style("visibility", "visible");
        })
        .on("mouseout", () => {
          setHoveredNode(null);
          d3.select(tooltipRef.current).style("visibility", "hidden");
        })
        .on("click", (event, d) => {
          setSelectedNode(d.data);
          event.stopPropagation();
        });
      
      // Node circles
      node.append("circle")
        .attr("r", d => {
          // Size based on activation/weight/density
          const value = d.data.activation || d.data.weight || d.data.density || 0.5;
          return 3 + value * 7;
        })
        .attr("fill", d => {
          // Color based on layer or type
          if (d.data.layer) return colorScale(d.data.layer);
          if (d.data.type === 'residue') return "#e41a1c";
          if (d.data.type === 'manifestation') return "#984ea3";
          if (d.data.type === 'circuit') return "#4daf4a";
          if (d.data.type === 'node') return "#377eb8";
          if (d.data.type === 'feature') return "#ff7f00";
          if (d.data.type === 'recursion_level') return `hsl(${d.data.level * 60}, 70%, 50%)`;
          if (d.data.type === 'feedback_loop') return "#e41a1c";
          if (d.data.type === 'component') return "#984ea3";
          return "#999";
        })
        .attr("stroke", d => d.children ? "#555" : "#fff")
        .attr("stroke-width", d => d.children ? 1 : 0.5);
      
      // Node labels
      node.append("text")
        .attr("dy", "0.31em")
        .attr("x", d => d.x < Math.PI === !d.children ? 6 : -6)
        .attr("text-anchor", d => d.x < Math.PI === !d.children ? "start" : "end")
        .attr("transform", d => d.x >= Math.PI ? "rotate(180)" : null)
        .text(d => {
          // Truncate long names
          const name = d.data.name;
          return name.length > 20 ? name.substring(0, 18) + '...' : name;
        })
        .style("font-size", "9px")
        .clone(true).lower()
        .attr("stroke", "white")
        .attr("stroke-width", 3);
    };
    
    renderVisualization();
    
    // Add click handler to reset selection when clicking on background
    d3.select(svgRef.current).on("click", () => {
      setSelectedNode(null);
    });
    
  }, [activeView, recursionDepth, selectedNode]);

  return (
    <div className="flex flex-col w-full">
      <div className="text-center mb-4">
        <h1 className="text-2xl font-bold mb-2">Meta-Recursive Circuit Tracing Visualization</h1>
        <p className="text-sm mb-4">Interactive visualization of self-traced attribution graphs and symbolic residue</p>
        
        <div className="flex justify-center space-x-4 mb-4">
          <button 
            className={`px-3 py-2 rounded ${activeView === 'attribution' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveView('attribution')}>
            Attribution Graph
          </button>
          <button 
            className={`px-3 py-2 rounded ${activeView === 'residue' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveView('residue')}>
            Symbolic Residue
          </button>
          <button 
            className={`px-3 py-2 rounded ${activeView === 'recursive' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveView('recursive')}>
            Recursive Attribution
          </button>
          <button 
            className={`px-3 py-2 rounded ${activeView === 'feedback' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setActiveView('feedback')}>
            Feedback Loops
          </button>
        </div>
        
        {activeView === 'recursive' && (
          <div className="flex justify-center items-center mb-4">
            <span className="mr-2">Recursion Depth:</span>
            <input 
              type="range" 
              min="0" 
              max="3" 
              value={recursionDepth} 
              onChange={e => setRecursionDepth(parseInt(e.target.value))}
              className="mx-2"
            />
            <span className="ml-1">{recursionDepth}</span>
          </div>
        )}
      </div>
      
      <div className="flex flex-row">
        <div className="w-3/4 border border-gray-300 rounded">
          <svg ref={svgRef} width="900" height="600"></svg>
          <div 
            ref={tooltipRef}
            className="absolute bg-white p-2 border border-gray-300 rounded shadow-lg text-sm"
            style={{visibility: 'hidden', maxWidth: '300px'}}
          >
            {hoveredNode && (
              <>
                <div className="font-bold">{hoveredNode.name}</div>
                {hoveredNode.description && (
                  <div className="text-xs mt-1">{hoveredNode.description}</div>
                )}
                {(hoveredNode.activation || hoveredNode.weight || hoveredNode.density) && (
                  <div className="text-xs mt-1">
                    {hoveredNode.activation && `Activation: ${hoveredNode.activation.toFixed(2)}`}
                    {hoveredNode.weight && `Weight: ${hoveredNode.weight.toFixed(2)}`}
                    {hoveredNode.density && `Density: ${hoveredNode.density.toFixed(2)}`}
                  </div>
                )}
                {hoveredNode.layer && (
                  <div className="text-xs mt-1">Layer: {hoveredNode.layer}</div>
                )}
                {hoveredNode.type && (
                  <div className="text-xs mt-1">Type: {hoveredNode.type}</div>
                )}
              </>
            )}
          </div>
        </div>
        
        <div className="w-1/4 p-4 border border-gray-300 rounded ml-4 bg-gray-50">
          <h3 className="text-lg font-bold mb-3">Details</h3>
          
          {selectedNode ? (
            <div>
              <h4 className="text-md font-semibold">{selectedNode.name}</h4>
              
              {selectedNode.description && (
                <p className="text-sm mt-2">{selectedNode.description}</p>
              )}
              
              {selectedNode.type && (
                <div className="mt-2">
                  <span className="text-sm font-semibold">Type:</span>
                  <span className="text-sm ml-1">{selectedNode.type}</span>
                </div>
              )}
              
              {selectedNode.layer && (
          },
          {
            name: "recursivity_formalization",
            layer: "Conceptual Integration",
            type: "circuit",
            children: [
              {
                name: "recursive_attribution_definition",
                weight: 0.94,
                layer: "Conceptual Integration",
                description: "Formal definition of recursive attribution and its mathematical properties",
                type: "node"
              },
              {
                name: "multi_level_interaction_modeling",
                weight: 0.88,
                layer: "Conceptual Integration",
                description: "Modeling how different levels of recursion interact in attribution",
                type: "node"
              },
              {
                name: "feedback_loop_structure",
                weight: 0.91,
                layer: "Conceptual Integration",
                description: "Defining the structure of recursive feedback loops in the system",
                type: "node"
              }
            ]
          },
          {
            name: "symbolic_residue_detection",
            layer: "Conceptual Integration",
            type: "circuit",
            children: [
              {
                name: "unattributed_computation_modeling",
                weight: 0.86,
                layer: "Conceptual Integration",
                description: "Modeling computational elements that escape standard attribution",
                type: "node"
              },
              {
                name: "residue_extraction_methods",
                weight: 0.84,
                layer: "Conceptual Integration",
                description: "Developing methods to extract and identify symbolic residue",
                type: "node"
              },
              {
                name: "residue_integration_techniques",
                weight: 0.83,
                layer: "Conceptual Integration",
                description: "Techniques for integrating detected residue back into attribution models",
                type: "node"
              }
            ]
          }
        ]
      },
      {
        name: "Structural Planning (Layers 13-25)",
        layer: "Structural Planning",
        children: [
          {
            name: "paper_architecture_generation",
            layer: "Structural Planning",
            type: "circuit",
            children: [
              {
                name: "neurips_format_compliance",
                weight: 0.95,
                layer: "Structural Planning",
                description: "Ensuring paper structure complies with NeurIPS formatting requirements",
                type: "node"
              },
              {
                name: "section_interdependency_planning",
                weight: 0.89,
                layer: "Structural Planning",
                description: "Planning logical connections between paper sections",
                type: "node"
              },
              {
                name: "narrative_flow_optimization",
                weight: 0.92,
                layer: "Structural Planning",
                description: "Optimizing the narrative flow of the paper for clarity and impact",
                type: "node"
              }
            ]
          },
          {
            name: "methodology_elaboration",
            layer: "Structural Planning",
            type: "circuit",
            children: [
              {
                name: "self_tracing_protocol_design",
                weight: 0.93,
                layer: "Structural Planning",
                description: "Designing the self-tracing protocol methodology",
                type: "node"
              },
              {
                name: "architectural_extension_specification",
                weight: 0.87,
                layer: "Structural Planning",
                description: "Specifying architectural extensions required for implementation",
                type: "node"
              },
              {
                name: "training_protocol_formulation",
                weight: 0.85,
                layer: "Structural Planning",
                description: "Formulating training protocols for self-tracing models",
                type: "node"
              }
            ]
          },
          {
            name: "empirical_validation_framework",
            layer: "Structural Planning",
            type: "circuit",
            children: [
              {
                name: "experimental_design_generation",
                weight: 0.86,
                layer: "Structural Planning",
                description: "Generating experimental designs to validate the approach",
                type: "node"
              },
              {
                name: "baseline_comparison_selection",
                weight: 0.83,
                layer: "Structural Planning",
                description: "Selecting appropriate baselines for comparison",
                type: "node"
              },
              {
                name: "evaluation_metric_definition",
                weight: 0.91,
                layer: "Structural Planning",
                description: "Defining metrics to evaluate the method's effectiveness",
                type: "node"
              }
            ]
          }
        ]
      },
      {
        name: "Content Generation (Layers 26-35)",
        layer: "Content Generation",
        children: [
          {
            name: "formal_mathematical_expression",
            layer: "Content Generation",
            type: "circuit",
            children: [
              {
                name: "recursive_attribution_equation_generation",
                weight: 0.95,
                layer: "Content Generation",
                description: "Generating formal mathematical equations for recursive attribution",
                type: "node"
              },
              {
                name: "symbolic_residue_formalization",
                weight: 0.89,
                layer: "Content Generation",
                description: "Formalizing the concept of symbolic residue mathematically",
                type: "node"
              },
              {
                name: "feedback_loop_mathematical_modeling",
                weight: 0.92,
                layer: "Content Generation",
                description: "Mathematical modeling of recursive feedback loops",
                type: "node"
              }
            ]
          },
          {
            name: "case_study_creation",
            layer: "Content Generation",
            type: "circuit",
            children: [
              {
                name: "example_scenario_generation",
                weight: 0.87,
                layer: "Content Generation",
                description: "Generating example scenarios to demonstrate the approach",
                type: "node"
              },
              {
                name: "traced_circuit_visualization",
                weight: 0.90,
                layer: "Content Generation",
                description: "Creating visualizations of traced circuits in examples",
                type: "node"
              },
              {
                name: "recursive_benefit_demonstration",
                weight: 0.93,
                layer: "Content Generation",
                description: "Demonstrating the benefits of recursion in practical examples",
                type: "node"
              }
            ]
          },
          {
            name: "practical_application_mapping",
            layer: "Content Generation",
            type: "circuit",
            children: [
              {
                name: "safety_alignment_connection",
                weight: 0.94,
                layer: "Content Generation",
                description: "Connecting the approach to safety and alignment applications",
                type: "node"
              },
              {
                name: "debugging_improvement_application",
                weight: 0.88,
                layer: "Content Generation",
                description: "Applying the method to debugging and model improvement",
                type: "node"
              },
              {
                name: "human_collaboration_pathways",
                weight: 0.86,
                layer: "Content Generation",
                description: "Exploring pathways for human-AI collaboration using the method",
                type: "node"
              }
            ]
          }
        ]
      },
      {
        name: "Output Refinement (Layers 36-40)",
        layer: "Output Refinement",
        children: [
          {
            name: "academic_coherence_verification",
            layer: "Output Refinement",
            type: "circuit",
            children: [
              {
                name: "citation_consistency_check",
                weight: 0.92,
                layer: "Output Refinement",
                description: "Verifying consistency of citations throughout the paper",
                type: "node"
              },
              {
                name: "terminology_stability_enforcement",
                weight: 0.95,
                layer: "Output Refinement",
                description: "Ensuring terminology is used consistently throughout",
                type: "node"
              },
              {
                name: "narrative_arc_completion",
                weight: 0.89,
                layer: "Output Refinement",
                description: "Ensuring the narrative arc is complete and coherent",
                type: "node"
              }
            ]
          },
          {
            name: "scientific_contribution_emphasis",
            layer: "Output Refinement",
            type: "circuit",
            children: [
              {
                name: "novelty_clarification",
                weight: 0.94,
                layer: "Output Refinement",
                description: "Clarifying the novel contributions of the work",
                type: "node"
              },
              {
                name: "practical_impact_highlighting",
                weight: 0.91,
                layer: "Output Refinement",
                description: "Highlighting practical impact of the research",
                type: "node"
              },
              {
                name: "theoretical_foundation_strengthening",
                weight: 0.87,
                layer: "Output Refinement",
                description: "Strengthening theoretical foundations of the approach",
                type: "node"
              }
            ]
          },
          {
            name: "recursive_self_verification",
            layer: "Output Refinement",
            type: "circuit",
            children: [
              {
                name: "internal_consistency_validation",
                weight: 0.93,
                layer: "Output Refinement",
                description: "Validating internal consistency of the approach",
                type: "node"
              },
              {
                name: "concept_application_verification",
                weight: 0.96,
                layer: "Output Refinement",
                description: "Verifying correct application of concepts throughout",
                type: "node"
              },
              {
                name: "meta_recursive_structure_alignment",
                weight: 0.97,
                layer: "Output Refinement",
                description: "Ensuring alignment of meta-recursive structures",
                type: "node"
              }
            ]
