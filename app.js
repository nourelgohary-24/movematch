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

const stateRentBaselines = {
  Alabama: [950, 1550], Alaska: [1150, 1850], Arizona: [1300, 2100], Arkansas: [900, 1450],
  California: [2100, 3400], Colorado: [1500, 2500], Connecticut: [1500, 2400], Delaware: [1300, 2050],
  Florida: [1500, 2450], Georgia: [1250, 2100], Hawaii: [2100, 3300], Idaho: [1200, 1900],
  Illinois: [1300, 2200], Indiana: [1000, 1650], Iowa: [950, 1550], Kansas: [950, 1600],
  Kentucky: [1000, 1650], Louisiana: [1050, 1750], Maine: [1250, 2000], Maryland: [1600, 2600],
  Massachusetts: [1900, 3100], Michigan: [1050, 1750], Minnesota: [1200, 2000], Mississippi: [900, 1450],
  Missouri: [1000, 1700], Montana: [1200, 1950], Nebraska: [1000, 1650], Nevada: [1350, 2200],
  "New Hampshire": [1400, 2250], "New Jersey": [1800, 2950], "New Mexico": [1050, 1700],
  "New York": [1900, 3200], "North Carolina": [1250, 2050], "North Dakota": [950, 1550],
  Ohio: [1000, 1700], Oklahoma: [950, 1550], Oregon: [1500, 2450], Pennsylvania: [1200, 2000],
  "Rhode Island": [1500, 2350], "South Carolina": [1200, 1950], "South Dakota": [950, 1550],
  Tennessee: [1200, 2000], Texas: [1250, 2100], Utah: [1350, 2200], Vermont: [1300, 2100],
  Virginia: [1500, 2450], Washington: [1600, 2650], "West Virginia": [850, 1400],
  Wisconsin: [1050, 1750], Wyoming: [1000, 1650]
};

