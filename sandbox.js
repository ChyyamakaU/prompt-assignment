

// 1
let fullName = prompt("Enter your full name");
let nameSplit = names.split(" ");

let nameInit =(nameSplit[0][0] + nameSplit[1][0]).toUppercase();
console.log('your name is ${fullName} |- ${nameInit}');


// 2.
let statement = prompt("Where do you live?");


let letter = prompt ("select a letter from the comment provided:");
let letterPosition = (statement.indexOf(letter));
console.log(`${statement}The position of the letter inserted is : ${letterPosition}`);


// 3. 
let firstName = prompt ("Enter your first name");
let lastName = prompt("ENetr your last name");
let completeName = (`${firstName} ${lastName}_`).toLowerCase()
console.log(completeName, completeName.length);