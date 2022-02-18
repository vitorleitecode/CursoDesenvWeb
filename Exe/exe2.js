function parimpar (n) {
    if (n%2 == 0){
        return 'Par'
    } else {
        return 'Impar'
    }
}

var n = window.prompt('Digite um número');

window.alert(parimpar);


