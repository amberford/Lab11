function confirmation() {
    confirm("Please select OK to finalize your reservation.");
}

$(document).ready(function(){
    $("button").click(function(){
        alert("You have reserved a seat for " + $("#name").val()) + ".";
    });
});

