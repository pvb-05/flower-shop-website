# Flower Shop Website 🌸

> Đồ án Sinh viên Khoa Công nghệ Thông tin  
> Website bán hoa trực tuyến, giúp khách hàng xem sản phẩm, đặt hàng, thanh toán và quản lý lịch sử đơn hàng.

Trang web này được xây dựng bằng Node.js, Express và EJS, kết hợp SQLite để lưu trữ dữ liệu và tích hợp thanh toán PayOS cho các giao dịch online.

---

## 1. Tổng quan dự án

Flower Shop Website là một ứng dụng web thương mại điện tử dành cho việc bán các loại hoa, giỏ hoa, và combo quà tặng. Dự án hỗ trợ các chức năng cơ bản như:

- Hiển thị danh sách sản phẩm theo danh mục
- Xem chi tiết từng sản phẩm
- Đăng ký / đăng nhập người dùng
- Thêm sản phẩm vào giỏ hàng và thanh toán
- Tích hợp thanh toán COD hoặc PayOS
- Xem lịch sử đơn hàng
- Trang giới thiệu, liên hệ, gallery và tin tức

---

## 2. Công nghệ sử dụng

- Node.js
- Express.js
- EJS (Embedded JavaScript Templates)
- SQLite3
- JavaScript
- PayOS SDK
- bcrypt (mã hóa mật khẩu)
- nodemailer (gửi email)
- dotenv (quản lý biến môi trường)

---

## 3. Tính năng chính

### Giao diện người dùng
- Trang chủ giới thiệu thương hiệu và sản phẩm nổi bật
- Trang gallery hiển thị các sản phẩm theo danh mục
- Trang chi tiết sản phẩm
- Trang liên hệ và giới thiệu cửa hàng

### Người dùng
- Đăng ký tài khoản
- Đăng nhập/đăng xuất
- Xem lịch sử đơn hàng
- Đặt hàng theo hình thức COD hoặc PayOS

### Hệ thống thanh toán
- Tạo đơn hàng với thông tin khách hàng
- Tích hợp thanh toán PayOS
- Xử lý redirect sau khi thanh toán thành công hoặc hủy giao dịch

### Dữ liệu
- Sử dụng SQLite lưu trữ dữ liệu người dùng, sản phẩm, đơn hàng và chi tiết đơn hàng
- File cơ sở dữ liệu: `source/caynhalacanh.db`

---

## 4. Cấu trúc thư mục dự án

```text
flower-shop-website/
├── docs/
│   └── baocaoWeb.docx
├── slides/
├── source/
│   ├── bin/
│   │   └── www
│   ├── public/
│   │   └── (assets hình ảnh, CSS, JS)
│   ├── routes/
│   │   ├── contact.js
│   │   ├── index.js
│   │   └── orders.js
│   ├── views/
│   │   ├── about.ejs
│   │   ├── cancel.ejs
│   │   ├── checkout.ejs
│   │   ├── contact.ejs
│   │   ├── gallery.ejs
│   │   ├── history.ejs
│   │   ├── index.ejs
│   │   ├── login.ejs
│   │   ├── product.ejs
│   │   ├── register.ejs
│   │   ├── success.ejs
│   │   └── ...
│   ├── .env
│   ├── .gitignore
│   ├── app.js
│   ├── config.js
│   ├── db.js
│   ├── caynhalacanh.db
│   ├── package.json
│   ├── package-lock.json
│   ├── user.txt
│   └── ...
├── README.md
└── ...
```

---

## 5. Hướng dẫn cài đặt và chạy trên Windows

### Bước 1: Cài đặt môi trường

Yêu cầu:
- Node.js v18+ hoặc phiên bản tương thích
- npm (đi kèm với Node.js)
- Git (nếu clone từ GitHub)

### Bước 2: Clone dự án

```bash
git clone https://github.com/pvb-05/flower-shop-website.git
cd flower-shop-website
```

### Bước 3: Cài đặt thư viện

Vào thư mục `source` rồi cài đặt dependencies:

```bash
cd source
npm install
```

### Bước 4: Cấu hình môi trường

File `.env` và `config.js` đã có sẵn trong thư mục `source`, bạn có thể chỉnh sửa nếu cần:

- `EMAIL`: email dùng gửi thông báo
- `PASSWORD`: mật khẩu ứng dụng email
- `PAYOS_CLIENT_ID`, `PAYOS_API_KEY`, `PAYOS_CHECKSUM_KEY`: thông tin tích hợp thanh toán PayOS

### Bước 5: Chạy ứng dụng

Chế độ phát triển:

```bash
npm run dev
```

Chế độ production:

```bash
npm start
```

### Bước 6: Mở trên trình duyệt

```text
http://localhost:3000
```

---

## 6. Cấu hình thanh toán PayOS

Để sử dụng chức năng thanh toán PayOS, bạn cần cập nhật các thông tin sau trong file `source/config.js`:

```js
PAYOS_CLIENT_ID: "...",
PAYOS_API_KEY: "...",
PAYOS_CHECKSUM_KEY: "...",
RETURN_URL: "http://localhost:3000/orders/success",
CANCEL_URL: "http://localhost:3000/orders/cancel"
```

Nếu bạn triển khai lên môi trường thực tế, hãy đổi URL về domain tương ứng.

---

## 7. Chạy ứng dụng

Đây là dự án Express có cấu trúc MVC đơn giản theo kiểu route + view + database:

- `routes/`: định nghĩa các endpoint
- `views/`: giao diện EJS
- `public/`: file tĩnh (CSS/JS/images)
- `db.js`: kết nối SQLite
- `app.js`: khởi tạo ứng dụng Express

---

## 8. Một số lưu ý

- Dự án đang chạy trực tiếp trong thư mục `source/`, vì vậy bạn cần vào đúng thư mục đó trước khi chạy lệnh `npm install` và `npm start`.
- Database SQLite nằm trong `source/caynhalacanh.db`.
- Nếu xảy ra lỗi liên quan đến cổng 3000 đang được sử dụng, hãy đổi cổng hoặc đóng tiến trình đang chạy.

---

## 9. Liên hệ

- Tác giả: Bac Phan
- Email: phanvanbac15112005@gmail.com

Nếu bạn muốn, tôi có thể tiếp tục hỗ trợ bạn:
- viết thêm phần giới thiệu chuyên nghiệp hơn
- tạo sơ đồ chức năng cho README
- tối ưu mô tả kỹ thuật cho dự án này theo chuẩn GitHub
- chuẩn bị README tiếng Anh hoặc tiếng Việt cho báo cáo đồ án
