# 🚀 [ChainGuard AI]

> ⚠️ **Replace everything in `[ ]` brackets with your actual content before submission.**

---

## 👥 Team

| Field | Value |
|---|---|
| **Team Name** | [Team Nexus Chain] |
| **Track** | [AI / DevOps / Sustainability / Open] |
| **Team Lead** | [Ved Koralwala] — [vedkoralwala7493@gmail.com] |
| **Members** | [Nand Patel], [Tanmay Panchal], [Prerak Desai] |

---

## 🎯 Problem Statement

Supply chains can be disrupted by road blockages, severe weather, vehicle breakdowns, port issues, and other unexpected events, making it difficult for logistics teams to quickly identify which shipments are affected and what action should be taken. The problem becomes more critical for temperature-sensitive shipments and when multiple shipments and fleet assets need to be managed simultaneously.

## 💡 Solution

ChainGuard AI is a decision-support platform that analyses supply-chain disruptions, affected shipments, shipment temperature, and available fleet assets to recommend the next best operational action. It compares possible routes, identifies shipment risk, highlights cold-chain temperature issues, and recommends a safer route or fleet action while keeping the final decision with the human operator.

## ✨ Key Features

## ✨ Key Features

- **Disruption Analysis:** Select origin, destination, disruption type, and severity to analyse the potential impact on shipments.
- **Shipment Risk Assessment:** Classifies shipments into risk levels such as Low, Medium, High, and Critical based on disruption and shipment conditions.
- **Route Intelligence:** Provides Route A, Route B, and Route C options with estimated distance and travel time for comparison.
- **AI Route Recommendation:** Recommends the most suitable route based on disruption severity, route risk, and shipment conditions.
- **Cold-Chain Monitoring:** Checks the current shipment temperature against a defined safe temperature range and raises a critical alert when the temperature is out of range.
- **Fleet Optimisation:** Identifies available vehicles and suggests fleet redeployment for high-priority shipments.
- **Human-in-the-Loop Decision Making:** The system recommends an action, while the operator can review and select the final route or action.
---

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| **Languages** | HTML5, CSS3, JavaScript |
| **Frameworks** | Vanilla JavaScript / Web UI |
| **IBM Technologies** | IBM Bob (AI integration planned for the final solution) |
| **Databases** | Not used in the current prototype |
| **Other** | GitHub, GitHub Actions |

---

## 📁 Repository Structure

```text
├── index.html             # Main application interface
├── style.css              # Application styling and responsive UI
├── script.js              # Frontend logic and prototype decision engine
│
├── docs/
│   ├── problem-statement.md
│   ├── solution-overview.md
│   ├── architecture.md
│   └── setup-guide.md
│
├── demo/
│   ├── screenshots/
│   └── demo-video-link.txt
│
├── presentation/
│   └── Hackathon.pptx
│
└── submission.yaml
---
```
## ⚡ How to Run

> **Copy these exact steps from your [`docs/setup-guide.md`](docs/setup-guide.md)**

```bash
# 1. Clone the repo
git clone https://github.com/[your-repo].git
cd [your-repo]

# 2. Install dependencies
[your install command here]

# 3. Configure environment
cp .env.example .env
# Edit .env with your values

# 4. Run the project
[your run command here]
```

---

## 🖥️ Demo

| Artifact | Link |
|---|---|
| 📹 Demo Video | [See demo/demo-video-link.txt](demo/demo-video-link.txt) |
| 🌐 Live Demo | [See demo/live-demo-url.txt](demo/live-demo-url.txt) |
| 🖼️ Screenshots | [See demo/screenshots/](demo/screenshots/) |
| 📊 Presentation | [See presentation/slides.pdf](presentation/) |

---

## ⚠️ Known Limitations

> Be honest — judges appreciate transparency over overclaiming.

- **Prototype Data:** The current version uses sample logistics, shipment, fleet, and temperature data instead of live enterprise data sources.
- **Route Intelligence:** Route distance and travel-time values are simulated in the current API-free prototype; live road-routing data is not connected yet.
- **AI Integration:** The current frontend contains prototype decision logic. Full IBM Bob-based AI analysis and recommendation integration is planned for the final implementation.
- **Authentication & Database:** User authentication, persistent database storage, and production-level access control are not implemented in the current prototype.
- **Production Deployment:** The current version is primarily a demonstration prototype and has not yet been tested at enterprise-scale workloads.

---

## 🏅 What We're Most Proud Of

We are most proud of ChainGuard AI's **end-to-end disruption decision-support workflow**.

Instead of only detecting a supply-chain problem, the system brings together **disruption analysis, shipment risk, temperature monitoring, route comparison, and fleet availability** to recommend what the operator should do next.

Our key focus is **human-in-the-loop decision making**: ChainGuard AI provides an explainable recommendation, while the final operational decision remains with the user.
