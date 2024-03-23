$("#wtSelect").on("click", ".countyLink", function () {
    var selectedCounty = $(this).data("county");
    $.ajax({
        type: "POST",
        url: "/getTownByCounty",
        contentType: "application/json",
        data: JSON.stringify({ CountyName: selectedCounty }),
        success: function (towns) {
            $(".townRow").remove();
            // console.log(towns);
            var townDiv = $("#townDivID > div.simplebar-wrapper > div.simplebar-mask > div > div > div > div");

            var currentWidth = $("#wtSelect").width();
            var targetWidth = 600;

            if (currentWidth !== targetWidth) {
                $("#townDivID").animate({ width: "300px" }, 500);
                $("#wtSelect").animate({ width: targetWidth + "px" }, 500, function () {
                    $.each(towns, function (index, town) {
                        var newTownRow = $("<div class='townRow'><div class='townLink' data-county='" + selectedCounty + "' data-town='" + town + "'>" + town + "</div></div>");
                        townDiv.append(newTownRow);
                        newTownRow.hide().delay(200 * index).fadeIn(300);
                    });
                });
                $("#countyDivID").css("border-right", "2px solid rgba(150, 115, 80, 1)");

            } else {
                $.each(towns, function (index, town) {
                    var newTownRow = $("<div class='townRow'><div class='townLink' data-county='" + selectedCounty + "' data-town='" + town + "'>" + town + "</div></div>");
                    townDiv.append(newTownRow);
                    newTownRow.hide().delay(200 * index).fadeIn(300);
                });
            }
        },
        error: function (error) {
            console.error("Error:", error);
        }
    });
});




$("#wtSelect").on("click", ".townLink", function () {
    var selectedTown = $(this).data("town");
    var selectedCounty = $(this).data("county");

    $.ajax({
        type: "POST",
        url: "/getWeatherByTown",
        contentType: "application/json",
        data: JSON.stringify({ CountyName: selectedCounty, TownName: selectedTown }),
        success: function (res) {
            console.log("Response from backend:", res.CountyName);
            console.log(res.TownName);
            console.log(res.AirTemperature);
            console.log(res.Weather);
            var CTTDiv = $("#weatherTool > div > div.weatherColSm.col-12 > div");
            CTTDiv.html(res.CountyName + " " + res.TownName + "<br>" + res.AirTemperature + "℃");
            var weatherDiv = $("#weatherTool > div > div.weatherCol.col.col-xxl-4 > div");
            weatherDiv.text(res.Weather);
            var CTDiv = $("#weatherTool > div > div:nth-child(1) > div");
            CTDiv.html(res.CountyName + "<br>" + res.TownName);
            var tempDiv = $("#weatherTool > div > div:nth-child(2) > div");
            tempDiv.text(res.AirTemperature + "℃");
            
            $("#townDivID").animate({ width: "0px" }, 500, function (){
                $(".townRow").remove();
            });
            $("#wtSelect").animate({ width: "300px" }, 500, function(){
                $("#countyDivID").css("border-right", "none");
            });
            $("#wtSelect").fadeOut(500);
            
        },
        error: function (error) {
            console.error("Error:", error);
        }
    });
});

$(document).ready(function() {
    $(".countyRow").each(function(index) {
        $(this).delay(200 * index).fadeIn(300);
    });
});

$("#weatherTool").on("click", function () {
    $("#wtSelect").fadeIn(500);
});

$("#wtClose").on("click", function () {
    if($("#wtSelect").width() > 300){
        $("#townDivID").animate({ width: "0px" }, 500, function (){
            $(".townRow").remove();
        });
        $("#wtSelect").animate({ width: "300px" }, 500, function(){
            $("#countyDivID").css("border-right", "none");
        });
        $("#wtSelect").fadeOut(500);
    }else{
        $("#wtSelect").fadeOut(500);  
    }
});

//停止主頁面滾動
// $("#wtSelect").on('mouseenter', function () {
//     $('body').css('overflow', 'hidden');
// });

// $("#wtSelect").on('mouseleave', function () {
//     $('body').css('overflow', 'auto');
// });
