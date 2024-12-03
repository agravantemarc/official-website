function displayMessage(theme) {
    let message = "";
    if (theme === 'pink') {
        message = "Welcome to the Marc's Kitchen Recipe Website!";
    } else if (theme === 'red') {
        message = "Check out the 4 Best Filipino Chicken Dish!";
    } else if (theme === 'ginataan') {
        message = "Please follow the recipe correctly";
    } else if (theme === 'slow') {
        message = "Please follow the recipe correctly";
    } else if (theme === 'afritada') {
        message = "Please follow the recipe correctly";
    } else if (theme === 'tanghon') {
        message = "Please follow the recipe correctly";
    }
    alert(message);
}

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-box input');
    const recipeCards = document.querySelectorAll('.recipe');

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        recipeCards.forEach(card => {
            const title = card.querySelector('.recipe-title').textContent.toLowerCase();
            if (title.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});