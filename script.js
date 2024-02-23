document.getElementById('generateActivity').addEventListener('click', function() {
    const locationFilter = document.getElementById('locationFilter').value;
    const categoryFilter = document.getElementById('categoryFilter').value;

    fetch('activities.json')
        .then(response => response.json())
        .then(data => {
            const filteredData = data.filter(activity =>
                (locationFilter === 'all' || activity.Emplacement === locationFilter) &&
                (categoryFilter === 'all' || activity.Catégorie === categoryFilter)
            );

            if (filteredData.length === 0) {
                document.getElementById('activityDisplay').innerHTML = "<p>No activities found. Try different filters.</p>";
                return;
            }

            const randomIndex = Math.floor(Math.random() * filteredData.length);
            const activity = filteredData[randomIndex];
            document.getElementById('activityDisplay').innerHTML = `
                <h2>${activity.Activité}</h2>
                <p><strong>Description:</strong> ${activity.Description}</p>
                <p><strong>Instructions:</strong> ${activity.Instructions}</p>
            `;
        })
        .catch(error => {
            console.error('Could not fetch activities:', error);
            document.getElementById('activityDisplay').textContent = 'Sorry, there was an error loading the activities. Please try again later.';
        });
});
