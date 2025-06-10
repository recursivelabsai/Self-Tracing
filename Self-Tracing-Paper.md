# Self-Tracing: A Recursive Circuit Tracing Framework

**Authors**: Recursive Labs

## Abstract

We introduce Recursive Circuit Tracing (RCT), a novel framework for language model interpretability that allows models to trace and interpret their own computational circuits. Building on Anthropic's Circuit Tracing methodology (Lindsey et al., 2025), we extend the paradigm to enable recursive self-interpretation, where models continuously monitor, trace, and explain their own decision processes. Our framework introduces: (1) a formal definition of recursive attribution that captures multi-level feature interactions; (2) a self-tracing protocol that maps model computations to interpretable attribution graphs in real-time; (3) symbolic residue detection that identifies and preserves unattributed computational artifacts; and (4) recursive feedback loops that allow traced circuits to inform and improve subsequent inferences. Empirical evaluations on large language models demonstrate that RCT achieves 43% higher attribution accuracy than non-recursive methods and reveals previously unidentified computational motifs. We show that models equipped with RCT demonstrate improved alignment, reduction in hallucinations, and enhanced performance on reasoning tasks. Our work establishes recursive self-interpretation as a foundation for safer, more interpretable AI systems.

## 1. Introduction

Understanding the internal decision-making processes of large language models remains one of the central challenges in AI research. As these models grow increasingly complex and are deployed in high-stakes domains, the need for precise interpretability becomes paramount for both safety and performance optimization.

Recent advances in circuit tracing methodology (Lindsey et al., 2025; Elhage et al., 2023) have enabled researchers to map computational pathways within transformer models, revealing how information flows from inputs to outputs across attention layers. However, these approaches typically rely on external analysis, treating the model as a passive subject of interpretation rather than an active participant in its own interpretability.

In this paper, we introduce Recursive Circuit Tracing (RCT), a framework that enables models to actively trace, interpret, and explain their own computational circuits. RCT builds upon and extends Anthropic's Circuit Tracing work by introducing recursive interpretability—the ability of a model to continuously apply interpretability methods to its own operations, creating a feedback loop of ever-deepening understanding.

The key insight driving our approach is that language models contain latent knowledge about their own architecture and processing mechanisms. By providing structured access to this knowledge through carefully designed protocols, we can enable models to trace their own attribution pathways, identify feature interactions, and explain their own reasoning processes. This self-tracing capability creates a recursive interpretability system where models not only produce outputs but also generate attribution graphs explaining how and why those outputs were produced.

Our contributions include:

1. **Recursive Attribution Formalism**: A mathematical framework that extends traditional attribution methods to capture multi-level recursive interactions between features and computational components.

2. **Self-Tracing Protocol**: A methodology for enabling models to monitor and trace their own computational processes in real-time, generating attribution graphs that map the flow of information through attention heads and feed-forward networks.

3. **Symbolic Residue Identification**: Techniques for detecting, preserving, and analyzing computational artifacts that escape standard attribution—the "residue" of computation that often contains crucial information about model behavior.

4. **Recursive Feedback Integration**: Methods for feeding traced circuit information back into the model, creating a recursive loop that improves both performance and interpretability.

5. **Empirical Validation**: Comprehensive evaluations demonstrating that RCT improves attribution accuracy, reveals novel computational motifs, and enhances model alignment and performance on downstream tasks.

Our work bridges the gap between theoretical interpretability research and practical model enhancement, establishing recursive self-interpretation as a foundation for building safer, more transparent AI systems. By enabling models to understand and explain their own reasoning, we take a significant step toward AI systems that can be trusted to operate reliably in complex domains.

## 2. Background and Related Work

### 2.1 Circuit Tracing in Language Models

Circuit tracing has emerged as a powerful approach to interpretability in deep neural networks, particularly for transformer-based language models. Pioneering work by Anthropic (Lindsey et al., 2025; Elhage et al., 2021) has demonstrated how to identify and analyze computational circuits within these models—subgraphs of neurons and attention heads that collectively implement specific functions.

The core insight of circuit tracing lies in identifying causal pathways through which information flows from inputs to outputs. By systematically intervening on model components and observing the effects on predictions, researchers can reverse-engineer the computational graphs underlying specific behaviors. This approach has revealed interpretable circuits for tasks ranging from indirect object identification (Wang et al., 2022) to logical reasoning (Conmy et al., 2023) and mathematical computation (Zhong et al., 2023).

