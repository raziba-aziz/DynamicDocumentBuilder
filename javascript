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
        let experienceList = document.getElementById("experience-list");
        let newExperience = document.createElement("div");
        newExperience.textContent = "New Experience Entry";
        newExperience.classList.add("experience-item");
        experienceList.appendChild(newExperience);
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