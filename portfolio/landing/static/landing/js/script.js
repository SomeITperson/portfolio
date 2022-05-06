// Плавный скролл

let button1 = document.getElementById('first');
button1.addEventListener('click', smoothscroll_1);

let button2 = document.getElementById('second');
button2.addEventListener('click', smoothscroll_2);

let button3 = document.getElementById('third');
button3.addEventListener('click', smoothscroll_3);

let pagePos1 = document.getElementById('menu-1');
let pagePos2 = document.getElementById('menu-2');
let pagePos3 = document.getElementById('about');

function smoothscroll_1() {
    pagePos1.scrollIntoView({ behavior: 'smooth' });
}

function smoothscroll_2() {
    pagePos2.scrollIntoView({ behavior: 'smooth' });
}

function smoothscroll_3() {
    pagePos3.scrollIntoView({ behavior: 'smooth' });
}

// Конец

// Открытие карточек
// Конец