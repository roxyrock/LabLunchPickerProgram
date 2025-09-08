let lunches = [];

function addLunchToEnd(array, string) {
  array.push(string);
  console.log(string + " added to the end of the lunch menu.");
  return array;
}

addLunchToEnd(lunches, "Tacos");
console.log(addLunchToEnd(["Pizza", "Tacos"], "Burger"));
console.log();

function addLunchToStart(array, string) {
  array.unshift(string);
  console.log(string + " added to the start of the lunch menu.");
  return array;
}

addLunchToStart(lunches, "Sushi");
console.log(addLunchToStart(["Burger", "Sushi"], "Pizza"));
console.log();

function removeLastLunch(array) {
  if (array.length == 0) {
    console.log("No lunches to remove.");
    return array;
  } else {
    let removedItem = array.pop();
    if (removedItem !== undefined) {
      console.log(removedItem + " removed from the end of the lunch menu.");
    }
    return array;
  }
}

removeLastLunch(["Stew", "Soup", "Toast"]);
console.log(removeLastLunch(["Sushi", "Pizza", "Noodles"]));
console.log();

function removeFirstLunch(array) {
  if (array.length == 0) {
    console.log("No lunches to remove.");
    return array;
  }
  let removedItem = array.shift();
  if (removedItem !== undefined) {
    console.log(`${removedItem} removed from the start of the lunch menu.`);
  }
  return array;
}

removeFirstLunch(["Salad", "Eggs", "Cheese"]);
console.log(removeFirstLunch(["Sushi", "Pizza", "Burger"]));
console.log();

function getRandomLunch(array) {
  if (array.length == 0) {
    console.log("No lunches available.");
  } else {
    let selectedItem = array[Math.floor(Math.random() * array.length)];
    console.log("Randomly selected lunch: " + selectedItem);
  }
  return array;
}

console.log(getRandomLunch(lunches));
console.log();

function showLunchMenu(array) {
  if (array.length == 0) {
    console.log("The menu is empty.");
  } else {
    console.log("Menu items: " + array.join(", "));
  }
}

showLunchMenu(["Greens", "Corns", "Beans"]);
console.log(showLunchMenu(["Pizza", "Burger", "Fries", "Salad"]));
