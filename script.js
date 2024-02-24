document.addEventListener("DOMContentLoaded", function() {
  // Load initial activities for both tabs
  loadRandomActivity('Intérieur');
  loadRandomActivity('Extérieur');
});

function openTab(evt, categoryName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
  }
  document.getElementById(categoryName).style.display = "block";
  evt.currentTarget.classList.add("active");
}

async function loadRandomActivity(category) {
  try {
      const response = await fetch('activities.json');
      const data = await response.json();
      var activities = data.filter(item => item.Catégorie === category);
      if (activities.length > 0) {
          var randomActivity = activities[Math.floor(Math.random() * activities.length)];
          displayActivity(randomActivity, category);
      } else {
          console.error(`No activity found for category: ${category}`);
      }
  } catch (error) {
      console.error('Error loading activities:', error);
  }
}

function displayActivity(activity, category) {
  document.getElementById(`activityTitle_${category}`).innerText = activity.title;
  document.getElementById(`activityTag_${category}`).innerText = activity.tag;
  document.getElementById(`activityDescription_${category}`).innerText = activity.Description;
  document.getElementById(`activityInstructions_${category}`).innerText = activity.Instructions;
}

function loadNewActivityBasedOnTab() {
  var activeTab = document.querySelector(".tablinks.active").textContent;
  loadRandomActivity(activeTab);
}
