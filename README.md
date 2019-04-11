# Description and pseudocode

## Game description

1. Random word is chosen by computer
2. User gets 12 guesses
3. User prompted to enter any key to begin
4. User enters letter of choice
5. Evaluate answer:
   1. Correct:
      1. replace the placeholder character with chosen letter
      2. decrement remaining guesses
   2. Not correct:
      1. decrement remaining guesses
      2. add incorrect letter to list of letters already guessed
6. Is the puzzle solved
7. Check remaining guesses. If more than zero, wait for next user entry.

## Game functions:

1. randomWord
2. userEntry
3. processEntry
4. remainingGuesses
5. lettersAlreadyGuessed
6. totalWins