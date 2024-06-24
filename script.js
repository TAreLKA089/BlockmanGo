document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');
    const h1 = document.getElementById('shiftBack');
    const closeBtn = document.getElementById('close-btn');
    const openBtn = document.getElementById('open-btn');

    closeBtn.addEventListener('click', function () {
        sidebar.classList.add('closed');
        content.classList.add('shifted');
        h1.classList.add('shifted1');
        h1.classList.remove('shifted2');
        openBtn.classList.add('show');
    });

    openBtn.addEventListener('click', function () {
        sidebar.classList.remove('closed');
        content.classList.remove('shifted');
        h1.classList.remove('shifted1');
        h1.classList.add('shifted2');
        openBtn.classList.remove('show');
    });
});
