//your JS code here. If required.
// Get the element with id "level"
var element = document.getElementById("level");

// Start from the element and traverse its parent nodes
var level = 0;
var currentNode = element;
while (currentNode.parentNode !== null) {
  currentNode = currentNode.parentNode;
  level++;
}

// Print the DOM level using an alert
alert("The level of the element is: " + level);