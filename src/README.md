# Source Code
HTML : -
<!DOCTYPE html>
<html lang="en">
<head>

  <meta charset="UTF-8">

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  >

  <title>
    ChainGuard AI
  </title>

  <link
    rel="stylesheet"
    href="style.css"
  >

</head>

<body>

  <div class="app-shell">

    <!-- ================= SIDEBAR ================= -->

    <aside class="sidebar">

      <div class="brand">

        <div class="brand-icon">
          CG
        </div>

        <div>

          <h2>
            ChainGuard AI
          </h2>

          <span>
            Supply Chain Intelligence
          </span>

        </div>

      </div>


      <nav class="nav">

        <button
          class="nav-item active"
          data-section="dashboard"
        >
          Dashboard
        </button>


        <button
          class="nav-item"
          data-section="analysis"
        >
          Disruption Analysis
        </button>


        <button
          class="nav-item"
          data-section="operations"
        >
          Operations
        </button>

      </nav>


      <div class="sidebar-note">

        <strong>
          Prototype Mode
        </strong>

        <p>
          ChainGuard AI demo using sample
          logistics data and API-free route
          visualization.
        </p>

      </div>

    </aside>


    <!-- ================= MAIN ================= -->

    <main class="main-content">


      <!-- ================= TOPBAR ================= -->

      <header class="topbar">

        <div>

          <p class="eyebrow">
            AI LOGISTICS CONTROL ROOM
          </p>

          <h1 id="page-title">
            Dashboard
          </h1>

        </div>


        <div class="status-pill">

          <span></span>

          System Operational

        </div>

      </header>


      <!-- =====================================================
           DASHBOARD
           ===================================================== -->

      <section
  id="dashboard"
  class="page-section active-section"
>

  <!-- COMMAND HEADER -->

  <div class="command-hero">

    <div class="hero-copy">

      <div class="eyebrow">
        AI LOGISTICS CONTROL ROOM
      </div>

      <h2>
        Supply chain status at a glance.
      </h2>

      <p>
        Monitor active disruptions, prioritize risky
        shipments and take faster operational decisions.
      </p>

    </div>

    <div class="hero-actions">

      <div class="system-status">
        <span class="status-dot"></span>

        <div>
          <strong>
            Network Stable
          </strong>

          <small>
            Last updated just now
          </small>
        </div>

      </div>

      <button
        class="primary-btn"
        id="open-analysis"
      >
        Analyze Disruption
      </button>

    </div>

  </div>


  <!-- KEY METRICS -->

  <div class="command-metrics">

    <div class="command-stat">

      <div class="stat-icon danger-icon">
        !
      </div>

      <div>

        <span>
          Active Disruptions
        </span>

        <strong>
          03
        </strong>

        <small class="danger-text">
          1 requires immediate action
        </small>

      </div>

    </div>


    <div class="command-stat">

      <div class="stat-icon shipment-icon">
        S
      </div>

      <div>

        <span>
          Affected Shipments
        </span>

        <strong>
          12
        </strong>

        <small>
          Across 3 routes
        </small>

      </div>

    </div>


    <div class="command-stat">

      <div class="stat-icon critical-icon">
        !
      </div>

      <div>

        <span>
          Critical Risk
        </span>

        <strong>
          04
        </strong>

        <small class="danger-text">
          Needs attention
        </small>

      </div>

    </div>


    <div class="command-stat">

      <div class="stat-icon fleet-icon">
        T
      </div>

      <div>

        <span>
          Fleet Available
        </span>

        <strong>
          07
        </strong>

        <small class="success-text">
          Ready to redeploy
        </small>

      </div>

    </div>

  </div>


  <!-- MAIN CONTROL GRID -->

  <div class="dashboard-control-grid">


    <!-- SHIPMENT PRIORITY -->

    <div class="panel shipment-panel">

      <div class="panel-header enhanced-header">

        <div>

          <span class="section-label">
            PRIORITY QUEUE
          </span>

          <h3>
            Shipment Risk Monitor
          </h3>

          <p>
            Shipments currently requiring operational attention.
          </p>

        </div>

        <button class="mini-btn">
          View All
        </button>

      </div>


      <div class="priority-list">

        <div class="priority-row critical-row">

          <div class="shipment-id">
            <span class="shipment-marker critical-marker">
              S1
            </span>

            <div>
              <strong>
                S101
              </strong>

              <small>
                Medicine · Nadiad → Anand
              </small>
            </div>
          </div>


          <div class="priority-reason">
            <span class="risk-badge critical">
              CRITICAL
            </span>

            <small>
              Route disruption
            </small>
          </div>


          <div class="priority-action">
            Reroute + Truck
          </div>

        </div>


        <div class="priority-row critical-row">

          <div class="shipment-id">
            <span class="shipment-marker critical-marker">
              S3
            </span>

            <div>
              <strong>
                S103
              </strong>

              <small>
                Vaccine · Nadiad → Anand
              </small>
            </div>
          </div>


          <div class="priority-reason">

            <span class="risk-badge critical">
              CRITICAL
            </span>

            <small>
              Temperature alert
            </small>

          </div>


          <div class="priority-action">
            Cold-chain action
          </div>

        </div>


        <div class="priority-row high-row">

          <div class="shipment-id">

            <span class="shipment-marker high-marker">
              S5
            </span>

            <div>

              <strong>
                S105
              </strong>

              <small>
                Medicine · Nadiad → Vadodara
              </small>

            </div>

          </div>


          <div class="priority-reason">

            <span class="risk-badge high">
              HIGH
            </span>

            <small>
              Fleet required
            </small>

          </div>


          <div class="priority-action">
            Reassign Fleet
          </div>

        </div>


        <div class="priority-row medium-row">

          <div class="shipment-id">

            <span class="shipment-marker medium-marker">
              S2
            </span>

            <div>

              <strong>
                S102
              </strong>

              <small>
                Medicine · Nadiad → Anand
              </small>

            </div>

          </div>


          <div class="priority-reason">

            <span class="risk-badge medium">
              MEDIUM
            </span>

            <small>
              Delay risk
            </small>

          </div>


          <div class="priority-action">
            Alternate Route
          </div>

        </div>

      </div>

    </div>


    <!-- LIVE ALERTS -->

    <div class="panel alert-panel">

      <div class="panel-header enhanced-header">

        <div>

          <span class="section-label">
            LIVE ALERTS
          </span>

          <h3>
            What needs attention?
          </h3>

          <p>
            Recent events affecting operations.
          </p>

        </div>

      </div>


      <div class="live-alert-stack">


        <div class="live-alert critical-alert">

          <div class="alert-symbol">
            !
          </div>

          <div>

            <strong>
              Cold-chain excursion
            </strong>

            <p>
              S103 temperature reached 10°C.
            </p>

            <small>
              Safe range: 2°C – 8°C
            </small>

          </div>

        </div>


        <div class="live-alert warning-alert">

          <div class="alert-symbol">
            ↗
          </div>

          <div>

            <strong>
              Route disruption
            </strong>

            <p>
              Nadiad → Anand road blockage detected.
            </p>

            <small>
              Alternate route recommended
            </small>

          </div>

        </div>


        <div class="live-alert success-alert">

          <div class="alert-symbol">
            ✓
          </div>

          <div>

            <strong>
              Fleet available
            </strong>

            <p>
              T07, T09 and T15 are idle.
            </p>

            <small>
              Ready for redeployment
            </small>

          </div>

        </div>

      </div>

    </div>

  </div>


  <!-- NETWORK SNAPSHOT -->

  <div class="panel network-panel">

    <div class="panel-header enhanced-header">

      <div>

        <span class="section-label">
          NETWORK SNAPSHOT
        </span>

        <h3>
          Current Logistics Flow
        </h3>

      </div>

      <span class="panel-tag">
        DEMO DATA
      </span>

    </div>


    <div class="network-flow">

      <div class="network-node">

        <div class="node-icon">
          F
        </div>

        <div>

          <strong>
            Origin
          </strong>

          <span>
            Nadiad
          </span>

        </div>

      </div>


      <div class="network-line">
        <span></span>
      </div>


      <div class="network-node disruption-node">

        <div class="node-icon">
          !
        </div>

        <div>

          <strong>
            Disruption
          </strong>

          <span>
            Road Blockage
          </span>

        </div>

      </div>


      <div class="network-line">
        <span></span>
      </div>


      <div class="network-node">

        <div class="node-icon">
          A
        </div>

        <div>

          <strong>
            Destination
          </strong>

          <span>
            Anand
          </span>

        </div>

      </div>


      <div class="network-summary">

        <span>
          AI recommendation
        </span>

        <strong>
          Route B
        </strong>

        <small>
          Lower disruption risk
        </small>

      </div>

    </div>

  </div>

  </section>
      <!-- =====================================================
           DISRUPTION ANALYSIS
           ===================================================== -->

      <section
        id="analysis"
        class="page-section"
      >


        <div class="section-heading">

          <p class="eyebrow">
            DISRUPTION INTELLIGENCE
          </p>

          <h2>
            Analyze a New Disruption
          </h2>

          <p>
            Select the cities, enter the disruption details,
            and provide the current shipment temperature.
          </p>

        </div>


        <div class="content-grid">


          <!-- INPUT + FLEET UTILISATION STACK -->

          <div class="analysis-left-stack">

            <!-- INPUT PANEL -->

            <div class="panel analysis-input-panel">


              <div class="form-grid">


              <!-- ORIGIN -->

              <label>

                Origin City

                <select id="origin">
                </select>

              </label>


              <!-- DESTINATION -->

              <label>

                Destination City

                <select id="destination">
                </select>

              </label>


              <!-- DISRUPTION -->

              <label>

                Disruption

                <select id="disruption">

                  <option>
                    Road Blockage
                  </option>

                  <option>
                    Heavy Weather
                  </option>

                  <option>
                    Vehicle Breakdown
                  </option>

                  <option>
                    Port Strike
                  </option>

                  <option>
                    Traffic Congestion
                  </option>

                  <option>
                    Route Closure
                  </option>

                  <option>
                    Other Supply Disruption
                  </option>

                </select>

              </label>


              <!-- SEVERITY -->

              <label>

                Severity

                <select id="severity">

                  <option>
                    High
                  </option>

                  <option>
                    Critical
                  </option>

                  <option>
                    Medium
                  </option>

                  <option>
                    Low
                  </option>

                </select>

              </label>


              <!-- AVAILABLE TRUCKS -->

              <label>

                Available Trucks

                <input
                  id="trucks"
                  type="number"
                  min="0"
                  value="2"
                >

              </label>


              <!-- SHIPMENT TYPE -->

              <label>

                Shipment Type

                <select id="shipment-type">

                  <option value="Medicine">
                    Medicine
                  </option>

                  <option value="Vaccine">
                    Vaccine
                  </option>

                  <option value="Food">
                    Food / Perishable
                  </option>

                  <option value="General">
                    General Cargo
                  </option>

                </select>

              </label>


              <!-- CURRENT TEMPERATURE -->

              <label>

                Current Shipment Temperature (°C)

                <input
                  id="temperature"
                  type="number"
                  step="0.1"
                  value="6"
                >

              </label>


              <!-- MIN TEMP -->

              <label>

                Minimum Safe Temperature (°C)

                <input
                  id="temp-min"
                  type="number"
                  step="0.1"
                  value="2"
                >

              </label>


              <!-- MAX TEMP -->

              <label>

                Maximum Safe Temperature (°C)

                <input
                  id="temp-max"
                  type="number"
                  step="0.1"
                  value="8"
                >

              </label>

            </div>


            <!-- TEMP INFO -->

            <div class="temperature-helper">

              <div class="temperature-icon">
                🌡️
              </div>

              <div>

                <strong>
                  Cold-Chain Check
                </strong>

                <p>
                  The system compares the current shipment
                  temperature with the safe temperature range.
                </p>

              </div>

            </div>


            <!-- ANALYZE -->

            <button
              class="primary-btn"
              id="analyze-btn"
            >

              Analyze with AI

            </button>

            </div>


            <!-- FLEET UTILISATION OVERVIEW -->

            <div class="panel fleet-overview-panel">

              <div class="panel-header enhanced-header">

                <div>
                  <span class="section-label">FLEET INTELLIGENCE</span>
                  <h3>Fleet Utilisation Overview</h3>
                  <p>Current asset allocation across the demo network.</p>
                </div>

                <span class="panel-tag">OPTIMIZER</span>

              </div>

              <div class="fleet-overview-grid">

                <div
                  class="fleet-donut"
                  id="fleet-utilization-chart"
                  style="--utilization: 42%"
                  aria-label="Fleet utilization 42 percent"
                >
                  <div class="fleet-donut-center">
                    <strong id="fleet-utilization-value">42%</strong>
                    <span>Utilised</span>
                  </div>
                </div>

                <div class="fleet-overview-stats">

                  <div class="fleet-stat-card active">
                    <span class="fleet-stat-dot"></span>
                    <div>
                      <strong id="fleet-active-count">05</strong>
                      <small>In Transit</small>
                    </div>
                  </div>

                  <div class="fleet-stat-card idle">
                    <span class="fleet-stat-dot"></span>
                    <div>
                      <strong id="fleet-idle-count">07</strong>
                      <small>Available</small>
                    </div>
                  </div>

                  <div class="fleet-stat-card total">
                    <span class="fleet-stat-dot"></span>
                    <div>
                      <strong id="fleet-total-count">12</strong>
                      <small>Total Fleet</small>
                    </div>
                  </div>

                </div>

              </div>

              <div class="fleet-optimization-note">
                <div class="fleet-note-icon">↗</div>
                <div>
                  <strong>AI utilisation opportunity</strong>
                  <p>
                    7 available trucks can be redeployed to reduce idle capacity
                    during active disruptions.
                  </p>
                </div>
              </div>

            </div>

            <!-- AI EXPLANATION -->

            <div class="panel ai-explanation-panel" id="ai-explanation-panel">

              <div class="ai-explanation-glow"></div>

              <div class="ai-explanation-header">

                <div class="ai-explanation-title-wrap">
                  <div class="ai-explanation-icon">✦</div>
                  <div>
                    <span class="section-label">AI DECISION TRACE</span>
                    <h3>Why did AI choose this route?</h3>
                    <p>
                      A quick explanation of the factors influencing the recommendation.
                    </p>
                  </div>
                </div>

                <div class="ai-confidence-badge">
                  <span>Confidence</span>
                  <strong id="ai-confidence-value">—</strong>
                </div>

              </div>

              <div class="ai-route-summary">
                <div>
                  <span class="ai-summary-label">Recommended route</span>
                  <strong id="ai-explanation-route">Awaiting analysis</strong>
                </div>
                <span class="ai-route-pill" id="ai-explanation-risk">READY</span>
              </div>

              <div class="ai-reason-grid" id="ai-reason-grid">
                <div class="ai-reason-item muted">
                  <span class="ai-reason-check">•</span>
                  <div>
                    <strong>Route efficiency</strong>
                    <p>Run the analysis to compare time and distance.</p>
                  </div>
                </div>

                <div class="ai-reason-item muted">
                  <span class="ai-reason-check">•</span>
                  <div>
                    <strong>Fleet availability</strong>
                    <p>Your available-truck input will be considered.</p>
                  </div>
                </div>

                <div class="ai-reason-item muted">
                  <span class="ai-reason-check">•</span>
                  <div>
                    <strong>Shipment safety</strong>
                    <p>Temperature and shipment type affect the decision.</p>
                  </div>
                </div>

                <div class="ai-reason-item muted">
                  <span class="ai-reason-check">•</span>
                  <div>
                    <strong>Disruption risk</strong>
                    <p>Severity and disruption type shape the route priority.</p>
                  </div>
                </div>
              </div>

              <div class="ai-bottom-strip">
                <div class="ai-confidence-meter-wrap">
                  <div class="ai-meter-label">
                    <span>Decision confidence</span>
                    <strong id="ai-confidence-label">Ready</strong>
                  </div>
                  <div class="ai-confidence-meter">
                    <span id="ai-confidence-bar"></span>
                  </div>
                </div>

                <div class="ai-saving-card">
                  <span>Estimated operational saving</span>
                  <strong id="ai-estimated-saving">₹ —</strong>
                  <small>Prototype estimate</small>
                </div>
              </div>

            </div>

          </div>


          <!-- RESULT PANEL -->

          <div class="panel result-panel">

            <div class="panel-header">

              <div>

                <h3>
                  AI Analysis
                </h3>

                <p>
                  Risk, route and temperature recommendations.
                </p>

              </div>

            </div>


            <div
              id="analysis-result"
              class="empty-state"
            >

              Select your route and shipment details,
              then click

              <strong>
                Analyze with AI
              </strong>.

            </div>

          </div>

        </div>

      </section>


      <!-- =====================================================
           OPERATIONS
           ===================================================== -->

      <section
  id="operations"
  class="page-section"
