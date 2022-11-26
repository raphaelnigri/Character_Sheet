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

    //botâo do recurso dado de vida
    let hitdiceBtn = document.getElementById('roll__hitdice');

    hitdiceBtn.addEventListener('click',()=>{
        rollHitdice();
    });
})

//calcula quantidade de dados de vida
function calculaHitdice(){
    let numeroDeDados = document.getElementById('char__lvl').innerHTML;

    totalHitdice.value = parseInt(numeroDeDados);
}

//muda a cor do select baseado no valor selecionado
function trocaCorDoHitdice(elemento){
    if(elemento.value == '4'){
        elemento.classList.remove('cor__str');
        elemento.classList.remove('cor__dex');
        elemento.classList.remove('cor__con');
        elemento.classList.remove('cor__int');
        elemento.classList.remove('cor__wis');
        elemento.classList.add('cor__cha');
    }
    if(elemento.value == '6'){
        elemento.classList.remove('cor__str');
        elemento.classList.remove('cor__dex');
        elemento.classList.remove('cor__con');
        elemento.classList.add('cor__int');
        elemento.classList.remove('cor__wis');
        elemento.classList.remove('cor__cha');
    }
    if(elemento.value == '8'){
        elemento.classList.remove('cor__str');
        elemento.classList.remove('cor__dex');
        elemento.classList.remove('cor__con');
        elemento.classList.remove('cor__int');
        elemento.classList.add('cor__wis');
        elemento.classList.remove('cor__cha');
    }
    if(elemento.value == '10'){
        elemento.classList.remove('cor__str');
        elemento.classList.add('cor__dex');
        elemento.classList.remove('cor__con');
        elemento.classList.remove('cor__int');
        elemento.classList.remove('cor__wis');
        elemento.classList.remove('cor__cha');
    }
    if(elemento.value == '12'){
        elemento.classList.add('cor__str');
        elemento.classList.remove('cor__dex');
        elemento.classList.remove('cor__con');
        elemento.classList.remove('cor__int');
        elemento.classList.remove('cor__wis');
        elemento.classList.remove('cor__cha');
    }
}

// rola o hitdice
function rollHitdice(){
    if(!rolagemContainer.classList.contains('hidden')){
        fechaRolagem();
        return;
    }

    if(quantidadeHitDice.value>0){
        let dado = document.getElementById('select__hitdice').value;
        let resultado = roll(dado);
        let modificador = document.querySelector(`[data-con]`).innerHTML;
        let cura = 0;

        cura = resultado + parseInt(modificador);

        rolagemExpressao.innerHTML = `1d${dado}(${resultado}) ${modificador}`;
        rolagemResultado.innerHTML = `${cura}`;

        curaPv(cura); //from estatistica.js
        quantidadeHitDice.value -= 1;
    }
}
