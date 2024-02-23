let activitiesData = [];

document.addEventListener('DOMContentLoaded', function() {
    fetchActivitiesData().then(() => {
        displayRandomActivity('Intérieur');
        displayRandomActivity('Extérieur');
    });

    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });

    document.getElementById('findActivity').addEventListener('click', function() {
        const activeTab = document.querySelector('.tab.active').textContent;
        displayRandomActivity(activeTab);
    });
});

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

function displayRandomActivity(type) {
    const filteredActivities = activitiesData.filter(activity => activity.Emplacement === type);
    if (filteredActivities.length === 0) {
        return;
    }
    const randomActivity = filteredActivities[Math.floor(Math.random() * filteredActivities.length)];
    updateActivityDisplay(randomActivity);
}

function updateActivityDisplay(activity) {
    const activityInfoDiv = document.getElementById('activityInfo');
    activityInfoDiv.innerHTML = `
        <h2>${activity.Activité}</h2>
        <div class="category-tag">${activity.Catégorie}</div>
        <hr>
        <p>${activity.Description}</p>
        <p>${activity.Instructions}</p>
    `;
}
