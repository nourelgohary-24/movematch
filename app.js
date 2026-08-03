const cityData = {
  Seattle: {
    rentBaseline: [1600, 2200],
    center: { lat: 47.6062, lon: -122.3321 },
    neighborhoods: [
      { name: "Northgate", vibe: "affordability", lat: 47.7086, lon: -122.3270, pros: "Transit access, safer feel", cons: "Lower nightlife density" },
      { name: "Capitol Hill", vibe: "nightlife", lat: 47.6253, lon: -122.3222, pros: "Lively, walkable, social", cons: "Higher rent, noisier" },
      { name: "Ballard", vibe: "quiet", lat: 47.6687, lon: -122.3868, pros: "Neighborhood feel, food scene", cons: "Some routes are slower" },
      { name: "Fremont", vibe: "walkability", lat: 47.6515, lon: -122.3509, pros: "Tech-friendly, central", cons: "Competitive inventory" }
    ]
  },
  Bellevue: {
    rentBaseline: [1900, 2800],
    center: { lat: 47.6101, lon: -122.2015 },
    neighborhoods: [
      { name: "Downtown Bellevue", vibe: "walkability", lat: 47.6154, lon: -122.2017, pros: "Close to offices, polished core", cons: "Highest rents" },
      { name: "Crossroads", vibe: "affordability", lat: 47.6192, lon: -122.1267, pros: "Better value, diverse food", cons: "Less nightlife" },
      { name: "Wilburton", vibe: "quiet", lat: 47.5958, lon: -122.1806, pros: "Residential with easy access", cons: "Limited late-night scene" },
      { name: "Bel-Red", vibe: "nightlife", lat: 47.6287, lon: -122.1453, pros: "Growing district, newer units", cons: "Construction pockets" }
    ]
  },
  Redmond: {
    rentBaseline: [1800, 2600],
    center: { lat: 47.6740, lon: -122.1215 },
    neighborhoods: [
      { name: "Downtown Redmond", vibe: "walkability", lat: 47.6739, lon: -122.1215, pros: "Strong transit, offices nearby", cons: "Rising rents" },
      { name: "Overlake", vibe: "affordability", lat: 47.6480, lon: -122.1387, pros: "Good value near tech hubs", cons: "Car traffic" },
      { name: "Education Hill", vibe: "quiet", lat: 47.6935, lon: -122.1021, pros: "Calmer and greener", cons: "Less nightlife" },
      { name: "Bear Creek", vibe: "nightlife", lat: 47.6762, lon: -122.0831, pros: "Access to shopping and dining", cons: "More suburban feel" }
    ]
  },
  Tacoma: {
    rentBaseline: [1400, 2100],
    center: { lat: 47.2529, lon: -122.4443 },
    neighborhoods: [
      { name: "North End", vibe: "quiet", lat: 47.2699, lon: -122.4785, pros: "Stable residential blocks", cons: "Longer regional commute" },
      { name: "Stadium District", vibe: "walkability", lat: 47.2588, lon: -122.4425, pros: "Urban vibe and views", cons: "Limited inventory" },
      { name: "6th Avenue", vibe: "nightlife", lat: 47.2553, lon: -122.4631, pros: "Bars and social scene", cons: "Weekend noise" },
      { name: "South Tacoma", vibe: "affordability", lat: 47.2127, lon: -122.4821, pros: "Lower rents", cons: "Less polished streetscape" }
    ]
  },
  Spokane: {
    rentBaseline: [1200, 1900],
    center: { lat: 47.6588, lon: -117.4260 },
    neighborhoods: [
      { name: "South Hill", vibe: "quiet", lat: 47.6298, lon: -117.4089, pros: "Residential and established", cons: "Hills in winter" },
      { name: "Downtown Spokane", vibe: "nightlife", lat: 47.6572, lon: -117.4235, pros: "Closest to offices and events", cons: "Higher parking cost" },
      { name: "Kendall Yards", vibe: "walkability", lat: 47.6647, lon: -117.4363, pros: "Modern and walkable", cons: "Price premium" },
      { name: "Hillyard", vibe: "affordability", lat: 47.7145, lon: -117.3676, pros: "Budget-friendly", cons: "Longer commute into core" }
    ]
  },
  Everett: {
    rentBaseline: [1450, 2200],
    center: { lat: 47.97898, lon: -122.2021 },
    neighborhoods: [
      { name: "Downtown Everett", vibe: "walkability", lat: 47.9781, lon: -122.2024, pros: "Transit and amenities", cons: "Mixed housing quality" },
      { name: "Northwest Everett", vibe: "quiet", lat: 47.9967, lon: -122.2233, pros: "Historic charm, calmer streets", cons: "Higher demand pockets" },
      { name: "Lakeside", vibe: "affordability", lat: 47.9467, lon: -122.2146, pros: "Good value options", cons: "Fewer nightlife options" },
      { name: "Port Gardner", vibe: "nightlife", lat: 47.9716, lon: -122.2058, pros: "Closer to waterfront activity", cons: "Smaller inventory" }
    ]
  },
  Olympia: {
    rentBaseline: [1350, 2050],
    center: { lat: 47.0379, lon: -122.9007 },
    neighborhoods: [
      { name: "Downtown Olympia", vibe: "walkability", lat: 47.0456, lon: -122.8995, pros: "Shops and offices nearby", cons: "Older housing stock" },
      { name: "South Capitol", vibe: "quiet", lat: 47.0336, lon: -122.9041, pros: "Tree-lined and residential", cons: "Limited nightlife" },
      { name: "Westside", vibe: "affordability", lat: 47.0419, lon: -122.9484, pros: "Budget options and services", cons: "Car-dependent zones" },
      { name: "Eastside", vibe: "nightlife", lat: 47.0412, lon: -122.8802, pros: "Growing social pockets", cons: "Patchy transit" }
    ]
  },
  "Vancouver (WA)": {
    rentBaseline: [1500, 2250],
    center: { lat: 45.6387, lon: -122.6615 },
    neighborhoods: [
      { name: "Downtown Vancouver", vibe: "walkability", lat: 45.6280, lon: -122.6711, pros: "Waterfront and amenities", cons: "Premium pricing areas" },
      { name: "Fisher's Landing", vibe: "quiet", lat: 45.6022, lon: -122.4912, pros: "Suburban calm and parks", cons: "Longer downtown trips" },
      { name: "Rose Village", vibe: "affordability", lat: 45.6435, lon: -122.6547, pros: "Better value", cons: "Older units common" },
      { name: "Uptown Village", vibe: "nightlife", lat: 45.6419, lon: -122.6808, pros: "Restaurants and social spots", cons: "Limited large rentals" }
    ]
  },
  Austin: {
    rentBaseline: [1400, 2000],
    center: { lat: 30.2672, lon: -97.7431 },
    neighborhoods: [
      { name: "North Loop", vibe: "quiet", lat: 30.3036, lon: -97.7269, pros: "Lower price pressure", cons: "Fewer late options" },
      { name: "East Austin", vibe: "nightlife", lat: 30.2615, lon: -97.7180, pros: "Social, trendy", cons: "Rapidly rising prices" },
      { name: "Mueller", vibe: "walkability", lat: 30.3030, lon: -97.7044, pros: "Planned community, parks", cons: "Can feel suburban" },
      { name: "South Lamar", vibe: "affordability", lat: 30.2445, lon: -97.7786, pros: "Balanced access and cost", cons: "Traffic" }
    ]
  },
  "New York": {
    rentBaseline: [2200, 3200],
    center: { lat: 40.7128, lon: -74.0060 },
    neighborhoods: [
      { name: "Astoria", vibe: "affordability", lat: 40.7644, lon: -73.9235, pros: "Value and food", cons: "Older stock" },
      { name: "Williamsburg", vibe: "nightlife", lat: 40.7081, lon: -73.9571, pros: "Energy, social scene", cons: "Premium pricing" },
      { name: "Park Slope", vibe: "quiet", lat: 40.6681, lon: -73.9800, pros: "Safer, residential", cons: "Less late-night action" },
      { name: "Long Island City", vibe: "walkability", lat: 40.7447, lon: -73.9485, pros: "Fast transit, modern units", cons: "Higher base rents" }
    ]
  },
  Chicago: {
    rentBaseline: [1400, 2100],
    center: { lat: 41.8781, lon: -87.6298 },
    neighborhoods: [
      { name: "Lakeview", vibe: "nightlife", lat: 41.9417, lon: -87.6533, pros: "Young professional hub", cons: "Weekend noise" },
      { name: "Lincoln Square", vibe: "quiet", lat: 41.9680, lon: -87.6887, pros: "Calmer pace", cons: "Longer to downtown" },
      { name: "Logan Square", vibe: "walkability", lat: 41.9239, lon: -87.7093, pros: "Transit and culture", cons: "Inventory swings" },
      { name: "Bridgeport", vibe: "affordability", lat: 41.8376, lon: -87.6513, pros: "Great value", cons: "Fewer luxury options" }
    ]
  },
  "San Francisco": {
    rentBaseline: [2400, 3400],
    center: { lat: 37.7749, lon: -122.4194 },
    neighborhoods: [
      { name: "Sunset", vibe: "quiet", lat: 37.7534, lon: -122.4944, pros: "Calmer streets", cons: "Longer commute" },
      { name: "Mission", vibe: "nightlife", lat: 37.7599, lon: -122.4148, pros: "Energy and dining", cons: "Higher competition" },
      { name: "Inner Richmond", vibe: "affordability", lat: 37.7802, lon: -122.4670, pros: "Better value", cons: "Foggier climate" },
      { name: "Noe Valley", vibe: "walkability", lat: 37.7502, lon: -122.4337, pros: "Village feel", cons: "Premium pricing" }
    ]
  },
  "Los Angeles": {
    rentBaseline: [1800, 2700],
    center: { lat: 34.0522, lon: -118.2437 },
    neighborhoods: [
      { name: "Culver City", vibe: "walkability", lat: 34.0211, lon: -118.3965, pros: "Transit and offices", cons: "Costly newer units" },
      { name: "Koreatown", vibe: "nightlife", lat: 34.0628, lon: -118.3009, pros: "Late scene, central", cons: "Parking challenges" },
      { name: "Pasadena", vibe: "quiet", lat: 34.1478, lon: -118.1445, pros: "Safer and calmer", cons: "Longer drive routes" },
      { name: "North Hollywood", vibe: "affordability", lat: 34.1722, lon: -118.3790, pros: "Value and metro access", cons: "Heat and traffic" }
    ]
  }
};

