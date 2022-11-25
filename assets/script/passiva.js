document.addEventListener('DOMContentLoaded', ()=>{

    let selectPassiva = document.getElementById('passiva__select');

    let percepcaoPassiva = document.getElementById('percepcao__passiva');
    let intuicaoPassiva = document.getElementById('intuicao__passiva');
    let investigacaoPassiva = document.getElementById('investigacao__passiva');

    let percepcaoPassivaLabel = document.getElementById('percepcao__passiva__label');
    let intuicaoPassivaLabel = document.getElementById('intuicao__passiva__label');
    let investigacaoPassivaLabel = document.getElementById('investigacao__passiva__label');

    selectPassiva.addEventListener('input', ()=>{
        if(selectPassiva.value == 'Percepção'){
            percepcaoPassivaLabel.classList.remove('hidden');
            percepcaoPassiva.classList.remove('hidden');
            intuicaoPassivaLabel.classList.add('hidden');
            intuicaoPassiva.classList.add('hidden');
            investigacaoPassivaLabel.classList.add('hidden');
            investigacaoPassiva.classList.add('hidden');
        }

        if(selectPassiva.value == 'Intuição'){
            percepcaoPassivaLabel.classList.add('hidden');
            percepcaoPassiva.classList.add('hidden');
            intuicaoPassivaLabel.classList.remove('hidden');
            intuicaoPassiva.classList.remove('hidden');
            investigacaoPassivaLabel.classList.add('hidden');
            investigacaoPassiva.classList.add('hidden');
        }
        
        if(selectPassiva.value == 'Investigação'){
            percepcaoPassivaLabel.classList.add('hidden');
            percepcaoPassiva.classList.add('hidden');
            intuicaoPassivaLabel.classList.add('hidden');
            intuicaoPassiva.classList.add('hidden');
            investigacaoPassivaLabel.classList.remove('hidden');
            investigacaoPassiva.classList.remove('hidden');
        }
    })
})