const wizard = document.getElementById("relocation-wizard");
if (wizard) {
  const progress = document.getElementById("wizard-progress");
  const questionRoot = document.getElementById("wizard-question");
  const backBtn = document.getElementById("wizard-back");
  const nextBtn = document.getElementById("wizard-next");
  const answers = {};
  let step = 0;

  const stateCities = {
    Alabama: ["Birmingham", "Montgomery", "Mobile", "Huntsville", "Tuscaloosa"],
    Alaska: ["Anchorage", "Fairbanks", "Juneau", "Sitka", "Ketchikan"],
    Arizona: ["Phoenix", "Tucson", "Mesa", "Scottsdale", "Tempe", "Chandler"],
    Arkansas: ["Little Rock", "Fayetteville", "Fort Smith", "Springdale", "Jonesboro"],
    California: ["Los Angeles", "San Francisco", "San Diego", "San Jose", "Sacramento", "Fresno", "Oakland"],
    Colorado: ["Denver", "Colorado Springs", "Aurora", "Fort Collins", "Boulder"],
    Connecticut: ["Bridgeport", "New Haven", "Stamford", "Hartford", "Waterbury"],
    Delaware: ["Wilmington", "Dover", "Newark", "Middletown", "Smyrna"],
    Florida: ["Miami", "Orlando", "Tampa", "Jacksonville", "Fort Lauderdale", "St. Petersburg"],
    Georgia: ["Atlanta", "Augusta", "Savannah", "Athens", "Macon"],
    Hawaii: ["Honolulu", "Hilo", "Kailua", "Kaneohe", "Waipahu"],
    Idaho: ["Boise", "Meridian", "Nampa", "Idaho Falls", "Pocatello"],
    Illinois: ["Chicago", "Aurora", "Naperville", "Rockford", "Joliet"],
    Indiana: ["Indianapolis", "Fort Wayne", "Evansville", "South Bend", "Carmel"],
    Iowa: ["Des Moines", "Cedar Rapids", "Davenport", "Iowa City", "Sioux City"],
    Kansas: ["Wichita", "Overland Park", "Kansas City", "Topeka", "Olathe"],
    Kentucky: ["Louisville", "Lexington", "Bowling Green", "Owensboro", "Covington"],
    Louisiana: ["New Orleans", "Baton Rouge", "Shreveport", "Lafayette", "Lake Charles"],
    Maine: ["Portland", "Lewiston", "Bangor", "South Portland", "Auburn"],
    Maryland: ["Baltimore", "Columbia", "Germantown", "Silver Spring", "Frederick"],
    Massachusetts: ["Boston", "Worcester", "Springfield", "Cambridge", "Lowell"],
    Michigan: ["Detroit", "Grand Rapids", "Ann Arbor", "Lansing", "Flint"],
    Minnesota: ["Minneapolis", "Saint Paul", "Rochester", "Duluth", "Bloomington"],
    Mississippi: ["Jackson", "Gulfport", "Southaven", "Biloxi", "Hattiesburg"],
    Missouri: ["Kansas City", "Saint Louis", "Springfield", "Columbia", "Independence"],
    Montana: ["Billings", "Missoula", "Bozeman", "Great Falls", "Helena"],
    Nebraska: ["Omaha", "Lincoln", "Bellevue", "Grand Island", "Kearney"],
    Nevada: ["Las Vegas", "Henderson", "Reno", "North Las Vegas", "Sparks"],
    "New Hampshire": ["Manchester", "Nashua", "Concord", "Dover", "Rochester"],
    "New Jersey": ["Newark", "Jersey City", "Paterson", "Elizabeth", "Edison"],
    "New Mexico": ["Albuquerque", "Las Cruces", "Santa Fe", "Rio Rancho", "Roswell"],
    "New York": ["New York", "Buffalo", "Rochester", "Albany", "Syracuse", "Yonkers"],
    "North Carolina": ["Charlotte", "Raleigh", "Durham", "Greensboro", "Winston-Salem"],
    "North Dakota": ["Fargo", "Bismarck", "Grand Forks", "Minot", "West Fargo"],
    Ohio: ["Columbus", "Cleveland", "Cincinnati", "Toledo", "Akron"],
    Oklahoma: ["Oklahoma City", "Tulsa", "Norman", "Broken Arrow", "Edmond"],
    Oregon: ["Portland", "Eugene", "Salem", "Hillsboro", "Bend"],
    Pennsylvania: ["Philadelphia", "Pittsburgh", "Allentown", "Harrisburg", "Erie"],
    "Rhode Island": ["Providence", "Warwick", "Cranston", "Pawtucket", "East Providence"],
    "South Carolina": ["Charleston", "Columbia", "Greenville", "Myrtle Beach", "Spartanburg"],
    "South Dakota": ["Sioux Falls", "Rapid City", "Aberdeen", "Brookings", "Watertown"],
    Tennessee: ["Nashville", "Memphis", "Knoxville", "Chattanooga", "Clarksville"],
    Texas: ["Houston", "Austin", "Dallas", "San Antonio", "Fort Worth", "El Paso"],
    Utah: ["Salt Lake City", "West Valley City", "Provo", "Ogden", "Sandy"],
    Vermont: ["Burlington", "South Burlington", "Rutland", "Montpelier", "Barre"],
    Virginia: ["Virginia Beach", "Richmond", "Arlington", "Norfolk", "Alexandria"],
    Washington: ["Seattle", "Bellevue", "Tacoma", "Spokane", "Everett", "Redmond", "Olympia"],
    "West Virginia": ["Charleston", "Huntington", "Morgantown", "Wheeling", "Parkersburg"],
    Wisconsin: ["Milwaukee", "Madison", "Green Bay", "Kenosha", "Racine"],
    Wyoming: ["Cheyenne", "Casper", "Laramie", "Gillette", "Rock Springs"]
  };
  const stateOptions = Object.keys(stateCities);

  const formatWithCommas = (rawValue) => {
    const digitsOnly = String(rawValue || "").replace(/\D/g, "");
    if (!digitsOnly) return "";
    return Number(digitsOnly).toLocaleString();
  };

  function stepsList() {
    const base = [
      { key: "state", label: "What state is your job in?", type: "select", options: stateOptions },
      { key: "city", label: "What city is your job in?", type: "select", options: stateCities[answers.state] || [], allowCustom: true, placeholder: "Type any city in the selected state..." },
      { key: "salary", label: "What is your annual salary (USD)?", type: "text", placeholder: "ex: 72,000", comma: true },
      { key: "workMode", label: "What is your work mode?", type: "select", options: ["In-person", "Hybrid", "Remote"] },
      { key: "companyName", label: "What company are you joining? (optional)", type: "text", placeholder: "Amazon" },
      { key: "workAddress", label: "What is your work address or office area?", type: "text", placeholder: "410 Terry Ave N, Seattle, WA" },
      { key: "car", label: "Do you have a car?", type: "select", options: ["Yes", "No"] },
      { key: "homeType", label: "Do you want an apartment or house?", type: "select", options: ["Apartment", "House"] },
      { key: "roommates", label: "Do you want roommates?", type: "select", options: ["Yes", "No", "Maybe"] },
      { key: "lifestyle", label: "What matters most?", type: "select", options: ["Nightlife", "Quiet", "Affordability", "Walkability"] },
      { key: "commute", label: "Ideal max commute (minutes)?", type: "number", placeholder: "30" },
      { key: "pets", label: "Do you have pets?", type: "select", options: ["Yes", "No"] },
      { key: "alone", label: "Are you moving alone?", type: "select", options: ["Yes", "No"] },
      { key: "moveDate", label: "When do you need to move?", type: "date" }
    ];

    const afterHomeType = base.findIndex((item) => item.key === "homeType") + 1;
    if (answers.homeType === "Apartment") {
      base.splice(afterHomeType, 0, { key: "maxRent", label: "What is your max monthly rent?", type: "text", placeholder: "1,900", comma: true });
    }
    if (answers.homeType === "House") {
      base.splice(afterHomeType, 0, { key: "housePaymentType", label: "How would you pay for the house?", type: "select", options: ["Mortgage", "Cash"] });
      if (answers.housePaymentType === "Mortgage") {
        base.splice(afterHomeType + 1, 0, { key: "maxHousing", label: "Max monthly mortgage payment?", type: "text", placeholder: "3,200", comma: true });
      }
      if (answers.housePaymentType === "Cash") {
        base.splice(afterHomeType + 1, 0, { key: "maxHomePrice", label: "What is your cash home purchase budget?", type: "text", placeholder: "450,000", comma: true });
      }
      const paymentDetailIndexes = ["housePaymentType", "maxHousing", "maxHomePrice"]
        .map((key) => base.findIndex((item) => item.key === key))
        .filter((index) => index >= 0);
      const afterPaymentDetails = Math.max(...paymentDetailIndexes) + 1;
      base.splice(afterPaymentDetails, 0, { key: "wantsDownPayment", label: "Do you want down payment planning?", type: "select", options: ["Yes", "No"] });
      if (answers.wantsDownPayment === "Yes") {
        base.splice(afterPaymentDetails + 1, 0, { key: "downPaymentAmount", label: "Planned down payment amount (USD)", type: "text", placeholder: "50,000", comma: true });
      }
    }
    base.push({ key: "createAccount", label: "Create an account to save your plan?", type: "select", options: ["Yes", "No"] });
    if (answers.createAccount === "Yes") {
      base.push({ key: "accountEmail", label: "Email for your account", type: "text", placeholder: "you@email.com" });
    }
    return base;
  }

  function renderStep() {
    const list = stepsList();
    if (step < 0) step = 0;
    if (step > list.length - 1) step = list.length - 1;
    const q = list[step];
    progress.textContent = `Question ${step + 1} of ${list.length}`;
    backBtn.style.visibility = step === 0 ? "hidden" : "visible";
    nextBtn.textContent = step === list.length - 1 ? "Get Instant Results" : "Next";

    let field = "";
    if (q.type === "select") {
      const listId = `wizard-list-${q.key}`;
      field = `<input id="wizard-input" list="${listId}" value="${answers[q.key] || ""}" placeholder="${q.placeholder || "Start typing to search..."}" autocomplete="off" />
      <datalist id="${listId}">${q.options.map((o) => `<option value="${o}"></option>`).join("")}</datalist>`;
    } else {
      const value = answers[q.key] || "";
      field = `<input id="wizard-input" type="${q.type}" value="${value}" placeholder="${q.placeholder || ""}" />`;
    }
    questionRoot.innerHTML = `<label>${q.label}${field}</label>`;

    const input = document.getElementById("wizard-input");
    const errorNode = document.getElementById("wizard-error");
    if (q.comma) {
      input.addEventListener("input", () => {
        input.value = formatWithCommas(input.value);
      });
    }
    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        nextBtn.click();
      }
    });
    if (errorNode) errorNode.textContent = "";
  }

  function saveCurrent() {
    const list = stepsList();
    const q = list[step];
    const input = document.getElementById("wizard-input");
    const errorNode = document.getElementById("wizard-error");
    const showError = (msg) => {
      if (!errorNode) return;
      errorNode.textContent = msg;
    };
    if (errorNode) errorNode.textContent = "";
    const value = input ? input.value.trim() : "";
    if (!value && q.key !== "companyName") return false;
    if (q.type === "select" && value && q.options && !q.allowCustom && !q.options.includes(value)) {
      showError("Please choose a value from the list.");
      return false;
    }
    if (["salary", "maxRent", "maxHousing", "maxHomePrice", "downPaymentAmount", "commute"].includes(q.key)) {
      const numeric = toNum(value);
      if (numeric < 0) {
        showError("Please enter a positive number.");
        return false;
      }
    }
    if (q.key === "moveDate") {
      const picked = new Date(value);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (picked < today) {
        showError("Please try a different date.");
        return false;
      }
    }
    if (q.key === "state" && answers.state && answers.state !== value) {
      delete answers.city;
    }
    answers[q.key] = value;
    return true;
  }

  backBtn.addEventListener("click", () => {
    saveCurrent();
    step -= 1;
    renderStep();
  });

  nextBtn.addEventListener("click", () => {
    if (!saveCurrent()) return;
    const list = stepsList();
    if (step >= list.length - 1) {
      localStorage.setItem("moveMatchAnswers", JSON.stringify(answers));
      if (answers.createAccount === "Yes" && answers.accountEmail) {
        const existing = JSON.parse(localStorage.getItem("moveMatchAccounts") || "[]");
        existing.push({ email: answers.accountEmail, savedAt: new Date().toISOString(), profile: answers });
        localStorage.setItem("moveMatchAccounts", JSON.stringify(existing));
        const emailBody = Object.entries(answers)
          .map(([k, v]) => `${k}: ${v}`)
          .join("\n");
        const mailto = `mailto:${encodeURIComponent(answers.accountEmail)}?subject=${encodeURIComponent("Your MoveMatch Plan")}&body=${encodeURIComponent(emailBody)}`;
        window.open(mailto, "_blank");
      }
      window.location.href = "results.html";
      return;
    }
    step += 1;
    renderStep();
  });

  renderStep();
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

