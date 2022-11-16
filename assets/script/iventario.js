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
    const novoItem = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    const td4 = document.createElement('td');
    const itemQ = document.createElement('input');
    const itemNome = document.createElement('input');
    const itemPeso = document.createElement('input');
    const info = document.createElement('button');

    iventarioArrTables.forEach(element => {
        if(element.dataset.iventario == `${tabela}`){
            element.appendChild(novoItem);
            novoItem.appendChild(td1);
            td1.classList.add('table__td');
            novoItem.appendChild(td2);
            td2.classList.add('table__td');
            novoItem.appendChild(td3);
            td3.classList.add('table__td');
            novoItem.appendChild(td4);
            td4.classList.add('table__btn');

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
