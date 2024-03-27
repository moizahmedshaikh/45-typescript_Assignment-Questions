// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. 
//• Use append() to add one new guest to the end of your list. 
///• Print a new set of invitation messages, one for each person in your list.

// name array
let guestArray:string[] = ["farzil","usama","burhan"];

// can not make dinner
let canNotAttend:string = "burhan";

// invite new guest
let newGuest :string = "muzammil";
guestArray[guestArray.indexOf(canNotAttend)]=newGuest;

console.log("Welcome all we found a bigger dinner table!");

// • Add one new guest to the beginning of your array.
let guestbeg :string="Moiz";
guestArray.unshift(guestbeg);
console.log(guestArray);

// • Add one new guest to the middle of your array.
let middleGuest:string = "farzil";
let midleIndex = guestArray.length/2;
guestArray.splice(midleIndex,0,middleGuest);

//• Use append() to add one new guest to the end of your list.
guestArray.push("mehak");

///• Print a new set of invitation messages, one for each person in your list.
guestArray.map((item)=> console.log(`\nDear ${item} You are invited to dinner!`));