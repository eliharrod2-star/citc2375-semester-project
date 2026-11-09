
import ItemList from '../components/ItemList.jsx';

export default function Home({
    items,
    selectedCategory,
    setSelectedCategory,
    favoriteIds,
    onToggleFavorite
}) {
    const categories = [
        ...new Set(items.map(item => item.category))
    ];

    const filteredItems = selectedCategory === 'All'
        ? items
        : items.filter(
            item => item.category === selectedCategory
        );

    return (
        <main>
            <h2>My Game Collection</h2>

            <div className="filter-container">
                <label htmlFor="category-filter">
                    Filter by Category:
                </label>

                <select
                    id="category-filter"
                    value={selectedCategory}
                    onChange={(event) =>
                        setSelectedCategory(event.target.value)
                    }
                >
                    <option value="All">
                        All Categories
                    </option>

                    {categories.map(category => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>

            <ItemList
                items={filteredItems}
                favoriteIds={favoriteIds}
                onToggleFavorite={onToggleFavorite}
            />
        </main>
    );
}
