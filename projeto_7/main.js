function checkType(){
    const celsiusRadio = document.getElementById("celsius_type")
    const FahrenRadio = document.getElementById("fahren_type")

    if (celsiusRadio.checked) {
        const option = "celsius_opt"
        displayInput(option)  

    } else if (FahrenRadio.checked) {
        const option = "fahren_opt"
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
        <input type="number" class="numInput" name="celsius" id="celsius" value="0"><br>
        <button class="btn_img_1" id="convert" onclick="convert()">
            <img src="./imgs/transfer_icon.png" alt="ícone" class="icon_btn">
            Converter 
        </button><br>

        `
    }
}

function convert(){

}