let activitiesData = [];
let currentCategory = 'Intérieur';

document.addEventListener('DOMContentLoaded', function() {
    fetchActivitiesData().then(() => {
        displayRandomActivity(currentCategory);
    });

    const interiorTab = document.getElementById('interiorTab');
    const exteriorTab = document.getElementById('exteriorTab');
    const findActivityButton = document.getElementById('findActivity');

    interiorTab.addEventListener('click', () => setActiveTab('Intérieur'));
    exteriorTab.addEventListener('click', () => setActiveTab('Extérieur'));
    findActivityButton.addEventListener('click', () => displayRandomActivity(currentCategory));
});

function setActiveTab(category) {
    currentCategory = category;
    document.getElementById('interiorTab').classList.remove('active');
    document.getElementById('exteriorTab').classList.remove('active');
    if (category === 'Intérieur') {
        document.getElementById('interiorTab').classList.add('active');
    } else {
        document.getElementById('exteriorTab').classList.add('active');
    }
}

function displayRandomActivity(category) {
    const filteredActivities = activitiesData.filter(activity => activity.Emplacement === category);
    if (filteredActivities.length === 0) {
        document.getElementById('activityCard').innerHTML = '<p>Aucune activité disponible pour cette catégorie.</p>';
        return;
    }
    const randomActivity = filteredActivities[Math.floor(Math.random() * filteredActivities.length)];
    updateActivityCard(randomActivity);
}

function updateActivityCard(activity) {
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