>


  <div class="section-heading">

    <p class="eyebrow">
      OPERATIONS CONTROL
    </p>

    <h2>
      Fleet & Cold-Chain Operations
    </h2>

    <p>
      Manage available assets and monitor shipments
      requiring temperature-controlled handling.
    </p>

  </div>


  <!-- OPERATIONS SUMMARY -->

  <div class="operations-summary">

    <div class="operations-kpi">

      <span>
        Available Assets
      </span>

      <strong>
        07
      </strong>

      <small class="success-text">
        Ready now
      </small>

    </div>


    <div class="operations-kpi">

      <span>
        In Transit
      </span>

      <strong>
        05
      </strong>

      <small>
        Active journeys
      </small>

    </div>


    <div class="operations-kpi">

      <span>
        Cold-Chain Alerts
      </span>

      <strong class="danger-text">
        02
      </strong>

      <small class="danger-text">
        Immediate review
      </small>

    </div>


    <div class="operations-kpi">

      <span>
        Recommended Actions
      </span>

      <strong>
        04
      </strong>

      <small>
        AI generated
      </small>

    </div>

  </div>


  <div class="operations-grid">


    <!-- FLEET -->

    <div class="panel fleet-control-panel">

      <div class="panel-header enhanced-header">

        <div>

          <span class="section-label">
            FLEET UTILISATION
          </span>

          <h3>
            Available Vehicles
          </h3>

          <p>
            Assets that can be redeployed immediately.
          </p>

        </div>

        <span class="panel-tag">
          7 AVAILABLE
        </span>

      </div>


      <div class="fleet-control-list">


        <div class="fleet-control-row recommended-fleet">

          <div class="fleet-avatar">
            T07
          </div>

          <div class="fleet-info">

            <strong>
              Truck T07
            </strong>

            <span>
              Idle · Capacity 2.5T
            </span>

          </div>

          <div class="fleet-route">

            <small>
              AI suggests
            </small>

            <strong>
              S101
            </strong>

          </div>

          <span class="fleet-status available">
            AVAILABLE
          </span>

        </div>


        <div class="fleet-control-row">

          <div class="fleet-avatar">
            T09
          </div>

          <div class="fleet-info">

            <strong>
              Truck T09
            </strong>

            <span>
              Idle · Capacity 4T
            </span>

          </div>

          <div class="fleet-route">

            <small>
              Status
            </small>

            <strong>
              Standby
            </strong>

          </div>

          <span class="fleet-status available">
            AVAILABLE
          </span>

        </div>


        <div class="fleet-control-row">

          <div class="fleet-avatar">
            T12
          </div>

          <div class="fleet-info">

            <strong>
              Truck T12
            </strong>

            <span>
              In transit · Anand
            </span>

          </div>

          <div class="fleet-route">

            <small>
              Shipment
            </small>

            <strong>
              S102
            </strong>

          </div>

          <span class="fleet-status transit">
            IN TRANSIT
          </span>

        </div>


        <div class="fleet-control-row">

          <div class="fleet-avatar">
            T15
          </div>

          <div class="fleet-info">

            <strong>
              Truck T15
            </strong>

            <span>
              Idle · Capacity 3T
            </span>

          </div>

          <div class="fleet-route">

            <small>
              Status
            </small>

            <strong>
              Standby
            </strong>

          </div>

          <span class="fleet-status available">
            AVAILABLE
          </span>

        </div>

      </div>

    </div>


    <!-- COLD CHAIN -->

    <div class="panel cold-chain-panel">

      <div class="panel-header enhanced-header">

        <div>

          <span class="section-label">
            COLD-CHAIN MONITOR
          </span>

          <h3>
            Shipment Temperature
          </h3>

          <p>
            Real-time demo sensor view.
          </p>

        </div>

        <span class="risk-badge critical">
          2 ALERTS
        </span>

      </div>


      <div class="cold-chain-main">


        <div class="temperature-main">

          <div>

            <span>
              Shipment S103
            </span>

            <strong>
              10°C
            </strong>

            <small>
              Current temperature
            </small>

          </div>


          <div class="temperature-status-ring">

            <span>
              !
            </span>

          </div>

        </div>


        <div class="safe-range-bar">

          <div class="safe-range-labels">

            <span>
              Safe range
            </span>

            <strong>
              2°C – 8°C
            </strong>

          </div>


          <div class="range-track">

            <div class="safe-range-zone"></div>

            <div class="temperature-indicator"></div>

          </div>

        </div>


        <div class="temperature-history">

          <span>2°C</span>
          <span>4°C</span>
          <span>5°C</span>
          <span>7°C</span>
          <span class="danger-temp">
            10°C
          </span>

        </div>


        <div class="cold-action">

          <div>

            <strong>
              AI Action Required
            </strong>

            <p>
              Temperature has crossed the safe range.
              Shipment should be prioritized for
              controlled handling.
            </p>

          </div>

          <button class="route-action-btn">
            Review Shipment
          </button>

        </div>

      </div>

    </div>

  </div>


  <!-- OPERATIONS RECOMMENDATION -->

  <div class="panel operations-recommendation">

    <div class="recommendation-icon">
      AI
    </div>

    <div>

      <span class="section-label">
        OPERATIONS ASSISTANT
      </span>

      <h3>
        Recommended next actions
      </h3>

      <p>
        Prioritize S103 for cold-chain intervention,
        assign T07 to S101, and review Route B for
        the Nadiad → Anand disruption.
      </p>

    </div>

<button
  class="primary-btn"
  id="open-analysis-operations"
>
  Review Disruption
</button>

  </div>


</section>


  <!-- JAVASCRIPT -->

  <script src="script.js"></script>

</body>
</html>

Css : -

