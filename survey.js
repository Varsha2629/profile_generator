const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Whats you name? Nicknames are also cool: ',
(answer1) => {
  rl.question('Whats an activity you like doing? : ',
  (answer2) => {
    rl.question('What do you listen to while doing that?: ',
    (answer3) => {
      rl.question('Which mean is your favourite (eg: dinner, brunch, ect.): ',
      (answer4) => {
        rl.question("Whats your favourite thing to eat for that meal?: ",
        (answer5) => {
          rl.question("Which sport is you absolute favourite?: ",
          (answer6) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!: ",
            (answer7) => {
              console.log(`${answer1} loves listening to ${answer3} while ${answer2}, devouring ${answer5} for ${answer4}, prefers ${answer6} over any other sport, and is amazing at ${answer7}.`)
              rl.close();  
            })
          });
        });
      });
    });
  });
});
