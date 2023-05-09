const Palindrome = (word) => {
  const original = word.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversed = original.split("").reverse().join("");
  return original === reversed;
};

const word = "tattarrattat";
const result = Palindrome(word);

console.log(
  `The word "${word}" is ${result ? "a palindrome" : "not a palindrome"}.`
);