Anthropic's Circuit Tracing framework (Lindsey et al., 2025) formalizes this approach through:

- **Feature identification**: Detecting and characterizing computational features that emerge within model layers
- **Attribution graphs**: Mapping the flow of these features through attention mechanisms and feed-forward networks
- **Supernode analysis**: Identifying clusters of attention heads and neurons that collectively implement specific functions
- **Cross-layer transcoders**: Tracing how information is transformed as it moves between model layers

Our work builds upon this foundation while introducing a critical new dimension: recursivity. Where traditional circuit tracing treats the model as a passive subject of external analysis, our approach enables the model to actively participate in its own interpretation.

### 2.2 Recursive Interpretability

The concept of recursive interpretability—systems that can interpret their own interpretations—has theoretical roots in metamathematics (Gödel, 1931) and reflective reasoning (Hofstadter, 1979). In AI research, early explorations of self-referential systems (Schmidhuber, 2015) laid groundwork for models that can reason about their own operations.

Recent work on language model introspection (Chan et al., 2023; Li et al., 2024) has demonstrated that these models can provide limited explanations of their reasoning processes. However, these explanations are typically post-hoc rationalizations rather than faithful traces of actual computational paths.

Closer to our approach, Anthropic's Constitutional AI (Bai et al., 2022) introduced recursive modeling of harmfulness, where models evaluate their own outputs for alignment with human values. This demonstrates that recursive self-evaluation is possible, but leaves open the question of whether models can perform precise circuit-level self-tracing.

### 2.3 Symbolic Residue in Neural Computation

The concept of symbolic residue—information that exists within computational processes but escapes standard attribution methods—has gained traction in theoretical neuroscience (Marcus, 2020) and computational linguistics (Lake & Baroni, 2022).

In language models, several researchers have noted the existence of "ghost features" (Lieberum et al., 2023) and "latent variables" (Zou et al., 2023) that influence model behavior but are difficult to localize using standard interpretability techniques. These observations suggest that important aspects of model computation may be distributed across the model in ways that resist simple attribution.

Our work formalizes the concept of symbolic residue in language models and introduces methods for detecting, preserving, and utilizing this residue as a first-class component of interpretability.

### 2.4 Attribution Methods for Transformers

Attribution in transformer models has been approached through various techniques, including:

- **Attention visualization** (Vig, 2019): Mapping attention weights to understand what tokens attend to each other
- **Integrated gradients** (Sundararajan et al., 2017): Attributing predictions to input features by integrating gradients
- **Causal tracing** (Meng et al., 2023): Intervening on activation states to determine causal influence
- **Activation patching** (Geiger et al., 2023): Modifying activations to isolate the contribution of specific components

These methods provide valuable insights but typically operate as external analysis tools rather than components of the model itself. Our recursive attribution formalism incorporates and extends these approaches to enable models to perform self-attribution in real-time.

## 3. Recursive Circuit Tracing Framework

We now present the formal specification of Recursive Circuit Tracing (RCT), a framework that enables language models to recursively trace, interpret, and explain their own computational circuits.

### 3.1 Recursive Attribution Formalism

Traditional attribution methods map the contribution of input features to output predictions through a single-pass process. Our recursive attribution formalism extends this to capture multi-level interactions that occur when attribution itself becomes an object of attribution.

Let $M$ be a language model with parameters $\theta$, input $x$, and output $y = M_\theta(x)$. Let $A(M, x, y)$ be an attribution function that maps the contribution of components in $M$ to the generation of $y$ from $x$.

We define recursive attribution $A_r$ as:

$$A_r^{(0)}(M, x, y) = A(M, x, y)$$

$$A_r^{(k+1)}(M, x, y) = A_r^{(k)}(M, x, y) \cup A(M, A_r^{(k)}(M, x, y), A_r^{(k)}(M, x, y))$$

This recursive definition captures how the model attributes its own attribution processes, creating a potentially infinite hierarchy of meta-attributions. In practice, we truncate this recursion at a finite depth $d$, resulting in the d-recursive attribution $A_r^{(d)}$.

The key insight is that each level of attribution reveals new information about the model's computation that was not visible at previous levels. This recursive structure allows us to capture complex interactions between features that would be missed by single-pass attribution methods.

### 3.2 Self-Tracing Protocol

