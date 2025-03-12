//chuyen trang
document.addEventListener("DOMContentLoaded", function () {
    const loginPage = document.querySelector(".wrapper"); 
    const quizPage = document.querySelector(".quiz-container"); 
    const loginButton = document.getElementById("login_btn"); 
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    
    quizPage.style.display = "none";

   
    loginButton.addEventListener("click", function () {
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

     
        if (username === "" || password === "") {
            alert("Vui lòng nhập đầy đủ thông tin!");
            return;
        }

       
        loginPage.style.display = "none"; 
        quizPage.style.display = "block"; 
    });

});


// Danh sách câu hỏi
const quizData = [
    // Nhóm 1: Lựa chọn đúng/sai
    { question: "Nước sôi ở 100°C.", options: ["Đúng", "Sai"], correct: 0 },
    { question: "Trái đất có hai mặt trăng.", options: ["Đúng", "Sai"], correct: 1 },
    { question: "Python là một ngôn ngữ lập trình.", options: ["Đúng", "Sai"], correct: 0 },
    { question: "Mặt trời quay quanh Trái đất.", options: ["Đúng", "Sai"], correct: 1 },
    { question: "Kim loại dẫn điện tốt hơn nhựa.", options: ["Đúng", "Sai"], correct: 0 },
    { question: "Nước biển có vị ngọt.", options: ["Đúng", "Sai"], correct: 1 },
    { question: "Việt Nam thuộc châu Á.", options: ["Đúng", "Sai"], correct: 0 },
    { question: "Hình tam giác có 4 cạnh.", options: ["Đúng", "Sai"], correct: 1 },
    { question: "Máy tính có thể kết nối Internet.", options: ["Đúng", "Sai"], correct: 0 },
    { question: "Cá voi là động vật có xương sống.", options: ["Đúng", "Sai"], correct: 0 },

    // Nhóm 2: Chọn 1 đáp án đúng
    { question: "Thủ đô của Nhật Bản là gì?", options: ["Bắc Kinh", "Seoul", "Tokyo", "Bangkok"], correct: 2 },
    { question: "Công thức hóa học của nước là gì?", options: ["CO2", "H2O", "O2", "NaCl"], correct: 1 },
    { question: "Ai là tác giả của 'Truyện Kiều'?", options: ["Nguyễn Du", "Nguyễn Trãi", "Hồ Xuân Hương", "Tố Hữu"], correct: 0 },
    { question: "Tháng nào có ít ngày nhất?", options: ["Tháng 2", "Tháng 4", "Tháng 6", "Tháng 11"], correct: 0 },
    { question: "Nguyên tố nào chiếm phần lớn không khí?", options: ["Oxy", "Nitơ", "Carbon", "Hydro"], correct: 1 },
    { question: "Năm 1945, Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập ở đâu?", options: ["Hà Nội", "Huế", "Sài Gòn", "Hải Phòng"], correct: 0 },
    { question: "Loài động vật nào là động vật có vú?", options: ["Cá sấu", "Chim cánh cụt", "Cá voi", "Ếch"], correct: 2 },
    { question: "Thành phần chính của muối ăn là gì?", options: ["NaCl", "KCl", "MgCl2", "CaCO3"], correct: 0 },
    { question: "Nguyên tử nhỏ nhất trong bảng tuần hoàn là gì?", options: ["Helium", "Hydrogen", "Oxygen", "Carbon"], correct: 1 },
    { question: "Ai là nhà bác học nổi tiếng với thuyết tương đối?", options: ["Newton", "Einstein", "Galileo", "Tesla"], correct: 1 },

    // Nhóm 3: Chọn nhiều đáp án
    { question: "Những hành tinh nào thuộc Hệ Mặt Trời?", options: ["Sao Kim", "Sao Hỏa", "Sao Mộc", "Sao Thiên Vương"], correct: [0, 1, 2, 3] },
    { question: "Những ngôn ngữ lập trình phổ biến là gì?", options: ["Python", "Java", "HTML", "C++"], correct: [0, 1, 3] },
    { question: "Những vật thể nào có thể dẫn điện?", options: ["Đồng", "Nhôm", "Nhựa", "Sắt"], correct: [0, 1, 3] },
    { question: "Những đại dương nào bao quanh Trái Đất?", options: ["Thái Bình Dương", "Đại Tây Dương", "Ấn Độ Dương", "Biển Đông"], correct: [0, 1, 2] },
    { question: "Những hành động nào giúp bảo vệ môi trường?", options: ["Tái chế", "Tiết kiệm nước", "Chặt phá rừng", "Trồng cây"], correct: [0, 1, 3] },
    { question: "Các nguồn năng lượng tái tạo nào đang được sử dụng?", options: ["Năng lượng mặt trời", "Năng lượng gió", "Năng lượng than", "Năng lượng thủy triều"], correct: [0, 1, 3] },
    { question: "Những yếu tố nào quyết định thời tiết?", options: ["Nhiệt độ", "Độ ẩm", "Áp suất không khí", "Tốc độ Internet"], correct: [0, 1, 2] },
    { question: "Những loại thực phẩm nào chứa nhiều vitamin C?", options: ["Cam", "Chanh", "Bánh mì", "Ổi"], correct: [0, 1, 3] },
    { question: "Những quốc gia nào nằm ở châu Âu?", options: ["Pháp", "Mỹ", "Đức", "Nhật Bản"], correct: [0, 2] },
    { question: "Những hiện tượng nào là kết quả của biến đổi khí hậu?", options: ["Nóng lên toàn cầu", "Tăng mực nước biển", "Tăng sản lượng cây trồng", "Mưa axit"], correct: [0, 1, 3] },

    // Nhóm 4: Tự luận
    { question: "Hãy mô tả ngắn gọn về hiện tượng nóng lên toàn cầu.", options: [], correct: [] },
    { question: "Tại sao chúng ta cần bảo vệ rừng?", options: [], correct: [] },
    { question: "Bạn hiểu thế nào về trí tuệ nhân tạo?", options: [], correct: [] },
    { question: "Viết một đoạn ngắn về người hùng mà bạn ngưỡng mộ.", options: [], correct: [] },
    { question: "Mô tả các bước của quy trình xử lý nước thải.", options: [], correct: [] },
    { question: "Việt Nam đã đạt được những thành tựu khoa học nào trong những năm gần đây?", options: [], correct: [] },
    { question: "Bạn nghĩ gì về vai trò của giáo dục trong xã hội?", options: [], correct: [] },
    { question: "Hãy trình bày suy nghĩ của bạn về ô nhiễm không khí.", options: [], correct: [] },
    { question: "Lợi ích và tác hại của Internet đối với cuộc sống hiện đại?", options: [], correct: [] },
    { question: "Bạn có ý tưởng gì để cải thiện hệ thống giao thông ở thành phố?", options: [], correct: [] }
];


