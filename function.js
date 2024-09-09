function getFirstElement (arr){
    return arr.length == 0 ? null : arr[0];
}
const numbers = [1, 2, 3];
const words = ["apple", "banana", "cherry"];
console.log(`First number: ${getFirstElement(numbers)}`);
console.log(`First word: ${getFirstElement(words)}`);

export function factorial(n) {
    let toreturn = 1
    for (let i = 1; i <= n; i++) {
        toreturn *= i
    }
    return toreturn
}
console.log(`Factorial of 5: ${factorial(5)}`);