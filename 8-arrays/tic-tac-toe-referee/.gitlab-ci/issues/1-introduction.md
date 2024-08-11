# tic-tac-toe-referee

Tic-Tac-Toe, sometimes also known as Xs and Os, is a game for two players (X and O) who take turns marking the spaces in a 3×3 grid. The player who succeeds in placing three respective marks in horizontal, vertical, or diagonal rows (NW-SE and NE-SW) wins the game.

But we will not be playing this game. You will be the referee for the results of this game. You are given a result of a game and you must determine if the game ends in a win or a draw as well as who will be the winner. Make sure to return "X" if the X-player wins and "O" if the O-player wins. If the game is a draw, return "D".

A game's result is presented as a list of strings, where "X" and "O" are players' marks and "." is the empty cell.

**Input:** A game result is a list of strings (Unicode).

**Output:** "X", "O" or "D" as a string.

## Example

```javascript
expect(run([
  'X.O',
  'XX.',
  'XOO'])).toBe('X');
expect(run([
  'OO.',
  'XOX',
  'XOX'])).toBe('O');
expect(run([
  'OOX',
  'XXO',
  'OXX'])).toBe('D');
```

/label js::elementary
/label level::array
/label js::string
