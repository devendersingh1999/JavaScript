let choice = ['rock', 'paper', 'scissor'];

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        let userChoice = button.value;
        let computerChoice = choice[Math.floor(Math.random() * 3)];

        document.getElementById('computer-choice').innerText = `Computer chose: ${computerChoice}`;

        if (userChoice === computerChoice) {
            document.getElementById('result').innerText = "It's a Tie!";
        } else if (
            (userChoice === 'rock' && computerChoice === 'scissor') ||
            (userChoice === 'paper' && computerChoice === 'rock') ||
            (userChoice === 'scissor' && computerChoice === 'paper')
        ) {
            document.getElementById('result').innerText = "You Win!";
        } else {
            document.getElementById('result').innerText = "Computer Wins!";
        }
    });
});
