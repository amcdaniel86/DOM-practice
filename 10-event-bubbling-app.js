// Event Bubbling

// document.querySelector('.card-title').addEventListener('click', function(){
//   console.log('card-title');
// });

// document.querySelector('.card-content').addEventListener('click', function(){
//   console.log('card content');
// });

// document.querySelector('.card').addEventListener('click', function(){
//   console.log('card');
// });

// document.querySelector('.col').addEventListener('click', function(){
//   console.log('col');
// });

// EVENT DELEGATION

// const delItem = document.querySelector('.delete-item');

// delItem.addEventListener('click', deleteItem);

document.body.addEventListener('click', deleteItem);

function deleteItem(e){
  // if(e.target.parentElement.className === 'delete-item secondary-content'){ // tells JS to choose the class with font awesome, not the i, but the a
  //   console.log('delete Item');
  // }

  if(e.target.parentElement.classList.contains('delete-item')){ // tells JS to choose the class with font awesome, not the i, but the a
    console.log('delete item');
    e.target.parentElement.parentElement.remove();
  }
}