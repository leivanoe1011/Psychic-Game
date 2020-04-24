 
        var userWins = 0;
        
        var compWins = 0;

        var guessArray = [];

        var wins = document.getElementById("user-win");
        var loss = document.getElementById("user-losses");
        var guessLeft = document.getElementById("guess-count");
        var guesses = document.getElementById("user-guessed");
        var compGuess = document.getElementById("comp-guess");


        // Initial counter
        var guessCounter = 9;


        // Create random letter
        function randomLetter(length) {
            
            var result           = '';
            // var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            
            var characters       = 'abcdefghijklmnopqrstuvwxyz';
            
            var charactersLength = characters.length;
            
            for ( var i = 0; i < length; i++ ) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }

            return result;
        }      

        function resetValues() {
            guessArray = [];
            guessCounter = 9; 
        }


        // Initial computer guess
        var computerGuess = randomLetter(1);
   
        
        document.onkeyup = function(event) {

            var userKey = event.key.toLowerCase();

            // console.log("comp guess: " + computerGuess);

            guessArray.push(userKey);

            var currentGuesses = "";

            for(var i = 0; i < guessArray.length; i++){
                currentGuesses += guessArray[i] + ",";
            }

            // remove the last comma
            guesses.textContent = currentGuesses.substring(0,currentGuesses.length-1);


            if(computerGuess !== userKey && guessCounter !== 0){
                
                guessCounter--;

                guessLeft.textContent = guessCounter;
                
                if(guessCounter === 0){
                   
                    compGuess.textContent = computerGuess;
                    computerGuess = randomLetter(1);
                    compWins++;
                    loss.textContent = compWins;
                    resetValues();
                }
            } 
            else {
                compGuess.textContent = computerGuess;
                computerGuess = randomLetter(1);
                userWins++;
                wins.textContent = userWins;
                resetValues();
            }

        }


