const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector()

// Clear input
taskInput.value = '';

// form.addEventListener('submit', runEvent);

// Keydown
// taskInput.addEventListener('keydown', runEvent);
// // Keyup
// taskInput.addEventListener('keyup', runEvent);
// Keypress
// taskInput.addEventListener('keypress', runEvent);
//Focus
// taskInput.addEventListener('focus', runEvent); // click inside input area
// Blur
// taskInput.addEventListener('blur', runEvent); // once in input, click outside input,trigger
// // Cut
// taskInput.addEventListener('cut', runEvent); // CTRL + x on keyboard
// // Paste
// taskInput.addEventListener('paste', runEvent); // CTRL + V on keyboard
// Input
// taskInput.addEventListener('input', runEvent);
// Change
select.addEventListener('change', runEvent);

function runEvent(e){
  console.log(`EVENT TYPE: ${e.type}`);

  // console.log(e.target.value); // target is the element the event happens on

  // heading.innerText = e.target.value; // like data binding in Angular
  

  // Get input value
  // console.log(taskInput.value);

  // e.preventDefault(); //  usually with a submit you want to prevent it from redirecting
}