(function() {
    'use strict'

    let open = document.querySelector('#open'),
        close = document.querySelector('#close'),
        popup = document.querySelector('#popup');

    function openPopup() {
        popup.style.display = "block";
    }
    function closePopup() {
        popup.style.display = "none";
    }

    open.addEventListener('click', openPopup);
    close.addEventListener('click', closePopup);

    
})();
