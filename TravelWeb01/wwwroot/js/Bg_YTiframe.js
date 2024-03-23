//背景影片重複撥放=====
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtubeIframe', {
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}
// 靜音
function onPlayerReady(event) {
    event.target.mute();
}
// 如果影片結束，重新播放
function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.ENDED) {
        player.seekTo(0);
        player.playVideo();
    }
}