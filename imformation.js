document.addEventListener("DOMContentLoaded", function() {
    // 建立觀察器
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // 如果物件進入畫面 (isIntersecting 為 true)
            if (entry.isIntersecting) {
                entry.target.classList.add("active"); // 加上 active class 觸發動畫
            }
        });
    }, {
        threshold: 0.15 // 當物件有 15% 出現在畫面上時就觸發
    });

    // 找出所有帶有 .reveal class 的物件並開始觀察
    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach(el => observer.observe(el));
});