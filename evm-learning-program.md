---
layout: page
permalink: /learning/evm/program/
id: evm
title: EVM Learning Program
hide_navigation: true
description: A guided learning program covering EVM fundamentals, Geth and Evmos, opcodes, gas, encoding, precompiles and storage
image: /assets/images/topics/evm.jpg
---

<div class="container" markdown="1">

[Back to EVM Learning](/learning/evm/)

<img src="/assets/images/topics/evm.jpg" alt="Ethereum diamond above layered execution, memory and storage components" width="768" height="512" style="max-width: 100%; height: auto;">

Build low-level knowledge of the Ethereum Virtual Machine through reading, code exploration and discussion. Work through EVM fundamentals, compare Geth with Evmos, then explore the internals that drive smart contract execution.

## Learning workflow

1. Block one full weekday each week for learning and practice, about 20% of your working time.
2. Read the resources for the section you are studying, research the questions and write down your answers before the weekly meeting.
3. Meet with your learning group at the end of the week to present answers, compare findings and discuss open questions. If you are learning alone, explain your answers aloud and keep a written record.
4. Record the discussion with your group's agreement, and keep notes for later review.

Progress at your own pace; a section can take more than one session. For code walkthroughs, note the client version, commit and Ethereum fork you are studying. Some resources describe older implementations, and the EVM Codes link starts with the Cancun fork selected. Compare examples against your chosen version. The two supplemental Notion resources may require access; the public resources provide an alternative starting point for those sections.

## Learning plan

