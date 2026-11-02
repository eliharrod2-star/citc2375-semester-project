
import { useState } from 'react';
import Header from './components/Header.jsx';
import ItemList from './components/ItemList.jsx';
import { items } from './data.js';
import './App.css';

export default function App() {
    const [selectedCategory, setSelectedCategory] = useState(() => {
        return localStorage.getItem('gameVault.selectedCategory') || 'All';
    });

    const [favoriteIds, setFavoriteIds] = useState(() => {
        const saved = localStorage.getItem('favorites');

        return saved ? JSON.parse(saved) : [];
    });

    function handleCategoryChange(event) {
        const category = event.target.value;

        setSelectedCategory(category);

        localStorage.setItem(
            'gameVault.selectedCategory',
            category
        );
    }

    function handleToggleFavorite(itemId) {
        const updated = favoriteIds.includes(itemId)
            ? favoriteIds.filter(id => id !== itemId)
            : [...favoriteIds, itemId];

        setFavoriteIds(updated);

        localStorage.setItem(
            'favorites',
            JSON.stringify(updated)
        );
    }

    const categories = [
        ...new Set(items.map(item => item.category))
    ];

    const filteredItems = selectedCategory === 'All'
        ? items
        : items.filter(
            item => item.category === selectedCategory
        );

    return (
        <>
            <Header />

            <main>
                <h2>My Game Collection</h2>

                <div className="filter-container">
                    <label htmlFor="category-filter">
                        Filter by Category:
                    </label>

                    <select
                        id="category-filter"
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                    >
                        <option value="All">
                            All Categories
                        </option>

                        {categories.map(category => (
                            <option
                                key={category}
                                value={category}
                            >
                                {category}
                            </option>
                        ))}
                    </select>
                </div>

                <ItemList
                    items={filteredItems}
                    favoriteIds={favoriteIds}
                    onToggleFavorite={handleToggleFavorite}
                />
            </main>
        </>
    );
}
