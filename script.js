document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');
    const closeBtn = document.getElementById('close-btn');
    const openBtn = document.getElementById('open-btn');

    closeBtn.addEventListener('click', function () {
        sidebar.classList.add('closed');
        content.classList.add('shifted');
        openBtn.classList.add('show');
    });

    openBtn.addEventListener('click', function () {
        sidebar.classList.remove('closed');
        content.classList.remove('shifted');
        openBtn.classList.remove('show');
    });
});
