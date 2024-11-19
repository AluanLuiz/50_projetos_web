function checkRaido(){
    const porcentRadio = document.getElementById("porcent")
    const numberRadio = document.getElementById("valor")

    if (porcentRadio.checked){
        calc = "porcentagem"
        document.getElementById("resultado").innerHTML=""
        displayInput(calc)
        //console.log("Porcent")
    }
    else if (numberRadio.checked){
        calc = "numero"
        document.getElementById("resultado").innerHTML=""
        displayInput(calc)
        //console.log("Number")
    }
}

function displayInput(calc){
    const area_input = document.getElementById("inputArea")

    if (calc === "porcentagem"){
        area_input.innerHTML = `
            <input type="number" name="input_Number" id="input_Number" class="numInput" placeholder="Valor" min="0" step="0.01">
            <p>De</p>
            <input type="number" name="TotalNumeber" id="TotalNumeber" class="numInput"
             style="width:10rem;" placeholder="Valor Total" min="0">
        `
    }
    else if (calc === "numero"){
        area_input.innerHTML = `
            <input type="number" name="input_Porcent" id="input_Porcent" class="numInput" placeholder="%" min="0" step="0.01">
            <p>De</p>
            <input type="number" name="TotalNumeber" id="TotalNumeber" class="numInput"
             style="width:10rem;" placeholder="Valor Total" min="0">
        `
    }
    else{
        alert("Ocorreu um erro, escolha novamente!")
    }
}

function CalcPorcents(){
    if (calc === "porcentagem"){
        const number = parseFloat(document.getElementById("input_Number").value)
        const TotalNumber = parseFloat(document.getElementById("TotalNumeber").value)

        result = (number/TotalNumber) * 100        
        document.getElementById("resultado").innerHTML=`
        ${number} de ${TotalNumber} é ${result}%
        `
        console.log(number); console.log(TotalNumber); console.log(result); //tratamente de variavel
    }
    else if (calc === "numero"){
        const porcentagem = parseFloat(document.getElementById("input_Porcent").value)
        const TotalNumber = parseFloat(document.getElementById("TotalNumeber").value)

        result = (porcentagem*TotalNumber) / 100
        document.getElementById("resultado").innerHTML=`
        ${porcentagem}% de ${TotalNumber} é ${result}
        `
        console.log(porcentagem); console.log(TotalNumber); console.log(result); //tratamente de variavel
    }
}