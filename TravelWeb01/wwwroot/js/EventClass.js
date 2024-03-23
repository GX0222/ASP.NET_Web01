//function loadCategoryData(classId, element) {
//    $.ajax({
//        type: 'GET',
//        url: '/GetEventClass',  
//        data: { classId: classId },
//        success: function(data) {
////            console.log(data);
//        },
//        error: function(error) {
////            console.error(error);
//        }
//    });
//}

function loadCountyData(countyA){
//	var element=$(".nav-link.active");
//	 element.each(function(){
//		console.log($(this).text());
//		$(this).removeClass("active");
//		
//	 })
//	 console.log($(countyA).text());
//	 $(countyA).addClass("active");
				
				
//	console.log("countyA"+$(countyA).text());
//	console.log("countyA"+$(countyA).prop("id"));
	var myid = "#"+$(countyA).prop("id");
	var eventClassType = $(countyA).prop("id").substring(0,1);
	var eventClassContent = $(countyA).prop("id").substring(1,2);


//	console.log($(countyA).prop("id").substring(0,1));
//	console.log($(countyA).prop("id").substring(1,2));
//	var dataToServer = {"listCounty":$(countyA).text(),"eventClassType":eventClassType,"eventClassContent":eventClassContent};
	var dataToServer = {"eventClassType":eventClassType,"eventClassContent":eventClassContent};
	
	 $.ajax({
		type: 'Get',
        url: '/GetEventClass',  
//    	dataType:"JSON",
    	data:dataToServer,
        success: function(data) {
            $("#EventListShow").html(data);
            selectEventOnClick();
//           $(document).ready(function(){
			var element=$(".nav-link.active");
			//	console.log($(countyA).text());
			    element.each(function(){
//					console.log($(this).text());
					$(this).removeClass("active");
					
				})

				$(myid).toggleClass("active",true);

				

//				})
        },
        error: function(error) {
            console.error("Error:", error);
        }
    });
    
//        $(".page-link").removeClass("selectedPage");
////        console.log(this);
//        $(this).addClass("selectedPage");
////        console.log(this);
//        $('html, body').scrollTop(0);
}

$(document).ready(function() {
	if("myDataClassId" in sessionStorage){
		var dataclass = sessionStorage.getItem("myDataClassId");
//		console.log(dataclass);
		$("#"+dataclass).click();
//		sessionStorage.setItem("myDataClassId", "#hall");
		sessionStorage.removeItem('myDataClassId');
	}
	
})