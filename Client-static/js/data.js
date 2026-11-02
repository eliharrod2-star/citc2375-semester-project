const Items = [
    {
        id : 1,
        title: "Final Fantasy VII Rebirth",
        category: "RPG",
        description: "An action RPG following Cloud Strife and his Companions",
        platform: "PS5/PC",
        rating: 9
    },
    {
        id: 2,
        title: "Cyberpunk 2077",
        category: "RPG",
        description: "An open-world action RPG set in Night City following V",
        platform: "PS4-5/PC/Xbox Series X/S",
        rating: 8
    },
    {
        id: 3,
        title: "Zenless Zone Zero",
        category: "RPG",
        description: "An urban fantasy action RPG set in a post-apocalyptic world",
        platform: "PC/PS5/Mobile",
        rating: 8
    },
    {
        id: 4,
        title: "Magic: The Gathering Arena",
        category: "Card Game",
        description: "A digital collectible card game based on Magic: The Gathering.",
        platform: "PC",
        rating: 9
    },
    {
        id: 5,
        title: "Fortnite",
        category: "Battle Royale",
        description: "An online multiplayer game featuring battle royale and building modes.",
        platform: "PC",
        rating: 8
    },
    {
        id: 6,
        title: "Devil May Cry",
        category: "Action",
        description: "An action game focused on stylish combat and fighting demons.",
        platform: "PC",
        rating: 9
    }
];

//find an item by id
function getItemById(id) {
    return Items.find(item => item.id === id);
}

//find items by category
function getItemsByCategory(category) {
    return Items.filter(item => item.category === category);
}

//calculate the average rating
function calcAvgRating() {
    let total = 0;

  for (let i = 0; i < Items.length; i++) {
    total += Items[i].rating;
  }

  return total / Items.length;
}

// Test JSON.stringify and JSON.parse
const jsonItems = JSON.stringify(Items);
const parsedItems = JSON.parse(jsonItems);

console.log("JSON round-trip test:", parsedItems[0].title);