const addClassBtn = document.getElementById('class__btn--add');
const className = document.getElementById('class__nome');
const classLvl = document.getElementById('class__lvl');
const listaDeClasses = document.getElementById('lista__classes');
const lvlTotal = document.getElementById('char__lvl');
const bonusDeProficiencia = document.getElementById('bonusDeProficiencia');

classLvl.addEventListener('input', ()=>{
    if(classLvl.value > 20){
        classLvl.value = 20;
    }
})

addClassBtn.addEventListener('click', () =>{
    if(checaLimiteDeLvl(classLvl) && checaClasseRepetida(className.value) != 'repetido' && className.value != '' && classLvl.value != ''){
        addClass(className,classLvl);
        calculaLvl();
        classLvl.value = '';
    }
})

function addClass(nome,nivel){
    let novaClasse = document.createElement('li');
    let label = document.createElement('label');
    let lvl = document.createElement('input');
    let del = document.createElement('button');
    let arquetipo = document.createElement('input');
    let custom = document.createElement('input');
    //let customHitdice = document.createElement('input');
    
    listaDeClasses.appendChild(novaClasse);
    novaClasse.setAttribute('data-classe',`${nome.value.toLowerCase()}`);
    novaClasse.classList.add('wrapper');
    
    if(nome.value == 'custom'){
        novaClasse.appendChild(custom);
        custom.classList.add('class__nome');
        custom.setAttribute('type','text');
        custom.setAttribute('placeholder','Nome da Classe...');
        custom.setAttribute('aria-label','Nome da Classe');
    } else{
        novaClasse.setAttribute('data-hitdice',`${defineHitdice(nome.value.toLowerCase())}`);
        novaClasse.appendChild(label);
        label.classList.add('class__nome');
        label.setAttribute('for', `${nome.value.toLowerCase()}`);
        label.innerHTML = `${nome.value}:`;
    }

    novaClasse.appendChild(lvl);
    lvl.classList.add('class__input');
    lvl.classList.add('class__input--lvl');
    lvl.setAttribute('type','number');
    lvl.setAttribute('data-inputLvl','');
    if(nome.value != 'custom'){
        lvl.setAttribute('id',`${nome.value.toLowerCase()}`);
    }
    lvl.setAttribute('value',`${nivel.value}`);
    lvl.setAttribute('placeholder','lvl');
    lvl.setAttribute('aria-label','lvl');
    lvl.addEventListener('input', ()=>{
        if(lvl.value > 20){
            lvl.value = 20;
        }
    })
    lvl.addEventListener('blur', ()=>{
        if(lvl.value < 1){
            lvl.value = 1;
        }
        calculaLvl();
    })

    novaClasse.appendChild(del);
    del.classList.add('btn--remove');
    del.setAttribute('aria-label','Deleta classe.');
    del.addEventListener('click', ()=>{
        novaClasse.remove();
        calculaLvl();
        defineSaves();
        defineProficiencias();
    })

    novaClasse.appendChild(arquetipo);
    arquetipo.setAttribute('placeholder','Arquétipo...');
    arquetipo.setAttribute('aria-label','Insira seu arquétipo');
    arquetipo.setAttribute('type','Text');
    arquetipo.setAttribute('id',`${nome.value.toLowerCase()}__arquetipo`);
    arquetipo.classList.add('title--sub');
    arquetipo.classList.add('fonte__caracteristica');
    arquetipo.classList.add('arquetipo');

    defineSaves();
    defineProficiencias();
}

function checaClasseRepetida(nome){
    let lista = document.querySelectorAll('[data-classe]');
    let repetido = '';
    
    lista.forEach(element => {
        if(element.dataset.classe == nome && element.dataset.classe != 'custom'){
            repetido = 'repetido';
        }
    })
    return repetido;
}

function calculaLvl(){
    let nivelDeClasses = 0;
    let lista = document.querySelectorAll('[data-classe]');
    
    lista.forEach(element => {
        let nivel = element.querySelector('[data-inputLvl]').value;
        nivelDeClasses += parseInt(nivel);
    })

    lvlTotal.innerHTML = nivelDeClasses;
    calculabonusDeProficiencia();
    calculaPv();
    calculaXP();
    calculaPericiasPassivas();//from atributos.js
    calculaNumeroDeHitdices();//from hitdice.js
    defineCaracteristicas();
    ajustaRecursosPorLvl();
}

