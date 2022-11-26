document.addEventListener('DOMContentLoaded', ()=>{
    let pvAtual = document.getElementById('pv__atual');

    pvAtual.addEventListener('input', ()=>{
        let pvMaximo = document.getElementById('pv__maximo');

        if(pvAtual.value <= 0){
            pvAtual.value = 0;
        }

        if(pvAtual.value >= parseInt(pvMaximo.value)){
            pvAtual.value = parseInt(pvMaximo.value);
            return;
        }

        if(pvAtual.value >= parseInt(pvMaximo.placeholder) && !pvMaximo.value){
            pvAtual.value = parseInt(pvMaximo.placeholder);
            return;
        }
    })

})


function curaPv(n){
    let pvAtual = document.getElementById('pv__atual');
    let pvMaximo = document.getElementById('pv__maximo');


    if(parseInt(pvAtual.value) + n >= parseInt(pvMaximo.value)){
        pvAtual.value = parseInt(pvMaximo.value);
        return;
    }

    if(parseInt(pvAtual.value) + n >= parseInt(pvMaximo.placeholder) && !pvMaximo.value){
        pvAtual.value = parseInt(pvMaximo.placeholder);
        return;
    }

    pvAtual.value = parseInt(pvAtual.value) + n;
}