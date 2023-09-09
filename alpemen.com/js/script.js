document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.getElementById("overlay");
    const popup = document.getElementById("popup");
    const closeBtn = document.getElementById("closeBtn");

    // Function to open the pop-up
    function openPopup() {
        overlay.style.display = "flex";
    }

    // Function to close the pop-up
    function closePopup() {
        overlay.style.display = "none";
    }

    // Event listener for opening the pop-up
    openPopup();

    // Event listener for closing the pop-up
    closeBtn.addEventListener("click", closePopup);
});