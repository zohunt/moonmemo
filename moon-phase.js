function getMoonPhase(date = new Date()) {
  const lp = 2551443; // Lunar period in seconds
  const new_moon = new Date(1970, 0, 7, 20, 35, 0); // Known new moon reference
  const phase = ((date.getTime() - new_moon.getTime()) / 1000) % lp;
  const phaseDays = Math.floor(phase / (24 * 3600));
  const phases = [
    "New Moon 🌑",
    "Waxing Crescent 🌒",
    "First Quarter 🌓",
    "Waxing Gibbous 🌔",
    "Full Moon 🌕",
    "Waning Gibbous 🌖",
    "Last Quarter 🌗",
    "Waning Crescent 🌘"
  ];
  const index = Math.floor((phaseDays / 29.53) * 8) % 8;
  return phases[index];
}
