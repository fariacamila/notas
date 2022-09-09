let nota1 = 5
let nota2 = 5
let optativa = 5

function calculaMedia(nota1, nota2, optativa) {
    if (optativa > nota1) {
        nota1 = optativa
    } else if (optativa > nota2) {
        nota2 = optativa
    }

    let media = (nota1 + nota2) / 2
    return media

    console.log(nota1, nota2, optativa)
}

let aluno1 = calculaMedia(nota1, nota2, optativa)

// console.log(media)


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

// calculaMedia(nota1, nota2, optativa)

// console.log('Nota 1 = ', nota1)
// console.log('Nota 2 = ', nota2)
// console.log('Média = ', nota1, '+', nota2, ' = ', media)