function calculaPv(){
    if(lvlTotal.innerHTML > 0 && listaDeClasses.firstChild.dataset.classe != 'custom'){
        let hitdices = document.querySelectorAll('[data-hitdice]');
        let pvMaximo = document.getElementById('pv__maximo');
        let pvInicial = document.querySelector('[data-hitdice]');
        let pvDeClasses = 0;

        hitdices.forEach(element => {
            let modCon = parseInt(document.querySelector('[data-con]').innerHTML);
            let nivelDaClasse = parseInt(element.querySelector('[data-inputLvl]').value);
            let pv = (element.dataset.hitdice)/2 + 1 + modCon;

            pvDeClasses += pv * nivelDaClasse;
        })
        pvMaximo.placeholder = pvDeClasses + (pvInicial.dataset.hitdice/2 - 1);
    } else{
        let pvMaximo = document.getElementById('pv__maximo');
        pvMaximo.placeholder = 0;
    }
}

function calculabonusDeProficiencia(){
    let baseDeCalculo =  parseInt(lvlTotal.innerHTML);

    if(isNaN(baseDeCalculo)){
        bonusDeProficiencia.innerHTML = `+2`;
    } else{
        bonusDeProficiencia.innerHTML = `+${2 + parseInt((baseDeCalculo - 1)/4)}`;
    }
}

function checaLimiteDeLvl(aumentoDeLvl){
    let lvlAtual = parseInt(lvlTotal.innerHTML);
    let lvlPretendido = lvlAtual + parseInt(aumentoDeLvl.value);

    if(lvlPretendido > 20){
        return false;
    }else{
        return true;
    }
}

//Xp para subir de lvl
function calculaXP(){
    let xpParaSubirLvl = document.getElementById('xp__subirlvl');
    let lvl = parseInt(lvlTotal.innerHTML);
    let xpArray = [300,900,2700,6500,14000,23000,34000,48000,64000,85000,100000,120000,140000,165000,195000,225000,265000,305000,355000,'max'];

    xpParaSubirLvl.innerHTML = `/${xpArray[lvl - 1]}`
}

//Define o dado de vida da classe selecionada
function defineHitdice(nome){
    if (nome == 'barbaro'){
        return 12;
    }
    if (nome == 'bardo'){
        return 8;
    }
    if (nome == 'clerigo'){
        return 8;
    }
    if (nome == 'druida'){
        return 8;
    }
    if (nome == 'guerreiro'){
        return 10;
    }
    if (nome == 'monge'){
        return 8;
    }
    if (nome == 'paladino'){
        return 10;
    }
    if (nome == 'patrulheiro'){
        return 10;
    }
    if (nome == 'ladino'){
        return 8;
    }
    if (nome == 'feiticeiro'){
        return 6;
    }
    if (nome == 'bruxo'){
        return 8;
    }
    if (nome == 'mago'){
        return 6;
    }
}

function defineSaves(){
    let listaSaves = document.querySelectorAll('[data-save__prof]');

    listaSaves.forEach(element =>{
        element.checked = false
    })

    if(listaDeClasses.firstChild && listaDeClasses.firstChild.dataset.classe != 'custom'){
        let primeiraClasse = listaDeClasses.querySelector('[data-classe]').dataset.classe;

        if (primeiraClasse == 'barbaro'){
            document.querySelector('[data-save__prof="str"]').checked = true
            document.querySelector('[data-save__prof="con"]').checked = true
        }
        if (primeiraClasse == 'bardo'){
            document.querySelector('[data-save__prof="dex"]').checked = true
            document.querySelector('[data-save__prof="cha"]').checked = true
        }
        if (primeiraClasse == 'clerigo'){
            document.querySelector('[data-save__prof="wis"]').checked = true
            document.querySelector('[data-save__prof="cha"]').checked = true
        }
        if (primeiraClasse == 'druida'){
            document.querySelector('[data-save__prof="wis"]').checked = true
            document.querySelector('[data-save__prof="int"]').checked = true
        }
        if (primeiraClasse == 'guerreiro'){
            document.querySelector('[data-save__prof="str"]').checked = true
            document.querySelector('[data-save__prof="dex"]').checked = true
        }
        if (primeiraClasse == 'monge'){
            document.querySelector('[data-save__prof="str"]').checked = true
            document.querySelector('[data-save__prof="dex"]').checked = true
        }
        if (primeiraClasse == 'paladino'){
            document.querySelector('[data-save__prof="wis"]').checked = true
            document.querySelector('[data-save__prof="str"]').checked = true
        }
        if (primeiraClasse == 'patrulheiro'){
            document.querySelector('[data-save__prof="str"]').checked = true
            document.querySelector('[data-save__prof="dex"]').checked = true
        }
        if (primeiraClasse == 'ladino'){
            document.querySelector('[data-save__prof="dex"]').checked = true
            document.querySelector('[data-save__prof="int"]').checked = true
        }
        if (primeiraClasse == 'feiticeiro'){
            document.querySelector('[data-save__prof="con"]').checked = true
            document.querySelector('[data-save__prof="cha"]').checked = true
        }
        if (primeiraClasse == 'bruxo'){
            document.querySelector('[data-save__prof="wis"]').checked = true
            document.querySelector('[data-save__prof="cha"]').checked = true
        }
        if (primeiraClasse == 'mago'){
            document.querySelector('[data-save__prof="wis"]').checked = true
            document.querySelector('[data-save__prof="int"]').checked = true
        }
    }
}


