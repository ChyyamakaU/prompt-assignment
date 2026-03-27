

// 1
// let fullName = prompt("Enter your full name");
// let nameSplit = fullName.split(" ");

// let nameInit =(nameSplit[0][0] + nameSplit[1][0]).toUppercase();
// console.log('your name is ${fullName} |- ${nameInit}');


// 2.
// let statement = prompt("Where do you live?");


// let letter = prompt ("select a letter from the comment provided:");
// let letterPosition = (statement.indexOf(letter));
// console.log(`${statement}The position of the letter inserted is: ${letterPosition}`);


// 3. 
// let firstName = prompt ("Enter your first name");
// let lastName = prompt("ENetr your last name");
// let completeName = (`${firstName} ${lastName}_`).toLowerCase()
// console.log(completeName, completeName.length);






var email = "AMAKAUmunna90@GMAIL.COM"

// includes tell you if a character is present or not

// to check if it is a valid email
console.log(email.includes("@"))

console.log(email.includes(".com", 8))

var firstName= "  Amaka                     "

// conerting to uppercase
console.log(firstName.toUpperCase())

// cnverting or transforming to lower case

console.log(email.toLowerCase())

// trim helps clear white space on bothe the beginning and end of the name
// there are three methds for this trim, trimStart and trimENd

console.log(firstName.trim())


var fname = "Ama ka"
console.log(fname.includes (" "))


// trimstart removes white spaces from the beginning only

// trimend allows you reomve white spaces at the end of the string



// string modifiactaion method is replacing one string with another

// replace

var names ="   Amaka Jane Jack Ada Jack Ama Amada "
console.log(names.replace("Amaka", "Juliet"))
console.log(names.replace("Jack", "Juliet"))

// method chaining
console.log(names.replace("Amaka", "Juliet").trim().includes("Juliet"))


// replace all 
console.log(names.replaceAll("Jack", "Juliet"))
console.log(names.replaceAll("Ama", "Dama"))
console.log(names.replace("Ada", null))

var fNamee = "Nate"

// console.log(fname.replace )

// repeat is used to repeat strings X number of times

console.log(firstName.repeat(5))

// padding in JS, to fill or add more content
// there are two ways of padding padStart and padEnd


console.log(fNamee.padEnd(4, "A"))



// Array
// collection of multiple data

var users = [{id:1, name: "Solex", email: "solex.com"},
{id:2, name: "Amaka", email: "Amaka.com"},
{id:3, name: "Dan", email: "Dan.com"}

]

console.log(users[0].email)
// console.log(typeof users)