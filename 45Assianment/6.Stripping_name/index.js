///Que 6: Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. 
// Then print the name after striping the white spaces.
let personName = "\t\n moiz ahmed \n\t";
console.log(personName);
///withuotwhitespace 
let withoutwhitespace = (personName.trim());
console.log(withoutwhitespace);
console.log("original:", personName);
console.log("stripped:", personName);
export {};