- [1. EVM fundamentals](#evm-fundamentals)
- [2. Geth vs Evmos structure](#geth-vs-evmos-structure)
- [3. EVM internals](#evm-internals)

## 1. EVM fundamentals

### 1.1. EVM architecture overview

Understand the stack-based architecture, program counter, memory model and storage.

**Learning resources**

- [Mastering Ethereum - The Ethereum Virtual Machine](https://github.com/ethereumbook/ethereumbook/blob/develop/src/chapter_14.md)
- [Understanding the Ethereum Virtual Machine - Part I](https://leftasexercise.com/2021/09/12/understanding-the-ethereum-virtual-machine-part-i/)

**Questions to answer**

- What is a virtual machine?
- What is the role of the program counter in the EVM execution model?

### 1.2. Execution environment

Follow the lifecycle of a transaction and understand how the EVM executes code and updates state.

**Learning resources**

- [Ethereum Protocol Studies - Execution Layer](https://epf.wiki/#/eps/week2)
- [Ethereum EVM Illustrated (PDF)](https://takenobu-hs.github.io/downloads/ethereum_evm_illustrated.pdf)

**Questions to answer**

- What is the Ethereum execution model?
- How does the EVM handle stack, memory and storage? How do their lifecycles and gas costs differ?
- What transaction types exist for the fork you are studying, why were they introduced and how do they differ?
- What is the purpose of each field in an Ethereum transaction?
- What is an access list, and how can it affect gas costs?
- How do externally owned accounts (EOAs) and smart contract accounts differ?
- Which two traditional transaction actions are available to an EOA?
- How is a smart contract deployed at a low level?
- What happens when an EOA calls a smart contract?
- How is contract calldata encoded and structured?
- What are Ethereum fork rules, and how are they implemented?
- Are fork rules also necessary for BFT chains?
- How are changes to fork rules activated?
- What is `StateDB`, and how does the EVM use it?
- What is a state journal, and why is it needed?
- What is the Ethereum bloom filter used for?
- What is a `stateObject`, and why is it required?
- How are transactions reverted?

## 2. Geth vs Evmos structure

### 2.1. Geth's EVM implementation

Explore the Go implementation in go-ethereum and compare its transaction processing with Evmos and CometBFT/Cosmos.

**Learning resources**

- [Ethereum Source Code Walkthrough](https://www.mslinn.com/blog/2018/06/13/evm-source-walkthrough.html)

**Questions to answer**

- Where are Geth's transaction prechecks performed? Where are Evmos' transaction prechecks performed?
- How do Ethereum's and CometBFT/Cosmos' use of secp256k1 differ, and what are the practical implications?
- How is a CometBFT transaction hash generated, and how does it differ from an Ethereum transaction hash?
- How do Ethereum and CometBFT block headers differ?
- What are the implications for blockchain state and JSON-RPC services when operating with both Ethereum and CometBFT block headers?
- Which statement describes the EVM instance in the implementation you are studying: it persists from block to block, or it is created for each transaction? Find the relevant code to support your answer.

### 2.2. Codebase navigation and analysis

Navigate go-ethereum's core packages and identify the types and interfaces involved in execution and state processing.

**Learning resources**

- [Go Ethereum Code Analysis](https://github.com/agiletechvn/go-ethereum-code-analysis)
- [Core state analysis](https://github.com/agiletechvn/go-ethereum-code-analysis/blob/master/core-state-analysis.md)
- [State processing analysis](https://github.com/agiletechvn/go-ethereum-code-analysis/blob/master/core-state-process-analysis.md)
- [Virtual machine analysis](https://github.com/agiletechvn/go-ethereum-code-analysis/blob/master/core-vm-analysis.md)
- [Jump table and instructions](https://github.com/agiletechvn/go-ethereum-code-analysis/blob/master/core-vm-jumptable-instruction.md)
- [Stack and memory analysis](https://github.com/agiletechvn/go-ethereum-code-analysis/blob/master/core-vm-stack-memory-analysis.md)

**Questions to answer**

- What are the main types and interfaces in `core/vm`, and how do they fit together?
- How does the state journal track changes and support rollback?

## 3. EVM internals

### 3.1. Understanding opcodes

Explore EVM instructions, the interpreter and the jump table used during smart contract execution.

**Learning resources**

- [EVM Deep Dives - Part 1](https://noxx.substack.com/p/evm-deep-dives-the-path-to-shadowy)
- [EVM Deep Dives - Part 4](https://noxx.substack.com/p/evm-deep-dives-the-path-to-shadowy-5a5)
- [Understanding the Ethereum Virtual Machine - Part II](https://leftasexercise.com/2021/09/15/understanding-the-ethereum-virtual-machine-part-ii/)

**Questions to answer**

- What is an instruction?
- What are opcodes, and how are they defined?
- What is the interpreter, why is it needed and where does it fit into the execution environment?
- What is a jump table, and why is it important?
- What information makes up an opcode's implementation?

### 3.2. Gas mechanics

Study opcode costs, transaction fees, the Ethereum gas market and gas accounting inside the EVM.

**Learning resources**

- [Gas mechanics video](https://www.youtube.com/watch?v=XMlNtI-5ZPQ)
- [EVM Codes - opcode reference and playground (Cancun selected)](https://www.evm.codes/?fork=cancun)

The original [gas costs spreadsheet](https://docs.google.com/spreadsheets/d/1m89CVujrQe5LAFJ8-YAUCcNK950dUzMQPMJBxRtGCqs/edit#gid=0) is currently unavailable. Use EVM Codes for gas-cost lookups.

**Questions to answer**

- What is gas, and why is it needed?
- What is the gas price, and how is it determined?
- What problem did EIP-1559 address?
- How does EIP-1559 work, and how is the base fee calculated?
- Which transaction fields did EIP-1559 introduce, and how do they affect what the sender pays and the validator receives?
- How is the base-fee portion of a transaction's fee burned?
- What are transaction fees, and why are they needed?
- Who pays the fees?
- How is the transaction fee calculated?
- How is a transaction's gas cost calculated?
- How does gas accounting differ between Cosmos and Ethereum?
- How are gas consumption and refunds handled? When can refunds occur, and what limits apply for the fork you are studying?
- Where is gas consumed and refunded in the implementation? What limitations can you identify?
- How is gas tracked internally in the EVM?

### 3.3. Encoding and the EVM compiler

Explore how Solidity types are represented in EVM execution, memory and storage. Study ABI and RLP encoding, compilation to bytecode and the role of encoding in gRPC interfaces.

**Learning resources**

- [LearnEVM - Binary and Types on the EVM](https://learnevm.com/chapters/evm/binary)

**Questions to answer**

- What does ABI mean, and what is it used for?
- What is RLP, and which kinds of data commonly use it?
- What is a compiler?
- How does a Solidity source file become EVM bytecode?
- How are Solidity's main types represented in EVM words, memory and storage?
- How do ABI and RLP compare with the encoding used by the gRPC interfaces you are studying?

### 3.4. Calldata, execution context and precompiles

Follow calldata through function calls, examine execution context and explore how precompiles extend execution.

**Learning resources**

- [EVM Deep Dives - Part 5](https://noxx.substack.com/p/evm-deep-dives-the-path-to-shadowy-a5f)
- [Understanding the Ethereum Virtual Machine - Part III](https://leftasexercise.com/2021/09/19/q-understanding-the-ethereum-virtual-machine-part-iii/)
- [Building an EVM from Scratch series - supplemental Notion resource; access may be required](https://www.notion.so/Building-an-EVM-from-scratch-series-90ee3c827b314e0599e705a1152eecf9)
- [Evmos Precompiles Document - supplemental Notion resource; access may be required](https://www.notion.so/Evmos-Precompiles-Document-ec70e016b5a34e04b321b88c255e548f)

**Questions to answer**

- How are precompiles related to Ethereum's execution layer?
- What are precompiles, and how do they differ from standard smart contracts?
- When is a precompile more beneficial than a standard contract?
- When is a smart contract more beneficial than a precompile?
- What are the main drawbacks of precompiles?
- Which methods does an Evmos precompile implement, and why are they required?
- What security risks arise when running stateful precompiles?
- Where and how does the EVM identify that an interaction targets a precompile?

### 3.5. Memory, storage and stack

Examine the data structures and storage layout used during smart contract execution.

**Learning resources**

- [Memory, storage and stack video](https://www.youtube.com/watch?v=RxL_1AfV7N4&t=2s)
- [EVM Deep Dives - Part 2](https://noxx.substack.com/p/evm-deep-dives-the-path-to-shadowy-d6b)
- [EVM Deep Dives - Part 3](https://noxx.substack.com/p/evm-deep-dives-the-path-to-shadowy-3ea)

**Questions to answer**

- What is a stack data structure, and what are its main operations?
- How is the EVM stack structured?
- What is an Ethereum storage slot, and how are values stored in slots?
- How does inheritance affect a smart contract's storage layout? Which values are stored first?
- What is the difference between storage and memory in the EVM?
- Which Ethereum opcodes operate on memory?
- What does the `memory` data location mean for a Solidity parameter or return value? How does it compare with `storage` and `calldata` where those locations are permitted?

## Put it into practice

- Trace a contract deployment and a function call, recording the program counter, stack, memory, gas and state changes.
- Build a small interpreter for a handful of opcodes and explain how it manages stack operations and gas.
- Compare transaction validation and state changes in Geth and Evmos, with links to the versions you studied.
- Decode a contract's calldata and map its inherited storage layout.

[Explore all EVM resources and project ideas](/learning/evm/)

</div>