:root {

  --bg: #0a1020;

  --panel: #11182a;

  --panel-2: #151e33;

  --line: #26324c;

  --text: #f4f7fb;

  --muted: #96a2b8;

  --accent: #63e6be;

  --accent-2: #7aa2ff;

  --danger: #ff6b81;

  --warning: #ffc857;

  --success: #63e6be;

  --shadow:
    0 18px 45px
    rgba(0, 0, 0, .24);

}


* {
  box-sizing: border-box;
}


body {

  margin: 0;

  font-family:
    Inter,
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;

  background:
    var(--bg);

  color:
    var(--text);

}


button,
input,
select {
  font: inherit;
}


/* =====================================================
   MAIN LAYOUT
   ===================================================== */

.app-shell {

  min-height: 100vh;

  display: grid;

  grid-template-columns:
    260px 1fr;

}


/* =====================================================
   SIDEBAR
   ===================================================== */

.sidebar {

  background:
    #0d1425;

  border-right:
    1px solid var(--line);

  padding:
    24px 18px;

  display:
    flex;

  flex-direction:
    column;

  gap:
    26px;

}


/* BRAND */

.brand {

  display:
    flex;

  gap:
    12px;

  align-items:
    center;

}


.brand-icon {

  width:
    44px;

  height:
    44px;

  border-radius:
    12px;

  display:
    grid;

  place-items:
    center;

  background:
    linear-gradient(
      135deg,
      #63e6be,
      #7aa2ff
    );

  color:
    #09111f;

  font-weight:
    900;

}


.brand h2 {

  margin:
    0;

  font-size:
    17px;

}


.brand span {

  color:
    var(--muted);

  font-size:
    11px;

}


/* NAV */

.nav {

  display:
    grid;

  gap:
    8px;

}


.nav-item {

  border:
    0;

  background:
    transparent;

  color:
    var(--muted);

  text-align:
    left;

  padding:
    12px 14px;

  border-radius:
    10px;

  cursor:
    pointer;

}


.nav-item:hover,
.nav-item.active {

  background:
    #17213a;

  color:
    var(--text);

}


/* NOTE */

.sidebar-note {

  margin-top:
    auto;

  padding:
    14px;

  border:
    1px solid var(--line);

  border-radius:
    12px;

  background:
    #10192d;

}


.sidebar-note strong {

  font-size:
    13px;

}


.sidebar-note p {

  color:
    var(--muted);

  font-size:
    12px;

  line-height:
    1.5;

}


/* =====================================================
   MAIN CONTENT
   ===================================================== */

.main-content {

  padding:
    28px 32px 42px;

}


.topbar {

  display:
    flex;

  justify-content:
    space-between;

  align-items:
    center;

  gap:
    20px;

  margin-bottom:
    24px;

}


.topbar h1,
.hero h2,
.section-heading h2 {

  margin:
    3px 0 8px;

}


.eyebrow {

  margin:
    0;

  color:
    var(--accent);

  font-size:
    11px;

  letter-spacing:
    1.7px;

  font-weight:
    800;

}


/* STATUS */

.status-pill {

  border:
    1px solid #2b4d47;

  background:
    #0f201f;

  color:
    var(--success);

  padding:
    9px 12px;

  border-radius:
    999px;

  font-size:
    12px;

}


.status-pill span {

  display:
    inline-block;

  width:
    7px;

  height:
    7px;

  background:
    var(--success);

  border-radius:
    50%;

  margin-right:
    7px;

}


/* =====================================================
   PAGES
   ===================================================== */

.page-section {

  display:
    none;

}


.active-section {

  display:
    block;

}


/* =====================================================
   HERO
   ===================================================== */

.hero {

  padding:
    26px;

  display:
    flex;

  justify-content:
    space-between;

  align-items:
    center;

  gap:
    20px;

  margin-bottom:
    18px;

  background:
    var(--panel);

  border:
    1px solid var(--line);

  border-radius:
    16px;

  box-shadow:
    var(--shadow);

}


.hero p:not(.eyebrow) {

  color:
    var(--muted);

  line-height:
    1.5;

}


/* BUTTON */

.primary-btn {

  border:
    0;

  background:
    var(--accent);

  color:
    #08121e;

  padding:
    12px 16px;

  border-radius:
    10px;

  font-weight:
    800;

  cursor:
    pointer;

}


.primary-btn:hover {

  filter:
    brightness(1.06);

}


/* =====================================================
   METRICS
   ===================================================== */

.metric-grid {

  display:
    grid;

  grid-template-columns:
    repeat(4, 1fr);

  gap:
    14px;

  margin-bottom:
    18px;

}


.metric-card {

  padding:
    18px;

  background:
    var(--panel);

  border:
    1px solid var(--line);

  border-radius:
    16px;

  box-shadow:
    var(--shadow);

}


.metric-card span {

  color:
    var(--muted);

  font-size:
    12px;

}


.metric-card strong {

  display:
    block;

  margin-top:
    8px;

  font-size:
    29px;

}


.metric-card small {

  color:
    var(--muted);

}


.metric-card.danger strong {

  color:
    var(--danger);

}


.metric-card.success strong {

  color:
    var(--success);

}


/* =====================================================
   GRID
   ===================================================== */

.content-grid {

  display:
    grid;

  grid-template-columns:
    2fr 1fr;

  gap:
    18px;

  margin-top:
    18px;

}


/* =====================================================
   PANEL
   ===================================================== */

.panel {

  padding:
    20px;

  background:
    var(--panel);

  border:
    1px solid var(--line);

  border-radius:
    16px;

  box-shadow:
    var(--shadow);

}


.panel-header {

  display:
    flex;

  justify-content:
    space-between;

  align-items:
    flex-start;

  gap:
    12px;

  margin-bottom:
    16px;

}


.panel-header h3 {

  margin:
    0 0 5px;

}


.panel-header p {

  margin:
    0;

  color:
    var(--muted);

  font-size:
    12px;

}


.panel-tag {

  color:
    var(--accent);

  font-size:
    10px;

  font-weight:
    800;

  border:
    1px solid #2b4d47;

  border-radius:
    8px;

  padding:
    6px 8px;

}


/* =====================================================
   TABLE
   ===================================================== */

.table-wrap {

  overflow-x:
    auto;

}


table {

  width:
    100%;

  border-collapse:
    collapse;

}


th,
td {

  padding:
    12px 10px;

  border-bottom:
    1px solid var(--line);

  text-align:
    left;

  white-space:
    nowrap;

}


th {

  color:
    var(--muted);

  font-size:
    11px;

}


td {

  font-size:
    12px;

}


/* =====================================================
   RISK BADGES
   ===================================================== */

.risk-badge {

  display:
    inline-flex;

  align-items:
    center;

  padding:
    5px 8px;

  border-radius:
    999px;

  font-size:
    10px;

  font-weight:
    800;

}


.low {

  background:
    #16332f;

  color:
    var(--success);

}


.medium {

  background:
    #3a3218;

  color:
    var(--warning);

}


.high {

  background:
    #432b1f;

  color:
    #ff9e73;

}


.critical {

  background:
    #43202a;

  color:
    var(--danger);

}


/* =====================================================
   ALERTS
   ===================================================== */

.alerts-list {

  display:
    grid;

  gap:
    10px;

}


.alert-item {

  padding:
    13px;

  border:
    1px solid var(--line);

  border-radius:
    11px;

  background:
    #10172a;

}


.alert-item strong {

  font-size:
    12px;

}


.alert-item p {

  color:
    var(--muted);

  font-size:
    11px;

  margin:
    6px 0 0;

}


/* =====================================================
   SECTION HEADING
   ===================================================== */

.section-heading {

  margin-bottom:
    20px;

}


.section-heading p:not(.eyebrow) {

  color:
    var(--muted);

  line-height:
    1.5;

}


/* =====================================================
   FORM
   ===================================================== */

.form-grid {

  display:
    grid;

  grid-template-columns:
    repeat(2, 1fr);

  gap:
    14px;

  margin-bottom:
    18px;

}


label {

  color:
    var(--muted);

  font-size:
    12px;

  display:
    grid;

  gap:
    7px;

}


input,
select {

  width:
    100%;

  background:
    #0d1425;

  color:
    var(--text);

  border:
    1px solid var(--line);

  border-radius:
    9px;

  padding:
    11px 12px;

  outline:
    none;

}


input:focus,
select:focus {

  border-color:
    #4c78d9;

}


/* =====================================================
   TEMPERATURE HELPER
   ===================================================== */

.temperature-helper {

  display:
    flex;

  gap:
    12px;

  align-items:
    flex-start;

  padding:
    13px 14px;

  margin-bottom:
    16px;

  border:
    1px solid var(--line);

  background:
    #10172a;

  border-radius:
    11px;

}


.temperature-icon {

  font-size:
    21px;

}


.temperature-helper strong {

  display:
    block;

  font-size:
    12px;

}


.temperature-helper p {

  margin:
    5px 0 0;

  color:
    var(--muted);

  font-size:
    11px;

  line-height:
    1.5;

}


/* =====================================================
   EMPTY RESULT
   ===================================================== */

.empty-state {

  min-height:
    240px;

  border:
    1px dashed var(--line);

  border-radius:
    12px;

  display:
    grid;

  place-items:
    center;

  padding:
    24px;

  text-align:
    center;

  color:
    var(--muted);

}


.analysis-result {

  display:
    grid;

  gap:
    12px;

}


.result-box {

  padding:
    14px;

  border-radius:
    12px;

  background:
    #0d1425;

  border:
    1px solid var(--line);

}


.result-box h4 {

  margin:
    0 0 7px;

}


.result-box p {

  margin:
    0;

  color:
    var(--muted);

  font-size:
    12px;

  line-height:
    1.5;

}


/* =====================================================
   API-FREE MAP
   ===================================================== */

.route-map {

  width:
    100%;

  border:
    1px solid var(--line);

  border-radius:
    14px;

  overflow:
    hidden;

  background:
    #10172a;

  margin-top:
    10px;

}


/* MAP TOPBAR */

.map-topbar {

  display:
    flex;

  justify-content:
    space-between;

  align-items:
    center;

  padding:
    13px 15px;

  border-bottom:
    1px solid var(--line);

  background:
    #0d1425;

}


.map-topbar strong {

  display:
    block;

  font-size:
    13px;

}


.map-topbar span:not(.map-status) {

  display:
    block;

  margin-top:
    3px;

  font-size:
    10px;

  color:
    var(--muted);

}


.map-status {

  padding:
    5px 8px;

  border-radius:
    7px;

  border:
    1px solid #2b4d47;

  color:
    var(--accent);

  background:
    #10201f;

  font-size:
    9px;

  font-weight:
    800;

}


/* MAP */

.map-area {

  position:
    relative;

  height:
    390px;

  overflow:
    hidden;

  background:
    radial-gradient(
      circle at center,
      #1a2842 0%,
      #111b30 45%,
      #0c1425 100%
    );

}


/* MAP GRID */

.map-grid {

  position:
    absolute;

  inset:
    0;

  background-image:

    linear-gradient(
      rgba(255,255,255,.035) 1px,
      transparent 1px
    ),

    linear-gradient(
      90deg,
      rgba(255,255,255,.035) 1px,
      transparent 1px
    );

  background-size:
    32px 32px;

  opacity:
    .6;

}


/* ROADS */

.map-road {

  position:
    absolute;

  height:
    8px;

  border-radius:
    50px;

  transform-origin:
    center;

}


