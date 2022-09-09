function calcular() {
    let resultado = document.querySelector('.notas')
    let nota1 = Number(document.querySelector('#n1').value)
    let nota2 = Number(document.querySelector('#n2').value)
    let optativa = Number(document.querySelector('#optativa').value)

    function calculaMedia(nota1, nota2, optativa) {
        if (optativa > nota1) {
            nota1 = optativa
        } else if (optativa > nota2) {
            nota2 = optativa
        }

        let media = (nota1 + nota2) / 2
        return media
    }

    console.log(media)


    // if (optativa <= 0 || optativa == null) {
    //     optativa = -1
    //     media = media + optativa
    //     console.log('Média', media)
    // }

    // if (media >= 6) {
    //     resultado.innerHTML = `Aprovado`
    // } else if (media < 3) {
    //     resultado.innerHTML = `Reprovado`
    // } else if (media <= 3 || media < 6) {
    //     resultado.innerHTML = `Exame`
    // }

    calculaMedia(nota1, nota2, optativa)

    // console.log('Nota 1 = ', nota1)
    // console.log('Nota 2 = ', nota2)
    // console.log('Média = ', nota1, '+', nota2, ' = ', media)
}