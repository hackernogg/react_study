// Primitives: number, string, boolean
// More complex types: arrays, objects
// function types, parameters

// primitives

let age: number;
age = 12;


let userName: string = 'Yilong';

let isInstructor: boolean;
isInstructor = true;


// More complex types
let hobbies: string[];

hobbies = ['sports','cooking'];

type Person = {
    name: string;
    age: number;
}

let person: Person

person = {
    name: 'Max',
    age: 23
}

let people: Person[];

// Type inference

let course: string | number = 'React- the complete Guide';

course = 123;

// Functions & types

function add(a: number ,b: number){
    return a+b;
}

function printOut(value: any) {
    console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T){
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1,2,3];
const updatedArray = insertAtBeginning(demoArray, -1);
const stringArray = insertAtBeginning(['a','b','c'],'d');
