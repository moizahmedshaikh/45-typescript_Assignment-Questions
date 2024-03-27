"use strict";
// Question 32: Checking Usernames: Ensure uniqueness in usernames.
Object.defineProperty(exports, "__esModule", { value: true });
let current_users = ["moiz", "aman", "hamza", "bilal", "suleman"];
let new_users = ["Moiz", "Hamza", "abdullah", "aman", "imran"];
new_users.forEach((newUser) => {
    if (current_users.some((currentUser) => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} will need to enter a new username.`);
    }
    else {
        console.log(`${newUser} is available.`);
    }
});
