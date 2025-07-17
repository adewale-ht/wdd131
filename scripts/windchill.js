function calculateWindChill(temp, speed) {
  return (temp <= 50 && speed > 3)
    ? (35.74 + 0.6215 * temp - 35.75 * speed ** 0.16 + 0.4275 * temp * speed ** 0.16).toFixed(1)
    : "N/A";
}

const temp = parseFloat(document.getElementById("temp").textContent);
const speed = parseFloat(document.getElementById("speed").textContent);

const chill = calculateWindChill(temp, speed);
document.getElementById("chill").textContent = chill + (chill !== "N/A" ? "°F" : "");
