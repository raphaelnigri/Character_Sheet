const dadoSelecionado = document.getElementById('select__hitdice');
const totalHitdice = document.getElementById('total__hitdice');
const quantidadeHitDice = document.getElementById('quantidade__hitdice');

document.addEventListener('DOMContentLoaded', ()=>{
    trocaCorDoHitdice(dadoSelecionado);

    dadoSelecionado.addEventListener('change', ()=>{
        trocaCorDoHitdice(dadoSelecionado);
    });

    //limita a quantidade
    quantidadeHitDice.addEventListener('input', ()=>{
        if(parseInt(quantidadeHitDice.value) > totalHitdice.value){
            quantidadeHitDice.value = totalHitdice.value;
        }
    });
})

//calcula quantidade de dados de vida
function calculaHitdice(){
    let numeroDeDados = document.getElementById('char__lvl').innerHTML;

    totalHitdice.value = parseInt(numeroDeDados);
}

//muda a cor do select baseado no valor selecionado
function trocaCorDoHitdice(elemento){
    if(elemento.value == 'd4'){
        elemento.classList.remove('cor__str');
        elemento.classList.remove('cor__dex');
        elemento.classList.remove('cor__con');
        elemento.classList.remove('cor__int');
        elemento.classList.remove('cor__wis');
        elemento.classList.add('cor__cha');
    }
    if(elemento.value == 'd6'){
        elemento.classList.remove('cor__str');
        elemento.classList.remove('cor__dex');
        elemento.classList.remove('cor__con');
        elemento.classList.add('cor__int');
        elemento.classList.remove('cor__wis');
        elemento.classList.remove('cor__cha');
    }
    if(elemento.value == 'd8'){
        elemento.classList.remove('cor__str');
        elemento.classList.remove('cor__dex');
        elemento.classList.remove('cor__con');
        elemento.classList.remove('cor__int');
        elemento.classList.add('cor__wis');
        elemento.classList.remove('cor__cha');
    }
    if(elemento.value == 'd10'){
        elemento.classList.remove('cor__str');
        elemento.classList.add('cor__dex');
        elemento.classList.remove('cor__con');
        elemento.classList.remove('cor__int');
        elemento.classList.remove('cor__wis');
        elemento.classList.remove('cor__cha');
    }
    if(elemento.value == 'd12'){
        elemento.classList.add('cor__str');
        elemento.classList.remove('cor__dex');
        elemento.classList.remove('cor__con');
        elemento.classList.remove('cor__int');
        elemento.classList.remove('cor__wis');
        elemento.classList.remove('cor__cha');
    }
}