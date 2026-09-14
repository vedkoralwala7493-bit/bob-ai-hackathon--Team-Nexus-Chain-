# Solution Overview

## What We Built

**ChainGuard AI** is an AI-powered supply-chain disruption decision-support platform designed to help logistics teams respond quickly when shipments are affected by unexpected disruptions.

The system brings important operational information into one workflow, including the shipment origin and destination, disruption type and severity, route alternatives, fleet availability, and temperature conditions for temperature-sensitive shipments.

Instead of manually checking different pieces of information and deciding what to do next, the operator can analyse a disruption through ChainGuard AI and receive a clear recommendation such as selecting an alternate route, prioritising a shipment, redeploying an available fleet asset, or taking action on a temperature excursion.

The current hackathon prototype is implemented as a lightweight browser-based application using HTML, CSS, and JavaScript. AI-powered decision support through IBM Bob is part of the planned AI integration of the solution.

---

## How It Works

The ChainGuard AI workflow is designed around a simple disruption-to-decision process:

1. **Select Shipment Route**

   The operator selects the shipment's origin and destination from the available city options.

2. **Select Disruption**

   The operator specifies the type of disruption affecting the supply chain, such as a road blockage, severe weather, vehicle breakdown, traffic congestion, or route closure.

3. **Set Disruption Severity**

   The operator selects the severity level of the disruption so that the system can understand how urgently the shipment requires attention.

4. **Provide Shipment Information**

   The operator provides relevant shipment information, including the shipment type and, where applicable, temperature information for temperature-sensitive cargo.

5. **Check Temperature Conditions**

   For cold-chain shipments, the current temperature is compared with the configured safe temperature range.

6. **Analyse Available Routes**

   The system presents alternative route options such as **Route A, Route B, and Route C** for comparison.

7. **Evaluate Operational Risk**

   The system considers disruption severity, shipment conditions, route information, and available fleet information to determine the operational risk.

8. **Generate Recommendation**

   ChainGuard AI provides a recommended operational action, such as choosing a safer alternate route or considering fleet redeployment.

9. **Review the Recommendation**

   The recommendation is presented to the operator as decision support. The human operator remains responsible for reviewing the recommendation and taking the final operational decision.

10. **Future AI-Powered Analysis**

    In the planned AI-enabled version, IBM Bob will be used to analyse the combined disruption, shipment, route, fleet, and temperature context and provide more advanced and explainable recommendations.

---

## Architecture Diagram

> See [`architecture.md`](architecture.md) for the detailed system architecture.

```text
                         ┌──────────────────────┐
                         │    User / Operator   │
                         └──────────┬───────────┘
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │  ChainGuard AI Web    │
                         │      Dashboard       │
                         └──────────┬───────────┘
                                    │
                                    ▼
                    ┌──────────────────────────────┐
                    │ HTML + CSS + JavaScript      │
                    └──────────────┬───────────────┘
                                   │
              ┌────────────────────┼────────────────────┐
              │                    │                    │
              ▼                    ▼                    ▼
      ┌───────────────┐    ┌───────────────┐    ┌───────────────┐
      │ Disruption    │    │ Temperature   │    │ Fleet & Route │
      │ Analysis      │    │ Monitoring    │    │ Intelligence  │
      └───────┬───────┘    └───────┬───────┘    └───────┬───────┘
              │                    │                    │
              └────────────────────┼────────────────────┘
                                   ▼
                       ┌────────────────────────┐
                       │ Prototype Decision     │
                       │ Engine                 │
                       └───────────┬────────────┘
                                   │
                    ┌──────────────┼──────────────┐
                    │              │              │
                    ▼              ▼              ▼
             ┌───────────┐  ┌────────────┐  ┌──────────────┐
             │ Risk      │  │ Route      │  │ Fleet /      │
             │ Assessment│  │ Recommendation│ │ Cold-chain  │
             └─────┬─────┘  └──────┬─────┘  └──────┬───────┘
                   │               │               │
                   └───────────────┼───────────────┘
                                   ▼
                         ┌────────────────────┐
                         │ Operator Decision │
                         └────────────────────┘

                         Planned AI Integration
                                   │
                                   ▼
                           ┌────────────────┐
                           │   IBM Bob AI   │
                           └────────────────┘
