// Single Element Selectors - by id or class, first one appears, it'll grab

//document.getElementById()

// console.log(document.getElementById('task-title'));

// // Get things from the element
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

// const taskTitle = document.getElementById('task-title'); // much more efficient way to do it. set a variable to equal what we want to work with and replace the original code with variable for cleaner and more efficient code.

// // Change styling - usually done for events, not main style of a webpage, DYNAMIC FUNCTIONALITY
// taskTitle.style.background = '#333'; // .style allows css changes on an element
// taskTitle.style.color = '#fff';
// taskTitle.style.padding = '5px';
// // taskTitle.style.display = 'none';

// // Change content - change text with JS
// taskTitle.textContent = 'Task List';
// taskTitle.innerText = 'My Tasks'; // seems no different than above
// // if we want to insert full on html, we can with below code
// taskTitle.innerHTML = '<span style="color:red">Task List</span>';

// DOCUMENT.QUERYSELECTOR
// document.querySelector() - newer and better
// not necessary to select by id, works like jquery

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5')); // will grab first h5 on the page.

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';

document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'green';
document.querySelector('li:nth-child(4)').textContent = 'Hello World';
document.querySelector('li:nth-child(odd)').style.background = '#ccc'; // odd selector only because querySelector is a SINGLE element selector

document.querySelector('li:nth-child(even)').style.background = '#f4f4f4'; // only first even











// Multiple Element Selectors - grabs all elements with that class, and returns an HTML collection or a node list depending on the selector used

