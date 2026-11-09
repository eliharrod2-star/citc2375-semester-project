export default function About() {
    return (
        <>
            <main>
                <div className="content-width">
                    <h2>About This Application</h2>

                    <p>
                        This application helps video game fans organize and keep track of
                        their favorite video games in one place.
                    </p>

                    <p>
                        It can be used by gamers who want an easy way to browse their
                        collection, learn about different games, and keep track of the
                        games they own or enjoy playing.
                    </p>

                    <p>
                        The application manages a collection of video games. Each game
                        can include information such as its name, genre, description,
                        and other details about the game.
                    </p>
                </div>

                <section className="content-width">
                    <h2>GameVault Data Model</h2>

                    <table>
                        <caption>Game information stored by GameVault</caption>

                        <thead>
                            <tr>
                                <th scope="col">Field</th>
                                <th scope="col">Purpose</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <th scope="row">Title</th>
                                <td>The name of the game</td>
                            </tr>

                            <tr>
                                <th scope="row">Category</th>
                                <td>The type or genre of the game</td>
                            </tr>

                            <tr>
                                <th scope="row">Platform</th>
                                <td>The system the game is played on</td>
                            </tr>

                            <tr>
                                <th scope="row">Description</th>
                                <td>A short description of the game</td>
                            </tr>

                            <tr>
                                <th scope="row">Website</th>
                                <td>A link to the game's official website</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </main>

            <footer>
                <div className="content-width">
                    <p>&copy; 2026 GameVault - Video Game Collection Tracker</p>
                </div>
            </footer>
        </>
    );
}
