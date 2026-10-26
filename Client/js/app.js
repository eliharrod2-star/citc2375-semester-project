const itemList = document.getElementById("item-list");
const itemFilter = document.getElementById("item-filter");

const projectTitle = "GameVault";
const sampleItems = 3;
const averageRating = 8.5;
const hasSampleGames = true;

// Calculate total rating points for sample games
const totalRating = sampleItems * averageRating;

// Create a project summary using a template
const projectSummary =
    `${projectTitle} currently has ${sampleItems} sample games with an average rating of ${averageRating}.`;

// Check whether the project has enough sample items
let collectionMessage;

if (sampleItems >= 3) {
    collectionMessage = "The GameVault sample collection has enough games for the prototype.";
} else {
    collectionMessage = "The GameVault sample collection needs more games.";
}

console.log(projectSummary);
console.log(`Total rating points: ${totalRating}`);
console.log(`Has sample games: ${hasSampleGames}`);
console.log(collectionMessage);

console.log("GameVault loaded!");
console.log("Game with ID 1:", getItemById(1));
console.log("RPG games:", getItemsByCategory("RPG"));
console.log("Average game rating:", calcAvgRating());

function getFavorites() {
    return JSON.parse(localStorage.getItem("favorites")) || [];
}

function renderItems(itemsToRender) {
    itemList.innerHTML = "";

    itemsToRender.forEach(item => {
        const article = document.createElement("article");
        article.classList.add("item-card");

        const title = document.createElement("h2");
        title.textContent = item.title;

        const category = document.createElement("p");
        category.textContent = `Category: ${item.category}`;

        const description = document.createElement("p");
        description.textContent = item.description;

        const platform = document.createElement("p");
        platform.textContent = `Platform: ${item.platform}`;

        const rating = document.createElement("p");
        rating.textContent = `Rating: ${item.rating}`;

        const favorites = getFavorites();
        const isFavorite = favorites.includes(item.id);

        const favoriteButton = document.createElement("button");
        favoriteButton.type = "button";
        favoriteButton.classList.add("favorite-button");
        favoriteButton.textContent = isFavorite ? "♥ Favorited" : "♡ Favorite";
        favoriteButton.setAttribute("aria-pressed", String(isFavorite));

        favoriteButton.addEventListener("click", () => {
            const currentFavorites = getFavorites();

            if (currentFavorites.includes(item.id)) {
                const updatedFavorites = currentFavorites.filter(
                    id => id !== item.id
                );
                localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
            } else {
                currentFavorites.push(item.id);
                localStorage.setItem("favorites", JSON.stringify(currentFavorites));
            }

            renderItems(itemsToRender);
        });

        article.appendChild(title);
        article.appendChild(category);
        article.appendChild(description);
        article.appendChild(platform);
        article.appendChild(rating);
        article.appendChild(favoriteButton);

        itemList.appendChild(article);
    });
}

renderItems(Items);

itemFilter.addEventListener("input", () => {
    const searchText = itemFilter.value.toLowerCase();

    const filteredItems = Items.filter(item =>
        item.title.toLowerCase().includes(searchText)
    );

    renderItems(filteredItems);
});