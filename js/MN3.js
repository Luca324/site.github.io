document.addEventListener("DOMContentLoaded", function () {
  // при вводе R значение выводится на схему
  document.querySelector("#R1").addEventListener('input', () => {
    document.querySelector('#R1_shema_val()').innerHTML = document.querySelector("#R1").val();
  })
  document.querySelector("#R2").addEventListener('input', () => {
    document.querySelector('#R2_shema_val()').innerHTML = document.querySelector("#R2").val();
  })
  document.querySelector("#R3").addEventListener('input', () => {
    document.querySelector('#R3_shema_val()').innerHTML = document.querySelector("#R3").val();
  })

  // при вводе E значение выводится на схему
  document.querySelector("#E1").addEventListener('input', () => {
    document.querySelector('#E1_shema_val()').innerHTML = document.querySelector("#E1").val();
  })
  document.querySelector("#E2").addEventListener('input', () => {
    document.querySelector('#E2_shema_val()').innerHTML = document.querySelector("#E2").val();
  })
  document.querySelector("#E3").addEventListener('input', () => {
    document.querySelector('#E3_shema_val()').innerHTML = document.querySelector("#E3").val();
  })


  document.querySelector('form').addEventListener("submit", (event) => {
    event.preventDefault();

    // const R1val = +(document.querySelector("#E1").value);
    // const R2val = +(R2.value);
    // const R3val = +(R3.value);
    // const xR = +(x.value) + R1val
    // const yR = +(y.value) + R2val
    // const zR = +(z.value) + R3val
    // const E1val = +(E1.value);
    // const E2val = +(E2.value);
    // const E3val = +(E3.value);
    // const o1 = Number(counter1.value);
    // const o2 = Number(counter2.value);
    // const o3 = Number(counter3.value);
    // const E1o1 = o1 * E1val
    // const E2o2 = o2 * E2val
    // const E3o3 = o3 * E3val

    const E1_val = $("#E1").val()*$("#counter1").val()
    const E2_val = $("#E2").val()*$("#counter2").val()
    const E3_val = $("#E3").val()*$("#counter3").val()

    R1 = +$("#R1").val()
    R2 = +$("#R2").val()
    R3 = +$("#R3").val()
    r1 = +$("#r1").val()
    r2 = +$("#r2").val()
    r3 = +$("#r3").val()

    // Паралелим

    console.log('R1, R3, R1+R3', R1, R3, R1+R3)
    let Rpar1 = +(R2*R3/(R2+R3)).toFixed(2);
    let Rpar2 = +(R1*R3/(R1+R3)).toFixed(2);
    let Rpar3 = +(R2*R1/(R2+R1)).toFixed(2);
    console.log('Rpar1, Rpar2, Rpar3', Rpar1, Rpar2, Rpar3)

    // R эквивалентное = Rпар + R главной ветви (без r)

    let Rek1 = +(Rpar1+R1).toFixed(2)
    let Rek2 = +(Rpar2+R2).toFixed(2)
    let Rek3 = +(Rpar3+R3).toFixed(2)
    console.log('Rek1, Rek2, Rek3', Rek1, Rek2, Rek3)

    // I
    let I1_l = +(E1_val/(Rek1 + r1)).toFixed(2) // _l значит количество штрихов
    let I2_ll = +(E2_val/(Rek2 + r2)).toFixed(2)
    let I3_lll = +(E3_val/(Rek3 + r3)).toFixed(2)

    console.log('I1_l, I2_ll, I3_lll', I1_l, I2_ll, I3_lll)

    // U_ab

    let U_l = Math.abs((+(I1_l) * +(Rpar1)).toFixed(2))
    let U_ll = Math.abs((+(I2_ll) * +(Rpar2)).toFixed(2))
    let U_lll = Math.abs((+(I3_lll) * +(Rpar3)).toFixed(2))

    // I
    let I2_l = +(U_l/R2).toFixed(2)
    let I3_l = +(U_l/R3).toFixed(2)

    let I1_ll = +(U_ll/R1).toFixed(2)
    let I3_ll = +(U_ll/R3).toFixed(2)

    let I2_lll = +(U_lll/R2).toFixed(2)
    let I1_lll = +(U_lll/R1).toFixed(2)
    console.log()


    $('.equals').css('display', 'inline-block')
    $('.formulas_table').css('display', 'inline-block')

    
    const myInnerHTML = function(id, isvariable=false, variable=NaN) {
      if (isvariable === false) {
        $('.'+id+'_formula').html($('#'+id).val())
      } else {
        console.log('_')
        $('.'+id+'_formula').html(variable)
        $('.'+id).html(variable)
      }
    }
    ids = ['R1', 'R2', 'R3', 'r1', 'r2', 'r3']
    for (i in ids) {
      console.log('i =', ids[i])
      myInnerHTML(ids[i])
    }
    myInnerHTML('Rpar1', true, Rpar1)
    myInnerHTML('Rpar2', true, Rpar2)
    myInnerHTML('Rpar3', true, Rpar3)

    myInnerHTML('Rek1', true, Rek1)
    myInnerHTML('Rek2', true, Rek2)
    myInnerHTML('Rek3', true, Rek3)

    myInnerHTML('E1', true, E1_val)
    myInnerHTML('E2', true, E2_val)
    myInnerHTML('E3', true, E3_val)

    myInnerHTML('I1', true, I1_l)
    myInnerHTML('I2', true, I2_l)
    myInnerHTML('I3', true, I3_l)

    myInnerHTML('U_l', true, U_l)
    myInnerHTML('U_ll', true, U_ll)
    myInnerHTML('U_lll', true, U_lll)

    myInnerHTML('I2_l', true, I2_l)
    myInnerHTML('I3_l', true, I3_l)



    str1 = I1_l + ' ± ' + I1_ll + ' ± ' + I1_lll
    str2 = I2_l + ' ± ' + I2_ll + ' ± ' + I2_lll
    str3 = I3_l + ' ± ' + I3_ll + ' ± ' + I3_lll

    $('.out1').html(str1)
    $('.out2').html(str2)
    $('.out3').html(str3)

  });
});