/* ROUTE A */

.road-a {

  width:
    72%;

  left:
    14%;

  top:
    48%;

  transform:
    rotate(-5deg);

  background:
    repeating-linear-gradient(
      90deg,
      #ff6b81 0 20px,
      #3e1f29 20px 32px
    );

  box-shadow:
    0 0 14px
    rgba(255,107,129,.25);

}


/* ROUTE B */

.road-b {

  width:
    74%;

  left:
    13%;

  top:
    56%;

  transform:
    rotate(5deg);

  background:
    repeating-linear-gradient(
      90deg,
      #63e6be 0 20px,
      #183b35 20px 32px
    );

  box-shadow:
    0 0 18px
    rgba(99,230,190,.3);

}


/* ROUTE C */

.road-c {

  width:
    73%;

  left:
    14%;

  top:
    65%;

  transform:
    rotate(12deg);

  background:
    repeating-linear-gradient(
      90deg,
      #7aa2ff 0 20px,
      #202e4c 20px 32px
    );

  box-shadow:
    0 0 14px
    rgba(122,162,255,.25);

}


/* CITY MARKERS */

.city-marker {

  position:
    absolute;

  display:
    flex;

  align-items:
    center;

  gap:
    7px;

  z-index:
    5;

}


.city-marker label {

  color:
    white;

  font-size:
    11px;

  background:
    rgba(10,16,32,.9);

  border:
    1px solid var(--line);

  padding:
    6px 9px;

  border-radius:
    8px;

  white-space:
    nowrap;

}


.marker-dot {

  width:
    15px;

  height:
    15px;

  border-radius:
    50%;

  background:
    var(--accent);

  border:
    3px solid var(--bg);

  box-shadow:
    0 0 0 3px
    rgba(99,230,190,.25);

}


.marker-dot.destination {

  background:
    var(--accent-2);

  box-shadow:
    0 0 0 3px
    rgba(122,162,255,.25);

}


.origin-marker {

  left:
    9%;

  top:
    45%;

}


.destination-marker {

  right:
    9%;

  top:
    56%;

}


/* DISRUPTION */

.disruption-marker {

  position:
    absolute;

  left:
    47%;

  top:
    31%;

  z-index:
    10;

  display:
    flex;

  align-items:
    center;

  gap:
    6px;

  padding:
    7px 9px;

  border-radius:
    9px;

  background:
    #311923;

  border:
    1px solid #6a3040;

  color:
    #ff8798;

  font-size:
    11px;

  animation:
    pulseAlert 1.8s infinite;

}


@keyframes pulseAlert {

  0% {

    box-shadow:
      0 0 0 0
      rgba(255,107,129,.25);

  }

  70% {

    box-shadow:
      0 0 0 10px
      rgba(255,107,129,0);

  }

  100% {

    box-shadow:
      0 0 0 0
      rgba(255,107,129,0);

  }

}


/* ROUTE LABELS */

.map-route-label {

  position:
    absolute;

  z-index:
    8;

  padding:
    5px 8px;

  border-radius:
    7px;

  font-size:
    9px;

  font-weight:
    800;

  background:
    rgba(10,16,32,.9);

  border:
    1px solid var(--line);

}


.route-label-a {

  left:
    39%;

  top:
    43%;

  color:
    #ff6b81;

}


.route-label-b {

  left:
    39%;

  top:
    53%;

  color:
    #63e6be;

}


.route-label-c {

  left:
    39%;

  top:
    64%;

  color:
    #7aa2ff;

}


/* =====================================================
   ROUTE OPTIONS
   ===================================================== */

.route-options {

  display:
    grid;

  gap:
    10px;

  margin-top:
    12px;

}


.route-option {

  display:
    flex;

  justify-content:
    space-between;

  align-items:
    center;

  gap:
    15px;

  padding:
    13px;

  border:
    1px solid var(--line);

  border-radius:
    11px;

  background:
    #10172a;

  cursor:
    pointer;

}


.route-option:hover {

  border-color:
    #4c78d9;

}


.route-option.recommended {

  border-color:
    #2b5a52;

  background:
    #10201f;

}


.route-option h5 {

  margin:
    0 0 5px;

  font-size:
    13px;

}


.route-option p {

  margin:
    0;

  color:
    var(--muted);

  font-size:
    11px;

}


.route-time {

  text-align:
    right;

  white-space:
    nowrap;

}


.route-time strong {

  display:
    block;

  font-size:
    13px;

}


.route-time span {

  color:
    var(--muted);

  font-size:
    11px;

}


/* =====================================================
   AI RECOMMENDATION
   ===================================================== */

.ai-recommendation {

  padding:
    14px;

  margin-top:
    12px;

  border:
    1px solid #315e55;

  border-radius:
    11px;

  background:
    #10201f;

}


.ai-recommendation h4 {

  margin:
    0 0 8px;

}


.ai-recommendation p {

  margin:
    0;

  color:
    var(--muted);

  line-height:
    1.5;

}


/* ROUTE ACTIONS */

.route-actions {

  display:
    flex;

  flex-wrap:
    wrap;

  gap:
    10px;

  margin-top:
    12px;

}


.route-action-btn {

  border:
    1px solid var(--line);

  background:
    #11182a;

  color:
    var(--text);

  padding:
    9px 12px;

  border-radius:
    8px;

  cursor:
    pointer;

}


.route-action-btn:hover {

  border-color:
    #4c78d9;

}


/* =====================================================
   TEMPERATURE CARD
   ===================================================== */

.temp-status {

  margin-top:
    10px;

  padding:
    10px 12px;

  border-radius:
    9px;

  font-size:
    12px;

  border:
    1px solid var(--line);

}


.temperature-card {

  border:
    1px solid #53303c;

  background:
    #171526;

  border-radius:
    13px;

  padding:
    16px;

}


.temperature-top {

  display:
    flex;

  justify-content:
    space-between;

  align-items:
    center;

}


.temperature-top span {

  color:
    var(--muted);

  font-size:
    12px;

}


.temperature-top strong {

  display:
    block;

  margin-top:
    3px;

  font-size:
    28px;

}


.temp-range {

  color:
    var(--muted);

  font-size:
    11px;

  margin-top:
    10px;

}


/* TEMP GRAPH */

.temp-bars {

  height:
    90px;

  display:
    flex;

  align-items:
    end;

  gap:
    8px;

  margin:
    16px 0;

}


.temp-bars span {

  flex:
    1;

  background:
    linear-gradient(
      to top,
      #5577ff,
      #ff6b81
    );

  border-radius:
    7px 7px 2px 2px;

}


.recommendation {

  color:
    var(--muted);

  font-size:
    12px;

  line-height:
    1.5;

}


.recommendation strong {

  color:
    var(--text);

}


/* =====================================================
   RESPONSIVE
   ===================================================== */

@media (max-width: 1050px) {

  .app-shell {

    grid-template-columns:
      1fr;

  }


  .sidebar {

    border-right:
      0;

    border-bottom:
      1px solid var(--line);

  }


  .nav {

    grid-template-columns:
      repeat(3, 1fr);

  }


  .sidebar-note {

    display:
      none;

  }


  .metric-grid {

    grid-template-columns:
      repeat(2, 1fr);

  }


  .content-grid {

    grid-template-columns:
      1fr;

  }

}


@media (max-width: 700px) {

  .main-content {

    padding:
      20px;

  }


  .hero,
  .topbar {

    flex-direction:
      column;

    align-items:
      flex-start;

  }


  .metric-grid,
  .form-grid {

    grid-template-columns:
      1fr;

  }


  .nav {

    grid-template-columns:
      1fr;

  }


  .map-area {

    height:
      320px;

  }


  .route-option {

    flex-direction:
      column;

    align-items:
      flex-start;

  }


  .route-time {

    text-align:
      left;

  }

}
/* =========================================================
   PREMIUM DASHBOARD
   ========================================================= */

.command-hero {

  display: flex;

  justify-content: space-between;

  align-items: center;

  gap: 30px;

  padding: 28px;

  margin-bottom: 16px;

  border: 1px solid var(--line);

  border-radius: 18px;

  background:
    radial-gradient(
      circle at 85% 20%,
      rgba(99,230,190,.08),
      transparent 35%
    ),
    var(--panel);

}


.hero-copy h2 {

  max-width: 650px;

  font-size: 27px;

  margin-top: 8px;

}


.hero-copy p {

  max-width: 630px;

  color: var(--muted);

  line-height: 1.6;

}


.hero-actions {

  display: flex;

  align-items: center;

  gap: 14px;

}


.system-status {

  display: flex;

  align-items: center;

  gap: 10px;

  padding: 10px 12px;

  border: 1px solid var(--line);

  border-radius: 11px;

  background: #0d1425;

}


.system-status strong {

  display: block;

  font-size: 11px;

}


.system-status small {

  display: block;

  margin-top: 3px;

  color: var(--muted);

  font-size: 9px;

}


.status-dot {

  width: 9px;

  height: 9px;

  border-radius: 50%;

  background: var(--success);

  box-shadow:
    0 0 0 5px
    rgba(99,230,190,.08);

}


/* METRICS */

.command-metrics {

  display: grid;

  grid-template-columns:
    repeat(4, 1fr);

  gap: 12px;

  margin-bottom: 16px;

}


.command-stat {

  display: flex;

  align-items: center;

  gap: 12px;

  padding: 16px;

  border: 1px solid var(--line);

  border-radius: 14px;

  background: var(--panel);

}


.stat-icon {

  width: 38px;

  height: 38px;

  display: grid;

  place-items: center;

  border-radius: 10px;

  font-weight: 900;

  font-size: 13px;

}


.danger-icon {

  background: #321b24;

  color: var(--danger);

}


.shipment-icon {

  background: #17243f;

  color: var(--accent-2);

}


.critical-icon {

  background: #3b1d28;

  color: var(--danger);

}


.fleet-icon {

  background: #16322d;

  color: var(--success);

}


.command-stat span {

  display: block;

  color: var(--muted);

  font-size: 10px;

}


.command-stat strong {

  display: block;

  margin-top: 3px;

  font-size: 24px;

}


.command-stat small {

  display: block;

  margin-top: 2px;

  color: var(--muted);

  font-size: 9px;

}


/* DASHBOARD CONTROL */

.dashboard-control-grid {

  display: grid;

  grid-template-columns:
    1.8fr 1fr;

  gap: 16px;

}


.enhanced-header {

  margin-bottom: 18px;

}


.section-label {

  display: block;

  margin-bottom: 5px;

  color: var(--accent);

  font-size: 9px;

  font-weight: 900;

  letter-spacing: 1.5px;

}


.mini-btn {

  border: 1px solid var(--line);

  background: #0d1425;

  color: var(--muted);

  padding: 7px 10px;

  border-radius: 8px;

  font-size: 10px;

  cursor: pointer;

}


/* PRIORITY LIST */

.priority-list {

  display: grid;

  gap: 8px;

}


.priority-row {

  display: grid;

  grid-template-columns:
    1.3fr .9fr .8fr;

  align-items: center;

  gap: 14px;

  padding: 11px;

  border: 1px solid transparent;

  border-radius: 11px;

  background: #0e1628;

}


.priority-row:hover {

  border-color: var(--line);

}


.critical-row {

  border-left:
    3px solid var(--danger);

}


