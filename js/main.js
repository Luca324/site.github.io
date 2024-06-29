// при вводе R, r и E значение выводится на схему
const inputListener = function (id) {
    $('#' + id).on('input', function () {
        if ($('#' + id).val() === '') { // поле ввода значения пустое, то на схеме отображается просто R1 (например)
            $('#' + id + '_shema_value').text('');
        } else {
            const units = id[0] === 'E' ? 'В' : 'Ом'; // выбор единиц измрения по первому символу id: ЭДС - вольт, сопротивление - Ом
            $('#' + id + '_shema_value').text(' = ' + $('#' + id).val() + ' ' + units); // на схеме отображается R1 = 2 Ом (например)
        }
    });
}


const myInnerHTML = function (id, isvariable = false, variable = NaN) {
    if (isvariable === false) {
        $('.' + id + '_formula').html($('#' + id).val())
    } else {
        $('.' + id + '_formula').html(variable)
    }
}


$(document).ready(function () {
    $('footer').html('<p><span class="top">© Мосолова Т.А., 2024. All rights reserved.        <a href="https://github.com/Luca324/site.github.io">            <img src="img/github-mark-white.svg"><span>        github</span>        </a>    </span>    </p><p> Этот сайт создан в учебных целях и предназначен для свободного некоммерческого использования. Вы можете        использовать код, дизайн и контент сайта при условии сохранения авторства. Коммерческое использование сайта без        разрешения владельца запрещено.</p>')
    counter1 = counter2 = counter3 = counter4 = 1; // направление ЭДС по умолчанию вправо в В


    $('.menubutton').on('click', function () { // схлопывание меню
        $('nav').toggleClass('collapsed');
        $('.menubutton').toggleClass('collapsed');
    });


    const inputIds = ['R1', 'R2', 'R3', 'R4', 'E1', 'E2', 'E3', 'E4', 'r1', 'r2', 'r3', 'r4']
    for (let i = 0; i < inputIds.length; i++) {
        inputListener(inputIds[i]); // присваиваем каждому полю формы inputListener на ввод, чтобы его значение выводилось на схему. при этом на страницах с 3 и 2 ветвями ошибок из-за несуществующих полей формы (R4, E4...) не возникает
    }

    $('.arrow').on('click', function () { // если бы была стрелочная функция, она бы не создавала свой собственный контекст, и this ссылался бы на глобальный объект window
        console.log('arrow' + $(this).attr('id')[5])
        switch ($(this).attr('id')[5]) { //  если клик на arrow1, тогда $(this).attr('id')[5]) будет '1', т.к. пятый символ - '1'
            case '1':
                counter1 = (counter1 == 1)?-1:1;
                break;
            case '2':
                counter2 = (counter2 == 1)?-1:1;
                break;
            case '3':
                counter3 = (counter3 == 1)?-1:1;
                break;
            case '4':
                counter4 = (counter3 == 1)?-1:1;
                break;

        }
        // console.log('...', counter1, counter2, counter3)

        $('#' + $(this).attr('id')).toggleClass('left'); // поворот стрелки, на которую нажали
    })


    $('form').on('reset', function () {
        $(this)[0].reset();// Очистить поля формы
        $('.calculation').addClass('hidden') // Очистить расчеты
        $('[id$="_shema_value"]').text(''); // Очистить значения на схеме. мы берем все элементы с id, оканчивающимся на "_shema_value"
        counter1 = counter2 = counter3 = counter4 = 1; // все эдс принимают положительные значения
        $('.arrow').removeClass('left'); // все стрелочки вправо
    });

})