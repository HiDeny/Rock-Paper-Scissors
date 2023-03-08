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
        const buttons = document.querySelectorAll('img');
        const results = document.querySelector('.results');
        const main = document.querySelector('.main');
        const dispPlayerPick = document.querySelector('.playerPick');
        const dispPlayerPoints = document.querySelector('.playerPoints');
        const dispComputerPick = document.querySelector('.computerPick');
        const dispComputerPoints = document.querySelector('.computerPoints');
        const dispGameResult = document.querySelector('.gameResult');
        const dispFinal = document.querySelector('.final');
        const support = document.querySelector('.support');

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
                console.log(testPick);
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
        let computerPoints = 0;
        let playerPoints = 0;
        
        dispGameResult.textContent = "Let's Play!";
        support.textContent = "(PICK YOUR WEAPON!)";
        // Play game function:
        function playGame() {

            support.textContent = '';
            // Pick weapon
            let computerPick = getComputerChoice();
            let playerSelection = testPick;
                
            // Play
            let game = playRound(playerSelection, computerPick);

                // Count Points
                if (game == 0) {
                    computerPoints++;
                    dispPlayerPick.textContent = `${playerSelection.toUpperCase()}`;
                    dispComputerPick.textContent = `${computerPick.toUpperCase()}`;

                    dispComputerPoints.textContent = computerPoints;
                    dispPlayerPoints.textContent = playerPoints;
                    
                    dispGameResult.textContent = `Point for Computer!`;
                    
                
                } else if (game == 1) {
                    playerPoints++;
                    dispPlayerPick.textContent = `${playerSelection.toUpperCase()}`;
                    dispComputerPick.textContent = `${computerPick.toUpperCase()}`;

                    dispComputerPoints.textContent = computerPoints;
                    dispPlayerPoints.textContent = playerPoints;
                    
                    dispGameResult.textContent = `Point for Player!`;
                    
                
                } else {
                    dispPlayerPick.textContent = `${playerSelection.toUpperCase()}`;
                    dispComputerPick.textContent = `${computerPick.toUpperCase()}`;

                    dispComputerPoints.textContent = computerPoints;
                    dispPlayerPoints.textContent = playerPoints;
                    
                    dispGameResult.textContent = "It's a TIE!";
                    
                }

                if (computerPoints == 5 || playerPoints == 5) {
                    
                    if (computerPoints > playerPoints) {
                        main.innerHTML = `
                        <h1>Computer WINS!</h1>
                        <div class="section">
                            <div class="show">
                                <h4>Player:<h4>
                                <h2>${playerPoints}<h2>
                            </div>
                            <div class="show">
                                <h4>Computer:<h4>
                                <h2>${computerPoints}<h2>
                            </div>
                        </div>
                        <button onClick="window.location.reload()">Play Again!</button>
                        `;
                    } else if (playerPoints > computerPoints) {
                        main.innerHTML = `
                        <h1>Player WINS!</h1>
                        <div class="section">
                            <div class="show">
                                <h4>Player:<h4>
                                <h2>${playerPoints}<h2>
                            </div>
                            <div class="show">
                                <h4>Computer:<h4>
                                <h2>${computerPoints}<h2>
                            </div>
                        </div>
                        <button onClick="window.location.reload()">Play Again!</button>
                        `;
                    } else {
                        main.innerHTML = `
                        <h1>It's a TIE!</h1>
                        <div class="section">
                            <div class="show">
                                <h4>Player:<h4>
                                <h2>${playerPoints}<h2>
                            </div>
                            <div class="show">
                                <h4>Computer:<h4>
                                <h2>${computerPoints}<h2>
                            </div>
                        </div>
                        <button onClick="window.location.reload()">Play Again!</button>
                        `;
                   }
                }
            }
            
        
        
            buttons.forEach((button) => {
                button.addEventListener('click', () => {
                    playGame();
                });
            })


    


