document.getElementById('generateActivity').addEventListener('click', () => {
    fetch('activities.json')
        .then(response => response.json())
        .then(activities => {
            const randomIndex = Math.floor(Math.random() * activities.length);
            const activity = activities[randomIndex];
            document.getElementById('activityDisplay').innerHTML = `
                <strong>${activity.title}</strong>
                <p>${activity.description}</p>
                <p><em>${activity.instructions}</em></p>`;
        })
        .catch(error => {
            console.error('Error fetching the activities:', error);
            document.getElementById('activityDisplay').textContent = 'Failed to load activities. Please try again later.';
        });
});
