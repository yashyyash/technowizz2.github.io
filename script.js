// script.js
document.addEventListener('DOMContentLoaded', function () {
    var navButtons = document.querySelectorAll('.nav-button');

    navButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var targetSectionId = button.getAttribute('data-target');
            var targetSection = document.getElementById(targetSectionId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
