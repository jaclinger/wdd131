let participantCount = 1; // Initialize participant count

document.addEventListener("DOMContentLoaded", () => {
    // Set up the 'Add Participant' button event listener
    document.querySelector("#add").addEventListener("click", addParticipant);
    
    // Set up the form submission event listener
    document.querySelector("form").addEventListener("submit", submitForm);
});

// Function to create a new participant section template
function participantTemplate(count) {
    return `
        <section class="participant${count}">
            <p>Participant ${count}</p>
            <div class="item">
                <label for="fname${count}">First Name<span>*</span></label>
                <input id="fname${count}" type="text" name="fname${count}" required />
            </div>
            <div class="item activities">
                <label for="activity${count}">Activity #<span>*</span></label>
                <input id="activity${count}" type="text" name="activity${count}" />
            </div>
            <div class="item">
                <label for="fee${count}">Fee ($)<span>*</span></label>
                <input id="fee${count}" type="number" name="fee${count}" />
            </div>
            <div class="item">
                <label for="date${count}">Desired Date <span>*</span></label>
                <input id="date${count}" type="date" name="date${count}" />
            </div>
            <div class="item">
                <p>Grade</p>
                <select name="grade${count}">
                    <option selected value="" disabled>Select Grade</option>
                    <option value="1">1st</option>
                    <option value="2">2nd</option>
                    <option value="3">3rd</option>
                    <option value="4">4th</option>
                    <option value="5">5th</option>
                    <option value="6">6th</option>
                    <option value="7">7th</option>
                    <option value="8">8th</option>
                    <option value="9">9th</option>
                    <option value="10">10th</option>
                    <option value="11">11th</option>
                    <option value="12">12th</option>
                </select>
            </div>
        </section>
    `;
}

// Function to add a new participant section
function addParticipant() {
    participantCount++;  // Increase participant count
    const newParticipantHTML = participantTemplate(participantCount);  // Generate HTML for new participant
    
    const addButton = document.querySelector("#add");  // Reference to the 'Add Participant' button
    addButton.insertAdjacentHTML("beforebegin", newParticipantHTML);  // Insert new participant section before the button
}

// Function to calculate total fees
function totalFees() {
    // Select all input elements with IDs that start with "fee"
    let feeElements = document.querySelectorAll("[id^=fee]");
    feeElements = [...feeElements];  // Convert NodeList to an array
    
    // Calculate the total by summing the values in each fee input field
    return feeElements.reduce((total, fee) => total + (parseFloat(fee.value) || 0), 0);
}

// Function to generate the success message template
function successTemplate(info) {
    return `
        <p>Thank you ${info.name} for registering.</p>
        <p>You have registered ${info.participants} participants and owe $${info.fees.toFixed(2)} in fees.</p>
    `;
}

// Function to handle form submission
function submitForm(event) {
    event.preventDefault();  // Prevent the form from reloading the page
    
    const totalFeesValue = totalFees();  // Get the total fees
    const adultName = document.querySelector("#adult_name").value;  // Get the adult's name
    
    // Get the summary element and insert the success message
    const summaryMessage = successTemplate({
        name: adultName,
        participants: participantCount,
        fees: totalFeesValue
    });
    document.querySelector("form").style.display = "none";  // Hide the form
    
    const summary = document.querySelector("#summary");  // Reference to the summary section
    summary.innerHTML = summaryMessage;  // Set the summary message
    summary.style.display = "block";  // Show the summary section
}
