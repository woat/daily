document.addEventListener("DOMContentLoaded", function(event) {
  // Initialize DOM injection points for grades, average grade, and letter grade.
  const DOMgrades = document.getElementById('grades');
  const DOMavg = document.getElementById('avg');
  const DOMletter = document.getElementById('letter');

  // Recursive helper function with validation to help avoid blank/invalid inputs.inputs.
  function getPrompt(message) {
    // Send prompt for user to input grade.
    const grade = prompt(message);
    // grade !== "" -> Checks to see if grade is left blank.
    // !!parseInt(grade) -> Is used to make a boolean out of a falsy/truthy value.
    if (grade !== "" && !!parseInt(grade)) return grade;
    // Call it self with a new message to make sure the user understands what to input.
    return getPrompt(`Please enter valid INTEGER for grade ${i + 1}`)
  }

  // An initializer function to ask for the grades upon site load.
  function callGrades() {
    // A variable to just hold a certain size required in spec.
    const size = 4;
    // Initialize empty array for grade values to be pushed in.
    const grades = [];

    // For loop using the size variable as the end case.
    for (i = 0; i < size; i++) {
      // Get a grade...
      const grade = getPrompt(`Please enter grade ${i + 1}`)
      // Push the grade to the grades array.
      grades.push(grade);
    }

    // Return the grade array.
    return grades;
  };

  // Function to calculate the average.
  function calculateAverage(array) {
    // Due to the nature of weak typing in JavaScript, I must first convert every item in the array to a number.
    const intArray = array.map(item => parseInt(item));
    // Using reduce I can add all the numbers, then using the length of the intArray I can find the average.
    return intArray.reduce((total, grade) => total + grade, 0) / intArray.length;
  }

  // A function to get the letter grade from a numerical input.
  function getLetterGrade(grade) {
    // Initialize switch input...
    switch (true) {
      // Apply proper cases to return the correct letter amount.
      // Using switch provides an advantage vs if/else statements because you can omit checking for a number "in between" ( x > grade < y ).
      // Thus, allowing better brevity.
      case (grade > 89):
        return 'A';
      case (grade > 79):
        return 'B';
      case (grade > 69):
        return 'C';
      case (grade > 59):
        return 'D'
      // If no cases are a match, then I can assume that it is a failing grade.
      default:
        return 'F';
    }
  }

  // A function to display the average.
  function displayAverage(average) {
    // Using the DOMavg variable initialized above, I can target in the innerHTML.
    DOMavg.innerHTML = average;
  }

  // A function to display each grades individually.
  // Takes an array...
  function displayGrades(grades) {
    // Create an iterator for display purposes.
    let gradeCount = 1
    // Iterate the grades array using the native .map() function...
    grades.map(grade => {
      // Using the DOMgrades variable intialized above, I can target in the innerHTML.
      // Insert a small template...
      // Here I use the gradeCount variable to help display the order of which grade is which.
      DOMgrades.innerHTML += `
      <div class="level-item has-text-centered">
        <div>
          <p class="title">${grade}</p>
          <p class="heading is-size-5">Grade ${gradeCount}</p>
        </div>
      </div>
      `
      // Iterate the gradeCount.
      gradeCount += 1;
    });
  }

  // Just like the previous display functions...
  function displayLetter(letter) {
    DOMletter.innerHTML = letter;
  }

  // These functions are now declared and called to start the application.
  // Start the prompts and assign them to a variable called gradesArray.
  const gradesArray = callGrades();
  // Get the average score by passing the gradesArray into the calculateAverage function.
  const averageScore = calculateAverage(gradesArray);
  // Get the letterGrade by passing the averageScore to the getLetterGrade function.
  const letterGrade = getLetterGrade(averageScore);

  // Use the display functions to render the DOM.
  displayAverage(averageScore);
  displayGrades(gradesArray);
  displayLetter(letterGrade);
});
