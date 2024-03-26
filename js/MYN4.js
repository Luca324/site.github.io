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

    const R1val = +(R1.value)
    const R2val = +(R2.value)
    const R3val = +(R3.value)
    const R4val = +(R4.value)
    const E1val = +(E1.value)
    const E2val = +(E2.value)
    const E3val = +(E3.value)
    const E4val = +(E4.value)
    const x1 = +(x.value) + R1val
    const y2 = +(y.value) + R2val
    const z3 = +(z.value) + R3val
    const w4 = +(w.value) + R4val
    const g1 = +((1 / x1).toFixed(3));
    const g2 = +((1 / y2).toFixed(3));
    const g3 = +((1 / z3).toFixed(3));
    const g4 = +((1 / w4).toFixed(3));
    const o1 = Number(counter1.value);
    const o2 = Number(counter2.value);
    const o3 = Number(counter3.value);
    const o4 = Number(counter4.value);
    const E1o1 = o1 * E1val
    const E2o2 = o2 * E2val
    const E3o3 = o3 * E3val
    const E4o4 = o4 * E4val

    // Вычисление формулы
    // U_ab
    let result = +(((E1o1 * g1 + E2o2 * g2 + E3o3 * g3) / (g1 + g2 + g3)).toFixed(2));
    // g
    let I1 = +(((E1o1 - result) * g1).toFixed(2));
    let I2 = +(((E2o2 - result) * g2).toFixed(2));
    let I3 = +(((E3o3 - result) * g3).toFixed(2));
    let I4 = +(((E4o4 - result) * g3).toFixed(2));

    // Вывод результата в консоль
    console.log("Первая ветка: ", x.value);
    console.log("Вторая ветка: ", form.elements.input2.value);
    console.log("Третья ветка: ", form.elements.input3.value);
    console.log("Четвертая ветка: ", form.elements.input40.value);
    console.log("E1: ", E1val);
    console.log("E2: ", E2val);
    console.log("E3: ", E3val);
    console.log("E4: ", E4val);
    console.log("R1: ", R1val);
    console.log("R2: ", R2val);
    console.log("R3: ", R3val);
    console.log("R4: ", R4val);
    console.log("Cтрелка 1 источника: ", o1);
    console.log("Cтрелка 2 источника: ", o2);
    console.log("Cтрелка 3 источника: ", o3);
    console.log("Cтрелка 4 источника: ", o4);
    console.log("x1: ", x1);
    console.log("y2: ", y2);
    console.log("z3 ", z3);
    console.log("w4 ", w4);
    console.log("g1: ", g1);
    console.log("g2: ", g2);
    console.log("g3: ", g3);
    console.log("g4: ", g4);
    console.log("Результат вычисления формулы Uab:", result);
    console.log("Результат вычисления формулы I1:", I1);
    console.log("Результат вычисления формулы I2:", I2);
    console.log("Результат вычисления формулы I3:", I3);
    console.log("Результат вычисления формулы I4:", I4);


    console.log("---------------------------------------------------");

    // Вывод результата в текст

    document.querySelector('.out1').innerHTML = g1;
    document.querySelector('.out2').innerHTML = g2;
    document.querySelector('.out3').innerHTML = g3;
    document.querySelector('.out4').innerHTML = g4;
    document.querySelector('.out5').innerHTML = result;
    document.querySelector('.out6').innerHTML = I1;
    document.querySelector('.out7').innerHTML = I2;
    document.querySelector('.out8').innerHTML = I3;
    document.querySelector('.out9').innerHTML = I4;

  });

});