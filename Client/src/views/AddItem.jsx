import { useState } from 'react';
import { useNavigate } from 'react-router';

export default function AddItem({ setItems }) {
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [platform, setPlatform] = useState('');
    const [description, setDescription] = useState('');
    const [website, setWebsite] = useState('');
    const [rating, setRating] = useState('');
    const [image, setImage] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

        const newItem = {
            id: Date.now(),
            title,
            category,
            platform,
            description,
            website,
            rating: Number(rating),
            image
        };

        setItems(currentItems => [
            ...currentItems,
            newItem
        ]);

        navigate('/');
    }

    return (
        <>
            <main>
                <div className="content-width">
                    <h2>Add a Game</h2>

                    <p>Add a new game to your collection.</p>

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="title">Game Title</label>
                            <input
                                type="text"
                                id="title"
                                value={title}
                                onChange={event => setTitle(event.target.value)}
                                required
                                minLength="1"
                                maxLength="100"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="category">Category</label>
                            <select
                                id="category"
                                value={category}
                                onChange={event => setCategory(event.target.value)}
                                required
                            >
                                <option value="">Select a category</option>
                                <option value="RPG">RPG</option>
                                <option value="Action">Action</option>
                                <option value="Adventure">Adventure</option>
                                <option value="Strategy">Strategy</option>
                                <option value="Simulation">Simulation</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="platform">Platform</label>
                            <input
                                type="text"
                                id="platform"
                                value={platform}
                                onChange={event => setPlatform(event.target.value)}
                                required
                                maxLength="50"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea
                                id="description"
                                rows="5"
                                value={description}
                                onChange={event => setDescription(event.target.value)}
                                maxLength="500"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="website">Game Website</label>
                            <input
                                type="url"
                                id="website"
                                value={website}
                                onChange={event => setWebsite(event.target.value)}
                                placeholder="https://example.com"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="rating">Rating (1-10)</label>
                            <input
                                type="number"
                                id="rating"
                                min="1"
                                max="10"
                                value={rating}
                                onChange={event => setRating(event.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="image">Image Path</label>
                            <input
                                type="text"
                                id="image"
                                value={image}
                                onChange={event => setImage(event.target.value)}
                                placeholder="/images/game.png"
                            />
                        </div>

                        <button type="submit">Add Game</button>
                    </form>
                </div>
            </main>

            <footer>
                <div className="content-width">
                    <p>&copy; 2026 GameVault - Video Game Collection Tracker</p>
                </div>
            </footer>
        </>
    );
}