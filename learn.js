    // 儲存正確答案
    let answerKey = {};

    // 初始化 30 行號
    function initLineNumbers() {
        let lines = "";
        for (let i = 1; i <= 30; i++) {
            lines += i + "<br>";
        }
        document.getElementById('ln-zh').innerHTML = lines;
        document.getElementById('ln-en').innerHTML = lines;
    }

    // 產生測驗
    function generateTest() {
        const zhLines = document.getElementById('input-zh').value.split('\n');
        const enLines = document.getElementById('input-en').value.split('\n');
        const display = document.getElementById('test-display');
        
        display.innerHTML = ""; 
        answerKey = {}; 

        let hasContent = false;

        for (let i = 0; i < 30; i++) {
            const zh = zhLines[i] ? zhLines[i].trim() : "";
            const en = enLines[i] ? enLines[i].trim() : "";

            if (zh !== "" && en !== "") {
                hasContent = true;
                answerKey[`line-${i}`] = en.toLowerCase();

                const row = document.createElement('div');
                row.className = 'test-item';
                row.innerHTML = `
                    <span class="line-num-test">${i+1}</span>
                    <span class="test-zh">${zh}</span>
                    <div class="input-wrapper">
                        <input type="text" class="test-input" id="line-${i}" placeholder="Type English..." oninput="checkAnswer(this)">
                        <span class="feedback-icon" id="icon-line-${i}"></span>
                    </div>
                `;
                display.appendChild(row);
            }
        }

        if (!hasContent) {
            display.innerHTML = '<div class="placeholder-text">請確保左側「中文」與「英文」框都有內容喔！</div>';
        }
    }

    // 即時檢查答案
    function checkAnswer(inputElement) {
        const userAnswer = inputElement.value.trim().toLowerCase();
        const correctAnswer = answerKey[inputElement.id];
        const icon = document.getElementById('icon-' + inputElement.id);

        if (userAnswer === correctAnswer) {
            inputElement.classList.add('correct');
            icon.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
            icon.style.color = "#27ae60";
        } else {
            inputElement.classList.remove('correct');
            icon.innerHTML = "";
        }
    }

    window.onload = initLineNumbers;