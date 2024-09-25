 // Calendar Script
 function renderCalendar() {
    const now = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthYear = document.getElementById("monthYear");
    const daysContainer = document.getElementById("daysContainer");

    monthYear.innerText = `${monthNames[now.getMonth()]} ${now.getFullYear()}`;
    daysContainer.innerHTML = ''; // Clear previous days

    const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
    const today = now.getDate(); // Get today's date

    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement("div");
        dayElement.classList.add("day");
        dayElement.innerText = day;

        // Highlight today's date
        if (day === today) {
            dayElement.classList.add("today");
        }

        daysContainer.appendChild(dayElement);
    }
}

// Clock Script
function updateClock() {
    const now = new Date();
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    document.getElementById('clock').innerText = now.toLocaleTimeString([], options);
}

setInterval(updateClock, 1000);
updateClock(); // initial call
renderCalendar(); // Call to render the calendar