// const message: string = "Hello World"
// console.log(message)

// function greet(person:String, date:Date){
//     console.log(`Hello ${person}, today is ${date.toDateString()!}`);
// }

// function noVoid  (a:any) {
//     return a
// }

// const message2 = greet("Mozart", new Date())
// console.log(noVoid("Futbol"))


// function greeter (fn: (a:String) => void){
//     fn("Toma Toma")
// }

// function printToConsole(s: String){
//     console.log(s)
// }
// greeter(printToConsole)

//CALL SIGNATURES
// type DescribableFunction = {
//     description: string
//     (someArg: number): boolean
// }

// function doSomething(fn: DescribableFunction){
//     console.log(fn.description + " returned " + fn(6))
// }

// function myFunc(someArg: number){
//     return someArg > 3
// }
// myFunc.description = "Default Description"
// doSomething(myFunc)

// type SomeConstructor = {
//     new (s: string ): SomeObject
// }
// function fn(ctor: SomeConstructor){
//     return new ctor("Hello")
// }

// interface CallOrConstruct {
//     new (s: string): Date
//     (m? : number): string;
// }

// function firstElement (arr: any[]){
//     return arr[0]
// }

// const arreglo = [1, 2, "Any"]

// console.log(firstElement(arreglo))

//Generics

// function fristElement<Type>(arr: Type[]): Type | undefined {
//     return arr[0]
// }

// //const a<Type> = { 1 , "Oxi", true}

// console.log(firstElement([123, "Mundo"]))

// function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output [] {
//     return arr.map(func)
// }


// const parsed = map(["1", "2", "3"], (n) => parseInt(n));
// console.log("Init")
// console.log(typeof parsed)
// console.log(map(["1", "2", "3"], (n) => parseInt(n)))

//Type Indexing: a way to extract name from a subset of a type
// type Response = {data: { ... }}
// type Data = Response["data"]


// //Type From Function Return
// type createFixtures = () => { ...}
// type Fixtures = ReturnType<typeof createFixtures>
// function test(fixtures: Fixtures)
