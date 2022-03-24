const LoremIpsum = require('lorem-ipsum').LoremIpsum;

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 10,
    min: 5,
  },
  wordsPerSentence: {
    max: 20,
    min: 10,
  },
});

const paragraph = lorem.generateParagraphs(1);
const buff = Buffer.from(paragraph, 'utf-8');
const secretKey = buff.toString('base64', 0, 64);

console.log(`\nAPP_SECRET_KEY=${secretKey}`);
console.log(
  'Copy the value and use it in your .env file if APP_SECRET_KEY is not yet set.\n'
);
