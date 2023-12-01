let isChallengeStarted = false;
let totalEnergySaved = 0;

const energySavingTips = [
    "Turn off lights when not in use.",
    "Unplug electronic devices when they're not being used.",
    "Use energy-efficient appliances.",
    "Seal gaps and cracks in your home to prevent drafts.",
    "Adjust your thermostat to save energy.",
];

function startChallenge() {
    isChallengeStarted = true;
    displayTips();
}

function displayTips() {
    const tipsList = document.getElementById("tips-list");
    tipsList.innerHTML = "";

    energySavingTips.forEach((tip) => {
        const listItem = document.createElement("li");
        listItem.textContent = tip;
        tipsList.appendChild(listItem);
    });
}

function updateEnergySaved(amount) {
    totalEnergySaved += amount;
    document.getElementById("total-energy-saved").textContent = `${totalEnergySaved} kWh`;
}

// You can add more functionality, such as tracking user progress, achievements, etc.
