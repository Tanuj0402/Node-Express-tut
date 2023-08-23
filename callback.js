function makeUpperCase(value){
    console.log(value.toUpperCase());
}
// makeUpperCase('tanuj')

function reverseString(value){
    console.log(value.split('').reverse().join(''));
}

function handleName(name,cb) {
    const fullName = `${name} joshi`
    cb(fullName)
}

handleName('tanuj',makeUpperCase)
handleName('tanuj',reverseString)