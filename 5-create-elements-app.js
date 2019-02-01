// Construct elements from scratch using vanilla JavaScript

// Create element
const li = document.createElement('li'); // ok to use const here because we are modifying them, adding things to them but we are NOT reassigning them, you won't see later on that li = ... 

// Add class
li.className = 'collection-item';

// Add id
li.id =  'new-item';

// Add attribute
li.setAttribute('title', 'New Item');

// Create text node and append
li.appendChild(document.createTextNode('Hello World'));

// Create new link element
const link = document.createElement('a');
// Add classes
link.className = 'delete-item secondary-content';
// Add icon html
link.innerHTML = '<i class="fa fa-remove"></i>'; // add icon on page with JS

// Append link into li
li.appendChild(link);

// Append li as child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);
