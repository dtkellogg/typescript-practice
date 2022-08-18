// -------------------- The following is from the Docs: -------------------- //
// -------------------- The Basics (https://www.typescriptlang.org/docs/handbook/2/basic-types.html) -------------------- //
console.log("Hello world!");
// This is an industrial-grade general-purpose greeter function:
function greet(person, date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
// greet("Brendan");
greet("Toshi", new Date());
