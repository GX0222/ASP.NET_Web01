$(document).ready(function() {
	selectEventOnClick();
});
function selectEventOnClick(){
	$(".selectEvent").off("click").on("click", function(e) {
	// $("#AAAA").on("click",".selectEvent", function(e) {
	
		e.preventDefault();

		var eventID = $(this).data("event");
		console.log("Event ID:", eventID);
		$.ajax({
			type: "POST",
			url: "/SelectEvent",
			contentType: "application/json",
			data: JSON.stringify({
				eventID: eventID,
				track: "false"
			}),
			success: function(res) {
				window.location.href = "/Event";
			},
			error: function(error) {
				console.error("Error:", error);
			}
		});

	});

	$(".selectEventForTrack").off("click").on("click", function(e) {
	// $("#AAAA").on("click",".selectEventForTrack", function(e) {
		e.preventDefault();

		var eventID = $(this).data("event");
		$.ajax({
			type: "POST",
			url: "/SelectEvent",
			contentType: "application/json",
			data: JSON.stringify({
				eventID: eventID,
				track: "true"
			}),
			success: function(res) {
				window.location.href = "/Event";
			},
			error: function(error) {
				console.error("Error:", error);
			}
		});
	});
}