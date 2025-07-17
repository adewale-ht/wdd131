document.addEventListener('DOMContentLoaded', function () {
  const temp = parseFloat(document.getElementById('temp').textContent);
  const speed = parseFloat(document.getElementById('speed').textContent);
  const chillSpan = document.getElementById('chill');

  function calculateWindChill(t, s) {
    return (
      35.74 +
      0.6215 * t -
      35.75 * Math.pow(s, 0.16) +
      0.4275 * t * Math.pow(s, 0.16)
    );
  }

  if (temp <= 50 && speed > 3.0) {
    const chill = calculateWindChill(temp, speed);
    chillSpan.textContent = `${chill.toFixed(1)} °F`;
  } else {
    chillSpan.textContent = 'N/A';
  }
});
