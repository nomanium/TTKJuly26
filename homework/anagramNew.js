function anagram(s,t){
    if (s.length !==  t.length) {
        return false;
    }

    const chars  =   new Set(s);    //cannot use set because it will remove duplicates. So we need to use array instead of set.

    for (const char of chars) {
        if (! t.includes(char)) {
            return false;
        }
    }

    return true;
}

console.log(anagram("aab", "abb")); // false
console.log(anagram("listen", "silent")); // true