# Problem Statement

## Background

Supply chains depend on the smooth movement of shipments through multiple routes, vehicles, warehouses, ports, and other distribution points. Unexpected disruptions such as road blockages, severe weather events, vehicle breakdowns, port strikes, and geopolitical events can interrupt this flow and create delays across multiple active shipments.

The challenge becomes more complex when many shipments are moving at the same time. Logistics teams need to quickly determine which shipments are affected, which shipments require immediate attention, which alternate routes or carriers can be used, and whether idle fleet assets can be redeployed.

For temperature-sensitive shipments such as medicines and vaccines, disruptions can also create cold-chain risks. Temperature excursions may compromise a shipment if they are not detected and acted upon before delivery.

The official L2 problem statement focuses on these connected challenges by requiring a solution that can identify shipments affected by active disruptions, recommend rerouting or carrier alternatives, identify idle fleet assets for redeployment, and detect and classify cold-chain temperature excursions. :contentReference[oaicite:1]{index=1}

---

## The Problem

When a supply-chain disruption occurs, logistics teams may need to manually determine which shipments are affected, assess their risk, find alternate routing or carrier options, and decide whether available fleet assets should be reassigned.

At the same time, temperature-sensitive shipments require continuous monitoring to ensure that their temperature remains within an acceptable range. A disruption can therefore create several operational decisions at once:

- Which shipments are affected?
- Which shipments are the highest priority?
- Which route or carrier should be used instead?
- Which available vehicle or fleet asset should be redeployed?
- Has a temperature-sensitive shipment crossed its safe temperature range?

As the number of active shipments and disruptions increases, making these decisions manually becomes more difficult and time-sensitive.

The official L2 challenge specifically requires the system to identify affected shipments, recommend rerouting or carrier alternatives, identify idle fleet assets for redeployment, and monitor cold-chain IoT sensor logs for temperature excursions and their regulatory severity. :contentReference[oaicite:2]{index=2}

---

## Who is Affected

The primary users affected by this problem are:

- **Logistics and supply-chain operations teams** responsible for monitoring shipments and responding to disruptions.
- **Fleet and transport coordinators** responsible for identifying available vehicles and redeploying fleet assets.
- **Shipment and operations managers** who need to prioritize high-risk or time-sensitive shipments.
- **Cold-chain operators** responsible for maintaining safe temperature conditions for temperature-sensitive shipments such as medicines and vaccines.

These users need a faster and clearer way to understand the impact of a disruption, identify affected shipments, compare available options, and decide what action should be taken next.

---

## Why It Matters

Supply-chain disruptions can create delays that affect multiple shipments and can cause operational resources to become inefficiently distributed. The official L2 statement describes disruptions such as weather events, port strikes, and geopolitical crises as situations that can cascade across hundreds of active shipments. :contentReference[oaicite:3]{index=3}

Fleet utilisation is another important concern. During a disruption, some fleet assets may remain idle while other routes become overloaded, making it difficult for operators to use available capacity effectively. :contentReference[oaicite:4]{index=4}

The problem becomes even more critical for cold-chain shipments. The official challenge highlights that temperature excursions can spoil high-value cargo when breaches are discovered only at delivery. :contentReference[oaicite:5]{index=5}

Therefore, the key challenge is not only detecting that a disruption has occurred, but also helping operators quickly understand its impact and determine the next best operational action.

---

## Why Existing Solutions Fall Short

Supply-chain operations often involve multiple sources of information, including shipment records, route information, fleet availability, disruption events, and sensor readings. When these sources are reviewed separately, operators may have to manually connect the information before making a decision.

Traditional spreadsheet-based planning and reactive decision-making can make it difficult to identify disruption impacts early, optimise fleet utilisation, and respond quickly to changing shipment conditions.

The official L2 problem statement highlights that disruptions can affect hundreds of shipments, fleet assets can remain idle while other routes become overloaded, and cold-chain breaches may only be discovered when shipments reach their destination. :contentReference[oaicite:6]{index=6}

The key gap is therefore the lack of a unified decision-support workflow that brings together:

**Disruption Analysis + Shipment Risk + Route Alternatives + Fleet Availability + Cold-Chain Monitoring**

into one system.

This creates the need for **ChainGuard AI**, a decision-support platform designed to help logistics operators understand disruption impact, compare available operational options, and receive an explainable recommendation for the next action.
