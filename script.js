// Tạo số ngẫu nhiên 0 hoặc 1
const randomNumber = Math.floor(Math.random() * 2);

function guessNumber() {
    const userGuess = parseInt(document.getElementById("userInput").value);
    const resultElement = document.getElementById("result");

    // Kiểm tra nhập hợp lệ
    if (isNaN(userGuess) || (userGuess !== 0 && userGuess !== 1)) {
        resultElement.textContent = "❌ Vui lòng nhập số 0 hoặc 1.";
        resultElement.style.color = "red";
        return;
    }

    // So sánh với số ngẫu nhiên
    if (userGuess === randomNumber) {
        resultElement.textContent = "✅ Chính xác! Bạn đã đoán đúng!";
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = "❌ Sai rồi, hãy thử lại!";
        resultElement.style.color = "red";
    }
}
