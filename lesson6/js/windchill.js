const temp = parseFloat(document.getElementById('temp').textContent);
const windspeed = parseFloat(document.getElementById('windspeed').textContent);

if (temp <= 50 && windspeed >= 3) {
    const windchill = (35.74 + (0.6215 * temp) - (35.75 * Math.pow(windspeed, 0.16)) + (0.4275 * temp * Math.pow(windspeed, 0.16))).toFixed(2);
    document.getElementById('windchill').textContent = windchill;
} else {
    const windchill = ('N/A');
    document.getElementById('windchill').textContent = windchill;
}