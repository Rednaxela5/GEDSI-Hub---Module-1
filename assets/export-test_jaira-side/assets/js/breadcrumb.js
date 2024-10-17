document.addEventListener('DOMContentLoaded', function() {
    // Function to update breadcrumb titles
    function updateBreadcrumb() {
        // Retrieve module title and module number from localStorage
        const moduleTitle = localStorage.getItem('newModuleTitle') || 'Default Module Title';
        const moduleNumber = localStorage.getItem('module_number') || '1';

        // Update module title and module number in the breadcrumb (if the elements exist)
        const moduleTitleElement = document.getElementById('added_module_title');
        const moduleNumberElement = document.getElementById('added_module_number');

        if (moduleTitleElement) {
            moduleTitleElement.textContent = moduleTitle;
        }

        if (moduleNumberElement) {
            const formattedModuleNumber = parseInt(moduleNumber, 10).toString();
            moduleNumberElement.textContent = formattedModuleNumber;
        }
    }

    // Always update the breadcrumb on page load
    updateBreadcrumb();

    // Breadcrumb navigation logic
    const breadcrumbElements = {
        modules_breadcrumb: 'modules.html',
        modules_lessons_breadcrumb: 'editNewCreatedModule.html',
        cms_lesson_breadcrumb: 'CMSEditNewCreatedLesson.html'
    };

    // Attach event listeners to the breadcrumb elements
    Object.keys(breadcrumbElements).forEach(id => {
        const breadcrumbElement = document.getElementById(id);
        if (breadcrumbElement) {
            breadcrumbElement.addEventListener('click', function() {
                window.location.href = breadcrumbElements[id];
            });
        } else {
            console.error(`Element with id "${id}" not found.`);
        }
    });
});
