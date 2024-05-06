// Lấy element header-nav
const headerNav = document.querySelector('.header__nav');

// Thêm một sự kiện cho cuộn trang
window.addEventListener('scroll', function() {
    // Kiểm tra vị trí cuộn của trang
    if (window.scrollY > 0) {
        // Nếu người dùng đã cuộn xuống, thêm lớp "scrolling" vào header-nav
        headerNav.classList.add('scrolling');
    } else {
        // Nếu người dùng cuộn lên đầu trang, xóa lớp "scrolling" khỏi header-nav
        headerNav.classList.remove('scrolling');
    }
});
