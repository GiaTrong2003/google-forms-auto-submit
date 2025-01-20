# google-forms-auto-submit

## Hướng dẫn sử dụng

1. **Cài đặt Extension**:
   - Tải mã nguồn của dự án về máy.
   - Mở trình duyệt Chrome và truy cập vào `chrome://extensions/`.
   - Bật chế độ `Developer mode` (Chế độ nhà phát triển) ở góc trên bên phải.
   - Nhấn vào nút `Load unpacked` (Tiện ích đã giải nén) và chọn thư mục chứa mã nguồn của dự án.

2. **Sử dụng Extension**:
   - Mở Google Forms mà bạn muốn tự động điền và nộp.
   - Nhấn vào biểu tượng của extension trên thanh công cụ của trình duyệt.
   - Nhập câu trả lời vào ô `textarea` và nhấn nút `Auto Complete`.

3. **Cấu hình**:
   - Bạn có thể chỉnh sửa mã nguồn trong các file sau để thay đổi hành vi của extension:
     - [popup.js](google-forms-auto-submit/popup.js)
     - [content.js](google-forms-auto-submit/content.js)

4. **Chạy thử nghiệm**:
   - Đảm bảo rằng bạn đã mở Google Forms và extension đã được bật.
   - Nhấn nút `Auto Complete` để tự động điền và nộp form.

## Lưu ý
- Extension này chỉ hoạt động trên Google Forms.
- Hãy đảm bảo rằng bạn đã cấp quyền cần thiết cho extension để có thể thao tác trên trang Google