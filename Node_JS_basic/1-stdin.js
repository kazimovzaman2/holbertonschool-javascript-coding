// Display the initial message
console.log("Welcome to Holberton School, what is your name?");

// Set encoding to utf-8 for proper string handling
process.stdin.setEncoding('utf-8');

// Listen for user input
process.stdin.on('data', (data) => {
  // Remove any trailing newline characters from the input
  const name = data.trim();

  // Display the inputted name
  console.log(`Your name is: ${name}`);

  // End the process
  process.exit();
});

// Listen for process exit event
process.on('exit', () => {
  console.log('This important software is now closing');
});
