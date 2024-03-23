document.addEventListener("DOMContentLoaded", function () {
    const tasks = document.querySelectorAll('.task');
    const pointsProgress = document.getElementById('pointsProgress');
    const currentPointsDisplay = document.getElementById('currentPoints');

    let totalPoints = 0;
    let currentLevel = 1;

    // 模擬從後端取得分數和目前積分的函式，實際情況請替換成您的後端 API
    function fetchTaskPoints(taskId) {
        // 這裡假設有一個後端 API，返回任務對應的分數
        // 實際情況請替換成您的後端 API 請求邏輯
        const scores = {
            1: 10,
            2: 20,
            3: 15,
        };

        return scores[taskId] || 0; // 如果找不到分數，默認為 0
    }

    function fetchCurrentPoints() {
        // 模擬從後端取得目前積分的過程
        // 實際情況請替換成您的後端 API 請求邏輯
        return 50; // 這裡假設目前積分是50
    }

    // 初始化每個任務的分數
    tasks.forEach(task => {
        const taskId = task.getAttribute('data-taskid');
        const taskPoints = fetchTaskPoints(taskId);
        task.setAttribute('data-points', taskPoints);
    });

    // 初始化目前積分
    totalPoints = fetchCurrentPoints();
    updatePoints(totalPoints);

    tasks.forEach(task => {
        const taskId = task.getAttribute('data-taskid');

        task.addEventListener('click', function () {
            this.classList.toggle('completed');

            const points = fetchTaskPoints(taskId);

            if (this.classList.contains('completed')) {
                totalPoints += points;
            } else {
                totalPoints -= points;
            }

            updatePoints(totalPoints);
        });
    });

    function updatePoints(points) {
        currentPointsDisplay.textContent = points;
        pointsProgress.value = points;
    }
});
