// Function to play Rock-Paper-Scissors
function playGame(userChoice) {
    // Generate computer choice
    const computerChoice = Math.floor(Math.random() * 3); // 0: Rock, 1: Paper, 2: Scissors
    const choices = ["Rock", "Paper", "Scissors"];
    
    console.log(`You chose: ${choices[userChoice]}`);
    console.log(`Computer chose: ${choices[computerChoice]}`);

    // Determine winner using ternary operators
    const result = 
        userChoice === computerChoice
            ? "It's a tie!"
            : (userChoice === 0 && computerChoice === 2) || // Rock beats Scissors
              (userChoice === 1 && computerChoice === 0) || // Paper beats Rock
              (userChoice === 2 && computerChoice === 1)   // Scissors beats Paper
            ? "You win!"
            : "You lose!";

    console.log(result);
}

// Example usage
// User input: 0 for Rock, 1 for Paper, 2 for Scissors
playGame(0); // Pass 0, 1, or 2 as user choice
