document.addEventListener("DOMContentLoaded", function () {
  // при вводе R значение выводится на схему
  document.querySelector("#R1").addEventListener('input', () => {
    document.querySelector('#R1_shema_value').innerHTML = document.querySelector("#R1").value;
  })
  document.querySelector("#R2").addEventListener('input', () => {
    document.querySelector('#R2_shema_value').innerHTML = document.querySelector("#R2").value;
  })
  document.querySelector("#R3").addEventListener('input', () => {
    document.querySelector('#R3_shema_value').innerHTML = document.querySelector("#R3").value;
  })
  document.querySelector("#R4").addEventListener('input', () => {
    document.querySelector('#R4_shema_value').innerHTML = document.querySelector("#R4").value;
  })

  // при вводе E значение выводится на схему
  document.querySelector("#E1").addEventListener('input', () => {
    document.querySelector('#E1_shema_value').innerHTML = document.querySelector("#E1").value;
  })
  document.querySelector("#E2").addEventListener('input', () => {
    document.querySelector('#E2_shema_value').innerHTML = document.querySelector("#E2").value;
  })
  document.querySelector("#E3").addEventListener('input', () => {
    document.querySelector('#E3_shema_value').innerHTML = document.querySelector("#E3").value;
  })
  document.querySelector("#E4").addEventListener('input', () => {
    document.querySelector('#E4_shema_value').innerHTML = document.querySelector("#E4").value;
  })

  document.querySelector('form').addEventListener("submit", (event) => {
    event.preventDefault();
    const form = document.querySelector('form');
    // Расчет 

    const R1val = +(R1.value);
    const R2val = +(R2.value);
    const R3val = +(R3.value);
    const xR = +(x.value) + R1val
    const yR = +(y.value) + R2val
    const zR = +(z.value) + R3val
    const E1val = +(E1.value);
    const E2val = +(E2.value);
    const E3val = +(E3.value);
    const o1 = Number(counter1.value);
    const o2 = Number(counter2.value);
    const o3 = Number(counter3.value);
    const E1o1 = o1 * E1val
    const E2o2 = o2 * E2val
    const E3o3 = o3 * E3val
    // Вычисление формулы

    // Паралелим

    // 1 ветка
    let Rpar1 = (+(+(yR) * +(zR)) / ((+(yR) + +(zR)))).toFixed(2);

    // 2 ветка
    let Rpar2 = (+(+(xR) * +(zR)) / ((+(xR) + +(zR)))).toFixed(2);

    // 3 ветка
    let Rpar3 = (+(+(xR) * +(yR)) / ((+(xR) + +(yR)))).toFixed(2);

    // R эквивалентное (складываем)

    // 1 ветка
    let Rek1 = (+(Rpar1) + +(x.value)).toFixed(2)

    // 2 ветка
    let Rek2 = (+(Rpar2) + +(y.value)).toFixed(2)

    // 3 ветка
    let Rek3 = (+(Rpar3) + +(z.value)).toFixed(2)

    // I

    // 1 ветка
    let I11 = (+(E1o1) / (+(Rek1) + +(R1val))).toFixed(2)


    // 2 ветка
    let I22 = (+(E2o2) / (+(Rek2) + +(R2val))).toFixed(2)

    // 3 ветка
    let I33 = (+(E3o3) / (+(Rek3) + +(R3val))).toFixed(2)

    // U_ab

    // 1 ветка
    let Uab1 = (+(I11) * +(Rpar1)).toFixed(2)
    // 2 ветка
    let Uab2 = (+(I22) * +(Rpar2)).toFixed(2)
    // 3 ветка
    let Uab3 = (+(I33) * +(Rpar3)).toFixed(2)

    // I
    let I21 = (+(Uab1) / +(yR)).toFixed(2)
    let I31 = (+(Uab1) / +(zR)).toFixed(2)

    let I12 = (+(Uab2) / +(xR)).toFixed(2)
    let I32 = (+(Uab2) / +(zR)).toFixed(2)

    let I13 = (+(Uab3) / +(xR)).toFixed(2)
    let I23 = (+(Uab3) / +(yR)).toFixed(2)

    //Проверка
    let res1 = (+(I11) + +(I21) + +(I31)).toFixed(2)
    let res2 = (+(I12) + +(I22) + +(I32)).toFixed(2)
    let res3 = (+(I13) + +(I23) + +(I33)).toFixed(2)



    // Вывод результата в консоль
    console.log("Первая ветка: ", xR);
    console.log("Вторая ветка: ", yR);
    console.log("Третья ветка: ", zR);
    console.log("E1: ", E1val);
    console.log("E2: ", E2val);
    console.log("E3: ", E3val);
    console.log("R1: ", R1val);
    console.log("R2: ", R2val);
    console.log("R3: ", R3val);
    console.log("Cтрелка 1 источника: ", o1);
    console.log("Cтрелка 2 источника: ", o2);
    console.log("Cтрелка 3 источника: ", o3);
    console.log("Результат 1: ", res1);
    console.log("Результат 2 ", res2);
    console.log("Проверка 3", res3);



    console.log("---------------------------------------------------");

    // Вывод результата в текст
    //out1(1) - Первый источник (не дает скобки поставить)
    document.querySelector('.out11').innerHTML = Rpar1;  // R паралельное 1 источника
    document.querySelector('.out21').innerHTML = Rek1;   // R эквевалентное 1 источника
    document.querySelector('.out31').innerHTML = I11;    // Расчитваемый истинный ток
    document.querySelector('.out41').innerHTML = Uab1;   // Uab 1 источника
    document.querySelector('.out51').innerHTML = I21;    // Расчитваемый истинный ток
    document.querySelector('.out61').innerHTML = I31;    // Расчитваемый истинный ток


    document.querySelector('.out12').innerHTML = Rpar2; // R паралельное 2 источника
    document.querySelector('.out22').innerHTML = Rek2;  // R эквевалентное 2 источника
    document.querySelector('.out32').innerHTML = I22;   // Расчитваемый истинный ток
    document.querySelector('.out42').innerHTML = Uab2;  // Uab 1 источника
    document.querySelector('.out52').innerHTML = I12;   // Расчитваемый истинный ток
    document.querySelector('.out62').innerHTML = I32;   // Расчитваемый истинный ток


    document.querySelector('.out13').innerHTML = Rpar3; // R паралельное 3 источника
    document.querySelector('.out23').innerHTML = Rek3;  // R эквевалентное 3 источника
    document.querySelector('.out33').innerHTML = I33;   // Расчитваемый истинный ток
    document.querySelector('.out43').innerHTML = Uab3;  // Uab 1 источника
    document.querySelector('.out53').innerHTML = I13;   // Расчитваемый истинный ток
    document.querySelector('.out63').innerHTML = I23;   // Расчитваемый истинный ток

    document.querySelector('.out1').innerHTML = res1; // Результат 1
    document.querySelector('.out2').innerHTML = res2; // Результат 2
    document.querySelector('.out3').innerHTML = res3; // Результат 3

  });
});