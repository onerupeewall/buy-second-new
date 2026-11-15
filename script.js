document.addEventListener("DOMContentLoaded", function () {

    // यह कोड मोबाइल स्क्रीन के हिसाब से डेस्कटॉप व्यू को पूरी तरह फिट कर देगा
    const viewportMeta = document.querySelector('meta[name="viewport"]');
    if (viewportMeta) {
        const screenWidth = window.innerWidth;
        const targetWidth = 1200;
        const scale = screenWidth / targetWidth;
        viewportMeta.setAttribute('content', 'width=' + targetWidth + ', initial-scale=' + scale + ', minimum-scale=' + scale + ', maximum-scale=' + scale + ', user-scalable=no');
    }

    const overlay = document.getElementById("popupOverlay");
    const title = document.getElementById("popupTitle");
    const closeButton = document.getElementById("popupClose");

    // बाकी आपका सारा पुराना जावास्क्रिप्ट कोड यहीं रहेगा...
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