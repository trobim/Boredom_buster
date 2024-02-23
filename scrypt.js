document.getElementById('generateActivity').addEventListener('click', () => {
    const activities = [
        "Read a new book",
        "Write a short story",
        "Learn to code with Scratch",
        "Draw a picture of your family",
        "Build a cardboard fort",
        "Create a comic strip",
        "Have a mini treasure hunt in your backyard",
        "Learn ten words in a new language",
        "Try a simple science experiment",
        "Make a DIY bird feeder"
    ];

    const activityDisplay = document.getElementById('activityDisplay');
    const randomIndex = Math.floor(Math.random() * activities.length);
    activityDisplay.textContent = activities[randomIndex];
});
