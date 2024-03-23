$(document).ready(function () {
//	$("a.page-link").on("click",function (e) {
	$("#EventListShow").on("click",".page-link",function (e) {
		e.preventDefault();
//		console.log("here1");
		var pageNum = $(this).data("page");
//		$.ajax({
//			type: "GET",
//            url: "/ShowEventList",
////			url: "/GetEventClass",
//            data: { pageNum: pageNum },
//			success: function (res) {
//				$("#showEvents").html(res);
//			},
//			error: function (error) {
//				console.error("Error:", error);
//			}
//		});
//		console.log("------");
//		console.log($(this).text());
//		console.log($(this).prop("id"));
//		console.log("------");
		var pageid=  "#"+$(this).prop("id");
		var eventClassType
		var eventClassContent
		
		var element=$(".nav-link.active");
			//	console.log($(countyA).text());
		var activeClass;
	    element.each(function(){
//					console.log($(this).text());
//			console.log($(this).prop("id"));
			activeClass = "#"+$(this).prop("id");
			eventClassType = $(this).prop("id").substring(0,1);
			eventClassContent = $(this).prop("id").substring(1,2);
		})
		
		var dataToServer = {"eventClassType":eventClassType,"eventClassContent":eventClassContent, pageNum: pageNum};
	
	 $.ajax({
		type: 'Get',
        url: '/GetEventClass',  
//    	dataType:"JSON",
    	data:dataToServer,
        success: function(data) {
            $("#EventListShow").html(data);
			selectEventOnClick();
           	var element=$(".nav-link.active");
			//	console.log($(countyA).text());
		    element.each(function(){
//					console.log($(this).text());
				$(this).removeClass("active");
					
			})
			$(activeClass).toggleClass("active",true);
           	
           	$(".page-link").removeClass("selectedPage");
        	$(pageid).addClass("selectedPage");
        	$('html, body').scrollTop(0);

        },
        error: function(error) {
            console.error("Error:", error);
        }
    });
		
//        $(".page-link").removeClass("selectedPage");
//        $(this).addClass("selectedPage");
//        $('html, body').scrollTop(0);
        
//        var element=$(".nav-link.active");
//        element.each(function(){
//			console.log($(this).text());
//		})
	});
	
	
});