var a = 'This is a string';
console.log(a.split(''));
// Type Annotations
var lang = 'TypeScript!';
function greet(lang) {
    return "Hello, ".concat(lang, "!");
}
console.log(greet(lang));
// Type Inference:
var message = 'Hello, TypeScript!'; // TypeScript infers the type string
var John = {
    name: 'John',
    age: 39,
    securitynumber: 555,
};
var JohnTS = {
    name: 'John',
    age: 39,
    email: 'john@codeman.ts',
    securitynumber: 808,
    favouriteLanguage: 'TypeScript',
    currentStack: ['TypeScript', 'React', 'Node', 'Express', 'PostgreSQL']
};
console.log(JohnTS.favouriteLanguage, JohnTS.currentStack);
