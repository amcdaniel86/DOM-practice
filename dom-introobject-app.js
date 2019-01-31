let val;

val = document; // ENTIRE document
val = document.all; // gives us an collection, like an array you can access indexes
val = document.all[11]; //accessed index in document
val = document.all.length; // shows number of elements in the DOM
val = document.head; // shows the head tag
val = document.body; // shows the body tag
val = document.doctype; // shows doctype tag
val = document.domain; // local url address
val = document.URL // full local url address
val = document.characterSet; // shows characterset, like language
val = document.contentType; // text html usually

val = document.forms[0]; // displays form in console
val = document.forms[0].id; // displays/selects form's id in console
val = document.forms[0].method; //displays form method (get, post, delete) in console
val = document.forms[0].action; // displays form's action, where data sent in console

val = document.links;
val = document.links[0]; // access links
val = document.links[0].id; // access links id's
val = document.links[0].className; // access links classNames
val = document.links[0].classList[0]; // access links

val = document.images; //shows collection of images

val = document.scripts;
val = document.scripts[2].getAttribute('src');

let scripts = document.scripts;

// below translates the scripts elements into an array so forEach can loop through them.
let scriptsArray = Array.from(scripts);

// like below, you would get an error because forEach fxns are for arrays only.
// scripts.forEach(function(script) {
//   console.log(script);
// });

scriptsArray.forEach(function(script) { // scriptsArray declared above, forEach can loop
  console.log(script.getAttribute('src'));
});

console.log(val);