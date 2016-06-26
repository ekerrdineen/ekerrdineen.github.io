function askQuestions() {

	var firstName = prompt('What is your first name?');
	var lastName = prompt('What is your last name?');
	var fullName = firstName + ' ' + lastName;
	console.log(fullName);

	var age = prompt('How old are you?');
	age = parseInt (age);

	if (age >= 18) {
		console.log('User is an adult');
	} else if (age >= 13) {
		console.log('User is a teenager');
	} else if (age <= 12) {
		console.log('User is a child');
	}


	if (firstName.toLowerCase() === 'general' && lastName.toLowerCase() !== 'assembly') {
		alert('Greetings General!');

	}

}
	 

// When the page has loaded
$(function() {

	$('img').on('click', askQuestions);

	//Hide all the stuff
	$('h3').next().hide();

	// When the user clicks on an h3
	$('h3').on('click', function() {

	// Toggle the section after the clicked h3.
	$(this).next().slideToggle();

	});

});


