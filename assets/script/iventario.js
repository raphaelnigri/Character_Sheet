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
    let novoItem = document.createElement('tbody');
    let itemLinha = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');
    let itemQ = document.createElement('input');
    let itemNome = document.createElement('input');
    let itemPeso = document.createElement('input');
    let info = document.createElement('button');

    let equipadoLinha = document.createElement('tr');
    let equipadoTD = document.createElement('td');
    let equipadoLabel = document.createElement('label');
    let equipadoInput = document.createElement('input');

    let comoRecursoLinha = document.createElement('tr');
    let comoRecursoTD = document.createElement('td');
    let usarComoRecursoLabel = document.createElement('label');
    let usarComoRecursoInput = document.createElement('input');

    let temAtaqueLinha = document.createElement('tr');
    let temAtaqueTD = document.createElement('td');
    let temAtaqueLabel = document.createElement('label');
    let temAtaqueInput = document.createElement('input');

    let removerItemTD = document.createElement('td');
    let removerItem = document.createElement('button');

    let descricaoLinha = document.createElement('tr');
    let descricaoTD = document.createElement('td');
    let descricao = document.createElement('textarea');

    let listaDeRecursos = document.getElementById('lista__recursos');
    let recurso = document.createElement('li');
    let recursoQuantidade = document.createElement('input');
    let recursoNome = document.createElement('input');
    let recursoBtn = document.createElement('button');

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
            itemQ.value=1;
            itemQ.addEventListener('input', ()=>{
                if(itemQ.value == ''){
                    itemQ.value = 0;
                }
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
            itemNome.setAttribute('aria-label','nome do item');
            itemNome.setAttribute('type','text');
            itemNome.addEventListener('input', ()=>{
                recursoNome.value = itemNome.value;
            })

            td3.appendChild(itemPeso);
            itemPeso.classList.add('iventario__quantidade');
            itemPeso.classList.add('iventario__quantidade--peso');
            itemPeso.value = 0;
            itemPeso.setAttribute('aria-label','peso');
            itemPeso.setAttribute('type','number');
            itemPeso.setAttribute('data-itempeso','0');
            itemPeso.addEventListener('input', ()=>{
                if(itemPeso.value == ''){
                    itemPeso.value = 0;
                }
                calculaItemPeso(itemPeso,itemQ);
                calculaPeso();
            });

            td4.appendChild(info);
            info.classList.add('btn--info');
            info.setAttribute('aria-label','Abrir/fechar informaçôes');
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
                recurso.classList.add('li__recurso--iventario');

                recurso.appendChild(recursoQuantidade);
                recursoQuantidade.classList.add('caixa');
                recursoQuantidade.classList.add('caixa--recurso');
                recursoQuantidade.classList.add('caixa--quantidade');
                recursoQuantidade.setAttribute('aria-label','Quantidade');
                recursoQuantidade.setAttribute('type','number');
                recursoQuantidade.value = `${itemQ.value}`;
                recursoQuantidade.addEventListener('input', ()=>{
                    if(recursoQuantidade.value == ''){
                        recursoQuantidade.value = 0;
                    }
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
                recursoBtn.setAttribute('aria-label','Remover recurso.');
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
            descricao.setAttribute('aria-label','Descricao');
            descricao.setAttribute('rows','3');
            descricao.setAttribute('cols','25');
            descricao.setAttribute('placeholder','Descrição...');
        }
    })
}


//lidando com o peso
const tesouro = document.querySelectorAll('[data-tesouro]');
const pesoDoTesouro = document.getElementById('peso__tesouro');

document.addEventListener('DOMContentLoaded', ()=>{

    pesoDoTesouro.addEventListener('input', ()=>{
        calculaPeso();
    })

    tesouro.forEach(element =>{
        element.addEventListener('input', ()=>{
            if(element.value == ''){
                element.value = 0;
            }

            if(pesoDoTesouro.checked){
                calculaPeso();
            }
        })
    })
})

function calculaItemPeso(pesoDoItem,quantidade){
    pesoDoItem.dataset.itempeso = parseFloat(pesoDoItem.value) * parseFloat(quantidade.value);
}

function calculaPeso(){
    let pesoTotal = 0;
    let moedas = 0;
    let pesoDosItemsArr = document.querySelectorAll('[data-itempeso]');

    if(pesoDoTesouro.checked){
        tesouro.forEach(element=>{
            moedas += parseInt(element.value);
        })
        pesoTotal += parseFloat(moedas / 50 * 0.45359237);
    }

    pesoDosItemsArr.forEach(element=>{
        pesoTotal += parseFloat(element.dataset.itempeso);
    })

    pesoDisplay.innerHTML = `Peso Total: ${pesoTotal.toFixed(2)}kg`;
}
