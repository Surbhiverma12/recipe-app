const translateText = require('./utils/translate.js');

const test = async () => {
  const original = "Hello, this is a test recipe";

  const hindi = await translateText(original, 'hi');
  const spanish = await translateText(original, 'es');

  console.log("Original:", original);
  console.log("Hindi:", hindi);
  console.log("Spanish:", spanish);
};

test();
