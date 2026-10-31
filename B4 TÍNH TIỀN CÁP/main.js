const maKhachHang = document.getElementById("maKhachHang");
const loaiKhachHang = document.getElementById("loaiKhachHang");
const soKetNoi = document.getElementById("soKetNoi");
const soKenhCaoCap = document.getElementById("soKenhCaoCap");
const btnTinhTien = document.getElementById("btnTinhTien");
const ketQua = document.getElementById("ketQua");

const khuVucKetNoi = document.getElementById("khuVucKetNoi");

loaiKhachHang.addEventListener("change", function () {
    if (loaiKhachHang.value === "nhaDan") {
        khuVucKetNoi.style.display = "none";
    } else if (loaiKhachHang.value === "doanhNghiep") {
        khuVucKetNoi.style.display = "block";
    } else {
        khuVucKetNoi.style.display = "none";
    }
});
btnTinhTien.addEventListener("click", function () {
    const maKH = maKhachHang.value;
    const loaiKH = loaiKhachHang.value;
    const ketNoi = Number(soKetNoi.value);
    const kenhCaoCap = Number(soKenhCaoCap.value);

    console.log(maKH);
    console.log(loaiKH);
    console.log(ketNoi);
    console.log(kenhCaoCap);

    let phiXuLy = 0;
    let phiDichVu = 0;
    let phiKenh = 0;
    let tongTien = 0;

    if (loaiKH === "nhaDan") {
    phiXuLy = 4.5;
    phiDichVu = 20.5;
    phiKenh = kenhCaoCap * 7.5;
} else if (loaiKH === "doanhNghiep") {
    phiXuLy = 15;

    if (ketNoi <= 10) {
        phiDichVu = 75;
    } else {
        phiDichVu = 75 + (ketNoi - 10) * 5;
    }

    phiKenh = kenhCaoCap * 50;
}
    tongTien = phiXuLy + phiDichVu + phiKenh;

    ketQua.innerHTML = `
    <h3>HÓA ĐƠN TIỀN CÁP</h3>
    <p>Mã khách hàng: ${maKH}</p>
    <p>Loại khách hàng: ${loaiKH}</p>
    <p>Phí xử lý hóa đơn: $${phiXuLy}</p>
    <p>Phí dịch vụ cơ bản: $${phiDichVu}</p>
    <p>Phí kênh cao cấp: $${phiKenh}</p>
    <h3>Tổng tiền: $${tongTien}</h3>
`;

});

