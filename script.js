document.addEventListener("DOMContentLoaded", () => {
  const moonPhaseDisplay = document.getElementById("moonPhase");
  const journal = document.getElementById("journalEntry");
  const saveBtn = document.getElementById("saveEntry");
  const status = document.getElementById("status");

  // Show today's moon phase
  moonPhaseDisplay.textContent = `Today’s moon phase: ${getMoonPhase()}`;

  // Load saved journal entry
  const today = new Date().toISOString().split("T")[0];
  const savedEntry = localStorage.getItem(`moonmemo-${today}`);
  if (savedEntry) {
    journal.value = savedEntry;
    status.textContent = "Loaded your saved entry for today.";
  }

  // Save entry
  saveBtn.addEventListener("click", () => {
    localStorage.setItem(`moonmemo-${today}`, journal.value);
    status.textContent = "Entry saved! 🌙";
  });
});
