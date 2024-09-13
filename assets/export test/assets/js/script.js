function nextStep(stepNumber) {
    // Hide all steps
    const steps = document.querySelectorAll('section.step');
    steps.forEach(step => step.classList.remove('active'));

    // Show the next step
    document.getElementById('step' + stepNumber).classList.add('active');
}

function prevStep(stepNumber) {
    // Hide all steps
    const steps = document.querySelectorAll('section.step');
    steps.forEach(step => step.classList.remove('active'));

    // Show the previous step
    document.getElementById('step' + stepNumber).classList.add('active');
}

function submitForm() {
    // Validate form data and submit the form
    alert('Form submitted successfully!');
}