//recursos de classes:

function ajustaRecursosPorLvl(){
    //Furia
    let barbaroFuriaTotal = document.querySelector('[data-recursototal="barbaro__furia"]');
    let barbaroLvl = document.querySelector('[data-classe="barbaro"]');

    if(barbaroLvl){
        if(barbaroLvl.parentNode.querySelector('[data-inputLvl]').value <= 3){
            barbaroFuriaTotal.value = 2;
        }
        if(barbaroLvl.parentNode.querySelector('[data-inputLvl]').value >= 3){
            barbaroFuriaTotal.value = 3;
        }
        if(barbaroLvl.parentNode.querySelector('[data-inputLvl]').value >= 6){
            barbaroFuriaTotal.value = 4;
        }
        if(barbaroLvl.parentNode.querySelector('[data-inputLvl]').value >= 12){
            barbaroFuriaTotal.value = 5;
        }
        if(barbaroLvl.parentNode.querySelector('[data-inputLvl]').value >= 17){
            barbaroFuriaTotal.value = 6;
        }
    }

    //Canalizar Divindade
    let canalizarClerigoTotal = document.querySelector('[data-recursototal="clerigo__canalizar"]');
    let clerigoLvl = document.querySelector('[data-classe="clerigo"]');

    if(clerigoLvl){
        if(clerigoLvl.parentNode.querySelector('[data-inputLvl]').value < 6){
            canalizarClerigoTotal.value = 1;
        }
        if(clerigoLvl.parentNode.querySelector('[data-inputLvl]').value >= 6){
            canalizarClerigoTotal.value = 2;
        }
        if(clerigoLvl.parentNode.querySelector('[data-inputLvl]').value >= 18){
            canalizarClerigoTotal.value = 3;
        }
    }

    //Surto de Ação e Indomavel
    let surtoTotal = document.querySelector('[data-recursototal="guerreiro__surto"]');
    let indomavelTotal = document.querySelector('[data-recursototal="guerreiro__indomavel"]');
    let guerreiroLvl = document.querySelector('[data-classe="guerreiro"]');

    if(guerreiroLvl){
        if(guerreiroLvl.parentNode.querySelector('[data-inputLvl]').value < 13){
            indomavelTotal.value = 1;
        }
        if(guerreiroLvl.parentNode.querySelector('[data-inputLvl]').value >= 13){
            indomavelTotal.value = 2;
        }
        if(guerreiroLvl.parentNode.querySelector('[data-inputLvl]').value < 17){
            surtoTotal.value = 1;
        }
        if(guerreiroLvl.parentNode.querySelector('[data-inputLvl]').value >= 17){
            surtoTotal.value = 2;
            indomavelTotal.value = 3;
        }
    }

    //Fonte de Magia
    let fonteMagiaTotal = document.querySelector('[data-recursototal="feiticeiro__fonte"]');
    let feiticeiroLvl = document.querySelector('[data-classe="feiticeiro"]');

    if(feiticeiroLvl){
        fonteMagiaTotal.value = feiticeiroLvl.parentNode.querySelector('[data-inputLvl]').value;
    }

    //Ki
    let kiTotal = document.querySelector('[data-recursototal="monge__ki"]');
    let mongeLvl = document.querySelector('[data-classe="monge"]');

    if(mongeLvl){
        kiTotal.value = mongeLvl.parentNode.querySelector('[data-inputLvl]').value;
    }

    //Curar Pelas Mãos
    let curarTotal = document.querySelector('[data-recursototal="paladino__curar"]');
    let paladinoLvl = document.querySelector('[data-classe="paladino"]');

    if(paladinoLvl){
        curarTotal.value = (paladinoLvl.parentNode.querySelector('[data-inputLvl]').value)*5;
    }
}


