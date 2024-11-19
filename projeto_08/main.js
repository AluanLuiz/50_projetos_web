function valid(){
    const ponts = parseInt(document.getElementById("points").value)
    margin_nots(ponts)
}

function margin_nots(ponts){
    if (ponts >= 0 && ponts < 50){
        document.getElementById("NotaLetra").innerHTML="Estude mais, F."
    }
    else if (ponts >= 50 && ponts < 60){
        document.getElementById("NotaLetra").innerHTML="Estude um pouco mais, E."
    }
    else if (ponts >= 60 && ponts < 70){
        document.getElementById("NotaLetra").innerHTML="Passou raspando, D."
    }
    else if (ponts >= 70 && ponts < 80){
        document.getElementById("NotaLetra").innerHTML="Regular, C."
    }
    else if (ponts >= 80 && ponts < 90){
        document.getElementById("NotaLetra").innerHTML="Bom, B."
    }
    else if (ponts >= 90 && ponts <= 100){
        document.getElementById("NotaLetra").innerHTML="Muito bom, A."
    }
    else if (ponts > 100){
        document.getElementById("NotaLetra").innerHTML="Nota Inválida"
    }
    else{
        document.getElementById("NotaLetra").innerHTML="Ocorreu um erro, tente de novo"
    }
}