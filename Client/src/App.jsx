
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router';
import Header from './components/Header.jsx';
import { loadItems } from './api';
import Home from './views/Home.jsx';
import About from './views/About.jsx';
import AddItem from './views/AddItem.jsx';
import './App.css';

export default function App() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const [selectedCategory, setSelectedCategory] = useState(() => {
        return localStorage.getItem('gameVault.selectedCategory') || 'All';
    });

    const [favoriteIds, setFavoriteIds] = useState(() => {
        const saved = localStorage.getItem('favorites');

        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        loadItems()
            .then((data) => {
                setItems(data);
            })
            .catch((err) => {
                setError(err.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

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

    if (loading) {
        return <p>Loading games...</p>;
    }

    if (error) {
        return <p>Error loading games: {error}</p>;
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