function calculateRentRange(salary, cityBaseline, roommates, homeType) {
  const monthlyIncome = salary / 12;
  const targetLow = monthlyIncome * 0.25;
  const targetHigh = monthlyIncome * (homeType === "House" ? 0.28 : 0.32);
  let low = Math.max(cityBaseline[0], targetLow);
  let high = Math.min(cityBaseline[1], targetHigh);

  if (roommates === "Yes") high *= 1.1;
  if (roommates === "No") high *= 0.96;

  if (low > high) {
    low = cityBaseline[0] * 0.9;
    high = cityBaseline[1] * 0.95;
  }

  return [Math.round(low / 50) * 50, Math.round(high / 50) * 50];
}

function daysUntil(dateString) {
  if (!dateString) return null;
  const moveDate = new Date(dateString);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return Math.ceil((moveDate - today) / (1000 * 60 * 60 * 24));
}

function moveTimingLabel(dateString) {
  const days = daysUntil(dateString);
  if (days === null) return "Flexible timing";
  if (days <= 14) return "Urgent move";
  if (days <= 45) return "Near-term move";
  return "Flexible timeline";
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

function buildGenericCityInfo(city, state, center) {
  const rentBaseline = stateRentBaselines[state] || [1300, 2200];
  return {
    rentBaseline,
    center,
    dataSource: `Generated from ${city}, ${state || "selected state"} geocoding and state housing baseline`,
    neighborhoods: [
      { name: `Downtown ${city}`, vibe: "walkability", lat: center.lat, lon: center.lon, pros: "Closest to offices, restaurants, and daily errands", cons: "Usually higher prices and less space" },
      { name: `Midtown ${city}`, vibe: "nightlife", lat: center.lat + 0.025, lon: center.lon + 0.015, pros: "More social energy and easier weekend plans", cons: "Can be louder and more competitive" },
      { name: `${city} Northside`, vibe: "quiet", lat: center.lat + 0.055, lon: center.lon - 0.025, pros: "Calmer residential feel with more space", cons: "Commute may be longer" },
      { name: `${city} Value Area`, vibe: "affordability", lat: center.lat - 0.055, lon: center.lon + 0.035, pros: "Better chance of staying under budget", cons: "May require more commute flexibility" }
    ]
  };
}

function getKnownCityInfo(city, state) {
  const knownStateByCity = {
    Seattle: "Washington",
    Bellevue: "Washington",
    Redmond: "Washington",
    Tacoma: "Washington",
    Spokane: "Washington",
    Everett: "Washington",
    Olympia: "Washington",
    "Vancouver (WA)": "Washington",
    Austin: "Texas",
    "New York": "New York",
    Chicago: "Illinois",
    "San Francisco": "California",
    "Los Angeles": "California"
  };
  if (!cityData[city]) return null;
  if (knownStateByCity[city] && state && knownStateByCity[city] !== state) return null;
  return cityData[city];
}

function scoreNeighborhood(n, preferences, commuteGap) {
  let score = 0;
  const lifestyle = String(preferences.lifestyle || "").toLowerCase();
  if (n.vibe === lifestyle) score += 3;
  if (preferences.homeType === "House" && n.vibe === "quiet") score += 2;
  if (preferences.homeType === "Apartment" && (n.vibe === "walkability" || n.vibe === "nightlife")) score += 1;
  if (preferences.car === "No" && (n.vibe === "walkability" || n.name === "Northgate" || n.name === "Long Island City")) score += 2;
  if (preferences.workMode === "Remote") score += n.vibe === lifestyle ? 2 : 0;
  if (preferences.workMode !== "Remote" && commuteGap <= 10) score += 2;
  if (preferences.workMode !== "Remote" && commuteGap <= 20) score += 1;
  if (preferences.roommates === "Yes" && (n.vibe === "nightlife" || n.vibe === "walkability")) score += 1;
  if (preferences.roommates === "No" && n.vibe === "quiet") score += 1;
  if (preferences.alone === "Yes" && (n.vibe === "walkability" || n.vibe === "quiet")) score += 1;
  if (preferences.housePaymentType === "Cash" && n.vibe === "affordability") score += 1;
  if (preferences.pets === "Yes" && (n.name === "Northgate" || n.name === "Mueller" || n.name === "Lincoln Square" || n.name === "Sunset" || n.name === "Pasadena")) score += 1;
  if (daysUntil(preferences.moveDate) !== null && daysUntil(preferences.moveDate) <= 30 && (n.vibe === "affordability" || n.vibe === "walkability")) score += 1;
  return score;
}

function fitNotes(n, answers, commuteGap) {
  const notes = [];
  notes.push(`${answers.lifestyle || "Lifestyle"} preference matched to a ${n.vibe} neighborhood profile.`);
  notes.push(answers.workMode === "Remote"
    ? "Remote work makes lifestyle fit more important than commute distance."
    : `Commute target considered with a ${commuteGap}-minute estimated gap.`);
  notes.push(answers.car === "No"
    ? "No-car preference favors walkability and transit access."
    : "Car access gives more flexibility across neighborhoods.");
  notes.push(answers.homeType === "House"
    ? `${answers.housePaymentType || "House"} payment preference is used for housing guidance and listing type.`
    : `${answers.roommates} roommate preference is used in the affordability range.`);
  if (answers.pets === "Yes") notes.push("Pet needs favor calmer, more residential options when possible.");
  if (answers.alone === "Yes") notes.push("Moving alone favors areas with easier daily convenience and calmer fit.");
  notes.push(`${moveTimingLabel(answers.moveDate)} factored into the recommendation urgency.`);
  return notes;
}

function profileSummary(answers) {
  const housingLine = answers.homeType === "House"
    ? `${answers.homeType} (${answers.housePaymentType || "payment undecided"})`
    : `${answers.homeType} with roommates: ${answers.roommates}`;
  return [
    `Location: ${answers.city || "Unknown"}, ${answers.state || "Unknown"}`,
    `Work: ${answers.workMode || "Unknown"} at ${answers.companyName || answers.workAddress || "provided workplace"}`,
    `Housing: ${housingLine}`,
    `Lifestyle: ${answers.lifestyle || "Unknown"}, commute target: ${answers.commute || "N/A"} minutes`,
    `Car: ${answers.car || "Unknown"}, pets: ${answers.pets || "Unknown"}, moving alone: ${answers.alone || "Unknown"}`,
    `Move timing: ${moveTimingLabel(answers.moveDate)}`,
    `Saved account: ${answers.createAccount === "Yes" ? answers.accountEmail || "Yes" : "No"}`
  ];
}

function buildListingLinks(city, neighborhood, homeType, stateName) {
  const typeWord = homeType === "House" ? "house" : "apartment";
  const stateAbbrev = {
    Alabama: "al", Alaska: "ak", Arizona: "az", Arkansas: "ar", California: "ca", Colorado: "co", Connecticut: "ct",
    Delaware: "de", Florida: "fl", Georgia: "ga", Hawaii: "hi", Idaho: "id", Illinois: "il", Indiana: "in",
    Iowa: "ia", Kansas: "ks", Kentucky: "ky", Louisiana: "la", Maine: "me", Maryland: "md", Massachusetts: "ma",
    Michigan: "mi", Minnesota: "mn", Mississippi: "ms", Missouri: "mo", Montana: "mt", Nebraska: "ne", Nevada: "nv",
    "New Hampshire": "nh", "New Jersey": "nj", "New Mexico": "nm", "New York": "ny", "North Carolina": "nc",
    "North Dakota": "nd", Ohio: "oh", Oklahoma: "ok", Oregon: "or", Pennsylvania: "pa", "Rhode Island": "ri",
    "South Carolina": "sc", "South Dakota": "sd", Tennessee: "tn", Texas: "tx", Utah: "ut", Vermont: "vt",
    Virginia: "va", Washington: "wa", "West Virginia": "wv", Wisconsin: "wi", Wyoming: "wy"
  };

  const slugify = (value) =>
    String(value || "")
      .toLowerCase()
      .replace(/\(.*?\)/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const citySlug = slugify(city);
  const neighborhoodSlug = slugify(neighborhood);
  const region = stateAbbrev[stateName] || "wa";
  const query = encodeURIComponent(`${neighborhood}, ${city}, ${stateName || ""} ${typeWord}`);

  if (homeType === "House") {
    return {
      primary: `https://www.zillow.com/${neighborhoodSlug}-${citySlug}-${region}/`,
      secondary: `https://www.redfin.com/city/search/${query}`,
      tertiary: `https://www.realtor.com/realestateandhomes-search/${citySlug}_${region}/type-single-family-home`
    };
  }

  return {
    primary: `https://www.zillow.com/${neighborhoodSlug}-${citySlug}-${region}/rentals/`,
    secondary: `https://www.apartments.com/${neighborhoodSlug}-${citySlug}-${region}/`,
    tertiary: `https://www.rent.com/search?q=${query}%20for%20rent`
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
  const city = answers.city || "Seattle";
  const salary = toNum(answers.salary);
  const maxHomePrice = toNum(answers.maxHomePrice);
  const monthlyHousingCap = answers.homeType === "House"
    ? toNum(answers.maxHousing) || (maxHomePrice ? maxHomePrice * 0.0058 : 0)
    : toNum(answers.maxRent);
  const commuteTarget = toNum(answers.commute);
  const knownCityInfo = getKnownCityInfo(city, answers.state);
  const fallbackCenter = knownCityInfo
    ? knownCityInfo.center
    : await geocodeLocation(`${city} ${answers.state || ""}`, { ...cityData.Seattle.center, source: "fallback" });
  const cityInfo = knownCityInfo || buildGenericCityInfo(city, answers.state, fallbackCenter);
  const officeQuery = `${answers.workAddress || ""} ${answers.companyName || ""} ${city} ${answers.state || ""}`.trim();

  root.innerHTML = `<section class="panel"><h1>Building your recommendations...</h1><p>We are calculating commute distance from your work location and ranking neighborhoods.</p></section>`;

  const office = await geocodeLocation(officeQuery, { ...cityInfo.center, source: "fallback" });

  const [suggestedLow, suggestedHigh] = calculateRentRange(salary, cityInfo.rentBaseline, answers.roommates, answers.homeType);
  const adjustedHigh = answers.homeType === "House" ? Math.round((suggestedHigh * 1.1) / 50) * 50 : suggestedHigh;

  const ranked = cityInfo.neighborhoods
    .map((n) => {
      const distance = haversineMiles(office.lat, office.lon, n.lat, n.lon);
      const distanceRounded = Math.round(distance * 10) / 10;
      const commuteEstimate = estimateCommuteMinutes(distanceRounded, answers.workMode, answers.car);
      const commuteMidpoint = toNum(commuteEstimate.split("-")[0]);
      const commuteGap = Math.abs(commuteMidpoint - commuteTarget);
      const score = scoreNeighborhood(n, answers, commuteGap);
      return { ...n, distance: distanceRounded, commuteEstimate, commuteGap, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  const warning = monthlyHousingCap < suggestedLow
    ? `Your monthly housing target (${dollar(monthlyHousingCap)}) is below the recommended range for ${city}. Consider more flexibility.`
    : monthlyHousingCap > adjustedHigh
      ? `You can afford your stated housing budget, but staying near ${dollar(adjustedHigh)} protects savings and flexibility.`
      : `Your housing budget is aligned with your affordability target.`;

  const monthlyGross = salary / 12;
  const budget = {
    housing: Math.min(monthlyHousingCap || adjustedHigh, adjustedHigh),
    utilities: monthlyGross * 0.06,
    transport: monthlyGross * 0.08,
    groceries: monthlyGross * 0.12,
    savings: monthlyGross * 0.2,
    fun: monthlyGross * 0.1
  };

  const homeTypeLabel = answers.homeType === "House" ? "houses" : "apartments";
  const paymentContext = answers.homeType === "House"
    ? answers.housePaymentType === "Cash"
      ? `cash purchase budget of ${dollar(maxHomePrice)}`
      : `monthly mortgage target of ${dollar(toNum(answers.maxHousing))}`
    : `max rent of ${dollar(toNum(answers.maxRent))}`;
  const geocodeNote = office.source === "geocoded"
    ? `Commute distance is calculated from your provided work location${answers.companyName ? ` (${answers.companyName})` : ""}.`
    : "We could not match the exact work location, so commute distance uses the city center as a fallback.";
  const cityDataNote = cityInfo.dataSource || `Using custom neighborhood and rent data for ${city}.`;

  const downPaymentAmount = toNum(answers.downPaymentAmount);
  const isHouseWithDownPaymentPlan =
    answers.homeType === "House" && answers.wantsDownPayment === "Yes" && downPaymentAmount > 0;

  let housePurchaseHtml = "";
  if (isHouseWithDownPaymentPlan || answers.housePaymentType === "Cash") {
    const targetMonthlyMortgageBudget = toNum(answers.maxHousing) || monthlyGross * 0.28;
    const estimatedHomePrice = estimateHomePriceFromMonthlyBudget(targetMonthlyMortgageBudget);
    const downPercent = Math.min(100, (downPaymentAmount / estimatedHomePrice) * 100);
    const estimatedLoan = Math.max(0, estimatedHomePrice - downPaymentAmount);
    const pmiNote = answers.housePaymentType === "Cash"
      ? `Cash purchase budget entered: ${dollar(maxHomePrice)}. Listing links prioritize for-sale houses.`
      : downPercent < 20
      ? "Down payment is below 20%, so PMI may apply."
      : "Down payment is at or above 20%, which can help avoid PMI.";

    housePurchaseHtml = `
      <section class="panel">
        <h2>House purchase planning</h2>
        <p><strong>Payment type:</strong> ${answers.housePaymentType || "Mortgage"}</p>
        <p><strong>Planned down payment:</strong> ${dollar(downPaymentAmount)}</p>
        <p><strong>Estimated affordable home price:</strong> ${answers.housePaymentType === "Cash" ? dollar(maxHomePrice) : dollar(estimatedHomePrice)}</p>
        <p><strong>Estimated down payment ratio:</strong> ${answers.housePaymentType === "Cash" ? "100.0" : downPercent.toFixed(1)}%</p>
        <p><strong>Estimated loan amount:</strong> ${answers.housePaymentType === "Cash" ? dollar(0) : dollar(estimatedLoan)}</p>
        <p>${pmiNote}</p>
      </section>
    `;
  }

  root.innerHTML = `
    <section class="panel">
      <h1>Your relocation plan for ${city}</h1>
      <p class="muted">You make ${dollar(salary)} per year, prefer ${homeTypeLabel}, and gave a ${paymentContext}. Recommended monthly housing range: <strong>${dollar(suggestedLow)}-${dollar(adjustedHigh)}</strong>.</p>
      <p>${warning}</p>
      <p><strong>City data note:</strong> ${cityDataNote}</p>
      <p><strong>Distance note:</strong> ${geocodeNote}</p>
      <p><strong>AI insight:</strong> ${ranked[0].name} is your top match because it balances your lifestyle, commute target, transportation, housing type, pet needs, roommate preference, and moving timeline.</p>
    </section>

    <section class="panel">
      <h2>Answers used in this recommendation</h2>
      <ul class="pretty-list">
        ${profileSummary(answers).map((item) => `<li>${item}</li>`).join("")}
      </ul>
    </section>

    <section class="results-grid">
      ${ranked
        .map((n, i) => {
          const links = buildListingLinks(city, n.name, answers.homeType, answers.state);
          return `
            <article class="result-card">
              <h3>${i + 1}. ${n.name}</h3>
              <p><strong>Recommended home type:</strong> ${answers.homeType}</p>
              <p><strong>Distance to work:</strong> ${n.distance} miles</p>
              <p><strong>Estimated commute:</strong> ${n.commuteEstimate}</p>
              <p><strong>Best for:</strong> ${n.vibe}</p>
              <p><strong>Pros:</strong> ${n.pros}</p>
              <p><strong>Downside:</strong> ${n.cons}</p>
              <ul class="pretty-list">
                ${fitNotes(n, answers, n.commuteGap).map((note) => `<li>${note}</li>`).join("")}
              </ul>
              <p><a href="${links.primary}" target="_blank" rel="noreferrer">${answers.homeType === "House" ? "View houses on Zillow/for-sale" : "View apartments on Zillow"}</a></p>
              <p class="muted">${links.primary}</p>
              <p><a href="${links.secondary}" target="_blank" rel="noreferrer">${answers.homeType === "House" ? "View houses on Redfin" : "View on Apartments.com"}</a></p>
              <p class="muted">${links.secondary}</p>
              <p><a href="${links.tertiary}" target="_blank" rel="noreferrer">${answers.homeType === "House" ? "View houses on Realtor.com" : "View on Rent.com"}</a></p>
              <p class="muted">${links.tertiary}</p>
            </article>
          `;
        })
        .join("")}
    </section>

    <section class="panel">
      <h2>Monthly budget breakdown</h2>
      <p>${answers.homeType === "House" ? "Housing (mortgage/cash plan):" : "Rent:"} ${dollar(budget.housing)}</p>
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

async function renderResources() {
  const root = document.getElementById("resources-root");
  if (!root) return;

  const raw = localStorage.getItem("moveMatchAnswers");
  if (!raw) {
    root.innerHTML = `
      <h2>Your personalized housing links</h2>
      <p class="muted">Complete the questionnaire first, then come back here for specific neighborhood links.</p>
      <a class="btn" href="questionnaire.html">Start Questionnaire</a>
    `;
    return;
  }

  const answers = JSON.parse(raw);
  const city = answers.city || "Seattle";
  const knownCityInfo = getKnownCityInfo(city, answers.state);
  const fallbackCenter = knownCityInfo
    ? knownCityInfo.center
    : await geocodeLocation(`${city} ${answers.state || ""}`, { ...cityData.Seattle.center, source: "fallback" });
  const cityInfo = knownCityInfo || buildGenericCityInfo(city, answers.state, fallbackCenter);
  const commuteTarget = toNum(answers.commute) || 30;
  const officeQuery = `${answers.workAddress || ""} ${answers.companyName || ""} ${city} ${answers.state || ""}`.trim();
  const office = await geocodeLocation(officeQuery, { ...cityInfo.center, source: "fallback" });

  const ranked = cityInfo.neighborhoods
    .map((n) => {
      const distance = haversineMiles(office.lat, office.lon, n.lat, n.lon);
      const distanceRounded = Math.round(distance * 10) / 10;
      const commuteEstimate = estimateCommuteMinutes(distanceRounded, answers.workMode || "In-person", answers.car || "No");
      const commuteMidpoint = toNum(commuteEstimate.split("-")[0]);
      const commuteGap = Math.abs(commuteMidpoint - commuteTarget);
      const score = scoreNeighborhood(n, answers, commuteGap);
      return { ...n, distance: distanceRounded, commuteEstimate, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  const homeType = answers.homeType || "Apartment";
  const homeTypePlural = homeType === "House" ? "houses" : "apartments";

  root.innerHTML = `
    <h2>Personalized ${homeType.toLowerCase()} recommendations</h2>
    <p class="muted">Built from your profile for ${city}. Click any link to see live listings.</p>
    <div class="results-grid">
      ${ranked.map((n, i) => {
        const links = buildListingLinks(city, n.name, homeType, answers.state);
        return `
          <article class="result-card">
            <h3>${i + 1}. ${n.name}</h3>
            <p><strong>Recommended type:</strong> ${homeType}</p>
            <p><strong>Distance to work:</strong> ${n.distance} miles</p>
            <p><strong>Estimated commute:</strong> ${n.commuteEstimate}</p>
            <p><a href="${links.primary}" target="_blank" rel="noreferrer">${homeType === "House" ? "View houses on Zillow" : `View ${homeTypePlural} on Zillow`}</a></p>
            <p class="muted">${links.primary}</p>
            <p><a href="${links.secondary}" target="_blank" rel="noreferrer">${homeType === "House" ? "View houses on Redfin" : "View on Apartments.com"}</a></p>
            <p class="muted">${links.secondary}</p>
            <p><a href="${links.tertiary}" target="_blank" rel="noreferrer">${homeType === "House" ? "View houses on Realtor.com" : "View on Rent.com"}</a></p>
            <p class="muted">${links.tertiary}</p>
          </article>
        `;
      }).join("")}
    </div>
  `;
}

renderResults();
renderResources();
