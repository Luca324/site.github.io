// это написал чат гпт на основе МН3.js, я пока что не смогла проверить, т.к. не сделала отображение в html нормальное
document.addEventListener("DOMContentLoaded", function () {
  $('form').on('submit', function (event) {
    event.preventDefault();
    $('.calculation').removeClass('hidden');

    const E1 = $("#E1").val() * counter1; // ЭДС с учетом направления (-, если влево)
    const E2 = $("#E2").val() * counter2;

    R1 = +$("#R1").val(); // + переводит из строки в число. это нужно для дальнеших вычислений
    R2 = +$("#R2").val();
    r1 = +$("#r1").val();
    r2 = +$("#r2").val();

    // Параллелим
    Rpar1 = R2 + r2
    Rpar2 = R1 + r1
    let Rek1 = +(Rpar1 + R1).toFixed(2);
    let Rek2 = +(Rpar2 + R2).toFixed(2);

    // I
    let I1_l = Math.abs(+(E1 / (Rek1 + r1)).toFixed(2)); // _l значит количество штрихов
    let I2_ll = Math.abs(+(E2 / (Rek2 + r2)).toFixed(2));

    // U_ab
    let U_l = (+(I1_l) * +(Rpar1)).toFixed(2);
    let U_ll = (+(I2_ll) * +(Rpar2)).toFixed(2);

    // I
    let I2_l = +(U_l / (R2 + r2)).toFixed(2);
    let I1_ll = +(U_ll / (R1 + r1)).toFixed(2);

    const myInnerHTML = function (id, isvariable = false, variable = NaN) {
      if (isvariable === false) {
        $('.' + id + '_formula').html($('#' + id).val());
      } else {
        $('.' + id + '_formula').html(variable);
        $('.' + id).html(variable);
      }
    };

    ids = ['R1', 'R2', 'r1', 'r2', 'E1', 'E2'];
    ids2 = { 'Rpar1': Rpar1, 'Rpar2': Rpar2, 'Rek1': Rek1, 'Rek2': Rek2, 'E1': E1, 'E2': E2, 'U_l': U_l, 'U_ll': U_ll, 'I1_l': I1_l, 'I1_ll': I1_ll, 'I2_l': I2_l, 'I2_ll': I2_ll };
console.log(ids2)
    console.log(`'U_l': ${U_l}, 'U_ll': ${U_ll}`);
    for (i in ids) {
      myInnerHTML(ids[i]);
    }
    for (key in ids2) {
      myInnerHTML(key, true, ids2[key]);
    }

    // dir - direction
    const directions = function (counter1, counter2) {
      dir1_l = counter1;
      dir2_l = -1 * counter1;

      dir2_ll = counter2;
      dir1_ll = -1 * counter2;
    };
    directions(counter1, counter2);

    let str1 = `${I1_l * counter1 * dir1_l} + ${I1_ll * counter1 * dir1_ll} = ${((I1_l * counter1 * dir1_l) + (I1_ll * counter1 * dir1_ll)).toFixed(2)}`;
    let str2 = `${I2_l * counter2 * dir2_l} + ${I2_ll * counter2 * dir2_ll} = ${((I2_l * counter2 * dir2_l) + (I2_ll * counter2 * dir2_ll)).toFixed(2)}`;

    $('.current1').html(str1);
    $('.current2').html(str2);
  });
});
