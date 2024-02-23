document.getElementById('generateActivity').addEventListener('click', function() {
    fetch('activities.json')
        .then(response => response.json())
        .then(data => {
            const randomIndex = Math.floor(Math.random() * data.length);
            const activity = data[randomIndex];
            const display = document.getElementById('activityDisplay');
            display.innerHTML = `<h2>${activity.Activité}</h2><p>${activity.Description}</p><p><strong>Instructions:</strong> ${activity.Instructions}</p>`;
        })
        .catch(error => {
            console.error('Could not fetch activities:', error);
            document.getElementById('activityDisplay').textContent = 'Sorry, there was an error loading the activities. Please try again later.';
        });
});
