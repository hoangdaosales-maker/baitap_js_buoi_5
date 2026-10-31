const ten = prompt("Nhập tên khách hàng:");
const soKw = Number(prompt("Nhập số kW điện tiêu thụ:"));
let tienDien = 0;
let chiTiet = "";

if (soKw <= 50) {
    tienDien = soKw * 500;
    chiTiet = `${soKw} kW × 500đ = ${tienDien}đ`;
}
else if (soKw <= 100) {
    tienDien = 50 * 500 + (soKw - 50) * 650;
    chiTiet = `
        50 kW đầu × 500đ = 25.000đ<br>
        ${soKw - 50} kW tiếp × 650đ = ${(soKw - 50) * 650}đ
    `;
}
else if (soKw <= 200) {
    tienDien = 50 * 500 + 50 * 650 + (soKw - 100) * 850;
    chiTiet = `
        50 kW đầu × 500đ = 25.000đ<br>
        50 kW tiếp × 650đ = 32.500đ<br>
        ${soKw - 100} kW tiếp × 850đ = ${(soKw - 100) * 850}đ
    `;
}
else if (soKw <= 350) {
    tienDien = 50 * 500 + 50 * 650 + 100 * 850
        + (soKw - 200) * 1100;

    chiTiet = `
        50 kW đầu × 500đ = 25.000đ<br>
        50 kW tiếp × 650đ = 32.500đ<br>
        100 kW tiếp × 850đ = 85.000đ<br>
        ${soKw - 200} kW tiếp × 1.100đ = ${(soKw - 200) * 1100}đ
    `;
}
else {
    tienDien = 50 * 500 + 50 * 650 + 100 * 850
        + 150 * 1100 + (soKw - 350) * 1300;

    chiTiet = `
        50 kW đầu × 500đ = 25.000đ<br>
        50 kW tiếp × 650đ = 32.500đ<br>
        100 kW tiếp × 850đ = 85.000đ<br>
        150 kW tiếp × 1.100đ = 165.000đ<br>
        ${soKw - 350} kW còn lại × 1.300đ = ${(soKw - 350) * 1300}đ
    `;
}
document.getElementById("ketQua").innerHTML = `
    <h2>KẾT QUẢ TÍNH TIỀN ĐIỆN</h2>
    <p>Tên khách hàng: ${ten}</p>
    <p>Số điện tiêu thụ: ${soKw} kW</p>

    <h3>Chi tiết tính tiền:</h3>
    <p>${chiTiet}</p>

    <h3>Tổng tiền điện: ${tienDien.toLocaleString("vi-VN")}đ</h3>
`;