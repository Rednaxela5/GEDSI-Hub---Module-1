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

function showConditionalFields() {
    const role = document.getElementById('role').value;
    const employeeFields = document.getElementById('employee-fields');
    const studentFields = document.getElementById('student-fields');
    
    // Hide both sections initially
    employeeFields.style.display = 'none';
    studentFields.style.display = 'none';
    
    // Show relevant fields based on the selected role
    if (role === 'Student') {
        studentFields.style.display = 'block';
    } else if (role === 'Employee') {
        employeeFields.style.display = 'block';
    }
}

function showProgramOptions() {
    const college = document.getElementById('college').value;
    const programContainer = document.getElementById('program-container');
    const programSelect = document.getElementById('program');

    // Clear existing program options
    programSelect.innerHTML = '';

    if (college === 'CAF') {
        programSelect.innerHTML = `
            <option value="" disabled selected>Select your program</option>
            <option value="BSA">BSA - Bachelor of Science in Accountancy</option>
            <option value="BSMA">BSMA - Bachelor of Science in Management Accounting</option>
            <option value="BSBAFM">BSBAFM - Bachelor of Science in Business Administration Major in Financial Management</option>
        `;
    } else if (college === 'CADBE') {
        programSelect.innerHTML = `
            <option value="" disabled selected>Select your program</option>
            <option value="BSARCH">BSARCH - Bachelor of Science in Architecture</option>
            <option value="BSID">BSID - Bachelor of Science in Interior Design</option>
            <option value="BSEP">BSEP - Bachelor of Science in Environmental Planning</option>
        `;
    } else if (college === 'CAL') {
        programSelect.innerHTML = `
            <option value="" disabled selected>Select your program</option>
            <option value="ABELS">ABELS - Bachelor of Arts in English Language Studies</option>
            <option value="ABF">ABF - Bachelor of Arts in Filipinology</option>
            <option value="ABLCS">ABLCS - Bachelor of Arts in Literary and Cultural Studies</option>
            <option value="ABPHILO">ABPHILO - Bachelor of Arts in Philosophy</option>
            <option value="BPEA">BPEA - Bachelor of Performing Arts major in Theater Arts</option>
        `;
    } else if (college === 'CBA') {
        programSelect.innerHTML = `
            <option value="" disabled selected>Select your program</option>
            <option value="DBA">DBA - Doctor in Business Administration</option>
            <option value="MBA">MBA - Master in Business Administration</option>
            <option value="BSBAHRM">BSBAHRM - Bachelor of Science in Business Administration major in Human Resource Management</option>
            <option value="BSBAMM">BSBAMM - Bachelor of Science in Business Administration major in Marketing Management</option>
            <option value="BSENTREP">BSENTREP - Bachelor of Science in Entrepreneurship</option>
            <option value="BSOA">BSOA - Bachelor of Science in Office Administration</option>
        `;
    } else if (college === 'COC') {
        programSelect.innerHTML = `
            <option value="" disabled selected>Select your program</option>
            <option value="BADPR">BADPR - Bachelor in Advertising and Public Relations</option>
            <option value="BABroadcasting">BABroadcasting - Bachelor of Arts in Broadcasting</option>
            <option value="BACR">BACR - Bachelor of Arts in Communication Research</option>
            <option value="BAJ">BAJ - Bachelor of Arts in Journalism</option>
        `;
    } else if (college === 'CCIS') {
        programSelect.innerHTML = `
            <option value="" disabled selected>Select your program</option>
            <option value="BSCS">BSCS - Bachelor of Science in Computer Science</option>
            <option value="BSIT">BSIT - Bachelor of Science in Information Technology</option>
        `;
    } else if (college === 'COED') {
        programSelect.innerHTML = `
            <option value="" disabled selected>Select your program</option>
            <option value="PhDEM">PhDEM - Doctor of Philosophy in Education Management</option>
            <option value="MAEM-EL">MAEM - Master of Arts in Education Management with Specialization in Educational Leadership</option>
            <option value="MAEM-IL">MAEM - Master of Arts in Education Management with Specialization in Instructional Leadership</option>
            <option value="MBE">MBE - Master in Business Education</option>
            <option value="MLIS">MLIS - Master in Library and Information Science</option>
            <option value="MAELT">MAELT - Master of Arts in English Language Teaching</option>
            <option value="MAEd-ME">MAEd-ME - Master of Arts in Education major in Mathematics Education</option>
            <option value="MAPES">MAPES - Master of Arts in Physical Education and Sports</option>
            <option value="MAED-TCA">MAED-TCA - Master of Arts in Education major in Teaching Challenged Areas</option>
            <option value="PBDE">PBDE - Post-Baccalaureate Diploma in Education</option>
            <option value="BTLEd-HE">BTLEd-HE - Bachelor of Technology and Livelihood Education major in Home Economics</option>
            <option value="BTLEd-IA">BTLEd-IA - Bachelor of Technology and Livelihood Education major in Industrial Arts</option>
            <option value="BTLEd-ICT">BTLEd-ICT - Bachelor of Technology and Livelihood Education major in Information and Communication Technology</option>
            <option value="BLIS">BLIS - Bachelor of Library and Information Science</option>
            <option value="BSEd-E">BSEd-E - Bachelor of Science in Education major in English</option>
            <option value="BSEd-M">BSEd-M - Bachelor of Science in Education major in Mathematics</option>
            <option value="BSEd-S">BSEd-S - Bachelor of Science in Education major in Science</option>
            <option value="BSEd-F">BSEd-F - Bachelor of Science in Education major in Filipino</option>
            <option value="BSEd-SS">BSEd-SS - Bachelor of Science in Education major in Social Studies</option>
            <option value="BEEd">BEEd - Bachelor of Elementary Education</option>
            <option value="BECEd">BECEd - Bachelor of Early Childhood Education</option>
        `;
    } else if (college === 'CE') {
        programSelect.innerHTML = `
            <option value="" disabled selected>Select your program</option>
            <option value="BSCE">BSCE - Bachelor of Science in Civil Engineering</option>
            <option value="BSCpE">BSCpE - Bachelor of Science in Computer Engineering</option>
            <option value="BSEE">BSEE - Bachelor of Science in Electrical Engineering</option>
            <option value="BSECE">BSECE - Bachelor of Science in Electronics Engineering</option>
            <option value="BSIE">BSIE - Bachelor of Science in Industrial Engineering</option>
            <option value="BSME">BSME - Bachelor of Science in Mechanical Engineering</option>
            <option value="BSRE">BSRE - Bachelor of Science in Railway Engineering</option>
        `;
    } else if (college === 'CHK') {
        programSelect.innerHTML = `
            <option value="" disabled selected>Select your program</option>
            <option value="BPE">BPE - Bachelor of Physical Education</option>
            <option value="BSESS">BSESS - Bachelor of Science in Exercises and Sports</option>
        `;
    } else if (college === 'CL') {
        programSelect.innerHTML = `
            <option value="" disabled selected>Select your program</option>
            <option value="JD">JD - Juris Doctor</option>
        `;
    } else if (college === 'CPSPA') {
        programSelect.innerHTML = `
            <option value="" disabled selected>Select your program</option>
            <option value="DPA">DPA - Doctor in Public Administration</option>
            <option value="MPA">MPA - Master in Public Administration</option>
            <option value="BPA">BPA - Bachelor of Public Administration</option>
            <option value="BAIS">BAIS - Bachelor of Arts in International Studies</option>
            <option value="BAPE">BAPE - Bachelor of Arts in Political Economy</option>
            <option value="BAPS">BAPS - Bachelor of Arts in Political Science</option>
        `;
    } else if (college === 'CSSD') {
        programSelect.innerHTML = `
            <option value="" disabled selected>Select your program</option>
            <option value="BAH">BAH - Bachelor of Arts in History</option>
            <option value="BAS">BAS - Bachelor of Arts in Sociology</option>
            <option value="BSC">BSC - Bachelor of Science in Cooperatives</option>
            <option value="BSE">BSE - Bachelor of Science in Economics</option>
            <option value="BSPSY">BSPSY - Bachelor of Science in Psychology</option>
        `;
    } else if (college === 'CS') {
        programSelect.innerHTML = `
            <option value="" disabled selected>Select your program</option>
            <option value="BSFT">BSFT - Bachelor of Science in Food Technology</option>
            <option value="BSAPMATH">BSAPMATH - Bachelor of Science in Applied Mathematics</option>
            <option value="BSBIO">Bachelor of Science in Biology</option>
            <option value"BSCHEM">BSCHEM - Bachelor of Science in Chemistry</option>
            <option value="BSMATH">BSMATH - Bachelor of Science in Mathematics</option>
            <option value="BSND">BSND - Bachelor of Science in Nutrition and Dietetics</option>
            <option value="BSPHY">BSPHY - Bachelor of Science in Physics</option>
            <option value="BSSTAT">BSSTAT - Bachelor of Science in Statistics</option>
        `;
    } else if (college === 'CTHTM') {
        programSelect.innerHTML = `
            <option value="" disabled selected>Select your program</option>
            <option value="BSHM">BSHM - Bachelor of Science in Hotel and Restaurant Management</option>
            <option value="BSTM">BSTM - Bachelor of Science in Tourism Management</option>
            <option value="BSTRM">BSTRM - Bachelor of Science in Transportation Management</option>
        `;
    }

    // Show the program field after populating options
    programContainer.style.display = 'block';
}

function showBranchOptions() {
    const sector = document.getElementById('sector').value;
    const branchOfficeContainer = document.getElementById('branch-office-container');
    const branchOfficeSelect = document.getElementById('branch-office');

    // Clear existing branch options
    branchOfficeSelect.innerHTML = '';

    // Add branch options based on selected sector
    if (sector === 'EVP') {
        branchOfficeSelect.innerHTML = `
            <option value="" disabled selected>Select Branch-Office-Section-Unit</option>  
            <option value="Executive">Executive Office</option>
            <option value="Admin">Administrative Office</option>
        `;
    } else if (sector === 'VPAA') {
        branchOfficeSelect.innerHTML = `
        <option value="" disabled selected>Select Branch-Office-Section-Unit</option>  
            <option value="Academic">Academic Affairs</option>
            <option value="Research">Research Division</option>
        `;
    }
    // Add more sector-branch combinations as necessary

    // Show the branch/office field
    branchOfficeContainer.style.display = 'block';
}
