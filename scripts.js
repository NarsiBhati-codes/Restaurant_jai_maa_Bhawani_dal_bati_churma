function changePhoto(newSrc, newName, newDescription, newPrice) {
    // Get the elements that will be updated
    const bigPhoto = document.getElementById('big-photo');
    const dishName = document.getElementById('dish-name');
    const dishDescription = document.getElementById('dish-description');
    const dishPrice = document.getElementById('dish-price');

    // Start fading out the big photo by setting its opacity to 0
    bigPhoto.style.opacity = 0;

    // Use setTimeout to wait for 300 milliseconds before changing the content
    setTimeout(() => {
        // Change the source of the big photo
        bigPhoto.src = newSrc;
        // Update the text content for the dish name, description, and price
        dishName.textContent = newName;
        dishDescription.textContent = newDescription;
        dishPrice.textContent = newPrice;

        // Fade the big photo back in by setting its opacity to 1
        bigPhoto.style.opacity = 1;
    }, 300); // 300 milliseconds delay
}
