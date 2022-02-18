var l1 = window.prompt('Digite o valor de primeiro lado');
var l2 = window.prompt('Digite o valor de primeiro lado');
var l3 = window.prompt('Digite o valor de primeiro lado');

function tri (l1,l2,l3){
    if (l1<(l2+l3) && l2< (l1+l3) && l3< (l2+l1)){
        if (l1 == l2 && l2 == l3){
            console.log "Equilátero";
    } else if (l1 == l3 || l1 == l2 || l2 == l3){
       console.log "Isósceles" ;
    }else {
        console.log "Escaleno";
    }else {
        console.log "Não é um Triângulo";    
    }
    }
}

