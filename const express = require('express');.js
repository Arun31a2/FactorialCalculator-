const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Factorial calculation endpoint
app.post('/calculate-factorial', (req, res) => {
  const { number } = req.body;

  if (!number || isNaN(number) || number < 0 || !Number.isInteger(number)) {
    return res.status(400).json({ error: 'Please provide a valid positive integer.' });
  }

  const iterativeResult = factorialIterative(number);
  const recursiveResult = factorialRecursive(number);

  res.json({ iterativeResult, recursiveResult });
});

function factorialIterative(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

function factorialRecursive(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorialRecursive(n - 1);
}

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