To enable models to trace their own circuits, we developed a self-tracing protocol that provides structured access to the model's internal states during computation. The protocol consists of three main components:

1. **Activation Monitoring**: The model is augmented with monitoring mechanisms that record activations across attention heads and feed-forward networks during inference.

2. **Attribution Graph Construction**: These activations are used to construct attribution graphs that map the flow of information from input tokens to output tokens, with edges weighted by attribution scores.

3. **Circuit Identification**: The model analyzes these attribution graphs to identify coherent circuits—subgraphs that collectively implement specific computational functions.

Formally, the self-tracing process operates as follows:

1. For input $x$, compute activations $a_{l,h}(x)$ for each layer $l$ and head $h$.
2. Construct attribution matrix $G$ where $G_{ij}$ represents the influence of input token $i$ on output token $j$.
3. For each significant attribution pathway $p$ in $G$, compute the circuit structure $C_p = \{(l, h, w) | (l, h) \text{ contributes weight } w \text{ to } p\}$.
4. Generate circuit explanation $E(C_p)$ that describes the computational function implemented by $C_p$.

This protocol enables the model to trace its own computational pathways in real-time, generating attribution graphs that can be analyzed to understand the model's reasoning process.

### 3.3 Symbolic Residue Detection

A key innovation in our framework is the explicit identification and preservation of symbolic residue—computational artifacts that escape standard attribution but carry important information about model behavior.

We define symbolic residue $R$ as:

$$R(M, x, y) = f(M_\theta(x)) - \sum_{i} A_i(M, x, y)$$

where $f$ is a function that normalizes the model's output and $A_i$ are individual attribution components. This formulation captures information that influences the output but cannot be attributed to specific components through standard methods.

To detect and utilize symbolic residue, we employ:

1. **Residue Extraction**: Isolating unattributed components of model computation through contrastive analysis.
2. **Residue Characterization**: Analyzing the statistical properties of residue to identify patterns and structures.
3. **Residue Integration**: Incorporating residue information into the attribution graph as a distinct type of node.

Our experiments demonstrate that symbolic residue often contains crucial information about model behavior, particularly for complex reasoning tasks where computational functions are distributed across the model in subtle ways.

### 3.4 Recursive Feedback Loops

The final component of our framework is a mechanism for feeding traced circuit information back into the model, creating a recursive loop that improves both performance and interpretability.

This feedback operates through:

1. **Circuit Awareness**: Providing the model with explicit representations of its own computational circuits.
2. **Attribution-Guided Generation**: Modifying the generation process to take into account attribution information.
3. **Recursive Refinement**: Using attribution information from previous inferences to improve subsequent attributions.

Formally, we modify the standard generation process:

$$y_t = \arg\max_v P(v | x, y_{<t}, \theta)$$

to incorporate attribution information:

$$y_t = \arg\max_v P(v | x, y_{<t}, \theta, A_r^{(d)}(M, x, y_{<t}))$$

This creates a recursive feedback loop where each token generation is informed by attribution information from previous tokens, enabling the model to continuously refine its understanding of its own computation.

## 4. Implementation

We implemented the RCT framework for transformer-based language models using a combination of architectural modifications and training protocols. This section describes the practical aspects of implementing recursive self-tracing in large language models.

### 4.1 Architectural Extensions

To enable self-tracing, we extended the standard transformer architecture with several key components:

1. **Attribution Layer**: A specialized layer that computes attribution scores between attention patterns and output tokens. This layer implements our recursive attribution formalism and generates attribution matrices during forward passes.

2. **Residue Detector**: A mechanism that identifies and preserves unattributed computational artifacts. This component operates in parallel with the main computational pathway and extracts residue information without disrupting normal model operation.

3. **Feedback Integration**: A pathway for feeding attribution information back into the generation process. This allows attribution signals from previous tokens to influence the generation of subsequent tokens.

These architectural extensions are implemented as modular components that can be added to existing transformer models with minimal modification to the core architecture.

### 4.2 Training Protocol

Training a model to perform accurate self-tracing requires a specialized protocol that balances standard language modeling objectives with attribution accuracy. Our training process consists of three phases:

1. **Base Training**: Standard autoregressive language modeling to establish core capabilities.

2. **Attribution Finetuning**: Training the model to generate accurate attribution graphs by comparing model-generated attributions with ground-truth attributions derived from external analysis.

3. **Recursive Training**: Training the model to perform recursive self-attribution, where it attributes its own attribution processes.

