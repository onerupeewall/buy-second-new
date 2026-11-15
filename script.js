document.addEventListener("DOMContentLoaded", function () {

    const overlay = document.getElementById("popupOverlay");
    const title = document.getElementById("popupTitle");
    const closeButton = document.getElementById("popupClose");
    const popupContent = document.querySelector(".popup-content");

    if (!overlay || !title || !closeButton || !popupContent) {
        return;
    }

    // OPEN POPUP
    function openPopup(name) {

        title.textContent = name;

        // SHOW BOOKING FORM ONLY IN BUY YOUR SLOT
        if (name === "Buy Your Slot") {
            popupContent.style.display = "block";
        } else {
            popupContent.style.display = "none";
        }

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
    const activeLink = document.querySelector(".active-link");

    if (activeLink) {

        activeLink.addEventListener("click", function (e) {
            e.preventDefault();
            openPopup("My Active Campaign");
        });

    }

    // BUY YOUR SLOT
    const buyButton = document.querySelector(".buy-button");

    if (buyButton) {

        buyButton.addEventListener("click", function (e) {
            e.preventDefault();
            openPopup("Buy Your Slot");
        });

    }

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