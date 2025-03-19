document.addEventListener("DOMContentLoaded", () => {
    // Add skill functionality
    document.getElementById("add-skill").addEventListener("click", () => {
        let skillInput = document.getElementById("skill-input");
        let skillValue = skillInput.value.trim();
        if (skillValue) {
            let skillList = document.getElementById("skills-list");
            let listItem = document.createElement("li");
            listItem.textContent = skillValue;
            skillList.appendChild(listItem);
            skillInput.value = "";
        }
    });

    // Add experience functionality
    document.getElementById("add-experience").addEventListener("click", () => {
        let jobTitle = document.getElementById("job-title").value.trim();
        let company = document.getElementById("company").value.trim();
        let duration = document.getElementById("experience-duration").value.trim();
    
        if (jobTitle && company && duration) { // Ensure all fields are filled
            let experienceList = document.getElementById("experience-list");
            let newExperience = document.createElement("div");
            newExperience.innerHTML = `<strong>${jobTitle}</strong> at ${company} (${duration})`;
            newExperience.classList.add("experience-item");
            experienceList.appendChild(newExperience);
    
            // Clear input fields after adding
            document.getElementById("job-title").value = "";
            document.getElementById("company").value = "";
            document.getElementById("experience-duration").value = "";
        } else {
            alert("Please fill in all fields before adding experience.");
        }
    });
    

    // Add education functionality
    document.getElementById("add-education").addEventListener("click", () => {
        let educationList = document.getElementById("education-list");
        let newEducation = document.createElement("div");
        newEducation.textContent = "New Education Entry";
        newEducation.classList.add("education-item");
        educationList.appendChild(newEducation);
    });

    // Add achievements functionality
    document.getElementById("add-achievement").addEventListener("click", () => {
        let achievementsList = document.getElementById("achievements-list");
        let newAchievement = document.createElement("div");
        newAchievement.textContent = "New Achievement Entry";
        newAchievement.classList.add("achievement-item");
        achievementsList.appendChild(newAchievement);
    });
});