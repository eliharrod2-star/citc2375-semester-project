
export default function ItemCard({
    item,
    isFavorite,
    onToggleFavorite
}) {
    return (
        <article className="item-card">
            <h2>{item.title}</h2>

            <p>{item.description}</p>

            <p><strong>Category:</strong> {item.category}</p>

            <p><strong>Platform:</strong> {item.platform}</p>

            <p><strong>Rating:</strong> {item.rating}/10</p>

            <button
                type="button"
                aria-pressed={isFavorite}
                onClick={() => onToggleFavorite(item.id)}
            >
                {isFavorite ? "♥ Favorited" : "♡ Favorite"}
            </button>
        </article>
    );
}