.high-row {

  border-left:
    3px solid #ff9e73;

}


.medium-row {

  border-left:
    3px solid var(--warning);

}


.shipment-id {

  display: flex;

  align-items: center;

  gap: 9px;

}


.shipment-marker {

  width: 31px;

  height: 31px;

  display: grid;

  place-items: center;

  border-radius: 9px;

  font-size: 9px;

  font-weight: 900;

}


.critical-marker {

  color: var(--danger);

  background: #321b24;

}


.high-marker {

  color: #ff9e73;

  background: #38251e;

}


.medium-marker {

  color: var(--warning);

  background: #352d19;

}


.shipment-id strong {

  display: block;

  font-size: 11px;

}


.shipment-id small {

  display: block;

  margin-top: 2px;

  color: var(--muted);

  font-size: 9px;

}


.priority-reason small {

  display: block;

  margin-top: 4px;

  color: var(--muted);

  font-size: 9px;

}


.priority-action {

  text-align: right;

  font-size: 10px;

  font-weight: 700;

}


/* LIVE ALERTS */

.live-alert-stack {

  display: grid;

  gap: 9px;

}


.live-alert {

  display: flex;

  align-items: flex-start;

  gap: 10px;

  padding: 12px;

  border: 1px solid var(--line);

  border-radius: 11px;

  background: #0e1628;

}


.alert-symbol {

  width: 28px;

  height: 28px;

  flex: 0 0 auto;

  display: grid;

  place-items: center;

  border-radius: 8px;

  font-size: 11px;

  font-weight: 900;

}


.critical-alert .alert-symbol {

  color: var(--danger);

  background: #321b24;

}


.warning-alert .alert-symbol {

  color: var(--warning);

  background: #352d19;

}


.success-alert .alert-symbol {

  color: var(--success);

  background: #16332f;

}


.live-alert strong {

  display: block;

  font-size: 11px;

}


.live-alert p {

  margin: 4px 0;

  color: var(--muted);

  font-size: 9px;

  line-height: 1.4;

}


.live-alert small {

  color: #748198;

  font-size: 8px;

}


/* NETWORK */

.network-panel {

  margin-top: 16px;

}


.network-flow {

  display: flex;

  align-items: center;

  gap: 10px;

}


.network-node {

  display: flex;

  align-items: center;

  gap: 9px;

  padding: 10px 12px;

  border: 1px solid var(--line);

  border-radius: 11px;

  background: #0e1628;

}


.node-icon {

  width: 29px;

  height: 29px;

  display: grid;

  place-items: center;

  border-radius: 8px;

  background: #17243f;

  color: var(--accent-2);

  font-size: 9px;

  font-weight: 900;

}


.network-node strong {

  display: block;

  font-size: 10px;

}


.network-node span {

  display: block;

  margin-top: 2px;

  color: var(--muted);

  font-size: 9px;

}


.disruption-node .node-icon {

  background: #321b24;

  color: var(--danger);

}


.network-line {

  flex: 1;

  height: 2px;

  background: var(--line);

  position: relative;

}


.network-line span {

  position: absolute;

  top: -3px;

  width: 7px;

  height: 7px;

  border-radius: 50%;

  background: var(--accent);

  animation: moveDot 2.2s linear infinite;

}


@keyframes moveDot {

  from {
    left: 0;
  }

  to {
    left: calc(100% - 7px);
  }

}


.network-summary {

  margin-left: auto;

  min-width: 150px;

  padding: 10px 12px;

  border: 1px solid #2b5a52;

  border-radius: 11px;

  background: #10201f;

}


.network-summary span {

  display: block;

  color: var(--muted);

  font-size: 8px;

}


.network-summary strong {

  display: block;

  margin-top: 3px;

  color: var(--success);

  font-size: 13px;

}


.network-summary small {

  display: block;

  margin-top: 2px;

  color: var(--muted);

  font-size: 8px;

}


/* =========================================================
   OPERATIONS
   ========================================================= */

.operations-summary {

  display: grid;

  grid-template-columns:
    repeat(4, 1fr);

  gap: 12px;

  margin-bottom: 16px;

}


.operations-kpi {

  padding: 16px;

  border: 1px solid var(--line);

  border-radius: 14px;

  background: var(--panel);

}


.operations-kpi span {

  display: block;

  color: var(--muted);

  font-size: 10px;

}


.operations-kpi strong {

  display: block;

  margin-top: 7px;

  font-size: 25px;

}


.operations-kpi small {

  display: block;

  margin-top: 3px;

  color: var(--muted);

  font-size: 9px;

}


.success-text {

  color: var(--success) !important;

}


.danger-text {

  color: var(--danger) !important;

}


.operations-grid {

  display: grid;

  grid-template-columns:
    1.4fr 1fr;

  gap: 16px;

}


.fleet-control-list {

  display: grid;

  gap: 7px;

}


.fleet-control-row {

  display: grid;

  grid-template-columns:
    42px 1.4fr .7fr auto;

  align-items: center;

  gap: 10px;

  padding: 11px;

  border: 1px solid var(--line);

  border-radius: 11px;

  background: #0e1628;

}


.recommended-fleet {

  border-color: #2b5a52;

  background: #10201f;

}


.fleet-avatar {

  width: 34px;

  height: 34px;

  display: grid;

  place-items: center;

  border-radius: 9px;

  background: #17243f;

  color: var(--accent-2);

  font-size: 9px;

  font-weight: 900;

}


.fleet-info strong {

  display: block;

  font-size: 10px;

}


.fleet-info span {

  display: block;

  margin-top: 3px;

  color: var(--muted);

  font-size: 8px;

}


.fleet-route {

  text-align: right;

}


.fleet-route small {

  display: block;

  color: var(--muted);

  font-size: 8px;

}


.fleet-route strong {

  display: block;

  margin-top: 2px;

  font-size: 9px;

}


.fleet-status {

  padding: 5px 7px;

  border-radius: 7px;

  font-size: 7px;

  font-weight: 900;

}


.fleet-status.available {

  background: #16332f;

  color: var(--success);

}


.fleet-status.transit {

  background: #17243f;

  color: var(--accent-2);

}


/* COLD CHAIN */

.cold-chain-main {

  padding: 3px;

}


.temperature-main {

  display: flex;

  justify-content: space-between;

  align-items: center;

}


.temperature-main span {

  display: block;

  color: var(--muted);

  font-size: 10px;

}


.temperature-main strong {

  display: block;

  margin-top: 4px;

  font-size: 34px;

}


.temperature-main small {

  color: var(--muted);

  font-size: 8px;

}


.temperature-status-ring {

  width: 58px;

  height: 58px;

  display: grid;

  place-items: center;

  border-radius: 50%;

  border: 5px solid #562433;

  color: var(--danger);

  font-size: 20px;

  font-weight: 900;

  box-shadow:
    0 0 0 7px
    rgba(255,107,129,.05);

}


/* RANGE */

.safe-range-bar {

  margin-top: 22px;

}


.safe-range-labels {

  display: flex;

  justify-content: space-between;

  margin-bottom: 8px;

}


.safe-range-labels span {

  color: var(--muted);

  font-size: 9px;

}


.safe-range-labels strong {

  font-size: 9px;

}


.range-track {

  position: relative;

  height: 10px;

  border-radius: 20px;

  background: #2a1d25;

  overflow: hidden;

}


.safe-range-zone {

  position: absolute;

  left: 15%;

  width: 45%;

  height: 100%;

  background: var(--success);

}


.temperature-indicator {

  position: absolute;

  left: 76%;

  top: -3px;

  width: 16px;

  height: 16px;

  border-radius: 50%;

  background: var(--danger);

  border: 3px solid #0a1020;

  box-shadow:
    0 0 12px
    rgba(255,107,129,.5);

}


/* HISTORY */

.temperature-history {

  display: flex;

  justify-content: space-between;

  margin-top: 8px;

  color: var(--muted);

  font-size: 8px;

}


.danger-temp {

  color: var(--danger);

  font-weight: 800;

}


/* COLD ACTION */

.cold-action {

  display: flex;

  justify-content: space-between;

  align-items: center;

  gap: 10px;

  margin-top: 18px;

  padding: 12px;

  border: 1px solid #52303b;

  border-radius: 11px;

  background: #181522;

}


.cold-action strong {

  display: block;

  font-size: 10px;

}


.cold-action p {

  margin:
    4px 0 0;

  color: var(--muted);

  font-size: 8px;

  line-height: 1.5;

}


/* FINAL RECOMMENDATION */

.operations-recommendation {

  display: flex;

  align-items: center;

  gap: 14px;

  margin-top: 16px;

  padding: 18px;

  border-color: #2b5a52;

  background:
    linear-gradient(
      90deg,
      #10201f,
      #11182a
    );

}


.recommendation-icon {

  width: 42px;

  height: 42px;

  display: grid;

  place-items: center;

  border-radius: 11px;

  background: var(--accent);

  color: #07131a;

  font-size: 10px;

  font-weight: 900;

}


.operations-recommendation h3 {

  margin: 3px 0 5px;

}


.operations-recommendation p {

  margin: 0;

  max-width: 760px;

  color: var(--muted);

  font-size: 10px;

  line-height: 1.5;

}


.operations-recommendation .primary-btn {

  margin-left: auto;

  white-space: nowrap;

}



/* =========================================================
   DISRUPTION ANALYSIS — FLEET UTILISATION
   ========================================================= */

.analysis-left-stack {
  display: grid;
  gap: 16px;
  align-content: start;
}

.analysis-input-panel {
  min-width: 0;
}

.fleet-overview-panel {
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(circle at 92% 12%, rgba(99,230,190,.06), transparent 32%),
    var(--panel);
}

.fleet-overview-panel::after {
  content: "";
  position: absolute;
  inset: auto -60px -80px auto;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: rgba(122,162,255,.035);
  pointer-events: none;
}

.fleet-overview-grid {
  display: grid;
  grid-template-columns: 150px 1fr;
  gap: 18px;
  align-items: center;
}

.fleet-donut {
  --utilization: 42%;
  width: 132px;
  height: 132px;
  position: relative;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background:
    conic-gradient(
      var(--accent) 0 var(--utilization),
      #26324c var(--utilization) 100%
    );
  box-shadow:
    0 0 0 1px rgba(99,230,190,.08),
    0 12px 28px rgba(0,0,0,.2);
}

.fleet-donut::before {
  content: "";
  width: 92px;
  height: 92px;
  position: absolute;
  border-radius: 50%;
  background: #0d1425;
  border: 1px solid var(--line);
}

.fleet-donut-center {
  position: relative;
  z-index: 1;
  display: grid;
  justify-items: center;
  line-height: 1;
}

.fleet-donut-center strong {
  font-size: 25px;
  letter-spacing: -.5px;
}

.fleet-donut-center span {
  margin-top: 6px;
  color: var(--muted);
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 1.1px;
  font-weight: 800;
}

.fleet-overview-stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 8px;
}

.fleet-stat-card {
  min-height: 76px;
  padding: 11px;
  border: 1px solid var(--line);
  border-radius: 11px;
  background: #0e1628;
  display: flex;
  align-items: flex-start;
  gap: 8px;
}

.fleet-stat-card strong {
  display: block;
  font-size: 21px;
  line-height: 1;
}

.fleet-stat-card small {
  display: block;
  margin-top: 5px;
  color: var(--muted);
  font-size: 9px;
}

