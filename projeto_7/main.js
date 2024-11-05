function checkType(){
    const celsiusRadio = document.getElementById("celsius_type")
    const FahrenRadio = document.getElementById("fahren_type")

    if (celsiusRadio.checked) {
        option = "celsius_opt"
        displayInput(option)  

    } else if (FahrenRadio.checked) {
        option = "fahren_opt"
        displayInput(option) 

    } else{
        alert("Nenhuma opção selecionada!")
    }
}

function displayInput(option){
    const container_input = document.getElementById("container_input")

    if (option === "celsius_opt"){
        container_input.innerHTML=`
        <p>Insira a temperatura em Celsius:</p>
        <input type="number" class="numInput" name="celsius" id="celsius" value="0"><br><br>
        <button class="btn_img_1" id="convert" onclick="convert()">
            <img src="./imgs/transfer_icon.png" alt="ícone" class="icon_btn">
            Converter 
        </button><br>
        <p id="temp_convertido"></p>
        `
    }
    else if (option === "fahren_opt"){
        container_input.innerHTML=`
        <p>Insira a temperatura em Fahrenheit:</p>
        <input type="number" class="numInput" name="fahren" id="fahren" value="0"><br><br>
        <button class="btn_img_1" id="convert" onclick="convert()">
            <img src="./imgs/transfer_icon.png" alt="ícone" class="icon_btn">
            Converter 
        </button><br>
        <p id="temp_convertido"></p>
        `
    }
}

function convert(){
    if (option === "celsius_opt"){ 
        const temp_origin = parseInt(document.getElementById("celsius").value) // Extraindo o valor do input como inteiro
        const Fahren_convet = (1.8 * temp_origin) + 32 // Operaçao para converter
        const Fahren_finalResult = parseFloat(Fahren_convet.toFixed(2)) // Limitando casa decimal para 2 após a virgula 

        document.getElementById("temp_convertido").innerHTML = `
        A temperatura convertida é, ${Fahren_finalResult}°F`

        console.log(temp_origin+" = "+Fahren_finalResult) // Tratamento da operaçao via console
        console.log(typeof temp_origin) // Confirmando o tipo de variavel pelo console 

    }
    else if (option === "fahren_opt"){  
        const temp_origin = parseInt(document.getElementById("fahren").value) // Extraindo o valor do input como inteiro
        const Cels_convert = (temp_origin - 32) / 1.8 // Operaçao para converter
        const Cels_finalResult = parseFloat(Cels_convert.toFixed(2)) // Limitando casa decimal para 2 após a virgula
        
        document.getElementById("temp_convertido").innerHTML = `
        A temperatura convertida é, ${Cels_finalResult}°C`

        console.log(temp_origin+" = "+Cels_finalResult) // Tratamento da operaçao via console 
        console.log(typeof temp_origin) // Confirmando o tipo de variavel pelo console
    }
}