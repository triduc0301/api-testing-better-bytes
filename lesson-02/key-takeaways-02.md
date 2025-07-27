### Response header
![alt text](imgs/response-header.png)

### Response body
- Là nơi chứa dữ liệu thực tế mà server trả về
- Có định dạng JSON, XML, HTML, văn bản hoặc hệ nhị phân,...
- Có tác dụng:
    - Chứa thông tin client yêu cầu
    - Truyền tải dữ liệu có cấu trúc
    - Hiển thị thông tin cho người dùng
    - Hỗ trợ giao tiếp bất đồng bộ giữa các hệ thống
    - Trạng thái xử lý của request
- Các loại response body phổ biển:

![alt text](imgs/response-body.png)

**Test response body**
1. Kiểm tra cấu trúc
    - Đúng định dạng, đúng schema, các trường bắt buộc đầy đủ
2. Kiểm tra nội dung
    - Dữ liệu trả về chính xác, đúng định dạng
3. Kiểm tra xử lý lỗi
    - Error msg, code rõ ràng
4. Kiểm tra hiệu năng
    - Kích thước resp, thời gian phản hồi

## Authentication & Authorization
### Authentication: 
- Là quá trình xác mình danh tính của người dùng hoặc hệ thống
### Authorization
- Xác định quyền truy cập (phân quyền) của người dùng sau khi xác minh danh tính

-> Sử dụng Authentication và Authorization để bảo vệ tài nguyên hệ thống, đảm bảo chỉ người dùng hợp lệ mới truy cập được dữ liệu hoặc chức năng phù hợp với vai trò của họ

### Term
- Session, cookie: Là một phương pháp xác thực trạng thái (stateful authentication), trong đó server duy trì trạng thái đăng nhập của người dùng bằng session còn client lưu session ID dưới dạng cookie
    - Session: Lưu ở trên server
    - Cookie: Lưu ở máy tính của client

- Base64 encode/decode: Mã hóa/giải mã chuỗi theo Base64
- Token: Là một chuỗi ngẫu nhiên dùng để xác thực người dùng hoặc ứng dụng
    - Các dạng phổ biến:
        1. Session token
        2. Bearer Token
        3. JWT

## Kiến thức bổ sung 
**Basic auth**
- Basic auth là phương pháp xác thực cơ bản dựa trên username và password.
Đối với các API endpoint có yêu cầu basic auth, ta cần gửi kèm 1 header với nội dung:
    - Key: Authorization
    - Value: Basic <base64(username:password)>
- Ví dụ: với username=phong, password=xinchao, ta sẽ thực hiện như sau:
    - Bước 1: Nối chuỗi lại theo định dạng: phong:xinchao
    - Bước 2: Mã hoá chuỗi theo base64 (sử dụng website base64encode.org):
    cGhvbmc6eGluY2hhbw==
    - Bước 3: Sử dụng trong header: Authorization: Basic cGhvbmc6eGluY2hhbw==

- Giải mã jwt token
    - JWT token là loại token rất phổ biến, thường được sử dụng trong xác thực. 
    - JWT token gồm có ba phần: header.body.signature và cách nhau bởi dấu chấm.
    - Để giải mã xem các phần này chứa gì, chúng ta thường sử dụng website jwt.io