let a = 'This is a string';
console.log(a.split(''));

// Type Annotations
let lang: string = 'TypeScript!';

// Parameter type annotation and return
function greet(lang: string): string {
  return `Hello, ${lang}!`;
}

console.log(greet(lang));

// Typed array
let arrayOfNUmbers: number[] = [1, 2, 3];

// Tuple
let arrayOfStringsandNumbers: [string, number] = ['foo', 42];

// Type Inference:
let message = 'Hello, TypeScript!'; // TypeScript infers the type string

// Union types
// Initialized with string
let eitherNumberOrString: number | string = '1';
// reassigned with number
eitherNumberOrString = 1;

// Literal union
let currentStatus: 'pending' | 'error' | 'success' = 'pending';

// Type alias
type Size = {
  width: number;
  height: number;
};

// Almost all features of an interface are available in type.
// The key distinction is that a type cannot be re-opened
// to add new properties vs an interface which is always extendable.
function calcArea(rect: Size) {
  return rect.height * rect.width;
}

// Interfaces are used for specifying the shape of objects
// They can then be used to specify the type of variables,
// function parameters and return values
interface Person {
  name: string;
  age: number;
  email?: string; // Optional property
  readonly securitynumber: number; // cannot be changed
}

// interfaces can extend other interfaces
interface Programmer extends Person {
  favouriteLanguage: string;
  currentStack: string[];
}

let John: Person = {
  name: 'John',
  age: 39,
  securitynumber: 555,
};

const JohnTS: Programmer = {
  name: 'John',
  age: 39,
  email: 'john@codeman.ts',
  securitynumber: 808,
  favouriteLanguage: 'TypeScript',
  currentStack: ['TypeScript', 'React', 'Node', 'Express', 'PostgreSQL'],
};

console.log(JohnTS.favouriteLanguage, JohnTS.currentStack);
