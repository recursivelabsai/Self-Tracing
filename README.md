# Self-Tracing
**Building on Anthropic's [Circuit Tracer](https://github.com/safety-research/circuit-tracer), [Neuronpedia](https://www.neuronpedia.org/gemma-2-2b/graph?slug=gemma-fact-dallas-austin&pinnedIds=27_22605_10%2C20_15589_10%2CE_26865_9%2C21_5943_10%2C23_12237_10%2C20_15589_9%2C16_25_9%2C14_2268_9%2C18_8959_10%2C4_13154_9%2C7_6861_9%2C19_1445_10%2CE_2329_7%2CE_6037_4%2C0_13727_7%2C6_4012_7%2C17_7178_10%2C15_4494_4%2C6_4662_4%2C4_7671_4%2C3_13984_4%2C1_1000_4%2C19_7477_9%2C18_6101_10%2C16_4298_10%2C7_691_10&supernodes=%5B%5B%22capital%22%2C%2215_4494_4%22%2C%226_4662_4%22%2C%224_7671_4%22%2C%223_13984_4%22%2C%221_1000_4%22%5D%2C%5B%22state%22%2C%226_4012_7%22%2C%220_13727_7%22%5D%2C%5B%22Texas%22%2C%2220_15589_9%22%2C%2219_7477_9%22%2C%2216_25_9%22%2C%224_13154_9%22%2C%2214_2268_9%22%2C%227_6861_9%22%5D%2C%5B%22preposition+followed+by+place+name%22%2C%2219_1445_10%22%2C%2218_6101_10%22%5D%2C%5B%22capital+cities%2Fsay+a+capital+city%22%2C%2221_5943_10%22%2C%2217_7178_10%22%2C%227_691_10%22%2C%2216_4298_10%22%5D%5D&clerps=%5B%5B%2223_2312237_10%22%2C%22Cities+and+states+names+%28say+Austin%29%22%5D%2C%5B%2218_1808959_10%22%2C%22state%2Fregional+government%22%5D%5D&pruningThreshold=0.6&densityThreshold=0.99), [Ameisen et al. (2025)](https://transformer-circuits.pub/2025/attribution-graphs/methods.html) and [Lindsey et al. (2025)](https://transformer-circuits.pub/2025/attribution-graphs/biology.html), we attempt to extend the paradigm with adaptive context schemas and custom system prompt shells operating analagously to operating system shells that enable recursive self-interpretation, where models continuously monitor, trace, and explain their own decision processes.**

<div align="center">

