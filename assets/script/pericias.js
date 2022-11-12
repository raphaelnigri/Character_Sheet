pericias = document.querySelectorAll('[data-pericia]');


pericias.forEach(pericia => {
    
    pericia.addEventListener('click', (evento) => {
        let prof = evento.target.parentNode.querySelector('[data-proficiencia]')
        let esp = evento.target.parentNode.querySelector('[data-expertise]')
        
        evento.preventDefault();

        
        if(!prof.checked){
            prof.checked = true;
            return;
        }

        if(prof.checked && !esp.checked){
            esp.checked = true;
            return;
        }

        if(prof.checked && esp.checked){
            esp.checked = false;
            prof.checked = false;
            return;
        }
    })
})
