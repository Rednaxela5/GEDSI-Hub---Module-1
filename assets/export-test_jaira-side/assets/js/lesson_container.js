// Check for the current module and its lessons
function displayLessons() {
    const moduleIndex = localStorage.getItem('editModuleIndex');
    const lessons = JSON.parse(localStorage.getItem(`lessons-${moduleIndex}`)) || [];

    const lessonContainer = document.getElementById('lesson_container');
    lessonContainer.innerHTML = ''; // Clear the container first

    if (lessons.length === 0) {
        // No lessons added yet
        lessonContainer.innerHTML = `
            <div id="add_new_lesson_container" class="d-xxl-flex justify-content-xxl-center align-items-xxl-center add_new_lesson_container">
                <span class="no_lessons_added_text">No lessons have been added yet</span>
                <button id="createLessonButton" class="create_lesson_button" type="button">
                    <img id="add_icon_create_lesson" src="Add_White.png" />Create Lesson
                </button>
            </div>
        `;
    } else {
        // Display existing lessons
        lessons.forEach((lesson, index) => {
            lessonContainer.innerHTML += `
                <div class="d-xxl-flex EditLessonContainer">
                    <div id="edit_new_lesson_container" class="d-xxl-flex edit_new_lesson_container">
                        <div class="lessonNo_title_container">
                            <span>Lesson</span>
                            <span id="LessonNumberDisplay">${index + 1}.</span>
                            <span id="LessonTitleDisplay">${lesson.title}</span>
                            <div class="lesson_con_linebreak"></div>
                        </div>
                        <span id="LessonOverviewDisplay" class="lesson_brief_overview">${lesson.overview}</span>
                        <div class="button_container">
                            <div><img id="Lesson_Delete" class="Delete" src="Delete.png" /><span>Delete</span></div>
                            <div><img class="Edit" src="Edit.png" /><span>Edit</span></div>
                            <div><img class="PublishIcon" src="Publish.png" /><span>Publish</span></div>
                            <button id="go_to_lesson_button" class="btn btn-primary go_to_lesson_button" type="button">Go To Lesson</button>
                        </div>
                    </div>
                </div>
            `;
        });
    }

    // Add event listener for creating a lesson
    document.getElementById('createLessonButton')?.addEventListener('click', function () {
        // Here you would collect the lesson details
        const lessonTitle = prompt("Enter Lesson Title:");
        const lessonOverview = prompt("Enter Lesson Overview:");

        if (lessonTitle && lessonOverview) {
            // Save the new lesson to localStorage
            const newLesson = {
                title: lessonTitle,
                overview: lessonOverview
            };

            // Retrieve existing lessons or create a new array
            let lessons = JSON.parse(localStorage.getItem(`lessons-${moduleIndex}`)) || [];
            lessons.push(newLesson);

            // Save back to localStorage
            localStorage.setItem(`lessons-${moduleIndex}`, JSON.stringify(lessons));

            // Refresh the lesson display
            displayLessons();
        } else {
            alert("Both title and overview are required!");
        }
    });
}

// Initialize on page load
window.onload = function () {
    displayLessons();
};