// Phần tử DOM
const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('results');
const submitButton = document.getElementById('submit-btn');
const restartButton = document.getElementById('restart-btn');
const scoreElement = document.getElementById('score');
const maxScoreElement = document.getElementById('max-score');
const feedbackElement = document.getElementById('feedback');
const currentQuestionElement = document.getElementById('current-question');
const totalQuestionsElement = document.getElementById('total-questions');
const progressBar = document.getElementById('progress');

let currentQuestion = 0;
let score = 0;
let answers = [];

totalQuestionsElement.textContent = quizData.length;

function showQuestion(questionIndex) {
    if (questionIndex >= quizData.length) {
        submitQuiz();
        return;
    }

    const question = quizData[questionIndex];
    currentQuestionElement.textContent = questionIndex + 1;
    
    const progressPercentage = ((questionIndex) / quizData.length) * 100;
    progressBar.style.width = `${progressPercentage}%`;

    let questionHTML = `
        <div class="question-container">
            <div class="question">${questionIndex + 1}. ${question.question}</div>
            <div class="options">
    `;

    if (questionIndex >= 30 && questionIndex <= 39) { 
        questionHTML += `
            <div class="option">
                <textarea id="text-answer-${questionIndex}" class="text-answer" placeholder="Nhập câu trả lời của bạn...">${answers[questionIndex] || ''}</textarea>
            </div>
        `;
    } else {
        question.options.forEach((option, index) => {
            questionHTML += `
                <div class="option">
                    <label class="option-label">
                        <input type="radio" name="q${questionIndex}" value="${index}" ${answers[questionIndex] === index ? 'checked' : ''}>
                        ${option}
                    </label>
                </div>
            `;
        });
    }

    questionHTML += `</div></div>`;

    quizContainer.innerHTML = questionHTML;

    submitButton.textContent = questionIndex === quizData.length - 1 ? "Hoàn thành" : "Câu tiếp theo";
}

function nextQuestion() {
    const question = quizData[currentQuestion];
    
    if (currentQuestion >= 30 && currentQuestion <= 39) { 
        const textAnswerElement = document.getElementById(`text-answer-${currentQuestion}`);
        if (!textAnswerElement) {
            alert("Lỗi: Không tìm thấy ô nhập!");
            return;
        }
        const textAnswer = textAnswerElement.value.trim();
        if (!textAnswer) {
            alert("Vui lòng nhập câu trả lời!");
            return;
        }
        answers[currentQuestion] = textAnswer;
    } else {
        const selectedOption = document.querySelector(`input[name="q${currentQuestion}"]:checked`);
        if (!selectedOption) {
            alert("Vui lòng chọn một đáp án!");
            return;
        }
        answers[currentQuestion] = parseInt(selectedOption.value);
    }
    
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        showQuestion(currentQuestion);
    } else {
        submitQuiz();
    }
}

function submitQuiz() {
    quizContainer.style.display = "none";
    submitButton.style.display = "none";
    
    score = 0;
    answers.forEach((answer, index) => {
        if (index < 30 && answer === quizData[index].correct) {
            score++;
        }
    });
    
    scoreElement.textContent = score;
    maxScoreElement.textContent = quizData.length;
    
    const percentage = (score / quizData.length) * 100;
    let feedbackMessage = "";
    
    if (percentage === 100) {
        feedbackMessage = "Xuất sắc! Bạn đã trả lời đúng tất cả các câu hỏi!";
        resultContainer.className = "correct-answer";
    } else if (percentage >= 80) {
        feedbackMessage = "Rất tốt! Bạn đã nắm vững kiến thức!";
        resultContainer.className = "correct-answer";
    } else if (percentage >= 60) {
        feedbackMessage = "Khá tốt! Bạn đã có những hiểu biết cơ bản.";
        resultContainer.className = "correct-answer";
    } else if (percentage >= 40) {
        feedbackMessage = "Bạn cần ôn tập thêm một chút.";
        resultContainer.className = "wrong-answer";
    } else {
        feedbackMessage = "Bạn cần ôn tập lại nhiều hơn.";
        resultContainer.className = "wrong-answer";
    }
    
    feedbackElement.textContent = feedbackMessage;
    resultContainer.style.display = "block";
    progressBar.style.width = "100%";
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    answers = [];
    resultContainer.style.display = "none";
    quizContainer.style.display = "block";
    submitButton.style.display = "block";
    progressBar.style.width = "0%";
    showQuestion(currentQuestion);
}

submitButton.addEventListener('click', nextQuestion);
restartButton.addEventListener('click', restartQuiz);

showQuestion(currentQuestion);
