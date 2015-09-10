var attendees = [];
var numOfSeats = 16;

$(document).ready(function(){
	//Displays the user's name after completethey complete the form. 
    $("button").click(function(){
        alert("You have reserved a seat for " + $("#name").val()) + ".";
    });

    var $form = $('form');

	//Displays the form once a seat has been selected. 
    function showForm()  {
	    $('.seat').addClass('inactive');
	    $(this).removeClass('inactive');
	    $form.fadeIn();
    }

    function submitForm(e) {
    	e.preventDefault();

    	var name = $('#name').val();
    	var email = $('#email').val();

    	user = {};
    	user.name = name;
    	user.email = email;

    	attendees.push(user);

    	console.log(attendees);

    	$form.trigger('reset');
    }

	//event handler
	$('.seat').click(showForm);
	$('#submit').click(submitForm);

});

//Confirms the user's reservation with a pop-up.
function confirmation() {
    confirm("Please select OK to finalize your reservation.");
}