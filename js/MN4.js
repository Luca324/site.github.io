document.addEventListener("DOMContentLoaded", function () {
  $('form').on('submit', function (event) {
    event.preventDefault();
    $('.calculation').removeClass('hidden');

    const E1 = $("#E1").val() * counter1; // ЭДС с учетом направления (-, если влево)
    const E2 = $("#E2").val() * counter2;
    const E3 = $("#E3").val() * counter3;
    const E4 = $("#E4").val() * counter4;

    R1 = +$("#R1").val(); // + переводит из строки в число. это нужно для дальнеших вычислений
    R2 = +$("#R2").val();
    R3 = +$("#R3").val();
    R4 = +$("#R4").val();
    r1 = +$("#r1").val();
    r2 = +$("#r2").val();
    r3 = +$("#r3").val();
    r4 = +$("#r4").val();

    // Параллелим
    let Rpar1 = +((R2 + r2) * (R3 + r3) * (R4 + r4) / ((R2 + r2) * (R3 + r3) + (R2 + r2) * (R4 + r4) + (R4 + r4) * (R3 + r3))).toFixed(2);
    let Rpar2 = +((R1 + r1) * (R3 + r3) * (R4 + r4) / ((R1 + r1) * (R3 + r3) + (R1 + r1) * (R4 + r4) + (R4 + r4) * (R3 + r3))).toFixed(2);
    let Rpar3 = +((R2 + r2) * (R1 + r1) * (R4 + r4) / ((R2 + r2) * (R1 + r1) + (R2 + r2) * (R4 + r4) + (R4 + r4) * (R1 + r1))).toFixed(2);
    let Rpar4 = +((R1 + r1) * (R2 + r2) * (R3 + r3) / ((R1 + r1) * (R2 + r2) + (R1 + r1) * (R3 + r3) + (R3 + r3) * (R2 + r2))).toFixed(2);

    // R эквивалентное = Rпар + R главной ветви (без r)
    let Rek1 = +(Rpar1 + R1).toFixed(2);
    let Rek2 = +(Rpar2 + R2).toFixed(2);
    let Rek3 = +(Rpar3 + R3).toFixed(2);
    let Rek4 = +(Rpar4 + R4).toFixed(2);

    // I
    let I1_l = Math.abs(+(E1 / (Rek1 + r1)).toFixed(2)); // _l значит количество штрихов
    let I2_ll = Math.abs(+(E2 / (Rek2 + r2)).toFixed(2));
    let I3_lll = Math.abs(+(E3 / (Rek3 + r3)).toFixed(2));
    let I4_llll = Math.abs(+(E4 / (Rek4 + r4)).toFixed(2));

    // U_ab
    let U_l = (+(I1_l) * +(Rpar1)).toFixed(2);
    let U_ll = (+(I2_ll) * +(Rpar2)).toFixed(2);
    let U_lll = (+(I3_lll) * +(Rpar3)).toFixed(2);
    let U_llll = (+(I4_llll) * +(Rpar4)).toFixed(2);

    // I
    let I2_l = +(U_l / (R2 + r2)).toFixed(2);
    let I3_l = +(U_l / (R3 + r3)).toFixed(2);
    let I4_l = +(U_l / (R4 + r4)).toFixed(2);

    let I1_ll = +(U_ll / (R1 + r1)).toFixed(2);
    let I3_ll = +(U_ll / (R3 + r3)).toFixed(2);
    let I4_ll = +(U_ll / (R4 + r4)).toFixed(2);

    let I2_lll = +(U_lll / (R2 + r2)).toFixed(2);
    let I1_lll = +(U_lll / (R1 + r1)).toFixed(2);
    let I4_lll = +(U_lll / (R4 + r4)).toFixed(2);

    let I1_llll = +(U_llll / (R1 + r1)).toFixed(2);
    let I2_llll = +(U_llll / (R2 + r2)).toFixed(2);
    let I3_llll = +(U_llll / (R3 + r3)).toFixed(2);

    const myInnerHTML = function (id, isvariable = false, variable = NaN) {
      if (isvariable === false) {
        $('.' + id + '_formula').html($('#' + id).val());
      } else {
        console.log('_');
        $('.' + id + '_formula').html(variable);
        $('.' + id).html(variable);
      }
    };

    ids = ['R1', 'R2', 'R3', 'R4', 'r1', 'r2', 'r3', 'r4', 'E1', 'E2', 'E3', 'E4'];
    ids2 = { 'Rpar1': Rpar1, 'Rpar2': Rpar2, 'Rpar3': Rpar3, 'Rpar4': Rpar4, 'Rek1': Rek1, 'Rek2': Rek2, 'Rek3': Rek3, 'Rek4': Rek4, 'E1': E1, 'E2': E2, 'E3': E3, 'E4': E4, 'U_l': U_l, 'U_ll': U_ll, 'U_lll': U_lll, 'U_llll': U_llll, 'I1_l': I1_l, 'I1_ll': I1_ll, 'I1_lll': I1_lll, 'I1_llll': I1_llll, 'I2_l': I2_l, 'I2_ll': I2_ll, 'I2_lll': I2_lll, 'I2_llll': I2_llll, 'I3_l': I3_l, 'I3_ll': I3_ll, 'I3_lll': I3_lll, 'I3_llll': I3_llll, 'I4_l': I4_l, 'I4_ll': I4_ll, 'I4_lll': I4_lll, 'I4_llll': I4_llll };
    console.log(`'U_l': ${U_l}, 'U_ll': ${U_ll}, 'U_lll': ${U_lll}, 'U_llll': ${U_llll}`);
    for (i in ids) {
      myInnerHTML(ids[i]);
    }
    for (key in ids2) {
      myInnerHTML(key, true, ids2[key]);
    }

    // dir - direction

    const directions = function (counter1, counter2, counter3, counter4) {
      dir1_l = counter1;
      dir2_l = dir3_l = dir4_l = -1 * counter1;

      dir2_ll = counter2;
      dir1_ll = dir3_ll = dir4_ll = -1 * counter2;

      dir3_lll = counter3;
      dir1_lll = dir2_lll = dir4_lll = -1 * counter3;

      dir4_llll = counter4;
      dir1_llll = dir2_llll = dir3_llll = -1 * counter4;
    };
    directions(counter1, counter2, counter3, counter4);

    let str1 = `${I1_l * counter1 * dir1_l} + ${I1_ll * counter1 * dir1_ll} + ${I1_lll * counter1 * dir1_lll} + ${I1_llll * counter1 * dir1_llll} = ${((I1_l * counter1 * dir1_l) + (I1_ll * counter1 * dir1_ll) + (I1_lll * counter1 * dir1_lll) + (I1_llll * counter1 * dir1_llll)).toFixed(2)}`;
    let str2 = `${I2_l * counter2 * dir2_l} + ${I2_ll * counter2 * dir2_ll} + ${I2_lll * counter2 * dir2_lll} + ${I2_llll * counter2 * dir2_llll} = ${((I2_l * counter2 * dir2_l) + (I2_ll * counter2 * dir2_ll) + (I2_lll * counter2 * dir2_lll) + (I2_llll * counter2 * dir2_llll)).toFixed(2)}`;
    let str3 = `${I3_l * counter3 * dir3_l} + ${I3_ll * counter3 * dir3_ll} + ${I3_lll * counter3 * dir3_lll} + ${I3_llll * counter3 * dir3_llll} = ${((I3_l * counter3 * dir3_l) + (I3_ll * counter3 * dir3_ll) + (I3_lll * counter3 * dir3_lll) + (I3_llll * counter3 * dir3_llll)).toFixed(2)}`;
    let str4 = `${I4_l * counter4 * dir4_l} + ${I4_ll * counter4 * dir4_ll} + ${I4_lll * counter4 * dir4_lll} + ${I4_llll * counter4 * dir4_llll} = ${((I4_l * counter4 * dir4_l) + (I4_ll * counter4 * dir4_ll) + (I4_lll * counter4 * dir4_lll) + (I4_llll * counter4 * dir4_llll)).toFixed(2)}`;

    $('.current1').html(str1);
    $('.current2').html(str2);
    $('.current3').html(str3);
    $('.current4').html(str4);
  });
});
