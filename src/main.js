// Инициализация иконок Lucide
lucide.createIcons();

// Обработка скролла для хедера
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.padding = '10px 0';
        header.style.background = 'rgba(255, 249, 245, 0.95)';
    } else {
        header.style.padding = '0';
        header.style.background = 'rgba(255, 249, 245, 0.8)';
    }
});

// Плавная навигация (уже поддерживается CSS, но добавим для JS контроля)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Бургер-меню (базовая логика)
const burger = document.getElementById('burger-menu');
burger.addEventListener('click', () => {
    alert('Мобильное меню будет реализовано при добавлении адаптивных стилей в следующих этапах.');
});