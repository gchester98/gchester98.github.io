// script.js

document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('modal');
    var modalImg = document.getElementById('modal-img');
    var captionText = document.getElementById('caption');
    var closeBtn = document.getElementsByClassName('close')[0];

    var images = document.querySelectorAll('.gallery img');
    images.forEach(function (img) {
        img.onclick = function () {
            modal.style.display = 'flex';
            modalImg.src = this.src;
            captionText.innerHTML = this.getAttribute('data-info');
        };
    });

    closeBtn.onclick = function () {
        modal.style.display = 'none';
    };

    modal.onclick = function (event) {
        if (event.target === modal || event.target === closeBtn) {
            modal.style.display = 'none';
        }
    };
});