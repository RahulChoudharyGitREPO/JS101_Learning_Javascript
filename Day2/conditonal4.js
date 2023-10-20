let storedUsername = "userXYZ";
let storedPassword = "pass1234";

const inputUsername = prompt("Enter your Username");

const inputPassword = prompt("Enter your Password");

if (inputUsername === storedUsername && inputPassword === storedPassword) {
  console.log("login successful");
} else {
  console.log("login failed");
}
