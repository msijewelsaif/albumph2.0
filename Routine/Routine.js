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

 document.getElementById('savePdfBtn').addEventListener('click', function () {
            // Trigger the browser's print dialog
            window.print();
        });

        function getGreeting() {
            const now = new Date();
            const hours = now.getHours();
            let greeting;
        
            if (hours >= 5 && hours < 12) {
                greeting = "Good Morning!";
            } else if (hours >= 12 && hours < 17) {
                greeting = "Good Afternoon!";
            } else if (hours >= 17 && hours < 21) {
                greeting = "Good Evening!";
            } else {
                greeting = "Good Night!";
            }
        
            // Display the greeting message
            document.getElementById("greeting").innerText = greeting;
        }
        
        // Call the function to display the greeting
        window.onload = getGreeting;
        document.getElementById('logoutBtn').addEventListener('click', function() {
            // Clear session or local storage data
            localStorage.clear(); // or sessionStorage.clear();
            
            // Redirect to the login page
            window.location.href = 'login.html'; // Replace with your login page URL
        });
        document.getElementById('addTaskBtn').addEventListener('click', function() {
            const taskInput = document.getElementById('taskInput');
            const taskText = taskInput.value.trim();
        
            if (taskText) {
                const li = document.createElement('li');
                li.textContent = taskText;
                li.addEventListener('click', function() {
                    li.classList.toggle('completed');
                });
                document.getElementById('taskList').appendChild(li);
                taskInput.value = ''; // Clear input field
            }
        });
        