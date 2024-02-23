let currentFilter = 'Intérieur'; // Default filter
let activitiesData = []; // Will hold the activities data

document.addEventListener('DOMContentLoaded', function() {
    fetchActivitiesData().then(() => {
        loadRandomActivity();
    });

    const interiorTab = document.getElementById('interiorTab');
    const exteriorTab = document.getElementById('exteriorTab');
    const findActivityButton = document.getElementById('findActivity');

    interiorTab.addEventListener('click', () => selectTab('Intérieur'));
    exteriorTab.addEventListener('click', () => selectTab('Extérieur'));
    findActivityButton.addEventListener('click', loadRandomActivity);
});

function selectTab(filter) {
    currentFilter = filter;
    document.getElementById('interiorTab').classList.toggle('active', filter === 'Intérieur');
    document.getElementById('exteriorTab').classList.toggle('active', filter === 'Extérieur');
    loadRandomActivity();
}

function loadRandomActivity() {
    const filteredActivities = activitiesData.filter(activity => activity.Emplacement === currentFilter);
    if (filteredActivities.length === 0) {
        document.getElementById('activityCard').innerHTML = '<p>Aucune activité disponible.</p>';
        return;
    }
    const randomActivity = filteredActivities[Math.floor(Math.random() * filteredActivities.length)];
    displayActivity(randomActivity);
}

function displayActivity(activity) {
    const activityCard = document.getElementById('activityCard');
    activityCard.innerHTML = `
        <h2>${activity.Activité}</h2>
        <div class="tag">${activity.Catégorie}</div>
        <hr>
        <p>${activity.Description}</p>
        <p>${activity.Instructions}</p>
    `;
}

function fetchActivitiesData() {
    return fetch('activities.json') // Adjust the path if necessary
        .then(response => response.json())
        .then(data => {
            activitiesData = data;
        })
        .catch(error => {
            console.error('Error fetching activities:', error);
        });
}
