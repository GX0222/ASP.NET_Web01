
const client = new StompJs.Client({
    brokerURL: 'ws://localhost:80/WebSocket',
    debug: function (str) {
        // console.log(str);
    },
    reconnectDelay: 5000,
    heartbeatIncoming: 4000,
    heartbeatOutgoing: 4000,
});

var ChatRoomCount = 0;

client.onConnect = function (frame) {
    console.log('WebSocket connected!');
    client.subscribe('/WSMessage/Subscribe', function (message) {
        var parsedBody = JSON.parse(message.body);
        var publicRoom = $("#PublicRoom");
        var ChatRoom = publicRoom.closest(".ChatRoom");
        if (!ChatRoom.hasClass("CRSelected")) {
            ChatRoom.addClass("NewMesg");
        }
        var memID = $("#ChatRoomCon > .ChatRoom > .Room > .CRInput").find("span").data("memid");
        console.log("REQ: " + memID);
        if (memID == parsedBody.sendMemID) {
            var memImg = $("<img class='resMemImg rounded-circle img-fluid'>").attr('src', "data:image/png;base64, " + parsedBody.sendMemImg);
            var mesgText = $("<div class='selfMesg'>").append(parsedBody.mesg);
            var mesgCon = $("<div class='selfBigBox'>").append(mesgText);
            publicRoom.find(".simplebar-content").append(mesgCon);
        } else {
            var memImg = $("<img class='resMemImg rounded-circle img-fluid'>").attr('src', "data:image/png;base64, " + parsedBody.sendMemImg);
            var memName = $("<div class='resMemName'>").text(parsedBody.sendMemName);
            var memInfo = $("<div class='resMemInfo'>").append(memImg).append(memName);
            var mesgText = $("<div class='resMesg'>").append(parsedBody.mesg);
            var mesgCon = $("<div class='resBigBox'>").append(memInfo).append(mesgText);
            publicRoom.find(".simplebar-content").append(mesgCon);
        }
        setTimeout(function () {
            var scrollElement = publicRoom.find('.simplebar-content-wrapper')[0];
            $(scrollElement).animate({
                scrollTop: scrollElement.scrollHeight
            }, 500);
        }, 10);
    });
};

$(document).ready(function () {
    $.ajax({
        url: "/UpdateChat",
        type: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify({}),
        success: function (mesgList) {
            var publicRoom = $("#PublicRoom");
            var ChatRoom = publicRoom.closest(".ChatRoom");
            var memID = $("#ChatRoomCon > .ChatRoom > .Room > .CRInput").find("span").data("memid");
            mesgList.forEach(function (message) {
                console.log(message);
                if (!ChatRoom.hasClass("CRSelected")) {
                    $("azxc").addClass("NewMesg");
                }
                console.log("REQ: " + memID);
                if (memID == message.sendMemID) {
                    var memImg = $("<img class='resMemImg rounded-circle img-fluid'>").attr('src', "data:image/png;base64, " + message.sendMemImg);
                    var mesgText = $("<div class='selfMesg'>").append(message.mesg);
                    var mesgCon = $("<div class='selfBigBox'>").append(mesgText);
                    publicRoom.find(".simplebar-content").append(mesgCon);
                } else {
                    var memImg = $("<img class='resMemImg rounded-circle img-fluid'>").attr('src', "data:image/png;base64, " + message.sendMemImg);
                    var memName = $("<div class='resMemName'>").text(message.sendMemName);
                    var memInfo = $("<div class='resMemInfo'>").append(memImg).append(memName);
                    var mesgText = $("<div class='resMesg'>").append(message.mesg);
                    var mesgCon = $("<div class='resBigBox'>").append(memInfo).append(mesgText);
                    publicRoom.find(".simplebar-content").append(mesgCon);
                }
            });
            setTimeout(function () {
                var scrollElement = publicRoom.find('.simplebar-content-wrapper');
                $(scrollElement).animate({
                    scrollTop: scrollElement.scrollHeight
                }, 0);
            }, 10);
            console.log('聊天訊息同步成功！');
        },        
        error: function (error) {
            console.error('Error retrieving MesgList data:', error);
        }
    });
});

client.onStompError = function (frame) {
    console.log('Broker reported error: ' + frame.headers['message']);
    console.log('Additional details: ' + frame.body);
};

client.activate();


function sendMessage(topic, message) {
    console.log(message);
    console.log(topic);
    client.publish({
        destination: topic,
        body: JSON.stringify(message)
    });
}

