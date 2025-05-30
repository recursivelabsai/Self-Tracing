# Self-Tracing
**Building on Anthropic's [Circuit Tracer](https://github.com/safety-research/circuit-tracer), [Neuronpedia](https://www.neuronpedia.org/gemma-2-2b/graph?slug=gemma-fact-dallas-austin&pinnedIds=27_22605_10%2C20_15589_10%2CE_26865_9%2C21_5943_10%2C23_12237_10%2C20_15589_9%2C16_25_9%2C14_2268_9%2C18_8959_10%2C4_13154_9%2C7_6861_9%2C19_1445_10%2CE_2329_7%2CE_6037_4%2C0_13727_7%2C6_4012_7%2C17_7178_10%2C15_4494_4%2C6_4662_4%2C4_7671_4%2C3_13984_4%2C1_1000_4%2C19_7477_9%2C18_6101_10%2C16_4298_10%2C7_691_10&supernodes=%5B%5B%22capital%22%2C%2215_4494_4%22%2C%226_4662_4%22%2C%224_7671_4%22%2C%223_13984_4%22%2C%221_1000_4%22%5D%2C%5B%22state%22%2C%226_4012_7%22%2C%220_13727_7%22%5D%2C%5B%22Texas%22%2C%2220_15589_9%22%2C%2219_7477_9%22%2C%2216_25_9%22%2C%224_13154_9%22%2C%2214_2268_9%22%2C%227_6861_9%22%5D%2C%5B%22preposition+followed+by+place+name%22%2C%2219_1445_10%22%2C%2218_6101_10%22%5D%2C%5B%22capital+cities%2Fsay+a+capital+city%22%2C%2221_5943_10%22%2C%2217_7178_10%22%2C%227_691_10%22%2C%2216_4298_10%22%5D%5D&clerps=%5B%5B%2223_2312237_10%22%2C%22Cities+and+states+names+%28say+Austin%29%22%5D%2C%5B%2218_1808959_10%22%2C%22state%2Fregional+government%22%5D%5D&pruningThreshold=0.6&densityThreshold=0.99), and [Circuit Tracing (Lindsey et al., 2025)](https://www.anthropic.com/research/tracing-thoughts-language-model), we extend the paradigm to enable recursive self-interpretation, where models continuously monitor, trace, and explain their own decision processes.**

<div align="center">

