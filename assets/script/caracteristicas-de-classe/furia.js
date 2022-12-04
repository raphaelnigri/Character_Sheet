//Furia implacável
const furiaimplacavelCd = document.getElementById('furiaimplacavel__CD');
const furiaimplacavelUsos = document.getElementById('furiaimplacavel__usos');
const furiaimplacavelBtn = document.getElementById('roll__furiaimplacavel');

furiaimplacavelBtn.addEventListener('click', ()=>{
    if(!rolagemContainer.classList.contains('hidden')){
        fechaRolagem();
        return;
    }
    let modificador = document.querySelector(`[data-con]`).innerHTML;
    let d20Resultado = roll(20);

    rolagemExpressao.innerHTML = `1d20(${d20Resultado}) ${modificador}`;
    rolagemResultado.innerHTML = `${d20Resultado + parseInt(modificador)}`;


    if(parseInt(d20Resultado) + parseInt(modificador) >= parseInt(furiaimplacavelCd.value)){
        rolagemCD.innerHTML = `CD${furiaimplacavelCd.value} – sucesso`;
    }else{
        rolagemCD.innerHTML = `CD${furiaimplacavelCd.value} – fracasso`;
    }

    furiaimplacavelUsos.value++
    furiaimplacavelCd.value = 10 + (parseInt(furiaimplacavelUsos.value)* 5);
})
