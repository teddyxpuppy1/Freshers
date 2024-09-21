// Predefined valid roll numbers with names
const rollNumberData = {
    '101': 'John Doe',
    '102': 'Jane Smith',
    '103': 'Michael Brown',
    '104': 'Emily Davis',
    '105': 'David Johnson'
};

// Handle form submission
document.getElementById('rollNumberForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    const rollNumber = document.getElementById('rollNumber').value;
    const errorMsg = document.getElementById('errorMsg');
    
    if (rollNumberData[rollNumber]) {
        // If roll number is valid, redirect to next.html with roll number and name in URL
        const name = rollNumberData[rollNumber];
        window.location.href = `next.html?roll=${rollNumber}&name=${encodeURIComponent(name)}`;
    } else {
        // If roll number is invalid, show error message
        errorMsg.style.display = 'block'; // Show the error message
    }
});
