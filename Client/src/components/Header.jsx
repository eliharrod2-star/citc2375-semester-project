

import { Link } from 'react-router';

export default function Header() {
    return (
        <header>
            <h1>GameVault</h1>

            <nav aria-label="Main navigation">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/add">Add</Link>
            </nav>
        </header>
    );
}

