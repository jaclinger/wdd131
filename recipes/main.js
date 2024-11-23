import recipes from './recipes.mjs'; // Import the recipes array from the recipes.mjs file

document.addEventListener('DOMContentLoaded', () => {
    const previewContainer = document.querySelector('.preview main');
    const searchBar = document.querySelector('.search-bar');
    const searchButton = document.querySelector('.search-btn');

    // Function to display a recipe
    const displayRecipe = (recipe) => {
        previewContainer.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image">
            <div class="dessert"><p>${recipe.tags.join(', ')}</p></div>
            <div class="title"><p><strong>${recipe.name}</strong></p></div>
            <span class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">
                ${'⭐'.repeat(Math.floor(recipe.rating))}${'☆'.repeat(5 - Math.floor(recipe.rating))}
            </span>
            <div class="description"><p>${recipe.description}</p></div>
        `;
    };

    // Display a random recipe by default
    const randomIndex = Math.floor(Math.random() * recipes.length);
    displayRecipe(recipes[randomIndex]);

    // Search functionality
    const performSearch = () => {
        const query = searchBar.value.toLowerCase().trim();

        if (!query) {
            alert('Please enter a search term!');
            return;
        }

        // Find the first matching recipe (case-insensitive search)
        const matchingRecipe = recipes.find((recipe) =>
            recipe.name.toLowerCase().includes(query) ||
            recipe.tags.some(tag => tag.toLowerCase().includes(query)) ||
            recipe.description.toLowerCase().includes(query)
        );

        if (matchingRecipe) {
            displayRecipe(matchingRecipe);
        } else {
            previewContainer.innerHTML = `<p>No recipes found for "${query}". Try another search term.</p>`;
        }
    };

    // Add event listener for the search button
    searchButton.addEventListener('click', performSearch);

    // Optional: Add "Enter" key functionality
    searchBar.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            performSearch();
        }
    });
});
