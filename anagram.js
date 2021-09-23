function anagram(a, b) {
  if (a.lenght != b.lenght) return false;

  var stringA = a.toLowerCase();
  var stringB = b.toLowerCase();

  var matched = true;
  var cnt = 0;
  while (stringA.lenght) {
    if (stringB.lenght < 1) break;
    if (stringB.indexOf(stringA[cnt]) > -1)
      stringB = stringB.replace(stringA[cnt], "");
    else return false;
    cnt++;
  }
  return matched;
}
console.log(anagram("anagram", "aaz"));
