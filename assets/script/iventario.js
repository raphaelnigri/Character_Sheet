const iventarioArrTitulos = document.querySelectorAll('[data-iventario__titulo]');
const iventarioArrBtns = document.querySelectorAll('[data-iventario__botao]');
const iventarioArrTables = document.querySelectorAll('[data-iventario]');

const currentTable = document.querySelector('[data-currenttable]');
const addItemBtn = document.getElementById('additem');

const pesoDisplay = document.getElementById('peso');

iventarioArrBtns.forEach(element=>{
    let nome = element.dataset.iventario__botao;

    element.addEventListener('click', ()=>{
        escondeTextarea(nome);
    })
})

function escondeTextarea(nome){
    iventarioArrTables.forEach(element => {
        if(element.dataset.iventario != `${nome}`){
            element.classList.add('hidden');
        } else{
            element.classList.remove('hidden');
            currentTable.dataset.currenttable = nome
        }
    });

    iventarioArrTitulos.forEach(element => {
        if(element.dataset.iventario__titulo != `${nome}`){
            element.classList.add('hidden');
        } else{
            element.classList.remove('hidden');
        }
    });

    iventarioArrBtns.forEach(element => {
        if(element.dataset.iventario__botao != `${nome}`){
            element.classList.add('off');
        } else{
            element.classList.remove('off');
        }
    });
}

//adicionando espaço no iventario

document.addEventListener('DOMContentLoaded', ()=>{
    addItem('consumables');
    addItem('consumables');
    addItem('consumables');

    addItem('items');
    addItem('items');
    addItem('items');

    addItem('magicItems');
    addItem('magicItems');
    addItem('magicItems');

    addItem('questItems');
    addItem('questItems');
    addItem('questItems');
})

addItemBtn.addEventListener('click', () =>{
    addItem(currentTable.dataset.currenttable);
})

function addItem(tabela){
    const novoItem = document.createElement('tbody');
    const itemLinha = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    const td4 = document.createElement('td');
    const itemQ = document.createElement('input');
    const itemNome = document.createElement('input');
    const itemPeso = document.createElement('input');
    const info = document.createElement('button');

    const equipadoLinha = document.createElement('tr');
    const equipadoTD = document.createElement('td');
    const equipadoLabel = document.createElement('label');
    const equipadoInput = document.createElement('input');

    const comoRecursoLinha = document.createElement('tr');
    const comoRecursoTD = document.createElement('td');
    const usarComoRecursoLabel = document.createElement('label');
    const usarComoRecursoInput = document.createElement('input');

    const temAtaqueLinha = document.createElement('tr');
    const temAtaqueTD = document.createElement('td');
    const temAtaqueLabel = document.createElement('label');
    const temAtaqueInput = document.createElement('input');

    const descricaoLinha = document.createElement('tr');
    const descricaoTD = document.createElement('td');
    const descricao = document.createElement('textarea');

    iventarioArrTables.forEach(element => {
        if(element.dataset.iventario == `${tabela}`){
            element.appendChild(novoItem);
            novoItem.appendChild(itemLinha);
            itemLinha.appendChild(td1);
            td1.classList.add('table__td');
            itemLinha.appendChild(td2);
            td2.classList.add('table__td');
            itemLinha.appendChild(td3);
            td3.classList.add('table__td');
            itemLinha.appendChild(td4);
            td4.classList.add('table__btn');

            novoItem.appendChild(equipadoLinha);
            equipadoLinha.classList.add('hidden');
            equipadoLinha.appendChild(equipadoTD);
            equipadoTD.classList.add('table__td');
            equipadoTD.setAttribute('colspan','4');

            novoItem.appendChild(comoRecursoLinha);
            comoRecursoLinha.classList.add('hidden');
            comoRecursoLinha.appendChild(comoRecursoTD);
            comoRecursoTD.classList.add('table__td');
            comoRecursoTD.setAttribute('colspan','4');

            novoItem.appendChild(temAtaqueLinha);
            temAtaqueLinha.classList.add('hidden');
            temAtaqueLinha.appendChild(temAtaqueTD);
            temAtaqueTD.classList.add('table__td');
            temAtaqueTD.setAttribute('colspan','4');

            novoItem.appendChild(descricaoLinha);
            descricaoLinha.classList.add('hidden');
            descricaoLinha.appendChild(descricaoTD);
            descricaoTD.classList.add('table__td');
            descricaoTD.setAttribute('colspan','4');

            td1.appendChild(itemQ);
            itemQ.classList.add('iventario__quantidade');
            itemQ.setAttribute('type','number');
            itemQ.setAttribute('placeholder','0');
            itemQ.value=1;

            td2.appendChild(itemNome);
            itemNome.classList.add('iventario__item');
            itemNome.setAttribute('type','text');

            td3.appendChild(itemPeso);
            itemPeso.classList.add('iventario__quantidade');
            itemPeso.classList.add('iventario__quantidade--peso');
            itemPeso.setAttribute('type','number');
            itemPeso.setAttribute('placeholder','0');
            itemPeso.setAttribute('data-itempeso','0');
            itemPeso.addEventListener('input', ()=>{
                calculaItemPeso(itemPeso,itemQ);
                calculaPeso();
            });
            itemQ.addEventListener('input', ()=>{
                calculaItemPeso(itemPeso,itemQ);
                calculaPeso();
            });

            td4.appendChild(info);
            info.classList.add('btn--info');
            info.addEventListener('click', ()=>{
                info.classList.toggle('btn--info--ativo');
                equipadoLinha.classList.toggle('hidden');
                comoRecursoLinha.classList.toggle('hidden');
                temAtaqueLinha.classList.toggle('hidden');
                descricaoLinha.classList.toggle('hidden');
            });

            equipadoTD.appendChild(equipadoLabel);
            equipadoLabel.classList.add('table__label');
            equipadoLabel.innerHTML = 'Equipar.';
            equipadoLabel.appendChild(equipadoInput);
            equipadoInput.setAttribute('type','checkbox');

            comoRecursoTD.appendChild(usarComoRecursoLabel);
            usarComoRecursoLabel.classList.add('table__label');
            usarComoRecursoLabel.innerHTML = 'Usar como recurso.';
            usarComoRecursoLabel.appendChild(usarComoRecursoInput);
            usarComoRecursoInput.setAttribute('type','checkbox');

            temAtaqueTD.appendChild(temAtaqueLabel);
            temAtaqueLabel.classList.add('table__label');
            temAtaqueLabel.innerHTML = 'Tem ataque.';
            temAtaqueLabel.appendChild(temAtaqueInput);
            temAtaqueInput.setAttribute('type','checkbox');

            descricaoTD.appendChild(descricao);
            descricao.classList.add('textarea');
            descricao.setAttribute('rows','3');
            descricao.setAttribute('cols','25');
            descricao.setAttribute('placeholder','Descrição...');
        }
    })
}

function calculaItemPeso(pesoDoItem,quantidade){
    pesoDoItem.dataset.itempeso = parseFloat(pesoDoItem.value) * parseFloat(quantidade.value);
}

function calculaPeso(){
    let pesoTotal = 0;
    let pesoDosItemsArr = document.querySelectorAll('[data-itempeso]');

    pesoDosItemsArr.forEach(element=>{
        pesoTotal += parseFloat(element.dataset.itempeso);
    })

    pesoDisplay.innerHTML = `Peso Total: ${pesoTotal}kg`;
}