const form = document.getElementById("relocation-form");
if (form) {
  const homeTypeSelect = document.getElementById("home-type-select");
  const houseFinanceSection = document.getElementById("house-finance-section");
  const wantsDownPayment = document.getElementById("wants-down-payment");
  const downPaymentAmountWrap = document.getElementById("down-payment-amount-wrap");
  const downPaymentAmountInput = document.getElementById("down-payment-amount");

  function syncHouseFinanceUI() {
    const isHouse = homeTypeSelect && homeTypeSelect.value === "House";
    houseFinanceSection.hidden = !isHouse;

    if (!isHouse) {
      wantsDownPayment.value = "";
      downPaymentAmountWrap.hidden = true;
      downPaymentAmountInput.value = "";
      downPaymentAmountInput.required = false;
      return;
    }

    const wantsPlan = wantsDownPayment.value === "Yes";
    downPaymentAmountWrap.hidden = !wantsPlan;
    downPaymentAmountInput.required = wantsPlan;
    if (!wantsPlan) downPaymentAmountInput.value = "";
  }

  homeTypeSelect.addEventListener("change", syncHouseFinanceUI);
  wantsDownPayment.addEventListener("change", syncHouseFinanceUI);
  syncHouseFinanceUI();

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const answers = Object.fromEntries(formData.entries());
    localStorage.setItem("moveMatchAnswers", JSON.stringify(answers));
    window.location.href = "results.html";
  });
}

