function upperCaser(inputString)
{
    let upperCased = inputString.toUpperCase();
    return upperCased;
}

console.log("Test for simple string 'hello':", upperCaser('hello') === 'HELLO');