 //  Get Computer Choice Function:
        //      Pick: Rock, Paper, Scissors
        //      connect it to an variable
        //      
        //  Play round function:
        //      Play one round of the game.
        //      Take two parameters: Player playerSelection, computerSelection.
        //      return string with message with result
        //      
        //  Get playerSelection:
        //      case-insensitive
        //      use prompt to get input
        //      
        //  Play game function:
        //      call play round function 5 times.
        //      keep score
        //      reports an winner or loser
        //      use loops
        //      showResults winner of each round.
        //      showResults over all winner.
        //  
        //  use showResults for testing outputs


        //Query selectors
        const buttons = document.querySelectorAll('button');
        const results = document.querySelector('.results');

        // Show results 
        function showResults(result) {
            const p = document.createElement('p');
            p.textContent = result;
            results.appendChild(p);
        }

        // Get Computer Choice Function:
        function getComputerChoice() {
            let random = Math.floor(Math.random() * 3);
            let pick = '';
            switch(random){
                case 0:
                    pick = 'rock';
                    break;
                
                case 1:
                    pick = 'paper';
                    break;

                case 2:
                    pick = 'scissors';
                    break;
            }
            return pick;
        }

        let computerSelection = getComputerChoice();
        
        

        // Get playerSelection function:
        let playerSelection;

        buttons.forEach((button) => {
            
            button.addEventListener('click', (e) => {
                playerSelection = e.target.className;
            });
        })



        // Play round function:
        function playRound(playerSelection) {

            let computerSelection = getComputerChoice();

            if (playerSelection == computerSelection) {
                // showResults("It's a tie!");
                return "It's a tie!";
            } else if ( playerSelection === 'rock' && computerSelection === 'scissors') {
                // showResults('Player win!')
                return 'Player win!';
            } else if ( playerSelection === 'paper' && computerSelection === 'rock') {
                // showResults('Player win!')
                return 'Player win!';
            } else if ( playerSelection === 'scissors' && computerSelection === 'paper') {
                // showResults('Player win!')
                return 'Player win!';
            } else {
                // showResults('Computer win!')
                return 'Computer win!';
            }
        }

        // Results
        let round = 0;
        let computerPoints = 0;
        let playerPoints = 0;


        // Play game function:
        function playGame(playerSelection) {

            // Play game for 5 rounds
            round++;
            showResults('\nRound: ' + round); 
           
            // Pick weapon
            let computerPick = getComputerChoice();
                
            // Play
            let game = playRound(computerPick, playerSelection);

                // Count Points
                if (game == 'Computer win!') {
                    computerPoints++;
                    showResults(`Player Pick :  ${playerSelection}`);
                    showResults('Computer Pick : ' + computerPick);
                    showResults(`Point for Computer! ${computerPick.toUpperCase()} defeat ${playerSelection.toUpperCase()}!`);
                
                } else if (game == 'Player win!') {
                    playerPoints++;
                    showResults('Player Pick : ' + playerSelection);
                    showResults('Computer Pick : ' + computerPick);
                    showResults(`Point for Player! ${playerSelection.toUpperCase()} defeat ${computerPick.toUpperCase()}!`);
                
                } else {
                    showResults('Player Pick : ' + playerSelection);
                    showResults('Computer Pick : ' + computerPick);
                    showResults("It's a TIE!");
                }

            showResults("Player: " + playerPoints);
            showResults("Computer: " + computerPoints);
            }
            
            // if (counter > 5) {
            //     if (computerPoints > playerPoints) {
            //         showResults("FINAL RESULT!");
            //         showResults("....");
            //         showResults("COMPUTER WINS!");
            //     } else if (playerPoints > computerPoints) {
            //         showResults("FINAL RESULT!");
            //         showResults("....");
            //         showResults("PLAYER WINS!");
            //     } else {
            //         showResults("FINAL RESULT!");
            //         showResults("....");
            //         showResults("IT'S A TIE!");
            //     }
            // }
        

        // playGame();


    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            playGame(playerSelection);
        });
    })


