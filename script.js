var programmingLanguages = [
  "Scala",
  "Java",
  "Go",
  "Swift",
  "Cobol",
  "JavaScript",
  "Python",
  "Ruby",
  "Elm",
  "Rust",
  "C#"
];

console.log(programmingLanguages);

// Output Strings with a for...of Loop
for (var program of programmingLanguages) {
  console.log(`I want to learn ${program}!`);
}

// Create a NUmbered List with forEach()
programmingLanguages.forEach(function (langX, indexX) {
  console.log(`${indexX + 1}. ${langX}`.toUpperCase());
});

// Filter Elements by a String
var updatedLanguages = programmingLanguages.filter(function (language) {
  return language.includes("y");
});

console.log(updatedLanguages);