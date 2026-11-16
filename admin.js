document.addEventListener("DOMContentLoaded", function () {

    const tabs = document.querySelectorAll(".tab-btn");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach(function (tab) {

        tab.addEventListener("click", function () {

            const target = tab.dataset.tab;

            // Remove previous active tab
            tabs.forEach(function (item) {
                item.classList.remove("active");
            });

            // Hide previous content
            contents.forEach(function (content) {
                content.classList.remove("active");
            });

            // Activate selected tab
            tab.classList.add("active");

            const selectedContent = document.getElementById(target);

            if (selectedContent) {
                selectedContent.classList.add("active");
            }

        });

    });

});