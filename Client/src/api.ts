
export interface Item {
    id: number;
    title: string;
    category: string;
    description: string;
    platform: string;
    rating: number;
    image: string;
    website?: string;
}

const API_URL = (
    import.meta.env.VITE_API_URL || "http://localhost:3000"
).replace(/\/$/, "");

// GET - Load all items
export async function loadItems(): Promise<Item[]> {
    const response = await fetch(`${API_URL}/api/items`);

    if (!response.ok) {
        throw new Error("Failed to load games from the API.");
    }

    return await response.json();
}

// POST - Create a new item
export async function createItem(item: Omit<Item, "id">): Promise<Item> {
    const response = await fetch(`${API_URL}/api/items`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(item)
    });

    if (!response.ok) {
        throw new Error("Failed to add the game.");
    }

    return await response.json();
}


