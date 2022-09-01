const inputElement = document.getElementById('Insert text here')
//console.dir(inputElement)
const buttonElement = document.querySelector('#submit-button')
const ulElement = document.querySelector('#todo-list')

// //2. Add an event listener to the button that listens to click events. When the button is clicked, we need to:
// //- Create a new `li` element.
////- Set the text of the newly created `li` element to the text that the user has entered into the `input` element.
//// - Reset the text in the `input` field to an empty string.
// //- Add the new `li` element to the page, inside the `ul` element.

// After completing these steps, you should be able to add to your to-do list! Try it out!

//holding on to an element inside of a variable to do stuff to it 
// //create li element to go into a list (empty)
////get/access value from user input 
//add the <li> (with the text included) to HTML (in the <ul>)

buttonElement.addEventListener('click', function(evt){
  const li =  document.createElement('li')
  li.textContent = inputElement.value
  //console.log(buttonElement)
  document.querySelector('ul').appendChild(li)
  inputElement.value = ''
})







