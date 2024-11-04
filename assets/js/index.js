'use strict';

function addImg(image) {
    const selectedContainer = document.querySelector('.selected-img');
    
    selectedContainer.innerHTML = '';

    const selectedImage = document.createElement('img');
    selectedImage.src = image.src;
    selectedImage.alt = image.alt;

    selectedContainer.appendChild(selectedImage);
}

document.querySelectorAll('.img-options img').forEach(img => {
    img.addEventListener('click', () => addImg(img));
});

document.querySelector('.remove').addEventListener('click', () => {
    const selectedContainer = document.querySelector('.selected-img');
    
    selectedContainer.innerHTML = '<p>pick an avatar</p>'; 
});