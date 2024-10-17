// let age = parseInt(prompt("Idade: "))

// console.log(age)

function descobrir(){
    let age = document.getElementById("idade").value

    if (age > 18 && age < 100) {
        maioridade = " Maior de Idade. "
        document.getElementById("check").innerHTML = maioridade
        console.log(age + maioridade)
    } 
    else if (age > 100){
        maioridade = " Imortal ?????? "
        document.getElementById("check").innerHTML = maioridade
        console.log(age + maioridade)
    }
    else {
        maioridade = " Menor de Idade. "
        document.getElementById("check").innerHTML = maioridade
        console.log(age + maioridade)
    }
}