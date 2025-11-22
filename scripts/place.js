// Footer: current year and last modified
document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Wind chill function (US/NWS formula, °F and mph)
function windChillF(Tf, mph) {
  if (Tf > 50 || mph < 3) return null; // outside validity -> not applicable
  const v16 = Math.pow(mph, 0.16);
  return 35.74 + 0.6215 * Tf - 35.75 * v16 + 0.4275 * Tf * v16;
}

// Grab DOM elements
const tempEl = document.getElementById("temperature");
const windEl = document.getElementById("wind");
const chillEl = document.getElementById("windchill");

// Parse values
const temp = parseFloat(tempEl.textContent);
const wind = parseFloat(windEl.textContent);

// Calculate and display wind chill
const chill = windChillF(temp, wind);
if (chill !== null) {
  chillEl.textContent = Math.round(chill) + " °F";
} else {
  chillEl.textContent = "N/A";
}