function toNum(v) {
  return Number(String(v).replace(/[^0-9.-]/g, "")) || 0;
}

function dollar(v) {
  return `$${Math.round(v).toLocaleString()}`;
}

function estimateHomePriceFromMonthlyBudget(monthlyBudget) {
  const annualBudget = monthlyBudget * 12;
  return annualBudget / 0.07;
}

function calculateRentRange(salary, cityBaseline, roommates) {
  const monthlyIncome = salary / 12;
  const targetLow = monthlyIncome * 0.25;
  const targetHigh = monthlyIncome * 0.32;
  let low = Math.max(cityBaseline[0], targetLow);
  let high = Math.min(cityBaseline[1], targetHigh);

  if (roommates === "Yes") high *= 1.1;

  if (low > high) {
    low = cityBaseline[0] * 0.9;
    high = cityBaseline[1] * 0.95;
  }

  return [Math.round(low / 50) * 50, Math.round(high / 50) * 50];
}

function haversineMiles(lat1, lon1, lat2, lon2) {
  const toRad = (v) => (v * Math.PI) / 180;
  const R = 3958.8;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
}

function estimateCommuteMinutes(distanceMiles, workMode, hasCar) {
  if (workMode === "Remote") return "0-5 min";
  const avgMph = hasCar === "Yes" ? 20 : 12;
  const base = Math.round((distanceMiles / avgMph) * 60);
  const trafficBuffer = workMode === "Hybrid" ? 8 : 12;
  return `${Math.max(8, base + trafficBuffer)}-${Math.max(12, base + trafficBuffer + 12)} min`;
}

