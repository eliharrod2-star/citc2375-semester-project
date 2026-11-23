
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Custom request logging middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
});

// GameVault collection
const items = [
    {
        id: 1,
        title: "Final Fantasy VII Rebirth",
        category: "RPG",
        description: "An action RPG continuing the story of Final Fantasy VII.",
        platform: "PS5, PC",
        rating: 9,
        image: "/images/FFRebirth.png"
    },
    {
        id: 2,
        title: "Cyberpunk 2077",
        category: "RPG",
        description: "An open-world RPG set in the futuristic Night City.",
        platform: "PS5, PC, Xbox Series X/S",
        rating: 8,
        image: "/images/2077.png"
    },
    {
        id: 3,
        title: "Zenless Zone Zero",
        category: "RPG",
        description: "An urban fantasy action RPG.",
        platform: "PC, PS5, Mobile",
        rating: 8,
        image: "/images/ZZZ.png"
    },
    {
        id: 4,
        title: "Magic: The Gathering Arena",
        category: "Card Game",
        description: "A digital collectible card game based on Magic: The Gathering.",
        platform: "PC",
        rating: 9,
        image: "/images/MTG.png"
    },
    {
        id: 5,
        title: "Fortnite",
        category: "Battle Royale",
        description: "A popular battle royale game with building and other game modes.",
        platform: "PC, PS5, Xbox, Switch",
        rating: 9,
        image: "/images/fortnite.png"
    },
    {
        id: 6,
        title: "Devil May Cry",
        category: "Action",
        description: "An action game featuring fast-paced combat and demon hunting.",
        platform: "PC, PlayStation, Xbox",
        rating: 9,
        image: "/images/DMC.png"
    }
];

// GET - Health check
app.get("/api/health", (req, res) => {
    res.status(200).json({ status: "ok" });
});

// GET - Return all items
app.get("/api/items", (req, res) => {
    res.status(200).json(items);
});

// GET - Return one item by ID
app.get("/api/items/:id", (req, res) => {
    const id = Number(req.params.id);

    const item = items.find(item => item.id === id);

    if (!item) {
        return res.status(404).json({
            message: "Item not found"
        });
    }

    res.status(200).json(item);
});

// POST - Add a new item
app.post("/api/items", (req, res) => {
    const newId = items.length > 0
        ? Math.max(...items.map(item => item.id)) + 1
        : 1;

    const newItem = {
        ...req.body,
        id: newId
    };

    items.push(newItem);

    res.status(201).json(newItem);
});

// PUT - Update an existing item
app.put("/api/items/:id", (req, res) => {
    const id = Number(req.params.id);

    const index = items.findIndex(item => item.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Item not found"
        });
    }

    items[index] = {
        ...items[index],
        ...req.body,
        id: id
    };

    res.status(200).json(items[index]);
});

// DELETE - Delete an item
app.delete("/api/items/:id", (req, res) => {
    const id = Number(req.params.id);

    const index = items.findIndex(item => item.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Item not found"
        });
    }

    const deletedItem = items.splice(index, 1)[0];

    res.status(200).json({
        message: "Item deleted successfully",
        item: deletedItem
    });
});

// Start the server
app.listen(PORT, "0.0.0.0", () => {
    console.log(`API listening on port ${PORT}`);
});
