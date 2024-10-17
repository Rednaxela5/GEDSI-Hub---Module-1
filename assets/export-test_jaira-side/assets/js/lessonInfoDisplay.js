document.addEventListener("DOMContentLoaded", () => {
    // Function to display the lesson after creation
    function displayLesson(moduleId) {
        // Retrieve lesson data for the module from localStorage
        const lessonData = JSON.parse(localStorage.getItem(`lessons_${moduleId}`)) || [];

        if (lessonData.length > 0) {
            // Assuming you want to display the last created lesson
            const latestLesson = lessonData[lessonData.length - 1];

            // Find the elements to display lesson number and title
            const lessonNumberElement = document.getElementById('lesson_number');
            const lessonNumberInwconElement = document.getElementById('lesson_number_inwcon');
            const lessonTitleElement = document.getElementById('lesson_title');

            // Display the latest lesson data in the corresponding elements
            lessonNumberElement.textContent = latestLesson.number;
            lessonNumberInwconElement.textContent = latestLesson.number + ".";
            lessonTitleElement.textContent = " " + latestLesson.title;
        } else {
            console.error("No lessons found for the module!");
        }
    }

    // Display the lessons when the page is loaded if needed
    const moduleId = sessionStorage.getItem('currentModuleId');
    if (moduleId) {
        displayLesson(moduleId); // Load previously saved lessons, if any
    }
});
