// Predefined valid roll numbers with names
const rollNumberData = {
    '24A81A4401': 'ALLAVARAPU LAKSHMI RATNA MALLIKA',
    '24A81A4402': 'ABDUL RAWOOF',
    '24A81A4403': 'ADABALA MANI VENKATA NAGA MAHESH',
    '24A81A4404': 'ALLURI RAVI TEJA VARMA',
    '24A81A4405': 'ANDE PAVITHRA'
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
