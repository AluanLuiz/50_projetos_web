const listAll = []

function adon(){
    const aditem = document.getElementById("addList").value
    // console.log(aditem)

    if (aditem !== ""){
        listAll.push(aditem)
        // document.getElementById("itens").innerHTML = listAll
        document.getElementById("itens").innerHTML = `${listAll.join("<br>")} `
        document.getElementById("info").innerHTML = "Item adicionado!"
        // console.log(listAll)
        document.getElementById("addList").value = ""
    }    
    else{
        document.getElementById("info").innerHTML = "Campo Vazio, erro ao adicionar."
    }
}