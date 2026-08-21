# Hướng dẫn triển khai Web App Lịch sử Đảng

Dự án này là một Single Page Application (SPA) hoàn toàn tĩnh (chỉ gồm HTML, CSS, JavaScript). Không cần cài đặt server hay database, bạn có thể chạy trực tiếp trên máy tính hoặc đưa lên mạng (hosting) rất dễ dàng.

## 1. Chạy trực tiếp (Local/Offline)
Chỉ cần mở thư mục `dist` và click đúp vào file `index.html`. Trình duyệt sẽ mở ứng dụng và bạn có thể sử dụng đầy đủ 3 tính năng: Tổng quan (Timeline), Câu hỏi ôn tập (Quiz), và Decision Game.

## 2. Đưa lên mạng miễn phí để có URL vĩnh viễn (Deploy)

Bạn có thể đưa toàn bộ nội dung của thư mục `dist` này lên các dịch vụ lưu trữ miễn phí để có đường link gửi cho sinh viên. 

### Cách 1: Sử dụng Netlify (Dễ nhất, không cần code)
Đây là cách khuyên dùng vì cực kỳ đơn giản:
1. Mở trình duyệt và truy cập: [https://app.netlify.com/drop](https://app.netlify.com/drop)
2. Kéo và thả **toàn bộ thư mục `dist`** (hoặc chọn thư mục chứa các file web này) vào vòng tròn đứt nét trên trang web.
3. Chờ vài giây, Netlify sẽ tạo cho bạn một đường link dạng `https://ten-ngau-nhien.netlify.app`.
4. *(Tùy chọn)* Bạn có thể tạo tài khoản Netlify để đổi tên miền (Domain Settings -> Custom domains) thành dạng dễ nhớ hơn như `https://lichsudang-1975-1986.netlify.app`.

### Cách 2: Sử dụng GitHub Pages (Cần tài khoản GitHub)
Nếu bạn đã quen với GitHub, đây là lựa chọn tuyệt vời:
1. Đăng nhập vào GitHub và tạo một Repository mới (ví dụ: `lichsudang`).
2. Upload toàn bộ các file trong thư mục `dist` này (gồm `index.html`, thư mục `css`, thư mục `js`) lên Repository đó.
3. Vào mục **Settings** của Repository -> Chọn **Pages** ở menu bên trái.
4. Ở phần **Source**, chọn nhánh `main` (hoặc `master`) và lưu lại.
5. GitHub sẽ cấp cho bạn một đường link dạng `https://ten-tai-khoan.github.io/lichsudang`.

---
*Lưu ý: Mọi chỉnh sửa nội dung bài học, câu hỏi hay trò chơi sau này đều có thể thực hiện bằng cách mở file `js/data.js` để sửa chữ, sau đó upload đè lại file đó lên host.*
