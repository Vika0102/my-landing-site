const popupButton = document.querySelector('.popup-menu__button');
const popupMenu = document.querySelector('.popup-menu__list');
const popupWrapper = document.querySelector('.popup-menu');

popupButton.addEventListener('click', handleMenu);

function handleMenu() {
    popupMenu.classList.toggle('hide-popup');
}

document.addEventListener('click', hidePopup);
function hidePopup(el) {
    let targetInside = popupWrapper.contains(el.target);


    if (!targetInside) {
        popupMenu.classList.add('hide-popup');
    }

    else {
        return;
    }

}