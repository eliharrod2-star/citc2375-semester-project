

import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router';
import Header from './components/Header.jsx';
import { items as initialItems } from './data.js';
import Home from './views/Home.jsx';
import About from './views/About.jsx';
import AddItem from './views/AddItem.jsx';
import './App.css';

export default function App() {
    const [items, setItems] = useState(initialItems);

    const [selectedCategory, setSelectedCategory] = useState(() => {
        return localStorage.getItem('gameVault.selectedCategory') || 'All';
    });

    const [favoriteIds, setFavoriteIds] = useState(() => {
        const saved = localStorage.getItem('favorites');

        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem(
            'favorites',
            JSON.stringify(favoriteIds)
        );
    }, [favoriteIds]);

    function handleCategoryChange(category) {
        setSelectedCategory(category);

        localStorage.setItem(
            'gameVault.selectedCategory',
            category
        );
    }

    function handleToggleFavorite(itemId) {
        setFavoriteIds(currentFavorites =>
            currentFavorites.includes(itemId)
                ? currentFavorites.filter(id => id !== itemId)
                : [...currentFavorites, itemId]
        );
    }

    return (
        <>
            <Header />

            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
                            items={items}
                            selectedCategory={selectedCategory}
                            setSelectedCategory={handleCategoryChange}
                            favoriteIds={favoriteIds}
                            onToggleFavorite={handleToggleFavorite}
                        />
                    }
                />

                <Route
                    path="/about"
                    element={<About />}
                />

                <Route
                    path="/add"
                    element={<AddItem setItems={setItems} />}
                />
            </Routes>
        </>
    );
}
