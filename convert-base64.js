function decodeBase64Vars() {
  const jsonVars = {};

  const convertedString = Buffer.from(value, "base64").toString();
  console.log(`${key}: ${convertedString}`);
}

function encodeBase64Vars() {
  const jsonVars = {};

  const convertedString = Buffer.from(value).toString("base64");
  console.log(`${key}: ${convertedString}`);
}

function parseStringToBase64(text) {
  console.log(Buffer.from(text).toString("base64"));
}

function parseBase64ToString(base64Text) {
  console.log(Buffer.from(base64Text, "base64").toString());
}

<<<<<<< HEAD
=======
function convert(){
  return
}

>>>>>>> test
module.exports = {
  parseStringToBase64,
  parseBase64ToString,
};