async function geocodeLocation(query, cityFallback) {
  if (!query || !query.trim()) return cityFallback;
  const q = encodeURIComponent(query.trim());
  const url = `https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${q}`;

  try {
    const response = await fetch(url, {
      headers: {
        "Accept": "application/json"
      }
    });
    if (!response.ok) return cityFallback;
    const data = await response.json();
    if (!data.length) return cityFallback;
    return { lat: Number(data[0].lat), lon: Number(data[0].lon), source: "geocoded" };
  } catch (error) {
    return cityFallback;
  }
}

function scoreNeighborhood(n, preferences, commuteGap) {
  let score = 0;
  if (n.vibe === preferences.lifestyle.toLowerCase()) score += 3;
  if (preferences.homeType === "House" && n.vibe === "quiet") score += 2;
  if (preferences.homeType === "Apartment" && (n.vibe === "walkability" || n.vibe === "nightlife")) score += 1;
  if (preferences.car === "No" && (n.vibe === "walkability" || n.name === "Northgate" || n.name === "Long Island City")) score += 2;
  if (commuteGap <= 10) score += 2;
  if (commuteGap <= 20) score += 1;
  if (preferences.pets === "Yes" && (n.name === "Northgate" || n.name === "Mueller" || n.name === "Lincoln Square" || n.name === "Sunset" || n.name === "Pasadena")) score += 1;
  return score;
}

function buildListingLinks(city, neighborhood, homeType) {
  const typeWord = homeType === "House" ? "house" : "apartment";
  const query = encodeURIComponent(`${neighborhood} ${city} ${typeWord} for rent`);
  return {
    zillow: `https://www.zillow.com/homes/for_rent/${query}_rb/`,
    apartments: `https://www.apartments.com/search/?q=${query}`,
    rent: `https://www.rent.com/search?q=${query}`
  };
}

