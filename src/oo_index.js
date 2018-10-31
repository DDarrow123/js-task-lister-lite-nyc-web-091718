// Deliverables:
// - users should be able to type a task into the input field - check

// - users should be able to click some form of a submit button - check

// - the task string that the user provided should appear on the DOM after the submit button has been activated - check

document.addEventListener("DOMContentLoaded", () => {

const taskListToWhichBabiesGetApended = document.getElementById("tasks")
// grab the form
const form = document.getElementById('create-task-form');

//create an event listener for the form
form.addEventListener('submit', function (event) {
  //prevent the default post submission
  event.preventDefault();


  //grab the text field, (id: new-task-description)
  const text = form.querySelector('#new-task-description');
  //grab the text fiel value
  const newCommentTag = document.createElement('li');
  const newComment = text.value;
  newCommentTag.innerText = newComment;
  //create an element which will appear on HTML to render text
  const newDeleteTag = document.createElement('button');
  newDeleteTag.innerText = 'x';
  //give the newComment to the innerHTML of the element we just created

  //find what we want to append it to parent element (id: tasks)
  //append it
  newCommentTag.appendChild(newDeleteTag)
  taskListToWhichBabiesGetApended.appendChild(newCommentTag);
  //reset the form text field

  newCommentTag.addEventListener('click', function(event) {
    newCommentTag.remove()
}) //end of create new task
  event.target.reset();
  })//end of listening event for delete






}) // end of document event listener for loading
