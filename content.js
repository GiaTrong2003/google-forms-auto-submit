// Tự động chọn đáp án trên Google Forms
function autoFillAnswers() {
  console.log("Đang tự động chọn đáp án...");

  // Lấy tất cả các câu hỏi
  const questions = document.querySelectorAll(".Qr7Oae");
  if (questions.length === 0) {
    console.log("Không tìm thấy câu hỏi nào.");
    return;
  }

  console.log(questions);

  questions.forEach((question) => {
    // Giả sử câu hỏi nằm trong thẻ <h3> hoặc <div class="question-content">
    const questionText = question.querySelector(".M7eMe"); // Chọn thẻ chứa câu hỏi
    if (questionText) {
      console.log("Câu hỏi: ", questionText.textContent.trim()); // Lấy và in ra nội dung câu hỏi
    }

    // Query tất cả các lựa chọn (radio, checkbox, và textarea)
    const radioOptions = question.querySelectorAll('[role="radio"]');
    const checkboxOptions = question.querySelectorAll('[role="checkbox"]');
    const textareas = question.querySelectorAll("textarea");

    // Xử lý radio
    if (radioOptions.length > 0) {
      let random = Math.floor(Math.random() * (radioOptions.length - 1));
      radioOptions[random].click(); // Chọn đáp án đầu tiên
    }

    // Xử lý checkbox
    if (checkboxOptions.length > 0) {
      let random = Math.floor(Math.random() * (checkboxOptions.length - 1));
      checkboxOptions.forEach((checkbox, index) => {
        // Chọn ngẫu nhiên các checkbox
        if (parseInt(random) === parseInt(index)) {
          checkbox.click();
        }
      }); // Chọn tất cả các checkbox
    }

    // Xử lý textarea
    if (textareas.length > 0) {
      textareas.forEach((textarea) => {
        textarea.value = "Tôi ko có ý tưởng nào cả"; // Điền văn bản tự động
        textarea.dispatchEvent(new Event("input", { bubbles: true })); // Kích hoạt sự kiện input
      });
    }
  });

  console.log("Đã chọn xong các đáp án.");
}

// Tự động nộp bài
function autoSubmitForm() {
  console.log("Đang tự động nộp bài...");
  const submitButton = document.querySelector(".uArJ5e.UQuaGc.Y5sE8d");
  if (submitButton) {
    submitButton.click();
    console.log("Đã nộp bài.");
  } else {
    console.log("Không tìm thấy nút nộp bài.");
  }
}

// Thực hiện cả hai chức năng
function autoCompleteAndSubmit() {
  autoFillAnswers();
  setTimeout(() => {
    // autoSubmitForm();
  }, 1000); // Đợi 1 giây để chọn xong đáp án trước khi nộp bài
}

// Chạy khi extension được kích hoạt
autoCompleteAndSubmit();
