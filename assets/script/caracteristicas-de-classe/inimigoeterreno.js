//inimigo favorito
const inimigoSelectLista = document.querySelectorAll('[data-inimigofavorito__select]');
const inimigoOptLista = document.querySelectorAll('[data-inimigofavorito__opt]');

inimigoSelectLista.forEach(Element =>{
    Element.addEventListener('input', ()=>{
        let wrapper = document.querySelector(`[data-inimigofavorito__desc="${Element.dataset.inimigofavorito__select}"]`);

        if(Element.value == 'humanoides'){
            wrapper.classList.remove('hidden');
        } else{
            wrapper.classList.add('hidden');
        }

        escolheInimigo(Element);
    })
})

function escolheInimigo(seletor){
    limpaInimigo();
    inimigoOptLista.forEach(element =>{
        if(element.dataset.inimigofavorito__opt == `${seletor.value}`){
            element.hidden = true;
        }
    })
}

function limpaInimigo(){
    inimigoOptLista.forEach(element =>{
        if(element.dataset.inimigofavorito__opt != `${inimigoSelectLista[0].value}` && element.dataset.inimigofavorito__opt != `${inimigoSelectLista[1].value}` && element.dataset.inimigofavorito__opt != `${inimigoSelectLista[2].value}`){
            element.hidden = false;
        }
    });
}

//terreno favorito
const terrenoSelectLista = document.querySelectorAll('[data-terrenofavorito__select]');
const terrenoOptLista = document.querySelectorAll('[data-terrenofavorito__opt]');

terrenoSelectLista.forEach(Element =>{
    Element.addEventListener('input', ()=>{
        escolheTerreno(Element);
    })
})

function escolheTerreno(seletor){
    limpaTerreno();
    terrenoOptLista.forEach(element =>{
        if(element.dataset.terrenofavorito__opt == `${seletor.value}`){
            element.hidden = true;
        }
    })
}

function limpaTerreno(){
    terrenoOptLista.forEach(element =>{
        if(element.dataset.terrenofavorito__opt != `${terrenoSelectLista[0].value}` && element.dataset.terrenofavorito__opt != `${terrenoSelectLista[1].value}` && element.dataset.terrenofavorito__opt != `${terrenoSelectLista[2].value}`){
            element.hidden = false;
        }
    });
}
