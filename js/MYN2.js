$(document).ready(function () {

  $('form').on('submit', function (event) {
    event.preventDefault();
    $('.calculation').removeClass('hidden')

    // проводимости ветвей
    const g1 = +(1 / (+$("#R1").val() + +$("#r1").val())).toFixed(2)
    const g2 = +(1 / (+$("#R2").val() + +$("#r2").val())).toFixed(2)

    //U 
    const E1 = $("#E1").val() * counter1 // ЭДС с учетом направления (-, если влево)
    const E2 = $("#E2").val() * counter2
    const U = ((E1 * g1 + E2 * g2) / (g1 + g2)).toFixed(2)

    //ток для каждой ветви
    const I1 = ((E1 - U) * g1).toFixed(2)
    const I2 = ((E2 - U) * g2).toFixed(2)

    ids1 = ['R1', 'R2', 'r1', 'r2']
    ids2 = { 'g1': g1, 'g2': g2, 'E1': E1, 'E2': E2, 'U': U, 'I1': I1, 'I2': I2, }

    for (i in ids1) {
      myInnerHTML(ids1[i])
    }
    for (key in ids2) {
      myInnerHTML(key, true, ids2[key])
    }

  });
});