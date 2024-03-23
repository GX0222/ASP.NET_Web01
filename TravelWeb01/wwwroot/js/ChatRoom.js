$(document).ready(function () {
    $("#ChatRoomCon").on("click", ".ChatRoom", function (e) {
        e.preventDefault();
        $(this).find(".azxc").removeClass("NewMesg");
        if (!$(e.target).closest('.Room').length) {
            var $room = $(this).find('.Room');

            $(".ChatRoom").not(this).each(function () {
                if ($(this).hasClass("CRSelected")) {
                    $(this).toggleClass("CRSelected");
                    $(this).find('.Room').animate({
                        width: '0px',
                        height: '0px',
                        left: '+=300px',
                        top: '+=400px'
                    }, 100, function () {
                        $(this).find('p').find(".simplebar-content").empty();
                        $(this).hide();
                    });
                }
            });

            if ($(this).hasClass("CRSelected")) {
                $(this).toggleClass("CRSelected");
                $room.animate({
                    width: '0px',
                    height: '0px',
                    left: '+=300px',
                    top: '+=400px'
                }, 100, function () {
                    $(this).find('p').find(".simplebar-content").empty();
                    $room.hide();
                });
            } else {
                $(this).toggleClass("CRSelected");
                $room.show().animate({
                    width: '300px',
                    height: '400px',
                    left: '-=300px',
                    top: '-=400px'
                }, 100);
            }
        }
    });

    $("#ChatRoomCon > .ChatRoom > .Room > .CRInput > p").keydown(function (event) {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            doSend($(this).closest(".CRInput").find("span"));
        }
        if (event.key === "Backspace" && $(this).text().trim() === "" && $(this).find("br").length < 2) {
            event.preventDefault();
        }
    });

    $("#ChatRoomCon").on("click", ".SendMesg", function (e) {
        doSend($(this));
    });

    function doSend(element) {
        var memID = $(element).data("memid");
        console.log("memID: " + memID);
        if(memID != 2){
            var mesg = $(element).closest(".CRInput").find("p").text();
            console.log("mesg: " + mesg);
            var mesgJSOn = {
                MemID: memID,
                Mesg: mesg
            };
            if (mesg != "") {
                sendMessage('/WSCommand/UserSendMesg', mesgJSOn);
                $(element).closest(".CRInput").find("p").text("");
            }
        }else {
            var confirmResult = confirm("請登入！");
            if (confirmResult) {
                window.location.href = "/login/login";

            } else {
                console.log("User clicked Cancel.");
            }
        }
    }


    var targets = document.querySelectorAll('p[contenteditable="true"]');

    targets.forEach(function (target) {
        var observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                if (mutation.type === 'attributes' || mutation.type === 'childList' || mutation.type === 'characterData') {
                    var thisP = mutation.target;
                    var Room = $(thisP).closest('.Room');
                    var ChatRoom = $(thisP).closest('.ChatRoom');
                    var CRText = Room.find(".CRText");
                    var CRInput = $(thisP).closest('.CRInput');
                    var contentHeight = CRInput.height() + 10;
                    if (ChatRoom.hasClass("CRSelected")) {
                        CRText.css('height', 'calc(100% - ' + contentHeight + 'px)');
                        // console.log("CH: " + contentHeight);
                        // console.log(CRInput.height());
                        // console.log("CRText高: " + CRText.css("height"));
                        // console.log("CRInput高: " + CRInput.css("height"));
                    }
                }
            });
        });

        var config = {
            attributes: true,
            childList: true,
            characterData: true,
            subtree: true
        };
        observer.observe(target, config);
    });
});
