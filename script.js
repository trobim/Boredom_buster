let currentEmplacement = 'Intérieur'; // Default to 'Intérieur'
const activityCard = document.getElementById('activityCard');

document.addEventListener('DOMContentLoaded', function() {
    const interiorTab = document.getElementById('interiorTab');
    const exteriorTab = document.getElementById('exteriorTab');
    const findActivityButton = document.getElementById('findActivity');

    interiorTab.addEventListener('click', function() { selectTab('Intérieur'); });
    exteriorTab.addEventListener('click', function() { selectTab('Extérieur'); });
    findActivityButton.addEventListener('click', loadRandomActivity);

    loadRandomActivity(); // Load a random activity on initial page load
});

function selectTab(emplacement) {
    currentEmplacement = emplacement;
    interiorTab.classList.toggle('active', emplacement === 'Intérieur');
    exteriorTab.classList.toggle('active', emplacement === 'Extérieur');
    loadRandomActivity();
}

function loadRandomActivity() {
    // Assuming activities.json is an array of activities
    const activities = activitiesData.filter(activity => activity.Emplacement === currentEmplacement);
    if (activities.length === 0) {
        activityCard.innerHTML = 'No activities available.';
        return;
    }
    const randomActivity = activities[Math.floor(Math.random() * activities.length)];
    displayActivity(randomActivity);
}

function displayActivity(activity) {
    activityCard.innerHTML = `
        <h2>${activity.Activité}</h2>
        <div class="tag">${activity.Catégorie}</div>
        <hr>
        <p>${activity.Description}</p>
        <p>${activity.Instructions}</p>
    `;
}
