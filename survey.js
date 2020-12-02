const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let answers = [];
rl.question('What\'s your name? Nicknames are also acceptable :)', (answer1) => {
  answers.push(answer1);

  rl.question('What\'s an activity you like doing? ', (answer2) => {
    answers.push(answer2);

    rl.question('What do you listen to while doing that? ', (answer3) => {
      answers.push(answer3);

      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer4) => {
        answers.push(answer4);

        rl.question('What\'s your favourite thing to eat for that meal? ', (answer5) => {
          answers.push(answer5);

          rl.question('Which sport is your absolute favourite? ', (answer6) => {
            answers.push(answer6);

            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer7) => {
              answers.push(answer7);

              console.log(`Thank you for your valuable feedback: 
                  Your name is ${answers[0]}. 
                  You like to ${answers[1]} and listen to ${answers[2]}.
                  Your favourite meal is ${answers[3]}.
                  Your favourite thing to eat for that meal is ${answers[4]}.
                  Your absolute favourite sport is ${answers[5]}.
                  Your superpower is ${answers[6]}
                  `);
              rl.close();
            });
          });
        });
      });
    });
  });
});