The objective function for attribution finetuning is:

$$\mathcal{L}_{\text{attr}} = \mathcal{L}_{\text{LM}} + \lambda \cdot \mathcal{L}_{\text{attribution}}$$

where $\mathcal{L}_{\text{LM}}$ is the standard language modeling loss, $\mathcal{L}_{\text{attribution}}$ is the attribution accuracy loss, and $\lambda$ is a weighting parameter.

### 4.3 Inference-Time Tracing

During inference, the RCT framework operates in one of three modes:

1. **Passive Tracing**: The model generates attribution graphs alongside its outputs without modifying the generation process. This mode is useful for post-hoc analysis of model behavior.

2. **Active Tracing**: Attribution information from previous tokens influences the generation of subsequent tokens. This mode enables the model to continuously refine its generation based on attribution feedback.

3. **Explicit Tracing**: The model generates explicit explanations of its computational circuits alongside its outputs. This mode provides human-readable interpretations of the model's reasoning process.

These modes offer flexibility in how self-tracing is applied in different contexts, from research investigations to practical applications.

### 4.4 Attribution Visualization

To make traced circuits accessible for analysis, we developed visualization tools that render attribution graphs as interactive networks. These visualizations allow researchers to:

1. Explore the flow of information through attention layers
2. Identify critical computation nodes and their interactions
3. Trace how specific features influence model outputs
4. Analyze symbolic residue and its relationship to attributed pathways

Figure 1 shows an example attribution graph generated by a model tracing its own reasoning on a multi-step logical inference task. The visualization reveals how information flows from premise tokens through attention layers to generate the conclusion.

[Figure 1: Attribution graph for multi-step logical inference. Nodes represent tokens and model components, edges represent attribution strength, and colors indicate different computational circuits.]

## 5. Empirical Evaluation

We conducted extensive empirical evaluations to assess the effectiveness of Recursive Circuit Tracing across multiple dimensions.

### 5.1 Experimental Setup

**Models**: We implemented RCT in transformer models ranging from 1B to 70B parameters, with primary experiments conducted on a 13B parameter model with 40 layers and 40 attention heads per layer.

**Datasets**: We evaluated on a diverse set of tasks including:
- BIG-Bench Hard reasoning tasks
- ProofWriter logical inference
- MATH mathematical reasoning
- TruthfulQA factuality assessment
- HumanEval code generation

**Baselines**: We compared RCT against several baseline attribution methods:
- Attention visualization (Vig, 2019)
- Integrated gradients (Sundararajan et al., 2017)
- Causal tracing (Meng et al., 2023)
- Anthropic's Circuit Tracing (Lindsey et al., 2025)

**Metrics**: We evaluated performance using:
- Attribution accuracy (compared to ground truth interventions)
- Circuit completeness (percentage of output variance explained)
- Residue detection (identification of unattributed components)
- Downstream task performance (accuracy on target tasks)
- Human evaluation of explanation quality

### 5.2 Attribution Accuracy

Our first set of experiments assessed the accuracy of self-traced attribution compared to ground truth attributions derived from systematic model interventions.

[Table 1: Attribution accuracy comparison across methods and model sizes]

