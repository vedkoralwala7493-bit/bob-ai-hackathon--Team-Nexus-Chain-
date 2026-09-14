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

        •

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

        •

        <strong>
          Severity:
        </strong>

        ${severity}

        •

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

  routeEl.textContent = `${recommended.name} • ${recommended.time} min • ${recommended.distance} km`;
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