// Proficiencias de Classe:

function defineProficiencias(){
    let primeiraClasse = document.querySelector('[data-classe]');
    let multiclasse = document.querySelectorAll('[data-classe]');
    let proficienciasDeClasse = document.querySelectorAll('[data-proficiencia__classe]');

    proficienciasDeClasse.forEach(element =>{
        element.classList.add('hidden');
    })

    if(primeiraClasse){
        primeiraClasse = primeiraClasse.dataset.classe;

        if (primeiraClasse == 'barbaro'){
            proficienciasDeClasse.forEach(element =>{
                let prof = element.dataset.proficiencia__classe;
                
                if (prof == 'shields'){
                    element.classList.remove('hidden');
                }
                if (prof == 'lightarmor'){
                    element.classList.remove('hidden');
                }
                if (prof == 'mediumarmor'){
                    element.classList.remove('hidden');
                }
                if (prof == 'simpleweapons'){
                    element.classList.remove('hidden');
                }
                if (prof == 'martialweapons'){
                    element.classList.remove('hidden');
                }
            })
        }
        
        if (primeiraClasse == 'bardo'){
            proficienciasDeClasse.forEach(element =>{
                let prof = element.dataset.proficiencia__classe;
                
                if (prof == 'lightarmor'){
                    element.classList.remove('hidden');
                }
                if (prof == 'mediumarmor'){
                    element.classList.remove('hidden');
                }
                if (prof == 'simpleweapons'){
                    element.classList.remove('hidden');
                }
                if (prof == 'simpleweapons'){
                    element.classList.remove('hidden');
                }
                if (prof == 'handcrossbows'){
                    element.classList.remove('hidden');
                }
                if (prof == 'longswords'){
                    element.classList.remove('hidden');
                }
                if (prof == 'shortswords'){
                    element.classList.remove('hidden');
                }
                if (prof == 'rapiers'){
                    element.classList.remove('hidden');
                }
                if (prof == 'instrument1'){
                    element.classList.remove('hidden');
                }
                if (prof == 'instrument2'){
                    element.classList.remove('hidden');
                }
                if (prof == 'instrument3'){
                    element.classList.remove('hidden');
                }
            })
        }

        if (primeiraClasse == 'clerigo'){
            proficienciasDeClasse.forEach(element =>{
                let prof = element.dataset.proficiencia__classe;
                
                if (prof == 'shields'){
                    element.classList.remove('hidden');
                }
                if (prof == 'lightarmor'){
                    element.classList.remove('hidden');
                }
                if (prof == 'mediumarmor'){
                    element.classList.remove('hidden');
                }
                if (prof == 'simpleweapons'){
                    element.classList.remove('hidden');
                }
            })
        }

        if (primeiraClasse == 'druida'){
            proficienciasDeClasse.forEach(element =>{
                let prof = element.dataset.proficiencia__classe;
                
                if (prof == 'shields'){
                    element.classList.remove('hidden');
                }
                if (prof == 'lightarmor'){
                    element.classList.remove('hidden');
                }
                if (prof == 'mediumarmor'){
                    element.classList.remove('hidden');
                }
                if (prof == 'clubs'){
                    element.classList.remove('hidden');
                }
                if (prof == 'daggers'){
                    element.classList.remove('hidden');
                }
                if (prof == 'darts'){
                    element.classList.remove('hidden');
                }
                if (prof == 'javelins'){
                    element.classList.remove('hidden');
                }
                if (prof == 'maces'){
                    element.classList.remove('hidden');
                }
                if (prof == 'staffs'){
                    element.classList.remove('hidden');
                }
                if (prof == 'scimitars'){
                    element.classList.remove('hidden');
                }
                if (prof == 'sickles'){
                    element.classList.remove('hidden');
                }
                if (prof == 'slings'){
                    element.classList.remove('hidden');
                }
                if (prof == 'spears'){
                    element.classList.remove('hidden');
                }
                if (prof == 'herbalism'){
                    element.classList.remove('hidden');
                }
            })
        }

        if (primeiraClasse == 'guerreiro'){
            proficienciasDeClasse.forEach(element =>{
                let prof = element.dataset.proficiencia__classe;
                
                if (prof == 'shields'){
                    element.classList.remove('hidden');
                }
                if (prof == 'lightarmor'){
                    element.classList.remove('hidden');
                }
                if (prof == 'mediumarmor'){
                    element.classList.remove('hidden');
                }
                if (prof == 'heavyarmor'){
                    element.classList.remove('hidden');
                }
                if (prof == 'simpleweapons'){
                    element.classList.remove('hidden');
                }
                if (prof == 'martialweapons'){
                    element.classList.remove('hidden');
                }
            })
        }

        if (primeiraClasse == 'monge'){
            proficienciasDeClasse.forEach(element =>{
                let prof = element.dataset.proficiencia__classe;
                
                if (prof == 'simpleweapons'){
                    element.classList.remove('hidden');
                }
                if (prof == 'shortswords'){
                    element.classList.remove('hidden');
                }
                if (prof == 'monktool'){
                    element.classList.remove('hidden');
                }
            })
        }

        if (primeiraClasse == 'paladino'){
            proficienciasDeClasse.forEach(element =>{
                let prof = element.dataset.proficiencia__classe;
                
                if (prof == 'shields'){
                    element.classList.remove('hidden');
                }
                if (prof == 'lightarmor'){
                    element.classList.remove('hidden');
                }
                if (prof == 'mediumarmor'){
                    element.classList.remove('hidden');
                }
                if (prof == 'heavyarmor'){
                    element.classList.remove('hidden');
                }
                if (prof == 'simpleweapons'){
                    element.classList.remove('hidden');
                }
                if (prof == 'martialweapons'){
                    element.classList.remove('hidden');
                }
            })
        }

        if (primeiraClasse == 'patrulheiro'){
            proficienciasDeClasse.forEach(element =>{
                let prof = element.dataset.proficiencia__classe;
                
                if (prof == 'shields'){
                    element.classList.remove('hidden');
                }
                if (prof == 'lightarmor'){
                    element.classList.remove('hidden');
                }
                if (prof == 'mediumarmor'){
                    element.classList.remove('hidden');
                }
                if (prof == 'simpleweapons'){
                    element.classList.remove('hidden');
                }
                if (prof == 'martialweapons'){
                    element.classList.remove('hidden');
                }
            })
        }

        if (primeiraClasse == 'ladino'){
            proficienciasDeClasse.forEach(element =>{
                let prof = element.dataset.proficiencia__classe;
                
                if (prof == 'lightarmor'){
                    element.classList.remove('hidden');
                }
                if (prof == 'simpleweapons'){
                    element.classList.remove('hidden');
                }
                if (prof == 'handcrossbows'){
                    element.classList.remove('hidden');
                }
                if (prof == 'longswords'){
                    element.classList.remove('hidden');
                }
                if (prof == 'shortswords'){
                    element.classList.remove('hidden');
                }
                if (prof == 'rapiers'){
                    element.classList.remove('hidden');
                }
                if (prof == 'thievestools'){
                    element.classList.remove('hidden');
                }
            })
        }

        if (primeiraClasse == 'feiticeiro'){
            proficienciasDeClasse.forEach(element =>{
                let prof = element.dataset.proficiencia__classe;
                
                if (prof == 'daggers'){
                    element.classList.remove('hidden');
                }
                if (prof == 'darts'){
                    element.classList.remove('hidden');
                }
                if (prof == 'staffs'){
                    element.classList.remove('hidden');
                }
                if (prof == 'slings'){
                    element.classList.remove('hidden');
                }
                if (prof == 'lightcrossbows'){
                    element.classList.remove('hidden');
                }
            })
        }

        if (primeiraClasse == 'bruxo'){
            proficienciasDeClasse.forEach(element =>{
                let prof = element.dataset.proficiencia__classe;
                
                if (prof == 'lightarmor'){
                    element.classList.remove('hidden');
                }
                if (prof == 'simpleweapons'){
                    element.classList.remove('hidden');
                }
            })
        }

        if (primeiraClasse == 'mago'){
            proficienciasDeClasse.forEach(element =>{
                let prof = element.dataset.proficiencia__classe;
                
                if (prof == 'daggers'){
                    element.classList.remove('hidden');
                }
                if (prof == 'darts'){
                    element.classList.remove('hidden');
                }
                if (prof == 'staffs'){
                    element.classList.remove('hidden');
                }
                if (prof == 'slings'){
                    element.classList.remove('hidden');
                }
                if (prof == 'lightcrossbows'){
                    element.classList.remove('hidden');
                }
            })
        }
    }

    multiclasse.forEach(element =>{
        if(element.dataset.classe != primeiraClasse){
            multiclasse = element.dataset.classe;

            if(multiclasse == 'barbaro'){
                proficienciasDeClasse.forEach(element =>{
                    let prof = element.dataset.proficiencia__classe;

                    if (prof == 'shields'){
                        element.classList.remove('hidden');
                    }
                    if (prof == 'simpleweapons'){
                        element.classList.remove('hidden');
                    }
                    if (prof == 'martialweapons'){
                        element.classList.remove('hidden');
                    }
                })
            }

            if(multiclasse == 'bardo'){
                proficienciasDeClasse.forEach(element =>{
                    let prof = element.dataset.proficiencia__classe;

                    if (prof == 'lightarmor'){
                        element.classList.remove('hidden');
                    }
                    if (prof == 'instrument1'){
                        element.classList.remove('hidden');
                    }
                })
            }

            if(multiclasse == 'clerigo'){
                proficienciasDeClasse.forEach(element =>{
                    let prof = element.dataset.proficiencia__classe;

                    if (prof == 'shields'){
                        element.classList.remove('hidden');
                    }
                    if (prof == 'lightarmor'){
                        element.classList.remove('hidden');
                    }
                    if (prof == 'mediumarmor'){
                        element.classList.remove('hidden');
                    }
                })
            }

            if(multiclasse == 'druida'){
                proficienciasDeClasse.forEach(element =>{
                    let prof = element.dataset.proficiencia__classe;

                    if (prof == 'shields'){
                        element.classList.remove('hidden');
                    }
                    if (prof == 'lightarmor'){
                        element.classList.remove('hidden');
                    }
                    if (prof == 'mediumarmor'){
                        element.classList.remove('hidden');
                    }
                })
            }

            if(multiclasse == 'guerreiro'){
                proficienciasDeClasse.forEach(element =>{
                    let prof = element.dataset.proficiencia__classe;

                    if (prof == 'shields'){
                        element.classList.remove('hidden');
                    }
                    if (prof == 'lightarmor'){
                        element.classList.remove('hidden');
                    }
                    if (prof == 'mediumarmor'){
                        element.classList.remove('hidden');
                    }
                    if (prof == 'simpleweapons'){
                        element.classList.remove('hidden');
                    }
                    if (prof == 'martialweapons'){
                        element.classList.remove('hidden');
                    }
                })
            }

            if(multiclasse == 'monge'){
                proficienciasDeClasse.forEach(element =>{
                    let prof = element.dataset.proficiencia__classe;

                    if (prof == 'simpleweapons'){
                        element.classList.remove('hidden');
                    }
                    if (prof == 'shortswords'){
                        element.classList.remove('hidden');
                    }
                })
            }

            if(multiclasse == 'paladino'){
                proficienciasDeClasse.forEach(element =>{
                    let prof = element.dataset.proficiencia__classe;

                    if (prof == 'shields'){
                        element.classList.remove('hidden');
                    }
                    if (prof == 'lightarmor'){
                        element.classList.remove('hidden');
                    }
                    if (prof == 'mediumarmor'){
                        element.classList.remove('hidden');
                    }
                    if (prof == 'simpleweapons'){
                        element.classList.remove('hidden');
                    }
                    if (prof == 'martialweapons'){
                        element.classList.remove('hidden');
                    }
                })
            }

            if(multiclasse == 'patrulheiro'){
                proficienciasDeClasse.forEach(element =>{
                    let prof = element.dataset.proficiencia__classe;

                    if (prof == 'shields'){
                        element.classList.remove('hidden');
                    }
                    if (prof == 'lightarmor'){
                        element.classList.remove('hidden');
                    }
                    if (prof == 'mediumarmor'){
                        element.classList.remove('hidden');
                    }
                    if (prof == 'simpleweapons'){
                        element.classList.remove('hidden');
                    }
                    if (prof == 'martialweapons'){
                        element.classList.remove('hidden');
                    }
                })
            }

            if(multiclasse == 'ladino'){
                proficienciasDeClasse.forEach(element =>{
                    let prof = element.dataset.proficiencia__classe;

                    if (prof == 'lightarmor'){
                        element.classList.remove('hidden');
                    }
                    if (prof == 'thievestools'){
                        element.classList.remove('hidden');
                    }
                })
            }

            if(multiclasse == 'bruxo'){
                proficienciasDeClasse.forEach(element =>{
                    let prof = element.dataset.proficiencia__classe;

                    if (prof == 'lightarmor'){
                        element.classList.remove('hidden');
                    }
                    if (prof == 'simpleweapons'){
                        element.classList.remove('hidden');
                    }
                })
            }
        }
    })
}
