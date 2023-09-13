

let marioChapter = Math.floor(Math.random() * 10) ; 

console.log("The compartment where Mario is hiding: " + marioChapter);

let fatherGuess;

while (true) {
  fatherGuess = parseInt(prompt("Guess (1-10 ): "));

  if (fatherGuess === marioChapter) {
    alert("Yes!you found your son");
    break; 
  } else if (fatherGuess < marioChapter) {
    alert("Your son is in the higher numbered compartment");
  } else {
    alert("Your son is in the lower numbered compartment");
  }
}


