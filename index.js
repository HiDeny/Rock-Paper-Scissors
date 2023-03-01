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
        const rstBtn = document.querySelectorAll('.restart');
        const results = document.querySelector('.results');
        const dispRound = document.querySelector('.round');
        const dispPlayerPick = document.querySelector('.playerPick');
        const dispPlayerPoints = document.querySelector('.playerPoints');
        const dispComputerPick = document.querySelector('.computerPick');
        const dispComputerPoints = document.querySelector('.computerPoints');
        const dispGameResult = document.querySelector('.gameResult');
        const dispFinal = document.querySelector('.final');

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
        let testPick;

        buttons.forEach((button) => {
            
            button.addEventListener('click', (e) => {
                testPick = e.target.className;
            });
        })



        // Play round function:
        function playRound(playerSelection, computerSelection) {
            

            if (playerSelection == computerSelection) {
                return 2;
            } else if ( playerSelection == 'rock') {
                if (computerSelection == 'scissors') {
                    return 1;
                } else if (computerSelection == 'paper') {
                    return 0;
                } 
            } else if ( playerSelection == 'paper') {
                if (computerSelection == 'rock') {
                    return 1;
                } else if (computerSelection == 'scissors') {
                    return 0;
                }
            } else if ( playerSelection == 'scissors') {
                if (computerSelection == 'paper') {
                    return 1;
                } else if (computerSelection == 'rock') {
                    return 0;
                }
            }
        }


        // Results
        let round = 0;
        let computerPoints = 0;
        let playerPoints = 0;
        

        // Play game function:
        function playGame() {

            // Play game for 5 rounds
            round++;
            dispRound.textContent = 'Round: ' + round;
           
            // Pick weapon
            let computerPick = getComputerChoice();
            let playerSelection = testPick;
                
            // Play
            let game = playRound(playerSelection, computerPick);

                // Count Points
                if (game == 0) {
                    computerPoints++;
                    dispPlayerPick.textContent = `Player Pick : ${playerSelection.toUpperCase()}`;
                    dispComputerPick.textContent = `Computer Pick : ${computerPick.toUpperCase()}`;

                    dispComputerPoints.textContent = "Computer: " + computerPoints;
                    dispPlayerPoints.textContent = "Player: " + playerPoints;
                    
                    dispGameResult.textContent = `Point for Computer!`;
                    
                
                } else if (game == 1) {
                    playerPoints++;
                    dispPlayerPick.textContent = `Player Pick : ${playerSelection.toUpperCase()}`;
                    dispComputerPick.textContent = `Computer Pick : ${computerPick.toUpperCase()}`;

                    dispComputerPoints.textContent = "Computer: " + computerPoints;
                    dispPlayerPoints.textContent = "Player: " + playerPoints;
                    
                    dispGameResult.textContent = `Point for Player!`;
                    
                
                } else {
                    dispPlayerPick.textContent = `Player Pick : ${playerSelection.toUpperCase()}`;
                    dispComputerPick.textContent = `Computer Pick : ${computerPick.toUpperCase()}`;

                    dispComputerPoints.textContent = "Computer: " + computerPoints;
                    dispPlayerPoints.textContent = "Player: " + playerPoints;
                    
                    dispGameResult.textContent = "It's a TIE!";
                    
                }

                if (round >= 5) {
                    
                    if (computerPoints > playerPoints) {
                        results.innerHTML = `<h1>Computer WINS!</h1>
                        <p>${playerPoints}  ${computerPoints}<p>`;
                    } else if (playerPoints > computerPoints) {
                        results.innerHTML = `<h1>Player WINS!</h1>
                        <p>${playerPoints}  ${computerPoints}<p>`;
                    } else {
                        results.innerHTML = `
                        <h1>It's a TIE!</h1>
                        <p>${playerPoints}  ${computerPoints}<p>`;
                   }
                }
            }
            
        
        
            buttons.forEach((button) => {
                button.addEventListener('click', () => {
                    playGame();
                });
            })


    


