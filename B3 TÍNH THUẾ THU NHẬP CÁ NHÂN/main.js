const hoTen = prompt("Nhập họ tên:");
const tongThuNhap = Number(prompt("Nhập tổng thu nhập năm (triệu đồng):"));
const soNguoiPhuThuoc = Number(prompt("Nhập số người phụ thuộc:"));

let thuNhapChiuThue = tongThuNhap - 4 - soNguoiPhuThuoc * 1.6;

if (thuNhapChiuThue < 0) {
    thuNhapChiuThue = 0;
}
let thue = 0;

if (thuNhapChiuThue <= 60) {
    thue = thuNhapChiuThue * 5 / 100;
}
else if (thuNhapChiuThue <= 120) {
    thue = thuNhapChiuThue * 10 / 100;
}
else if (thuNhapChiuThue <= 210) {
    thue = thuNhapChiuThue * 15 / 100;
}
else if (thuNhapChiuThue <= 384) {
    thue = thuNhapChiuThue * 20 / 100;
}
else if (thuNhapChiuThue <= 624) {
    thue = thuNhapChiuThue * 25 / 100;
}
else if (thuNhapChiuThue <= 960) {
    thue = thuNhapChiuThue * 30 / 100;
}
else {
    thue = thuNhapChiuThue * 35 / 100;
}
console.log(document.getElementById("ketQua"));
const ketQua = document.getElementById("ketQua");

ketQua.innerHTML = `
    <h2>KẾT QUẢ TÍNH THUẾ</h2>
    <p>Họ tên: ${hoTen}</p>
    <p>Tổng thu nhập năm: ${tongThuNhap} triệu đồng</p>
    <p>Số người phụ thuộc: ${soNguoiPhuThuoc}</p>
    <p>Thu nhập chịu thuế: ${thuNhapChiuThue} triệu đồng</p>
    <h3>Thuế thu nhập cá nhân: ${thue} triệu đồng</h3>
`;
