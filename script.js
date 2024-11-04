// Display an alert when the page loads
window.addEventListener("load", function() {
    alert("Welcome to My Basic Page!");
});

// Add click event to the button
document.getElementById("alertButton").addEventListener("click", function() {
    console.log("Button was clicked!");
    alert("Button was clicked! Thanks for interacting!");
});
