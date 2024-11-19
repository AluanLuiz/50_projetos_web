function validationVote(){
    const age = parseInt(document.getElementById("age_input").value)
    const RadioYES = document.getElementById("YesRadio")
    const RadioNO = document.getElementById("NoRadio")
    
    const tc = title_check(RadioYES, RadioNO)
    age_validation(age, tc)
}

function title_check(RadioYES, RadioNO){
    if(RadioYES.checked){
        console.log("Possui titulo")
        return true
    }
    else if (RadioNO.checked){
        console.log("Nao possui titulo")
        return false
    }
    else{
        alert("Ocorreu um erro, tente preencher os campos novamente!")
        console.log(`error`)
    }
}

function age_validation(age, tc){
    if (age >= 0 && age < 16){
        console.log(age)
        document.getElementById("resposta").innerHTML = `${age} anos, não vota.`
    }
    else if (age >= 16 && age < 18){
        if (tc == true){
            document.getElementById("resposta").innerHTML = `${age} anos, possui titulo, portanto obrigatório o voto.`
        }
        else{
            document.getElementById("resposta").innerHTML = `${age} anos, não possui titulo`
        }
        console.log(age)
    }
    else if (age >= 18 && age < 70){        
        if (tc == true){
            document.getElementById("resposta").innerHTML = `${age} anos. Voto obrigatório com o titluo em mãos.`
        }
        else{
            document.getElementById("resposta").innerHTML = `${age} anos, voto obrigatório, faça ou renove seu titulo de eleitor.`
        }
        console.log(age)
    }
    else if (age >=70 && age < 101){
        if (tc == true){
            document.getElementById("resposta").innerHTML = `${age} anos. Voto facultatico/opcional.`
        }
        else{
            document.getElementById("resposta").innerHTML = `${age} anos. Voto facultatico/opcional.`
        }
        console.log(age)
    }
    else{
        alert("Ocorreu um erro, tente preencher os campos novamente!")
        console.log(`${age} error`)
    }
}