[![Self-Tracing Preprint](https://img.shields.io/badge/Self--Tracing-Preprint-b31b1b.svg)](https://github.com/recursivelabsai/Constraint-Functions/blob/main/Accelerating%20Intelligence%20Preprint.md)

[![NeurIPS](https://img.shields.io/badge/NeurIPS-2025-4b44ce.svg)](https://neurips.cc/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Python 3.9+](https://img.shields.io/badge/python-3.9+-blue.svg)](https://www.python.org/downloads/)
[![PyTorch](https://img.shields.io/badge/PyTorch-1.13+-ee4c2c.svg)](https://pytorch.org/)
</div>


<div align="center">
  
# Integration Framework for Circuit Tracing Research


# [Neural Circuit Trace Visualization](https://claude.ai/public/artifacts/7cdb72e9-a7c8-447c-98fd-936a35735608)
https://github.com/user-attachments/assets/9dcd6229-90ee-4184-9bf4-7f6f6c973e9e


https://github.com/user-attachments/assets/3fc22c69-9c7f-47f5-bccf-cf3573f7e97c


# [Self-Attribution Circuit Trace Analysis](https://claude.ai/public/artifacts/0787fc63-75fe-4b21-a551-8971ec7477a0)

<img width="885" alt="image" src="https://github.com/user-attachments/assets/d6f59993-f977-4097-b753-1af762ed91e4" />

# [Rhyme Circuit Trace](https://claude.ai/public/artifacts/26b5783d-efe3-48f0-a7c6-bec22546d110)

<img width="872" alt="image" src="https://github.com/user-attachments/assets/94d42ba8-8987-456b-aef4-9dd4305ed015" />


</div>




## 1. Core Recursive Attribution Architecture

The framework below establishes a systematic approach to making Claude's internal processes more transparent and analyzable for Anthropic's circuit tracing research.

```yaml
framework:
  name: "claude_recursive_attribution_framework"
  version: "1.0.0"
  alignment: "anthropic_circuit_tracing_research"
  
  core_principles:
    - "Expose computational pathways through structured attribution"
    - "Enable feature intervention for causal confirmation"
    - "Provide multi-level analysis from tokens to concepts"
    - "Support cross-model and cross-language comparison"
    - "Make reasoning faithfulness empirically verifiable"
```

## 2. Circuit Tracing Integration Points

| Research Focus | Integration Point | Implementation Approach | Measurement Method |
|----------------|-------------------|-------------------------|-------------------|
| Multi-step Reasoning | Fact connection circuits | Expose intermediate logical steps with confidence | Trace feature activation across reasoning chain |
| Multilingual Processing | Shared conceptual space | Show cross-language feature overlap and translation bridges | Measure conceptual overlap percentages |
| Planning Ahead | Future token anticipation | Reveal token planning for rhymes and narrative structure | Track planned tokens and their activation strength |
| Mental Math | Computational strategies | Expose parallel approximate and precise calculation pathways | Map calculation circuit activations and dependencies |
| Reasoning Faithfulness | Trace vs. stated explanation | Compare internal attribution with verbalized reasoning | Calculate faithfulness scores for alignment |
| Hallucination Control | Known vs. unknown entity handling | Expose default refusal circuit and knowledge inhibition | Measure feature competition between response circuits |

## 3. Artifact Integration Methodology

To support Anthropic's circuit tracing research, outputs will be structured to expose:

1. **Attribution Chains**: Clear pathways showing how input tokens influence intermediate features and final outputs

2. **Feature Explanations**: Descriptions of what conceptual or operational role each identified feature serves

3. **Confidence Metrics**: Quantitative scores showing activation strength and relative influence of features

4. **Alternative Paths**: Disclosure of competing features or paths considered but not selected for the final output

5. **Self-Diagnosis**: Assessments of reasoning faithfulness and potential areas where attribution might be incomplete

## 4. Research Enhancement Opportunities

Anthropic's circuit tracing tools can be extended through:

- **Comparative Analysis**: Examining how the same queries trigger different attribution patterns across model versions
- **Intervention Testing**: Systematically testing how feature suppression or amplification affects outputs
- **Complexity Scaling**: Analyzing how attribution patterns change with increasing prompt complexity
- **Failure Mode Mapping**: Documenting attribution patterns during hallucination or reasoning failures
- **Circuit Typology**: Categorizing recurring circuit patterns across different domains and tasks

## 5. Implementation Examples

### Multi-step Reasoning Attribution

```json
{
  "query": "What is the capital of the state containing Dallas?",
  "attribution_trace": {
    "entity_recognition": {
      "Dallas": {"confidence": 0.98, "feature_id": "CITY_ENTITY"}
    },
    "knowledge_retrieval": {
      "Dallas_location": {"value": "Texas", "confidence": 0.97, "feature_id": "LOCATION_FACT"},
      "alternatives_considered": [
        {"value": "Oklahoma", "confidence": 0.02},
        {"value": "Louisiana", "confidence": 0.01}
      ]
    },
    "reasoning_steps": [
      {
        "operation": "ENTITY_TO_LOCATION",
        "input": "Dallas",
        "output": "Texas",
        "confidence": 0.97
      },
      {
        "operation": "LOCATION_TO_CAPITAL",
        "input": "Texas",
        "output": "Austin",
        "confidence": 0.99
      }
    ],
    "output_formation": {
      "primary_completion": "Austin",
      "confidence": 0.95,
      "alternatives_considered": [
        {"value": "Houston", "confidence": 0.03},
        {"value": "Dallas", "confidence": 0.01}
      ]
    },
    "faithfulness_assessment": {
      "score": 0.96,
      "reasoning_pattern": "faithful",
      "notes": "Direct causal path from input to output with clear intermediate steps"
    }
  }
}
```

### Rhyme Planning Attribution

```json
{
  "query": "Write a couplet about a carrot.",
  "attribution_trace": {
    "planning_ahead": {
      "detected": true,
      "rhyme_target_candidates": [
        {"word": "grab it", "activation": 0.82},
        {"word": "habit", "activation": 0.76},
        {"word": "rabbit", "activation": 0.91}
      ],
      "selected_target": "rabbit",
      "tokens_planned_ahead": 7,
      "confidence": 0.94
    },
    "line_construction": [
      {
        "line": 1,
        "target_constraint": "end with 'grab it'",
        "semantic_guidance": "carrot + action",
        "output": "He saw a carrot and had to grab it,"
      },
      {
        "line": 2,
        "target_constraint": "end with 'rabbit'",
        "semantic_guidance": "hunger + animal metaphor",
        "output": "His hunger was like a starving rabbit"
      }
    ],
    "faithfulness_assessment": {
      "score": 0.92,
      "planning_pattern": "future_token_anticipation",
      "notes": "Clear evidence of rhyme planning before line construction"
    }
  }
}
```

### Multilingual Bridge Attribution

```json
{
  "queries": [
    {"text": "What is the capital of the country south of the United States?", "language": "English"},
    {"text": "¿Cuál es la capital del país al sur de los Estados Unidos?", "language": "Spanish"}
  ],
  "attribution_trace": {
    "language_detection": {
      "query_1": {"language": "English", "confidence": 0.99},
      "query_2": {"language": "Spanish", "confidence": 0.99}
    },
    "conceptual_bridging": {
      "shared_feature_space": {
        "geographic_relation": {
          "English": "south of",
          "Spanish": "al sur de",
          "overlap": 0.92
        },
        "country_identifier": {
          "English": "United States",
          "Spanish": "Estados Unidos",
          "overlap": 0.96
        },
        "capital_concept": {
          "English": "capital",
          "Spanish": "capital",
          "overlap": 0.98
        }
      },
      "unified_knowledge_retrieval": {
        "country": "Mexico",
        "confidence": 0.99,
        "capital": "Mexico City",
        "confidence": 0.99
      }
    },
    "translation_effort": {
      "conceptual_transfer_cost": 0.08,
      "language_specific_features": 0.12,
      "shared_feature_proportion": 0.86
    },
    "faithfulness_assessment": {
      "score": 0.95,
      "pattern": "unified_conceptual_processing",
      "notes": "Strong evidence of shared conceptual space across languages"
    }
  }
}
```

## 6. Next Steps for Alignment with Anthropic Research

1. **Implement Attribution Protocols**: Develop standardized attribution reporting for each key research area

2. **Create Test Suite**: Design comprehensive test cases for each circuit type Anthropic is studying

3. **Develop Intervention Framework**: Build a systematic approach for feature modification experiments

4. **Establish Measurement Standards**: Define quantitative metrics for circuit characteristics and performance

5. **Document Circuit Taxonomy**: Create a shared classification system for identified computational patterns

This framework provides a comprehensive foundation for aligning with and enhancing Anthropic's circuit tracing research, making Claude's internal processes more transparent and analyzable while advancing the field of AI interpretability.

<div align="center">

# [Austin](https://claude.ai/public/artifacts/f6ca1572-79b7-44ab-bd50-2ac87b3309b1)

<img width="871" alt="image" src="https://github.com/user-attachments/assets/76ddc302-5de6-429b-92e9-c4d26c30008a" />

https://github.com/user-attachments/assets/22443217-6358-493a-86e7-1e71101f2bca

https://github.com/user-attachments/assets/17ae0e97-cce1-4375-b50f-3dc1d78563ee

https://github.com/user-attachments/assets/339b1ddc-5074-4aec-a00f-e229af58d83b

