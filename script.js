document.addEventListener("DOMContentLoaded", function () {

    const overlay = document.getElementById("popupOverlay");
    const title = document.getElementById("popupTitle");
    const closeButton = document.getElementById("popupClose");

    // OPEN POPUP
    function openPopup(name) {
        title.textContent = name;
        overlay.style.display = "flex";
    }

    // CLOSE POPUP
    function closePopup() {
        overlay.style.display = "none";
    }

    // TERMS & CONDITIONS
    document.querySelectorAll(".nav a").forEach(function (link) {
        if (link.textContent.trim() === "Terms & Conditions") {
            link.addEventListener("click", function (e) {
                e.preventDefault();
                openPopup("Terms & Conditions");
            });
        }
    });

    // PRIVACY POLICY
    document.querySelectorAll(".nav a").forEach(function (link) {
        if (link.textContent.trim() === "Privacy Policy") {
            link.addEventListener("click", function (e) {
                e.preventDefault();
                openPopup("Privacy Policy");
            });
        }
    });

    // MY ACTIVE CAMPAIGN
    document.querySelector(".active-link").addEventListener("click", function (e) {
        e.preventDefault();
        openPopup("My Active Campaign");
    });

    // BUY YOUR SLOT
    document.querySelector(".buy-button").addEventListener("click", function (e) {
        e.preventDefault();
        openPopup("Buy Your Slot");
    });

    // CLOSE BUTTON
    closeButton.addEventListener("click", closePopup);

    // BACKGROUND CLICK
    overlay.addEventListener("click", function (e) {
        if (e.target === overlay) {
            closePopup();
        }
    });

    // ESCAPE KEY
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
            closePopup();
        }
    });

});