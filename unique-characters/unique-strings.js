function areAllUniqueSet(chars) {
  return new Set(chars.split("")).size === chars.length;
}

function areAllUniqueIter(chars) {
  const seen = {};

  for (var i = 0; i < chars.length; i++) {
    if (chars[i] in seen) {
      return false;
    } else {
      seen[chars[i]] = true;
    }
  }
  return true;
}

console.log(areAllUniqueIter("hey"));
console.log(areAllUniqueIter("👋🏽👋"));
console.log(areAllUniqueIter("hello🥰👋🏽"));
