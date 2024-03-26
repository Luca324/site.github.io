document.addEventListener("DOMContentLoaded", function () {R1
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
  
  
    document.querySelector('form').addEventListener("submit", (event) => {
      event.preventDefault();
      const form = document.querySelector('form');
      // проводимости ветвей
      const g1 = +(1/(document.querySelector("#R1").value+document.querySelector("#r1").value)).toFixed(3)
      const g2 = +(1/(document.querySelector("#R2").value+document.querySelector("#r2").value)).toFixed(3)
      const g3 = +(1/(document.querySelector("#R3").value+document.querySelector("#r3").value)).toFixed(3)
      console.log('g1, g2, g3 = ', g1, g2, g3)
      console.log('counter1,2,3 = ', document.querySelector("#counter1").value, document.querySelector("#counter2").value, document.querySelector("#counter3").value)
  
      //U 
      const E1_val = document.querySelector("#E1").value*document.querySelector("#counter1").value //потом надо все в формулы выводить и над стилизацией поработать
      const E2_val = document.querySelector("#E2").value*document.querySelector("#counter2").value
      const E3_val = document.querySelector("#E3").value*document.querySelector("#counter3").value
      const U = ((E1_val*g1 + E2_val*g2 + E3_val*g3)/(g1+g2+g3)).toFixed(2)
  
      console.log('U after = ', U)
  
      //ток для каждой ветви
      const I1 = ((E1_val-U)*g1).toFixed(2)
      const I2 = ((E2_val-U)*g2).toFixed(2)
      const I3 = ((E3_val-U)*g3).toFixed(2)
      console.log('I1, I2, I3 =', I1, I2, I3)
      
      // // Вывод результата и промежуточных вычислений в текст
      // document.querySelectorAll('.formulas_table').style.display = 'inline-block'
      const formulas = console.log(document.querySelectorAll('.formulas_table'))
      formulas.forEach(item => {
        item.style.display = 'inline-block'
      });
      document.querySelector('.equals').style.display = 'inline-block'
  
      document.querySelector('#R1_formula').innerHTML = document.querySelector("#R1").value;
      document.querySelector('#r1_formula').innerHTML = document.querySelector("#r1").value;
      document.querySelector('#g1_formula').innerHTML = g1;
      
      document.querySelector('#R2_formula').innerHTML = document.querySelector("#R2").value;
      document.querySelector('#r2_formula').innerHTML = document.querySelector("#r2").value;
      document.querySelector('#g2_formula').innerHTML = g2;
  
      document.querySelector('#R3_formula').innerHTML = document.querySelector("#R3").value;
      document.querySelector('#r3_formula').innerHTML = document.querySelector("#r3").value;
      document.querySelector('#g3_formula').innerHTML = g3;
    });
  });