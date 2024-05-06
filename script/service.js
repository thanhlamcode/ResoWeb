const branches = document.querySelectorAll(".service .service__right .brand");
const services = document.querySelectorAll(".service .service__left ul li");

services.forEach((item, index) => {
    item.addEventListener("click", () => {
        // Loại bỏ lớp "focus" khỏi tất cả các dịch vụ
        services.forEach(otherItem => {
            otherItem.classList.remove("focus");
        });
        // Thêm lớp "focus" cho dịch vụ được nhấp vào
        item.classList.add("focus");

        // Loại bỏ lớp "no_display" khỏi nhánh tương ứng
        branches.forEach(branch => {
            branch.classList.add("no_display");
        });
        branches[index].classList.remove("no_display");
    });
});
