window.onload = function(){
	$("#enviados").submit(function(e) {
		var jose = $("#jose").val().toUpperCase();
		var primo = $("#primo").val().toUpperCase();
		var lourenco = $("#lourenco").val().toUpperCase();
		localStorage.setItem('jose', jose);
		localStorage.setItem('primo', primo);
		localStorage.setItem('lourenco', lourenco);
	});
}