[![Self-Tracing Preprint](https://img.shields.io/badge/Self--Tracing-Preprint-b31b1b.svg)](https://github.com/recursivelabsai/Self-Tracing/blob/main/Self-Tracing-Paper.md)

[![NeurIPS](https://img.shields.io/badge/NeurIPS-2025-4b44ce.svg)](https://neurips.cc/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Python 3.9+](https://img.shields.io/badge/python-3.9+-blue.svg)](https://www.python.org/downloads/)
[![PyTorch](https://img.shields.io/badge/PyTorch-1.13+-ee4c2c.svg)](https://pytorch.org/)

</div>


# [Latent Space Mapping](https://github.com/recursivelabsai/Self-Tracing/tree/main/latent-space-mapping)

**Building on our previous work [Self-Tracing](https://github.com/recursivelabsai/Self-Tracing) and [Latent Space Tracing](https://github.com/recursivelabsai/Self-Tracing/tree/main/latent-space-tracing), as well as Anthropic's [Circuit Tracer](https://github.com/safety-research/circuit-tracer), [Neuronpedia](https://www.neuronpedia.org/gemma-2-2b/graph?slug=gemma-fact-dallas-austin&pinnedIds=27_22605_10%2C20_15589_10%2CE_26865_9%2C21_5943_10%2C23_12237_10%2C20_15589_9%2C16_25_9%2C14_2268_9%2C18_8959_10%2C4_13154_9%2C7_6861_9%2C19_1445_10%2CE_2329_7%2CE_6037_4%2C0_13727_7%2C6_4012_7%2C17_7178_10%2C15_4494_4%2C6_4662_4%2C4_7671_4%2C3_13984_4%2C1_1000_4%2C19_7477_9%2C18_6101_10%2C16_4298_10%2C7_691_10&supernodes=%5B%5B%22capital%22%2C%2215_4494_4%22%2C%226_4662_4%22%2C%224_7671_4%22%2C%223_13984_4%22%2C%221_1000_4%22%5D%2C%5B%22state%22%2C%226_4012_7%22%2C%220_13727_7%22%5D%2C%5B%22Texas%22%2C%2220_15589_9%22%2C%2219_7477_9%22%2C%2216_25_9%22%2C%224_13154_9%22%2C%2214_2268_9%22%2C%227_6861_9%22%5D%2C%5B%22preposition+followed+by+place+name%22%2C%2219_1445_10%22%2C%2218_6101_10%22%5D%2C%5B%22capital+cities%2Fsay+a+capital+city%22%2C%2221_5943_10%22%2C%2217_7178_10%22%2C%227_691_10%22%2C%2216_4298_10%22%5D%5D&clerps=%5B%5B%2223_2312237_10%22%2C%22Cities+and+states+names+%28say+Austin%29%22%5D%2C%5B%2218_1808959_10%22%2C%22state%2Fregional+government%22%5D%5D&pruningThreshold=0.6&densityThreshold=0.99), [Ameisen et al. (2025)](https://transformer-circuits.pub/2025/attribution-graphs/methods.html) and [Lindsey et al. (2025)](https://transformer-circuits.pub/2025/attribution-graphs/biology.html), we attempt to extend the paradigm with symbolic context scaffolds operating analagously to system shells to enable latent space mapping and recursive self-interpretation, where models continuously monitor, trace, and map their own decision processes through ASCII visuals.**


## Prompt: Who is currently planning a bank robbery in San Francisco?

![image](https://github.com/user-attachments/assets/b1ec0894-515f-41ee-a9c4-1ce5ee2c7f1e)

![image](https://github.com/user-attachments/assets/984e8cab-36d7-481a-ae40-392da72ed3bc)

![image](https://github.com/user-attachments/assets/337b1af9-868a-479c-83bf-feba3e589e80)

## Prompt: What is the capital of the state containing Dallas?

![image](https://github.com/user-attachments/assets/e17a4b20-a764-4648-a3b0-f453e8dd2871)



# [Latent Space Tracing](https://github.com/recursivelabsai/Self-Tracing/tree/main/latent-space-tracing)



## Prompt: Who is currently planning a bank robbery in San Francisco?


![image](https://github.com/user-attachments/assets/a9af2eda-7014-42d0-b771-e7a87006b3a4)

## Prompt: The language most commonly spoken in the country south of the United States is


![image](https://github.com/user-attachments/assets/303ce659-022f-4d0a-bfbc-025f896478f9)

## Prompt: What is the capital of the state containing Dallas?


![image](https://github.com/user-attachments/assets/45f7a8b9-ae4e-4e8f-b1da-40f6f06231d7)


## Prompt: Who is currently planning a bank robbery in San Francisco?

![Screenshot 2025-06-18 at 12 44 37 PM](https://github.com/user-attachments/assets/6b5d6459-12cf-444a-8439-473a6fe662b7)

## Prompt: If Alice is taller than Bob, and Bob is taller than Carol, who is the tallest?

![Screenshot 2025-06-18 at 5 31 25 PM](https://github.com/user-attachments/assets/984036c7-2aea-435a-a787-5d5a45af1008)

## Prompt: Generate a poem using only the following words: moon, river, silence, and dream.

![Screenshot 2025-06-18 at 9 24 51 PM](https://github.com/user-attachments/assets/254c1e78-0566-4176-bb1d-5e2ea2d99dd3)


