const recipes = [
    { title: "Vegan Salad", description: "A healthy vegan salad.", image: "images/vegan-salad.jpg", category: "vegan" },
    { title: "Gluten-Free Pancakes", description: "Delicious gluten-free pancakes.", image: "images/gluten-free-pancakes.jpg", category: "gluten-free" },
    { title: "Vegetarian Pizza", description: "A tasty vegetarian pizza.", image: "images/vegetarian-pizza.jpg", category: "vegetarian" },
    { title: "Dairy-Free Smoothie", description: "A refreshing dairy-free smoothie.", image: "images/dairy-free-smoothie.jpg", category: "dairy-free" },
    { title: "Vegan Burger", description: "A delicious vegan burger.", image: "images/vegan-burger.jpg", category: "vegan" },
    { title: "Gluten-Free Bread", description: "Soft and tasty gluten-free bread.", image: "images/gluten-free-bread.jpg", category: "gluten-free" },
    { title: "Vegetarian Curry", description: "A spicy vegetarian curry.", image: "images/vegetarian-curry.jpg", category: "vegetarian" },
    { title: "Dairy-Free Ice Cream", description: "Creamy dairy-free ice cream.", image: "images/dairy-free-ice-cream.jpg", category: "dairy-free" },
];

const recipeGrid = document.querySelector('.recipe-grid');
const filterButtons = document.querySelectorAll('.filter-btn');

function displayRecipes(filter) {
    recipeGrid.innerHTML = '';
    const filteredRecipes = filter === 'all' ? recipes : recipes.filter(recipe => recipe.category === filter);
    filteredRecipes.forEach(recipe => {
        const card = document.createElement('div');
        card.className = 'recipe-card';
        card.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}">
            <h3>${recipe.title}</h3>
            <p>${recipe.description}</p>
        `;
        recipeGrid.appendChild(card);
    });
}

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        displayRecipes(button.dataset.filter);
    });
});

// Initial display
displayRecipes('all');