.fleet-stat-dot {
  width: 7px;
  height: 7px;
  margin-top: 4px;
  border-radius: 50%;
  flex: 0 0 auto;
}

.fleet-stat-card.active .fleet-stat-dot {
  background: var(--accent-2);
  box-shadow: 0 0 0 4px rgba(122,162,255,.08);
}

.fleet-stat-card.idle .fleet-stat-dot {
  background: var(--accent);
  box-shadow: 0 0 0 4px rgba(99,230,190,.08);
}

.fleet-stat-card.total .fleet-stat-dot {
  background: var(--warning);
  box-shadow: 0 0 0 4px rgba(255,200,87,.08);
}

.fleet-optimization-note {
  display: flex;
  gap: 10px;
  align-items: flex-start;
  margin-top: 14px;
  padding: 12px;
  border: 1px solid #24544c;
  border-radius: 11px;
  background: #0f201f;
}

.fleet-note-icon {
  width: 28px;
  height: 28px;
  border-radius: 8px;
  display: grid;
  place-items: center;
  background: #17352f;
  color: var(--accent);
  font-weight: 900;
}

.fleet-optimization-note strong {
  font-size: 11px;
}

.fleet-optimization-note p {
  margin: 4px 0 0;
  color: var(--muted);
  font-size: 9px;
  line-height: 1.45;
}

@media (max-width: 750px) {
  .fleet-overview-grid {
    grid-template-columns: 1fr;
    justify-items: start;
  }

  .fleet-overview-stats {
    width: 100%;
  }
}

/* =========================================================
   DISRUPTION ANALYSIS — AI EXPLANATION
   ========================================================= */

.ai-explanation-panel {
  position: relative;
  overflow: hidden;
  background:
    linear-gradient(145deg, rgba(17, 30, 49, .98), rgba(11, 20, 36, .98));
  border-color: rgba(99, 230, 190, .18);
  box-shadow: 0 18px 36px rgba(0, 0, 0, .17);
}

.ai-explanation-panel::before {
  content: "";
  position: absolute;
  top: -90px;
  right: -80px;
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(99, 230, 190, .10), transparent 68%);
  pointer-events: none;
}

.ai-explanation-glow {
  position: absolute;
  left: -75px;
  bottom: -110px;
  width: 190px;
  height: 190px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(122, 162, 255, .07), transparent 70%);
  pointer-events: none;
}

.ai-explanation-header {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
}

.ai-explanation-title-wrap {
  display: flex;
  gap: 11px;
  align-items: flex-start;
}

.ai-explanation-icon {
  width: 34px;
  height: 34px;
  flex: 0 0 auto;
  border: 1px solid rgba(99, 230, 190, .25);
  border-radius: 10px;
  display: grid;
  place-items: center;
  background: linear-gradient(145deg, #14352e, #102622);
  color: var(--accent);
  font-size: 17px;
  box-shadow: 0 8px 18px rgba(0, 0, 0, .18);
}

.ai-explanation-header h3 {
  margin: 4px 0 0;
  font-size: 15px;
}

.ai-explanation-header p {
  margin: 5px 0 0;
  color: var(--muted);
  font-size: 9px;
  line-height: 1.45;
  max-width: 440px;
}

.ai-confidence-badge {
  min-width: 82px;
  padding: 8px 10px;
  border: 1px solid rgba(122, 162, 255, .18);
  border-radius: 10px;
  background: rgba(11, 20, 36, .7);
  text-align: right;
}

.ai-confidence-badge span {
  display: block;
  color: var(--muted);
  font-size: 8px;
  text-transform: uppercase;
  letter-spacing: .9px;
  font-weight: 800;
}

.ai-confidence-badge strong {
  display: block;
  margin-top: 2px;
  font-size: 16px;
}

.ai-route-summary {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: 14px;
  padding: 11px 12px;
  border: 1px solid var(--line);
  border-radius: 11px;
  background: rgba(7, 14, 26, .44);
}

.ai-summary-label {
  display: block;
  color: var(--muted);
  font-size: 8px;
  text-transform: uppercase;
  letter-spacing: .9px;
  font-weight: 800;
}

.ai-route-summary strong {
  display: block;
  margin-top: 4px;
  font-size: 12px;
}

.ai-route-pill {
  padding: 6px 8px;
  border-radius: 999px;
  background: rgba(99, 230, 190, .10);
  border: 1px solid rgba(99, 230, 190, .18);
  color: var(--accent);
  font-size: 8px;
  letter-spacing: .7px;
  font-weight: 900;
}

.ai-reason-grid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
  margin-top: 10px;
}

.ai-reason-item {
  display: flex;
  align-items: flex-start;
  gap: 9px;
  min-height: 58px;
  padding: 10px;
  border: 1px solid rgba(255,255,255,.05);
  border-radius: 10px;
  background: rgba(8, 16, 29, .58);
}

.ai-reason-item.muted {
  opacity: .88;
}

.ai-reason-check {
  width: 20px;
  height: 20px;
  flex: 0 0 auto;
  border-radius: 7px;
  display: grid;
  place-items: center;
  background: rgba(99, 230, 190, .09);
  color: var(--accent);
  font-size: 11px;
  font-weight: 900;
}

.ai-reason-item strong {
  display: block;
  font-size: 9px;
}

.ai-reason-item p {
  margin: 4px 0 0;
  color: var(--muted);
  font-size: 8px;
  line-height: 1.45;
}

.ai-bottom-strip {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 150px;
  gap: 12px;
  align-items: center;
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid var(--line);
}

.ai-confidence-meter-wrap {
  min-width: 0;
}

.ai-meter-label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 7px;
}

.ai-meter-label span {
  color: var(--muted);
  font-size: 8px;
  text-transform: uppercase;
  letter-spacing: .8px;
  font-weight: 800;
}

.ai-meter-label strong {
  font-size: 9px;
}

.ai-confidence-meter {
  height: 7px;
  overflow: hidden;
  border-radius: 999px;
  background: #1f2b44;
}

.ai-confidence-meter span {
  display: block;
  width: 0%;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, #50caaa, #7aa2ff);
  box-shadow: 0 0 14px rgba(99, 230, 190, .20);
  transition: width .45s ease;
}

.ai-saving-card {
  padding: 10px 11px;
  border: 1px solid rgba(255, 200, 87, .16);
  border-radius: 10px;
  background: rgba(45, 34, 13, .28);
}

.ai-saving-card span {
  display: block;
  color: var(--muted);
  font-size: 8px;
  line-height: 1.35;
}

.ai-saving-card strong {
  display: block;
  margin-top: 4px;
  font-size: 16px;
}

.ai-saving-card small {
  display: block;
  margin-top: 3px;
  color: #8f9bb3;
  font-size: 7px;
}

@media (max-width: 750px) {
  .ai-explanation-header {
    flex-direction: column;
  }

  .ai-confidence-badge {
    width: 100%;
    text-align: left;
  }

  .ai-reason-grid {
    grid-template-columns: 1fr;
  }

  .ai-bottom-strip {
    grid-template-columns: 1fr;
  }
}

/* =========================================================
   RESPONSIVE
   ========================================================= */

@media (max-width: 1100px) {

  .command-metrics,
  .operations-summary {

    grid-template-columns:
      repeat(2, 1fr);

  }


  .dashboard-control-grid,
  .operations-grid {

    grid-template-columns:
      1fr;

  }


  .network-flow {

    flex-wrap: wrap;

  }


  .network-summary {

    margin-left: 0;

    width: 100%;

  }

}


@media (max-width: 750px) {

  .command-hero {

    flex-direction: column;

    align-items: flex-start;

  }


  .hero-actions {

    width: 100%;

    flex-wrap: wrap;

  }


  .command-metrics,
  .operations-summary {

    grid-template-columns:
      1fr;

  }


  .priority-row {

    grid-template-columns:
      1fr;

  }


  .priority-action {

    text-align: left;

  }


  .fleet-control-row {

    grid-template-columns:
      42px 1fr;

  }


  .fleet-route {

    text-align: left;

  }


  .operations-recommendation {

    flex-direction: column;

    align-items: flex-start;

  }


  .operations-recommendation
  .primary-btn {

    margin-left: 0;

  }

}

JavaScript : -
/* =========================================================
   CHAIN GUARD AI
   COMPLETE FRONTEND JAVASCRIPT
   API-FREE ROUTE INTELLIGENCE PROTOTYPE
   ========================================================= */


/* =========================================================
   GLOBAL DATA
   ========================================================= */

const gujaratCities = [
  "Ahmedabad",
  "Amreli",
  "Anand",
  "Bharuch",
  "Bhavnagar",
  "Bhuj",
  "Botad",
  "Dahod",
  "Deesa",
  "Dholka",
  "Gandhidham",
  "Gandhinagar",
  "Godhra",
  "Himmatnagar",
  "Jamnagar",
  "Jetpur",
  "Junagadh",
  "Kalol",
  "Kheda",
  "Mehsana",
  "Modasa",
  "Morbi",
  "Mundra",
  "Nadiad",
  "Navsari",
  "Palanpur",
  "Patan",
  "Porbandar",
  "Rajkot",
  "Surat",
  "Surendranagar",
  "Vadodara",
  "Valsad",
  "Vapi",
  "Veraval"
];


/* =========================================================
   SAMPLE SHIPMENTS
   ========================================================= */

const shipments = [
  {
    id: "S101",
    route: "Nadiad → Anand",
    product: "Medicine",
    risk: "Critical",
    action: "Reroute + Truck"
  },

  {
    id: "S102",
    route: "Nadiad → Anand",
    product: "Medicine",
    risk: "Medium",
    action: "Alternate Route"
  },

  {
    id: "S103",
    route: "Nadiad → Anand",
    product: "Vaccine",
    risk: "Critical",
    action: "Cold-chain Alert"
  },

  {
    id: "S104",
    route: "Nadiad → Ahmedabad",
    product: "Medical Kit",
    risk: "Low",
    action: "Continue"
  },

  {
    id: "S105",
    route: "Nadiad → Vadodara",
    product: "Medicine",
    risk: "High",
    action: "Reassign Fleet"
  },

  {
    id: "S106",
    route: "Anand → Vadodara",
    product: "Vaccine",
    risk: "Medium",
    action: "Monitor"
  }
];


/* =========================================================
   ALERTS
   ========================================================= */

const alerts = [
  {
    level: "Critical",
    title: "S103 temperature excursion",
    text:
      "Current temperature is 10°C; safe range is 2–8°C."
  },

  {
    level: "High",
    title: "Nadiad → Anand disruption",
    text:
      "Road blockage may affect active shipments."
  },

  {
    level: "Medium",
    title: "S102 route delay",
    text:
      "Alternate route recommended."
  }
];


/* =========================================================
   FLEET
   ========================================================= */

const fleet = [
  {
    id: "T07",
    status: "Idle",
    note: "Recommended for S101"
  },

  {
    id: "T09",
    status: "Idle",
    note: "Available"
  },

  {
    id: "T12",
    status: "In Transit",
    note: "Anand route"
  },

  {
    id: "T15",
    status: "Idle",
    note: "Available"
  },

  {
    id: "T18",
    status: "In Transit",
    note: "Vadodara route"
  }
];


/* =========================================================
   POPULATE CITY DROPDOWNS
   ========================================================= */

