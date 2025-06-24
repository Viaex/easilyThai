document.addEventListener('DOMContentLoaded', function () {
    const topBar = document.getElementById('topBar');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 10) {
            topBar.classList.add('scrolled');
        } else {
            topBar.classList.remove('scrolled');
        }
    });
});
