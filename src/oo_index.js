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
  const priority = form.querySelector('#priority');

  //grab the text fiel value
  const newCommentTag = document.createElement('li');
  //priority sort
    const priorityTaskArray = []
    const priorityValues = {
              'low' : 0,
              'medium' : 1,
              'high' : 2 }

   priorityTaskArray.push(
        {
          priority : pro,
          task : item
        }
      );

    priorityTaskArray.sort(function(a, b) {
       return a - b;
  if (priority.value === 'high'){
    newCommentTag.style = "color: red";
    pro_array[0]
  } else if (priority.value === 'medium'){
    newCommentTag.style = "color: green";
  } else if (priority.value === 'low'){
    newCommentTag.style = "color: yellow";
  }
)//end of sorting function



  const newComment = text.value;
  newCommentTag.innerText = newComment;
  taskListToWhichBabiesGetApended.appendChild(newCommentTag);
  //create an element which will appear on HTML to render text
  const newDeleteTag = document.createElement('button');
  newDeleteTag.innerText = 'x';
  newCommentTag.appendChild(newDeleteTag)

  //reset the form text field
    event.target.reset();
//delete event listener
  newCommentTag.addEventListener('click', function (event) {
      newCommentTag.remove();
    })
//reset the form text field
  event.target.reset();
  })//end of listening event for form tasks

}) // end of document event listener for loading