async function renderResults() {
  const root = document.getElementById("results-root");
  if (!root) return;

  const raw = localStorage.getItem("moveMatchAnswers");
  if (!raw) {
    root.innerHTML = `<section class="panel"><h1>No data yet</h1><p>Please complete the questionnaire first.</p><a class="btn" href="questionnaire.html">Go to Questionnaire</a></section>`;
    return;
  }

  const answers = JSON.parse(raw);
  const city = cityData[answers.city] ? answers.city : "Seattle";
  const salary = toNum(answers.salary);
  const maxRent = toNum(answers.maxRent);
  const commuteTarget = toNum(answers.commute);
  const cityInfo = cityData[city];
  const officeQuery = `${answers.workAddress || ""} ${answers.companyName || ""} ${city}`.trim();

  root.innerHTML = `<section class="panel"><h1>Building your recommendations...</h1><p>We are calculating commute distance from your work location and ranking neighborhoods.</p></section>`;

  const office = await geocodeLocation(officeQuery, { ...cityInfo.center, source: "fallback" });

  const [suggestedLow, suggestedHigh] = calculateRentRange(salary, cityInfo.rentBaseline, answers.roommates);
  const adjustedHigh = answers.homeType === "House" ? Math.round((suggestedHigh * 1.1) / 50) * 50 : suggestedHigh;

  const ranked = cityInfo.neighborhoods
    .map((n) => {
      const distance = haversineMiles(office.lat, office.lon, n.lat, n.lon);
      const distanceRounded = Math.round(distance * 10) / 10;
      const commuteEstimate = estimateCommuteMinutes(distanceRounded, answers.workMode, answers.car);
      const commuteMidpoint = toNum(commuteEstimate.split("-")[0]);
      const commuteGap = Math.abs(commuteMidpoint - commuteTarget);
      const score = scoreNeighborhood(n, answers, commuteGap);
      return { ...n, distance: distanceRounded, commuteEstimate, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  const warning = maxRent < suggestedLow
    ? `Your max rent (${dollar(maxRent)}) is below the recommended range for ${city}. Consider roommates or longer commute.`
    : maxRent > adjustedHigh
      ? `You can afford your stated max rent, but staying near ${dollar(adjustedHigh)} protects savings and flexibility.`
      : `Your max rent is aligned with your affordability target.`;

  const monthlyGross = salary / 12;
  const budget = {
    rent: Math.min(maxRent || adjustedHigh, adjustedHigh),
    utilities: monthlyGross * 0.06,
    transport: monthlyGross * 0.08,
    groceries: monthlyGross * 0.12,
    savings: monthlyGross * 0.2,
    fun: monthlyGross * 0.1
  };

  const homeTypeLabel = answers.homeType === "House" ? "houses" : "apartments";
  const geocodeNote = office.source === "geocoded"
    ? `Commute distance is calculated from your provided work location${answers.companyName ? ` (${answers.companyName})` : ""}.`
    : "We could not match the exact work location, so commute distance uses the city center as a fallback.";

  const downPaymentAmount = toNum(answers.downPaymentAmount);
  const isHouseWithDownPaymentPlan =
    answers.homeType === "House" && answers.wantsDownPayment === "Yes" && downPaymentAmount > 0;

  let housePurchaseHtml = "";
  if (isHouseWithDownPaymentPlan) {
    const targetMonthlyMortgageBudget = monthlyGross * 0.28;
    const estimatedHomePrice = estimateHomePriceFromMonthlyBudget(targetMonthlyMortgageBudget);
    const downPercent = Math.min(100, (downPaymentAmount / estimatedHomePrice) * 100);
    const estimatedLoan = Math.max(0, estimatedHomePrice - downPaymentAmount);
    const pmiNote = downPercent < 20
      ? "Down payment is below 20%, so PMI may apply."
      : "Down payment is at or above 20%, which can help avoid PMI.";

    housePurchaseHtml = `
      <section class="panel">
        <h2>House down payment planning</h2>
        <p><strong>Planned down payment:</strong> ${dollar(downPaymentAmount)}</p>
        <p><strong>Estimated affordable home price:</strong> ${dollar(estimatedHomePrice)}</p>
        <p><strong>Estimated down payment ratio:</strong> ${downPercent.toFixed(1)}%</p>
        <p><strong>Estimated loan amount:</strong> ${dollar(estimatedLoan)}</p>
        <p>${pmiNote}</p>
      </section>
    `;
  }

  root.innerHTML = `
    <section class="panel">
      <h1>Your relocation plan for ${city}</h1>
      <p class="muted">You make ${dollar(salary)} per year and prefer ${homeTypeLabel}. Recommended rent range: <strong>${dollar(suggestedLow)}-${dollar(adjustedHigh)}</strong>.</p>
      <p>${warning}</p>
      <p><strong>Distance note:</strong> ${geocodeNote}</p>
      <p><strong>AI insight:</strong> ${ranked[0].name} is your top match for ${answers.homeType.toLowerCase()} living based on your lifestyle and commute target.</p>
    </section>

    <section class="results-grid">
      ${ranked
        .map((n, i) => {
          const links = buildListingLinks(city, n.name, answers.homeType);
          return `
            <article class="result-card">
              <h3>${i + 1}. ${n.name}</h3>
              <p><strong>Recommended home type:</strong> ${answers.homeType}</p>
              <p><strong>Distance to work:</strong> ${n.distance} miles</p>
              <p><strong>Estimated commute:</strong> ${n.commuteEstimate}</p>
              <p><strong>Best for:</strong> ${n.vibe}</p>
              <p><strong>Pros:</strong> ${n.pros}</p>
              <p><strong>Downside:</strong> ${n.cons}</p>
              <p><a href="${links.zillow}" target="_blank" rel="noreferrer">Search ${answers.homeType.toLowerCase()}s on Zillow</a></p>
              <p><a href="${links.apartments}" target="_blank" rel="noreferrer">Search on Apartments.com</a></p>
              <p><a href="${links.rent}" target="_blank" rel="noreferrer">Search on Rent.com</a></p>
            </article>
          `;
        })
        .join("")}
    </section>

    <section class="panel">
      <h2>Monthly budget breakdown</h2>
      <p>Rent: ${dollar(budget.rent)}</p>
      <p>Utilities: ${dollar(budget.utilities)}</p>
      <p>Transport: ${dollar(budget.transport)}</p>
      <p>Groceries: ${dollar(budget.groceries)}</p>
      <p>Savings: ${dollar(budget.savings)}</p>
      <p>Fun / personal: ${dollar(budget.fun)}</p>
      <a class="btn" href="resources.html">Housing Search Links</a>
      <a class="btn btn-secondary" href="checklist.html">Moving Checklist</a>
    </section>

    ${housePurchaseHtml}
  `;
}

renderResults();