function populateCityDropdowns() {

  const origin =
    document.getElementById("origin");

  const destination =
    document.getElementById("destination");


  if (!origin || !destination) {
    return;
  }


  origin.innerHTML = "";
  destination.innerHTML = "";


  gujaratCities.forEach((city) => {

    const originOption =
      document.createElement("option");

    originOption.value = city;
    originOption.textContent = city;

    origin.appendChild(originOption);


    const destinationOption =
      document.createElement("option");

    destinationOption.value = city;
    destinationOption.textContent = city;

    destination.appendChild(destinationOption);

  });


  origin.value = "Nadiad";
  destination.value = "Anand";
}


/* =========================================================
   RISK CLASS
   ========================================================= */

function riskClass(risk) {

  return String(risk).toLowerCase();

}


/* =========================================================
   RENDER SHIPMENT TABLE
   ========================================================= */

function renderShipments() {

  const table =
    document.getElementById("shipment-table");


  if (!table) {
    return;
  }


  table.innerHTML =
    shipments
      .map((shipment) => {

        return `
          <tr>

            <td>
              <strong>
                ${shipment.id}
              </strong>
            </td>

            <td>
              ${shipment.route}
            </td>

            <td>
              ${shipment.product}
            </td>

            <td>

              <span
                class="risk-badge ${riskClass(
                  shipment.risk
                )}"
              >
                ${shipment.risk}
              </span>

            </td>

            <td>
              ${shipment.action}
            </td>

          </tr>
        `;

      })
      .join("");

}


/* =========================================================
   RENDER ALERTS
   ========================================================= */

function renderAlerts() {

  const list =
    document.getElementById("alerts-list");


  if (!list) {
    return;
  }


  list.innerHTML =
    alerts
      .map((alert) => {

        return `
          <div class="alert-item">

            <strong>

              <span
                class="risk-badge ${riskClass(
                  alert.level
                )}"
              >
                ${alert.level}
              </span>

              ${alert.title}

            </strong>

            <p>
              ${alert.text}
            </p>

          </div>
        `;

      })
      .join("");

}


/* =========================================================
   RENDER FLEET
   ========================================================= */

function renderFleet() {

  const list =
    document.getElementById("fleet-list");


  if (!list) {
    return;
  }


  list.innerHTML =
    fleet
      .map((vehicle) => {

        const badgeClass =
          vehicle.status === "Idle"
            ? "low"
            : "medium";


        return `
          <div class="fleet-item">

            <div>

              <strong>
                ${vehicle.id}
              </strong>

              <small>
                ${vehicle.note}
              </small>

            </div>

            <span
              class="risk-badge ${badgeClass}"
            >
              ${vehicle.status}
            </span>

          </div>
        `;

      })
      .join("");

}


/* =========================================================
   PAGE NAVIGATION
   ========================================================= */

function showSection(sectionId) {

  const sections =
    document.querySelectorAll(
      ".page-section"
    );


  sections.forEach((section) => {

    section.classList.toggle(
      "active-section",
      section.id === sectionId
    );

  });


  const buttons =
    document.querySelectorAll(
      ".nav-item"
    );


  buttons.forEach((button) => {

    button.classList.toggle(
      "active",
      button.dataset.section === sectionId
    );

  });


  const titles = {

    dashboard: "Dashboard",

    analysis: "Disruption Analysis",

    operations: "Operations"

  };


  const pageTitle =
    document.getElementById(
      "page-title"
    );


  if (pageTitle) {

    pageTitle.textContent =
      titles[sectionId];

  }

}


/* =========================================================
   ROUTE DATA GENERATOR
   API-FREE PROTOTYPE
   ========================================================= */

function generateRoutes(
  severity,
  temperatureOutOfRange
) {

  /*
    Prototype route information.

    Later:
    IBM BoB + real routing API can replace this.
  */


  const baseDistance =
    Math.floor(
      18 +
      Math.random() * 18
    );


  const baseTime =
    Math.floor(
      28 +
      Math.random() * 18
    );


  const routeA = {

    name: "Route A",

    distance:
      baseDistance,

    time:
      baseTime,

    risk:
      severity === "High" ||
      severity === "Critical"
        ? "High"
        : "Medium"

  };


  const routeB = {

    name: "Route B",

    distance:
      baseDistance + 6,

    time:
      baseTime + 9,

    risk:
      "Low"

  };


  const routeC = {

    name: "Route C",

    distance:
      baseDistance + 12,

    time:
      baseTime + 17,

    risk:
      "Medium"

  };


  let recommendedIndex = 0;


  /*
    High/Critical:
    prefer alternate route.
  */


  if (
    severity === "High" ||
    severity === "Critical"
  ) {

    recommendedIndex = 1;

  }


  /*
    Temperature problem:
    prioritize safer alternate.
  */


  if (
    temperatureOutOfRange
  ) {

    recommendedIndex = 1;

  }


  return {

    routes: [
      routeA,
      routeB,
      routeC
    ],

    recommendedIndex

  };

}


/* =========================================================
   CREATE ROUTE MAP
   ========================================================= */

function createRouteMap(
  origin,
  destination,
  disruption
) {

  return `

    <div class="route-map">

      <div class="map-topbar">

        <div>

          <strong>
            ${origin} → ${destination}
          </strong>

          <span>
            Route intelligence
          </span>

        </div>

        <span class="map-status">
          ANALYSIS READY
        </span>

      </div>


      <div class="map-area">

        <div class="map-grid">
        </div>


        <!-- ROUTES -->

        <div class="map-road road-a">
        </div>

        <div class="map-road road-b">
        </div>

        <div class="map-road road-c">
        </div>


        <!-- ORIGIN -->

        <div
          class="city-marker origin-marker"
        >

          <span class="marker-dot">
          </span>

          <label>
            ${origin}
          </label>

        </div>


        <!-- DESTINATION -->

        <div
          class="city-marker destination-marker"
        >

          <span
            class="marker-dot destination"
          >
          </span>

          <label>
            ${destination}
          </label>

        </div>


        <!-- DISRUPTION -->

        <div class="disruption-marker">

          🚨

          <span>
            ${disruption}
          </span>

        </div>


        <!-- ROUTE LABELS -->

        <div
          class="map-route-label route-label-a"
        >
          Route A
        </div>


        <div
          class="map-route-label route-label-b"
        >
          Route B
        </div>


        <div
          class="map-route-label route-label-c"
        >
          Route C
        </div>

      </div>

    </div>

  `;
}


/* =========================================================
   TEMPERATURE CHECK
   ========================================================= */

function getTemperatureStatus(
  temperature,
  minTemperature,
  maxTemperature
) {

  const outOfRange =
    temperature < minTemperature ||
    temperature > maxTemperature;


  return {

    outOfRange,

    message: outOfRange

      ? `
        🔴 Temperature is outside
        the safe range.
      `

      : `
        🟢 Temperature is within
        the safe range.
      `

  };

}


/* =========================================================
   AI RECOMMENDATION
   ========================================================= */

function getAIRecommendation(
  routes,
  recommendedIndex,
  severity,
  temperatureStatus,
  trucks,
  shipmentType
) {

  const recommendedRoute =
    routes[recommendedIndex];


  let reason = "";


  if (
    temperatureStatus.outOfRange
  ) {

    reason =
      "The shipment temperature is outside the safe range, so shipment safety and quick handling are prioritized.";

  }

  else if (
    severity === "Critical"
  ) {

    reason =
      "The disruption is critical, so the lower-risk alternate route is recommended.";

  }

  else if (
    severity === "High"
  ) {

    reason =
      "The disruption is high severity, so an alternate route is preferred.";

  }

  else {

    reason =
      "The selected route provides a balanced option for the current shipment.";

  }


  return `

    <div class="ai-recommendation">

      <h4>
        🤖 ChainGuard AI Recommendation
      </h4>


      <p>

        <strong>
          Recommended:
          ${recommendedRoute.name}
        </strong>

      </p>


      <p
        style="margin-top:8px"
      >

        Distance:

        <strong>
          ${recommendedRoute.distance} km
        </strong>

        ·

        Travel time:

        <strong>
          ${recommendedRoute.time} min
        </strong>

      </p>


      <p
        style="margin-top:8px"
      >

        Shipment:

        <strong>
          ${shipmentType}
        </strong>

      </p>


      <p
        style="margin-top:8px"
      >

        ${reason}

      </p>


      <p
        style="margin-top:8px"
      >

        Available fleet:

        <strong>
          ${trucks} truck(s)
        </strong>

      </p>


      <div class="route-actions">

        <button
          class="route-action-btn"
          id="accept-route"
        >

          ✅ Accept
          ${recommendedRoute.name}

        </button>


        <button
          class="route-action-btn"
          id="choose-route"
        >

          🔄 Choose Another Route

        </button>

      </div>

    </div>

  `;

}


/* =========================================================
   ANALYZE DISRUPTION
   ========================================================= */