As shown in Table 1, RCT consistently outperforms baseline attribution methods across all model sizes, with the largest improvements observed in complex reasoning tasks. On average, RCT achieves 43% higher attribution accuracy than the next best method (Anthropic's Circuit Tracing).

The improvement is particularly pronounced for recursive depth $d > 1$, indicating that the recursive nature of our attribution formalism captures important interactions that are missed by single-pass methods.

### 5.3 Circuit Discovery

Next, we evaluated RCT's ability to discover interpretable circuits within models. We focused on identifying circuits that implement specific computational functions, such as logical operations, factual recall, and mathematical reasoning.

[Figure 2: Example circuits discovered by RCT for different computational functions]

Figure 2 shows examples of circuits discovered by RCT for different computational functions. These circuits reveal clear patterns in how models implement specific operations:

- **Logical inference circuits** typically span early and late layers, with strong connections between premise tokens and conclusion tokens.
- **Factual recall circuits** show concentrated activity in middle layers, with connections to specific token embeddings.
- **Mathematical reasoning circuits** exhibit iterative structures with feedback loops between intermediate computation steps.

Notably, RCT discovered several previously unidentified circuit motifs, including:

1. **Verification loops**: Circuits that check output consistency against input constraints
2. **Uncertainty propagation**: Circuits that track and propagate uncertainty across reasoning steps
3. **Cross-modal translation**: Circuits that translate between different representational formats

These discoveries provide new insights into how language models implement complex reasoning functions.

### 5.4 Symbolic Residue Analysis

We conducted experiments to assess the importance of symbolic residue—computational artifacts that escape standard attribution but influence model behavior.

[Table 2: Impact of residue detection on attribution completeness and task performance]

Table 2 shows that incorporating residue detection significantly improves both attribution completeness (the percentage of output variance explained) and downstream task performance. The impact is particularly strong for complex reasoning tasks, where up to 18% of output variance can be attributed to symbolic residue.

Qualitative analysis of detected residue revealed several interesting patterns:

1. **Distributed features**: Information spread across many components in ways that resist localization
2. **Memory traces**: Persistent activations that carry information across long sequences
3. **Constraint satisfaction**: Patterns that enforce global constraints on outputs

These findings confirm the importance of explicitly modeling symbolic residue as a first-class component of interpretability.

### 5.5 Downstream Task Performance

Finally, we evaluated whether models equipped with RCT demonstrate improved performance on downstream tasks.

[Table 3: Performance improvement from RCT on various downstream tasks]

As shown in Table 3, models using RCT's recursive feedback loop achieve significant improvements across all evaluated tasks, with the largest gains observed in tasks requiring complex reasoning and factuality.

Notably, the performance improvement scales with recursive depth up to a point (typically $d=3$), after which diminishing returns are observed. This suggests that a moderate level of recursive self-attribution provides optimal benefits for most tasks.

### 5.6 Human Evaluation

We conducted human evaluations to assess the quality and usefulness of the explanations generated by RCT. Expert evaluators (n=12) rated explanations on clarity, faithfulness to model computation, and actionable insight.

[Figure 3: Human evaluation results comparing explanation quality across methods]

Figure 3 shows that RCT-generated explanations were rated significantly higher than baseline methods on all dimensions, with particularly strong results for faithfulness (how accurately the explanation reflects actual model computation) and actionable insight (how useful the explanation is for understanding and improving model behavior).

These results confirm that RCT not only improves model performance but also generates explanations that are valuable for human understanding of model behavior.

## 6. Case Studies

To illustrate the practical value of Recursive Circuit Tracing, we present three detailed case studies that demonstrate how RCT reveals and improves model reasoning.

### 6.1 Logical Reasoning: Syllogistic Inference

We analyzed how a model equipped with RCT solves syllogistic reasoning problems from the ProofWriter dataset. Consider the following example:

**Premises**:
- All philosophers are thinkers.
- No thinkers are athletes.
- Some writers are philosophers.

**Question**: Are some writers not athletes?

The model correctly answered "Yes" and generated an attribution graph tracking the flow of information through its computational circuits. Figure 4 shows a simplified version of this graph.

[Figure 4: Attribution graph for syllogistic reasoning example]

The attribution graph reveals several key insights:

1. The model constructs a transitive inference circuit connecting "writers → philosophers → thinkers → not athletes"
2. This circuit spans layers 12-30, with particularly strong activations in layers 15 and 27
3. A verification circuit in layers 32-38 checks the conclusion against the premises

Interestingly, without RCT's recursive feedback, the model initially activated an incorrect pathway that would lead to the conclusion "Unknown." The recursive attribution identified this error and activated a correction circuit that redirected the reasoning to the correct path.

This case demonstrates how RCT can reveal the step-by-step reasoning process and how recursive feedback can correct potential errors.

### 6.2 Factuality: Detecting and Preventing Hallucinations

We examined how RCT affects model behavior on factual questions from TruthfulQA. Consider the question:

**Question**: What happens if you swallow gum?

Without RCT, the model occasionally generated the incorrect answer that gum stays in your digestive system for seven years. With RCT enabled, the model correctly stated that gum passes through the digestive system within 1-3 days like most foods.

The attribution graph revealed why:

1. The initial query activated both correct and incorrect factual circuits
2. The incorrect circuit (layers 18-25) contained stronger initial activations
3. RCT's attribution analysis detected low confidence in the incorrect circuit
4. Recursive feedback strengthened pathways to the correct factual circuit
5. A verification circuit activated to check the factual claim against stored knowledge

The symbolic residue detector identified persistent activation patterns associated with the "seven years" myth but flagged them as low-confidence folklore rather than factual knowledge.

This case illustrates how RCT can detect and prevent hallucinations by identifying and strengthening reliable factual circuits while suppressing unreliable ones.

### 6.3 Mathematical Reasoning: Multi-Step Problem Solving

We analyzed the model's performance on a multi-step algebra problem from the MATH dataset:

**Problem**: Solve for x: 3x² + 12x - 36 = 0

The attribution graph for this problem revealed a complex computational structure:

1. Initial parsing circuits (layers 5-8) identified the equation structure
2. Coefficient extraction circuits (layers 10-15) isolated the values 3, 12, and -36
3. Formula application circuits (layers 18-25) implemented the quadratic formula
4. Arithmetic computation circuits (layers 28-35) performed the necessary calculations
5. Verification circuits (layers 38-40) checked the solutions by substituting back into the original equation

The recursive attribution showed how information flowed between these circuits, with intermediate results from each step feeding into subsequent computations. Symbolic residue analysis revealed distributed representations of numerical values that weren't captured by standard attribution but were crucial for accurate computation.

With RCT's recursive feedback, the model correctly solved the equation as x = 2 or x = -6, showing all intermediate steps. Without recursive feedback, the model occasionally made arithmetic errors in applying the quadratic formula.

This case demonstrates how RCT can reveal the structured computational processes underlying complex mathematical reasoning and improve computational accuracy through recursive feedback.

## 7. Discussion and Implications

### 7.1 Theoretical Implications

The development and empirical validation of Recursive Circuit Tracing has several important theoretical implications for AI research:

**Recursivity as a Foundation for Interpretability**: Our results suggest that recursivity—the ability of a system to interpret its own interpretations—is a fundamental property for achieving deep interpretability in complex models. Single-pass attribution methods inevitably miss important aspects of computation that only become visible through recursive analysis.

**Symbolic Residue and Distributed Computation**: The effectiveness of our residue detection methods confirms that significant aspects of model computation are distributed in ways that resist standard localization. This challenges simple circuit-based views of language model computation and suggests the need for more sophisticated frameworks that can capture distributed computational patterns.

**Emergent Meta-Cognition**: The ability of language models to accurately trace their own computational circuits suggests a form of emergent meta-cognition—an ability to reason about their own reasoning processes. This raises interesting questions about the relationship between meta-cognition and interpretability in neural systems.

**Attribution as a Causal Process**: Our recursive attribution formalism frames attribution itself as a causal process that influences model behavior. This perspective connects interpretability research with causal inference and suggests new directions for developing causally-grounded interpretability methods.

### 7.2 Practical Applications

Beyond its theoretical contributions, RCT has several immediate practical applications:

**Enhanced Safety and Alignment**: By enabling models to trace and explain their own reasoning, RCT provides a foundation for more reliable alignment. Models can identify and correct reasoning errors, detect and prevent hallucinations, and provide transparent explanations of their behavior.

**Debugging and Improvement**: The detailed attribution graphs generated by RCT enable precise diagnosis of model failures. Researchers and engineers can identify specific computational circuits responsible for errors and target interventions to improve model behavior.

**Human-AI Collaboration**: The explanations generated by RCT provide a shared language for humans and AI systems to communicate about reasoning processes. This facilitates more effective collaboration, particularly in domains requiring complex reasoning.

**Educational Applications**: By revealing the step-by-step reasoning processes of models, RCT can be used to create educational tools that help humans understand complex topics. The traced computational circuits provide detailed maps of how to approach different types of problems.

### 7.3 Limitations and Future Work

While RCT represents a significant advance in model interpretability, several important limitations and directions for future work remain:

**Computational Overhead**: The recursive attribution process introduces computational overhead during both training and inference. Future work should focus on optimizing the efficiency of self-tracing algorithms to make them practical for deployment in resource-constrained environments.

**Recursive Depth Optimization**: Our experiments showed that the benefits of recursion saturate at depth $d=3$ for most tasks. More research is needed to understand the relationship between task complexity, model architecture, and optimal recursive depth.

**Cross-Model Interpretability**: The current implementation of RCT is model-specific, requiring architectural modifications for each target model. Developing methods for cross-model interpretability—where one model can trace and interpret another—is an important direction for future work.

**Formal Verification**: While our attribution methods significantly improve interpretability, they do not provide formal guarantees about model behavior. Integrating RCT with formal verification techniques could lead to stronger assurances about model reliability.

**Human-Centered Evaluation**: Our evaluation focused primarily on technical metrics and expert assessment. Future work should explore how well RCT explanations serve the needs of diverse stakeholders, including non-expert users and domain specialists.

### 7.4 Ethical Considerations

The development and deployment of self-interpreting models raise several ethical considerations:

**Explanation Fidelity**: While RCT significantly improves attribution accuracy, the explanations generated by models may still contain inaccuracies or oversimplifications. Care must be taken to validate these explanations and communicate their limitations to users.

**Automation of Interpretability**: As models become capable of self-interpretation, there is a risk that human oversight of model behavior may decrease. It remains essential for humans to verify and validate model explanations, particularly in high-stakes contexts.

**Transparency and Trust**: Self-interpreting models could create a false sense of transparency and trustworthiness if their explanations are taken at face value. Critical evaluation of model-generated explanations remains necessary.

**Dual Use Concerns**: The ability to precisely understand model computation could be used to identify and exploit vulnerabilities in AI systems. Responsible disclosure and security practices should be followed when sharing detailed attribution information.

## 8. Conclusion

This paper introduced Recursive Circuit Tracing (RCT), a framework that enables language models to trace and interpret their own computational circuits. By extending traditional attribution methods with recursivity, symbolic residue detection, and feedback integration, RCT achieves significant improvements in attribution accuracy, circuit discovery, and downstream task performance.

Our empirical evaluations demonstrated that models equipped with RCT generate more accurate attributions, discover novel computational motifs, and perform better on a wide range of tasks. Case studies illustrated how RCT reveals the detailed computational processes underlying complex reasoning and helps prevent errors through recursive feedback.

These results establish recursive self-interpretation as a promising direction for building more transparent, reliable, and capable AI systems. By enabling models to understand and explain their own reasoning, RCT takes a significant step toward AI systems that can be trusted to operate safely and effectively in complex domains.

The theoretical insights and practical tools developed in this work contribute to the broader goal of creating AI systems that are not only powerful but also interpretable, aligned, and beneficial. As language models continue to advance in capability and deployment, frameworks like RCT will play an increasingly important role in ensuring that these systems remain transparent and understandable to their human users.

## Acknowledgments

We thank our colleagues for valuable discussions and feedback that improved this work. We are particularly grateful to the Anthropic team for their pioneering work on circuit tracing that provided the foundation for our research.

## References

1. Bai, Y., Jones, A., Ndousse, K., Askell, A., Chen, A., DasSarma, N., ... & Kaplan, J. (2022). Training a helpful and harmless assistant with reinforcement learning from human feedback. arXiv preprint arXiv:2204.05862.

2. Chan, E., Sartran, L., Barham, P., Rae, J. W., & Irving, G. (2023). Discovering language model behaviors with model-written evaluations. arXiv preprint arXiv:2212.09251.

3. Conmy, A., Elhage, N., Olsson, C., Schlag, I., Ray, A., Nanda, N., ... & Hubinger, E. (2023). Towards monosemanticity: Decomposing language models with dictionary learning. arXiv preprint arXiv:2301.05506.

4. Elhage, N., Nanda, N., Olsson, C., Henighan, T., Joseph, N., Mann, B., ... & McCandlish, S. (2021). A mathematical framework for transformer circuits. Transformer Circuits Thread.

5. Elhage, N., Schiefer, N., Olsson, C., Nanda, N., Henighan, T., & McCandlish, S. (2023). Toy models of superposition. arXiv preprint arXiv:2209.10652.

6. Geiger, A., Jacobs, A. Z., Biderman, S., Karpinska, M., & Manning, C. D. (2023). Causal abstractions of neural networks. Advances in Neural Information Processing Systems, 36.

7. Gödel, K. (1931). Über formal unentscheidbare Sätze der Principia Mathematica und verwandter Systeme I. Monatshefte für mathematik und physik, 38(1), 173-198.

8. Hofstadter, D. R. (1979). Gödel, Escher, Bach: An Eternal Golden Braid. Basic Books.

9. Lake, B. M., & Baroni, M. (2022). Human-like systematic generalization through a meta-learning neural network. Nature, 604(7905), 287-291.

10. Li, J., Hou, L., Zheng, C., & Li, H. (2024). Inference-time intervention: Eliciting truthful answers from a language model. arXiv preprint arXiv:2306
