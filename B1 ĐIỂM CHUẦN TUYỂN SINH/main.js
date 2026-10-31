const diemChuan = Number(prompt("Nhập điểm chuẩn:"));

const diem1 = Number(prompt("Nhập điểm môn 1:"));
const diem2 = Number(prompt("Nhập điểm môn 2:"));
const diem3 = Number(prompt("Nhập điểm môn 3:"));

const khuVuc = prompt("Nhập khu vực A, B, C hoặc X:");

const doiTuong = Number(prompt("Nhập đối tượng 1, 2, 3 hoặc 0:"));

let diemKhuVuc = 0;
switch (khuVuc) {
  case "A":
    diemKhuVuc =2;
    break;

  case "B":
    diemKhuVuc =1
    break;

  case "C":
    diemKhuVuc =0.5
    break;

  default:
    diemKhuVuc = 0;
    break;
}
let diemDoiTuong = 0;

switch (doiTuong) {
    case 1:
        diemDoiTuong = 2.5;
        break;

    case 2:
        diemDoiTuong = 1.5;
        break;

    case 3:
        diemDoiTuong = 1;
        break;

    default:
        diemDoiTuong = 0;
        break;
}

const tongDiem = diem1 + diem2 + diem3
    + diemKhuVuc + diemDoiTuong;

console.log("Tổng điểm:", tongDiem);

const ketQua = document.getElementById("ketQua");

if (
    tongDiem >= diemChuan &&
    diem1 > 0 &&
    diem2 > 0 &&
    diem3 > 0
) {
    ketQua.innerHTML = `
        <h2 style="color: green;">THÍ SINH TRÚNG TUYỂN</h2>
        <p>Điểm môn 1: ${diem1}</p>
        <p>Điểm môn 2: ${diem2}</p>
        <p>Điểm môn 3: ${diem3}</p>
        <p>Điểm ưu tiên khu vực: ${diemKhuVuc}</p>
        <p>Điểm ưu tiên đối tượng: ${diemDoiTuong}</p>
        <h3>Tổng điểm: ${tongDiem}</h3>
        <p>Điểm chuẩn: ${diemChuan}</p>
    `;
}
else {
    ketQua.innerHTML = `
        <h2 style="color: red;">THÍ SINH KHÔNG TRÚNG TUYỂN</h2>
        <p>Điểm môn 1: ${diem1}</p>
        <p>Điểm môn 2: ${diem2}</p>
        <p>Điểm môn 3: ${diem3}</p>
        <p>Điểm ưu tiên khu vực: ${diemKhuVuc}</p>
        <p>Điểm ưu tiên đối tượng: ${diemDoiTuong}</p>
        <h3>Tổng điểm: ${tongDiem}</h3>
        <p>Điểm chuẩn: ${diemChuan}</p>
    `;
}




