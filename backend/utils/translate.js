const translate = require('@iamtraction/google-translate');

const translateText = async (text, targetLang) => {
  try {
    const res = await translate(text, { to: targetLang });
    return res.text;
  } catch (err) {
    console.error('Translation error:', err);
    return text; // Return original text if translation fails
  }
};

module.exports = translateText;
