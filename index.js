
var submitButton = document.getElementById("submitButton");
var idea = document.getElementById("idea");
var description = document.getElementById("description");

function submit(){

    var ideaRef = firebase.database().ref("Ideas/");
    var ideaVal = idea.value;
    var descriptionVal = description.value;
    var upvotes = 0;
    var downvotes = 0;

    firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User

    var uid = user.uid;
    ideaRef.push().set({
        idea: ideaVal,
        description: descriptionVal,
        upvotes: upvotes,
        downvotes: downvotes,
        uid: uid
    });
  } else {
      ideaRef.push().set({
          idea: ideaVal,
          description: descriptionVal,
          upvotes: upvotes,
          downvotes: downvotes,
          uid: null
      });
  }
});

    idea.value = "";
    description.value = "";
}


var autoExpand = function (field) {

	// Reset field height
	field.style.height = 'inherit';

	// Get the computed styles for the element
	var computed = window.getComputedStyle(field);

	// Calculate the height
	var height = parseInt(computed.getPropertyValue('border-top-width'), 10)
	             + parseInt(computed.getPropertyValue('padding-top'), 10)
	             + field.scrollHeight
	             + parseInt(computed.getPropertyValue('padding-bottom'), 10)
	             + parseInt(computed.getPropertyValue('border-bottom-width'), 10);

	field.style.height = height + 'px';

};

document.addEventListener('input', function (event) {
	if (event.target.tagName.toLowerCase() !== 'textarea') return;
	autoExpand(event.target);
}, false);
