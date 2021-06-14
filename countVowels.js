// .load countVowels.js

const VOWELS = ['a', 'e', 'i', 'o', 'u'];

function countVowels(str, index=0) {
  if (index > str.length) return 0;
  const count = VOWELS.includes(str[index]) ? 1 : 0;
  return count + countVowels(str, index + 1);
}


console.log(
  countVowels('The quick brown fox jumps over the lazy dog')
  )


