// при вводе R и E значение выводится на схему
const inputListener = function(id) {
  console.log('*in inputListener* id = ', id)
  document.querySelector('#'+ id).addEventListener('input', () => {
    console.log('input ' + id)
    $('#' + id + '_shema_value').text($("#" + id).val())
 
  })
  console.log('#' + id + 'shema_value'+ ' inputListener added. to ' +"#" + id)
}

document.addEventListener("DOMContentLoaded", function () {
  const inputIds = ['R1', 'R2', 'R3', 'E1', 'E2', 'E3']
  for (id in inputIds) {
    inputListener(inputIds[id])
    console.log('id = ' + id, 'inputIds[id] = ' + inputIds[id])
  }

  document.querySelector('form').addEventListener("submit", (event) => {
    event.preventDefault();

    // проводимости ветвей
    const g1 = +(1/($("#R1").val()+$("#r1").val())).toFixed(3)
    const g2 = +(1/($("#R2").val()+$("#r2").val())).toFixed(3)
    const g3 = +(1/($("#R3").val()+$("#r3").val())).toFixed(3)
    console.log('g1, g2, g3 = ', g1, g2, g3)
    console.log('counter1,2,3 = ', $("#counter1").val(), $("#counter2").val(), $("#counter3").val())

    //U 
    const E1_val = $("#E1").val()*$("#counter1").val()
    const E2_val = $("#E2").val()*$("#counter2").val()
    const E3_val = $("#E3").val()*$("#counter3").val()
    const U = ((E1_val*g1 + E2_val*g2 + E3_val*g3)/(g1+g2+g3)).toFixed(2)
    console.log('E1_val, E2_val, E3_val', E1_val, E2_val, E3_val)
    console.log('U after = ', U)

    //ток для каждой ветви
    const I1 = ((E1_val-U)*g1).toFixed(2)
    const I2 = ((E2_val-U)*g2).toFixed(2)
    const I3 = ((E3_val-U)*g3).toFixed(2)
    console.log('I1, I2, I3 =', I1, I2, I3)


    $('.equals').css('display', 'inline-block')
    $('.formulas_table').css('display', 'inline-block')

    const myInnerHTML = function(id, isvariable=false, variable=NaN) {
      if (isvariable === false) {
        $('.'+id+'_formula').html($('#'+id).val())
      } else {
        console.log('_')
        $('.'+id+'_formula').html(variable)
      }
    }
    ids = ['R1', 'R2', 'R3', 'r1', 'r2', 'r3']
    for (i in ids) {
      console.log('i =', ids[i])
      myInnerHTML(ids[i])
    }
    myInnerHTML('g1', true, g1)
    myInnerHTML('g2', true, g2)
    myInnerHTML('g3', true, g3)
    myInnerHTML('E1', true, E1_val)
    myInnerHTML('E2', true, E2_val)
    myInnerHTML('E3', true, E3_val)
    myInnerHTML('U', true, U)
    myInnerHTML('I1', true, I1)
    myInnerHTML('I2', true, I2)
    myInnerHTML('I3', true, I3)


  });
});