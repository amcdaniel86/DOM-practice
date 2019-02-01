// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//   console.log('Hello World');

//   e.preventDefault();
// });

// EVENT LISTENERS ARE VERY POWERFUL

document.querySelector('.clear-tasks').addEventListener('mouseover', onClick);
function onClick(e){
  // console.log('Clicked');

  let val;

  val = e;

  // Event target element
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;

  // Event type
  val = e.type;

  // Timestamp
  val = e.timeStamp;
 
  // e.target.innerText = 'Hello';

  // Coords relative to the window
  val = e.clientY;
  val = e.clientX;

  // Coords relative to the element
  val = e.offsetY;
  val = e.offsetX;

  console.log(val);
}