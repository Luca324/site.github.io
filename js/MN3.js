document.addEventListener("DOMContentLoaded", function () {

  $('form').on('submit', function (event) {
    event.preventDefault();
    $('.calculation').removeClass('hidden')

    const E1 = $("#E1").val() * counter1 // ЭДС с учетом направления (-, если влево)
    const E2 = $("#E2").val() * counter2
    const E3 = $("#E3").val() * counter3

    R1 = +$("#R1").val() // + переводит из строки в число. это нужно для дальнеших вычислений
    R2 = +$("#R2").val()
    R3 = +$("#R3").val()
    r1 = +$("#r1").val()
    r2 = +$("#r2").val()
    r3 = +$("#r3").val()

    // Параллелим

    console.log('R1, R3, R1+R3', R1, R3, R1 + R3)
    let Rpar1 = +((R2 + r2) * (R3 + r3) / ((R2 + r2) + (R3 + r3))).toFixed(2);
    let Rpar2 = +((R1 + r1) * (R3 + r3) / ((R1 + r1) + (R3 + r3))).toFixed(2);
    let Rpar3 = +((R2 + r2) * (R1 + r1) / ((R2 + r2) + (R1 + r1))).toFixed(2);
    console.log('Rpar1, Rpar2, Rpar3', Rpar1, Rpar2, Rpar3)

    // R эквивалентное = Rпар + R главной ветви (без r)

    let Rek1 = +(Rpar1 + R1).toFixed(2)
    let Rek2 = +(Rpar2 + R2).toFixed(2)
    let Rek3 = +(Rpar3 + R3).toFixed(2)
    console.log('Rek1, Rek2, Rek3', Rek1, Rek2, Rek3)

    // I
    let I1_l = Math.abs(+(E1 / (Rek1 + r1)).toFixed(2)) // _l значит количество штрихов
    let I2_ll = Math.abs(+(E2 / (Rek2 + r2)).toFixed(2))
    let I3_lll = Math.abs(+(E3 / (Rek3 + r3)).toFixed(2))
    console.log('E1', 'E2', 'E3', E1, E2, E3,)
    console.log('r1', 'r2', 'r3', r1, r2, r3,)

    console.log('I1_l, I2_ll, I3_lll', I1_l, I2_ll, I3_lll)

    // U_ab

    let U_l = (+(I1_l) * +(Rpar1)).toFixed(2)
    let U_ll = (+(I2_ll) * +(Rpar2)).toFixed(2)
    let U_lll = (+(I3_lll) * +(Rpar3)).toFixed(2)

    // I
    let I2_l = +(U_l / (R2 + r2)).toFixed(2)
    let I3_l = +(U_l / (R3 + r3)).toFixed(2)

    let I1_ll = +(U_ll / (R1 + r1)).toFixed(2)
    let I3_ll = +(U_ll / (R3 + r3)).toFixed(2)

    let I2_lll = +(U_lll / (R2 + r2)).toFixed(2)
    let I1_lll = +(U_lll / (R1 + r1)).toFixed(2)


    const myInnerHTML = function (id, isvariable = false, variable = NaN) {
      if (isvariable === false) {
        $('.' + id + '_formula').html($('#' + id).val())
      } else {
        console.log('_')
        $('.' + id + '_formula').html(variable)
        $('.' + id).html(variable)
      }
    }
    ids = ['R1', 'R2', 'R3', 'r1', 'r2', 'r3', 'E1', 'E2', 'E3',]
    ids2 = { 'Rpar1': Rpar1, 'Rpar2': Rpar2, 'Rpar3': Rpar3, 'Rek1': Rek1, 'Rek2': Rek2, 'Rek3': Rek3, 'E1': E1, 'E2': E2, 'E3': E3, 'U_l': U_l, 'U_ll': U_ll, 'U_lll': U_lll, 'I1_l': I1_l, 'I1_ll': I1_ll, 'I1_lll': I1_lll, 'I2_l': I2_l, 'I2_ll': I2_ll, 'I2_lll': I2_lll, 'I3_l': I3_l, 'I3_ll': I3_ll, 'I3_lll': I3_lll }

    console.log(`'U_l': ${U_l},  'U_ll': ${U_ll},  'U_lll': ${U_lll},`)
    for (i in ids) {
      myInnerHTML(ids[i])
    }
    for (key in ids2) {
      myInnerHTML(key, true, ids2[key])
    }

    // dir - direction

    const directions = function (counter1, counter2, counter3) {
      dir1_l = counter1
      dir2_l = dir3_l = -1 * counter1

      dir2_ll = counter2
      dir1_ll = dir3_ll = -1 * counter2

      dir3_lll = counter3
      dir1_lll = dir2_lll = -1 * counter3

    }
    directions(counter1, counter2, counter3)

    let str1 = `${I1_l * counter1 * dir1_l} + ${I1_ll * counter1 * dir1_ll} + ${I1_lll * counter1 * dir1_lll} = ${((I1_l * counter1 * dir1_l) + (I1_ll * counter1 * dir1_ll) + (I1_lll * counter1 * dir1_lll)).toFixed(2)}`;
    let str2 = `${I2_l * counter2 * dir2_l} + ${I2_ll * counter2 * dir2_ll} + ${I2_lll * counter2 * dir2_lll} = ${((I2_l * counter2 * dir2_l) + (I2_ll * counter2 * dir2_ll) + (I2_lll * counter2 * dir2_lll)).toFixed(2)}`;
    let str3 = `${I3_l * counter3 * dir3_l} + ${I3_ll * counter3 * dir3_ll} + ${I3_lll * counter3 * dir3_lll} = ${((I3_l * counter3 * dir3_l) + (I3_ll * counter3 * dir3_ll) + (I3_lll * counter3 * dir3_lll)).toFixed(2)}`;

    $('.current1').html(str1)
    $('.current2').html(str2)
    $('.current3').html(str3)

  });
});