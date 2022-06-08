let input = document.querySelector('input');
input.addEventListener('keyup', function(e) {
    // Выбираем р
    let p = document.querySelector('.res')
    p.textContent = e.target.value
});
 console.log(input.value);


// 1. приходит значение массива
//Учесть разные граничные значения
// если пустой массив?
// если без цифр
// если состоит из 100 млн элементов
// сумма двух минимальных элементов возвращает
// минимум 3 модульных теста на эту функцию
//проверить . чтобы по клику на кнопу сообщение будет выведено