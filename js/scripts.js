$(document).ready(function () {
    $("form#formOne").submit(function (event) {
        event.preventDefault();
        var groceryList = [];
        $("input[name='item']").each(function () {
            groceryList.push(" " + $(this).val().toUpperCase());
        });
        console.log(groceryList);
				$("#formOne").empty().prepend("Your list below:");
				$("#output").show();
				$("#output li").each(function(item) {
					$(this).prepend(groceryList.sort()[item]);
				});
				
    });
});