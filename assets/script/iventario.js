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

    const removerItemTD = document.createElement('td');
    const removerItem = document.createElement('button');

    const descricaoLinha = document.createElement('tr');
    const descricaoTD = document.createElement('td');
    const descricao = document.createElement('textarea');

    const listaDeRecursos = document.getElementById('lista__recursos');
    const recurso = document.createElement('li');
    const recursoQuantidade = document.createElement('input');
    const recursoNome = document.createElement('input');
    const recursoBtn = document.createElement('button');

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
            temAtaqueTD.setAttribute('colspan','3');

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
            itemQ.addEventListener('input', ()=>{
                calculaItemPeso(itemPeso,itemQ);
                calculaPeso();
                recursoQuantidade.value = itemQ.value;
            });
            itemQ.addEventListener('input', ()=>{
                if(itemQ.value===''){
                    itemQ.value = 0;
                };
            });

            td2.appendChild(itemNome);
            itemNome.classList.add('iventario__item');
            itemNome.setAttribute('type','text');
            itemNome.addEventListener('input', ()=>{
                recursoNome.value = itemNome.value;
            })

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

            td4.appendChild(info);
            info.classList.add('btn--info');
            info.addEventListener('click', ()=>{
                info.classList.toggle('btn--info--ativo');
                equipadoLinha.classList.toggle('hidden');
                comoRecursoLinha.classList.toggle('hidden');
                temAtaqueLinha.classList.toggle('hidden');
                descricaoLinha.classList.toggle('hidden');
                removerItem.classList.toggle('hidden');
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
            usarComoRecursoInput.addEventListener('input', ()=>{
                if(!usarComoRecursoInput.checked){
                   return recurso.remove();
                }
                listaDeRecursos.appendChild(recurso);
                recurso.classList.add('li__recurso');

                recurso.appendChild(recursoQuantidade);
                recursoQuantidade.classList.add('caixa');
                recursoQuantidade.classList.add('caixa--recurso');
                recursoQuantidade.classList.add('caixa--quantidade');
                recursoQuantidade.setAttribute('type','number');
                recursoQuantidade.setAttribute('placeholder','0/0');
                recursoQuantidade.value = `${itemQ.value}`;
                recursoQuantidade.addEventListener('input', ()=>{
                    itemQ.value = recursoQuantidade.value;
                    calculaItemPeso(itemPeso,itemQ);
                    calculaPeso();
                })

                recurso.appendChild(recursoNome);
                recursoNome.classList.add('title');
                recursoNome.classList.add('title--sub');
                recursoNome.classList.add('title--recurso__input');
                recursoNome.setAttribute('type','text');
                recursoNome.setAttribute('placeholder','Nome');
                recursoNome.value = `${itemNome.value}`;
                recursoNome.addEventListener('input', ()=>{
                    itemNome.value = recursoNome.value;
                })

                recurso.appendChild(recursoBtn);
                recursoBtn.classList.add('btn--remove');
                recursoBtn.classList.add('btn--remove--recurso');
                recursoBtn.addEventListener('click', ()=>{
                    usarComoRecursoInput.checked = false
                    recurso.remove();
                })
            })

            temAtaqueTD.appendChild(temAtaqueLabel);
            temAtaqueLabel.classList.add('table__label');
            temAtaqueLabel.classList.add('table__label--ataque');
            temAtaqueLabel.innerHTML = 'Tem ataque.';
            temAtaqueLabel.appendChild(temAtaqueInput);
            temAtaqueInput.setAttribute('type','checkbox');

            temAtaqueLinha.appendChild(removerItemTD)
            removerItemTD.appendChild(removerItem);
            removerItem.classList.add('btn--remove');
            removerItem.classList.add('btn--remove__item');
            removerItem.setAttribute('aria-label','Remover Item.');
            removerItem.classList.add('hidden');
            removerItem.addEventListener('click', ()=>{
                recurso.remove();
                novoItem.remove();
            });

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
