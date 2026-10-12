const projectTitle = "GameVault";
const sampleItems = 3;
const averageRating = 8.5;
const hasSampleGames = true;

//calculate total rating point for sample games
const totalRating = sampleItems * averageRating;

//create a project summary using a template
const projectSummary = 
`${projectTitle} currently has ${sampleItems} sample games with an average rating of ${averageRating}.`;

//check wether the project has enough sample items
let collectionMessage;

if (sampleItems >= 3) {
    collectionMessage = "The GameVault sample collection has enough games for the prototype.";
} else {
    collectionMessage = "The GameVault sample collection needs more games.";
}

console.log(projectSummary);
console.log(`Total rating points: ${totalRating}`);
console.log(`Has sample games: ${hasSampleGames}`);
console.log(collectionMessage);

console.log("GameVault loaded!");
console.log("Game with ID 1:", getItemById(1));
console.log("RPG games:", getItemsByCategory("RPG"));
console.log("Average game rating:", calcAvgRating());
