function changeTab(tabName) {
            const tabs = document.querySelectorAll('.tab');
            const tabContents = document.querySelectorAll('.tab-content');

            tabs.forEach(tab => {
                tab.classList.remove('active');
            });

            tabContents.forEach(content => {
                content.classList.remove('active');
            });

            document.getElementById(tabName).classList.add('active');
            document.getElementById(tabName + '-tab').classList.add('active');
        }

       document.addEventListener("DOMContentLoaded", function() {
    // Select all buttons
    const buttons = document.querySelectorAll(".source-button");

    // Function to remove 'active' from all buttons and add to the clicked one
    function setActiveButton(clickedButton) {
        buttons.forEach(button => button.classList.remove("active"));  // Remove active from all
        clickedButton.classList.add("active");  // Add active to the clicked one
    }

    // Set the first button as active on page load
    buttons[0].classList.add("active");

    // Attach click event to each button to change iframe source and active button
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            // Change the iframe source
            const iframe = document.getElementById("tv-iframe");
            iframe.src = button.getAttribute("onclick").match(/'(.*?)'/)[1];

            // Set active button
            setActiveButton(button);
        });
    });
});
