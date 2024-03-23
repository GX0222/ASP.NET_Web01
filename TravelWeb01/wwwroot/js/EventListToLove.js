function checkLoginAndSubmit(eventId) {
            // 使用AJAX檢查登入狀態
            const xhr = new XMLHttpRequest();
            xhr.open('GET', '/checkLoginStatus', true);

            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        // 登入狀態正常，提交表單
                        document.getElementById('eventIdInput').value = eventId;
                        document.getElementById('loveForm').submit();
                    } else {
                        // 未登入，導向登入頁面
                        window.location.href = 'login.jsp';
                    }
                }
            };

            xhr.send();
        }

document.addEventListener('DOMContentLoaded', function() {
    const favoriteButtons = document.querySelectorAll('.favoriteButton');

    favoriteButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();

            // 取得事件相關的資訊，例如事件ID等
//            const eventId = /* 在這裡取得事件ID，你可能需要使用event.getAttribute或其他方法 */;

            // 發送AJAX請求
            const xhr = new XMLHttpRequest();
            xhr.open('POST', '/BigProject_SB/src/main/webapp/WEB-INF/views/Member/Love.jsp', true);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            
            // 在send中傳遞需要的資料，這裡以eventId為例
            xhr.send(`eventId=${eventId}`);

            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    // 處理收藏成功後的回應
                    console.log('事件已成功收藏！');
                }
            };
        });
    });
});
