const operations = ["Add", "Multiply", "Divide"]

const calculator = (a: number, b:number, op:string) => {
    if(!operations.includes(op)) return "Sorry that operation is not defined"

    if(op == "Add") return a + b
    if(op == "Multiply") return a*b
    if(op == "Divide")
        if(b == 0) return "Sorry cannot divide in 0"
        else return a/b
    throw new Error("Operation is not valid")
}
try{
    console.log(calculator(1, 5, "divide"))
}catch(e){
    console.log("Something went wrong ", e)
}

console.log(calculator(3,6,"Multiply"))
console.log(calculator(3,6,"Add"))
console.log(calculator(3,6,"Divide"))