
//Confirms the user's reservation with a pop-up.
function confirmation() {
    confirm("Please select OK to finalize your reservation.");
}

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
//event handler
$('.seat').click(showForm);
});