async function analyzeDisruption() {

  /* ================= INPUTS ================= */

  const origin =
    document.getElementById(
      "origin"
    ).value;


  const destination =
    document.getElementById(
      "destination"
    ).value;


  const disruption =
    document.getElementById(
      "disruption"
    ).value;


  const severity =
    document.getElementById(
      "severity"
    ).value;


  const trucks =
    Number(
      document.getElementById(
        "trucks"
      ).value
    ) || 0;


  const shipmentType =
    document.getElementById(
      "shipment-type"
    ).value;


  const temperature =
    Number(
      document.getElementById(
        "temperature"
      ).value
    );


  const minTemperature =
    Number(
      document.getElementById(
        "temp-min"
      ).value
    );


  const maxTemperature =
    Number(
      document.getElementById(
        "temp-max"
      ).value
    );


  /* ================= VALIDATION ================= */

  if (
    origin === destination
  ) {

    alert(
      "Origin and destination should be different."
    );

    return;

  }


  /* ================= TEMPERATURE ================= */

  const temperatureStatus =
    getTemperatureStatus(
      temperature,
      minTemperature,
      maxTemperature
    );


  /* ================= ROUTES ================= */

  const routeData =
    generateRoutes(
      severity,
      temperatureStatus.outOfRange
    );


  /* ================= RESULT ================= */

  const result =
    document.getElementById(
      "analysis-result"
    );


  result.className =
    "analysis-result";


  /* ================= BASIC INFO ================= */

  result.innerHTML = `

    <div class="result-box">

      <h4>

        ${origin}
        →
        ${destination}

      </h4>


      <p>

        <strong>
          Disruption:
        </strong>

        ${disruption}

        ·

        <strong>
          Severity:
        </strong>

        ${severity}

        ·

        <strong>
          Shipment:
        </strong>

        ${shipmentType}

      </p>

    </div>


    <!-- TEMPERATURE -->

    <div class="result-box">

      <h4>
        🌡️ Temperature Check
      </h4>


      <p>

        Current temperature:

        <strong>
          ${temperature}°C
        </strong>

        <br>

        Safe range:

        <strong>
          ${minTemperature}°C
          –
          ${maxTemperature}°C
        </strong>

      </p>


      <div
        class="temp-status ${
          temperatureStatus.outOfRange
            ? "critical"
            : "low"
        }"
        style="margin-top:10px"
      >

        ${temperatureStatus.message}

      </div>

    </div>


    <!-- MAP -->

    <div class="result-box">

      <div class="map-title">

        <h4>
          🗺️ Route Intelligence Map
        </h4>


        <span class="panel-tag">
          CHAIN GUARD MAP
        </span>

      </div>


      ${createRouteMap(
        origin,
        destination,
        disruption
      )}


      <!-- ROUTES -->

      <div
        id="route-options"
        class="route-options"
      >

        ${routeData.routes
          .map(
            (route, index) => {

              const isRecommended =
                index ===
                routeData.recommendedIndex;


              return `

                <div
                  class="
                    route-option
                    ${
                      isRecommended
                        ? "recommended"
                        : ""
                    }
                  "

                  data-route="${index}"
                >

                  <div>

                    <h5>

                      ${
                        isRecommended
                          ? "🤖 AI Recommended"
                          : route.name
                      }

                    </h5>


                    <p>

                      Risk:
                      ${route.risk}

                    </p>

                  </div>


                  <div
                    class="route-time"
                  >

                    <strong>
                      ${route.time} min
                    </strong>

                    <span>
                      ${route.distance} km
                    </span>

                  </div>

                </div>

              `;

            }
          )
          .join("")}

      </div>

    </div>

  `;


  /* ================= AI ================= */

  result.insertAdjacentHTML(
    "beforeend",

    getAIRecommendation(
      routeData.routes,
      routeData.recommendedIndex,
      severity,
      temperatureStatus,
      trucks,
      shipmentType
    )
  );

  renderAIExplanation({
    routeData,
    severity,
    temperatureStatus,
    temperature,
    minTemperature,
    maxTemperature,
    trucks,
    shipmentType,
    disruption
  });


  /* =====================================================
     ROUTE SELECTION
     ===================================================== */

  const routeButtons =
    document.querySelectorAll(
      ".route-option"
    );


  routeButtons.forEach(
    (button) => {

      button.addEventListener(
        "click",
        () => {

          routeButtons.forEach(
            (item) => {

              item.classList.remove(
                "recommended"
              );

            }
          );


          button.classList.add(
            "recommended"
          );


          const routeIndex =
            Number(
              button.dataset.route
            );


          const selectedRoute =
            routeData.routes[
              routeIndex
            ];


          const aiText =
            document.querySelector(
              ".ai-recommendation"
            );


          if (aiText) {

            aiText.querySelector(
              "h4"
            ).textContent =
              `🤖 Selected: ${selectedRoute.name}`;

          }

        }
      );

    }
  );


  /* =====================================================
     ACCEPT ROUTE
     ===================================================== */

  const acceptButton =
    document.getElementById(
      "accept-route"
    );


  if (acceptButton) {

    acceptButton.addEventListener(
      "click",
      () => {

        const recommended =
          routeData.routes[
            routeData.recommendedIndex
          ];


        alert(
          `✅ ${recommended.name} accepted for ${origin} → ${destination}.`
        );

      }
    );

  }


  /* =====================================================
     CHOOSE ANOTHER ROUTE
     ===================================================== */

  const chooseButton =
    document.getElementById(
      "choose-route"
    );


  if (chooseButton) {

    chooseButton.addEventListener(
      "click",
      () => {

        const options =
          document.querySelector(
            ".route-options"
          );


        if (options) {

          options.scrollIntoView({
            behavior: "smooth",
            block: "center"
          });

        }

      }
    );

  }

}



/* =========================================================
   FLEET UTILISATION OVERVIEW
   ========================================================= */

function renderFleetUtilization() {
  /*
    Dashboard/operations sample fleet:
    12 total assets = 5 in transit + 7 available.
    The chart is intentionally API-free and uses the same
    demo totals already shown elsewhere in the UI.
  */
  const totalFleet = 12;
  const activeFleet = 5;
  const idleFleet = 7;

  const utilization =
    totalFleet > 0
      ? Math.round((activeFleet / totalFleet) * 100)
      : 0;

  const chart =
    document.getElementById("fleet-utilization-chart");

  const value =
    document.getElementById("fleet-utilization-value");

  const active =
    document.getElementById("fleet-active-count");

  const idle =
    document.getElementById("fleet-idle-count");

  const total =
    document.getElementById("fleet-total-count");

  if (chart) {
    chart.style.setProperty(
      "--utilization",
      `${utilization}%`
    );

    chart.setAttribute(
      "aria-label",
      `Fleet utilization ${utilization} percent`
    );
  }

  if (value) {
    value.textContent = `${utilization}%`;
  }

  if (active) {
    active.textContent = String(activeFleet).padStart(2, "0");
  }

  if (idle) {
    idle.textContent = String(idleFleet).padStart(2, "0");
  }

  if (total) {
    total.textContent = String(totalFleet).padStart(2, "0");
  }
}

/* =========================================================
   AI EXPLANATION / DECISION TRACE
   ========================================================= */

function renderAIExplanation({
  routeData,
  severity,
  temperatureStatus,
  temperature,
  minTemperature,
  maxTemperature,
  trucks,
  shipmentType,
  disruption
}) {
  const panel = document.getElementById("ai-explanation-panel");
  const routeEl = document.getElementById("ai-explanation-route");
  const riskEl = document.getElementById("ai-explanation-risk");
  const confidenceValue = document.getElementById("ai-confidence-value");
  const confidenceLabel = document.getElementById("ai-confidence-label");
  const confidenceBar = document.getElementById("ai-confidence-bar");
  const savingEl = document.getElementById("ai-estimated-saving");
  const reasonGrid = document.getElementById("ai-reason-grid");

  if (!panel || !routeData || !routeData.routes?.length) {
    return;
  }

  const recommended = routeData.routes[routeData.recommendedIndex];
  const alternatives = routeData.routes.filter(
    (_, index) => index !== routeData.recommendedIndex
  );

  const fastestAlternative = alternatives.reduce((best, route) =>
    route.time < best.time ? route : best, alternatives[0]
  );

  const shortestAlternative = alternatives.reduce((best, route) =>
    route.distance < best.distance ? route : best, alternatives[0]
  );

  const timeDelta = Math.abs(
    recommended.time - fastestAlternative.time
  );

  const distanceDelta = Math.abs(
    recommended.distance - shortestAlternative.distance
  );

  let confidence = 72;

  if (temperatureStatus.outOfRange) {
    confidence += 9;
  } else {
    confidence += 5;
  }

  if (trucks >= 2) {
    confidence += 5;
  } else if (trucks === 1) {
    confidence += 2;
  }

  if (severity === "Critical") {
    confidence += 6;
  } else if (severity === "High") {
    confidence += 4;
  } else if (severity === "Medium") {
    confidence += 2;
  }

  if (recommended.risk === "Low") {
    confidence += 3;
  }

  confidence = Math.min(95, Math.max(68, confidence));

  const timeReason =
    recommended.time <= fastestAlternative.time
      ? `${timeDelta} min faster than ${fastestAlternative.name}`
      : `${timeDelta} min slower than ${fastestAlternative.name}, but with a lower-risk profile`;

  const distanceReason =
    recommended.distance <= shortestAlternative.distance
      ? `${distanceDelta} km shorter than ${shortestAlternative.name}`
      : `${distanceDelta} km longer than ${shortestAlternative.name}, trading distance for safer routing`;

  const fleetReason =
    trucks >= 2
      ? `${trucks} trucks available for rapid reassignment`
      : trucks === 1
        ? "1 truck available; AI keeps the plan conservative"
        : "No truck capacity entered; route choice prioritizes continuity";

  let safetyReason = "";

  if (temperatureStatus.outOfRange) {
    safetyReason =
      `${shipmentType} temperature ${temperature}°C is outside the ${minTemperature}–${maxTemperature}°C safe range`;
  } else if (severity === "Critical" || severity === "High") {
    safetyReason =
      `${severity} ${disruption.toLowerCase()} risk makes a lower-risk route preferable`;
  } else {
    safetyReason =
      `${shipmentType} temperature is within range and ${severity.toLowerCase()} disruption risk is manageable`;
  }

  const savingsBase =
    Math.max(0, fastestAlternative.time - recommended.time) * 30 +
    Math.max(0, shortestAlternative.distance - recommended.distance) * 45;

  const riskBonus = recommended.risk === "Low" ? 420 : recommended.risk === "Medium" ? 250 : 120;
  const temperatureBonus = temperatureStatus.outOfRange ? 180 : 90;
  const fleetBonus = Math.min(trucks, 4) * 65;
  const estimatedSaving = Math.max(520, Math.round((savingsBase + riskBonus + temperatureBonus + fleetBonus) / 10) * 10);

  const confidenceText =
    confidence >= 90
      ? "Very high"
      : confidence >= 82
        ? "High"
        : confidence >= 75
          ? "Good"
          : "Moderate";

  routeEl.textContent = `${recommended.name} · ${recommended.time} min · ${recommended.distance} km`;
  riskEl.textContent = `${recommended.risk.toUpperCase()} RISK`;
  confidenceValue.textContent = `${confidence}%`;
  confidenceLabel.textContent = confidenceText;
  confidenceBar.style.width = `${confidence}%`;
  savingEl.textContent = `₹ ${estimatedSaving.toLocaleString("en-IN")}`;

  reasonGrid.innerHTML = `
    <div class="ai-reason-item">
      <span class="ai-reason-check">✓</span>
      <div>
        <strong>Route efficiency</strong>
        <p>${timeReason}</p>
      </div>
    </div>

    <div class="ai-reason-item">
      <span class="ai-reason-check">✓</span>
      <div>
        <strong>Distance strategy</strong>
        <p>${distanceReason}</p>
      </div>
    </div>

    <div class="ai-reason-item">
      <span class="ai-reason-check">✓</span>
      <div>
        <strong>Fleet readiness</strong>
        <p>${fleetReason}</p>
      </div>
    </div>

    <div class="ai-reason-item">
      <span class="ai-reason-check">✓</span>
      <div>
        <strong>Shipment & risk</strong>
        <p>${safetyReason}</p>
      </div>
    </div>
  `;

  panel.classList.add("is-ready");
}


/* =========================================================
   NAVIGATION EVENTS
   ========================================================= */

document
  .querySelectorAll(
    ".nav-item"
  )
  .forEach(
    (button) => {

      button.addEventListener(
        "click",
        () => {

          showSection(
            button.dataset.section
          );

        }
      );

    }
  );


/* =========================================================
   DASHBOARD / OPERATIONS → ANALYSIS
   ========================================================= */

function bindOpenAnalysisButton(buttonId) {
  const button = document.getElementById(buttonId);

  if (!button) {
    return;
  }

  button.addEventListener("click", (event) => {
    event.preventDefault();

    showSection("analysis");

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

bindOpenAnalysisButton("open-analysis");
bindOpenAnalysisButton("open-analysis-operations");


/* =========================================================
   ANALYZE BUTTON
   ========================================================= */

const analyzeButton =
  document.getElementById(
    "analyze-btn"
  );


if (analyzeButton) {

  analyzeButton.addEventListener(
    "click",
    analyzeDisruption
  );

}


/* =========================================================
   INITIALIZE
   ========================================================= */

populateCityDropdowns();

renderShipments();

renderAlerts();

renderFleet();

renderFleetUtilization();

/* Helpful navigation for the dashboard's compact controls */
document
  .querySelectorAll(".mini-btn")
  .forEach((button) => {
    if (button.textContent.trim() === "View All") {
      button.addEventListener("click", () => {
        showSection("operations");

        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      });
    }
  });
