// offcanvas
$(document).ready(function() {
    $('#myOffcanvas').on('click', function() {
        if (!$('#offcanvasExample').hasClass('show')) {
            $('.fixedDiv').animate({
                right : '350px'
            }, 300);
            $('.fixedDiv').animate({
                right : '0'
            }, 100);
        }
    });
});

$(".classIcon, .cityDiv").on("click",function(){
//	console.log($(this).prop("id"));
//	alert($(this).prop("id"));
	sessionStorage.setItem("myDataClassId", $(this).prop("id"));
})