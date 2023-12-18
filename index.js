// Code your solution here
function findMatching(drivers, name) {
  //This is a function that takes two parameters - drivers & name
  return drivers.filter(
    //in-built feature in JS that checks the array of drivers and creates a new array of list contaaining the new array needed
    (driver) => driver.toLowerCase() === name.toLowerCase() //a parameter driver is passed to check whether the name of the driver in lower case matches the name provided in lowercase
  );
}

function fuzzyMatch(drivers, letters) {
  //The function takes two parameters - drivers and letters
  return drivers.filter((driver) => driver.startsWith(letters)); //Checks whether the driver's name has the same beginning letters
}

function matchName(drivers, name) {
  //Parameters drivers and names are passed to the function
  return drivers.filter((driver) => driver.name === name); //Checks whether the driver'n name equates to the name given
}
